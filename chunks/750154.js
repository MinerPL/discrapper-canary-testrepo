"use strict";
n.d(t, {
  JE: function() {
    return E
  },
  Lw: function() {
    return _
  },
  dS: function() {
    return c
  },
  rq: function() {
    return d
  }
}), n(47120);
var i = n(314897),
  r = n(592125),
  s = n(430824),
  o = n(88751),
  a = n(157925),
  l = n(981631);
let u = "stage:";

function _(e, t) {
  let n = 0,
    r = i.default.getId();
  o.ZP.isSpeaker(r, e.id) && (n |= 1);
  let a = s.Z.getGuild(e.getGuildId());
  null != a && (a.hasFeature(l.oNc.PARTNERED) && (n |= 2), a.hasFeature(l.oNc.VERIFIED) && (n |= 4));
  let _ = n.toString(16);
  return "".concat(u).concat(e.guild_id, ":").concat(e.id, ":").concat(_, ":").concat(t.id)
}

function d(e) {
  if (null == e || null == e.party) return;
  let {
    id: t,
    size: n
  } = e.party;
  try {
    if (null == t || !t.startsWith(u)) return;
    let [, e, i, r, s] = t.split(":"), o = parseInt(r, 16);
    return {
      guildId: e,
      channelId: i,
      size: n,
      userIsSpeaker: (1 & o) != 0,
      guildIsPartnered: (2 & o) != 0,
      guildIsVerified: (4 & o) != 0,
      stageInstanceId: s
    }
  } catch (e) {
    return null
  }
}

function c(e) {
  return (null == e ? void 0 : e.application_id) === a.gD
}

function E(e) {
  let t = d(e);
  if (null == t) return !1;
  let {
    channelId: n
  } = t;
  return null != r.Z.getChannel(n)
}