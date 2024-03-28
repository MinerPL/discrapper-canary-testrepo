"use strict";
n.r(t), n.d(t, {
  fetchConsents: function() {
    return u
  },
  setConsents: function() {
    return d
  }
}), n("411104");
var a = n("544891"),
  s = n("570140"),
  l = n("981631"),
  i = n("689938");

function r(e) {
  return null != e && null != e.body && s.default.dispatch({
    type: "UPDATE_CONSENTS",
    consents: {
      ...e.body
    }
  }), e.body
}

function o(e) {
  let t;
  throw Error(t = e.status >= 500 && e.status <= 599 ? i.default.Messages.DATA_PRIVACY_UPDATE_CONSENTS_FAILED : null != e && null != e.body && null != e.body.message ? e.body.message : i.default.Messages.DATA_PRIVACY_UPDATE_CONSENTS_FAILED)
}

function u() {
  return a.HTTP.get({
    url: l.Endpoints.SETTINGS_CONSENT,
    oldFormErrors: !0
  }).then(r, e => Promise.reject(Error(e.body.message)))
}

function d(e, t) {
  return a.HTTP.post({
    url: l.Endpoints.SETTINGS_CONSENT,
    body: {
      grant: e,
      revoke: t
    },
    oldFormErrors: !0
  }).then(r, o)
}