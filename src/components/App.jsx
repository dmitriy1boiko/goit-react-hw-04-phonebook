import Bookcontact from './bookcontact/Bookcontact';
import Section from './section/Section';
import { useState, useEffect } from 'react';
import { Contacts } from './contacts/Contacts';
import { FilterContacts } from './filter-contacts/FilterContacts';
import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContakts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const findContact = contact => {
    return contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const addContact = contact => {
    if (findContact(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }

    setContakts(prev => [...prev, contact]);
  };

  const handleChengeInput = filter => {
    setFilter(filter);
  };

  const applyFilters = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  const handleDeleteContact = id => {
    setContakts(prevState => prevState.filter(contact => contact.id !== id));
  };
  return (
    <Container>
      <Section>
        <Bookcontact addContact={addContact}></Bookcontact>
      </Section>
      <Section title="Contacts">
        <FilterContacts filter={filter} onChangeInput={handleChengeInput} />
        <Contacts
          contacts={applyFilters()}
          onDeleteContact={handleDeleteContact}
        />
      </Section>
    </Container>
  );
};
