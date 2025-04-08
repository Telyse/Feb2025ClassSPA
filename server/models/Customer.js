import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z]*$/
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  },
  address: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9,.' ]*$/
  },
  city: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9,.' ]*$/
  },
  state: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9,.' ]*$/
  },
  zipcode: {
    type: String,
    required: true,
    validate: /^[0-9]*$/,
    minLength: 5,
    maxLength: 5
  }
});

const customer = mongoose.model("customer", customerSchema);

export default customer;
