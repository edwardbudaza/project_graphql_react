import React, {useState, useEffect } from 'react';
import moment from 'moment';
import parser from 'html-react-parser';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // getComments(slug)
  },[])

  return (
    <div>Comments</div>
  )
}

export default Comments