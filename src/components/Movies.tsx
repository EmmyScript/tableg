import { Component } from "react";
import Likes from "./Likes";
//import { arryMovies, getMovies } from "../page/FakeMoviesList";

/*
const arrMovies=[
  {
    id:1,
    first:"emmy",
    last:"idoko",
    blog:"favour"


  },

  {
    id:2,
    first:"sunny",
    last:"idoko",
    blog:"favour"


  },
]
*/

const arryMovies = [
  {
    _id: 1,
    title: "terminator",
    genre: { _id: 1, name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 4.6,
    publishDate: "2024-01-25",
    likes:true,
  },

  {
    _id: 2,
    title: "emmy",
    genre: { _id: 2, name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 4.6,
    publishDate: "2024-01-25",
  },

  {
    _id: 3,
    title: "terminator",
    genre: { _id: 3, name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 4.4,
    publishDate: "2024-01-25",
  },
];

class Movies extends Component {
  state = {
    arryMovies:arryMovies
  };
  handleDelete = (movie: any) => {
    //console.log(movie)

    const arryMovies = this.state.arryMovies.filter(
      (m: any) => m._id!== movie._id
    );
    this.setState({ arryMovies });
    
  };

  handleLikes= (movie:any) =>{
    const arryMovies=[...this.state.arryMovies];
    const index=arryMovies.indexOf(movie);
    arryMovies[index].likes =!arryMovies[index].likes;
    this.setState({arryMovies});
  }
  render() {
    const{length:count}= this.state.arryMovies;
    if(count===0)
    return<p>there are no movies in the database</p>;
    return (
      <>
      <p>Showing {count} movies in the database</p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titles</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col">Publiishdate</th>
            <th>likes</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {arryMovies.map((movie: any) => (
            <tr key={movie._id}>
              <td>{movie._id}</td>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>{movie.publishDate}</td>
              <td>
                <Likes onClick={()=> this.handleLikes(movie)}/>
              </td>
              <td>
                <button
                  onClick={() => this.handleDelete(movie)}
                  className="btn btn-danger"
                >
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      </>
    );
  }
}

export default Movies;
