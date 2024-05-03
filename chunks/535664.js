"use strict";
s.r(t), s.d(t, {
  updateClientCreatedAtOverride: function() {
    return l
  },
  updateClientPremiumTypeOverride: function() {
    return n
  }
});
var a = s("570140");
let n = (e, t) => {
    a.default.dispatch({
      type: "SET_PREMIUM_TYPE_OVERRIDE",
      premiumType: e
    }), a.default.dispatch({
      type: "UPDATE_CLIENT_PREMIUM_TYPE",
      user: t
    })
  },
  l = e => {
    a.default.dispatch({
      type: "SET_CREATED_AT_OVERRIDE",
      createdAt: e
    })
  }