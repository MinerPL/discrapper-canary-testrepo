"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("808602"),
  r = n("351919"),
  o = n("502568"),
  u = n("585483"),
  d = n("723170"),
  c = n("64247"),
  f = n("124368"),
  h = n("981631"),
  m = n("689938"),
  p = n("759510");

function E(e) {
  let {
    channel: t
  } = e, n = (0, d.useThreadNotificationSetting)(t), [E, C] = l.useState(!1), g = (0, s.useRedesignIconContext)().enabled;
  l.useEffect(() => {
    let e = () => C(!0);
    return u.ComponentDispatch.subscribe(h.ComponentActions.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
      u.ComponentDispatch.unsubscribe(h.ComponentActions.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
    }
  }, []);
  let S = m.default.Messages.NOTIFICATION_SETTINGS;
  return (0, a.jsx)(s.Popout, {
    shouldShow: E,
    animation: s.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    onRequestClose: () => C(!1),
    renderPopout: e => (0, a.jsx)(c.default, {
      ...e,
      channel: t,
      navId: "thread-context",
      label: m.default.Messages.THREAD_ACTIONS_MENU_LABEL
    }),
    children: (e, t) => {
      let {
        isShown: l
      } = t;
      return (0, a.jsx)(o.default.Icon, {
        ...e,
        onClick: () => C(e => !e),
        tooltip: l ? null : S,
        icon: n === f.ThreadMemberFlags.NO_MESSAGES ? r.default : i.default,
        foreground: n !== f.ThreadMemberFlags.NO_MESSAGES || g ? null : p.strikethrough,
        "aria-label": S,
        selected: l
      })
    }
  })
}