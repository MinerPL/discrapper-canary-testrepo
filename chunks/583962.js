"use strict";
n.r(t), n.d(t, {
  PROGRESS_BAR_CONTAINER_HEIGHT: function() {
    return y
  },
  PROGRESS_BAR_CONTAINER_HEIGHT_WITH_MARGIN: function() {
    return D
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("718017"),
  o = n("924826"),
  u = n("442837"),
  d = n("477690"),
  c = n("481060"),
  f = n("239091"),
  h = n("607070"),
  p = n("100527"),
  m = n("367907"),
  C = n("906732"),
  g = n("434404"),
  E = n("496675"),
  _ = n("259580"),
  S = n("267642"),
  I = n("624138"),
  N = n("667815"),
  T = n("531572"),
  A = n("26323"),
  L = n("30513"),
  v = n("981631"),
  x = n("689938"),
  R = n("480901");
let M = (0, I.cssValueToNumber)(d.default.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
  O = e => {
    let {
      guild: t,
      onSelect: n
    } = e, [s, i] = a.useState(t.premiumProgressBarEnabled), [r, o] = a.useState(!1), d = (0, u.useStateFromStores)([E.default], () => E.default.can(v.Permissions.MANAGE_GUILD, t)), h = async () => {
      d && (o(!0), await g.default.saveGuild(t.id, {
        premiumProgressBarEnabled: !s
      }), i(!s), o(!1))
    };
    return (0, l.jsx)(c.Menu, {
      navId: "progress-bar-context",
      onClose: f.closeContextMenu,
      "aria-label": x.default.Messages.PROGRESS_BAR_ACTIONS_MENU_LABEL,
      onSelect: n,
      children: (0, l.jsx)(c.MenuCheckboxItem, {
        id: "progress-bar-enabled",
        label: x.default.Messages.GUILD_ENABLE_PROGRESS_BAR,
        checked: s,
        disabled: r,
        action: h
      })
    })
  },
  y = 57,
  D = 57 + M,
  b = {
    tension: 180,
    friction: 80
  };
t.default = e => {
  let {
    guild: t,
    withMargin: n
  } = e, {
    analyticsLocations: s
  } = (0, C.default)(p.default.GUILD_BOOSTING_SIDEBAR_DISPLAY), {
    premiumSubscriberCount: d,
    id: g
  } = t, I = (0, S.getGuildTierFromAppliedBoostCount)(d, g), M = (0, S.getNextTier)(I, t.id), y = null == M, D = null != M ? M : I, j = (0, u.useStateFromStores)([T.default], () => {
    var e;
    return null !== (e = T.default.getCountForGuild(g)) && void 0 !== e ? e : 0
  }), P = (0, u.useStateFromStores)([h.default], () => h.default.useReducedMotion), G = (0, u.useStateFromStores)([E.default], () => E.default.can(v.Permissions.MANAGE_GUILD, t));
  a.useEffect(() => {
    j !== d && (0, N.updateGuildPremiumSubscriptionCount)(g, d)
  }, [g, j, d]);
  let U = "".concat(Math.min(100, d / (0, S.getAppliedGuildBoostsRequired)(t.id)[D] * 100), "%"),
    {
      current: w
    } = a.useRef(U),
    F = {
      from: {
        width: j === d ? w : "0%"
      },
      to: {
        width: U
      },
      config: b,
      immediate: P
    },
    [B, V] = (0, r.useSpring)(() => F),
    H = () => {
      (0, m.trackWithMetadata)(v.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
          section: v.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR
        },
        guild_id: g,
        location_stack: s
      }), (0, A.default)({
        analyticsLocations: s,
        analyticsSourceLocation: {
          page: v.AnalyticsPages.GUILD_CHANNEL,
          section: v.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR,
          object: v.AnalyticsObjects.TOOLTIP
        },
        guild: t,
        perks: (0, L.premiumProgressBarUpsellPerks)(),
        perkIntro: x.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_PROGRESS_BAR_HEADER
      })
    },
    k = x.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_GOAL.format({
      levelName: (0, S.getShortenedTierName)(D)
    }),
    Y = x.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_BLURB.format({
      numBoosts: d,
      numTotal: (0, S.getAppliedGuildBoostsRequired)(t.id)[D]
    });
  y && (k = (0, S.getShortenedTierName)(D), Y = x.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_COMPLETED_BLURB.format({
    numBoosts: d
  }));
  let K = (0, o.useListItem)("boosts-".concat(t.id));
  return (0, l.jsx)("li", {
    children: (0, l.jsx)(c.Tooltip, {
      text: y ? x.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP_COMPLETE : x.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP.format({
        levelName: (0, S.getTierName)(D)
      }),
      color: c.Tooltip.Colors.BLACK,
      position: "top",
      delay: 200,
      hideOnClick: !0,
      children: e => (0, l.jsxs)(c.Clickable, {
        ...K,
        ...e,
        "aria-label": void 0,
        role: "button",
        focusProps: {
          offset: {
            left: 10,
            right: 4
          }
        },
        onClick: H,
        onMouseEnter: () => {
          var t;
          null === (t = e.onMouseEnter) || void 0 === t || t.call(e), V(F)
        },
        className: i()(R.container, {
          [R.containerWithMargin]: n
        }),
        onContextMenu: e => {
          G && (0, f.openContextMenu)(e, e => (0, l.jsx)(O, {
            ...e,
            guild: t
          }))
        },
        children: [(0, l.jsx)(c.HiddenVisually, {
          children: e["aria-label"]
        }), (0, l.jsxs)("div", {
          className: R.textArea,
          children: [(0, l.jsx)("div", {
            className: R.goalTextContainer,
            children: (0, l.jsx)(c.Text, {
              className: R.goalText,
              color: "interactive-active",
              variant: "text-xs/bold",
              children: k
            })
          }), (0, l.jsxs)("div", {
            className: R.progressFraction,
            children: [(0, l.jsx)(c.Text, {
              color: "interactive-normal",
              variant: "text-xs/normal",
              children: Y
            }), (0, l.jsx)(_.default, {
              className: R.count,
              height: 16,
              width: 16,
              direction: _.default.Directions.RIGHT
            })]
          })]
        }), (0, l.jsxs)("div", {
          className: i()(R.progressBarContainer, {
            [R.progressBarContainerComplete]: y
          }),
          children: [(0, l.jsx)(r.animated.div, {
            className: R.progressBar,
            style: B
          }), y ? (0, l.jsx)("span", {
            "aria-label": x.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_TADA_ICON_ALT_TEXT,
            role: "img",
            className: R.tadaIcon,
            children: "\uD83C\uDF89"
          }) : null]
        })]
      })
    })
  })
}