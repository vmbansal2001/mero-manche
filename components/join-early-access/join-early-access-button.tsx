"use client";

import React, { useState } from "react";
import JoinEarlyAccessModal from "./join-early-access-modal/join-early-access-modal";
import { CheckCircle } from "lucide-react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const JoinEarlyAccessButton = ({ className, children }: Props) => {
  const [isModalopen, setIsModalopen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOpenModal = () => {
    setIsModalopen(true);
  };

  const handleCloseModal = () => {
    setIsModalopen(false);
  };

  const handleSuccess = () => {
    setIsSuccess(true);
    setIsModalopen(false);
  };

  return (
    <>
      <button
        className={className}
        onClick={handleOpenModal}
        disabled={isSuccess}
      >
        {isSuccess ? (
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> Thank you for joining!
          </div>
        ) : (
          children
        )}
      </button>

      <JoinEarlyAccessModal
        open={isModalopen}
        handleClose={handleCloseModal}
        onSuccessCallback={handleSuccess}
      />
    </>
  );
};

export default JoinEarlyAccessButton;
