import React, { Fragment, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Input,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';

export default function RecipeTemplate() {
  const [title, setTitle] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([
    { name: 'Lemon', checked: false },
  ]);

  const checkIngredient = i => {
    const copy = [...ingredients];
    const ingredient = copy[i];
    copy[i] = { ...ingredient, checked: !ingredient.checked };
    setIngredients(copy);
  };

  const addIngredient = () => {
    const copy = [...ingredients];
    copy.push({ name: newIngredient, checked: false });
    setIngredients(copy);
    setNewIngredient('');
  };

  const IngredientChecklist = () => (
    <FormGroup check>
      {ingredients.map((ingredient, i) => (
        <Fragment key={`ingredient-${i}`}>
          <Input
            type="checkbox"
            id={`ingredient-${i}`}
            checked={ingredient.checked}
            onChange={() => checkIngredient(i)}
          />
          <Label check>
            <CardText>{ingredient.name}</CardText>
          </Label>
        </Fragment>
      ))}
    </FormGroup>
  );

  const IngredientsCard = () => (
    <Card>
      <CardTitle>Ingredients</CardTitle>
      <CardBody>
        <Form autoComplete="off" onSubmit={e => e.preventDefault()}>
          <IngredientChecklist />
          <br />
          <FormGroup>
            <Input
              type="text"
              id="add-ingredient"
              name="add-ingredient"
              placeholder="New ingredient"
              value={newIngredient}
              onChange={e => setNewIngredient(e.target.value)}
            />
            <Button
              name="add-ingredient-button"
              onClick={addIngredient}
              color="success"
            >
              Add
            </Button>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );

  return (
    <Fragment>
      <Form autoComplete="off" onSubmit={e => e.preventDefault()}>
        <FormGroup>
          <Input
            type="text"
            id="recipe-title"
            placeholder="Untitled"
            className="form-control-lg"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </FormGroup>
      </Form>
      <IngredientsCard />
    </Fragment>
  );
}
