import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import {  NavLink } from 'react-router-dom'
import { DispatchFunction } from '@/tsTypes'
import { Card, Col, Row } from 'antd';
import * as MenusActions from "../store/actions"
import { StoreState } from 'src/redux/rootReducer'
import 'src/components/style.scss'
const { Meta } = Card;

interface RoomInfoList {
  type: string,
  bedNum: number,
  intro: string,
  price: number,
  preferPrice: number,
  assessRank: number,
  assessNum: number,
  image: string

}
interface MoreInfo {
  name: string,
  link: string
}

interface StateProps {
  current: string
}

interface DispatchProps {
  handleClick: (e: any) => void
}

interface OwnProps {
  roomList: Array<RoomInfoList>,
  title: string,
  subTitle: string,
  moreInfo: MoreInfo
}

interface OwnState {
}

const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, StoreState> = (state) => {
  return {
    current: state.common.menusCurrent.current
  }
}


const mapDispatchToProps: MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: DispatchFunction) => {
  return {
    handleClick: (e: any) => dispatch(MenusActions.handleClick(e))
  }
}
class RoomList extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)
    // this._bootstrapAsync()
  }
  render() {
    return (
      <div style={{  padding: '30px' }} className="RoomList">
        <h2 className="classfy-title">{this.props.title}</h2>
        <div >{this.props.subTitle}</div>
        <Row gutter={16} >
          {this.props.roomList.map((item, index) => {
            console.log(this.props.roomList)
            return (
              <Col xs={12} sm={12} md={12} lg={8} xl={8} key={index}>
                <Card
                  hoverable

                  cover={<img alt="example" src={item.image} />}
                >
                  <Meta title={`${item.type}·${item.bedNum}张床`} description={item.intro}  />
                </Card>
              </Col>
            )
          })}
        </Row>
        <div className="more-info">
          { this.props.moreInfo.link &&
              <NavLink to={this.props.moreInfo.link}>
                <span >{this.props.moreInfo.name}》</span>
      
              </NavLink>
  
          }
        
        </div>


      </div>

    )


  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList)
