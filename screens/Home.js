import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header, AirbnbRating, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import axios from 'axios';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            articleDetails: []
        }
    }

    getFirstArticle = () => {
        const url = "https://315a-110-227-194-66.in.ngrok.io/first";
        axios
            .get(url)
            .then(response => {
                let details = response.data.data;

                this.setState({
                    articleDetails: details
                });
            })
            .catch(err => console.log(err.message))
    }

    likeArticle = () => {
        const url = "https://3d2c-110-227-194-66.in.ngrok.io/liked_articles";
        axios
            .post(url)
            .then(response => {
                this.getMovies()
            })
            .catch(err => console.log(err.message))
    }

    dislikeArticle = () => {
        const url = "https://315a-110-227-194-66.in.ngrok.io/disliked_articles";
        axios
            .post(url)
            .then(response => {
                this.getMovies()
            })
            .catch(err => console.log(err.message))
    }

    unwatchedArticle = () => {
        const url = "https://315a-110-227-194-66.in.ngrok.io/unwatched_articles";
        axios
            .post(url)
            .then(response => {
                this.getMovies()
            })
            .catch(err => console.log(err.message))
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { articleDetails } = this.state;
        const { title } = articleDetails
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Header
                        centerComponent={{
                            text: "Movie Recommender",
                            style: styles.headerTitle
                        }}
                        rightComponent={{
                            icon: "search",
                            color: "#fff"
                        }}
                        backgroundColor="#d500f9"
                        containerStyle={{
                            flex: 1
                        }}
                    />
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.upperContainer}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.lowerContainer}>
                        <View style={{flex: 0.3}}>
                            <AirbnbRating
                                count={10}
                                reviews={["", "", ""]}
                                defaultRating={rating}
                                isDisabled={true}
                                size={RFValue(25)}
                                starContainerStyle={{marginTop: -30}}
                            />
                        </View>
                    </View>
                    <View style={styles.lowerBottomContainer}>
                        <View style={styles.iconButtonContainer}>
                            <TouchableOpacity onPress={this.likeMovie()}>
                                <Icon
                                    reverse
                                    name={"check"}
                                    type={"entypo"}
                                    size={RFValue(30)}
                                    color="76ff03" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.dislikeMovie()}>
                                <Icon
                                    reverse
                                    name={"cross"}
                                    type={"entypo"}
                                    size={RFValue(30)}
                                    color="76ff03" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={this.unwatchedMovie()}>
                                <Text style={styles.buttonText}>Did not Watch</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flex: 0.1
    },
    headerTitle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: RFValue(18)
    },
    subContainer: {
        flex: 0.9
    },
    upperContainer: {
        flex: 0.2,
        alignItems: 'center'
    },
    title: {
        fontSize: RFValue(20),
        fontWeight: "bold",
        textAlign: 'center'
    },
    lowerContainer: {
        flex: 0.35
    },
    iconButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: RFValue(160),
        height: RFValue(50),
        borderRadius: RFValue(20),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginTop: RFValue(15)
    },
    buttonText: {
        fontSize: RFValue(15),
        fontWeight: "bold"
    }
});