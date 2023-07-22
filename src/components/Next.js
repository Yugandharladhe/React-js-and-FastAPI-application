import React from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Next({index,currPage,data,setIndex,setCurrPage}) {

  const nextClicked = () => {
    setIndex(index + 10);
    if (currPage.length === 0) {
      alert("no data at page");
    }
    setIndex(index + 9);
    setCurrPage(data.splice(index, 10));
  };

  return (
    <>
      <div>
        {data.length !== 0 ? (
          <button className="btn btn-light" onClick={nextClicked}>
            Next
          </button>
        ) : null}
      </div>
    </>
  );
}

export default Next;
