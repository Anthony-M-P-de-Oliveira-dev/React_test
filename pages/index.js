import { useState } from 'react';

function Pagina(){
    return (
        <div>
            <div><h1>Contador</h1></div>
            <div><Contador /></div>
        </div>
    )
}


function Contador(){

    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(++contador);
    }

        return (
            <div>
                <div>{contador}</div>
                <button onClick={adicionarContador}>Adicionar</button>
            </div>
        )
    
}

export default Pagina