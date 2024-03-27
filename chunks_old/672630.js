"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("70102");
var a = s("748820"),
  l = s("872717"),
  n = s("49111"),
  i = {
    generateNonce: function() {
      return (0, a.v4)()
    },
    createHandoffToken: async function e(e) {
      let {
        body: {
          handoff_token: t
        }
      } = await l.HTTP.post({
        url: n.Endpoints.HANDOFF,
        body: {
          key: e
        },
        oldFormErrors: !0,
        retries: 1
      });
      if (null != t) return t;
      throw Error("Missing handoff token!")
    }
  }