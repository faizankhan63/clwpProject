/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Axios from "axios";

import Navbar from "../../components/navbar/index";

import editIcon from "../../assets/icons/Edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import style from "./home.module.scss";
import EditSection from "./editSection/editSection";
function HomePage() {
  const [contactList, setcontactList] = useState([]);
  const [params] = useSearchParams();
  const [toggle, setToggle] = useState(false);
  const [edit, setEdit] = useState();

  console.log(params);
  useEffect(() => {
    Axios.get("http://localhost:3001/get-contact-list").then((response) => {
      setcontactList(response.data);
    });
  }, []);

  console.log(contactList, "contactList");

  return (
    <>
      <Navbar />
      <div className={style.listTitle}>
        <span>Image</span>
        <span>First Name</span>
        <span>Last Name</span>
        <span>Email</span>
        <span>Phone#</span>
        <span>Whatsapp#</span>
        <span>DOB</span>
        <span>Note</span>
      </div>
      <div className={style.listContainer}>
        {contactList.map((contactlists, index) => {
          return (
            <>
              <div className={style.list} key={index}>
                <h3>{contactlists.image} </h3>
                <h3>{contactlists.firstName} </h3>
                <h3>{contactlists.lastName} </h3>
                <h3>{contactlists.email} </h3>
                <h3>{contactlists.phoneNumber}</h3>
                <h3>{contactlists.whatsAppNumber} </h3>
                <h3>{contactlists.userDOB} </h3>
                <h3>{contactlists.note} </h3>
                <div>
                  <img
                    onClick={() => {
                      setEdit(index);
                      setToggle(false);
                    }}
                    src={editIcon}
                    width={20}
                  />
                  <img src={deleteIcon} />
                </div>
              </div>
              {index === edit && (
                <EditSection setEdit={setEdit} setToggle={setToggle} />
              )}
            </>
          );
        })}
      </div>
      {toggle && <EditSection setToggle={setToggle} setEdit={setEdit} />}
      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => {
            setEdit(null);
            setToggle(true);
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default HomePage;
