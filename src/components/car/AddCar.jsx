/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import '../../styles/AddCar.css';
import { addCar } from '../../redux/cars/CarsSlice';

const AddCar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    image: '',
    financeFee: '',
    totalAmount: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Dispatch the addCar action to add a new car
      dispatch(addCar(formData))
      .then(() =>{
      setFormData({
        name: '',
        model: '',
        image: '',
        financeFee: '',
        totalAmount: '',
        duration: '',
      });
    onClose();
  })
   .catch ((error) => {
    console.error('Error adding car:', error);
  });
} catch (error) {
  console.error('Error dispatching addCar:', error);
}
};

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    >
      <div className="form-container">
        <h2>Add New Car</h2>
        <form onSubmit={handleSubmit}>
          <div className='cont'>
          <div className="part">
            <input type="text" className="form-input" id="name" name="name" value={formData.name} onChange={handleChange} placeholder='Name' />
            <input type="text" className="form-input" id="model" name="model" value={formData.model} onChange={handleChange} placeholder='Model' />
            <input type="text" className="form-input" id="image" name="image" value={formData.image} onChange={handleChange} placeholder='Image' />
          </div>
          <div className='part'>
            <input type="text" className="form-input" id="financeFee" name="financeFee" value={formData.financeFee} onChange={handleChange} placeholder='Finance Fee' />
            <input type="text" className="form-input" id="totalAmount" name="totalAmount" value={formData.totalAmount} onChange={handleChange} placeholder='Total Amount' />
            <input type="text" className="form-input" id="duration" name="duration" value={formData.duration} onChange={handleChange} placeholder='Duration' />
          </div>
          </div>
          <button type="submit" className="carBtn">Add Car</button>
        </form>
      </div>
    </Modal>
  );
};

export default AddCar;