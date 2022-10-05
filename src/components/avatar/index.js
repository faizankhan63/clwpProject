import React, { useEffect, useState } from "react";

import style from "./avatar.module.scss";

const Avatar = ({ color, circleSize, icon, initials, onClick, className }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (icon) {
      setImageError(false);
    }
  }, [icon]);
  return (
    <>
      <div onClick={onClick} className={`${style.main} ${className}`}>
        {!imageError && icon ? (
          <div
            className={style.image}
            style={{ height: circleSize, width: circleSize }}
          >
            {/* <img
              src={icon}
              style={{ objectFit: 'cover' }}
              onError={() => setImageError(true)}
            /> */}
          </div>
        ) : (
          <div
            className={`${style.initials} ${className}`}
            style={{
              backgroundColor: color,
              height: circleSize,
              width: circleSize,
            }}
          >
            <h3
              style={{
                marginBottom: 0,
              }}
            >
              {initials
                .split(" ")
                .map((e) => e.toUpperCase().at(0))
                .slice(0, 2)
                .join("")}
            </h3>
          </div>
        )}
      </div>
    </>
  );
};
export default Avatar;
