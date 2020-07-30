import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }
 
    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value);
    }

 /* 
     function handleChange(infosDoEvento) {
         const { getAttribute, value} = infosDoEvento.target;
         setValue(
            getAttribute('name'),
            value
          );  
    }
*/
  
    return (
            <PageDefault>
                <h1>Cadastro de Categoria: {values.nome}</h1>
                <form onSubmit={function handlesSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault();
                    setCategorias([
                        ...categorias,
                        values
                    ]);
                    setValues(valoresIniciais)
                 }}>

                   
                    <FormField
                    label="Nome da Categoria:"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                    />

                    <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                    </div>

                    <FormField
                    label="cor"
                    type="color"
                    name="cor"
                    value={values.nome}
                    onChange={handleChange}
                    />
                    {/*<div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                        />
                    </label>
                    </div>*/}
              

                    <button>
                        Cadastrar
                    </button>
                </form>

                <ul>
                    {categorias.map((categoria, indece) => {
                        return (
                            <li key={`${categoria}${indece}`}>
                                {categoria.nome}
                            </li>
                        )
                    })}
                </ul>
            

                <Link to="/">
                    Ir para a Home
                </Link>
            </PageDefault>
    )
}

export default CadastroCategoria;