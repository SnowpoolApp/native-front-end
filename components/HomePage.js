import React from "react";
import LoginPage from './LoginComponents/LoginPage.js'
import DisclaimerPage from './LoginComponents/DisclaimerPage.js'
import AppOverview from './LoginComponents/AppOverview.js'
var Swiper = require('react-native-swiper');


export default function HomePage({ navigation }) {
  return (
    <Swiper loop={false}>
      <LoginPage navigation={navigation}/>
      <AppOverview />
      <DisclaimerPage />
    </Swiper>
  );
}
