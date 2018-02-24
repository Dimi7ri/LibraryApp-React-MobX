import React from "react"
import { observer } from "mobx-react"

@observer
export default class Library extends React.Component {
  AddNewBook(event){
    if(event.which === 13){
      this.props.store.AddNewBook(event.target.value)
      event.target.value = ""
    }
  }
  filter(event){
    this.props.store.filter = event.target.value
  }
  render(){
    const { library, filter, filteredBooks } = this.props.store
    const booksList = filteredBooks.map(book =>(
      <li key={book}>{book}</li>
    ))
    return <div>
      <h1>Dimitri's Library</h1>
      <div className="">
        <div className="">
          <label className="">Add New Book: </label>
          <input onKeyPress={this.AddNewBook.bind(this)}></input>
        </div>
        <div className="">
          <label className="">Find Book: </label>
          <input value={filter} onChange={this.filter.bind(this)}></input>
        </div>
      </div>
      <ul>{booksList}</ul>
    </div>
  }
}
