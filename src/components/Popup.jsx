import { useState } from "react";

function Popup({ handleState, handleData, data }) {
  const [inputData, setInputData] = useState({
    title: "",
    url: "",
    description: "",
  });

  const closePopUp = () => {
    handleState(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleData([...data, inputData]);
    closePopUp();
  };

  const handleTitleChange = ({ target }) => {
    setInputData({ ...inputData, title: target.value});
  };

  const handleUrlChange = ({ target }) => {
    setInputData({ ...inputData, url: target.value});
  };

  const handleDescriptionChange = ({ target }) => {
    setInputData({ ...inputData, description: target.value});
  };

  return (
    <div className="modal-bg">
      <div className="modal">
        <form className="add-item-form" onSubmit={handleSubmit}>
          <span onClick={closePopUp}>X</span>
          <div className="question">
            <label>이름: </label>
            <input id="subject" onChange={handleTitleChange} required/>
          </div>
          <div className="question">
            <label>이미지 URL: </label>
            <input id="image-url" onChange={handleUrlChange} required />
          </div>
          <div className="question">
            <label>설명: </label>
            <input id="content" onChange={handleDescriptionChange} required />
          </div>
          <button type="submit">저장</button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
