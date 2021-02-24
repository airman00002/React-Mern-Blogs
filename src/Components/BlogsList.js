import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import BlogsListTable from "./BlogsListTable";
import EditBlogs from "./EditBlogs";
import './BlogsListTable.css'

function BlogsList(props) {
  const [blogs, setBlogs] = useState([]);
  const [showEdit,setShowEdit] = useState(null);

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

  let Edit = null;
  if(!!showEdit){
    Edit = (
      <div className="edit">
        <div className="edit-bg" onClick={onCloseClick} ></div>
        <div className="edit-content">
          <EditBlogs  id={showEdit} blogs={blogs} setBlogs={setBlogs}/>
        </div>
      </div>
    )
  }

  function onOpenClick(id){
    setShowEdit(id)
    console.log(id)
  }
  function onCloseClick(){
    setShowEdit(null)
  }
  const BlogElements = blogs.map((val, index) => {
    return (
      <BlogsListTable key={index} val={val} onOpenClick={onOpenClick} blogs={blogs} setBlogs={setBlogs} />
    );
  });
  return (
    <div className="table-wrapper">
      <h1 className="mt-4 mb-3"> Blogs List </h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>{BlogElements}</tbody>
      </Table>
      {Edit}
    </div>
  );
}

export default BlogsList;
