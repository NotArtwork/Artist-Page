import Navbar from "./Navbar";
import MixingPaint from '../media/mixingPaint.mp4'

const LandingPage = () => {
    return (
        <div className="landingpage">

            <Navbar />


            <div className='videoFilter'>
                {/* opacity filter over video */}
            </div>

            <video
                className='video'
                autoPlay
                loop
                muted
            >
                <source src={MixingPaint} type='video/mp4' />
            </video>


            <div className="landingText">
                <h1>World Class Artists</h1>

                <p>Sign up to keep updated with <br />
                    Gallery openings and Projects
                </p>

                <button className="joinUsBtn">Join us &nbsp; ></button>

            </div>
        </div >
    )
}

export default LandingPage;