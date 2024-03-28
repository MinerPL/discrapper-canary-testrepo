"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("481060"),
  o = s("153124"),
  d = s("259580"),
  u = s("404203"),
  c = s("689938"),
  E = s("254960");

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
      className: i()(E.header, {
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