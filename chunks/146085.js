"use strict";
n.d(t, {
  L_: function() {
    return u
  },
  N: function() {
    return a
  },
  gl: function() {
    return l
  },
  xS: function() {
    return o
  },
  yP: function() {
    return s
  }
}), n(47120);
var i = n(149765),
  r = n(981631);
let s = i.$e(r.Plq.MANAGE_CHANNELS, r.Plq.MUTE_MEMBERS, r.Plq.MOVE_MEMBERS);
i.$e(r.Plq.MANAGE_CHANNELS, r.Plq.MANAGE_ROLES);
let o = new Set([r.Plq.SPEAK, r.Plq.REQUEST_TO_SPEAK, r.Plq.USE_VAD]),
  a = i.$e(s, r.Plq.MANAGE_ROLES),
  l = i.$e(r.Plq.CONNECT, r.Plq.VIEW_CHANNEL),
  u = i.$e(l, r.Plq.READ_MESSAGE_HISTORY, r.Plq.REQUEST_TO_SPEAK, r.Plq.SPEAK, r.Plq.USE_VAD)