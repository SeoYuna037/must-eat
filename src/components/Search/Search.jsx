import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { SearchForm } from './SearchComponents';
import { useHistory } from 'react-router-dom';
const Search = () => {
	const [search, setSearch] = useState('');
	const history = useHistory();
	const submitHandler = e => {
		e.preventDefault();
		history.push('/searched/' + search);
	};
	return (
		<SearchForm onSubmit={submitHandler}>
			<BiSearchAlt />
			<input type="text" value={search} onChange={e => setSearch(e.target.value)} />
		</SearchForm>
	);
};

export default Search;
