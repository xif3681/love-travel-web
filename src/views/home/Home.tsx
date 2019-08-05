import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import * as HomeActions from "./store/actions"
import { StoreState } from 'src/redux/rootReducer'
import CarouselPeature from 'src/components/CarouselPeature';
import RoomList from 'src/components/RoomList';
import './home.scss'
import { Input } from 'antd';
const { Search } = Input;


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
    { src: require('src/assets/images/白云先生冬季系列.jpeg')},
    { src: require('src/assets/images/小夜人系列.jpeg' )},
    { src: require('src/assets/images/毕奇系列.jpeg' )},
    { src: require('src/assets/images/仙人掌系列.jpeg') },
  ];
  public overLook = {
    result_type: 'over-look',
    id: '10001',
    title: '最近浏览过的',
    metadata: [],
    subTitle: '',
    moreInfo: {
      name: '',
      link: ''
    },
    room_list: [
      {
        type: '整套公寓',
        bedNum: 2,
        intro: 'Home sweet Home" Duplex in Mansion',
        price: 2688,
        preferPrice: 2600,
        assessRank: 9.6,
        assessNum: 2,
        image: require('src/assets/images/白云先生冬季系列.jpeg')
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '独立投影观影室+花园露台房+五粮液金融城演艺中心+近地铁1号线高新站+距太古里站20分钟',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: require('src/assets/images/小夜人系列.jpeg')
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: require('src/assets/images/毕奇系列.jpeg')
      }
    ]
  }
  SummerTravel = {
    result_type: 'summer-travel',
    id: '10002',
    metadata: [
      {id: '20001', name: '北京', parent_type: 'summer-travel'},
      {id: '20002', name: '上海', parent_type: 'summer-travel'},
      {id: '20003', name: '天津', parent_type: 'summer-travel'},
      {id: '20004', name: '深圳', parent_type: 'summer-travel'},
      {id: '20005', name: '广州', parent_type: 'summer-travel'},
      {id: '20006', name: '厦门', parent_type: 'summer-travel'},
      {id: '20007', name: '成都', parent_type: 'summer-travel'},
      {id: '20008', name: '重庆', parent_type: 'summer-travel'},
      {id: '20009', name: '西藏', parent_type: 'summer-travel'},
      {id: '20010', name: '山东', parent_type: 'summer-travel'},
    ],
    title: '夏日出行精选',
    subTitle: '低至 7 折，可叠加使用礼券',
    moreInfo: {
      name: '查看更多巴黎迪士尼乐园房源',
      link: '/host'
    },
    room_list: [
      {
        type: '整套公寓',
        bedNum: 2,
        intro: 'Home sweet Home" Duplex in Mansion',
        price: 2688,
        preferPrice: 2600,
        assessRank: 9.6,
        assessNum: 2,
        image: require('src/assets/images/白云先生冬季系列.jpeg')
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '独立投影观影室+花园露台房+五粮液金融城演艺中心+近地铁1号线高新站+距太古里站20分钟',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: require('src/assets/images/小夜人系列.jpeg')
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: require('src/assets/images/毕奇系列.jpeg')
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '独立投影观影室+花园露台房+五粮液金融城演艺中心+近地铁1号线高新站+距太古里站20分钟',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: require('src/assets/images/小夜人系列.jpeg')
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: require('src/assets/images/毕奇系列.jpeg')
      },
      {
        type: '整套公寓',
        bedNum: 2,
        intro: '独立投影观影室+花园露台房+五粮液金融城演艺中心+近地铁1号线高新站+距太古里站20分钟',
        price: 365,
        preferPrice: 0,
        assessRank: 9.6,
        assessNum: 2,
        image: require('src/assets/images/小夜人系列.jpeg')
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
      <div className="Home">
      <CarouselPeature pictureList={this.pictureList}></CarouselPeature>
     
      {/* <Button type="primary" onClick={() => this.props.increment()}>+</Button>
      <span>{this.props.count}</span>
      <Button type="primary" onClick={() => this.props.decrement()}>-</Button>
      <Button type="danger" onClick={() => this.props.reset()}>reset</Button> */}
      <div className="home-content">
      <Search placeholder="input search text"   size="large" onSearch={value => console.log(value)} enterButton />
      <RoomList roomInfo={this.overLook} />
      <RoomList roomInfo={this.SummerTravel} />

      </div>
      
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)