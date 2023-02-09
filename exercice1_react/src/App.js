import './App.css';
import ProductsPage from './pages/ProductsPage'
import image1 from './images/smartphone.jpg'
import image2 from './images/smartphone.jpg'
import image3 from './images/smartphone.jpg'
import CardComponent from './Components/CardComponent/CardComponent';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([
    {
      title: "Titre1",
      image: image1,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, magni!"
    }
    ,
    {
      title: "Titre2",
      image: image2,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, magni!"
    }
    ,
    {
      title: "Titre3",
      image: image3,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, magni!"
    }


  ])
  return (
    <div className="App">
      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, sapiente.</h1>
      {
        data.map((element, key) => {
          return <CardComponent key={key} title={element.title} image={element.image} description={element.description} />
        })
      }
    </div>
  );
}

export default App;
