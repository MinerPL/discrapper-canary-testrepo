"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("920906"),
  o = n("524437"),
  u = n("287088"),
  d = n("481060"),
  c = n("442837"),
  f = n("410030"),
  h = n("607070"),
  m = n("645041"),
  p = n("430824"),
  E = n("914010"),
  C = n("594174"),
  g = n("626135"),
  S = n("645896"),
  _ = n("905362"),
  T = n("603368"),
  I = n("353093"),
  A = n("940725"),
  N = n("114487"),
  v = n("979264"),
  x = n("981631"),
  M = n("921944"),
  R = n("689938"),
  y = n("838373");

function L(e) {
  var t, n;
  let {
    guild: s,
    showToast: o,
    onConfirm: m,
    onDismiss: p
  } = e, [E, g] = l.useState(!1), _ = l.useRef(null), A = (0, S.useClanInfo)(s.id), x = (0, f.default)(), M = (0, c.useStateFromStores)([h.default], () => h.default.useReducedMotion), L = (0, T.useBrandColor)(null == A ? void 0 : null === (t = A.branding) || void 0 === t ? void 0 : t.primaryColor, [d.tokens.colors.BG_BRAND, .5]), O = d.tokens.colors.BG_SURFACE_OVERLAY.resolve({
    theme: x,
    saturation: 1
  }).hex(), j = (0, T.getClanRadialBackgroundStyle)(L, O, "top left", .3, "30%"), P = (0, c.useStateFromStores)([C.default], () => {
    var e;
    return null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan
  }, []);
  l.useLayoutEffect(() => {
    var e;
    if (null == _.current) return;
    let t = null === (e = _.current) || void 0 === e ? void 0 : e.parentNode;
    return null != t && (t.style.zIndex = "1003"), () => {
      null != t && (t.style.zIndex = "1002")
    }
  }, []);
  let D = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), p()
    }, [p]),
    b = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), m()
    }, [m]),
    U = (0, r.useTransition)(o, {
      from: {
        transform: M ? "translateY(0)" : "translateY(16px)",
        opacity: 0,
        pointerEvents: "none"
      },
      enter: {
        transform: "translateY(0)",
        opacity: 1,
        pointerEvents: "all"
      },
      leave: {
        transform: M ? "translateY(0)" : "translateY(16px)",
        opacity: 0,
        pointerEvents: "none"
      },
      config: {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
      },
      delay: 200
    }),
    F = (0, I.isGuildAdoptedUserClanIdentityChanged)(s, P),
    w = F ? R.default.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_TITLE.format({
      guildName: s.name
    }) : R.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_TITLE.format({
      guildName: s.name
    }),
    k = F ? R.default.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_DESCRIPTION : R.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_DESCRIPTION,
    B = F ? R.default.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_ARIA_LABEL.format({
      guildName: s.name
    }) : R.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_ARIA_LABEL.format({
      guildName: s.name
    }),
    H = (0, I.getClanBadgeUrl)(s.id, null === (n = s.clan) || void 0 === n ? void 0 : n.badge);
  return U((e, t) => {
    var n;
    return t && (0, a.jsx)(r.animated.div, {
      onMouseEnter: () => g(!0),
      onMouseLeave: () => g(!1),
      className: i()(y.wrapper),
      style: {
        ...e,
        ...j
      },
      ref: _,
      children: (0, a.jsx)(d.ClickableContainer, {
        "aria-label": B,
        onClick: b,
        children: (0, a.jsxs)("div", {
          className: i()(y.toastContainerInner, E ? y.hovered : null),
          children: [(0, a.jsxs)("div", {
            className: y.guildIconContainer,
            children: [(0, a.jsx)(N.default, {
              guild: s,
              iconSize: 64,
              className: y.icon
            }), (0, a.jsx)("div", {
              className: y.guildTagContainer,
              children: (0, a.jsx)(v.BaseClanTagChiplet, {
                clanTag: null === (n = s.clan) || void 0 === n ? void 0 : n.tag,
                clanBadge: H,
                className: y.guildClanTag
              })
            })]
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)("div", {
              children: (0, a.jsx)(d.Heading, {
                variant: "heading-md/bold",
                color: "header-primary",
                children: w
              })
            }), (0, a.jsx)("div", {
              children: (0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "header-secondary",
                children: k
              })
            })]
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(d.Clickable, {
              className: y.toastButton,
              onClick: D,
              children: (0, a.jsx)(u.CloseSmallBoldIcon, {
                width: 20,
                height: 20
              })
            })
          })]
        })
      })
    })
  })
}

function O(e) {
  let {} = e, t = (0, c.useStateFromStores)([E.default], () => E.default.getGuildId()), n = (0, A.useShouldShowUserClanTagUpsell)(t, "clan_tag_upsell_toast"), s = (0, c.useStateFromStores)([p.default], () => p.default.getGuild(t), [t]), [i, r] = l.useState(!1), u = l.useRef(null);
  l.useEffect(() => (n && (u.current = window.setTimeout(() => {
    r(!0), g.default.track(x.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
      type: o.DismissibleGuildContent[o.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE],
      guild_id: null != t ? t : x.EMPTY_STRING_SNOWFLAKE_ID
    })
  }, 2500)), () => {
    null != u.current && window.clearTimeout(u.current)
  }), []);
  let d = l.useCallback(() => {
      r(!1), null != t && (0, _.openAdoptClanIdentityModal)(t)
    }, [, t]),
    f = l.useCallback(() => {
      r(!1), null != t && (0, m.markContentAsDismissed)(o.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : x.EMPTY_STRING_SNOWFLAKE_ID, !0, M.ContentDismissActionType.DISMISS)
    }, [t]);
  return n && null != t && null != s ? (0, a.jsx)(L, {
    guild: s,
    onConfirm: d,
    onDismiss: f,
    showToast: i
  }) : null
}