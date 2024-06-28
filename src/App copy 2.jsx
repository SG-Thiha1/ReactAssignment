import React, { useEffect, useState } from "react";
import "./App.css";

const initialLists = {
  "Mg Aung Aung": ["Yangon update", "14/fdsfsdf12321", "092342344", "img5.png"],
  "Mg Hein Htet Soe": ["Yangon", "14/fdsfsdf12321", "092342355", "img5.png"],
  "Ma Yin Yin": ["Yangon", "14/fdsfsdf12321", "092342366", "img5.png"],
  "Mg Min Pike": ["Yangon", "14/fdsfsdf12321", "092342377", "img5.png"],
};

const App = () => {
  const [Lists, setLists] = useState(initialLists);
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
      const taskDetails = Lists[selectedTask];
      setNewTaskDetails({
        name: selectedTask,
        address: taskDetails[0],
        nrc: taskDetails[1],
        phone: taskDetails[2],
        image: taskDetails[3],
      });
    }
  }, [selectedTask, Lists]);

  const handleSelectTask = (e) => {
    setSelectedTask(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTaskDetails({ ...newTaskDetails, [name]: value });
  };

  return (
    <div>
      <h2>Array Assignment</h2>
      <div className="select-options">
        <h3>Array</h3>
        <select size="5" onChange={handleSelectTask}>
          <option disabled>Please Select</option>
          {Object.keys(Lists).map((list, index) => (
            <option key={index} value={list}>
              {list}
            </option>
          ))}
        </select>
        <div>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              value={newTaskDetails.name}
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div className="form-control">
            <label htmlFor="nrc">NRC</label>
            <input
              name="nrc"
              value={newTaskDetails.nrc}
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div className="form-control">
            <label htmlFor="address">Address</label>
            <input
              name="address"
              value={newTaskDetails.address}
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              value={newTaskDetails.phone}
              onChange={handleInputChange}
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
