"use strict";
var i, r, s, o, a = n(442837),
  l = n(902704),
  u = n(570140);
let _ = {},
  d = {},
  c = {
    scrollTop: 0
  };

function E(e) {
  return {
    guildId: e,
    scrollTop: null,
    scrollTo: null
  }
}

function I(e) {
  if (null != _[e]) {
    let {
      scrollTop: t,
      scrollHeight: n,
      offsetHeight: i
    } = _[e];
    return t === n - i
  }
  return !0
}
class T extends(o = a.ZP.Store) {
  percentageScrolled(e) {
    if (null != _[e]) {
      let {
        scrollTop: t,
        scrollHeight: n
      } = _[e];
      return t / n
    }
    return 1
  }
  getChannelDimensions(e) {
    return _[e]
  }
  getGuildDimensions(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : E(e)
  }
  getGuildListDimensions() {
    return c
  }
  isAtBottom(e) {
    return I(e)
  }
}
s = "DimensionStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new T(u.Z, {
  UPDATE_CHANNEL_DIMENSIONS: function(e) {
    let {
      channelId: t,
      scrollTop: n,
      scrollHeight: i,
      offsetHeight: r
    } = e, s = _[t];
    if (null == n || null == i || null == r) {
      if (null == s) return !1;
      delete _[t]
    } else {
      let e = {
        channelId: t,
        scrollTop: n,
        scrollHeight: i,
        offsetHeight: r
      };
      if (null != s && (0, l.Z)(s, e)) return !1;
      _[t] = e
    }
  },
  UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
    let {
      guildId: t,
      scrollTop: n,
      scrollTo: i
    } = e;
    null == d[t] && (d[t] = E(t)), void 0 !== n && (d[t].scrollTop = n);
    let r = !1;
    return void 0 !== i && (r = d[t].scrollTo !== i, d[t].scrollTo = i), null != i || r
  },
  UPDATE_GUILD_LIST_DIMENSIONS: function(e) {
    let {
      scrollTop: t
    } = e;
    c.scrollTop = t
  },
  CALL_CREATE: function(e) {
    let {
      channelId: t
    } = e;
    I(t) && delete _[t]
  }
})