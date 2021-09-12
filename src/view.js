import ReactPlayer from "react-player";
import './css/style.css';

export function View(){
    return(
        <div className="view-box">
            <div className="youtubeBox">
                <ReactPlayer url='https://www.youtube.com/watch?v=Ke90Tje7VS0&list=PLTjRvDozrdlw5En5v2xrBr_EqieHf7hGs&index=2' className="player" controls />
            </div>
            <h1>Learn React Js Tutorials for beginners</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui sit quam assumenda ducimus dolorem perferendis, sed non sint eius, tempora quas suscipit ipsum esse! Ea magni at perferendis, similique qui explicabo iusto? Deleniti maxime excepturi, optio delectus facere quaerat.  
            </p>
        </div>
    )
}

export default View;