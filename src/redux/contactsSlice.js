import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialStateContacts } from './constants';

const contactsSlice = createSlice({
    items: 'contacts',
    initialStateContacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        }
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.items;
export const contactsReducer = contactsSlice.reducer;