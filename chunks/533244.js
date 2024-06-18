"use strict";
n.d(t, {
  CG: function() {
    return _
  },
  OY: function() {
    return f
  },
  SG: function() {
    return S
  },
  T1: function() {
    return c
  },
  i9: function() {
    return u
  },
  kk: function() {
    return d
  },
  lk: function() {
    return I
  },
  pQ: function() {
    return l
  },
  sN: function() {
    return h
  },
  sO: function() {
    return E
  },
  ur: function() {
    return T
  }
}), n(653041);
var i = n(913527),
  r = n.n(i),
  s = n(666657),
  o = n(676770),
  a = n(689938);
let l = {
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
};

function u(e) {
  return null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(o.lp, "hours") > r()() || null != e.raidDetectedAt && r()(e.raidDetectedAt).add(o.lp, "hours") > r()()
}

function _(e) {
  return null != e.raidDetectedAt && r()(e.raidDetectedAt).add(o.lp, "hours") > r()()
}

function d(e) {
  return null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(o.lp, "hours") > r()()
}

function c(e) {
  return null == e ? void 0 : _(e) ? s.Hl.JOIN_RAID : s.Hl.DM_RAID
}

function E(e, t) {
  let n = [];
  return e && n.push(s.dj.INVITES_DISABLED), t && n.push(s.dj.DMS_DISABLED), n
}

function I(e, t) {
  let n = [];
  return !e && n.push(s.dj.INVITES_DISABLED), !t && n.push(s.dj.DMS_DISABLED), n
}

function T(e) {
  return null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date || null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date
}

function h(e) {
  return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date
}

function S(e) {
  return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date
}

function f(e, t) {
  var n;
  let i = null !== (n = e.dmsDisabledUntil) && void 0 !== n ? n : e.invitesDisabledUntil;
  if (null == i) return "";
  let r = null != e.dmsDisabledUntil,
    s = null != e.invitesDisabledUntil;
  switch (!0) {
    case r && s:
      return a.Z.Messages.GUILD_ANTIRAID_PAUSE_DMS_AND_JOINS_NAGBAR_MESSAGE_NEW.format({
        guildName: t,
        time: new Date(i).toLocaleString(a.Z.getLocale(), l)
      });
    case r:
      return a.Z.Messages.GUILD_ANTIRAID_PAUSE_DMS_NAGBAR_MESSAGE_NEW.format({
        guildName: t,
        time: new Date(i).toLocaleString(a.Z.getLocale(), l)
      });
    case s:
      return a.Z.Messages.GUILD_ANTIRAID_PAUSE_JOINS_NAGBAR_MESSAGE_NEW.format({
        guildName: t,
        time: new Date(i).toLocaleString(a.Z.getLocale(), l)
      });
    default:
      return ""
  }
}