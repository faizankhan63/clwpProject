/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactDatePicker from "react-datepicker";
import { Controller } from "react-hook-form";

import datePickerIcon from "../../assets/images/datePickerIcon.svg";
import dateLeft from "../../assets/icons/date-icon-left.svg";
import dateRight from "../../assets/icons/date-icon-right.svg";
import style from "./date.module.scss";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({
  id,
  name,
  label,
  control,
  minDate,
  maxDate,
  className,
  defaultVal,
  inputClass,
  placeholder,
  handleChange,
  errorMessage,
  reactDatePickerClass,
  monthYear,
}) => {
  return (
    <>
      <div className={`${style.main} ${className}`}>
        {label && <label className={style.label}>{label}</label>}
        <div
          className={`${style.inpDiv} ${inputClass}`}
          style={{
            border: errorMessage
              ? "1px solid #FF5050"
              : "1px solid rgb(230, 231, 232)",
          }}
        >
          <Controller
            control={control}
            name={name}
            defaultValue={defaultVal || null}
            render={({ field: { onChange, value, name } }) => {
              console.log({ value, name });
              return (
                <ReactDatePicker
                  id={id || "id5"}
                  className={`${style.datePicker} ${reactDatePickerClass}`}
                  onChange={(e) => {
                    handleChange && handleChange(e, name);
                    onChange(e);
                  }}
                  selected={value || ""}
                  placeholderText={placeholder || "MM/DD/YYYY"}
                  autoComplete="off"
                  minDate={minDate && minDate}
                  maxDate={maxDate && maxDate}
                  popperClassName={style.poper}
                  // showMonthDropdown
                  // showYearDropdown
                  dropdownMode="select"
                  renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                    // prevYearButtonDisabled,
                    // nextYearButtonDisabled,
                    // increaseYear,
                    // decreaseYear,
                  }) => (
                    <div className={style.iconsDiv}>
                      <p className={style.p}>
                        {months[date.getMonth()]} {date.getFullYear()}
                      </p>
                      <div>
                        <button
                          type={"button"}
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                        >
                          <img src={dateLeft} alt="" />
                        </button>
                        <button
                          type={"button"}
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                        >
                          <img src={dateRight} alt="" />
                        </button>
                      </div>
                      {/* <button
                          type="button"
                          onClick={decreaseYear}
                          disabled={prevYearButtonDisabled}
                        > */}

                      {/* <img src={doubleArrowLeft} alt="" /> */}
                      {/* </button> */}
                      {/* <button
                          type={'button'}
                          onClick={increaseYear}
                          disabled={nextYearButtonDisabled}
                          style={{ marginRight: '8px' }}
                        >
                          h{/* <img src={doubleArrowRight} alt="" /> */}
                      {/* </button> */}
                    </div>
                  )}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  {...(monthYear
                    ? {
                        dateFormat: "MM/yyyy",
                        showMonthYearPicker: true,
                      }
                    : {
                        dateFormat: "MM/dd/yyyy",
                        showMonthYearPicker: false,
                      })}
                />
              );
            }}
          />
          <label htmlFor={id || "id5"}>
            <img
              src={datePickerIcon}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
          </label>
        </div>
        {errorMessage ? (
          <span className={style.errorMessage}>{errorMessage}</span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default DatePicker;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
