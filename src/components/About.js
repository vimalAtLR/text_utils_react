import React, {useState} from 'react'

function About() {
    const [myStyle, setmyStyle] = useState({
        color: 'white',
        backgroundColor: 'black',
    });

    // set button text
    const [btnText, setbtnText] = useState("Enable light mode");

    // handle dark mode
    const toggleStyle = () => {
        if (myStyle.color === "white") {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white',
            });
            setbtnText("Enable dark mode");
        } else {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: "1px solid white"
            });
            setbtnText("Enable light mode");
        }
    }

    return (
        <div className='container my-2 p-2' style={myStyle}>
            <h1>About Us</h1>
            <div id="accordion">
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Collapsible Group Item #1
                        </button>
                    </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary mx-2" >{btnText}</button>
            </div>
        </div>
    )
}

export default About
