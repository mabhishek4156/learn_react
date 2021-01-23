import "./App.css";
import Todos from "./components/Todos";

function App() {
  // const name = "aditya";
  // const bookName = "english";

  return (
    <div className="root">
      {/* { <h1 style={{ textAlign: "center" }}>
        hii
        {name}
      </h1>
      <h2 style={{ backgroundColor: "white" }}> i likke {bookName} </h2>

      <div className="div">
        <button className="btn">Buttons</button>
      </div>
      <div className ="card">
        <img src="https://source.unsplash.com/random" alt=""/>
        <p>nice image</p>
      </div > } */}
      {/* {<PaymentHeader />
      <Card
        title="Accept All Payment Modes"
        content="with the domestic international credit"
      />
      <Card title="Checkout and Global Saving" content="An easy to integrate" />
      <Card title="Powerful Dashboard" content="Get Reports and detailed" />
      <Card
        title="Build for Developers"
        content="Robust,Clean,Developer friendly"
      />
      <Head title="Overview" />
      <Head title="Payment Method" />
      <Head title="Built For Dovveloper" /> } */}
      {/* {/<Uses/> } */}
      <Todos />
    </div>
  );
}

export default App;
