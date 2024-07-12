var r, i, a, o, s = n(442837),
  l = n(902704),
  u = n(570140);
let c = {},
  d = {},
  _ = {
scrollTop: 0
  };

function E(e) {
  return {
guildId: e,
scrollTop: null,
scrollTo: null
  };
}

function f(e) {
  if (null != c[e]) {
let {
  scrollTop: t,
  scrollHeight: n,
  offsetHeight: r
} = c[e];
return t === n - r;
  }
  return !0;
}
class h extends(o = s.ZP.Store) {
  percentageScrolled(e) {
if (null != c[e]) {
  let {
    scrollTop: t,
    scrollHeight: n
  } = c[e];
  return t / n;
}
return 1;
  }
  getChannelDimensions(e) {
return c[e];
  }
  getGuildDimensions(e) {
var t;
return null !== (t = d[e]) && void 0 !== t ? t : E(e);
  }
  getGuildListDimensions() {
return _;
  }
  isAtBottom(e) {
return f(e);
  }
}
a = 'DimensionStore', (i = 'displayName') in(r = h) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new h(u.Z, {
  UPDATE_CHANNEL_DIMENSIONS: function(e) {
let {
  channelId: t,
  scrollTop: n,
  scrollHeight: r,
  offsetHeight: i
} = e, a = c[t];
if (null == n || null == r || null == i) {
  if (null == a)
    return !1;
  delete c[t];
} else {
  let e = {
    channelId: t,
    scrollTop: n,
    scrollHeight: r,
    offsetHeight: i
  };
  if (null != a && (0, l.Z)(a, e))
    return !1;
  c[t] = e;
}
  },
  UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
let {
  guildId: t,
  scrollTop: n,
  scrollTo: r
} = e;
null == d[t] && (d[t] = E(t)), void 0 !== n && (d[t].scrollTop = n);
let i = !1;
return void 0 !== r && (i = d[t].scrollTo !== r, d[t].scrollTo = r), null != r || i;
  },
  UPDATE_GUILD_LIST_DIMENSIONS: function(e) {
let {
  scrollTop: t
} = e;
_.scrollTop = t;
  },
  CALL_CREATE: function(e) {
let {
  channelId: t
} = e;
f(t) && delete c[t];
  }
});