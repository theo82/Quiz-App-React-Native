import Reac, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.random() * (max - min) + min;

    if(rnd === exclude) {
        return generateRandomBetwwen(min, max, exclude);
    } else {
        return rndNum;
    }
}


const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoise));
};

const styles = StyleSheet.create({});

export default GameScreen;