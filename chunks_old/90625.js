"use strict";
n.r(t), n.d(t, {
  IncreasedActivityForumTagPill: function() {
    return C
  },
  IncreasedActivityForumTagOverflow: function() {
    return b
  },
  default: function() {
    return v
  },
  ForumTagOverflow: function() {
    return S
  }
}), n("222007");
var l, r, a = n("37983"),
  i = n("884691"),
  s = n("414456"),
  o = n.n(s),
  c = n("974667"),
  u = n("446674"),
  d = n("77078"),
  f = n("430568"),
  m = n("206230"),
  h = n("385976"),
  g = n("945330"),
  p = n("782340"),
  x = n("375659");

function C(e) {
  let {
    tag: t,
    size: n = 1,
    disabled: l,
    className: r,
    onClick: s,
    onRemove: C,
    selected: b,
    ariaLabel: v
  } = e, {
    name: S,
    emojiId: j,
    emojiName: E
  } = t, y = null != C, [M, k] = i.useState(!1), T = (0, u.useStateFromStores)([h.default], () => null != j ? h.default.getUsableCustomEmojiById(j) : null), N = y || null != s, A = (!y || !M) && (null != j || null != E), F = 0 === n, I = i.useRef(null), w = (0, u.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), R = (0, a.jsxs)(a.Fragment, {
    children: [A ? (0, a.jsx)(f.default, {
      className: o(x.emoji, {
        [x.small]: F
      }),
      emojiId: j,
      emojiName: E,
      animated: !!(null == T ? void 0 : T.animated),
      size: "reaction",
      alt: ""
    }) : null, M && y && (0, a.jsx)("div", {
      className: x.closeCircle,
      children: (0, a.jsx)(g.default, {
        className: x.close
      })
    }), (0, a.jsx)(d.Text, {
      className: x.increasedActivityText,
      variant: "text-xs/medium",
      lineClamp: 1,
      children: S
    })]
  }), L = {
    key: t.id,
    className: o(x.pill, x.increasedActivityPill, {
      [x.disabled]: l,
      [x.clickable]: N,
      [x.increasedActivitySmall]: F,
      [x.selected]: b
    }, r),
    onClick: e => {
      null == s || s(e), null == C || C(t), !w && null != I.current && I.current.blur()
    },
    onMouseEnter: () => y && k(!0),
    onMouseLeave: () => y && k(!1)
  }, _ = (0, c.useListItem)("forum-tag-".concat(t.id));
  return N ? (0, a.jsx)(d.Clickable, {
    ..._,
    innerRef: I,
    focusProps: {
      ringTarget: I
    },
    "aria-label": null != v ? v : p.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
      tagName: S
    }),
    role: "button",
    "aria-pressed": b,
    ...L,
    children: R
  }) : (0, a.jsx)("div", {
    "aria-label": null != v ? v : p.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
      tagName: S
    }),
    ...L,
    children: R
  })
}

function b(e) {
  let {
    tags: t,
    count: n,
    size: l = 1
  } = e, r = 0 === l;
  return (0, a.jsx)(d.Tooltip, {
    "aria-label": p.default.Messages.FORUM_TAGS,
    text: (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(v, {
        tag: e,
        className: x.tooltipPill,
        size: v.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: o(x.pill, x.increasedActivityPill, {
        [x.increasedActivitySmall]: r
      }),
      children: (0, a.jsxs)(d.Text, {
        className: x.increasedActivityText,
        variant: r ? "text-xs/medium" : "text-sm/medium",
        children: ["+", n]
      })
    })
  })
}

function v(e) {
  let {
    tag: t,
    size: n = 1,
    disabled: l,
    className: r,
    onClick: s,
    onRemove: C,
    selected: b,
    ariaLabel: v
  } = e, {
    name: S,
    emojiId: j,
    emojiName: E
  } = t, y = null != C, [M, k] = i.useState(!1), T = (0, u.useStateFromStores)([h.default], () => null != j ? h.default.getUsableCustomEmojiById(j) : null), N = y || null != s, A = (!y || !M) && (null != j || null != E), F = 0 === n, I = i.useRef(null), w = (0, u.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), R = (0, a.jsxs)(a.Fragment, {
    children: [A ? (0, a.jsx)(f.default, {
      className: o(x.emoji, {
        [x.small]: F
      }),
      emojiId: j,
      emojiName: E,
      animated: !!(null == T ? void 0 : T.animated),
      size: "reaction"
    }) : null, M && y && (0, a.jsx)("div", {
      className: x.closeCircle,
      children: (0, a.jsx)(g.default, {
        className: x.close
      })
    }), (0, a.jsx)(d.Text, {
      variant: F ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      children: S
    })]
  }), L = {
    key: t.id,
    className: o(x.pill, {
      [x.disabled]: l,
      [x.clickable]: N,
      [x.small]: F,
      [x.selected]: b
    }, r),
    onClick: e => {
      null == s || s(e), null == C || C(t), !w && null != I.current && I.current.blur()
    },
    onMouseEnter: () => y && k(!0),
    onMouseLeave: () => y && k(!1)
  }, _ = (0, c.useListItem)("forum-tag-".concat(t.id));
  return N ? (0, a.jsx)(d.Clickable, {
    ..._,
    innerRef: I,
    focusProps: {
      ringTarget: I
    },
    "aria-label": null != v ? v : p.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
      tagName: S
    }),
    role: "button",
    "aria-pressed": b,
    ...L,
    children: R
  }) : (0, a.jsx)("div", {
    ...L,
    children: R
  })
}

function S(e) {
  let {
    tags: t,
    count: n,
    size: l = 1
  } = e, r = 0 === l;
  return (0, a.jsx)(d.Tooltip, {
    "aria-label": p.default.Messages.FORUM_TAGS,
    text: (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(v, {
        tag: e,
        className: x.tooltipPill,
        size: v.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: o(x.pill, {
        [x.small]: r
      }),
      children: (0, a.jsxs)(d.Text, {
        variant: r ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    })
  })
}(r = l || (l = {}))[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", v.Sizes = l