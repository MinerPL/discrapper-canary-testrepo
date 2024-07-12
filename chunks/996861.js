t.d(n, {
  $Z: function() {
return T;
  },
  B8: function() {
return O;
  },
  F4: function() {
return v;
  },
  HH: function() {
return G;
  },
  Hd: function() {
return P;
  },
  W1: function() {
return U;
  },
  Xl: function() {
return x;
  },
  dF: function() {
return j;
  },
  eM: function() {
return R;
  },
  fB: function() {
return C;
  },
  gK: function() {
return b;
  },
  l9: function() {
return k;
  },
  mG: function() {
return L;
  },
  qe: function() {
return y;
  },
  rY: function() {
return D;
  },
  ts: function() {
return w;
  },
  zW: function() {
return S;
  }
}), t(735250), t(470079), t(481060);
var i = t(332148),
  s = t(904245),
  l = t(257559),
  a = t(143740),
  r = t(912332),
  o = t(434404);
t(726521);
var u = t(623292),
  d = t(43690),
  c = t(962796),
  E = t(488131),
  f = t(314897),
  g = t(592125),
  m = t(626135),
  M = t(934415),
  _ = t(572004),
  N = t(585483),
  h = t(709054),
  I = t(111618),
  Z = t(50284),
  p = t(730954),
  A = t(981631);

function S(e) {
  let n = e.getGuildId();
  null != n && o.Z.open(n, A.pNK.OVERVIEW);
}

function v(e, n, t) {
  (0, _.JG)(t.shiftKey ? ''.concat(n.channel_id, '-').concat(n.id) : n.id);
}

function C(e, n) {
  m.default.track(A.rMx.MESSAGE_LINK_COPIED, {
message_id: n.id,
channel: n.channel_id
  }), (0, _.JG)((0, M.wR)(e.guild_id, e.id, n.id));
}

function T(e, n, t) {
  n.state === A.yb.SEND_FAILED || t.shiftKey ? s.Z.deleteMessage(e.id, n.id, n.state === A.yb.SEND_FAILED) : l.Z.confirmDelete(e, n);
}

function P(e, n) {
  s.Z.startEditMessage(e.id, n.id, n.content);
}

function O(e, n) {
  (0, Z.Z)(e.id, n.id);
}

function D(e, n, t) {
  if (!1 === n.pinned) {
t.shiftKey ? i.Z.pinMessage(e, n.id) : l.Z.confirmPin(e, n);
return;
  }
  t.shiftKey ? i.Z.unpinMessage(e, n.id) : l.Z.confirmUnpin(e, n);
}

function x(e, n) {
  (0, a.Z)(e.id, n.id);
}

function L(e, n) {
  (0, p.Z)(e, n, void 0, I.Z.getOptions(n.id));
}

function G(e, n, t) {
  let i = e.isPrivate(),
s = n.author.id === f.default.getId();
  (0, u.fE)({
channel: e,
message: n,
shouldMention: !t.shiftKey && !s,
showMentionToggle: !i && !s
  }), N.S.dispatchToLastSubscribed(A.CkL.TEXTAREA_FOCUS);
}

function b(e, n) {
  (0, E.R6)(e, n, 'Message');
}

function y(e, n) {
  let t = g.Z.getChannel(h.default.castMessageIdAsChannelId(n.id));
  null != t && (0, E.ok)(t);
}

function j(e, n) {
  (0, d.D)(n);
}

function R(e, n) {
  (0, d.h)(n.id);
}

function U(e, n) {
  (0, c.BW)(n);
}

function k(e, n) {
  (0, c.Kp)(n.id);
}

function w(e, n) {
  (0, r.l8)({
channelId: e.id,
messageId: n.id,
source: 'message-actions'
  });
}