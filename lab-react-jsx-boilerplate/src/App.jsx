import './App.css';

function App(imgData) {
  // code here

  const images = imgData.imgData;
  console.log(images);

  return(
    <div>
      <h1>KALVIUM GALLERY</h1>
    <div className='grid'>
      {images.map((element ) => (
      <img src={element.img} id={element.id} width={"650vw"} />
    ))};
    </div>

    </div>


  )
}

export default App;
