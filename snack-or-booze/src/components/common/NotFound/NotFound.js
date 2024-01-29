import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";


function NotFound() {
    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        Hmmm. I can't seem to find what you want.
                    </CardTitle>
                    <CardText className="font-italic NotFound-Links">
                        <Link to={"/new"}> home </Link>
                        <Link to={"/snacks"}> snacks </Link>
                        <Link to={"/drinks"}> drinks </Link>
                    </CardText>
                </CardBody>
            </Card>
        </section>
    );
}

export default NotFound;
