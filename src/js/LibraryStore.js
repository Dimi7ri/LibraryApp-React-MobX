import {autorun, observable, computed} from "mobx"

class LibraryStore {
  @observable library = [
    "Manual for Living",
    "Sapiens: A Brief History of Humankind",
    "The Lessons of History"
  ]

  @observable filter = ""

  @computed get filteredBooks(){
    var matchesFilter = new RegExp(this.filter, "i")
    return this.library.filter(book => !this.filter || matchesFilter.test(book))
  }

  AddNewBook(bookName){
    this.library.push(bookName)
  }

}

var library = window.library = new LibraryStore

export default library

autorun(()=>{
    console.log(library.filter)
    console.log(library.library[0])
})
