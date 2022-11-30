import Navbar from "./Navbar";
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="about">
            <Navbar />
            <div className="aboutNames">

                <Link
                    className='link' to='/jelani'>
                    <h1>Jelani</h1>
                </Link>

                <Link
                    className='link' to='/sabrina'>
                    <h1>Sabrina</h1>
                </Link>

            </div>

            <div className="aboutImgDiv">

                <Link
                    to='/jelani'>

                    <img className="aboutImg" src="https://media.istockphoto.com/id/1389097654/photo/young-panda-climbing-a-tree-under-the-supervision-of-his-mother.jpg?b=1&s=170667a&w=0&k=20&c=c0nBeVG29cs7pHK7s4iFa5evHSS0zOcTibY4OeGlhqs=" />
                </Link>

                <Link
                    to='/sabrina'>

                    <img className="aboutImg" src="https://pbs.twimg.com/profile_images/646496617525288960/kNke3rKq_400x400.jpg" />
                </Link>

            </div>

            <div className="aboutText">


                <div className="aboutText1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam dolorum, odit, ullam nam sint dolorem ab necessitatibus magni optio dolor omnis, quaerat veritatis! In suscipit earum dolor illo! Cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus eos, libero natus, repellat sint ratione, amet iure nobis ad quisquam doloremque excepturi animi autem deleniti nisi quaerat delectus soluta.</p>

                </div>

                <div className="aboutText2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam dolor eaque, quasi commodi aperiam soluta. Consectetur exercitationem sint, porro sequi rem, molestiae eius praesentium, iste aperiam recusandae aliquam quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque voluptate, dolorem nemo nesciunt libero! At, earum itaque voluptates odio iusto, unde expedita fugit, eligendi ea voluptas error molestiae dicta?</p>
                </div>

            </div>

            <div className="sampleImgDiv">
                <img className="sampleImg" src="https://www.tallusridge.com/wp-content/uploads/2019/08/650x600.jpg" />
                <img className="sampleImg" src="https://www.tallusridge.com/wp-content/uploads/2019/08/650x600.jpg" />
                <img className="sampleImg" src="https://www.tallusridge.com/wp-content/uploads/2019/08/650x600.jpg" />
                <img className="sampleImg" src="https://www.tallusridge.com/wp-content/uploads/2019/08/650x600.jpg" />
            </div>
        </div>
    )
}

export default About;