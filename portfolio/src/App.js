import './App.css';

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "i need a job :(";
})
window.addEventListener("hire me", () => {
document.title = docTitle;
})

function App() {
  return (
    <div>
    </div>
  );
}

export default App;
