import Navbar from "./Navbar";

const SabrinaProfile = () => {
    return (
        <div>
            <Navbar />
            <div className="profileDiv">

                <h1>Sabrina</h1>
                <img className="profileImg" src="https://pbs.twimg.com/profile_images/646496617525288960/kNke3rKq_400x400.jpg" />
                <p className="profileBio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam numquam distinctio temporibus inventore, obcaecati odio! Incidunt et iste quo rerum, ullam autem eum placeat explicabo animi accusantium velit rem tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestiae sequi rerum delectus corrupti laboriosam in qui ad earum perspiciatis, assumenda quis quidem. Ut sunt similique expedita et labore dignissimos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia eum sunt animi ad fugiat? Fuga vero perspiciatis nulla provident voluptate quasi, sunt voluptatum aliquam, quibusdam architecto molestiae porro quaerat.</p>

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

export default SabrinaProfile;