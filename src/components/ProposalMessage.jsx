import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { noTexts } from "../utils";

function ProposalMessage() {
  const [noClicks, setNoClicks] = useState(0);
  const navigate = useNavigate()

  const handleAccept = () => {
    setNoClicks(0)
    navigate('/button')
  };
  const handleReject = () => {
    setNoClicks(noClicks + 1);
  };

  const buttonSize  = `${noClicks * 25 + 100}%`

  const noText = noTexts[Math.min(noClicks, noTexts.length - 1)]
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold">Will you be my Valentine?</h1>
      <div className="flex flex-row justify-between mt-4 space-x-3 items-center">
        {/* <Link to="/button"> */}
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          style={{ fontSize: `${buttonSize}` }}
          onClick={handleAccept}
        >
          Yes
        </button>
        {/* </Link> */}
        <button
          className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`}
          onClick={handleReject}
        >
          {noText}
        </button>
      </div>
    </div>
  );
}

export default ProposalMessage;
