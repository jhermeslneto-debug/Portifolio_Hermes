import Icone from '../Icone/Icone'

function Hero({nome, cargo, resumo, cidade}){
    return(
        <section className="hero" id="topo">
            <div className="container hero_linha">
                <div className="hero_status">
                    <p>em busca de um estágio</p>
                    <h1>
                        {nome}
                        <span>.</span>
                    </h1>
                    <p className="hero_cargo">{cargo}</p>
                    <p className="hero_resumo">{resumo}</p>
                    <div className="hero_acoes">
                        <a className="botao botao--primario" href="#projetos">
                            ver projetos <Icone nome="seta" tamanho={18} />
                        </a>
                         <a className="botao botao--contorno" href="#contato">
                            falar comigo
                        </a>
                    </div>
                </div>
                <div className="janela" role="img"
                aria-label={`Trecho de código com dados de ${nome}`}
                >
                    <div className="janela_codigo">
                        <span className="janela_ponto"></span>
                        <span className="janela_ponto"></span>
                        <span className="janela_ponto"></span>
                        <span className="janela_nome">perfil.js</span>
                    </div>
                    <pre className="janela_codigo">
                        <code>
                            <span className="cod-palavra">export const</span> ={'{'}
                                {'\n'}nome: <span className="cod-texto">'{nome}'</span>
                                {'\n'}cidade: <span className="cod-texto">'{cidade}'</span>
                                {'\n'}foco: <span className="cod-texto">'React'</span>
                                {'\n'}
                            {'}'}
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    )
}

export default Hero
