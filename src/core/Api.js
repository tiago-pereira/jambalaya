const API_URL = 'http://localhost:3001'

export const http = (url, method, data) => {
  return fetch(API_URL + url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => {
      if(json.error){
        throw new Error(json.error)
      }
      return json
    })
}

