"use strict";
n.r(t), n.d(t, {
  sendConfirmationCode: function() {
    return r
  },
  confirmEmailChange: function() {
    return l
  }
});
var o = n("759843"),
  s = n("840707"),
  a = n("49111");

function r() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return s.default.put({
    url: a.Endpoints.USER_EMAIL,
    trackedActionData: {
      event: o.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
      properties: {
        is_resend: e
      }
    }
  })
}
async function l(e) {
  let t = await s.default.post({
    url: a.Endpoints.USER_EMAIL_VERIFY_CODE,
    body: {
      code: e
    },
    trackedActionData: {
      event: o.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE
    }
  });
  return t.body
}