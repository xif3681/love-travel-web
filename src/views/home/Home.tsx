import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
// import { Dispatch } from "redux";
import * as HomeActions from "./store/actions"
import { StoreState } from 'src/redux/rootReducer'
// export type DispatchFunction = (o: any) => any;

interface StateProps {
  count: Number,
  state: Object
}

interface DispatchProps {
  increment: () => void
  decrement: () => void
  reset: () => void
}

interface OwnProps {

}

interface OwnState {
}

const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, StoreState> = (state) => {
  return { 
    count: state.home.tabs.count,
    state: state
   }
}


const mapDispatchToProps: MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: DispatchFunction) => {
  return {
    // dispatching actions returned by action creators
    increment: () => dispatch(HomeActions.increment()),
    decrement: () => dispatch(HomeActions.decrement()),
    reset: () => dispatch(HomeActions.reset())
  }
}
class Home extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)
    // this._bootstrapAsync()
  }

  static navigationOptions = {
    title: 'AuthLoading',
    tabBarVisible: false
  };
  componentDidMount() {
    console.log(this.props)
  }
  
  
  // _bootstrapAsync = async () => {
  //   const userToken = await AsyncStorage.getItem('userToken');
  //   const userProfileString = await AsyncStorage.getItem('userProfile');
  //   const userProfile = userProfileString && JSON.parse(userProfileString)
  //   userToken && this.props.localLogin(userToken)
  //   userProfile && this.props.fetchUserProfile(userProfile)
  //   this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  // };

  render() {
    return (
      <div>
      <button onClick={() => this.props.increment()}>+</button>
      <span>{this.props.count}</span>
      <button onClick={() => this.props.decrement()}>-</button>
      <button onClick={() => this.props.reset()}>reset</button>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)