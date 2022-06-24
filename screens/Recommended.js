import React, { Component } from 'react';
import { View, StyleSheet, FlatList, PanResponder } from 'react-native';
import { Card } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import axios from 'axios';

export default class Recommended extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    getData = () => {
        const url = "https://315a-110-227-194-66.in.ngrok.io/popular";
        axios
            .get(url)
            .then(async (response) => {
                required = [];
                data = response.data.data;
                for (let i in data) {
                    if (data[i].lang === "en") {
                        required.append(data[i]);
                    }
                }

                this.setState({
                    data: required
                });
            })
            .catch(err => console.log(err.message))
    }

    renderItem = ({ item, index }) => {
        return (
            <Card
                key={`${index}`}
                featuredTitle={item.title}
                containerStyle={styles.cardContainer}
                featuredTitleStyle={styles.title}
            ></Card>
        );
    }

    keyExtractor = (item, index) => index.toString()

    componentDidMount() {
        this.getData();
    }

    render() {
        const { data } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    title: {
        backgroundColor: "#fff",
        marginTop: RFValue(65),
        paddingLeft: RFValue(15),
        fontSize: RFValue(25),
        alignSelf: 'flex-start'
    },
    cardContainer: {
        flex: 1,
        marginBottom: RFValue(20),
        height: RFValue(110),
        borderRadius: RFValue(10),
        justifyContent: 'center'
    }
});