import React from "react";
import * as Native from 'react-native';
import styled from "styled-components/native";

export const Container = styled.SafeAreaView``;

export const Header = styled.View`
    align-items: center;
    justify-content: center;
    height: 45%;
    border-radius: 6%;
    background-color: #5c9aed;

`;

export const Viewer = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    
`;

export const Text = styled.Text`
    color: #373737;
`;