"use strict";
s.r(t), s.d(t, {
  confirmEmailChange: function() {
    return i
  },
  sendConfirmationCode: function() {
    return o
  }
});
var a = s("990547"),
  l = s("573261"),
  n = s("981631");

function o() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return l.default.put({
    url: n.Endpoints.USER_EMAIL,
    trackedActionData: {
      event: a.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
      properties: {
        is_resend: e
      }
    }
  })
}
async function i(e) {
  return (await l.default.post({
    url: n.Endpoints.USER_EMAIL_VERIFY_CODE,
    body: {
      code: e
    },
    trackedActionData: {
      event: a.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE
    }
  })).body
}