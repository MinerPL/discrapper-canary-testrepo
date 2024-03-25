"use strict";
A.r(t), A.d(t, {
  default: function() {
    return f
  }
}), A("222007");
var a = A("37983"),
  l = A("884691"),
  n = A("414456"),
  r = A.n(n),
  s = A("77078"),
  i = A("476765"),
  o = A("952479"),
  d = A("867544"),
  u = A("782340"),
  c = A("268353");

function f(e) {
  let {
    disabled: t = !1,
    disabledTooltip: A,
    published: n,
    submitting: f = !1,
    onClick: g
  } = e, C = (0, i.useUID)(), [h, m] = l.useState(n);
  return l.useEffect(() => {
    m(e => e || n)
  }, [n]), (0, a.jsxs)("div", {
    className: r({
      [c.publishable]: !t && !n,
      [c.wasEverPublished]: h
    }, c.container),
    children: [(0, a.jsxs)("div", {
      className: c.explanationColumn,
      children: [(0, a.jsx)(s.Heading, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: n ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_TITLE : u.default.Messages.GUILD_PRODUCT_PUBLISH_TITLE
      }), (0, a.jsx)(s.Text, {
        id: C,
        variant: "text-sm/normal",
        color: "text-normal",
        children: n ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_DESCRIPTION : u.default.Messages.GUILD_PRODUCT_PUBLISH_DESCRIPTION
      })]
    }), (0, a.jsx)(s.Tooltip, {
      text: t ? A : void 0,
      children: e => (0, a.jsxs)(s.Button, {
        ...e,
        className: r(c.button, {
          [c.wasEverPublished]: h,
          [c.publishButton]: !n,
          [c.disabledPublishButton]: t
        }),
        innerClassName: c.buttonContents,
        color: n ? s.Button.Colors.RED : s.Button.Colors.CUSTOM,
        "aria-describedby": C,
        "aria-disabled": t,
        grow: !1,
        onClick: t ? void 0 : g,
        submitting: f,
        children: [n ? u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_UNPUBLISH_BUTTON : u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PUBLISH_BUTTON, n ? (0, a.jsx)(d.default, {
          className: c.buttonIcon,
          color: "currentColor",
          foregroundColor: "currentColor"
        }) : (0, a.jsx)(o.default, {
          className: c.buttonIcon
        })]
      })
    })]
  })
}