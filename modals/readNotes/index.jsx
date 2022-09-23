import React, { useEffect, useState } from "react";
import style from "./style.module.scss";

const ReadNotesModal = ({ showModal, setShowModal, data }) => {
  const [text, setText] = useState(data.disc);

  const [hideModal, setHideModal] = useState(showModal);
  const handleHideModal = () => {
    setShowModal(false);
    setHideModal(false);
  };

  const speakText = () => {
    let utter = new SpeechSynthesisUtterance();
    utter.lang = "en-US";
    utter.text = text;
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  };
  const pauseText = () => {
    window.speechSynthesis.cancel();
  };

  useEffect(() => {
    setHideModal(showModal);
  }, [showModal]);

  return (
    <>
      {hideModal && (
        <div className={style.modal_container}>
          <div
            className={style.overlay}
            onClick={() => handleHideModal()}
          ></div>

          <div className={style.modal}>
            <div className={style.modal_title}>Read Your Notes</div>
            <div className={style.close_btn} onClick={() => handleHideModal()}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className={style.input_group}>
              <div className={style.title}>{data.title}</div>
            </div>
            <div className={style.input_group}>
              <div className={style.disc}>{data.disc}</div>
            </div>
            <div
              className={style.input_group}
              style={{ display: "flex", gap: "5px" }}
            >
              <i className="fa-solid fa-circle-play" onClick={speakText}></i>
              <i
                className="fa-solid fa-circle-stop"
                style={{ color: "red" }}
                onClick={pauseText}
              ></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadNotesModal;
