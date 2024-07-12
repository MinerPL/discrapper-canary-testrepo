n.d(t, {
  M: function() {
return l;
  }
});
var i, a, s, r, l, o = n(442837),
  c = n(570140);
(i = l || (l = {}))[i.NOT_FETCHED = 0] = 'NOT_FETCHED', i[i.FETCHING = 1] = 'FETCHING', i[i.FETCHED = 2] = 'FETCHED', i[i.FAILED = 3] = 'FAILED';
let d = {},
  u = {};
class _ extends o.yh {
  getMediaPostEmbed(e) {
if (null != e)
  return d[e];
  }
  getEmbedFetchState(e) {
var t;
return null !== (t = u[e]) && void 0 !== t ? t : 0;
  }
  getMediaPostEmbeds() {
return d;
  }
}
r = 'MediaPostEmbedStore', (s = 'displayName') in(a = _) ? Object.defineProperty(a, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = r, t.Z = new _(c.Z, {
  CONNECTION_OPEN: function() {
d = {}, u = {};
  },
  MEDIA_POST_EMBED_FETCH: function(e) {
let {
  threadId: t
} = e;
u[t] = 1;
  },
  MEDIA_POST_EMBED_FETCH_SUCCESS: function(e) {
let {
  threadId: t,
  mediaPostEmbed: n
} = e;
d = {
  ...d,
  [t]: n
}, u[t] = 2;
  },
  MEDIA_POST_EMBED_FETCH_FAILURE: function(e) {
let {
  threadId: t
} = e;
u[t] = 3;
  },
  LOGOUT: function(e) {
!e.isSwitchingAccount && (d = {}, u = {});
  }
});