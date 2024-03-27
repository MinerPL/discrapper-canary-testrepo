"use strict";
n.r(t), n.d(t, {
  dismissMediaPostSharePrompt: function() {
    return r
  },
  fetchMediaPostEmbed: function() {
    return o
  },
  unfurlEmbedUrl: function() {
    return u
  }
});
var s = n("872717"),
  a = n("913144"),
  l = n("448993"),
  i = n("49111");

function r(e) {
  a.default.dispatch({
    type: "DISMISS_MEDIA_POST_SHARE_PROMPT",
    threadId: e
  })
}
async function o(e) {
  a.default.dispatch({
    type: "MEDIA_POST_EMBED_FETCH",
    threadId: e
  });
  try {
    let t = await s.HTTP.get({
        url: i.Endpoints.MEDIA_POST_RESHARE_GET_PREVIEW(e)
      }),
      n = t.body;
    a.default.dispatch({
      type: "MEDIA_POST_EMBED_FETCH_SUCCESS",
      threadId: e,
      mediaPostEmbed: n
    })
  } catch (t) {
    a.default.dispatch({
      type: "MEDIA_POST_EMBED_FETCH_FAILURE",
      threadId: e
    })
  }
}
async function u(e) {
  try {
    let t = await s.HTTP.post({
      url: i.Endpoints.UNFURL_EMBED_URLS,
      body: {
        urls: e
      }
    });
    return t.body
  } catch (e) {
    throw new l.APIError(e)
  }
}