import React from "react";
import { SafeAreaView, Text } from "react-native";

import * as S from './style';

export default function MenuScreen() {

    return <S.Container>
        <S.Header>
            <S.Text>Header</S.Text>
        </S.Header>
        <S.Viewer>
            <S.Text>Fernando</S.Text>
            <S.Text>Furtado</S.Text>
            <S.Text>Carrilho</S.Text>
        </S.Viewer>
    </S.Container>
}