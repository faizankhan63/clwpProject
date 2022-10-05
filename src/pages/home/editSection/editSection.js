/* eslint-disable jsx-a11y/alt-text */
import Axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "../../../components/textfield";

import style from "./editSection.module.scss";

function EditSection({ setEdit, setToggle }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [image, setImage] = useState("");
  const [dob, setDob] = useState("");
  const [note, setNote] = useState("");

  const {
    register,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
      setEdit(null);
      setToggle(false);
    });
  };

  return (
    <>
      <form className={style.editSection}>
        <div>
          <TextField
            name={"image"}
            register={register}
            errorMessage={errors?.image?.message}
            placeholder={"Image"}
            wraperClass={style.inputWraper}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div>
          <TextField
            name={"firstName"}
            register={register}
            errorMessage={errors?.firstName?.message}
            placeholder={"First Name"}
            wraperClass={style.inputWraper}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div>
          <TextField
            name={"lastName"}
            register={register}
            errorMessage={errors?.lastName?.message}
            placeholder={"Last Name"}
            wraperClass={style.inputWraper}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <TextField
            name={"email"}
            register={register}
            errorMessage={errors?.email?.message}
            placeholder={"Email"}
            wraperClass={style.inputWraper}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <TextField
            name={"phoneNumber"}
            register={register}
            errorMessage={errors?.phoneNumber?.message}
            placeholder={"Phone number"}
            wraperClass={style.inputWraper}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div>
          <TextField
            name={"whatsAppNumber"}
            register={register}
            errorMessage={errors?.whatsAppNumber?.message}
            placeholder={"whatsapp number"}
            wraperClass={style.inputWraper}
            onChange={(event) => setWhatsappNumber(event.target.value)}
          />
        </div>

        <div>
          <TextField
            name={"userDOB"}
            register={register}
            errorMessage={errors?.userDOB?.message}
            placeholder={"DOB"}
            wraperClass={style.inputWraper}
            onChange={(event) => setDob(event.target.value)}
          />
        </div>
        <div>
          <TextField
            name={"note"}
            register={register}
            errorMessage={errors?.note?.message}
            placeholder={"Note"}
            wraperClass={style.inputWraper}
            onChange={(event) => setNote(event.target.value)}
          />
        </div>
        <div>
          <button
            onClick={() => {
              setEdit(null);
              setToggle(false);
            }}
          >
            Close
          </button>
          <button onClick={addList}>Save</button>
        </div>
      </form>
    </>
  );
}

export default EditSection;

const schema = yup
  .object({
    image: yup.string().required().typeError("image is required"),
    firstName: yup.string().required().typeError("first name is required"),
    lastName: yup.string().required().typeError("last name is required"),
    email: yup.string().required().typeError("email is required"),
    phoneNumber: yup.string().required().typeError("Phonenumber is required"),
    whatsAppNumber: yup
      .string()
      .required()
      .typeError("whatsapp number is required"),
    userDOB: yup.string().required().typeError("date of birth is required"),
    note: yup.string().required().typeError("note is required"),
  })
  .required();
