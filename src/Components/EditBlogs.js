import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function EditBlogs(props) {
  // const {match:{params}} = props;
  const {id,blogs,setBlogs} = props
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/blogs/edit-blogs/${id}`)
      .then((res) => {
        setName(res.data.result.name);
        setAuthor(res.data.result.author);
        setImage(res.data.result.image);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  

  const onSubmit = (event) => {
    event.preventDefault();
    const Blogs = {
      name: name,
      author: author,
      image: image,
    };

    axios
      .put(`http://localhost:3001/blogs/update-blogs/${id}`, Blogs)
      .then((res) => {
        setBlogs(
          blogs.map((blog) => {
            return blog._id === id
              ? { name: name, author: author, image: image }
              : blog;
          })
        );
       console.log("Successfully Updated");
      })
      .catch((err) => console.log(err.message));
      setName('')
      setAuthor('')
      setImage('')

      // setShowEdit(null)
      window.location.reload(); 
      
  };

  return (
    <div className="form-wrapper mt-4">
      <h1>Update Blogs</h1>
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
        <Button variant="outline-info" size="lg" block="block" type="submit">
          Update Blogs
        </Button>
      </Form>
    </div>
  );
}

export default EditBlogs;
