import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import { Button ,Icon  } from 'antd';
import * as HomeActions from "./store/actions"
import { StoreState } from 'src/redux/rootReducer'
import CarouselPeature from 'src/components/CarouselPeature';
import RoomList from 'src/components/RoomList';



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
  public pictureList = [
    { src: '/static/media/白云先生冬季系列.jpeg' },
    { src: '/static/media/小夜人系列.jpeg' },
    { src: '/static/media/毕奇系列.jpeg' },
    { src: '/static/media/仙人掌系列.jpeg' },
  ];
  public overLook = {
    title: '最近浏览过的',
    subTitle: '',
    moreInfo: {
      name: '',
      link: ''
    },
    roomList: [
      {
        type: '整套公寓',
        bedNum: 2,
        intro: 'Home sweet Home" Duplex in Mansion',
        price: 2688,
        preferPrice: 2600,
        assessRank: 9.6,
        assessNum: 2,
        image: '/static/media/白云先生冬季系列.jpeg'
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '独立投影观影室+花园露台房+五粮液金融城演艺中心+近地铁1号线高新站+距太古里站20分钟',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: '/static/media/小夜人系列.jpeg'
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: '/static/media/毕奇系列.jpeg'
      }
    ]
  }
  SummerTravel = {
    title: '夏日出行精选',
    subTitle: '',
    moreInfo: {
      name: '查看更多巴黎迪士尼乐园房源',
      link: '/host'
    },
    roomList: [
      {
        type: '整套公寓',
        bedNum: 2,
        intro: 'Home sweet Home" Duplex in Mansion',
        price: 2688,
        preferPrice: 2600,
        assessRank: 9.6,
        assessNum: 2,
        image: '/static/media/白云先生冬季系列.jpeg'
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '独立投影观影室+花园露台房+五粮液金融城演艺中心+近地铁1号线高新站+距太古里站20分钟',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: '/static/media/小夜人系列.jpeg'
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: '/static/media/毕奇系列.jpeg'
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '独立投影观影室+花园露台房+五粮液金融城演艺中心+近地铁1号线高新站+距太古里站20分钟',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: '/static/media/小夜人系列.jpeg'
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: '/static/media/毕奇系列.jpeg'
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '独立投影观影室+花园露台房+五粮液金融城演艺中心+近地铁1号线高新站+距太古里站20分钟',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: '/static/media/小夜人系列.jpeg'
      },

    ]
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
      <CarouselPeature pictureList={this.pictureList}></CarouselPeature>
     
      {/* <Button type="primary" onClick={() => this.props.increment()}>+</Button>
      <span>{this.props.count}</span>
      <Button type="primary" onClick={() => this.props.decrement()}>-</Button>
      <Button type="danger" onClick={() => this.props.reset()}>reset</Button> */}
      <RoomList roomList={this.overLook.roomList} title={this.overLook.title} subTitle={this.overLook.subTitle} moreInfo={this.overLook.moreInfo}/>
      <RoomList roomList={this.SummerTravel.roomList} title={this.SummerTravel.title} subTitle={this.SummerTravel.subTitle}  moreInfo={this.SummerTravel.moreInfo}/>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)