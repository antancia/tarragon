import React, { Fragment, useState } from 'react';
import {
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
  const [ingredients, setIngredients] = useState([
    { name: 'Lemon', checked: false },
  ]);

  const checkIngredient = i => {
    const copy = [...ingredients];
    const ingredient = copy[i];
    copy[i] = { ...ingredient, checked: !ingredient.checked };
    setIngredients(copy);
  };

  const addIngredient = name => {
    const copy = [...ingredients];
    copy.push({ name, checked: false });
    setIngredients(copy);
  };

  const IngredientChecklist = () =>
    ingredients.map((ingredient, i) => (
      <Fragment>
        <Input
          type="checkbox"
          id={`ingredient-${i}`}
          checked={ingredient.checked}
          onChange={() => checkIngredient(i)}
        />
        <Label for={`ingredient-${i}`} check>
          <CardText>{ingredient.name}</CardText>
        </Label>
      </Fragment>
    ));

  const IngredientsCard = () => (
    <Card>
      <CardTitle>Ingredients</CardTitle>
      <CardBody>
        <FormGroup check>
          <IngredientChecklist />
        </FormGroup>
      </CardBody>
    </Card>
  );

  return (
    <Fragment>
      <Form onSubmit={e => e.preventDefault()}>
        <FormGroup>
          <Input
            type="text"
            id="recipe-title"
            placeholder="Untitled"
            className="form-control-lg"
            value={title}
            onChange={e => setTitle(e.targetValue)}
          />
        </FormGroup>
        <IngredientsCard />
      </Form>
    </Fragment>
  );
}
