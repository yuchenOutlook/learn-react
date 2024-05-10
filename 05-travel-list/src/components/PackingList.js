import { useState } from "react";

import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
  }

  if (sortBy === "status") {
    sortedItems = items.slice().sort((a, b) => {
      return Number(a.packed) - Number(b.packed);
    });
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="status">Sort by status</option>
          <option value="description">Sort by description</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
