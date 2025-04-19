import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice.js";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

function Contact(props) {
const dispatch = useDispatch()

  return (
    <li className={css.contact}>
      <p className={css.name}>
        <FaUser />
        {props.contact.name}
      </p>
      <p className={css.number}>
        <FaPhoneAlt />
        {props.contact.number}
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
         dispatch(deleteContact({id:props.contact.id}))
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
