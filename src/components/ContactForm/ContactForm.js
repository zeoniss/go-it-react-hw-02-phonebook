import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  nameInputId = uuidv4();
  telInputId = uuidv4();

  state = {
    name: '',
    number: '',
  };

  changeInput = e => {
    const inputName = e.currentTarget.name;
    this.setState({
      [inputName]: e.currentTarget.value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const checkContact = Boolean(
      this.props.existContacts.find(
        element => element.name === this.state.name,
      ),
    );

    checkContact
      ? alert(`${this.state.name} is already in contacts`)
      : this.props.onFormSubmit(this.state);

    this.resetInput();
  };

  resetInput = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit} className={s.contactForm}>
        <label htmlFor={this.nameInputId} className={s.contactForm_label}>
          <span className={s.contactForm_title}>Name:</span>
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            placeholder="Enter contact name"
            className={s.contactForm_input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={name}
            required
            onChange={this.changeInput}
          />
        </label>

        <label htmlFor={this.telInputId} className={s.contactForm_label}>
          <span className={s.contactForm_title}> Phone:</span>
          <input
            id={this.telInputId}
            type="tel"
            name="number"
            placeholder="Enter contact phone"
            className={s.contactForm_input}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            value={number}
            required
            onChange={this.changeInput}
          />
        </label>
        <button type="submit" className={s.contactForm_button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
