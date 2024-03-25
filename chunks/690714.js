"use strict";
n.r(t), n.d(t, {
  submitPollVote: function() {
    return i
  },
  endPollEarly: function() {
    return r
  }
});
var s = n("872717"),
  a = n("448993"),
  l = n("49111");
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