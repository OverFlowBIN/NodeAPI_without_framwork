// @ts-check

// JSDoc: 주석형태로 함수의 파라미터, 의미, 아웃풋 등을 주석으로 남기는 것
// => 자동으로 TS가 parsing해서 타입정보를 만들어 준다

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: 'overflowbin',
    title: 'My first post',
    content: 'Hello!',
  },
  {
    id: 'bin11788',
    title: '나의 두번째 포스트',
    content: 'second Hello!',
  },
]

/**
 * Post
 *
 * GET /posts
 * GET /posts/:id
 * POST /posts
 *
 */

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {() => Promise<APIResponse>} callback
 */

/** @type {Route[]} */
const routes = [
  {
    url: /^\/posts$/,
    method: 'GET',
    callback: async () => ({
      statusCode: 200,
      body: posts,
    }),
  },
  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
    method: 'GET',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: {},
    }),
  },
  {
    url: /^\/posts$/,
    method: 'POST',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: {},
    }),
  },
]

module.exports = {
  routes,
}
