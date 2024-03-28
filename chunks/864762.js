"use strict";
t.r(a), t.d(a, {
  useTwoWayLinkModalSlideManager: function() {
    return i
  }
}), t("47120");
var l = t("470079"),
  n = t("110924"),
  s = t("626135"),
  r = t("798930"),
  o = t("981631");

function i(e, a) {
  let [t, i] = l.useState(r.TwoWayLinkModalSlideTypes.LANDING), c = (0, n.default)(t), [d, u] = l.useState(null), [N, h] = l.useState(null), x = l.useCallback(() => {
    switch (t) {
      case r.TwoWayLinkModalSlideTypes.LANDING:
        i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT);
        break;
      case r.TwoWayLinkModalSlideTypes.DISCORD_CONSENT:
        i(r.TwoWayLinkModalSlideTypes.SUCCESS);
        break;
      case r.TwoWayLinkModalSlideTypes.ERROR:
        i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT)
    }
  }, [t]), m = l.useCallback(() => {
    u(null), i(r.TwoWayLinkModalSlideTypes.ERROR)
  }, []), C = l.useCallback(e => {
    u(e), i(r.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING)
  }, []), T = l.useCallback(e => {
    u(null), h(e), i(r.TwoWayLinkModalSlideTypes.DISCORD_CONSENT)
  }, []);
  return l.useEffect(() => {
    t !== c && s.default.track(o.AnalyticEvents.ACCOUNT_LINK_STEP, {
      location_stack: e,
      previous_step: c,
      current_step: t,
      platform_type: a
    })
  }, [t, c, e, a]), {
    slide: t,
    gotoNext: x,
    gotoError: m,
    handleWaitingForConnection: C,
    handleAuthToken: T,
    expectedCallbackState: d,
    callbackData: N
  }
}