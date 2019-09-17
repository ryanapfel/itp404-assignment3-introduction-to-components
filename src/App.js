import React from 'react';
import './App.css';
import Form from './Form';
import Posts from './Posts';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state =
    {
      subName: '',
      formSubmit: false
    }
  }

  handleSubmit = subName =>
  {
      this.setState({ subName: subName.value, formSubmit: true })
  }


  render()
  {
    return(
      <div>
        <Posts subReddit='lakers' ></Posts>
      </div>
    );
  }


}


export default App;




//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoaded: false,
//       posts: [],
//       loading: true,
//       subName: 'Reddit',
//       subFollowers: 0
//     };
//   }
//
//    componentDidMount() {
//       fetch("https://www.reddit.com/r/funny.json")
//          .then(res => res.json())
//          .then(
//            (result) => {
//              this.setState({
//                isLoaded: true,
//                posts: result.data.children,
//                loading: false,
//                subName: result.data.children[0].data.subreddit,
//                subFollowers: result.data.children[0].data.subreddit_subscribers
//              });
//            },
//            // Note: it's important to handle errors here
//            // instead of a catch() block so that we don't swallow
//            // exceptions from actual bugs in components.
//            (error) => {
//              this.setState({
//                isLoaded: true,
//                error
//              });
//            }
//          )
//       }
//
//
//     handleSubmit = subName => {
//       this.setState({ sub: subName })
//     }
//
//
//   render() {
//     return (
//
//       <div>
//         <h1>r/{this.state.subName}</h1>
//         <h3>Subscribers : {this.state.subFollowers.toLocaleString()}</h3>
//         <Form handleSubmit={this.handleSubmit} ></Form>
//
//         <div>
//         {this.state.posts.map((post) =>{
//           return (<div className="post-card">
//               <a href={post.data.url}>{post.data.title}</a>
//               <p>{post.data.author}</p>
//               <p>{post.data.ups.toLocaleString()}</p>
//               <p>{post.data.num_comments ? post.data.num_comments.toLocaleString() : "No Comments"}</p>
//             </div>);
//         })}
//
//         </div>
//
//       </div>
//
//     );
//   }
//
// }
//
//
//
//
