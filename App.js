import React from "react";
import { ScrollView } from "react-native";
import Titulo from "./componentes/titulo";
import Saudacao from "./componentes/Saudacao";
import FotoPerfil from './componentes/FotoPerfil';
import CartaoUsuario from "./componentes/cartaoUsuario";


export default function App() {
 return <ScrollView>
   <Titulo />
   <Saudacao nome='Nicolas' />
   <FotoPerfil />


   <CartaoUsuario nome='gabriel'
     descricao={'Programador Mobile'}
     img='perfil00'
   />


   <CartaoUsuario nome='Pedro'
     descricao={'Programador Mobile'}
     img='perfil01'
   />


   <CartaoUsuario nome='Guilherme'
     descricao={'Programador Mobile'}
     img='perfil02'
   />


   <CartaoUsuario nome='nicolas'
     descricao={'Programador Mobile'}
     img='perfil03'
   />


   <CartaoUsuario nome='thiago'
     descricao={'Programador Mobile'}
     img='perfil04'
   />


 </ScrollView>


}



