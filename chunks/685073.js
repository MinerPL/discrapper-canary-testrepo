"use strict";
n.r(t), n.d(t, {
  loadInviteSuggestions: function() {
    return s
  },
  searchInviteSuggestions: function() {
    return i
  }
}), n("222007");
var l = n("913144"),
  a = n("777273");

function s(e) {
  let {
    omitUserIds: t,
    guild: n,
    channel: s,
    applicationId: i,
    inviteTargetType: r
  } = e;
  return (0, a.fetchUserAffinities)().then(() => {
    l.default.dispatch({
      type: "LOAD_INVITE_SUGGESTIONS",
      omitUserIds: null != t ? t : new Set,
      guild: n,
      channel: s,
      applicationId: i,
      inviteTargetType: r
    })
  })
}

function i(e) {
  l.default.dispatch({
    type: "INVITE_SUGGESTIONS_SEARCH",
    query: e
  })
}