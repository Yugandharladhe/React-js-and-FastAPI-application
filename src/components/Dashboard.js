import React from "react";
import { useState } from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Dashboard({setData,setCurrPage,setIndex,setMsg,data,currPage,index,msg}) {
  const [file, setFile] = useState(null);
  const showData = async () => {
    try {
      const data = await fetch("http://localhost:8000/show");
      const d = await data.json();
      if (d.length === 0) {
        alert("no data present in Database");
      }
      setData(d);
      setCurrPage(d.splice(0, 10));
      setIndex(0);
    } catch (err) {
      alert("some error in fetching");
      console.log(err);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("file not choosen");
      setMsg("file not choosen");
      console.log("file not choosen");
      return;
    }
    const fd = new FormData();
    fd.append("file", file);
    setMsg("uploading...");

    // const data=await axios.post("http://localhost:8000/upload",fd,{
    //   onUploadProgress:(progressEvent)=>{setProgress((prevState)=>{
    //     return {...prevState,p:progressEvent.progress*100}
    //   })}
    // })

    try {
      const post = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: fd,
      });
      console.log(post);
      if (post) {
        setMsg("upload Successful");
        // setProgress((prevState) => {
        //   return { ...prevState, started: true };
        // });
        alert("upload successfull");
        console.log(data);
      } else {
        console.log("not uploaded");
      }
    } catch (err) {
      console.log(err);
      setMsg("Failed");
      alert("problem occured");
    }
  };

  return (
    <>
      <div className="inline">
        <div>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            name="file"
          />
          <button className="btn btn-success m-3" onClick={handleUpload}>
            Upload Data
          </button>
          {msg && <span>{msg}</span>}
          <button className="btn btn-success m-3" onClick={showData}>
            Get Data
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

