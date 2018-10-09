import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

export default class Body extends Component{

    constructor(props){
        super(props)
        this.state = {
            TextInputValue: '', Look: ''
        }
    }

    buttonClickListener = () =>{
        const { TextInputValue } = this.state;
            this.setState({
                Look: this.state.TextInputValue
        });
        this.textInput.clear()

    }


    render() {
        return (
          <View style={styles.container}>
              <View style={styles.text1}>
                <Text>{this.state.Look}</Text>
              </View>
                <View style={styles.text2}>          
                    <TextInput style={styles.text} onChangeText={TextInputValue => this.setState({TextInputValue})} 
                    ref={input => { this.textInput = input }}
                    placeholder="type text here .." ></TextInput>              
                    <Button title="Submit" onPress={this.buttonClickListener} />
                </View>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        borderWidth: 0.3,
        width: 280,
        height: 35,
        paddingLeft: 40
    },
    text2: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 30,
        paddingLeft: 30
    }
  });