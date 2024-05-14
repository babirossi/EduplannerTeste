import css from "./VisulizacaoUsuario.module.css"
import SideBar from "../Components/SideBar";
import VisualizacaoBox from "../Components/VisualizacaoBox"


function VisualizacaoUsuario(){
    return(
        <div className={css.tudo}>
            <SideBar></SideBar>
            <div>
                <VisualizacaoBox></VisualizacaoBox>
            </div>
        </div>
    )
}
export default VisualizacaoUsuario