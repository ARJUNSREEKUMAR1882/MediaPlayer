import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function LandingPage() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    // navigate to home
    navigate('/home')
  }
  return (
    <>
      <div className='container mt-5'>

        <div className="header row align-items-center m-5">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Media player App. will allow you to add and remove their their uploaded videos,
              also help to arrange them in different them in different categories by providing drag and drop functionalities</p>
            <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img src="https://media.giphy.com/media/zZw4eEWLMbc6k/giphy.gif" alt="Landing Image" />
            {/* <img src="https://media1.tenor.com/images/4d5fdb6c20630ca254865fd9ba781bd2/tenor.gif?itemid=14460643" alt="Landing image" /> */}
          </div>
        </div>

        <div className="features">
          <h3 className='text-center'>Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" style={{height:'56.5vh'}}  src="https://th.bing.com/th/id/R.72f1d2f880788a662c236e7c9ed5bfe0?rik=kJKgmqf7eUIpCw&riu=http%3a%2f%2fwww.netanimations.net%2fColorful-musical-notes-zoom-past-you.gif&ehk=1A%2fadWBhG9YyCHItt2XC75xbU4bz3TS01rafC9n%2fVvY%3d&risl=&pid=ImgRaw&r=0" />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    User can upload,view and 
                    remove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card>
                <Card.Img variant="top" style={{height:'53vh'}} src="https://media.giphy.com/media/tqfS3mgQU28ko/giphy.gif" />
                <Card.Body>
                  <Card.Title>Categorize Videos</Card.Title>
                  <Card.Text>
                   User can categorize the videos according to their preferences
                   using drag and drop features
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4"> <Card>
              <Card.Img variant="top" style={{height:'53vh'}}  src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                 User are able to see the Historyof watched videos
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
          </div>
        </div>

        <div className="video row border p-5 mt-5 rounded mb-5 align-items-center">
          <div className="col-lg-5">
          <h3 className='text-warning'>Simple , Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}> <span className='fs-4'>Play Everything: </span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, similique voluptatibus explicabo voluptas vero nam a, obcaecati corrupti quisquam asperiores aspernatur voluptates cupiditate!
           Tempora fuga architecto aliquam illo fugit facilis?
          </p>
          <p style={{textAlign:'justify'}}> <span className='fs-4'>Categorize Videos: </span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, similique voluptatibus explicabo voluptas vero nam a, obcaecati corrupti quisquam asperiores aspernatur voluptates cupiditate!
           Tempora fuga architecto aliquam illo fugit facilis?
          </p>
          <p style={{textAlign:'justify'}}> <span className='fs-4'>Watch History: </span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, similique voluptatibus explicabo voluptas vero nam a, obcaecati corrupti quisquam asperiores aspernatur voluptates cupiditate!
           Tempora fuga architecto aliquam illo fugit facilis?
          </p>


          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TDq05qUo1ww?si=80wwkiKSDXqcVbfR&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

      </div>
      <hr />
    </>
  )
}

export default LandingPage
