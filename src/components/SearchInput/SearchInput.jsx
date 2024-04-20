import { useInput } from '../../hooks/useInput';

export const SearchInput = () => {
  const [state, handler] = useInput('');

  return (
    <div>
      <label htmlFor='search'>Enter user ID: </label>
      <input
        type='search'
        name='search'
        id='search'
        value={state}
        onChange={handler}
      />
    </div>
  );
};
