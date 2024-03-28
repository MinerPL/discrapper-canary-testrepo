"use strict";
a.r(t), a.d(t, {
  loadInviteSuggestions: function() {
    return n
  },
  searchInviteSuggestions: function() {
    return l
  }
}), a("47120");
var i = a("570140"),
  s = a("265875");

function n(e) {
  let {
    omitUserIds: t,
    guild: a,
    channel: n,
    applicationId: l,
    inviteTargetType: o
  } = e;
  return (0, s.fetchUserAffinities)().then(() => {
    i.default.dispatch({
      type: "LOAD_INVITE_SUGGESTIONS",
      omitUserIds: null != t ? t : new Set,
      guild: a,
      channel: n,
      applicationId: l,
      inviteTargetType: o
    })
  })
}

function l(e) {
  i.default.dispatch({
    type: "INVITE_SUGGESTIONS_SEARCH",
    query: e
  })
}