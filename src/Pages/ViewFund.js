import React from "react";
import { Progress } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
// import {
//   ListGroup,
//   ListGroupItem,
//   ListGroupItemHeading,
//   ListGroupItemText,
// } from "reactstrap";

const DetailDonate = () => {
  return (
    <div>
      <div className="picture60">
        <img src="/Rectangle 60.svg" alt="" />
      </div>
      <div className="textdetaildonate">
        The Strength of a People. Power of Community
      </div>
      <div className="textdetaildonate1">Rp. 25.000.000</div>
      <div className="textdetaildonate2">gathered from</div>
      <div className="textdetaildonate3">Rp.200.000.000</div>
      <div className="textdetaildonate6">
        <Progress color="danger" value={75} />
      </div>
      <div className="textdetaildonate4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div>
        <button className="buttondetaildonate">
          <div className="donate5">Donate</div>
        </button>
      </div>
      <div className="textdetaildonate5">List Donation (200)</div>
      {/* <ListGroup className="listdonate">
        <ListGroupItem>
          <ListGroupItemHeading>Andi</ListGroupItemHeading>
          <ListGroupItemText>Saturday, 12 April 2021</ListGroupItemText>
          <ListGroupItemText className="total">
            Total : Rp 45.000
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Jamal</ListGroupItemHeading>
          <ListGroupItemText>Saturday, 12 April 2021</ListGroupItemText>
          <ListGroupItemText className="total1">
            Total : Rp 45.000
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Udin</ListGroupItemHeading>
          <ListGroupItemText>Saturday, 12 April 2021</ListGroupItemText>
          <ListGroupItemText className="total2">
            Total : Rp 45.000
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup> */}
      <div className="rowdetaildonate">
        <Card>
          <CardBody>
            <CardTitle>Andi</CardTitle>
            <CardTitle>Saturday, 12 April 2021</CardTitle>
            <CardSubtitle className="colordetaildonate">
              Total : Rp 45.000
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
      <div className="rowdetaildonate1">
        <Card>
          <CardBody>
            <CardTitle>Jamal</CardTitle>
            <CardTitle>Saturday, 12 April 2021</CardTitle>
            <CardSubtitle className="colordetaildonate">
              Total : Rp 45.000
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
      <div className="rowdetaildonate2">
        <Card>
          <CardBody>
            <CardTitle>Udin</CardTitle>
            <CardTitle>Saturday, 12 April 2021</CardTitle>
            <CardSubtitle className="colordetaildonate">
              Total : Rp 45.000
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
      <div className="loadmodetext">Load Mode</div>
      <div className="textdetaildonate7">
        Donation has not been approved (10)
      </div>
      <div className="rowdetaildonate3">
        <Card>
          <CardBody>
            <CardTitle>Zain</CardTitle>
            <CardTitle>Saturday, 12 April 2021</CardTitle>
            <CardSubtitle className="colordetaildonate">
              Total : Rp 45.000
            </CardSubtitle>
            <button className="buttonviewfund3">
              <div className="textbuttonviewfund3">Donate</div>
            </button>
          </CardBody>
        </Card>
      </div>
      <div className="rowdetaildonate4">
        <Card>
          <CardBody>
            <CardTitle>Fadhil</CardTitle>
            <CardTitle>Saturday, 12 April 2021</CardTitle>
            <CardSubtitle className="colordetaildonate">
              Total : Rp 45.000
            </CardSubtitle>
            <button className="buttonviewfund2">
              <div className="textbuttonviewfund2">Donate</div>
            </button>
          </CardBody>
        </Card>
      </div>
      <div className="rowdetaildonate5">
        <Card>
          <CardBody>
            <CardTitle>Radif</CardTitle>
            <CardTitle>Saturday, 12 April 2021</CardTitle>
            <CardSubtitle className="colordetaildonate">
              Total : Rp 45.000
            </CardSubtitle>
            <button className="buttonviewfund">
              <div className="textbuttonviewfund">Donate</div>
            </button>
          </CardBody>
        </Card>
      </div>
      <div className="loadmodetext2">Load Mode</div>
    </div>
  );
};

export default DetailDonate;
