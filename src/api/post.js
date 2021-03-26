import { HTTP } from './common'

export const Post = {
  create (config) {
    return HTTP.post('/posts/', config).then(response => {
      return response.data
    })
  },
  delete (note) {
    return HTTP.delete(`/posts/${post.id}/`)
  },
  list () {
    return HTTP.get('/posts/').then(response => {
      return response.data
    })
  }
}