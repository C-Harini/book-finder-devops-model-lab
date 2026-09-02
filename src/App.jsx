import { useState } from "react";

function App(){
 const [bookarray, setBookarray] = useState([{name:"DSA",author:"XYZ",price:200},{name:"Java",author:"ABC",price:300},{name:"Python",author:"PQR",price:400},{name:"C++",author:"LMN",price:500}]);
const [name, setName] = useState("");

const hadleSearch = (name) => {
 for (let i = 0; i < bookarray.length; i++) {
  if (bookarray[i].name === name) {
    let searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = `<p>Book found: ${bookarray[i].name} by ${bookarray[i].author} - $${bookarray[i].price}</p>`;
    return;
  }
  // else{
  //   let searchResults = document.getElementById("searchResults");
  //   searchResults.innerHTML='<h1>Book not found</h1>';
  // }
}
}
return(<>
  <div>
    <h1>Book Finder</h1>
    <ul>
      {bookarray.map((book, index) => (
        <li key={index}>
          <strong>{book.name}</strong> by {book.author} - ${book.price}
        </li>
      ))}
    </ul>
    </div>

    <input  type="text" value= {name} onChange={(e)=> setName(e.target.value)}  setplaceholder="Search for a book..." />
    <button onClick={hadleSearch(name)}>Search</button>
   <div id="searchResults"></div>


    </>)
}
export default App;