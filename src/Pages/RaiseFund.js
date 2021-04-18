import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Progress } from "reactstrap";

const RaiseFund = () => {
  return (
    <div>
      <div className="Raise-Fund-Position">
        <h1 className="Raise-Fund-Font">My Raise Fund</h1>{" "}
      </div>
      <div>
        <button className="makeFundBtn">Make Raise Fund</button>
      </div>
      <div className="rowrow">
        <div className="col-sm-3">
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="Rectangle 7.svg" />
              <Card.Body>
                <Card.Title>
                  The Strength of a People. Power of Community
                </Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Card.Text>
                <Card.Text>
                  <Progress color="danger" value={40} />
                </Card.Text>
                <Card.Text>Rp.25.000.000</Card.Text>
                <button className="row3">
                  <div className="textdonate">Donate</div>
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RaiseFund;
