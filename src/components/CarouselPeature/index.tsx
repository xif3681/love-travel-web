import React, { Component } from 'react'
import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from 'react-redux';
import { DispatchFunction } from '@/tsTypes'
import { Carousel } from 'antd';
import * as MenusActions from "../store/actions"
import { StoreState } from 'src/redux/rootReducer'
import Menus from 'src/components/Menus'
import 'src/components/style.scss'


interface PictureList {
  src: string
}

interface StateProps {
  current: string
}

interface DispatchProps {
  handleClick: (e: any) => void
}

interface OwnProps {
  pictureList: Array<PictureList>
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
class CarouselPeature extends Component<StateProps & DispatchProps & OwnProps, OwnState> {
  constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props)
    // this._bootstrapAsync()
  }
  componentDidMount() {
    console.log(this.props.pictureList)
  }
  render() {
    return (
      <div className="CarouselPeature">
      < div className="position-re">
        <Menus />
        <Carousel autoplay speed={1000}>
          {this.props.pictureList.map((item, index) => {
            return (
              <div key={index}>
                <img width={300} src={item.src} className="peature" />
              </div>

            )

          })}

        </Carousel>

        

      </div >
      </div>


    )


  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselPeature)
