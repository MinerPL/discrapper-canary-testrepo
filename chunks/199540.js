"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("718017"),
  o = n("866442"),
  u = n("442837"),
  d = n("477690"),
  c = n("481060"),
  f = n("430824"),
  h = n("346656"),
  C = n("286908"),
  p = n("26290"),
  m = n("624138"),
  g = n("674552"),
  E = n("981631"),
  S = n("689938"),
  _ = n("515330");
let I = (0, m.cssValueToNumber)(d.default.FOLDER_ITEM_ANIMATION_DURATION),
  N = (0, m.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_SIZE);

function T(e) {
  let {
    guildId: t,
    animate: n
  } = e, a = (0, u.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
  return null == a ? (0, l.jsx)("div", {
    className: _.guildIconUnavailable,
    children: "!"
  }) : (0, l.jsx)(h.default, {
    guild: a,
    animate: n,
    size: h.default.Sizes.SMOL,
    className: _.guildIcon,
    tabIndex: -1
  })
}

function A(e) {
  let t, n, {
      folderNode: s,
      hovered: i,
      expanded: u
    } = e,
    {
      color: d,
      children: c
    } = s,
    f = null != d ? d : E.DEFAULT_FOLDER_COLOR,
    h = c.map(e => e.id),
    [p, m] = a.useState(!1),
    [g, S] = a.useState(u),
    A = u ? 0 : -N,
    L = (0, r.useSpring)({
      transform: "translate3d(0, ".concat(A, "px, 0)"),
      config: {
        duration: I
      },
      onStart() {
        m(!0), S(u)
      },
      onRest() {
        m(!1), S(u)
      }
    }),
    v = p ? L : void 0;
  return (p || g) && (t = (0, l.jsx)(r.animated.div, {
    style: v,
    className: _.expandedFolderIconWrapper,
    children: (0, l.jsx)(C.default, {
      style: {
        color: (0, o.int2hex)(f)
      }
    })
  })), (p || !g) && (n = (0, l.jsx)(r.animated.div, {
    style: v,
    className: _.closedFolderIconWrapper,
    children: h.slice(0, 4).map(e => (0, l.jsx)(T, {
      guildId: e,
      animate: i
    }, e))
  })), (0, l.jsxs)("div", {
    "aria-hidden": !0,
    style: u ? void 0 : {
      backgroundColor: (0, o.int2rgba)(f, .4)
    },
    className: _.folderIconWrapper,
    children: [t, n]
  })
}

function L(e) {
  let {
    folderNode: t,
    forceCircular: n,
    expanded: s,
    sorting: r,
    mediaState: o,
    mentionCount: u = 0,
    tooltipName: d,
    folderGroupId: f,
    folderIconContent: h,
    onClick: C,
    onContextMenu: m,
    onHoverChange: E,
    onKeyDown: I,
    treeItemProps: {
      onFocus: N,
      ...T
    }
  } = e, [L, v] = a.useState(!1), x = a.useCallback(() => {
    r || v(!0), null == E || E(!0)
  }, [r, E]), R = a.useCallback(() => {
    r || v(!1), null == E || E(!1)
  }, [r, E]), M = s || null == o ? null : (0, g.renderMediaBadge)(o), O = !s && u > 0 ? (0, g.renderMentionBadge)(u) : null;
  return (0, l.jsx)(c.BlobMask, {
    selected: !n,
    upperBadge: M,
    lowerBadge: O,
    lowerBadgeWidth: (0, p.getBadgeWidthForValue)(u),
    children: (0, l.jsx)(c.Clickable, {
      className: i()(_.folder, {
        [_.hover]: L
      }),
      onClick: C,
      onContextMenu: m,
      onMouseEnter: x,
      onMouseLeave: R,
      onKeyDown: I,
      onFocus: N,
      "aria-label": S.default.Messages.GUILD_FOLDER_TOOLTIP_A11Y_LABEL.format({
        folderName: d,
        mentions: u
      }),
      "aria-expanded": s,
      "aria-owns": f,
      focusProps: {
        enabled: !1
      },
      ...T,
      role: "treeitem",
      children: null != h ? (0, l.jsx)("div", {
        className: _.expandedFolderIconWrapper,
        children: h
      }) : (0, l.jsx)(A, {
        folderNode: t,
        hovered: L,
        expanded: s
      })
    })
  })
}