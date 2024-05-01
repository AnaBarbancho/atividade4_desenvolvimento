
import trevo from "../../assets/trevo-quina.png";
import { useLoteria } from "../../hooks";

export default function Timemania(){
    const { timemania } = useLoteria();
    
    return (
        <div className="mega-bloco-principal">
            <div>
                <div className="mega-bloco-loteria">
                    <img src={trevo} alt="" />
                    <span className="mega-nome-loteria">Time mania</span>
                </div>
                <div className="mega-bloco-estimativa">
                    <div className="mega-texto-estimativa"> 
                        Estimativa de prêmio do próximo concurso. 
                        Sorteio em {timemania.dataProximoConcurso}:
                    </div>
                    <div className="mega-valor-estimativa"> 
                        {timemania.valorEstimadoProximoConcurso.toLocaleString("pt-Br",{
                            style: "currency",
                            currency: "BRL"
                        })}
                    </div>
                </div>
            </div>
            <div className="mega-bloco-direita">
                <div className="mega-linha-bola">
                    {
                        timemania.dezenas.map( dezena =>
                                <div className="mega-bola" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                <div className="mega-texto-acumulou">
                    {
                        timemania.quantidadeGanhadores === 0 ? 
                        "ACUMULOU!" :
                        `${timemania.quantidadeGanhadores} GANHADORES`
                    }
                </div>
                <div className="mega-data-concurso">
                    {
                        `Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`
                    }
                </div>
            </div>
        </div>
    );
}