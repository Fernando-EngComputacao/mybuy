import React from "react";
import { SafeAreaView, Text } from "react-native";

import * as S from './style';

export default function MenuScreen() {

    return <S.Container>
        <S.Header>
            <S.Text>Header</S.Text>
        </S.Header>
        <S.Viewer horizontal={true}>
            <S.Card>
                <S.Element>
                    <S.Text>Primeiro</S.Text>
                </S.Element>
            </S.Card>
        </S.Viewer>
    </S.Container>
}