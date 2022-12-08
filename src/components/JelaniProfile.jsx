import Navbar from "./Navbar";

const JelaniProfile = () => {

    const sendContact = async (obj) => {
        let req = await fetch('localhost:5001' {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
        let res = req.json()
    }

    return (
        <div>
            <Navbar />

            <div className="profileDiv">

                <h1 className="profileName">Jelani</h1>
                <img className="profileImg" src="https://media.istockphoto.com/id/1389097654/photo/young-panda-climbing-a-tree-under-the-supervision-of-his-mother.jpg?b=1&s=170667a&w=0&k=20&c=c0nBeVG29cs7pHK7s4iFa5evHSS0zOcTibY4OeGlhqs=" />
                <p className="profileBio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam numquam distinctio temporibus inventore, obcaecati odio! Incidunt et iste quo rerum, ullam autem eum placeat explicabo animi accusantium velit rem tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestiae sequi rerum delectus corrupti laboriosam in qui ad earum perspiciatis, assumenda quis quidem. Ut sunt similique expedita et labore dignissimos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia eum sunt animi ad fugiat? Fuga vero perspiciatis nulla provident voluptate quasi, sunt voluptatum aliquam, quibusdam architecto molestiae porro quaerat.</p>

                <h3>Contact the Artist:</h3>

                <form className="form">
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>

                    <label>
                        Phone Number:
                        <input type="text" name="phonenumber" />
                    </label>

                    <label>
                        Message:
                        <input type="text" name="message" />
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>

        </div>
    )
}

export default JelaniProfile;