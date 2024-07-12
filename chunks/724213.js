t.d(n, {
  hi: function() {
return c;
  },
  kH: function() {
return E;
  },
  rz: function() {
return I;
  }
}), t(789020), t(47120), t(653041), t(524437);
var a = t(549817);
t(581883);
var l = t(984933),
  i = t(271383),
  s = t(9156),
  o = t(630388),
  r = t(152376),
  d = t(398758),
  u = t(372897);

function c(e) {
  var n, t;
  let a = (0, d.r1)(e),
l = null !== (t = null === (n = i.ZP.getSelfMember(e)) || void 0 === n ? void 0 : n.flags) && void 0 !== t ? t : 0,
r = (0, o.yE)(l, u.q.COMPLETED_ONBOARDING),
c = s.ZP.getOptedInChannels(e).size > 0;
  return !a && !r && !c;
}

function E(e) {
  if (c(e)) {
I(e);
return;
  } {
let n = (0, d.r1)(e);
(0, r.QG)(e, !n);
  }
}

function I(e) {
  let {
include: n = new Set(),
exclude: t = new Set()
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = l.ZP.getChannels(e), s = [
...i[l.sH],
...i[l.Zb]
  ].filter(e => {
let {
  channel: n
} = e;
return !n.isThread() && !t.has(n.id);
  }).map(e => {
let {
  channel: n
} = e;
return n.id;
  });
  n.forEach(e => s.push(e)), a.Z.onboardExistingMember(e, new Set(s));
}