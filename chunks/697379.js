n.d(t, {
  W: function() {
return E;
  },
  v: function() {
return _;
  }
});
var r = n(470079),
  i = n(442837),
  a = n(430824),
  s = n(496675),
  o = n(863249),
  l = n(944163),
  u = n(467138),
  c = n(246364),
  d = n(981631);

function _(e) {
  let t = a.Z.getGuild(e);
  return null != t && (0, u.P)(e) && s.Z.can(d.Plq.KICK_MEMBERS, t);
}

function E(e) {
  let t = (0, u.e)(e),
n = (0, i.e7)([a.Z], () => a.Z.getGuild(e)),
_ = null != n && t && s.Z.can(d.Plq.KICK_MEMBERS, n) && n.hasVerificationGate(),
E = (0, i.e7)([l.Z], () => l.Z.get(e), [e]);
  r.useEffect(() => {
_ && o.Z.fetchVerificationForm(e);
  }, [
_,
e
  ]);
  let f = r.useMemo(() => {
var e;
return (null !== (e = null == E ? void 0 : E.formFields) && void 0 !== e ? e : []).some(e => !(0, c.J)(e));
  }, [null == E ? void 0 : E.formFields]);
  return _ && f;
}