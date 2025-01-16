import "./styles.css";

export default function App() {
  function handleClick() {
    alert("I was clicked!");
  }
  function handleMouseEnter() {
    alert("Image: Mouse Enter!");
  }
  return (
    <div className="App">
      <img onMouseEnter={handleMouseEnter} src="girl-bike.avif" />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
