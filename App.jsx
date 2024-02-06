
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { SnackbarProvider} from 'notistack';
import { AppProvider } from './AppContext';
import BrowseRentRooms from './components/BrowseRentRooms';
import AddRentRoom from './components/AddRentRoom';
import ViewDetails from './components/ViewDetails';
import ManageRoom from './components/ManageRoom';

const App = () => {
  return (
    <div>
      <SnackbarProvider>
      <BrowserRouter>
      <AppProvider>
      <Navbar/>

      <Routes>
        <Route path="/" element={<BrowseRentRooms/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/browse" element={<BrowseRentRooms/>}/>
        <Route path="/addrentroom" element={<AddRentRoom/>}/>
        <Route path="/view/:id" element={<ViewDetails/>}/>
        <Route path="/view/:id" element={<ManageRoom/>}/>
        <Route path="/card" element={<Card/>}/>


      </Routes>
      </AppProvider>
      </BrowserRouter>
      </SnackbarProvider>
    </div>

  )
}

export default App;