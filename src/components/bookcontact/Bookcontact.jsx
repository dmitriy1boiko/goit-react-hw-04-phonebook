import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function Bookcontact({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const[form, setForm]=useState({name:'',number:'',});
  // const handleChange = e => {
  //const { name, value } = e.target;
  //setForm((prevForm)=>{return {...prevForm, [name]:value,}})

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = { name: name, number: number, id: nanoid() };
    addContact(contact);
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <h3>Number</h3>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button type="submit">Add contact</button>
      </div>
    </form>
  );
}

Bookcontact.propTypes ={addContact:PropTypes.func.isRequired,};


//const authFormOptions = [
//   {
//     type: "text",
//     label: "Emeil",
//     placeholder: "Enter email",
//     name: "email",
//   },
//   {
//     type: "text",
//     label: "Password",
//     placeholder: "Enter password",
//     name: "password",
//   },
//   {
//     type: "text",
//     label: "ConfirmPassword",
//     placeholder: "Enter password",
//     name: "confirmPassword",
//   },
// ];

// const Form = ({ formOptions, initialValues }) => {
//   const [form, setForm] = useState(initialValues);
//   // useState()
//   // useState()
//   // useState()

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({ ...prevForm, [name]: value }));
//   };

//   return (
//     <form>
//       {formOptions.map((el) => (
//         <>
//           <p>{el.label}</p>
//           <input
//             type={el.type}
//             name={el.name}
//             value={form[el.name]}
//             onChange={handleChange}
//           />
//         </>
//       ))}
//     </form>
//   );
// };

// <Form
//   formOptions={authFormOptions}
//   initialValues={{
//     email: "",
//     password: "",
//     confirmPassword: "",
//   }}
// />;
