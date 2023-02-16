import { useState } from 'react';
import css from './Searchbar.module.css';


export function Searchbar({onSubmit}){
  const [query, setQuery] = useState('');
 

 const hendleInput = ({ target }) => {
  setQuery(target.value);
};
   
  

 const hendleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
    
  };
  
    return (
      <header className={css.Searchbar}>
  <form onSubmit={hendleSubmit} className={css.Form}>
    <button type="submit" className={css.Button}>
      <span className={css['Button-label']}>Search</span>
    </button>

    <input
      className={css.Input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="query"
      value={query}
      onChange={hendleInput}
    />
  </form>
</header>
     
    );
}

