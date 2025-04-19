// src/pages/AddBook.jsx
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book submitted (mock action)");
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input type="text" className="w-full border px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block font-semibold mb-1">Author</label>
          <input type="text" className="w-full border px-3 py-2 rounded" required />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea className="w-full border px-3 py-2 rounded" rows="4" required></textarea>
        </div>

        <div>
          <label className="block font-semibold mb-1">Cover Image URL</label>
          <input type="url" className="w-full border px-3 py-2 rounded" required />
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBook;
