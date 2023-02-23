import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import styled, { css } from "styled-components";
interface PropTypes {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
type HandleClickType = () => void;

function Ripple({ modal, setModal }: PropTypes) {
  const handleClick: HandleClickType = () => {
    setModal(true);
  };
  return (
    <RippleEffect>
      <div className="request-loader">
        <span className="span" role="button" onClick={handleClick}>
          <PersonIcon fontSize="large" sx={{ color: "white" }} />
        </span>
      </div>
    </RippleEffect>
  );
}

export default Ripple;

const rings = (duration: any, delay: any) => css`
  opacity: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: black;
  top: -8px;
  left: -8px;
  right: 0;
  bottom: 0;
  content: "";
  height: 100%;
  width: 100%;
  border: 8px solid rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  animation-name: ripple;
  animation-duration: ${duration};
  animation-delay: ${delay};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);
  z-index: -1;

  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale3d(0.75, 0.75, 1);
    }

    to {
      opacity: 0;
      transform: scale3d(1.5, 1.5, 1);
    }
  }
`;

const RippleEffect = styled.div`
  position: absolute;
  transform: translate(480%, 340%);

  .request-loader {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 60px;
    transition: 0.5s;
    width: 60px;
    border-radius: 100%;
    background: black;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);

    &::after {
      ${rings("3s", "0s")}
    }

    &::before {
      ${rings("3s", "0.5s")}
    }
  }
`;
