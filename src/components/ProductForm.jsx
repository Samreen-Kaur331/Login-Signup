// // src/components/ProductForm.jsx
// import React, { useState } from "react";

// export default function ProductForm({ onAdd }) {
//   const [form, setForm] = useState({
//     name: "",
//     type: "",
//     time: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.type || !form.time) return alert("Fill all fields!");
//     onAdd(form);
//     setForm({ name: "", type: "", time: "" });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-4 rounded-xl shadow-md space-y-3"
//     >
//       <div className="grid grid-cols-3 gap-3">
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Product Name"
//           className="border rounded-md px-3 py-2"
//         />
//         <select
//           name="type"
//           value={form.type}
//           onChange={handleChange}
//           className="border rounded-md px-3 py-2"
//         >
//           <option value="">Select Type</option>
//           <option value="Cleanser">Cleanser</option>
//           <option value="Toner">Toner</option>
//           <option value="Serum">Serum</option>
//           <option value="Moisturizer">Moisturizer</option>
//           <option value="Sunscreen">Sunscreen</option>
//         </select>
//         <select
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//           className="border rounded-md px-3 py-2"
//         >
//           <option value="">Time</option>
//           <option value="Morning">Morning</option>
//           <option value="Night">Night</option>
//         </select>
//       </div>
//       <button
//         type="submit"
//         className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-md w-full"
//       >
//         Add Product
//       </button>
//     </form>
//   );
// }
import React, { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    time: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.type || !form.time) return alert("Fill all fields!");
    onAdd(form);
    setForm({ name: "", type: "", time: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-md space-y-3">
      <div className="grid grid-cols-3 gap-3">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="border rounded-md px-3 py-2"
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border rounded-md px-3 py-2"
        >
          <option value="">Select Type</option>
          <option value="Cleanser">Cleanser</option>
          <option value="Toner">Toner</option>
          <option value="Serum">Serum</option>
          <option value="Moisturizer">Moisturizer</option>
          <option value="Sunscreen">Sunscreen</option>
        </select>
        <select
          name="time"
          value={form.time}
          onChange={handleChange}
          className="border rounded-md px-3 py-2"
        >
          <option value="">Time</option>
          <option value="Morning">Morning</option>
          <option value="Night">Night</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-md w-full"
      >
        Add Product
      </button>
    </form>
  );
}
