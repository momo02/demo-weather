import axios from "axios";
import * as Location from 'expo-location';
import React from 'react';
import { Alert } from 'react-native';
import Loading from "./Loading";
import Weather from './Weather';

const API_KEY = "6df5e926c68bb58ab33c6f752f7aeb34";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const { data: { main: { temp }, weather } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    //console.log(data);
    console.log(temp)
    this.setState({ isLoading: false, condition: weather[0].main, temp })
  }
  getLocation = async () => {
    try {
      //Promise를 리턴. 사용자가 permission을 안주면 에러를 발생시키고 catch문으로 이동.
      await Location.requestPermissionsAsync();
      //throw Error();

      //cf. Async가 붙은 이유는 await가 필요하기 때문. 
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);

    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={temp} condition={condition} />;
  }
}




