"use strict";
n.d(t, {
  W: function() {
    return E
  },
  v: function() {
    return c
  }
});
var i = n(470079),
  r = n(442837),
  s = n(430824),
  o = n(496675),
  a = n(863249),
  l = n(944163),
  u = n(467138),
  _ = n(246364),
  d = n(981631);

function c(e) {
  let t = s.Z.getGuild(e);
  return null != t && (0, u.P)(e) && o.Z.can(d.Plq.KICK_MEMBERS, t)
}

function E(e) {
  let t = (0, u.e)(e),
    n = (0, r.e7)([s.Z], () => s.Z.getGuild(e)),
    c = null != n && t && o.Z.can(d.Plq.KICK_MEMBERS, n) && n.hasVerificationGate(),
    E = (0, r.e7)([l.Z], () => l.Z.get(e), [e]);
  i.useEffect(() => {
    c && a.Z.fetchVerificationForm(e)
  }, [c, e]);
  let I = i.useMemo(() => {
    var e;
    return (null !== (e = null == E ? void 0 : E.formFields) && void 0 !== e ? e : []).some(e => !(0, _.J)(e))
  }, [null == E ? void 0 : E.formFields]);
  return c && I
}