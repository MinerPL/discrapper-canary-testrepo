"use strict";
t.d(s, {
  Z: function() {
    return _
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(153124),
  c = t(259580),
  d = t(404203),
  u = t(689938),
  E = t(831085);

function _(e) {
  let {
    intiallyExpanded: s = !1,
    title: t,
    description: l,
    children: _
  } = e, [I, T] = i.useState(s), N = () => T(e => !e), m = (0, o.Dt)();
  return (0, n.jsxs)("div", {
    className: E.container,
    children: [(0, n.jsx)(d.Z, {
      className: a()(E.header, {
        [E.headerWithDescription]: I && null != l
      }),
      onClick: N,
      children: e => {
        let {
          areaRef: s,
          handleStopPropagation: i
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(r.Heading, {
            variant: "heading-md/semibold",
            children: t
          }), (0, n.jsx)(r.Clickable, {
            onClick: i(N),
            "aria-label": u.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TOGGLE_SECTION_LABEL,
            "aria-controls": m,
            "aria-expanded": I,
            focusProps: {
              ringTarget: s
            },
            children: (0, n.jsx)(c.Z, {
              className: E.caret,
              direction: I ? c.Z.Directions.UP : c.Z.Directions.DOWN
            })
          })]
        })
      }
    }), I && (0, n.jsxs)("div", {
      id: m,
      children: [null != l && (0, n.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: E.description,
        children: l
      }), (0, n.jsx)("div", {
        className: E.divider
      }), (0, n.jsx)("div", {
        className: E.content,
        children: _
      })]
    })]
  })
}