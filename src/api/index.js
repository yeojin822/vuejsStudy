import axios from 'axios';

// HTTP Request & Response 와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList(){
  //return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
    //return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    //return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}   

function fetchItemInfo(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`);
}


export{
      fetchNewsList
    , fetchAskList
    , fetchJobsList
    , fetchUserInfo
    , fetchItemInfo
}