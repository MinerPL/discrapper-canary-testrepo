"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("222007");
var a = s("884691"),
  l = s("446674"),
  n = s("599417"),
  i = s("305961"),
  r = s("697218"),
  o = s("197509"),
  d = s("7331");

function u(e, t) {
  let s = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(e)),
    [u, c] = a.useState(),
    [E, _] = a.useState(!1),
    I = (0, d.useIsExpeditedOnboardingGuild)(s),
    T = (0, l.useStateFromStores)([r.default], () => {
      let e = r.default.getCurrentUser();
      return (null == s ? void 0 : s.isOwner(e)) === !0
    }, [s]),
    S = a.useCallback(async () => {
      if (null != e && (I || null != t)) {
        _(!0), c(void 0);
        try {
          null != t ? await o.acceptCreatorMonetizationTerms(e, t) : await o.acceptCreatorMonetizationTermsV2(e)
        } catch (e) {
          c(new n.default(e))
        } finally {
          _(!1)
        }
      }
    }, [e, t, I]);
  return {
    canSubmitAcceptance: T,
    error: u,
    loading: E,
    submitAcceptTermsRequest: S
  }
}