"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("924826"),
  o = n("442837"),
  u = n("481060"),
  d = n("493683"),
  c = n("239091"),
  f = n("569471"),
  h = n("488131"),
  m = n("592125"),
  C = n("306680"),
  p = n("979651"),
  g = n("938475"),
  E = n("514342"),
  _ = n("714794"),
  S = n("135724"),
  I = n("25601"),
  N = n("207055"),
  T = n("981631"),
  A = n("124368"),
  L = n("689938"),
  v = n("513285"),
  x = n("628462"),
  R = n("52645");

function M(e) {
  let {
    style: t,
    withGuildIcon: n
  } = e;
  return (0, l.jsx)("svg", {
    className: i()(R.spine, {
      [R.spineWithGuildIcon]: n
    }),
    width: "12",
    height: "11",
    viewBox: "0 0 12 11",
    fill: "none",
    "aria-hidden": !0,
    style: t,
    children: (0, l.jsx)("path", {
      d: "M11 9H4C2.89543 9 2 8.10457 2 7V1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V7C0 9.20914 1.79086 11 4 11H11C11.5523 11 12 10.5523 12 10C12 9.44771 11.5523 9 11 9Z",
      fill: "currentColor"
    })
  })
}
t.default = a.memo(function(e) {
  let {
    thread: t,
    isSelectedChannel: s,
    isSelectedVoice: R,
    isLast: y,
    withGuildIcon: O
  } = e, D = (0, o.useStateFromStores)([g.default], () => g.default.getVoiceStatesForChannel(t), [t]), b = (0, o.useStateFromStores)([p.default], () => p.default.hasVideo(t.id)), {
    unread: j,
    mentionCount: P
  } = (0, o.useStateFromStoresObject)([C.default], () => ({
    unread: C.default.hasUnread(t.id),
    mentionCount: C.default.getMentionCount(t.id)
  })), G = (0, o.useStateFromStores)([f.default], () => f.default.isMuted(t.id)), U = a.useCallback(e => {
    (0, h.openThreadSidebarForViewing)(t, !e.shiftKey, A.OpenThreadAnalyticsLocations.CHANNEL_LIST)
  }, [t]), w = a.useCallback(() => {
    d.default.preload(t.guild_id, t.id)
  }, [t.guild_id, t.id]), B = a.useCallback(e => {
    let a = m.default.getChannel(t.id);
    null != a && (0, c.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("40157").then(n.bind(n, "422200"));
      return t => (0, l.jsx)(e, {
        ...t,
        channel: a
      })
    })
  }, [t.id]), F = null == D ? 0 : D.length, {
    role: H,
    ...V
  } = (0, r.useListItem)(t.id), k = a.useRef(null), Y = P > 0 ? L.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS.format({
    channelName: t.name,
    mentionCount: P
  }) : j ? L.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS.format({
    channelName: t.name
  }) : L.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL.format({
    channelName: t.name
  });
  return (0, l.jsxs)("li", {
    role: H,
    className: i()(v.containerDefault, {
      [v.selected]: s
    }),
    children: [(0, l.jsx)(M, {
      withGuildIcon: O
    }), y ? null : (0, l.jsx)(M, {
      withGuildIcon: O,
      style: {
        transform: "rotateX(180deg) translateY(-9px)"
      }
    }), (0, l.jsx)(u.FocusRing, {
      focusTarget: k,
      ringTarget: k,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, l.jsxs)("div", {
        className: i()(v.iconVisibility, x.wrapper, x.typeThread, {
          [x.modeSelected]: s,
          [x.modeMuted]: !s && G,
          [x.modeUnreadImportant]: !G && !s && j,
          [x.withGuildIcon]: O
        }),
        onMouseDown: w,
        onContextMenu: B,
        children: [!j || G || s ? null : (0, l.jsx)("div", {
          className: i()(x.unread, x.unreadImportant)
        }), (0, l.jsx)(u.Clickable, {
          ...V,
          innerRef: k,
          className: x.link,
          onClick: U,
          "aria-label": Y,
          focusProps: {
            enabled: !1
          },
          children: (0, l.jsxs)("div", {
            className: i()(x.linkTop, x.__invalid_threadMainContent),
            children: [(0, l.jsx)(E.default, {
              className: x.name,
              "aria-hidden": !0,
              children: t.name
            }), (0, l.jsxs)("div", {
              className: x.children,
              children: [F > 0 && t.userLimit > 0 ? (0, l.jsx)(S.default, {
                userCount: F,
                video: b,
                channel: t
              }) : null, (0, _.default)(P) ? (0, l.jsx)(I.default, {
                mentionsCount: P
              }) : null]
            })]
          })
        })]
      })
    }), (0, l.jsx)(N.default, {
      channel: t,
      collapsed: !R,
      collapsedMax: 6,
      voiceStates: D,
      location: T.AnalyticsLocations.GUILD_CHANNEL_LIST
    })]
  })
})