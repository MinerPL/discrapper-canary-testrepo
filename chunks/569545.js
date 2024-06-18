"use strict";
n.d(t, {
  DB: function() {
    return r
  },
  V9: function() {
    return o
  },
  my: function() {
    return s
  }
}), n(47120), n(411104);
var i = n(70722);

function r(e) {
  return null != e && (e.startsWith(i.lo.GUILD) || e.startsWith(i.lo.CALL))
}

function s(e) {
  let t = e.split(":"),
    n = t[0];
  switch (n) {
    case i.lo.GUILD: {
      let [e, n, i, r] = t;
      return {
        streamType: e,
        guildId: n,
        channelId: i,
        ownerId: r
      }
    }
    case i.lo.CALL: {
      let [e, n, i] = t;
      return {
        streamType: e,
        channelId: n,
        ownerId: i
      }
    }
    default:
      throw Error("Unknown stream type ".concat(n))
  }
}

function o(e) {
  let {
    streamType: t,
    guildId: n,
    channelId: r,
    ownerId: s
  } = e;
  switch (t) {
    case i.lo.GUILD:
      return [t, n, r, s].join(":");
    case i.lo.CALL:
      return [t, r, s].join(":");
    default:
      throw Error("Unknown stream type ".concat(t))
  }
}