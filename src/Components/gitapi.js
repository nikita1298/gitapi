import React from "react";
import { Table } from "react-bootstrap";

const List = (props) => {
  if (props.lst.length <= 0) {
    return <div>No commits</div>;
  } else {
    return (
      <div>
        Total Commits : {props.lst.length}
        <Table striped bordered hover>
          <tr></tr>
          <tr>
            <td colSpan="2">UserName</td>
            <td>Email</td>
            <td>Commit DateTime </td>
          </tr>
          {props.lst.map((item) => {
            console.log(item.author.avtar_url);
            return (
              <tr>
                {" "}
                <td style={{ borderRight: "1px solid transparent" }}>
                  <img height="20px" src={item.author.avatar_url} s />
                </td>
                <td style={{ textAlign: "left" }}>{item.commit.author.name}</td>
                <td>{item.commit.author.email}</td>
                <td>{item.commit.author.date}</td>
              </tr>
            );
          })}
        </Table>
      </div>
    );
  }
};

export default List;
