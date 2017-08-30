const BASE_URL = "https://api.chatwork.com/v2"
const REQUEST = (url, options) => UrlFetchApp.fetch(url, options) 

export default ({token, base_url = BASE_URL, request = REQUEST}) => {

  // メッセージ送信
  const createMessage = ({roomId, body}) => {
  const method = 'POST';
    const options = {
      method,
      headers: {
        'X-ChatWorkToken': token 
      },
      payload: {
        body
      }
    }
    const path = `/rooms/${roomId}/messages`
    const url = base_url + path
    const response = request(url, options)

    if (response.getResponseCode() == 200) {
      return JSON.parse(result.getContentText())
    }
    return {}
  }

  return {
    createMessage
  }
}