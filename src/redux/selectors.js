export const selectContacts = (state) => {
    return state.contacts.contacts.items
}

export const selectNameFilter = (state) => {
    return state.filters.filters.name
}