import { useState } from 'react';
import Sidebar from './Sidebar';
import Card from './Card';
import Popup from './Popup';
import '../css/App.css';

function App() {
  const [isModalShow, setIsModalShow] = useState(false);
  const [drinkList, setDrinkList] = useState([{
    title: '소주',
    url: './soju.png',
    description: '소주만 먹는건 별로입니다..',
  }]);

  const handleModalShow = (value) => {
    setIsModalShow(value);
  }

  return (
    <div className="App">
      <header>
        <span className="title">신나는 6주차 과제!</span>
      </header>
      <main>
        <Sidebar data={drinkList} handleState={handleModalShow}/>
        <section className="container">
          {drinkList.map(({ title, url, description }) => {
            return(
            <Card
              key={url}
              title={title}
              url={url}
              description={description}
            />);
          })}
        </section>
        {isModalShow &&
        <Popup
          handleState={handleModalShow}
          handleData={setDrinkList}
          data={drinkList}
        />
      }
      </main>
    </div>
  );
}

export default App;
