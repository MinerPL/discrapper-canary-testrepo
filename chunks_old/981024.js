"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("151426"),
  r = n("136511"),
  o = n("360191"),
  u = n("342176"),
  d = n("396539"),
  c = n("673699"),
  f = n("845579"),
  h = n("211248"),
  E = n("11539"),
  m = n("599110"),
  p = n("299039"),
  S = n("64318"),
  g = n("49111"),
  N = n("782340"),
  _ = n("479128");

function T(e) {
  let {
    onClick: t
  } = e;
  return (0, a.jsx)(h.default, {
    tooltip: N.default.Messages.MARK_ALL_AS_READ,
    color: h.CircleIconButtonColors.SECONDARY,
    icon: (0, a.jsx)(E.default, {}),
    onClick: t
  })
}

function I(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: h
  } = e, {
    initialized: E,
    items: N,
    loading: I,
    loadMore: C
  } = (0, d.useDesktopNotificationCenterItemsLoader)(), A = (0, s.useStateFromStores)([r.default], () => r.default.localItems), M = l.useMemo(() => [...[...N, ...A].sort((e, t) => -1 * p.default.compare(e.id, t.id))], [N, A]), v = N.length > 0 ? N[0] : null, R = f.NotificationCenterAckedBeforeId.useSetting(), x = l.useMemo(() => {
    let e = null != v && 0 >= p.default.compare(v.id, R);
    if (e) return !1;
    for (let e of M) {
      if (0 >= p.default.compare(e.id, R)) break;
      if (!(0, u.isRemoteAcked)(e, R)) return !0
    }
    return !1
  }, [v, R, M]);
  return (0, a.jsxs)("div", {
    className: _.container,
    children: [(0, a.jsx)(S.default, {
      tab: i.InboxTab.FOR_YOU,
      setTab: t,
      badgeState: n,
      closePopout: h,
      children: x ? (0, a.jsx)(T, {
        onClick: () => {
          null != v && (f.NotificationCenterAckedBeforeId.updateSetting(v.id), m.default.track(g.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
            action_type: o.NotificationCenterActionTypes.MARK_ALL_READ
          }))
        }
      }) : null
    }), (0, a.jsx)(c.default, {
      initialized: E,
      items: M,
      loading: I,
      loadMore: C
    })]
  })
}