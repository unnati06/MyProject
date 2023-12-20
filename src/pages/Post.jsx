// Post.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Post = () => {
  const [postDetails, setPostDetails] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    // Fetch details of the specific post using the postId from the URL parameter
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setPostDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching post details:', error);
      });
  }, [postId]); // Include postId in the dependency array to re-fetch when it changes

  return (
    <div>
      <h2>Post Details</h2>

      {postDetails ? (
        <div>
          <p><strong>Title:</strong> {postDetails.title}</p>
          <p><strong>Body:</strong> {postDetails.body}</p>
        </div>
      ) : (
        <p>Loading post details...</p>
      )}
    </div>
  );
};

export default Post;
