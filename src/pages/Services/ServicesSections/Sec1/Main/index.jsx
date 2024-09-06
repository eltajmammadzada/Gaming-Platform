import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
export default function Main() {
    return (
        <div className="mainS1">
            <div>

                <div className="icon">
                <IoPerson />
                </div>
                <div>
                    <b>90+</b>
                    <p>Clients</p>
                </div>
            </div>
            <div>

                <div className="icon">
                <FaLocationDot />
                </div>
                <div>
                <b>30+</b>
                <p>Countries</p>
                </div>
            </div>
            <div>

                <div className="icon">
                <FaHamburger />
                </div>
                <div>
                <b>50+</b>
                <p>Projects</p>
                </div>
            </div>
        </div>

    )
}