import React from "react"
import ReactDOM from "react-dom"

import "../css/library.css"
import Library from "./Library"
import LibraryStore from "./LibraryStore"

const app = document.getElementById("app")

ReactDOM.render(<Library store={library} />, app)
