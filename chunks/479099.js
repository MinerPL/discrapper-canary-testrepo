"use strict";
l.r(t), l.d(t, {
  ForumTagOverflow: function() {
    return E
  },
  IncreasedActivityForumTagOverflow: function() {
    return M
  },
  IncreasedActivityForumTagPill: function() {
    return A
  },
  default: function() {
    return h
  }
}), l("47120");
var a, i, n = l("735250"),
  s = l("470079"),
  r = l("803997"),
  o = l.n(r),
  u = l("924826"),
  d = l("442837"),
  c = l("481060"),
  m = l("596454"),
  f = l("607070"),
  _ = l("339085"),
  p = l("465670"),
  g = l("689938"),
  x = l("382473");

function A(e) {
  let {
    tag: t,
    size: l = 1,
    disabled: a,
    className: i,
    onClick: r,
    onRemove: A,
    selected: M,
    ariaLabel: h
  } = e, {
    name: E,
    emojiId: T,
    emojiName: v
  } = t, I = null != A, [C, S] = s.useState(!1), L = (0, d.useStateFromStores)([_.default], () => null != T ? _.default.getUsableCustomEmojiById(T) : null), b = I || null != r, O = (!I || !C) && (null != T || null != v), R = 0 === l, y = s.useRef(null), P = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), U = (0, n.jsxs)(n.Fragment, {
    children: [O ? (0, n.jsx)(m.default, {
      className: o()(x.emoji, {
        [x.small]: R
      }),
      emojiId: T,
      emojiName: v,
      animated: !!(null == L ? void 0 : L.animated),
      size: "reaction",
      alt: ""
    }) : null, C && I && (0, n.jsx)("div", {
      className: x.closeCircle,
      children: (0, n.jsx)(p.default, {
        className: x.close
      })
    }), (0, n.jsx)(c.Text, {
      className: x.increasedActivityText,
      variant: "text-xs/medium",
      lineClamp: 1,
      children: E
    })]
  }), j = {
    key: t.id,
    className: o()(x.pill, x.increasedActivityPill, {
      [x.disabled]: a,
      [x.clickable]: b,
      [x.increasedActivitySmall]: R,
      [x.selected]: M
    }, i),
    onClick: e => {
      null == r || r(e), null == A || A(t), !P && null != y.current && y.current.blur()
    },
    onMouseEnter: () => I && S(!0),
    onMouseLeave: () => I && S(!1)
  }, z = (0, u.useListItem)("forum-tag-".concat(t.id));
  return b ? (0, n.jsx)(c.Clickable, {
    ...z,
    innerRef: y,
    focusProps: {
      ringTarget: y
    },
    "aria-label": null != h ? h : g.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
      tagName: E
    }),
    role: "button",
    "aria-pressed": M,
    ...j,
    children: U
  }) : (0, n.jsx)("div", {
    "aria-label": null != h ? h : g.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
      tagName: E
    }),
    ...j,
    children: U
  })
}

function M(e) {
  let {
    tags: t,
    count: l,
    size: a = 1
  } = e, i = 0 === a;
  return (0, n.jsx)(c.Tooltip, {
    "aria-label": g.default.Messages.FORUM_TAGS,
    text: (0, n.jsx)(n.Fragment, {
      children: t.map(e => (0, n.jsx)(h, {
        tag: e,
        className: x.tooltipPill,
        size: h.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, n.jsx)("div", {
      ...e,
      className: o()(x.pill, x.increasedActivityPill, {
        [x.increasedActivitySmall]: i
      }),
      children: (0, n.jsxs)(c.Text, {
        className: x.increasedActivityText,
        variant: i ? "text-xs/medium" : "text-sm/medium",
        children: ["+", l]
      })
    })
  })
}

function h(e) {
  let {
    tag: t,
    size: l = 1,
    disabled: a,
    className: i,
    onClick: r,
    onRemove: A,
    selected: M,
    ariaLabel: h
  } = e, {
    name: E,
    emojiId: T,
    emojiName: v
  } = t, I = null != A, [C, S] = s.useState(!1), L = (0, d.useStateFromStores)([_.default], () => null != T ? _.default.getUsableCustomEmojiById(T) : null), b = I || null != r, O = (!I || !C) && (null != T || null != v), R = 0 === l, y = s.useRef(null), P = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), U = (0, n.jsxs)(n.Fragment, {
    children: [O ? (0, n.jsx)(m.default, {
      className: o()(x.emoji, {
        [x.small]: R
      }),
      emojiId: T,
      emojiName: v,
      animated: !!(null == L ? void 0 : L.animated),
      size: "reaction"
    }) : null, C && I && (0, n.jsx)("div", {
      className: x.closeCircle,
      children: (0, n.jsx)(p.default, {
        className: x.close
      })
    }), (0, n.jsx)(c.Text, {
      variant: R ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      children: E
    })]
  }), j = {
    key: t.id,
    className: o()(x.pill, {
      [x.disabled]: a,
      [x.clickable]: b,
      [x.small]: R,
      [x.selected]: M
    }, i),
    onClick: e => {
      null == r || r(e), null == A || A(t), !P && null != y.current && y.current.blur()
    },
    onMouseEnter: () => I && S(!0),
    onMouseLeave: () => I && S(!1)
  }, z = (0, u.useListItem)("forum-tag-".concat(t.id));
  return b ? (0, n.jsx)(c.Clickable, {
    ...z,
    innerRef: y,
    focusProps: {
      ringTarget: y
    },
    "aria-label": null != h ? h : g.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
      tagName: E
    }),
    role: "button",
    "aria-pressed": M,
    ...j,
    children: U
  }) : (0, n.jsx)("div", {
    ...j,
    children: U
  })
}

function E(e) {
  let {
    tags: t,
    count: l,
    size: a = 1
  } = e, i = 0 === a;
  return (0, n.jsx)(c.Tooltip, {
    "aria-label": g.default.Messages.FORUM_TAGS,
    text: (0, n.jsx)(n.Fragment, {
      children: t.map(e => (0, n.jsx)(h, {
        tag: e,
        className: x.tooltipPill,
        size: h.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, n.jsx)("div", {
      ...e,
      className: o()(x.pill, {
        [x.small]: i
      }),
      children: (0, n.jsxs)(c.Text, {
        variant: i ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", l]
      })
    })
  })
}(i = a || (a = {}))[i.SMALL = 0] = "SMALL", i[i.MEDIUM = 1] = "MEDIUM", h.Sizes = a