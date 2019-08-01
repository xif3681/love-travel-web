import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import { Button ,Icon  } from 'antd';
import * as HomeActions from "./store/actions"
import { StoreState } from 'src/redux/rootReducer'



interface StateProps {
  count: Number,
  state: Object,
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
    state: state,
   }
}


const mapDispatchToProps: MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: DispatchFunction) => {
  return {
    // dispatching actions returned by action creators
    increment: () => dispatch(HomeActions.increment()),
    decrement: () => dispatch(HomeActions.decrement()),
    reset: () => dispatch(HomeActions.reset()),
  }
}
class Home extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)
  }

  static navigationOptions = {
    title: 'AuthLoading',
    tabBarVisible: false
  };
  componentDidMount() {
    console.log(this.props)
  }
  

  render() {
    return (
      <div>
     
      <Button type="primary" onClick={() => this.props.increment()}>+</Button>
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