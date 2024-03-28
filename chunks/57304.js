"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("23536"),
  o = n("40851"),
  u = n("762914"),
  d = n("731290"),
  c = n("306680"),
  f = n("594174"),
  h = n("394831"),
  m = n("502568"),
  p = n("585483"),
  E = n("981631"),
  C = n("689938");
t.default = function(e) {
  let {
    channel: t
  } = e, n = (0, s.useStateFromStores)([d.default, f.default], () => {
    let e = f.default.getCurrentUser();
    return null == e || t.isNSFW() && (!e.nsfwAllowed || !d.default.didAgree(t.getGuildId()))
  }, [t]), [g, S] = l.useState(!1), _ = (0, s.useStateFromStores)([c.default], () => c.default.hasUnreadPins(t.id), [t]), T = (0, o.useWindowDispatch)(), I = (0, u.useIsBroadcastingGDM)(t.id), A = l.useCallback(() => {
    !n && S(e => !e)
  }, [n]);

  function v(e) {
    !(null == e ? void 0 : e.shiftKey) && T.dispatch(E.ComponentActions.POPOUT_CLOSE)
  }
  return (l.useEffect(() => (p.ComponentDispatch.subscribe(E.ComponentActions.TOGGLE_CHANNEL_PINS, A), () => {
    p.ComponentDispatch.unsubscribe(E.ComponentActions.TOGGLE_CHANNEL_PINS, A)
  }), [A]), I) ? null : (0, a.jsx)(i.Popout, {
    shouldShow: g,
    animation: i.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    ignoreModalClicks: !0,
    onRequestClose: () => S(!1),
    renderPopout: function(e) {
      return (0, a.jsx)(r.default, {
        ...e,
        onJump: v,
        channel: t
      })
    },
    children: (e, t) => {
      let {
        isShown: l
      } = t;
      return (0, a.jsx)(m.Icon, {
        ...e,
        onClick: A,
        tooltip: l ? null : C.default.Messages.PINNED_MESSAGES,
        icon: h.default,
        "aria-label": C.default.Messages.PINNED_MESSAGES,
        disabled: n,
        showBadge: _,
        selected: l
      })
    }
  })
}