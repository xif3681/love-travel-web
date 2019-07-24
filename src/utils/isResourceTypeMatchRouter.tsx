import { ResourceType } from 'src/interface/common'
export const isResourceTypeMatchRouter = (type: ResourceType) => {
  const pathname = window.location.pathname
  // const regExp = new RegExp(`(#)(/)(directories)(/)(.*)(/)(${type})(.*)`)
  // return path.startsWith(`#/${type}`) || regExp.test(path)

  return pathname.startsWith(`/${type}`) || pathname.includes(type)
}