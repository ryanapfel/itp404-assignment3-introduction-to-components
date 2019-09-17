import React, { Component } from 'react'
import Loader from './Loading';

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      subName: this.props.subReddit,
      subFollowers: 0,
      posts: []

    };
  }

  componentDidMount() {
     fetch(`https://www.reddit.com/r/${this.state.subName}.json`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              posts: result.data.children,
              subFollowers: result.data.children[0].data.subreddit_subscribers
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
     }

     renderPosts ()
     {
       return(
         <div>
           <h1>r/{this.state.subName}</h1>
           <h3>Subscribers : {this.state.subFollowers.toLocaleString()}</h3>

           <div>
             {this.state.posts.map((post) =>{
               return (<div className="post-card" key={post.data.id}> 
                   <a href={post.data.url}>{post.data.title}</a>
                   <p>{post.data.author}</p>
                   <p>{post.data.ups.toLocaleString()}</p>
                   <p>{post.data.num_comments ? post.data.num_comments.toLocaleString() : "No Comments"}</p>
                 </div>);
             })}

           </div>

         </div>

       );
     }

     render() {
       return (
         <div>
         {this.state.isLoaded ?  this.renderPosts(): <Loader></Loader>}
        </div>
       );
     }
}

export default Posts
