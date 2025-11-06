// App.js
import React from 'react';
import { ScrollView } from 'react-native';
import Titulo from './Titulo';
import Saudacao from './Saudacao';
import FotoPerfil from './FotoPerfil';
import CartaoUsuario from './CartaoUsuario';

export default function App() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Titulo />
      <Saudacao nome="Schawarski" />
      <Saudacao nome="Aluna Tech" />
      <FotoPerfil url="https://randomuser.me/api/portraits/men/1.jpg" />
      <CartaoUsuario
        nome="Joana"
        descricao="Desenvolvedora Mobile em formação"
        imagem="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </ScrollView>
  );
}