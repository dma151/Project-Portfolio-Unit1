import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Navigation from "./components/Navigation";
import Collaborate from "./components/Collaborate";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div>
      <Navigation />
      <Container fluid>
        <Row id="intro">
          <h1>Welcome!</h1>
        </Row>
        <Row id="about">
          <h3>About Me</h3>
          <Card body>
            A little about me... Well, first and foremost, I am currently
            serving as a soldier in the United States Army Reserves. My primary
            positions have been as a power generation equipment repairer and
            squad leader. I also currently hold a degree in Mechanical
            Engineering from the University of Washington but I found that the
            line of work does not suit the career that I wanted to have, and so
            I am currently pursuing software engineering. The main reason being,
            computer science 142, the intro course at the University of
            Washington, was one of the most enjoyable class that I have taken to
            this day. I enjoy solving puzzles, breaking down problems into
            structures and ultimately creating efficient final products.
          </Card>
        </Row>
        <Row id="projects">
          <h3>Projects</h3>
          <Row xs={1} sm={1} md={2} lg={3}>
            <Col>
              <Card style={{ width: "18rem", height: "20rem" }}>
                <Card.Body>
                  <Card.Title>Valorant Weapon Skins</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    An app referencing the api of a popular game, Valorant.
                  </Card.Subtitle>
                  <Card.Text>
                    This app allows users to quickly browse through some of the
                    aesthetics that are implemented in the game Valorant,
                    specifically the different prints that can be placed on
                    weapons.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link to="https://github.com/dma151/project-2-react">
                    Github Repo
                  </Card.Link>
                  <Card.Link to="https://dma151.github.io/project-2-react/">
                    Visit Site
                  </Card.Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", height: "20rem" }}>
                <Card.Body>
                  <Card.Title>Dog Walker</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Group project that utilizes databases to connect essential
                    parties
                  </Card.Subtitle>
                  <Card.Text>
                    An app that allows dog walkers to connect to people who have
                    time to walk their dogs with their own respective portals
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link to="https://github.com/NODEMONSTERS/dogwalker-api">
                    Github Repo
                  </Card.Link>
                  <Card.Link to="https://nodemonsters.github.io/dogwalker-client/">
                    Visit Site
                  </Card.Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", height: "20rem" }}>
                <Card.Body>
                  <Card.Title>Simply Send</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    A messaging app that utilizes SQL databases
                  </Card.Subtitle>
                  <Card.Text>
                    Users can sign up, make friends/connections per email and
                    message one another
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link to="https://github.com/dma151/SimplySend_APP">
                    Github Repo
                  </Card.Link>
                  <Card.Link to="https://dma151.github.io/SimplySend_APP/">
                    Visit Site
                  </Card.Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Row>
        <Row id="collab">
          <h3>Collaborate With Me!</h3>
          <Collaborate />
        </Row>
      </Container>
    </div>
  );
}

export default App;
