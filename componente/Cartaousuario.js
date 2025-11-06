import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CartaoUsuario({ nome, descricao, imagem }) {
  return (
    <View style={estilos.cartao}>
      <Image source={{ uri: imagem }} style={estilos.foto} />
      <Text style={estilos.nome}>{nome}</Text>
      <Text style={estilos.descricao}>{descricao}</Text>
    </View>
  );
}