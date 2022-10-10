/* eslint-disable jsx-a11y/alt-text */
import Axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "../../../components/textfield";
import DatePicker from "../../../components/date-picker";

import greenCrossIcon from "../../../assets/images/crossIcon.svg";

import style from "./editSection.module.scss";
import Button from "../../../components/button";
import { createNotification } from "../../../components/react-notification";

function EditSection({ setEdit, onAdd, onEdit, setToggle, data }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: !data
      ? {}
      : {
          ...data,
          userDOB: new Date(data.userDOB),
        },
    resolver: yupResolver(schema),
  });

  const addList = async (values) => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      whatsAppNumber,
      image,
      userDOB,
      note,
    } = values;
    if (!data?._id) {
      Axios.post("http://localhost:3001/add-contact-list", {
        firstName,
        lastName,
        email,
        phoneNumber,
        whatsAppNumber,
        image,
        userDOB,
        note,
      })
        .then((response) => {
          if (response.status === 200) {
            onAdd(response.data.contactlists);
            setToggle(false);
          }
        })
        .catch((err) => {
          console.log(err.response, "Error");
        });
    } else {
      try {
        const response = await Axios.put(
          `http://localhost:3001/update-contact-list/${data._id}`,
          {
            firstName,
            lastName,
            email,
            phoneNumber,
            whatsAppNumber,
            image,
            userDOB,
            note,
          }
        );
        onEdit(response.data.contactlists);
        setEdit(null);
        setToggle(false);
      } catch (err) {
        createNotification(
          "error",
          "Error",
          err?.response?.data?.message || "Server Error"
        );
        console.error(err);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(addList)} className={style.editSection}>
        <div>
          <TextField
            name={"image"}
            register={register}
            errorMessage={errors?.image?.message}
            placeholder={"Image"}
            wraperClass={style.inputWraper}
          />
        </div>
        <div>
          <TextField
            name={"firstName"}
            register={register}
            errorMessage={errors?.firstName?.message}
            placeholder={"First Name"}
            wraperClass={style.inputWraper}
          />
        </div>
        <div>
          <TextField
            name={"lastName"}
            register={register}
            errorMessage={errors?.lastName?.message}
            placeholder={"Last Name"}
            wraperClass={style.inputWraper}
          />
        </div>
        <div>
          <TextField
            name={"email"}
            register={register}
            errorMessage={errors?.email?.message}
            placeholder={"Email"}
            wraperClass={style.inputWraper}
          />
        </div>
        <div>
          <TextField
            name={"phoneNumber"}
            register={register}
            errorMessage={errors?.phoneNumber?.message}
            placeholder={"Phone number"}
            type="number"
            wraperClass={style.inputWraper}
          />
        </div>
        <div>
          <TextField
            name={"whatsAppNumber"}
            register={register}
            type="number"
            errorMessage={errors?.whatsAppNumber?.message}
            placeholder={"whatsapp number"}
            wraperClass={style.inputWraper}
          />
        </div>

        <div>
          <DatePicker
            name={"userDOB"}
            id="1"
            placeholder="Date"
            control={control}
            errorMessage={errors?.userDOB?.message}
          />
        </div>
        <div>
          <TextField
            name={"note"}
            register={register}
            errorMessage={errors?.note?.message}
            placeholder={"Note"}
            wraperClass={style.inputWraper}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            src={greenCrossIcon}
            className={style.crossIcon}
            onClick={() => {
              setEdit(null);
              setToggle(false);
            }}
          />

          <Button type="submit" text={"Save"} />
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
    email: yup.string().email().required().typeError("email is required"),
    phoneNumber: yup.number().required().typeError("Phonenumber is required"),
    whatsAppNumber: yup
      .number()
      .required()
      .typeError("whatsapp number is required"),
    userDOB: yup.string().required().typeError("date of birth is required"),
    note: yup.string().required().typeError("note is required"),
  })
  .required();
