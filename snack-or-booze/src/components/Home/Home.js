import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bolder">
              Welcome to Silicon Valley's premier dive cafe!
            </p>
            <p className="font-weight-lighter">
              Currently serving {snacks} snacks!
            </p>
            <p className="font-weight-lighter">
              Currently serving {drinks} drinks!
            </p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
