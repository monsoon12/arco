import service from "../utils/requests";



export function ceshi() {
  return service.get('/api/demo')
}

export function queryHomeList(params:any) {
  return service.post('/api/home/list',params)
}

export function homeList() {

}




