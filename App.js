import logo from './logo.svg';
import './App.css';

const ReactLogo = () => {
  return <img src={logo} className="App-logo" alt="logo" />
}

const Text = (props) => (
  <p>
    {props.children}
  </p>
)

const Link = (props) => (
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children || 'Veja a documentação'}
  </a>
)

const Card = (props) => (
  <div className="card">
    <div className="card_image">
      <img src={props.imageURL} />
    </div>
    <div className="card_title title-white">
      <p>{props.title}</p>
    </div>
  </div>
)

const cardListInfo = [
  {
    title: 'Card 1',
    imageURL: 'https://i.redd.it/b3esnz5ra34y.jpg'
  },
  {
    title: 'Card 3',
    imageURL: 'https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif'
  },
  {
    title: 'Card 2',
    imageURL: 'https://i.redd.it/b3esnz5ra34y.jpg'
  },
  {
    title: 'Card 3',
    imageURL: 'https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif'
  },
]

const CardList = () => cardListInfo.map((cardInfo, index) => {
  const title  = `${cardInfo.title} posição ${index + 1}!`
  return (
    <Card
      key={index}
      title={title} 
      imageURL={cardInfo.imageURL}
    />
  )
}) 
// OU
// const CardList = () => cardListInfo.map((cardInfo, index) => (
//   <Card 
//     title={`${cardInfo.title} posição ${index + 1}!`} 
//     imageURL={cardInfo.imageURL}
//   />
// )) 
// OU
// const CardList = () => [
  //   <Card title='Card 1' imageURL='https://i.redd.it/b3esnz5ra34y.jpg' />,
  //   <Card title='Card 2' imageURL='https://i.redd.it/b3esnz5ra34y.jpg' />,
  //   <Card title='Card 3' imageURL='https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif' />,
// ]

const App = () => {
  return (
    <div className="App">
      <CardList />
    </div>
  );
}

export default App;
