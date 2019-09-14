import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default function ChooseExerciseScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View >
          <Container>
            <Header />
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            {/* <Thumbnail source={{uri: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2016/07/1-1-bench-press.jpg?itok=bJYGPFGO'}} /> */}
                            <Body>
                                <Text>Barbell Bench Press</Text>
                                <Text note>Main Muscle Worked: Chest</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2016/07/1-1-bench-press.jpg?itok=bJYGPFGO'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button 
                              transparent
                              onPress={() => {
                                Linking.openURL('https://www.youtube.com/watch?v=RsobeWfbBcY');
                              }} 
                            >
                                <Icon
                                  active 
                                  name="ios-videocam" 
                                />
                                <Text>Watch a tutorial</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="camera"/>
                                <Text>Record a video</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Left>
                            {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                            <Body>
                                <Text>Barbell Deadlift</Text>
                                <Text note>Main Muscle Worked: Hamstrings</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2016/05/how_to_deadlift_side_view.jpg?itok=8JVJ4ZqI'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button 
                              transparent
                              onPress={() => {
                                Linking.openURL('https://www.youtube.com/watch?v=a5zhnubunoE');
                              }}
                            >
                                <Icon active name="ios-videocam" />
                                <Text>Watch a tutorial</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="camera" />
                                <Text>Record a video</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Left>
                            {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                            <Body>
                                <Text>Overhead Press</Text>
                                <Text note>Main Muscle Worked: Shoulders</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/2016/07/4-1-overhead-press.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button 
                              transparent
                              onPress={() => {
                                Linking.openURL('https://www.youtube.com/watch?v=8E4oWpi0RkA');
                              }}
                            >
                                <Icon active name="ios-videocam" />
                                <Text>Watch a tutorial</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="camera" />
                                <Text>Record a video</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Left>
                            {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                            <Body>
                                <Text>Barbell Squat</Text>
                                <Text note>Main Muscle Worked: Quadriceps</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://i.pinimg.com/originals/c4/eb/03/c4eb03fe3b0b32533b613369d5ca1d9a.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button 
                              transparent
                              onPress={() => {
                                Linking.openURL('https://www.youtube.com/watch?v=tVB1q8zkP3o');
                              }}
                            >
                                <Icon active name="ios-videocam" />
                                <Text>Watch a tutorial</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="camera" />
                                <Text>Record a video</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
          </Container>
          
        </View>
      </ScrollView>
    </View>
  );
}

ChooseExerciseScreen.navigationOptions = {
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
    backgroundColor: '#fff',
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
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
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
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
