import React from "react";
import CommonModal from "../../modals/common-modal";
import dynamic from "next/dynamic";

const JoinEarlyAccessModalContainer = dynamic(
  () => import("./join-early-access-modal-container"),
  {
    ssr: false,
  }
);

type Props = {
  open: boolean;
  handleClose: () => void;
  onSuccessCallback: () => void;
};

const JoinEarlyAccessModal = ({
  open,
  handleClose,
  onSuccessCallback,
}: Props) => {
  return (
    <CommonModal
      open={open}
      handleClose={handleClose}
      className={{ container: "lg:min-w-[600px]" }}
    >
      <JoinEarlyAccessModalContainer
        onSuccessCallback={onSuccessCallback}
        handleClose={handleClose}
      />
    </CommonModal>
  );
};

export default JoinEarlyAccessModal;
