n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var s = n(470079),
  a = n(442837),
  i = n(479531),
  r = n(430824),
  l = n(594174),
  o = n(53365),
  c = n(223892);

function d(e, t) {
  let n = (0, a.e7)([r.Z], () => r.Z.getGuild(e)),
[d, u] = s.useState(),
[_, I] = s.useState(!1),
E = (0, c.Ob)(n),
T = (0, a.e7)([l.default], () => {
  let e = l.default.getCurrentUser();
  return (null == n ? void 0 : n.isOwner(e)) === !0;
}, [n]);
  return {
canSubmitAcceptance: T,
error: d,
loading: _,
submitAcceptTermsRequest: s.useCallback(async () => {
  if (null != e && (E || null != t)) {
    I(!0), u(void 0);
    try {
      null != t ? await o.wE(e, t) : await o.zo(e);
    } catch (e) {
      u(new i.Z(e));
    } finally {
      I(!1);
    }
  }
}, [
  e,
  t,
  E
])
  };
}