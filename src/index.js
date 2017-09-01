// @flow
import Chatwork from './chatwork'
import Countdown from './countdown'
import adapter from './chatwork/gas'
import {updateCheck} from './updateCheck'

declare var PropertiesService: any // FIXME 型定義ちゃんとする

var userProperties = PropertiesService.getUserProperties();
const chatwork = Chatwork({
  token: userProperties.getProperty('CHATWORK_TOKEN'),
  adapter,
})

const testClient = body => {
  return chatwork.createMessage({
    roomId: 59522447,
    body: body
  });
}

const client = body => {
  return chatwork.createMessage({
    roomId: 66407775,
    body: body
  });
}

global.check = () => {
  updateCheck({
    targetFolderId: "0BwFvV2g1L-6ZUWxXdTBJN1NFWHM",
    militime: new Date().getTime() - 30 * 60 * 1000,
    consumer: client,
  });
}

global.helloWorld = () => {
  testClient("hoge")
};

global.countdown = () => {
  const targetDate = new Date(2018, 1, 24)
  const text = Countdown(targetDate)
  client(text)
}