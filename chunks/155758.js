"use strict";
s.r(t), s.d(t, {
  AddBenefitCard: function() {
    return R
  },
  EditableBenefitsList: function() {
    return C
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("942389"),
  o = s("481060"),
  d = s("153124"),
  u = s("548343"),
  c = s("185403"),
  E = s("151785"),
  _ = s("817460"),
  I = s("723047"),
  T = s("528027"),
  S = s("686807"),
  f = s("157018"),
  m = s("828656"),
  N = s("689938"),
  g = s("761942");

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
    className: i()(g.card, {
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
    className: i()(g.container, {
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
      className: i()(g.card, g.addBenefit, {
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