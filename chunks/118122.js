"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("184726"),
  r = n("481060"),
  o = n("239091"),
  u = n("906732"),
  d = n("560067"),
  c = n("451603"),
  f = n("885714"),
  h = n("155409"),
  C = n("430824"),
  p = n("594174"),
  m = n("729285"),
  g = n("40153"),
  E = n("603592"),
  S = n("981631"),
  _ = n("675999"),
  I = n("689938"),
  N = n("196581");
let T = {
  origin: {
    x: -16,
    y: 0
  },
  targetWidth: 48,
  targetHeight: 48,
  offset: {
    x: 0,
    y: 0
  }
};

function A(e) {
  (0, o.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.e("9606").then(n.bind(n, "987578"));
    return t => (0, l.jsx)(e, {
      ...t
    })
  })
}

function L(e) {
  let {
    disableTooltip: t,
    lastTargetNode: n
  } = e, o = (0, s.useStateFromStores)([C.default], () => C.default.getGuilds()), L = a.useMemo(() => Object.values(o), [o]), v = (0, s.useStateFromStores)([p.default], () => p.default.getCurrentUser()), x = a.useMemo(() => L.some(e => e.isOwner(v)), [L, v]), R = (0, r.useModalsStore)(e => (0, r.hasModalOpenSelector)(e, _.CREATE_GUILD_MODAL_KEY)), {
    analyticsLocations: M
  } = (0, u.default)(), O = (0, r.useRedesignIconContext)().enabled, y = (0, l.jsx)(E.default, {
    showPill: !1,
    id: "create-join-button",
    onClick: () => {
      (0, c.isAtGuildCapAndNonPremium)() ? (0, f.default)({
        analyticsSource: {
          page: S.AnalyticsLocations.CREATE_JOIN_GUILD_MODAL
        },
        analyticsLocation: {
          page: S.AnalyticsLocations.CREATE_JOIN_GUILD_MODAL,
          section: S.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: M
      }) : d.default.openCreateGuildModal({
        location: "Guild List"
      })
    },
    selected: R,
    onContextMenu: A,
    tooltip: I.default.Messages.ADD_A_SERVER,
    icon: O ? i.PlusMediumIcon : m.default
  });
  return t ? y : (0, l.jsx)("div", {
    className: N.tutorialContainer,
    children: (0, l.jsxs)(h.default, {
      tutorialId: x ? "create-more-servers" : "create-first-server",
      inlineSpecs: T,
      position: "right",
      children: [y, null != n && (0, l.jsx)(g.default, {
        name: I.default.Messages.DND_END_OF_LIST,
        targetNode: n,
        below: !0,
        noCombine: !0
      })]
    })
  })
}