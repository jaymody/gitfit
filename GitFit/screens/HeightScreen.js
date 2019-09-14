import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  Picker,
} from 'react-native';
// import { Button } from 'react-native-material-ui'
// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends Component{

  constructor(props) {
    super(props)  
    this.state = {
      TextInputValue: ''
    }
  }

  buttonClickListener = () =>{
    const { TextInputValue }  = this.state ;
    Alert.alert(TextInputValue);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <Text style={styles.titleText}>Welcome to GitFit!</Text>
          {/* <View style={styles.getStartedContainer}>
            <DevelopmentModeNotice />

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View> */}

          {/* <View style={styles.helpContainer}>
            <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.textContainer}>
            <Text style={styles.textContainer}>
              Before we get started with your AI augmented training, we have two questions to get you set up:
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.titleText}>
              What's your height?
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Picker
                selectedValue={this.state.language}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue) =>
                    this.setState({language: itemValue})
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
              <View style={[{ width: "93%", margin: 15, backgroundColor: "red" }]}>
                {/* <Button
                onPress={this.buttonClickListener}
                title="Next"
                color = "red"
                /> */}
              </View>
          </View>


        </ScrollView>
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>
          

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>
              navigation/MainTabNavigator.js
            </MonoText>
          </View>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        GitFit
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    marginBottom: 20,
    backgroundColor: '#3d3d5a',
  },
  inputContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    marginRight:20,
    marginLeft:20,
    backgroundColor: '#3d3d5a',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 45,
    marginBottom: 20,
    fontSize: 18,
    color: '#dedfdc',
    marginLeft: 7,
    marginRight: 7,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    backgroundColor: '#3d3d5a',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  inputText: {
    height: 40,
    borderColor: '#dedfdc',
    borderWidth: 1.2,
    color: '#dedfdc',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  titleText: {
    textAlign: "center",
    fontSize: 30,
    color: '#dedfdc',
    marginTop: 15
  }
});
