export const validateItem = values => {
  const errors = {};
  if (!values.name) errors.name = 'Name is required';
  if (!values.quantity || isNaN(values.quantity) || values.quantity <= 0)
    errors.quantity = 'Quantity must be a positive number';
  if (!values.location) errors.location = 'Location is required';
  if (!values.owner) errors.owner = 'Owner is required';

  return errors;
};
