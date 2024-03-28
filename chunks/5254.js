"use strict";
n.r(t), n("47120"), n("724458");
var a, s, l, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("407570"),
  f = n("598077"),
  E = n("594174"),
  h = n("388380");
let _ = {},
  C = 0,
  m = !1,
  S = !1,
  I = new Set,
  p = new Set;

function T(e, t) {
  var n;
  let a = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
  return {
    key: e.suggested_user.id,
    name: null === (n = o().first(e.reasons)) || void 0 === n ? void 0 : n.name,
    user: new f.default(e.suggested_user),
    mutualFriendsCount: e.mutual_friends_count,
    contactNames: a,
    isUnseen: !t && !e.is_viewed
  }
}(0, r.debounce)(e => h.default.viewSuggestions(e), 15e3);
class g extends(a = u.default.Store) {
  initialize() {
    this.waitFor(E.default)
  }
  getSuggestionCount() {
    return C
  }
  getSuggestions() {
    return Object.entries(_).map(e => {
      let [t, n] = e;
      return n
    })
  }
  getSuggestion(e) {
    return _[e]
  }
}
i = "FriendSuggestionStore", (l = "displayName") in(s = g) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new g(d.default, {
  CONNECTION_OPEN: function(e) {
    _ = {}, (C = e.friendSuggestionCount) > 0 && (S = !0, m || !S || (m = !0, S = !1, h.default.fetch()))
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
    let t = T(e.suggestion);
    if (null != _[t.key]) return !1;
    C++, _ = {
      ..._,
      [t.key]: t
    }
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
    C = Math.max(0, --C), delete _[e.suggestedUserId]
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    m = !1, _ = function(e) {
      let t = e.reduce((e, t) => e + (t.is_viewed ? 0 : 1), 0) === e.length,
        n = !(0, c.isInFriendSuggestionSeenStateExperiment)() || t;
      return o().chain(e).map(e => T(e, n)).keyBy(e => e.key).value()
    }(e.suggestions), C = o().keys(_).length
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
    m = !1, _ = {}
  },
  VIEWED_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
    e.userIds.forEach(e => {
      I.add(e), p.delete(e)
    })
  }
})