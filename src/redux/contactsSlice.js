import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { contacts: { items: [] } },
  reducers: {
    addContact: (state, action) => {
        state.contacts.items.push(action.payload.contact)
    },
    deleteContact: (state, action) => {
        state.contacts.items = state.contacts.items.filter((contact) => {
            return contact.id !== action.payload.id 
        })
    },
  },
});
 export const {addContact, deleteContact} = contactsSlice.actions
 export default contactsSlice.reducer