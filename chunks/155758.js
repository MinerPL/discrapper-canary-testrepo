"use strict";
t.d(s, {
  p: function() {
    return C
  },
  s: function() {
    return R
  }
});
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(294796),
  o = t(481060),
  c = t(153124),
  d = t(548343),
  u = t(185403),
  E = t(151785),
  _ = t(817460),
  I = t(723047),
  T = t(528027),
  N = t(686807),
  m = t(157018),
  S = t(828656),
  h = t(689938),
  g = t(561555);

function x(e) {
  let {
    guildId: s,
    emojiId: t,
    emojiName: l,
    title: r,
    description: c,
    targetType: E,
    index: _,
    dndName: I,
    onEdit: N,
    onMove: m,
    disabled: x = !1
  } = e, C = i.useRef(null), R = i.useRef(null), {
    drag: L,
    dragPreview: O,
    drop: A,
    isDragging: p
  } = (0, S.Z)(C, E, _, m);
  return L(R), O(A(C)), (0, n.jsxs)("div", {
    ref: C,
    className: a()(g.card, {
      [g.cardDragging]: p,
      [g.disabled]: x
    }),
    children: [(0, n.jsxs)("div", {
      className: g.emojiWrapper,
      children: [(0, n.jsx)(T.Z, {
        guildId: s,
        emojiId: t,
        emojiName: l,
        className: g.emoji
      }), !x && (0, n.jsx)("div", {
        ref: R,
        className: g.dragIconWrapper,
        "data-dnd-name": I,
        children: (0, n.jsx)(d.Z, {
          className: g.dragIcon
        })
      })]
    }), (0, n.jsxs)("div", {
      className: g.cardText,
      children: [(0, n.jsx)(o.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: r
      }), (0, n.jsx)(o.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: c
      })]
    }), (0, n.jsx)("div", {
      className: g.cardActions,
      children: !x && (0, n.jsx)(o.Clickable, {
        className: g.cardActionButton,
        onClick: x ? void 0 : N,
        "aria-label": h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EDIT_ARIA_LABEL,
        "aria-disabled": x,
        children: (0, n.jsx)(u.Z, {
          className: g.cardActionButtonIcon
        })
      })
    })]
  })
}

function C(e) {
  let {
    benefits: s,
    onEdit: t,
    onMove: l,
    guildId: o
  } = e, d = (0, c.Dt)(), {
    isDragging: u
  } = (0, r.f)(e => ({
    isDragging: e.getItemType() === d
  })), E = (0, I.mY)();
  return 0 === s.length ? null : (0, n.jsx)("div", {
    className: a()(g.container, {
      [g.isDragging]: u
    }),
    children: s.map((e, s) => (0, n.jsxs)(i.Fragment, {
      children: [s > 0 ? (0, n.jsx)("div", {
        className: g.divider
      }) : null, (0, n.jsx)(x, {
        guildId: o,
        emojiId: e.emoji_id,
        emojiName: e.emoji_name,
        title: (0, N.Z)(e),
        description: e.description,
        targetType: d,
        index: s,
        dndName: (0, m.Z)(e),
        onEdit: () => t(s),
        onMove: l,
        disabled: E
      })]
    }, (0, _.ab)(e)))
  })
}

function R(e) {
  let {
    onClick: s,
    children: t,
    disabled: i = !1
  } = e;
  return (0, n.jsx)(o.Clickable, {
    className: g.container,
    onClick: i ? void 0 : s,
    "aria-disabled": i,
    children: (0, n.jsxs)("div", {
      className: a()(g.card, g.addBenefit, {
        [g.disabled]: i
      }),
      children: [(0, n.jsx)("div", {
        className: g.emojiWrapper,
        children: (0, n.jsx)(E.Z, {
          className: g.addBenefitIcon
        })
      }), (0, n.jsx)("div", {
        className: g.cardText,
        children: (0, n.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/normal",
          children: t
        })
      })]
    })
  })
}