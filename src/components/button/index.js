import Loading from "../../components/loading";

import style from "./button.module.scss";

const Button = ({
  text,
  iconStart,
  iconEnd,
  handleClick,
  type,
  className,
  isLoading,
  btnClass,
  disabled,
  btnLoaderClass,
  form,
  width,
  showProgress,
  progress,
}) => {
  return (
    <>
      <button
        className={`${style.btn} ${btnClass}`}
        type={type}
        form={form}
        onClick={handleClick}
        disabled={isLoading || disabled ? true : false}
        style={{
          pointerEvents: isLoading || disabled ? "none" : "auto",
          width,
          position: "relative",
        }}
      >
        {!showProgress &&
          (isLoading ? (
            <Loading loaderClass={btnLoaderClass} />
          ) : (
            <>
              {iconStart && (
                <img src={iconStart} alt="" className={style.img1} />
              )}
              {text && (
                <span className={`${style.btnTitle} ${className}`}>{text}</span>
              )}
              {iconEnd && <img src={iconEnd} alt="" className={style.img} />}
            </>
          ))}
        {showProgress && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${progress}%`,
              background: "rgba(255,255,255,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 45,
              transition: "all 0.3s",
            }}
          >
            <Loading loaderClass={btnLoaderClass} />
          </div>
        )}
      </button>
    </>
  );
};

export default Button;
