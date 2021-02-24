import "./ShowBlogs.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

function ShowBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/blogs")
      .then((res) => {
        setBlogs(res.data.result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const BlogElements = blogs.map((val, index) => {
    return (
      <Card key={index} >
        <Card.Img variant="top" src={val.image} />

        <Card.Body>
          <Card.Title>{val.name}</Card.Title>
          <Card.Text>{val.author}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="wrapper my-4">
      <h1>Show Blogs</h1>
      <div className="app-grid">{BlogElements}</div>
    </div>
  );
}

export default ShowBlogs;
