import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import { Button, Menu, Icon } from 'antd';
import * as FooterActions from "../store/actions"
import { StoreState } from 'src/redux/rootReducer'
const { SubMenu } = Menu;
import {FooterList} from '@/interface/common/footer';

interface StateProps {
  footerList: FooterList
}

interface DispatchProps {
  handleClick: (e: any) => void
}

interface OwnProps {

}

interface OwnState {
}

const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, StoreState> = (state) => {
  return {
    footerList: state.common.footerList
  }
}


const mapDispatchToProps: MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: DispatchFunction) => {
  return {
    handleClick: (e: any) => dispatch(FooterActions.handleClick(e))
  }
}
class Footer extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)
    // this._bootstrapAsync()
  }
  render() {
    return (
      < div >
        <a href="">this.props.footerList</a>
      </div >

    )


  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
