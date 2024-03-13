import { nanoid } from "@reduxjs/toolkit";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <ul className={css.listContacts}>
      {filterContacts.map((contact) => (
        <li className={css.itemContact} key={nanoid()}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ContactList;
