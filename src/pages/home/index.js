/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import moment from "moment";
import Axios from "axios";

import Navbar from "../../components/navbar/index";
import Modal from "../../components/modal";
import Button from "../../components/button";

import editIcon from "../../assets/icons/Edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import style from "./home.module.scss";
import EditSection from "./editSection/editSection";
import { createNotification } from "../../components/react-notification";
function HomePage() {
  const [contactList, setcontactList] = useState([]);
  const [params] = useSearchParams();
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState();

  console.log(params);

  useEffect(() => {
    Axios.get("http://localhost:3001/get-contact-list").then((response) => {
      setcontactList(response.data);
    });
  }, []);

  const deleteContact = async (id) => {
    try {
      Axios.delete(`http://localhost:3001/delete-contact-list/${id}`);
    } catch (err) {
      createNotification(
        "error",
        "Error",
        err?.response?.data?.message || "Server Error"
      );
      console.error(err);
    }
  };

  const onAdd = (value) => {
    setcontactList((prev) => [...prev, value]);
  };

  const onEdit = (value) => {
    setcontactList((prev) => {
      const newArr = [...prev];
      const indexFound = newArr.findIndex((e) => e._id === value._id);
      newArr[indexFound] = value;

      return newArr;
    });
  };

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
                <h3>{moment(contactlists.userDOB).format("DD/MM/YYYY")} </h3>
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
                  <img
                    src={deleteIcon}
                    onClick={() => setOpen(contactlists._id)}
                  />
                </div>
              </div>
              {index === edit && (
                <EditSection
                  onEdit={onEdit}
                  data={contactlists}
                  setEdit={setEdit}
                  setToggle={setToggle}
                />
              )}
            </>
          );
        })}
      </div>
      {toggle && (
        <EditSection onAdd={onAdd} setToggle={setToggle} setEdit={setEdit} />
      )}
      <div style={{ marginTop: 20 }}>
        <Button
          handleClick={() => {
            setEdit(null);
            setToggle(true);
          }}
          text="Add"
        />
      </div>

      <Modal open={open} handleClose={() => setOpen(false)}>
        <div className={style.modalHeader}>
          <h3>Delete Contact</h3>
          <p className={style.warningText}>
            Are you sure you want to delete this contact?
          </p>
          <Button
            btnClass={style.buttonStyle}
            text={"Yep"}
            handleClick={() => {
              deleteContact(open);

              setOpen(false);
            }}
          />
          <h3 className={style.cancelText} onClick={() => setOpen(false)}>
            Whoops, No, cancel this
          </h3>
        </div>
      </Modal>
    </>
  );
}

export default HomePage;
