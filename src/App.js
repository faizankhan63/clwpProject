import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [contactList, setcontactList] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [image, setImage] = useState("");
  const [dob, setDob] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/get-contact-list").then((response) => {
      setcontactList(response.data);
    });
  }, []);

  const addList = () => {
    Axios.post("http://localhost:3001/add-contact-list", {
      firstName,
      lastName,
      email,
      phoneNumber,
      whatsAppNumber: whatsappNumber,
      image,
      userDOB: dob,
      note,
    }).then((response) => {
      alert("List added");
    });
  };

  return (
    <div className="App">
      <div>
        {contactList.map((contactlists) => {
          return (
            <div
              style={{
                border: "3px solid black",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <h3>First Name:{contactlists.firstName} </h3>
              <h3>Last Name:{contactlists.lastName} </h3>
              <h3>Email:{contactlists.email} </h3>
              <h3>phone number:{contactlists.phoneNumber}</h3>
              <h3>whatsapp number:{contactlists.whatsAppNumber} </h3>
              <h3>image:{contactlists.image} </h3>
              <h3>DOB:{contactlists.userDOB} </h3>
              <h3>Note:{contactlists.note} </h3>
            </div>
          );
        })}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <span>First name: </span>
            <input
              onChange={(event) => setFirstName(event.target.value)}
              type={"text"}
            />
          </div>
          <div>
            <span>Last name: </span>
            <input
              onChange={(event) => setLastName(event.target.value)}
              type={"text"}
            />
          </div>
          <div>
            <span>email: </span>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type={"text"}
            />
          </div>
          <div>
            <span>phone#: </span>
            <input
              onChange={(event) => setPhoneNumber(event.target.value)}
              type={"text"}
            />
          </div>
          <div>
            <span>whatsapp#: </span>
            <input
              onChange={(event) => setWhatsappNumber(event.target.value)}
              type={"text"}
            />
          </div>
          <div>
            <span>image: </span>
            <input
              onChange={(event) => setImage(event.target.value)}
              type={"text"}
            />
          </div>
          <div>
            <span>dob: </span>
            <input
              onChange={(event) => setDob(event.target.value)}
              type={"text"}
            />
          </div>
          <div>
            <span>note: </span>
            <input
              onChange={(event) => setNote(event.target.value)}
              type={"text"}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "30px",
        }}
      >
        <button onClick={addList}>Add</button>
      </div>
    </div>
  );
}

export default App;
