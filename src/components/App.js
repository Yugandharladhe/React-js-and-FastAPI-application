import { useState } from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header"
import Dashboard from "./Dashboard"
import Table from "./Table"
import Next from "./Next"

function App() {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState([]);
  const [index, setIndex] = useState(0);
  const [msg, setMsg] = useState(null);

  return (
    <>
      <div className="container d-flex flex-column justify-content-center">
        <Header/>
        <Dashboard data={data} currPage={currPage} index={index} msg={msg}
          setData={setData}
          setCurrPage={setCurrPage}
          setIndex={setIndex}
          setMsg={setMsg}
        />
        <br />
        <br />
        <Table data={data} currPage={currPage}/>
        <Next index={index} currPage={currPage} data={data}
          setIndex={setIndex}
          setCurrPage={setCurrPage}
        />
      </div>
    </>
  );
}

export default App;
