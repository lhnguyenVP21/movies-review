import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const Trailer = () => {
    const [hasError, setHasError] = useState(false);
    const { ytTrailerId: key } = useParams();

    useEffect(() => {
        setHasError(false);
        document.body.classList.add('trailer-page');
        
        return () => {
            document.body.classList.remove('trailer-page');
        };
    }, [key]);

  if (!key) {
    return (
      <div className="trailer-error">
        <h2>Không tìm thấy video trailer</h2>
      </div>
    );
  }

  return (
    <div className="trailer-container">
      <iframe
        src={`https://www.youtube.com/embed/${key}?autoplay=1&controls=1&rel=0&modestbranding=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onError={() => setHasError(true)}
      />
      
      {hasError && (
        <div className="trailer-error-overlay">
          <h3>❌ Không thể tải video</h3>
          <button 
            onClick={() => window.open(`https://www.youtube.com/watch?v=${key}`, '_blank')}
            className="youtube-button"
          >
            Mở trên YouTube
          </button>
        </div>
      )}
    </div>
  );
}

export default Trailer