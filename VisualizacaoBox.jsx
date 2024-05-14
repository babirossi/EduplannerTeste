import css from "./VisualizacaoBox.module.css"

function VisualizacaoBox(){
    return(
        <div className={css.conteinerUsua}>
            <div className={css.coordenador}>
                <p>Coordenadores</p>
                <div>
                    <img src={'UsuLaranja.png'} className={css.imagens}/>
                </div>
                <div className={css.botao}>
                    <button>Novo Usuário <img src={'mais.png'} style={{width: 8}}/></button>
                </div>
            </div>
            <div className={css.professores}>
                <p>Professores</p>
                <div>
                    <img src={'UsuarioRoxo1.png'} className={css.imagens}/>
                </div>
                <div>
                    <img src={'UsuarioRoxo2.png'} className={css.imagens}/>
                </div>
                <div>
                    <img src={'UsuarioRoxo3.png'} className={css.imagens}/>
                </div>
                <div className={css.ordenarPor}>
                    Ordenar por <img src={'baixo.png'} className={css.setabaixo}/>
                </div>

            </div>
            <div className={css.alunos}>
                <p>Alunos</p>
                <div>
                    <img src={'UsuarioAzul1.png'} className={css.imagens}/>
                </div>
                <div>
                    <img src={'UsuarioAzul2.png'} className={css.imagens}/>
                </div>
                <div>
                    <img src={'UsuarioAzul3.png'} className={css.imagens}/>
                </div>
                <div>
                    <img src={'UsuarioAzul4.png'} className={css.imagens}/>
                </div>
                <div>
                    <img src={'lado.png'} className={css.setalado} style={{width: 30}}/>
                </div>
                <div className={css.ordenarPor}>
                    Ordenar por <img src={'baixo.png'} className={css.setabaixo}/>
                </div>
            </div>
        </div>
    )
}

export default VisualizacaoBox