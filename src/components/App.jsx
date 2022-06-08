import { useState } from 'react';
import Sidebar from './Sidebar';
import Card from './Card';
import Popup from './Popup';
import '../css/App.css';

function App() {
  const [isPopUpShow, setIsPopUpShow] = useState(false);
  const [drinkList, setDrinkList] = useState([{
    title: '소주',
    url: './soju.png',
    description: '소주만 먹는건 별로입니다..',
  }]);

  return (
    <div className="App">
      <header>
        <span className="title">신나는 6주차 과제!</span>
      </header>
      <main>
        <Sidebar data={drinkList} handleState={setIsPopUpShow}/>
        <section className="container">
          {drinkList?.map(({ title, url, description }) => {
            return(
            <Card
              key={url}
              title={title}
              url={url}
              description={description}
            />);
          })}
        </section>
        {isPopUpShow &&
        <Popup
          handleState={setIsPopUpShow}
          handleData={setDrinkList}
          data={drinkList}
        />
      }
      </main>
    </div>
  );
}

export default App;
