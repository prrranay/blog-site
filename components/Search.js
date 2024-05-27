import { useState } from 'react';

export default function Search({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <input 
            type="text"
            placeholder="Search blogs..."
            value={query}
            onChange={handleChange}
        />
    );
}
