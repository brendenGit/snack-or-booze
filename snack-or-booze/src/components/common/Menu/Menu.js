import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({ items }) {
  const { type, data } = items.snacks ? { type: 'Snacks', data: items.snacks } : { type: 'Drinks', data: items.drinks };
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {type} Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {data.map(item => (
              <Link to={`/${type.toLowerCase()}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>

        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Link to={`/${type.toLowerCase()}/new`}>
            <CardTitle className="font-weight-bold text-center">
              Add a new {type.slice(0, -1).toLowerCase()}
            </CardTitle>
          </Link>
          <CardText>
            Tell us what you want and we'll make it!
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
