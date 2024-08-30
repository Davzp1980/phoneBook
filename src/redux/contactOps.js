import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66caffad4290b1c4f1993b91.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/all',
  async function (_, thunkApi) {
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async function (contact, thunkApi) {
    try {
      const { data } = await axios.post('/contacts', contact);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async function (contactId, thunkApi) {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
