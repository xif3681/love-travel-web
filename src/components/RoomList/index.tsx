import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { DispatchFunction } from '@/tsTypes'
import { Card, Col, Row, Radio, Button, Icon } from 'antd';
import * as MenusActions from "../store/actions"
import { StoreState } from 'src/redux/rootReducer'
import { RoomInfo } from 'src/interface/common/roomInfo';
import './roomList.scss'

const { Meta } = Card;

interface StateProps {
  current: string
}

interface DispatchProps {
  // handleClick: (e: any) => void,
  handleSizeChange: (e: any) => void
}

interface OwnProps {
  roomInfo: RoomInfo,
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
    // handleClick: (e: any) => dispatch(MenusActions.handleClick(e)),
    handleSizeChange: (e: any) => dispatch(MenusActions.handleSizeChange(e))
  }
}
class RoomList extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)
    // this._bootstrapAsync()
  }

  render() {
    return (
      <div style={{ padding: '30px' }} className="RoomList">
        <h2 className="classfy-title">{this.props.roomInfo.title}</h2>
        <div className="text-left">{this.props.roomInfo.subTitle}</div>
        <div className="text-left metadata">
          {
            this.props.roomInfo.metadata && this.props.roomInfo.metadata.length > 0 &&
            // <div className="_1x0dc6um">
            //     <Button value="large" className="button-left"> <Icon type="left" /></Button>
            // </div>
            <Button shape="circle" className="button-left" icon="left"> </Button>
            
          }

          <Radio.Group value="large" >
            {this.props.roomInfo.metadata && this.props.roomInfo.metadata.map((item, index) => {
              return (
                <Button key={index} value={item.id} size="large" onClick={this.props.handleSizeChange}>{item.name}</Button>
              )
            })}
          </Radio.Group>
          {
            this.props.roomInfo.metadata && this.props.roomInfo.metadata.length > 0 &&
            <Button shape="circle" icon="right" className="button-right"></Button>
          }



        </div>
        <Row gutter={16} >
          {this.props.roomInfo.room_list.map((item, index) => {
            return (
              <Col xs={12} sm={12} md={12} lg={8} xl={8} key={index}>
                <Card
                  hoverable

                  cover={<img alt="example" src={item.image} />}
                >
                  <Meta title={`${item.type}·${item.bedNum}张床`} description={item.intro} />
                </Card>
              </Col>
            )
          })}
        </Row>
        <div className="more-info">
          {this.props.roomInfo.moreInfo.link &&
            <NavLink to={this.props.roomInfo.moreInfo.link}>
              <span >{this.props.roomInfo.moreInfo.name}》</span>

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
