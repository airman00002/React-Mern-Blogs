import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function CreateBlogs(props) {
  const {history} = props;

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const Blogs = {
      name: name,
      author: author,
      image: image,
    };
    try {
      let result = await axios.post(
        "http://localhost:3001/blogs/create-blogs",
        Blogs
      );
      if (result) console.log(result.data);
    } catch (error) {
      console.log(error.message);
    }
    setName("");
    setAuthor("");
    setImage("");

    history.push('/')
    
  };

  return (
    <div className="form-wrapper mt-4 offset-lg-3 col-lg-6">
      <h1>Create Blogs</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="url"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </Form.Group>
        <Button variant="outline-primary" size="lg" block="block" type="submit">
          Create Blogs
        </Button>
      </Form>
    </div>
  );
}

export default CreateBlogs;
