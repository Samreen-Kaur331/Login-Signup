// // src/pages/Home.jsx
// import React, { useState, useEffect } from "react";
// import ProductForm from "../components/ProductForm";
// import RoutineList from "../components/RoutineList";

// export default function Home() {
//   const [routines, setRoutines] = useState(() => {
//     const saved = localStorage.getItem("routines");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("routines", JSON.stringify(routines));
//   }, [routines]);

//   const addRoutine = (routine) => {
//     setRoutines([...routines, routine]);
//   };

//   const clearAll = () => {
//     setRoutines([]);
//     localStorage.removeItem("routines");
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-4">
//         ✨ Your Skincare Routine Planner
//       </h2>

//       <ProductForm onAdd={addRoutine} />

//       <div className="flex justify-end mt-4">
//         <button
//           onClick={clearAll}
//           className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md"
//         >
//           Clear All
//         </button>
//       </div>

//       <RoutineList routines={routines} />
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import RoutineList from "../components/RoutineList";
import { skinTypeRoutines } from "../data/skinTypes";

export default function Home() {
  const [routines, setRoutines] = useState(() => {
    const saved = localStorage.getItem("userRoutines");
    return saved ? JSON.parse(saved) : [];
  });
  const [skinType, setSkinType] = useState("");

  useEffect(() => {
    localStorage.setItem("userRoutines", JSON.stringify(routines));
  }, [routines]);

  const addRoutine = (routine) => setRoutines([...routines, routine]);
  const clearAll = () => {
    setRoutines([]);
    localStorage.removeItem("userRoutines");
  };

  const handleSkinChange = (e) => setSkinType(e.target.value);

  const suggestedRoutine = skinType ? skinTypeRoutines[skinType] : null;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">🌸 GlowGuide</h2>

      <div className="mb-4">
        <label className="font-medium mr-2">Select Skin Type:</label>
        <select value={skinType} onChange={handleSkinChange} className="border rounded px-3 py-2">
          <option value="">--Choose--</option>
          {Object.keys(skinTypeRoutines).map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {suggestedRoutine && (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <h3 className="font-bold mb-2">Recommended Routine for {skinType} Skin:</h3>
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <h4 className="font-semibold">Morning</h4>
              <ul className="list-disc ml-5">
                {suggestedRoutine.Morning.map((step, idx) => <li key={idx}>{step}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Night</h4>
              <ul className="list-disc ml-5">
                {suggestedRoutine.Night.map((step, idx) => <li key={idx}>{step}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}

      <ProductForm onAdd={addRoutine} />
      <div className="flex justify-end mt-2">
        <button onClick={clearAll} className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded">
          Clear All
        </button>
      </div>

      <RoutineList routines={routines} />
    </div>
  );
}

