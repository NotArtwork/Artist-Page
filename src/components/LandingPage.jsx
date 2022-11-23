import Navbar from "./Navbar";

const LandingPage = () => {
    return (
        <div className="landingpage">
            <Navbar />

            {/* <h1
                style={{
                    margin: '0', padding: '1.5%'
                }}>Sabrinas Pandas</h1> */}

            <div className="landingText">

                <h1>World Class Artists</h1>
                <p>Sign up to keep updated with
                    Gallery openings
                    and
                    our projects
                </p>
            </div>

            <button>Join us ></button>

        </div>
    )
}

export default LandingPage;