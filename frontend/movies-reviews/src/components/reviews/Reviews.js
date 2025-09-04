import { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import ReviewForm from '../reviewForm/ReviewForm';

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  // Debug: Log reviews whenever they change
  useEffect(() => {
    console.log("Reviews state updated:", reviews);
  }, [reviews]);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;
    
    if (!rev.value.trim()) {
      alert("Please write a review before submitting!");
      return;
    }

    try {
      console.log("Submitting review:", { reviewBody: rev.value, imdbId: movieId });
      
      const response = await api.post("/api/v1/reviews", { 
        reviewBody: rev.value, 
        imdbId: movieId 
      });

      const newReview = { 
        body: rev.value,
        id: Date.now() 
      };

      const currentReviews = reviews || [];
      const updatedReviews = [...currentReviews, newReview];

      rev.value = "";
      setReviews(updatedReviews);
    }
    catch (err) {
      console.error("Error adding review:", err);
      alert("Failed to submit review. Please try again.");
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <h3 className="text-2xl font-bold">Reviews</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-2">
        <div className="md:w-1/3 flex-shrink-0">
          <img src={movie?.poster} alt="" className="w-full rounded shadow" />
        </div>
        <div className="md:w-2/3">
          <div>
            <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
            <hr className="my-4" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Reviews ({reviews?.length || 0})</h4>
            {reviews && reviews.length > 0 ? (
              reviews.map((r, idx) => (
                <div key={r.id || idx} className="mb-4 p-3 bg-gray-800 rounded-lg">
                  <div className="text-white">{r.body}</div>
                  <hr className="my-2 border-gray-600" />
                </div>
              ))
            ) : (
              <div className="text-gray-400 italic">No reviews yet. Be the first to write one!</div>
            )}
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default Reviews;