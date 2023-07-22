import React from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Table({data,currPage}) {


  return (
    <>
      <div>
        <table className="table content-table">
          {data.length > 0 && currPage.length !== 0 ? (
            <thead className="thead-dark">
              <tr className="th">
                <th scope="col">DateTime</th>
                <th scope="col">Close</th>
                <th scope="col">High</th>
                <th scope="col">Low</th>
                <th scope="col">Open</th>
                <th scope="col">Volume</th>
                <th scope="col">Instrument</th>
              </tr>
            </thead>
          ) : null}

          {currPage.map((ele, index) => {
            return (
              <tr className="tr" key={index}>
                <td>{ele.datetime}</td>
                <td>{ele.close}</td>
                <td>{ele.high}</td>
                <td>{ele.low}</td>
                <td>{ele.open}</td>
                <td>{ele.volume}</td>
                <td>{ele.instrument}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Table;
