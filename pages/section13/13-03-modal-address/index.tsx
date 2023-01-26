import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const onClickBtn = (): void => {
    setIsOpen(!isOpen);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={onClickBtn}>모달창 열기</button>
      {isOpen && (
        <Modal open={true} onOk={onClickBtn} onCancel={onClickBtn}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
