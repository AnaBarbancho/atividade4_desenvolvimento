
import trevo from "../../assets/trevo-quina.png";
import { useLoteria } from "../../hooks";

export default function Quina(){
    const { quina } = useLoteria();
    
    return (
        <div className="mega-bloco-principal">
            <div>
                <div className="mega-bloco-loteria">
                    <img src={trevo} alt="" />
                    <span className="mega-nome-loteria">Quina</span>
                </div>
                <div className="mega-bloco-estimativa">
                    <div className="mega-texto-estimativa"> 
                        Estimativa de prêmio do próximo concurso. 
                        Sorteio em {quina.dataProximoConcurso}:
                    </div>
                    <div className="mega-valor-estimativa"> 
                        {quina.valorEstimadoProximoConcurso.toLocaleString("pt-Br",{
                            style: "currency",
                            currency: "BRL"
                        })}
                    </div>
                </div>
            </div>
            <div className="mega-bloco-direita">
                <div className="mega-linha-bola">
                    {
                        quina.dezenas.map( dezena =>
                                <div className="mega-bola" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                <div className="mega-texto-acumulou">
                    {
                        quina.quantidadeGanhadores === 0 ? 
                        "ACUMULOU!" :
                        `${quina.quantidadeGanhadores} GANHADORES`
                    }
                </div>
                <div className="mega-data-concurso">
                    {
                        `Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`
                    }
                </div>
            </div>
        </div>
    );
}