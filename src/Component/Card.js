import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardFooter, CardText, Progress } from "reactstrap";
import { Link } from "react-router-dom";

const card = () => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="Rectangle 7.svg" />
            <Card.Body>
              <Card.Title>
                The Strength of a People. Power of Community
              </Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Card.Text>
              <Card.Text>
                <Progress color="danger" value={40} />
              </Card.Text>
              <Card.Text>Rp.25.000.000</Card.Text>
              <button className="row3">
                <Link to="/DetailDonate">
                  <div className="textdonate">Donate</div>
                </Link>
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="Rectangle 8.svg" />
            <Card.Body>
              <Card.Title>Empowering Communities Ending Poverty</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Card.Text>
              <Card.Text>
                <Progress color="danger" value={50} />
              </Card.Text>
              <Card.Text>Rp.50.000.000</Card.Text>
              <button className="row3">
                <Link to="/DetailDonate">
                  <div className="textdonate">Donate</div>
                </Link>
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="Rectangle 9.svg" />
            <Card.Body>
              <Card.Title>Please our brothers in flores</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Card.Text>
              <Card.Text>
                <Progress color="danger" value={75} />
              </Card.Text>
              <Card.Text>Rp.100.000.000</Card.Text>
              <button className="row3">
                <Link to="/DetailDonate">
                  <div className="textdonate">Donate</div>
                </Link>
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default card;
