import React from "react";

export default function RoutineCard({ product }) {
  return (
    <div className="p-2 border-b flex justify-between">
      <span>{product.name} ({product.type})</span>
    </div>
  );
}
