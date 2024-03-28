"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("92114"),
  o = n("9156"),
  u = n("808602"),
  d = n("351919"),
  c = n("502568"),
  f = n("585483"),
  h = n("621600"),
  m = n("110255"),
  p = n("981631"),
  E = n("689938"),
  C = n("401764");

function g(e) {
  let {
    channel: t
  } = e, n = (0, i.useRedesignIconContext)().enabled, [g, S] = (0, s.useStateFromStoresArray)([o.default], () => [o.default.isChannelMuted(t.getGuildId(), t.id), o.default.resolvedMessageNotifications(t)], [t]), [_, T] = l.useState(!1);
  l.useEffect(() => {
    let e = () => T(!0);
    return f.ComponentDispatch.subscribe(p.ComponentActions.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
      f.ComponentDispatch.unsubscribe(p.ComponentActions.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
    }
  }, []);
  let I = e => {
      e.shiftKey ? r.default.updateChannelOverrideSettings(t.guild_id, t.id, {
        muted: !g
      }, h.NotificationLabel.muted(!g)) : T(e => !e)
    },
    A = E.default.Messages.NOTIFICATION_SETTINGS;
  return (0, a.jsx)(i.Popout, {
    shouldShow: _,
    animation: i.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    onRequestClose: () => T(!1),
    renderPopout: e => (0, a.jsx)(m.default, {
      ...e,
      channel: t,
      navId: "channel-context",
      label: E.default.Messages.CHANNEL_ACTIONS_MENU_LABEL
    }),
    children: (e, t) => {
      let {
        isShown: l
      } = t;
      return (0, a.jsx)(c.default.Icon, {
        ...e,
        onClick: I,
        tooltip: l ? null : A,
        icon: g || S !== p.UserNotificationSettings.ALL_MESSAGES ? d.default : u.default,
        foreground: g && !n ? C.strikethrough : null,
        "aria-label": A,
        selected: l
      })
    }
  })
}