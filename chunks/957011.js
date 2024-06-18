"use strict";
t.d(s, {
  Z: function() {
    return d
  }
}), t(47120);
var n = t(470079),
  i = t(442837),
  l = t(479531),
  a = t(430824),
  r = t(594174),
  o = t(53365),
  c = t(223892);

function d(e, s) {
  let t = (0, i.e7)([a.Z], () => a.Z.getGuild(e)),
    [d, u] = n.useState(),
    [E, _] = n.useState(!1),
    I = (0, c.Ob)(t),
    T = (0, i.e7)([r.default], () => {
      let e = r.default.getCurrentUser();
      return (null == t ? void 0 : t.isOwner(e)) === !0
    }, [t]);
  return {
    canSubmitAcceptance: T,
    error: d,
    loading: E,
    submitAcceptTermsRequest: n.useCallback(async () => {
      if (null != e && (I || null != s)) {
        _(!0), u(void 0);
        try {
          null != s ? await o.wE(e, s) : await o.zo(e)
        } catch (e) {
          u(new l.Z(e))
        } finally {
          _(!1)
        }
      }
    }, [e, s, I])
  }
}