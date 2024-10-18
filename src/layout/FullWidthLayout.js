import { connect,} from "react-redux";
import {ToastContainer} from 'react-toastify'
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const FullWidthLayout = (props) => {
    
    return (
        <div data-theme='bumblebee'>
            <ToastContainer autoclose={5000}/>
            <NavBar />
                { props.children }
            <Footer/>
        </div>
    );
};

export default connect(null, {
    
}) (FullWidthLayout)