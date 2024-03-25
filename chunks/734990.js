"use strict";
n.r(t), n.d(t, {
  sendConfirmationCode: function() {
    return r
  },
  confirmEmailChange: function() {
    return l
  }
});
var s = n("759843"),
  o = n("840707"),
  a = n("49111");

function r() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return o.default.put({
    url: a.Endpoints.USER_EMAIL,
    trackedActionData: {
      event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
      properties: {
        is_resend: e
      }
    }
  })
}
async function l(e) {
  let t = await o.default.post({
    url: a.Endpoints.USER_EMAIL_VERIFY_CODE,
    body: {
      code: e
    },
    trackedActionData: {
      event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE
    }
  });
  return t.body
}