import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

const selectFilterValue = state => state.filter.filterValue;

export const selectSortedContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, searchValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
);
