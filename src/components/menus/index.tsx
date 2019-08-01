import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import {  Menu, Icon } from 'antd';
import * as MenusActions from "../store/actions"
import { StoreState } from 'src/redux/rootReducer'
import 'src/components/style.scss'
const { SubMenu } = Menu;

interface StateProps {
  current: string
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
    current: state.common.menusCurrent.current
  }
}


const mapDispatchToProps: MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: DispatchFunction) => {
  return {
    handleClick: (e: any) => dispatch(MenusActions.handleClick(e))
  }
}
class Menus extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)
    // this._bootstrapAsync()
  }
  render() {
    return (
      <div className="Menus">
      < div className="position-ab">
        <Menu onClick={this.props.handleClick} selectedKeys={[this.props.current]} mode="horizontal" >
          <Menu.Item key="home">
            <Icon type="home" theme="twoTone" twoToneColor="#52c41a" />
            首页
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="setting" theme="twoTone" />
                管理面板
              </span>
            }
          >
            <Menu.ItemGroup title="出租房源">
              <Menu.Item key="management:1">Option 1</Menu.Item>
              <Menu.Item key="management:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="管理体验">
              <Menu.Item key="management:3">Option 3</Menu.Item>
              <Menu.Item key="management:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                心愿单
              </span>
            }
          >
            <Menu.ItemGroup title="消心愿单">
              <Menu.Item key="wantlist:1">Option 1</Menu.Item>
              <Menu.Item key="wantlist:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="list">
              <Menu.Item key="wantlist:3">Option 3</Menu.Item>
              <Menu.Item key="wantlist:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="shopping-cart" theme="twoTone" />
                订单中心
              </span>
            }
          >
            <Menu.ItemGroup title="房源订单中心">
              <Menu.Item key="order:1">Option 1</Menu.Item>
              <Menu.Item key="order:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="message" theme="twoTone" twoToneColor="#faad14" />
                消息
              </span>
            }
          >
            <Menu.ItemGroup title="消息">
              <Menu.Item key="inform:1">Option 1</Menu.Item>
              <Menu.Item key="inform:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="通知">
              <Menu.Item key="inform:3">Option 3</Menu.Item>
              <Menu.Item key="inform:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="smile" theme="twoTone" />
                帮助
              </span>
            }
          >
            <Menu.ItemGroup title="推荐帮助">
              <Menu.Item key="help:1">Option 1</Menu.Item>
              <Menu.Item key="help:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="联系房东">
              <Menu.Item key="help:3">联系房东</Menu.Item>
              <Menu.Item key="help:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div >
      </div>
     

    )


  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menus)
