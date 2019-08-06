import { combineReducers } from "redux"
import { handleActions } from "redux-actions"
import { ActionTypes} from "./actionTypes"

import  {Common}  from "@/interface/common"


export const initReducer: Common = {
  menusCurrent: {
    current: 'home'
  },
  footerList: [{
    name: 'a'
  }],
  roomInfo : [
    {
      "result_type": 'over-look',
      "id": '10000',
      title: '头部播放',
      metadata: [],
      subTitle: '',
      moreInfo: {
        name: '',
        link: ''
      },
      room_list: [
        {
          'id': '20001',
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
          'id': '20001',
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
          'id': '20001',
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
    },
    {
      "result_type": "over-look",
      "id": '10001',
      "title": '最近浏览过的',
      "metadata": [],
      "subTitle": '',
      "moreInfo": {
        "name": '',
        "link": ''
      },
      "room_list": [
        {
          'id': '20001',
          "type": '整套公寓',
          "bedNum": 2,
          "intro": 'Home sweet Home" Duplex in Mansion',
          "price": 2688,
          "preferPrice": 2600,
          "assessRank": 9.6,
          "assessNum": 2,
          "image": require('src/assets/images/白云先生冬季系列.jpeg')
        },
        {
          'id': '20001',
          "type": '整套公寓',
          "bedNum": 2,
          "intro": '独立投影观影室+花园露台房+五粮液金融城演艺中心+近地铁1号线高新站+距太古里站20分钟',
          "price": 365,
          "preferPrice": 0,
          "assessRank": 9.6,
          "assessNum": 2,
          "image": require('src/assets/images/小夜人系列.jpeg')
        },
        {
          'id': '20001',
          "type": '整套公寓',
          "bedNum": 2,
          "intro": '漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房',
          "price": 365,
          "preferPrice": 0,
          "assessRank": 9.6,
          "assessNum": 2,
          "image": require('src/assets/images/毕奇系列.jpeg')
        }
      ]
    },
    {
      result_type: 'summer-travel',
      id: '10002',
      "metadata": [
        { "id": "20001", "name": '北京', "parent_type": "summer-travel" },
        { "id": "20002", "name": '上海', "parent_type": "summer-travel" },
        { "id": "20003", "name": '天津', "parent_type": "summer-travel" },
        { "id": "20004", "name": '深圳', "parent_type": "summer-travel" },
        { "id": "20005", "name": '广州', "parent_type": "summer-travel" },
        { "id": "20006", "name": '厦门', "parent_type": "summer-travel" },
        { "id": "20007", "name": '成都', "parent_type": "summer-travel" },
        { "id": "20008", "name": '重庆', "parent_type": "summer-travel" },
        { "id": "20009", "name": '西藏', "parent_type": "summer-travel" },
        { "id": "20010", "name": '山东', "parent_type": "summer-travel" },
        { "id": "20011", "name": '河南', "parent_type": "summer-travel" },
        { "id": "20012", "name": '湖北', "parent_type": "summer-travel" },
      ],
      title: '夏日出行精选',
      subTitle: '低至 7 折，可叠加使用礼券',
      moreInfo: {
        name: '查看更多巴黎迪士尼乐园房源',
        link: '/host'
      },
      room_list: [
        {
          'id': '20001',
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
          'id': '20001',
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
          'id': '20001',
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
          'id': '20001',
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
          'id': '20001',
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
          'id': '20001',
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
  ]
}

const menusCurrent = handleActions({
  [ActionTypes.MENUSCURRENT]: (state: any, { payload }) => {
    return {
      current: payload.key
    }
  }
}, initReducer.menusCurrent)
const footerList = handleActions({
  [ActionTypes.FOOTERLIST]: (state: any, { payload }) => {
    console.log(payload)
    return {
      ...state,
      footerList: payload.key
    }
  }
}, initReducer.footerList)
const roomInfo = handleActions({
  [ActionTypes.ROOMINFO]: (state: any, { payload }) => {
    console.log('ROOMINFO')
    console.log(payload)
    console.log(state)
    return [ ...state]
    
  }
}, initReducer.roomInfo)


export default combineReducers({
  menusCurrent,
  footerList,
  roomInfo

})
