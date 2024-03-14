import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import duneImage from "../assets/image/trending/dune.jpg"
import everythingImage from "../assets/image/trending/everything.jpg"
import infiniteImage from "../assets/image/trending/infinite.jpg"
import jokerImage from "../assets/image/trending/joker.jpg"
import morbiusImage from "../assets/image/trending/morbius.jpg"
import lightyearImage from "../assets/image/trending/lightyear.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
            <h1 className='text-white'>#TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper' id='trending'>
                        <Card className="movieImage">
                        <Image src={duneImage} alt="Dune Movies" className='images'/>
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className=' text-center'>DUNE</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className=' text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                        <Image src={everythingImage} alt="Everything Movies" className='images'/>
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className=' text-center'>EVERYTHING</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className=' text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                        <Image src={infiniteImage} alt="Infinite Movies" className='images'/>
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className=' text-center'>INFINITE</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className=' text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                        <Image src={jokerImage} alt="Joker Movies" className='images'/>
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className=' text-center'>JOKER</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className=' text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                        <Image src={morbiusImage} alt="Morbius Movies" className='images'/>
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className=' text-center'>MORBIUS</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className=' text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                        <Image src={lightyearImage} alt="Morbius Movies" className='images'/>
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className=' text-center'>LIGHT YEAR</Card.Title>
                            <Card.Text className='text-left'>
                            This is a wider card with natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className=' text-left'>Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending