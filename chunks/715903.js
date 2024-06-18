"use strict";
n.d(t, {
  EY: function() {
    return _
  },
  Ow: function() {
    return l
  },
  no: function() {
    return u
  },
  ux: function() {
    return d
  }
}), n(47120), n(724458), n(653041), n(789020);
var i = n(442837),
  r = n(271383),
  s = n(630388),
  o = n(372897);
let a = [o.q.AUTOMOD_QUARANTINED_BIO, o.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME, o.q.AUTOMOD_QUARANTINED_CLAN_TAG];

function l(e) {
  return null == e ? new Set : new Set(a.reduce((t, n) => ((0, s.yE)(null != e ? e : 0, n) && t.push(n), t), []))
}

function u(e) {
  return null == e ? new Set : l(e.flags)
}

function _(e) {
  return null != e && null != e.flags && a.some(t => {
    var n;
    return (0, s.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, t)
  })
}

function d(e) {
  return (0, i.e7)([r.ZP], () => null != e && _(r.ZP.getSelfMember(e)), [e])
}