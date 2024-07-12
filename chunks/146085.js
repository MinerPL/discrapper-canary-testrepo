n.d(t, {
  L_: function() {
return u;
  },
  N: function() {
return s;
  },
  gl: function() {
return l;
  },
  xS: function() {
return o;
  },
  yP: function() {
return a;
  }
}), n(47120);
var r = n(149765),
  i = n(981631);
let a = r.$e(i.Plq.MANAGE_CHANNELS, i.Plq.MUTE_MEMBERS, i.Plq.MOVE_MEMBERS);
r.$e(i.Plq.MANAGE_CHANNELS, i.Plq.MANAGE_ROLES);
let o = new Set([
i.Plq.SPEAK,
i.Plq.REQUEST_TO_SPEAK,
i.Plq.USE_VAD
  ]),
  s = r.$e(a, i.Plq.MANAGE_ROLES),
  l = r.$e(i.Plq.CONNECT, i.Plq.VIEW_CHANNEL),
  u = r.$e(l, i.Plq.READ_MESSAGE_HISTORY, i.Plq.REQUEST_TO_SPEAK, i.Plq.SPEAK, i.Plq.USE_VAD);