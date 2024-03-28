"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return r
  }
});
var s, a, l, i, r, o = n("442837"),
  u = n("570140");
(s = r || (r = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED", s[s.FAILED = 3] = "FAILED";
let d = {},
  c = {};
class f extends o.Store {
  getMediaPostEmbed(e) {
    if (null != e) return d[e]
  }
  getEmbedFetchState(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t ? t : 0
  }
  getMediaPostEmbeds() {
    return d
  }
}
i = "MediaPostEmbedStore", (l = "displayName") in(a = f) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new f(u.default, {
  CONNECTION_OPEN: function() {
    d = {}, c = {}
  },
  MEDIA_POST_EMBED_FETCH: function(e) {
    let {
      threadId: t
    } = e;
    c[t] = 1
  },
  MEDIA_POST_EMBED_FETCH_SUCCESS: function(e) {
    let {
      threadId: t,
      mediaPostEmbed: n
    } = e;
    d = {
      ...d,
      [t]: n
    }, c[t] = 2
  },
  MEDIA_POST_EMBED_FETCH_FAILURE: function(e) {
    let {
      threadId: t
    } = e;
    c[t] = 3
  },
  LOGOUT: function(e) {
    !e.isSwitchingAccount && (d = {}, c = {})
  }
})