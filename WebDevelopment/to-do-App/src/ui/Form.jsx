import { useState } from "react";
export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="bg-stone-200 p-4 sm:p-11 flex items-center justify-center gap-3.5" onSubmit={handleSubmit}>
      <h3 className="text-purple-950 mr-7 text-xl sm:text-4xl">What do you need for your trip?</h3>
      <input
            className="bg-pink-800 transition-all duration-300 w-44 sm:focus:w-60 p-2 focus:outline-none focus:ring-2 ring-blue-300 focus:bg-pink-400 rounded-2xl text-center"

        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="text-purple-950 bg-pink-400 border-none p-2 w-44 rounded-2xl hover:bg-pink-800 hover:outline-none hover:ring-2 ring-blue-300" >Add </button>
    </form>
  );
}
