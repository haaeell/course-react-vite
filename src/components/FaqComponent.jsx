import { Accordion, Row, Col, Container } from "react-bootstrap";
import { faq } from "../data/index";
const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center" >
              Pertanyaan Yang Sering Di Tanyakan{" "}
            </h1>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-3 pt-5">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion defaultActiveKey="0" className="shadow-sm">
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header className="fw-bold">
                      {data.title}
                    </Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
