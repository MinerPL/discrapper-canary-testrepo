"use strict";
l.r(t), l.d(t, {
  ForumTagOverflow: function() {
    return h
  },
  default: function() {
    return M
  }
}), l("47120");
var a, n, i = l("735250"),
  s = l("470079"),
  r = l("120356"),
  o = l.n(r),
  u = l("924826"),
  d = l("442837"),
  c = l("481060"),
  f = l("596454"),
  m = l("607070"),
  _ = l("339085"),
  p = l("465670"),
  E = l("689938"),
  g = l("652765");

function M(e) {
  let {
    tag: t,
    size: l = 1,
    disabled: a,
    className: n,
    onClick: r,
    onRemove: M,
    selected: h,
    ariaLabel: A
  } = e, {
    name: x,
    emojiId: T,
    emojiName: I
  } = t, C = null != M, [O, L] = s.useState(!1), R = (0, d.useStateFromStores)([_.default], () => null != T ? _.default.getUsableCustomEmojiById(T) : null), S = C || null != r, b = (!C || !O) && (null != T || null != I), v = 0 === l, P = s.useRef(null), U = (0, d.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), y = (0, i.jsxs)(i.Fragment, {
    children: [b ? (0, i.jsx)(f.default, {
      className: o()(g.emoji, {
        [g.small]: v
      }),
      emojiId: T,
      emojiName: I,
      animated: !!(null == R ? void 0 : R.animated),
      size: "reaction"
    }) : null, O && C && (0, i.jsx)("div", {
      className: g.closeCircle,
      children: (0, i.jsx)(p.default, {
        className: g.close
      })
    }), (0, i.jsx)(c.Text, {
      variant: v ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      children: x
    })]
  }), D = {
    key: t.id,
    className: o()(g.pill, {
      [g.disabled]: a,
      [g.clickable]: S,
      [g.small]: v,
      [g.selected]: h
    }, n),
    onClick: e => {
      null == r || r(e), null == M || M(t), !U && null != P.current && P.current.blur()
    },
    onMouseEnter: () => C && L(!0),
    onMouseLeave: () => C && L(!1)
  }, z = (0, u.useListItem)("forum-tag-".concat(t.id));
  return S ? (0, i.jsx)(c.Clickable, {
    ...z,
    innerRef: P,
    focusProps: {
      ringTarget: P
    },
    "aria-label": null != A ? A : E.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
      tagName: x
    }),
    role: "button",
    "aria-pressed": h,
    ...D,
    children: y
  }) : (0, i.jsx)("div", {
    ...D,
    children: y
  })
}

function h(e) {
  let {
    tags: t,
    count: l,
    size: a = 1
  } = e, n = 0 === a;
  return (0, i.jsx)(c.Tooltip, {
    "aria-label": E.default.Messages.FORUM_TAGS,
    text: (0, i.jsx)(i.Fragment, {
      children: t.map(e => (0, i.jsx)(M, {
        tag: e,
        className: g.tooltipPill,
        size: M.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, i.jsx)("div", {
      ...e,
      className: o()(g.pill, {
        [g.small]: n
      }),
      children: (0, i.jsxs)(c.Text, {
        variant: n ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", l]
      })
    })
  })
}(n = a || (a = {}))[n.SMALL = 0] = "SMALL", n[n.MEDIUM = 1] = "MEDIUM", M.Sizes = a