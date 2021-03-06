import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView  } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <ScrollView>
        <View style={styles.screen}>
            <TitleText>
                The Game is Over!
            </TitleText> 
            <View style={styles.imageContainer}>
                <Image 
                   source={require('../assets/success.png')} 
                //    source={{
                //        uri: 
                //         'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nist.gov%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F960_x_960_limit%2Fpublic%2Fimages%2F2018%2F10%2F24%2Fleadership-enlightenment-fellows.jpg%3Fitok%3D4Pkf8Icr&imgrefurl=https%3A%2F%2Fwww.nist.gov%2Fblogs%2Fblogrige%2Fleadership-enlightenment-baldrige-executive-fellow&tbnid=CjReM2Mk_krIaM&vet=12ahUKEwiUt4vYvontAhUwwQIHHbpmAbYQMygPegUIARD4AQ..i&docid=nej2T5Qc6sMUeM&w=960&h=600&q=top%20of%20a%20mountain&ved=2ahUKEwiUt4vYvontAhUwwQIHHbpmAbYQMygPegUIARD4AQ'
                //     }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: "hidden",
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
      width: '100%',
      height: '100%'
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').width / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }

})

export default GameOverScreen;