import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../store/message.actions';
import { loadCountries } from '../store/country.actions';
import axios from 'axios';
import MessagesTable from '../cmps/MessagesTable';
import { DatePickerCmp } from '../cmps/DatePickerCmp';
import { SelectCmp } from '../cmps/SelectCmp';
import AsyncSelect from 'react-select/async';
import { loadUsers } from '../store/user.actions';
import { Loader } from '../cmps/Loader';
import Button from '@mui/material/Button';

export const Home = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.messageModule);
  const { countries } = useSelector((state) => state.countryModule);
  const { users } = useSelector((state) => state.userModule);
  const [startDate, setStartDate] = useState(new Date(2022, 3, 25));
  const [endDate, setEndDate] = useState(new Date());
  const [country, setCountry] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const filterBy = { startDate, endDate };
    dispatch(loadMessages(filterBy));
    dispatch(loadCountries());
    dispatch(loadUsers());
  }, []);

  const handleClick = (ev) => {
    ev.preventDefault();
    const start = startDate.toLocaleDateString('en-CA');
    const end = endDate.toLocaleDateString('en-CA');
    const filterBy = {
      startDate: start,
      endDate: end,
      country: country.cnt_id,
      user: user.usr_id,
    };
    dispatch(loadMessages(filterBy));
  };

  const handleStartDate = (date) => {
    setStartDate(date);
  };
  const handleEndDate = (date) => {
    setEndDate(date);
  };

  const getCountries = async () => {
    return countries;
  };

  const handleCountryChange = (country) => {
    setCountry(country);
  };

  const getCountryTitle = (ev) => {
    return ev.cnt_title;
  };

  const getCountryValue = (ev) => {
    return ev.cnt_id;
  };
  const getUsers = async () => {
    return users;
  };

  const handleUserChange = (user) => {
    setUser(user);
  };

  const getUserTitle = (ev) => {
    return ev.usr_name;
  };

  const getUserValue = (ev) => {
    return ev.usr_id;
  };

  return (
    <div className='home-page'>
      <form className='flex column form' onSubmit={handleClick}>
        <div className='date-picker-container'>
          <DatePickerCmp
            label={'Start'}
            selectedDate={startDate}
            handleDateChange={handleStartDate}
          />
          <DatePickerCmp
            label={'End'}
            selectedDate={endDate}
            handleDateChange={handleEndDate}
          />{' '}
        </div>
        {countries.length > 0 ? (
          <SelectCmp
            title={getCountryTitle}
            value={getCountryValue}
            load={getCountries}
            placeholder={'Choose a country'}
            change={handleCountryChange}
          />
        ) : (
          <h3>loading...</h3>
        )}
        {users.length > 0 ? (
          <SelectCmp
            title={getUserTitle}
            value={getUserValue}
            load={getUsers}
            placeholder={'Choose a user'}
            change={handleUserChange}
          />
        ) : (
          <Loader />
        )}

        <Button className='submit-btn' type='submit' variant='outlined'>
          submit
        </Button>
      </form>
      <MessagesTable messages={messages} />
    </div>
  );
};
