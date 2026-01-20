// // src/components/RoutineList.jsx
// import React from "react";
// import { Sun, Moon, Droplets } from "lucide-react";

// export default function RoutineList({ routines }) {
//   const morning = routines.filter((r) => r.time === "Morning");
//   const night = routines.filter((r) => r.time === "Night");

//   return (
//     <div className="mt-6 grid gap-6 md:grid-cols-2">
//       <div className="bg-pink-100 rounded-xl p-4 shadow">
//         <h3 className="flex items-center gap-2 text-lg font-bold">
//           <Sun className="text-yellow-500" /> Morning Routine
//         </h3>
//         {morning.length > 0 ? (
//           morning.map((item, i) => (
//             <div key={i} className="p-2 border-b">
//               💧 {item.name} ({item.type})
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 text-sm mt-2">No products added yet.</p>
//         )}
//       </div>

//       <div className="bg-pink-100 rounded-xl p-4 shadow">
//         <h3 className="flex items-center gap-2 text-lg font-bold">
//           <Moon className="text-blue-500" /> Night Routine
//         </h3>
//         {night.length > 0 ? (
//           night.map((item, i) => (
//             <div key={i} className="p-2 border-b">
//               🌙 {item.name} ({item.type})
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 text-sm mt-2">No products added yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }
import React from "react";
import RoutineCard from "./RoutineCard";

export default function RoutineList({ routines }) {
  const morning = routines.filter(r => r.time === "Morning");
  const night = routines.filter(r => r.time === "Night");

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <div className="bg-pink-100 rounded-xl p-4 shadow">
        <h3 className="text-lg font-bold mb-2">Morning Routine</h3>
        {morning.length > 0 ? morning.map((item, idx) => <RoutineCard key={idx} product={item} />)
          : <p className="text-gray-500">No products added.</p>}
      </div>

      <div className="bg-pink-100 rounded-xl p-4 shadow">
        <h3 className="text-lg font-bold mb-2">Night Routine</h3>
        {night.length > 0 ? night.map((item, idx) => <RoutineCard key={idx} product={item} />)
          : <p className="text-gray-500">No products added.</p>}
      </div>
    </div>
  );
}
