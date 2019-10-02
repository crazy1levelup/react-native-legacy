import React, { Component } from 'react';
import { Text} from 'react-native'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, CreatedButton, Spinner } from '../common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
    
    onButtonPress() {
        const {email, password} = this.props
        this.props.loginUser({email, password})
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.props.email}
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        value={this.props.password}
                        secureTextEntry
                        label="Password"
                        placeholder="********"
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                {this.props.error ? <Text style={{color:'red'}}>{this.props.error}</Text> : null}
                <CardSection>
                    {this.props.loading ? <Spinner></Spinner> : <CreatedButton 
                    buttonText="Login"
                    onPress={this.onButtonPress.bind(this)}
                     />}
                    
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
        
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);