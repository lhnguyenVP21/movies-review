const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <form className="space-y-4" onSubmit={handleFormSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {labelText}
        </label>
        <textarea
          ref={revText}
          rows={3}
          defaultValue={defaultValue}
          className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
      </div>
      <button
        type="submit"
        className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-white transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;