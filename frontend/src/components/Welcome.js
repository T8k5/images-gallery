import React from 'react';
import { Button } from 'react-bootstrap';

const Welcome = () => (
  <div className="p-5 mb-4 bg-light rounded-3">
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">Images Gallery</h1>
      <p className="col-md-8 fs-4">
        This is a simple application that retrieves photos using Unsplash API.
        In order to start, enter any search term in the input field.
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </div>
  </div>
);

export default Welcome;
