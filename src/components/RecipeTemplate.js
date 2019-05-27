import React, { useState } from 'react';
import { Input, Form, FormGroup, Label } from 'reactstrap';

export default function RecipeTemplate() {
  const [title, setTitle] = useState('');

  const onSubmitTitle = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <div>
      <Form onSubmit={e => e.preventDefault()}>
        <FormGroup>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Untitled"
            className="form-control-lg"
            value={title}
            onChange={onSubmitTitle}
          />
        </FormGroup>
      </Form>
    </div>
  );
}
