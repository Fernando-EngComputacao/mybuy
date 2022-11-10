import React from "react";
import * as Native from 'react-native';
import styled from "styled-components/native";

export const Container = styled.SafeAreaView``;

export const Header = styled.View`
    align-items: center;
    justify-content: center;
    border: 1px solid #5c9aed;
    height: 45%;
    background-color: #5c9aed;
    margin: 1%;

`;

export const Viewer = styled.ScrollView`
    display: flex;
    flex-direction: row;
    height: 1%;
    width: 100%;
    height: 4%;
    background-color: antiquewhite;
    margin: 1%;
`;

export const Card = styled.View`
    background-color: whitesmoke;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: auto;   
    padding: 2%;
    max-width: 100%;
`;

export const Element = styled.View`
    background-color: #ff5f11;
    color: #fff;
    height: 50%;
    max-width: 100%;
    justify-content: flex-end;
    align-items: flex-start;
    margin: auto;
`;

export const Text = styled.Text`
    color: #373737;
    font-size: 15px;
`;