
interface RoomListInterface {
  id: string,
  type: string,
  bedNum: number,
  intro: string,
  price: number,
  preferPrice: number,
  assessRank: number,
  assessNum: number,
  image: string

}
interface MetadataListInterface {
  name: string,
  id: string,
  parent_type: string
}
export interface RoomInfo {
  result_type: string,
  id: string,
  metadata: Array<MetadataListInterface>,
  room_list: Array<RoomListInterface>,
  title: string,
  subTitle: string,
  moreInfo: {
    name: string,
    link: string
  }
}