import Food from "../components/food.js";
import Footer from "../components/footer.js";
import Music from "../components/music.js";
import Navuser from "../components/navuser.js";


function Dashboard(){
    return(
        <>
        <Navuser/>
        <Food/>
        <Music/>
        <Footer/>
        </>
    )
}


export default Dashboard;