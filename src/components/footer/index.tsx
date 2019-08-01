import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import * as FooterActions from "../store/actions"
import { StoreState } from 'src/redux/rootReducer'
import {FooterList} from '@/interface/common/footer';
import 'src/components/style.scss'

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
      < div className="Footer">
        <hr/>
        <div className="foot-text">2019 © 联系方式</div>
      </div >

    )


  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
