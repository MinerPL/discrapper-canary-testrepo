n(47120);
var i, a, s, r, l = n(392711),
  o = n.n(l),
  c = n(442837),
  d = n(570140),
  u = n(598077),
  _ = n(594174),
  h = n(388380);
let E = {},
  I = 0,
  m = !1,
  g = !1;

function p(e) {
  var t;
  let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
  return {
key: e.suggested_user.id,
name: null === (t = o().first(e.reasons)) || void 0 === t ? void 0 : t.name,
user: new u.Z(e.suggested_user),
mutualFriendsCount: e.mutual_friends_count,
contactNames: n
  };
}
class T extends(i = c.ZP.Store) {
  initialize() {
this.waitFor(_.default);
  }
  getSuggestionCount() {
return I;
  }
  getSuggestions() {
return Object.entries(E).map(e => {
  let [t, n] = e;
  return n;
});
  }
  getSuggestion(e) {
return E[e];
  }
}
r = 'FriendSuggestionStore', (s = 'displayName') in(a = T) ? Object.defineProperty(a, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = r, t.Z = new T(d.Z, {
  CONNECTION_OPEN: function(e) {
E = {}, (I = e.friendSuggestionCount) > 0 && (g = !0, m || !g || (m = !0, g = !1, h.Z.fetch()));
  },
  FRIEND_SUGGESTION_CREATE: function(e) {
let t = p(e.suggestion);
if (null != E[t.key])
  return !1;
I++, E = {
  ...E,
  [t.key]: t
};
  },
  FRIEND_SUGGESTION_DELETE: function(e) {
I = Math.max(0, --I), delete E[e.suggestedUserId];
  },
  LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
var t;
m = !1, t = e.suggestions, E = o().chain(t).map(e => p(e)).keyBy(e => e.key).value(), I = o().keys(E).length;
  },
  LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
m = !1, E = {};
  }
});