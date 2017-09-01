import Chatwork from './chatwork'
import adapter from './chatwork/node'

const chatwork = Chatwork({
    token: "",
    adapter,
  })

const testClient = body => {
    return chatwork.createMessage({
        roomId: 59522447,
        body: body
    });
}

testClient("hoge")
  .catch(console.log)
