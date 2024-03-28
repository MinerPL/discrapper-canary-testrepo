"use strict";
n.r(t), n.d(t, {
  endPollEarly: function() {
    return r
  },
  submitPollVote: function() {
    return i
  }
});
var s = n("544891"),
  a = n("881052"),
  l = n("981631");
async function i(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: i
  } = e;
  try {
    await s.HTTP.put({
      url: l.Endpoints.POLL_ANSWERS(t, n),
      body: {
        answer_ids: i
      }
    })
  } catch (e) {
    throw new a.APIError(e)
  }
}
async function r(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  try {
    await s.HTTP.post({
      url: l.Endpoints.POLL_EXPIRE(t, n)
    })
  } catch (e) {
    throw new a.APIError(e)
  }
}