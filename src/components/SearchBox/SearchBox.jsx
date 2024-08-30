import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { setFilterValue } from '../../redux/filterSlice';
function SearchBox() {
  const searchFieldId = useId();
  const dispatch = useDispatch();

  function handleFilterValue(e) {
    dispatch(setFilterValue(e.target.value));
  }
  return (
    <div className={css.div}>
      <label className={css.label} htmlFor={searchFieldId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="search"
        id={searchFieldId}
        onChange={handleFilterValue}
      />
    </div>
  );
}

export default SearchBox;
