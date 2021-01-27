import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const Main = () => {
  let [query, setQuery] = useState({
    owner: "",
    repo: "",
  });
  useEffect(() => {
    axios
      .get("https://api.github.com/repos/facebook/react/commits?per_page=100")
      .then((res) => {
        console.log(res);
      });
  }, []);

  const textHandler = (event) => {
    console.log("val", event.target.value);
    setQuery((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const onSubmit = () => {
    axios
      .get(
        `https://api.github.com/repos/${query.owner}/${query.repo}/commits?per_page=100`
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <Card>
        <Card.Header as="h5">Commits</Card.Header>
        <Card.Body>
          <Card.Title>Search</Card.Title>
          <Card.Text>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  Owner{" "}
                  <input
                    value={query.owner}
                    type="text"
                    name="owner"
                    placeholder="Owner Name"
                    onChange={(event) => textHandler(event)}
                  />
                </div>
                <div className="col-md-4">
                  Repository{" "}
                  <input
                    value={query.repo}
                    type="text"
                    name="repo"
                    placeholder="repository name"
                    onChange={(event) => textHandler(event)}
                  />
                </div>
                <div className="col-md-2">
                  <Button varient="primary" onClick={onSubmit}>
                    Show
                  </Button>
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Main;
