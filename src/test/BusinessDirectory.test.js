import React from 'react';
import ReactDOM from 'react-dom';
import BusinessDirectoryForm from '../components/forms/BusinessDirectoryForm'
it('renders BusinessDirectoryForm component', () => {
  const form = document.createElement('form');
  ReactDOM.render(<BusinessDirectoryForm />, form );
  ReactDOM.unmountComponentAtNode(form);
});
