import React, { useContext } from 'react';
import { Container, SearchMenu, SearchIcon, Filter } from './styles';
import postContext from '../contexts/postContext';
import filterContext from '../contexts/filterContext';

const AsideMenu = () => {
  const { authors } = useContext(postContext);
  const { setFilter, search, setSearch } = useContext(filterContext);

  const handleClick = () => {
    setFilter(search);
    setSearch('');
  };

  return (
    <Container>
      <SearchMenu>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <SearchIcon onClick={handleClick} />
      </SearchMenu>
      <Filter>
        <h1>Filtros: </h1>
        <ul>
          {authors.map(author => (
            <li>
              <button type="button" onClick={() => setFilter(author)}>
                {author}
              </button>
            </li>
          ))}
          <li>
            <button type="button" onClick={() => setFilter('')}>
              Todos
            </button>
          </li>
        </ul>
      </Filter>
    </Container>
  );
};

export default AsideMenu;
