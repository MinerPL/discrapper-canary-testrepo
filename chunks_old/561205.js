"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("77078"),
  o = s("476765"),
  d = s("461380"),
  u = s("306073"),
  c = s("782340"),
  E = s("544362");

function _(e) {
  let {
    intiallyExpanded: t = !1,
    title: s,
    description: n,
    children: _
  } = e, [I, T] = l.useState(t), S = () => T(e => !e), f = (0, o.useUID)();
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)(u.default, {
      className: i(E.header, {
        [E.headerWithDescription]: I && null != n
      }),
      onClick: S,
      children: e => {
        let {
          areaRef: t,
          handleStopPropagation: l
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(r.Heading, {
            variant: "heading-md/semibold",
            children: s
          }), (0, a.jsx)(r.Clickable, {
            onClick: l(S),
            "aria-label": c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TOGGLE_SECTION_LABEL,
            "aria-controls": f,
            "aria-expanded": I,
            focusProps: {
              ringTarget: t
            },
            children: (0, a.jsx)(d.default, {
              className: E.caret,
              direction: I ? d.default.Directions.UP : d.default.Directions.DOWN
            })
          })]
        })
      }
    }), I && (0, a.jsxs)("div", {
      id: f,
      children: [null != n && (0, a.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: E.description,
        children: n
      }), (0, a.jsx)("div", {
        className: E.divider
      }), (0, a.jsx)("div", {
        className: E.content,
        children: _
      })]
    })]
  })
}