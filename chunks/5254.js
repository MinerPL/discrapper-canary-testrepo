"use strict";
n.r(t), n("47120");
var a, s, l, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("598077"),
  f = n("594174");
let E = {},
  h = 0,
  _ = !1,
  C = !1;

function S(e) {
  var t;
  let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
  return {
    key: e.suggested_user.id,
    name: null === (t = o().first(e.reasons)) || void 0 === t ? void 0 : t.name,
    user: new c.default(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    contactNames: n
  }
}
class m extends(a = u.default.Store) {
  initialize() {
    this.waitFor(f.default)
  }
  getSuggestionCount() {
    return h
  }
  getSuggestions() {
    return Object.entries(E).map(e => {
      let [t, n] = e;
      return n
    })
  }
  getSuggestion(e) {
    return E[e]
  }
}
i = "FriendSuggestionStore", (l = "displayName") in(s = m) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new m(d.default, {
  CONNECTION_OPEN: function(e) {
    E = {}, (h = e.friendSuggestionCount) > 0 && (C = !0, _ || !C || (_ = !0, C = !1))
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    let t = S(e.suggestion);
    if (null != E[t.key]) return !1;
    h++, E = {
      ...E,
      [t.key]: t
    }
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    h = Math.max(0, --h), delete E[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    var t;
    _ = !1, t = e.suggestions, E = o().chain(t).map(e => S(e)).keyBy(e => e.key).value(), h = o().keys(E).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    _ = !1, E = {}
  }
})