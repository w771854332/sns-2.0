import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import Expo from 'expo';
import {StackNavigator} from "react-navigation";
import RouterMap from '../../router/routerMap';
import LoginPage from '../../containers/PersonPage/loginPage';
import FollowingPage from '../../containers/PersonPage/followingPage';
import MessagePage from '../../containers/PersonPage/message';
import CollectionPage from '../../containers/PersonPage/collection';
import VoicePage from '../../containers/TranslationPage/voicePage';
import ChatPage from '../../containers/PersonPage/chat';
import { loadAssetsAsync } from '../../static/imageManager';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
const styles = StyleSheet.create({
    androidNav: {
        elevation: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#42b5fb',
        height: 55
    },
    iosNav: {
        elevation: 1,
        backgroundColor: '#42b5fb',
        height: 55
    },
    androidHome: {
        elevation: 1,
        backgroundColor: 'transparent',
        height: 0
    },
    iosHome: {
        elevation: 1,
        backgroundColor: 'transparent',
        height: 0,
        marginTop: -20
    },
    icon: {
        marginRight: 10
    }
});

const Router = ({ navigation }) => (
    <RouterMap navigation={navigation} />
);
const Login = ({ navigation }) => (
    <LoginPage navigation={navigation} />
);
const Message = ({ navigation }) => (
    <MessagePage navigation={navigation} />
);
const Collection = ({ navigation }) => (
    <CollectionPage navigation={navigation} />
);
const Following = ({ navigation }) => (
    <FollowingPage navigation={navigation} />
);
const Voice = ({ navigation }) => (
    <VoicePage navigation={navigation}/>
);
const Chat = ({ navigation }) => (
    <ChatPage  navigation={navigation}/>
);
export default class WHOLE extends React.Component{
    state = {
        appIsReady: true,
    };
    componentWillMount(){
        loadAssetsAsync(this.setState({appIsReady: true}));
    }
    render(){
        if (!this.state.appIsReady) {
            return <Expo.AppLoading />;
        }else{
            return (
                <SSNav/>
            );
        }
    }
}
function initStyles() {
    return (
        Platform.OS === 'android' ? styles.androidNav : styles.iosNav
    )
}
SSNav = StackNavigator({
    Home: {
        screen: Router,
        navigationOptions: {
            headerStyle: Platform.OS === 'android' ? styles.androidHome : styles.iosHome,
            headerBackTitle: null,
            gesturesEnabled: true,
        },
    },
    Login: {
        screen: Login,
        path: 'login/',
        navigationOptions: {
            title: '登录',
            // headerTintColor: 'black',
            headerStyle: {
                elevation: 1,
                marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
                height: 55
            },
            headerTitleStyle: {
                fontWeight: '400'
            },
            gesturesEnabled: true,
        }
    },
    Following:{
        screen: Following,
        navigationOptions: {
            title: '我的关注',
            headerTintColor: 'white',
            headerStyle: initStyles(),
            headerTitleStyle: {
                fontWeight: '400'
            },
            gesturesEnabled: true,
        }
    },
    Message: {
        screen: Message,
        navigationOptions: {
            title: '消息中心',
            headerTintColor: 'white',
            headerStyle: initStyles(),
            headerTitleStyle: {
                fontWeight: '400'
            },
            gesturesEnabled: true,
        }
    },
    Collection: {
        screen: Collection,
        navigationOptions: {
            title: '我的收藏',
            headerTintColor: 'white',
            headerStyle: initStyles(),
            headerTitleStyle: {
                fontWeight: '400',
            },
            gesturesEnabled: true,
        }
    },
    Voice: {
        screen: Voice,
        navigationOptions: {
            title: '语音翻译',
            headerTintColor: 'white',
            headerStyle: initStyles(),
            headerTitleStyle: {
                fontWeight: '400',
            },
            gesturesEnabled: true,
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: ({navigation}) => ({
            headerTitle: navigation.state.params.title,
            headerTintColor: 'white',
            headerStyle: initStyles(),
            headerTitleStyle: {
                fontWeight: '600',
            },
            headerBackTitleStyle: {
                fontSize: 14
            },
            headerRight: (<TouchableOpacity style={styles.icon} >
                <Ionicons size={23} color={'white'} name={'md-person'}/>
            </TouchableOpacity>),
            gesturesEnabled: true,
        })
    }
},{
    headerMode: 'screen',
});

