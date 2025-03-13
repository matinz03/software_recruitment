import { useState } from "react";
export default function PackingList({
  listobj,
  itemDelete,
  onPacked,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedList;
  if (sortBy === "input") sortedList = listobj.slice();
  if (sortBy === "alphabet") {
    sortedList = listobj
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedList = listobj.slice().sort((a, b) => Number(b.packed - a.packed));
  }
  return (
    <div className="text-sm sm:text-xl font-semibold bg-stone-300 text-fuchsia-900 p-3 flex justify-center flex-col overflow-hidden items-center gap-16 h-full">
      <ul className="w-[70%] overflow-auto scroll-auto flex flex-wrap gap-5 justify-between ">
        {sortedList.map((item) => (
          <li className="w-max gap-5 inline-flex rounded-md hover:bg-stone-100" key={item.id}>
            <input
            className="accent-blue-900"
              type="checkbox"
              checked={item.packed}
              onChange={() => onPacked(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.description}
            </span>
            <button onClick={() => itemDelete(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center">
        <select className="mr-30 bg-stone-400 rounded-md hover:underline" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input </option>
          <option value="alphabet"> sort alphabetically </option>
          <option value="packed"> sort by status </option>
        </select>
        <button className="bg-stone-400 rounded-md hover:underline" onClick={onClearList}>clear list</button>
      </div>
    </div>
  );
}
