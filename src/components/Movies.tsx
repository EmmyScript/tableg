import { Component } from "react";

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

class  Movies extends Component  {
 state= {
  
 }
 render() {
     return (
        
      <table className="table">
  <thead>
    <tr>
      
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
      {arrMovies.map(movie => (
        <tr key={movie.id}>
          

          <td>{movie.first}</td>
          <td>{movie.last}</td>
          <td>{movie.blog}</td>
          <td>
            <button className="btn btn-danger">button</button>
          </td>

        </tr>
      ))}
    
      
  </tbody>
</table>
     )
 }
}

export default Movies