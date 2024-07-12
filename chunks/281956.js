n.d(t, {
  J: function() {
return u;
  },
  n: function() {
return l;
  }
}), n(47120);
var r = n(442837),
  i = n(271383),
  a = n(430824),
  o = n(607744),
  s = n(594174);

function l(e) {
  let [t, n, r, l] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
a.Z,
o.Z,
s.default,
i.ZP
  ];
  if (null == e)
return !1;
  let u = t.getGuild(e),
{
  notClaimed: c
} = n.getCheck(e),
d = r.getCurrentUser(),
_ = !1;
  if (null != d) {
var E, f;
_ = null !== (f = null === (E = l.getMember(e, d.id)) || void 0 === E ? void 0 : E.isPending) && void 0 !== f && f;
  }
  return (_ || c) && !!(null == u ? void 0 : u.hasVerificationGate());
}

function u(e) {
  return (0, r.e7)([
a.Z,
o.Z,
s.default,
i.ZP
  ], () => null != e && l(e, [
a.Z,
o.Z,
s.default,
i.ZP
  ]), [e]);
}