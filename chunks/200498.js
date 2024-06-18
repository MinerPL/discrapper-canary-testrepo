"use strict";
n.d(t, {
  B: function() {
    return h
  },
  Os: function() {
    return I
  },
  _L: function() {
    return E
  },
  jU: function() {
    return S
  },
  nG: function() {
    return T
  }
});
var i = n(149765),
  r = n(442837),
  s = n(41776);
n(314897);
var o = n(592125),
  a = n(430824),
  l = n(496675),
  u = n(700785),
  _ = n(146085),
  d = n(427679),
  c = n(981631);

function E(e, t, n) {
  var r, s;
  let o = null == n ? void 0 : n.permissionOverwrites[e];
  return {
    id: e,
    type: t,
    deny: null !== (r = null == o ? void 0 : o.deny) && void 0 !== r ? r : u.Hn,
    allow: i.Od(null !== (s = null == o ? void 0 : o.allow) && void 0 !== s ? s : u.Hn, _.yP)
  }
}

function I(e) {
  let {
    allow: t,
    deny: n
  } = e;
  return i.fS(t, u.Hn) && i.fS(n, u.Hn)
}

function T(e) {
  return (0, r.e7)([l.Z, a.Z, o.Z], () => {
    let t = o.Z.getChannel(e),
      n = a.Z.getGuild(null == t ? void 0 : t.getGuildId());
    return !!(l.Z.can(c.Plq.ADMINISTRATOR, n) || l.Z.can(c.Plq.MANAGE_ROLES, t, void 0, void 0, !0) || l.Z.can(_.N, t)) || !1
  }, [e])
}

function h(e) {
  return (0, r.e7)([o.Z, l.Z], () => null != e && l.Z.can(c.Plq.MUTE_MEMBERS, o.Z.getChannel(e)), [e])
}

function S(e) {
  return !!(null != e && e.isGuildStageVoice() && s.Z.isLurking(e.guild_id) && d.Z.isPublic(e.id)) && l.Z.can(_.gl, e)
}