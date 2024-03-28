"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("524437"),
  r = n("140155"),
  o = n("497089"),
  u = n("178480"),
  d = n("11799"),
  c = n("632523"),
  f = n("695346"),
  E = n("836946"),
  _ = n("568570"),
  T = n("626135"),
  m = n("709054"),
  I = n("791914"),
  p = n("981631"),
  h = n("689938"),
  N = n("741770");

function S(e) {
  let {
    onClick: t
  } = e;
  return (0, s.jsx)(E.default, {
    tooltip: h.default.Messages.MARK_ALL_AS_READ,
    color: E.CircleIconButtonColors.SECONDARY,
    icon: (0, s.jsx)(_.default, {}),
    onClick: t
  })
}

function C(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: E
  } = e, {
    initialized: _,
    items: h,
    loading: C,
    loadMore: A
  } = (0, d.useDesktopNotificationCenterItemsLoader)(), g = (0, l.useStateFromStores)([r.default], () => r.default.localItems), M = a.useMemo(() => [...[...h, ...g].sort((e, t) => -1 * m.default.compare(e.id, t.id))], [h, g]), R = h.length > 0 ? h[0] : null, O = f.NotificationCenterAckedBeforeId.useSetting(), v = a.useMemo(() => {
    if (null != R && 0 >= m.default.compare(R.id, O)) return !1;
    for (let e of M) {
      if (0 >= m.default.compare(e.id, O)) break;
      if (!(0, u.isRemoteAcked)(e, O)) return !0
    }
    return !1
  }, [R, O, M]);
  return (0, s.jsxs)("div", {
    className: N.container,
    children: [(0, s.jsx)(I.default, {
      tab: i.InboxTab.FOR_YOU,
      setTab: t,
      badgeState: n,
      closePopout: E,
      children: v ? (0, s.jsx)(S, {
        onClick: () => {
          null != R && (f.NotificationCenterAckedBeforeId.updateSetting(R.id), T.default.track(p.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
            action_type: o.NotificationCenterActionTypes.MARK_ALL_READ
          }))
        }
      }) : null
    }), (0, s.jsx)(c.default, {
      initialized: _,
      items: M,
      loading: C,
      loadMore: A
    })]
  })
}