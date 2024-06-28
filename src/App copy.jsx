import React, { useState, useEffect } from "react";
import "./App.css";

const initialTasks = {
  "Mg Aung Aung": ["Yangon update", "14/fdsfsdf12321", "092342344", "img5.png"],
  "Mg Hein Htet Soe": ["Yangon", "14/fdsfsdf12321", "092342355", "img5.png"],
  "Ma Yin Yin": ["Yangon", "14/fdsfsdf12321", "092342366", "img5.png"],
  "Mg Min Pike": ["Yangon", "14/fdsfsdf12321", "092342377", "img5.png"],
};

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState("");
  const [newTaskDetails, setNewTaskDetails] = useState({
    name: "",
    address: "",
    nrc: "",
    phone: "",
    image: "",
  });

  useEffect(() => {
    if (selectedTask) {
      const taskDetails = tasks[selectedTask];
      setNewTaskDetails({
        name: selectedTask,
        address: taskDetails[0],
        nrc: taskDetails[1],
        phone: taskDetails[2],
        image: taskDetails[3],
      });
    }
  }, [selectedTask, tasks]);

  const handleSelectTask = (e) => {
    setSelectedTask(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewTaskDetails({ ...newTaskDetails, [name]: value });
    console.log(newTaskDetails);
  };

  const handleFileChange = (e) => {
    const fileName = e.target.files[0].name;
    setNewTaskDetails({ ...newTaskDetails, image: fileName });
  };

  const handleUpdate = () => {
    const updatedTasks = {
      ...tasks,
      [selectedTask]: [
        newTaskDetails.address,
        newTaskDetails.nrc,
        newTaskDetails.phone,
        newTaskDetails.image,
      ],
    };
    setTasks(updatedTasks);
    alert("Update success");
  };

  const handleRegister = () => {
    const updatedTasks = {
      ...tasks,
      [newTaskDetails.name]: [
        newTaskDetails.address,
        newTaskDetails.nrc,
        newTaskDetails.phone,
        newTaskDetails.image,
      ],
    };
    setTasks(updatedTasks);
    alert("Register success");
  };

  const handleCancel = () => {
    setNewTaskDetails({ name: "", address: "", nrc: "", phone: "", image: "" });
    setSelectedTask("");
  };

  return (
    <div className="app">
      <header>
        <h1>Array Assignment</h1>
      </header>
      <main>
        <div className="sidebar">
          <h3>Array</h3>
          <select onChange={handleSelectTask} size="5">
            <option>Please Select</option>
            {Object.keys(tasks).map((task, index) => (
              <option key={index} value={task}>
                {task}
              </option>
            ))}
          </select>
        </div>
        <div className="content">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={newTaskDetails.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={newTaskDetails.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>NRC</label>
            <input
              type="text"
              name="nrc"
              value={newTaskDetails.nrc}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={newTaskDetails.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="hidden"
              name="image"
              value={newTaskDetails.image}
              onChange={handleInputChange}
            />
            <input type="file" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <img
              src={`./images/${newTaskDetails.image}`}
              alt=""
              width="160px"
              height="160px"
            />
          </div>
          <div className="buttons">
            <button onClick={handleUpdate}>UPDATE</button>
            <button onClick={handleRegister}>REGISTER</button>
            <button onClick={handleCancel}>CANCEL</button>
          </div>
        </div>
      </main>
    </div>
  );
}

// export default App;
// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';

// const initialTasks = {
//   "Mg Aung Aung": ["Yangon update", "14/fdsfsdf12321", "092342344", "img5.png"],
//   "Mg Hein Htet Soe": ["Yangon", "14/fdsfsdf12321", "092342355", "img5.png"],
//   "Ma Yin Yin": ["Yangon", "14/fdsfsdf12321", "092342366", "img5.png"],
//   "Mg Min Pike": ["Yangon", "14/fdsfsdf12321", "092342377", "img5.png"],
// };

// function App() {
//   const [tasks, setTasks] = useState(initialTasks);
//   const [selectedTask, setSelectedTask] = useState("");
//   const [newTaskDetails, setNewTaskDetails] = useState({ name: "", address: "", nrc: "", phone: "", image: "" });

//   const nameRef = useRef();
//   const addressRef = useRef();
//   const nrcRef = useRef();
//   const phoneRef = useRef();
//   const imageRef = useRef();
//   const fileInputRef = useRef();

//   useEffect(() => {
//     if (selectedTask) {
//       const taskDetails = tasks[selectedTask];
//       setNewTaskDetails({
//         name: selectedTask,
//         address: taskDetails[0],
//         nrc: taskDetails[1],
//         phone: taskDetails[2],
//         image: taskDetails[3],
//       });
//     }
//   }, [selectedTask, tasks]);

//   const handleSelectTask = (e) => {
//     setSelectedTask(e.target.value);
//   };

//   const handleUpdate = () => {
//     const updatedTasks = {
//       ...tasks,
//       [selectedTask]: [
//         addressRef.current.value,
//         nrcRef.current.value,
//         phoneRef.current.value,
//         imageRef.current.value,
//       ],
//     };
//     setTasks(updatedTasks);
//     alert("Update success");
//   };

//   const handleRegister = () => {
//     const updatedTasks = {
//       ...tasks,
//       [nameRef.current.value]: [
//         addressRef.current.value,
//         nrcRef.current.value,
//         phoneRef.current.value,
//         imageRef.current.value,
//       ],
//     };
//     setTasks(updatedTasks);
//     alert("Register success");
//   };

//   const handleCancel = () => {
//     setNewTaskDetails({ name: "", address: "", nrc: "", phone: "", image: "" });
//     setSelectedTask("");
//   };

//   const handleFileChange = () => {
//     const fileName = fileInputRef.current.files[0].name;
//     setNewTaskDetails((prevDetails) => ({
//       ...prevDetails,
//       image: fileName,
//     }));
//   };

//   return (
//     <div className="app">
//       <header>
//         <h1>Array Assignment</h1>
//       </header>
//       <main>
//         <div className="sidebar">
//           <h3>Array</h3>
//           <select onChange={handleSelectTask} size='5'>
//             <option>Please Select</option>
//             {Object.keys(tasks).map((task, index) => (
//               <option key={index} value={task}>{task}</option>
//             ))}
//           </select>
//         </div>
//         <div className="content">
//           <div className="form-group">
//             <label>Name</label>
//             <input type="text" ref={nameRef} value={newTaskDetails.name} onChange={() => setNewTaskDetails((prev) => ({ ...prev, name: nameRef.current.value }))} />
//           </div>
//           <div className="form-group">
//             <label>Address</label>
//             <input type="text" ref={addressRef} value={newTaskDetails.address} onChange={() => setNewTaskDetails((prev) => ({ ...prev, address: addressRef.current.value }))} />
//           </div>
//           <div className="form-group">
//             <label>NRC</label>
//             <input type="text" ref={nrcRef} value={newTaskDetails.nrc} onChange={() => setNewTaskDetails((prev) => ({ ...prev, nrc: nrcRef.current.value }))} />
//           </div>
//           <div className="form-group">
//             <label>Phone</label>
//             <input type="text" ref={phoneRef} value={newTaskDetails.phone} onChange={() => setNewTaskDetails((prev) => ({ ...prev, phone: phoneRef.current.value }))} />
//           </div>
//           <div className="form-group">
//             <label>Image</label>
//             <input type="hidden" ref={imageRef} value={newTaskDetails.image} onChange={() => setNewTaskDetails((prev) => ({ ...prev, image: imageRef.current.value }))} />
//             <input type="file" ref={fileInputRef} onChange={handleFileChange} />
//           </div>
//           <div className="form-group">
//             <img src={`./images/${newTaskDetails.image}`} alt="" width="160px" height="160px" />
//           </div>
//           <div className="buttons">
//             <button onClick={handleUpdate}>UPDATE</button>
//             <button onClick={handleRegister}>REGISTER</button>
//             <button onClick={handleCancel}>CANCEL</button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
