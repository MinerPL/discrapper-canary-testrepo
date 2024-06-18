"use strict";
n.d(t, {
  hB: function() {
    return S
  },
  lv: function() {
    return c
  },
  n2: function() {
    return I
  },
  nX: function() {
    return h
  },
  rX: function() {
    return f
  },
  xC: function() {
    return T
  }
}), n(47120);
var i = n(149765),
  r = n(442837),
  s = n(430824),
  o = n(496675),
  a = n(594174),
  l = n(700785),
  u = n(478743),
  _ = n(981631);
let d = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, a.default],
      [n, i] = t,
      r = n.getGuild(e);
    return {
      user: i.getCurrentUser(),
      guild: r
    }
  },
  c = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, a.default],
      n = d(e, t);
    return null != n && i.Db(l.uB({
      user: n.user,
      context: n.guild,
      checkElevated: !1
    }), u.N)
  },
  E = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, a.default],
      n = d(e, t);
    return null != n && o.Z.can(_.Plq.MANAGE_GUILD, n.guild) && o.Z.can(_.Plq.BAN_MEMBERS, n.guild)
  };

function I(e) {
  return (0, r.e7)([s.Z, a.default], () => c(e, [s.Z, a.default]), [e])
}

function T(e) {
  let t = I(e),
    n = (0, r.e7)([s.Z, a.default], () => E(e, [s.Z, a.default]), [e]);
  return t && n
}

function h(e) {
  return (0, r.e7)([s.Z, o.Z], () => {
    let t = s.Z.getGuild(e);
    return null != t && o.Z.can(_.Plq.MANAGE_GUILD, t)
  }, [e])
}

function S(e, t, n) {
  return (0, r.e7)([o.Z, s.Z], () => {
    let i = s.Z.getGuild(e);
    return null != i && t && o.Z.canManageUser(_.Plq.BAN_MEMBERS, n, i)
  }, [t, e, n])
}

function f(e, t, n) {
  let i = s.Z.getGuild(e);
  return null != i && t && o.Z.canManageUser(_.Plq.BAN_MEMBERS, n, i)
}