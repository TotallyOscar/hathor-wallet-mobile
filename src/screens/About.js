import React from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { t } from 'ttag';
import VersionNumber from 'react-native-version-number';
import HathorHeader from '../components/HathorHeader';
import Logo from '../components/Logo';
import TextFmt from '../components/TextFmt';
import baseStyle from '../styles/init';
import { str2jsx } from '../utils';

export class About extends React.Component {
  style = Object.assign({}, baseStyle, StyleSheet.create({
    view: {
      padding: 16,
      justifyContent: 'space-between',
      flexGrow: 1,
    },
    logoView: {
      marginTop: 16,
      marginBottom: 16,
    },
  }));

  render() {
    const Link = (props) => (
      <Text
        style={this.style.link}
        onPress={() => Linking.openURL(props.href)}
      >
        {props.children}
      </Text>
    );

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <HathorHeader
          title={t`ABOUT`}
          onBackPress={() => this.props.navigation.goBack()}
        />
        <ScrollView pinchGestureEnabled={false} contentContainerStyle={this.style.view}>
          <View style={this.props.logoView}>
            <Logo />
          </View>
          <Text style={this.style.text}>{`v${VersionNumber.appVersion} (build ${VersionNumber.buildVersion})`}</Text>

          <Text style={this.style.title}>Hathor Labs</Text>
          <Text style={this.style.text}>
            {t`Thank you for choosing OscarCoin.`}
          </Text>

          <TextFmt style={this.style.text}>
            {t`This wallet is connected to the **mainnet**.`}
          </TextFmt>
          <Text style={this.style.text}>
            {t`OscarCoin was created purely as a joke, it is not recommended to take the currency seriously. 
            However, the currency may be used in any way you like.`}
          </TextFmt>
          <Text style={this.style.text}>
            {t`All OscarCoin transactions are anonymous and irreversible, please take caution when sending and/or 
            recieving OscarCoin and double check your payment before confirming.`}
 </TextFmt>
          <Text style={this.style.text}>
            {str2jsx(
              t`For further information, check out our website |**Coming Soon**|.`,
              { link: (x, i) => <Link key={i} href='https://hathor.network/'>{x}</Link> }
            )}
          </TextFmt>
          <Text style={this.style.text}>
            {t`OscarCoin v0.1.0. Developed by TotallyOscar, distributed for free.`}
</Text>

          <Text style={this.style.title}>MIT License</Text>
          <Text style={this.style.text}>Copyright 2019 Hathor Labs</Text>
          <Text style={this.style.text}>
            Permission is hereby granted, free of charge, to any person obtaining a copy of this
            {' '}software and associated documentation files (the &quot;Software&quot;), to deal in
            {' '}the Software without restriction, including without limitation the rights to use,
            {' '}copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
            {' '}Software, and to permit persons to whom the Software is furnished to do so,
            {' '}subject to the following conditions:
          </Text>
          <Text style={this.style.text}>
            The above copyright notice and this permission notice shall be included in all
            {' '}copies or substantial portions of the Software.
          </Text>
          <Text style={this.style.text}>
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            {' '}IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
            {' '}FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
            {' '}COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
            {' '}AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
            {' '}WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default About;
