import { v4 as uuidv4 } from 'uuid';
import s from '../Filter/Filter.module.css';

const Filter = ({ onFilterValue, value }) => (
  <>
    <p className={s.filter_title}>Find contact</p>
    <label htmlFor={uuidv4()} />
    <input
      className={s.filter_input}
      id={uuidv4()}
      type="text"
      placeholder="Find contact name"
      name="filter"
      onChange={onFilterValue}
      value={value}
    />
  </>
);

export default Filter;
