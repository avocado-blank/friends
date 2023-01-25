import Home from './components/Home'

import './App.css'
import Detail from './components/Detail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './components/Create'
import Addfriends from './components/Addfriends'
import Updateuser from './components/Updateuser'
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/userlist/:id" element={<Detail />} />
            <Route path="/userlist/:id/updateuser" element={<Updateuser />} />
            <Route path="/userlist/:id/addfriend" element={<Addfriends />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
