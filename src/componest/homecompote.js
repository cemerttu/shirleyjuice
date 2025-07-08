import "./homecompote.css";
import profileComponent from "./profilecomponent";
function HomeComponent() {
    return (
        <div className="Home-app">
           <div className="Home-header">
             <h1>Welcome to the Home Page</h1>
             <p>This is a simple home component.</p>
           </div>
           <profileComponent/>
        </div>
    );
}



export default HomeComponent;

