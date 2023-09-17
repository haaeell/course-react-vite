import { Container, Row,Col } from "react-bootstrap"
import { testimonial } from "../data"
import FaqComponent from "../components/FaqComponent"

const Testimonial = () => {
  return (
    <div>
      <div className="testimonial-page">
        <div className="testimonial min-vh-100">
          <Container>
            <Row className="mb-5">
              <Col>
              <h1 className="fw-bold text-center">Semua Testimonial</h1>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, sint.</p>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
                  return  <Col className=" rounded mb-5" key={data.id}>
                    <p className="desc shadow-sm p-3">{data.desc}</p>
                    <div className="people">
                        <img src={data.image} alt="" />
                        <div>
                            <h5 className="mb-1">{data.name}</h5>
                            <p className="m-0 fw-bold">{data.skill}</p>
                        </div>
                    </div>
                  </Col>

                })}
            </Row>
          </Container>
        </div>
      </div>
      <FaqComponent/>
    </div>
  )
}

export default Testimonial
