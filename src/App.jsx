import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer.jsx";
import "../components/header/style.css";
import items from "../src/data.js";

function App() {
  const data = items.map(function (item) {
    return <Main id={item.id} item={item} />;
  });

  return (
    <>
      <Header />
      <main> {data} </main>
      <Footer />
    </>
  );
}

export default App;
