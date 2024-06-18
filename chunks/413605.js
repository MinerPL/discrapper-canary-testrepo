"use strict";
n.d(t, {
  $P: function() {
    return l
  },
  P1: function() {
    return _
  },
  TY: function() {
    return u
  },
  Tx: function() {
    return o
  },
  VR: function() {
    return d
  },
  W6: function() {
    return a
  },
  wx: function() {
    return s.wx
  }
});
var i = n(924301),
  r = n(131704),
  s = n(245335);

function o(e) {
  let t = e.guild_scheduled_event;
  return null != t && (0, i.Ld)(t)
}

function a(e) {
  return e.target_type === s.Iq.ROLE_SUBSCRIPTIONS_PURCHASE
}

function l(e) {
  return null != e.channel && null != e.stage_instance
}

function u(e) {
  return e.target_type === s.Iq.STREAM && null != e.target_user
}

function _(e) {
  return e.target_type === s.Iq.EMBEDDED_APPLICATION
}

function d(e) {
  var t, n;
  if ("number" == typeof e.type) return e.type;
  if ((t = e).type === s.wx.GROUP_DM || null != t.channel && (0, r.bc)(t.channel.type)) return s.wx.GROUP_DM;
  return (n = e).type === s.wx.FRIEND || null == n.guild && null != n.inviter ? s.wx.FRIEND : s.wx.GUILD
}