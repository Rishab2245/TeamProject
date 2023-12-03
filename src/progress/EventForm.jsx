import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EventForm = ({ addEvent }) => {
  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = data => {
    addEvent(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title', { required: true })} placeholder="Event Title" />
      <input {...register('start', { required: true })} type="datetime-local" />
      <input {...register('end', { required: true })} type="datetime-local" />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
