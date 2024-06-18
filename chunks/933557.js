"use strict";
n.d(t, {
  F6: function() {
    return c
  },
  ZP: function() {
    return T
  },
  le: function() {
    return E
  },
  mA: function() {
    return I
  }
}), n(47120), n(757143);
var i = n(442837),
  r = n(762914),
  s = n(353926),
  o = n(699516),
  a = n(594174),
  l = n(823379),
  u = n(51144),
  _ = n(981631),
  d = n(689938);

function c(e, t, n) {
  var i, s;
  let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  switch (e.type) {
    case _.d4z.DM:
      let [c] = e.recipients.map(t.getUser).filter(l.lm);
      if (null == c) return "???";
      let I = n.getNickname(c.id),
        T = null !== (i = null != I ? I : u.ZP.getName(c)) && void 0 !== i ? i : "???";
      return o ? "@".concat(T) : T;
    case _.d4z.GROUP_DM:
      let h = (0, r.V1)(e.id);
      if ("" !== e.name) return e.name;
      if (h && null != e.ownerId && "" !== e.ownerId) {
        let i = t.getUser(e.ownerId),
          r = null !== (s = n.getNickname(e.ownerId)) && void 0 !== s ? s : u.ZP.getName(i);
        return d.Z.Messages.BROADCASTING_CHANNEL_NAME.format({
          name: r
        })
      }
      let S = e.recipients.map(t.getUser).filter(l.lm).map(e => {
        var t;
        return null !== (t = n.getNickname(e.id)) && void 0 !== t ? t : u.ZP.getName(e)
      });
      if (S.length > 0) return S.join(", ");
      return d.Z.Messages.GROUP_DM_ALONE.format({
        name: u.ZP.getName(t.getCurrentUser())
      });
    case _.d4z.GUILD_ANNOUNCEMENT:
    case _.d4z.GUILD_TEXT:
    case _.d4z.GUILD_FORUM:
    case _.d4z.GUILD_MEDIA:
      if (o) return "#".concat(e.name);
      return e.name;
    case _.d4z.PUBLIC_THREAD:
    case _.d4z.PRIVATE_THREAD:
    case _.d4z.ANNOUNCEMENT_THREAD:
    case _.d4z.GUILD_VOICE:
    case _.d4z.GUILD_STAGE_VOICE:
    case _.d4z.GUILD_CATEGORY:
      if (a) return '#"'.concat(E(e.name), '"');
      if (o && e.isThread()) return '"'.concat(e.name, '"');
      return e.name;
    default:
      return e.name
  }
}

function E(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
}

function I(e) {
  return e.replace(/\\"/g, '"').replace(/\\\\/g, "\\")
}

function T(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return (0, i.e7)([a.default, s.Z, o.Z], () => null == e ? null : c(e, a.default, o.Z, t))
}