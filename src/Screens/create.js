import Youtube from './youtube';
import '../css/style.css';

function Create(){
 return(
    <div class="create">
        <form>
            <h1>Create Course</h1>
            <label>Title</label>
            <input type="text" Placeholder="Enter the Title"></input>
            <label>Description</label>
            <textarea type="text" Placeholder="Enter brief Description"></textarea>
            <button className= "publish-button">Publish</button>    
        </form>
        <Youtube />
    </div>
  
 )
}

export default Create;