import React, { useEffect, useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const nameLists = {
  "Mg Aung Aung": ["Yangon update", "14/fdsfsdf12321", "092342344", "img5.png"],
  "Mg Hein Htet Soe": ["Yangon", "14/fdsfsdf12321", "092342355", "img5.png"],
  "Ma Yin Yin": ["Yangon", "14/fdsfsdf12321", "092342366", "img5.png"],
  "Mg Min Pike": ["Yangon", "14/fdsfsdf12321", "092342377", "img5.png"],
};

const App = () => {
  const [Lists, setLists] = useState(nameLists);
  const [selectedUser, setSelectedUser] = useState("");
  const [user, setUser] = useState({
    name: "",
    address: "",
    nrc: "",
    phone: "",
    image: "",
  });

  useEffect(() => {
    if (selectedUser) {
      const userDetail = Lists[selectedUser];
      console.log(userDetail);
      setUser({
        name: selectedUser,
        address: userDetail[0],
        nrc: userDetail[1],
        phone: userDetail[2],
      });
      console.log(user);
    }
  }, [selectedUser, Lists]);

  function selectUser(e) {
    setSelectedUser(e.target.value);
  }

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const createUser = () => {
    const newUserList = {
      ...Lists,
      [user.name]: [user.address, user.nrc, user.phone, user.image],
    };
    setLists(newUserList);
    console.log(Lists);
  };

  return (
    <div>
      <h2>User Lists</h2>
      <div className="container-section">
        <div className="option-selects">
          <select onChange={selectUser} className="form-control">
            <option value="">Please select</option>
            {Object.keys(Lists).map((list, index) => (
              <option key={index}>{list}</option>
            ))}
          </select>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              onChange={inputHandle}
              className="form-control"
              value={user.name}
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              onChange={inputHandle}
              className="form-control"
              value={user.address}
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="nrc">NRC</label>
            <input
              id="nrc"
              name="nrc"
              onChange={inputHandle}
              className="form-control"
              value={user.nrc}
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              onChange={inputHandle}
              className="form-control"
              value={user.phone}
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              id="image"
              name="image"
              onChange={inputHandle}
              className="form-control"
              value=""
              type="text"
            />
          </div>
          <button className="btn bg-primary" onClick={createUser}>
            Create
          </button>
          <button className="btn bg-primary">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default App;
