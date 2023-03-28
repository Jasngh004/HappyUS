import Body from "../components/dashbody.js";
import Head from "../components/dashhead.js";
import Down from "../components/dashdown.js";
import Footer from "../components/footer.js";

import Navuser from "../components/navuser.js";


function Dashboard(){
    return(
        <>
        <Navuser/>
        <Head/>
        <Body/>
        <Down/>
        
       
        <Footer/>
        </>
    )
}


export default Dashboard;