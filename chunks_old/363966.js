"use strict";
s.r(t), s.d(t, {
  EditableBenefitsList: function() {
    return C
  },
  AddBenefitCard: function() {
    return R
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("476042"),
  o = s("77078"),
  d = s("476765"),
  u = s("673220"),
  c = s("987772"),
  E = s("351825"),
  _ = s("577357"),
  I = s("757715"),
  T = s("484456"),
  S = s("559979"),
  f = s("752520"),
  m = s("498030"),
  N = s("782340"),
  g = s("154848");

function h(e) {
  let {
    guildId: t,
    emojiId: s,
    emojiName: n,
    title: r,
    description: d,
    targetType: E,
    index: _,
    dndName: I,
    onEdit: S,
    onMove: f,
    disabled: h = !1
  } = e, C = l.useRef(null), R = l.useRef(null), {
    drag: x,
    dragPreview: L,
    drop: O,
    isDragging: A
  } = (0, m.default)(C, E, _, f);
  return x(R), L(O(C)), (0, a.jsxs)("div", {
    ref: C,
    className: i(g.card, {
      [g.cardDragging]: A,
      [g.disabled]: h
    }),
    children: [(0, a.jsxs)("div", {
      className: g.emojiWrapper,
      children: [(0, a.jsx)(T.default, {
        guildId: t,
        emojiId: s,
        emojiName: n,
        className: g.emoji
      }), !h && (0, a.jsx)("div", {
        ref: R,
        className: g.dragIconWrapper,
        "data-dnd-name": I,
        children: (0, a.jsx)(u.default, {
          className: g.dragIcon
        })
      })]
    }), (0, a.jsxs)("div", {
      className: g.cardText,
      children: [(0, a.jsx)(o.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: r
      }), (0, a.jsx)(o.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: d
      })]
    }), (0, a.jsx)("div", {
      className: g.cardActions,
      children: !h && (0, a.jsx)(o.Clickable, {
        className: g.cardActionButton,
        onClick: h ? void 0 : S,
        "aria-label": N.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EDIT_ARIA_LABEL,
        "aria-disabled": h,
        children: (0, a.jsx)(c.default, {
          className: g.cardActionButtonIcon
        })
      })
    })]
  })
}

function C(e) {
  let {
    benefits: t,
    onEdit: s,
    onMove: n,
    guildId: o
  } = e, u = (0, d.useUID)(), {
    isDragging: c
  } = (0, r.useDragLayer)(e => ({
    isDragging: e.getItemType() === u
  })), E = (0, I.useRoleSubscriptionSettingsDisabled)();
  return 0 === t.length ? null : (0, a.jsx)("div", {
    className: i(g.container, {
      [g.isDragging]: c
    }),
    children: t.map((e, t) => (0, a.jsxs)(l.Fragment, {
      children: [t > 0 ? (0, a.jsx)("div", {
        className: g.divider
      }) : null, (0, a.jsx)(h, {
        guildId: o,
        emojiId: e.emoji_id,
        emojiName: e.emoji_name,
        title: (0, S.default)(e),
        description: e.description,
        targetType: u,
        index: t,
        dndName: (0, f.default)(e),
        onEdit: () => s(t),
        onMove: n,
        disabled: E
      })]
    }, (0, _.getBenefitKey)(e)))
  })
}

function R(e) {
  let {
    onClick: t,
    children: s,
    disabled: l = !1
  } = e;
  return (0, a.jsx)(o.Clickable, {
    className: g.container,
    onClick: l ? void 0 : t,
    "aria-disabled": l,
    children: (0, a.jsxs)("div", {
      className: i(g.card, g.addBenefit, {
        [g.disabled]: l
      }),
      children: [(0, a.jsx)("div", {
        className: g.emojiWrapper,
        children: (0, a.jsx)(E.default, {
          className: g.addBenefitIcon
        })
      }), (0, a.jsx)("div", {
        className: g.cardText,
        children: (0, a.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/normal",
          children: s
        })
      })]
    })
  })
}