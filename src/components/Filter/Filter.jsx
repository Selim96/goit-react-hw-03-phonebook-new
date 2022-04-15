import s from './Filter.module.css';

function Filter({value, onChange}) {
    return (
        <label className={s.labelFilter}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={value}
            onChange={onChange}
          />
        </label>
    )
}

export default Filter;