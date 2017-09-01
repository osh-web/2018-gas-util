// @flow
import type {Adapter} from './chatwork/types'
const BASE_URL = "https://api.chatwork.com/v2"

type Args<T> = {token: string, adapter: Adapter<T>, base_url?: string}
type CreateMessage<T> = ({roomId: number, body: string}) => T
export default function<T> ({token, adapter, base_url = BASE_URL}: Args<T>): {createMessage: CreateMessage<T>} {
  const createMessage: CreateMessage<T> = ({ roomId, body }) => {
    const path = `/rooms/${roomId}/messages`
    const params = {
      url: base_url + path,
      method: 'post',
      headers: {
        'X-ChatWorkToken': token 
      },
      payload: {
        body
      }
    }
    return adapter(params);
  }

  return {
    createMessage
  }
}