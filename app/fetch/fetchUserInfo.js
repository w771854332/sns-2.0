import request from './request';
import { HOST } from './config.json';

export async function getFollow() {
  return request(HOST+'/api/follow',{
      method: 'POST',
      mode: "cors",
      credentials: 'include',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
  });
}

export async function login(data) {
    return request(HOST+'/api/login',{
        method: 'POST',
        login: 1,
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
}

export async function getMessage() {
    return request(HOST+'/api/message',{
        method: 'POST',
        mode: "cors",
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
}

export async function cancelFollow(data) {
    return request(HOST+'/api/follow',{
        method: 'DELETE',
        mode: "cors",
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
}

export async function addFollow(data) {
    return request(HOST+'/api/follow',{
        method: 'PUT',
        mode: "cors",
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
}


export async function fetchChatHistory(data) {
    return request(HOST+'/api/chat',{
        method: 'POST',
        mode: "cors",
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    })
}