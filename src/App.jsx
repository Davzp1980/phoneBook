import './App.css';
import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactOps';
import { selectError, selectIsLoading } from './redux/selectors';
import { Oval } from 'react-loader-spinner';
import photo from '/photo.webp';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="phone-book-container">
        <h1 className="h-one">My phone book</h1>
        <div className="photo-container">
          <img src={photo} alt="photo" />
        </div>

        <ContactForm />

        <SearchBox />
        {isLoading && !error && (
          <div className="loader">
            <Oval color="red" secondaryColor="blue" />
          </div>
        )}
        <ContactList />
      </div>
    </div>
  );
}

export default App;
