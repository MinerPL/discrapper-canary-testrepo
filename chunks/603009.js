"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("718017"),
  o = n("524437"),
  u = n("287088"),
  d = n("481060"),
  c = n("442837"),
  f = n("393903"),
  h = n("607070"),
  m = n("645041"),
  p = n("430824"),
  E = n("914010"),
  C = n("153850"),
  g = n("626135"),
  S = n("905362"),
  _ = n("353093"),
  T = n("169559"),
  I = n("940725"),
  A = n("114487"),
  N = n("979264"),
  v = n("981631"),
  x = n("921944"),
  M = n("689938"),
  R = n("570987");

function L(e) {
  var t;
  let {
    guild: n,
    showToast: s,
    onConfirm: o,
    onDismiss: m
  } = e, [p, E] = l.useState(!1), g = l.useRef(null), [S, I] = l.useState(0), v = (0, T.default)("guild_clan_tag_toast"), x = l.useCallback(e => {
    if (null == e) return;
    let t = e.getBoundingClientRect();
    I(window.innerWidth - t.right)
  }, []), L = (0, f.useResizeObserver)(x), y = (0, c.useStateFromStores)([h.default], () => h.default.useReducedMotion);
  l.useLayoutEffect(() => {
    var e;
    if (null == g.current) return;
    let t = null === (e = g.current) || void 0 === e ? void 0 : e.parentNode;
    return null != t && (t.style.zIndex = "1003"), () => {
      null != t && (t.style.zIndex = "1002")
    }
  }, []);
  let O = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), m()
    }, [m]),
    j = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), o()
    }, [o]),
    P = (0, r.useTransition)(s, {
      from: {
        transform: y ? "translateY(0)" : "translateY(16px)",
        opacity: 0,
        pointerEvents: "none"
      },
      enter: {
        transform: "translateY(0)",
        opacity: 1,
        pointerEvents: "all"
      },
      leave: {
        transform: y ? "translateY(0)" : "translateY(16px)",
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
    });
  if (!v) return null;
  let D = (0, _.getClanBadgeUrl)(n.id, null === (t = n.clan) || void 0 === t ? void 0 : t.badge);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: L,
      className: i()(R.positionTracker)
    }), (0, a.jsx)(C.default, {
      children: P((e, t) => {
        var l;
        return t && (0, a.jsx)(r.animated.div, {
          onMouseEnter: () => E(!0),
          onMouseLeave: () => E(!1),
          className: i()(R.wrapper),
          style: {
            ...e,
            right: S + 12
          },
          ref: g,
          children: (0, a.jsx)(d.ClickableContainer, {
            "aria-label": M.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_ARIA_LABEL.format({
              guildName: n.name
            }),
            onClick: j,
            children: (0, a.jsxs)("div", {
              className: i()(R.toastContainerInner, p ? R.hovered : null),
              children: [(0, a.jsxs)("div", {
                className: R.guildIconContainer,
                children: [(0, a.jsx)(A.default, {
                  guild: n,
                  iconSize: 64,
                  className: R.icon
                }), (0, a.jsx)("div", {
                  className: R.guildTagContainer,
                  children: (0, a.jsx)(N.BaseClanTagChiplet, {
                    clanTag: null === (l = n.clan) || void 0 === l ? void 0 : l.tag,
                    clanBadge: D,
                    className: R.guildClanTag
                  })
                })]
              }), (0, a.jsxs)("div", {
                children: [(0, a.jsx)("div", {
                  children: (0, a.jsx)(d.Heading, {
                    variant: "heading-md/bold",
                    color: "header-primary",
                    children: M.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_TITLE.format({
                      guildName: n.name
                    })
                  })
                }), (0, a.jsx)("div", {
                  children: (0, a.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children: M.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_DESCRIPTION
                  })
                })]
              }), (0, a.jsx)("div", {
                children: (0, a.jsx)(d.Clickable, {
                  className: R.toastButton,
                  onClick: O,
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
    })]
  })
}

function y(e) {
  let {} = e, t = (0, c.useStateFromStores)([E.default], () => E.default.getGuildId()), n = (0, I.useShouldShowUserClanTagUpsell)(t, "clan_tag_upsell_toast"), s = (0, c.useStateFromStores)([p.default], () => p.default.getGuild(t), [t]), [i, r] = l.useState(!1), u = l.useRef(null);
  l.useEffect(() => (n && (u.current = window.setTimeout(() => {
    r(!0), g.default.track(v.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
      type: o.DismissibleGuildContent[o.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE],
      guild_id: null != t ? t : v.EMPTY_STRING_SNOWFLAKE_ID
    })
  }, 2500)), () => {
    null != u.current && window.clearTimeout(u.current)
  }), []);
  let d = l.useCallback(() => {
      r(!1), null != t && (0, S.openAdoptClanIdentityModal)(t)
    }, [, t]),
    f = l.useCallback(() => {
      r(!1), null != t && (0, m.markContentAsDismissed)(o.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : v.EMPTY_STRING_SNOWFLAKE_ID, !0, x.ContentDismissActionType.DISMISS)
    }, [t]);
  return n && null != t && null != s ? (0, a.jsx)(L, {
    guild: s,
    onConfirm: d,
    onDismiss: f,
    showToast: i
  }) : null
}