import FullWidthLayout from "../../layout/FullWidthLayout";
import About from "../../components/About";
import MiChat from "../../components/MiChat";
import MisProyectos from "../../components/MisProyectos";
import MiMD from "../../components/MiMD"

const Home = () => {
    console.log("homeview")
    return(
        <>
        <FullWidthLayout>
            
            <About />
            <MiChat />
            <MisProyectos />
            <MiMD />

        </FullWidthLayout>
        </>
    );
};

export default Home;
