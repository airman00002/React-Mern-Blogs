import axios from "axios";
import Button from "react-bootstrap/Button";

import "./BlogsListTable.css";

function BlogsListTable(props) {
  const { _id, name, author } = props.val;
  const {onOpenClick} = props
  //*Delete
  const DeleteBlogs = (id) => {
    axios
      .delete(`http://localhost:3001/blogs/delete-blogs/${id}`)
      .then((res) => {
        props.setBlogs(props.blogs.filter((blog) => blog._id !== id));
        console.log("Successfully deleted blog");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{author}</td>
      <td>
        <Button variant="outline-warning mx-2" onClick={()=>onOpenClick(_id)}>Edit</Button>
        <Button variant="outline-danger" onClick={()=>DeleteBlogs(_id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default BlogsListTable;
