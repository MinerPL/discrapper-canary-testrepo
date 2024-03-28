"use strict";
A.r(t), A.d(t, {
  default: function() {
    return f
  }
}), A("47120");
var a = A("735250"),
  l = A("470079"),
  s = A("803997"),
  n = A.n(s),
  r = A("481060"),
  i = A("153124"),
  o = A("127384"),
  d = A("880008"),
  u = A("689938"),
  c = A("368830");

function f(e) {
  let {
    disabled: t = !1,
    disabledTooltip: A,
    published: s,
    submitting: f = !1,
    onClick: g
  } = e, C = (0, i.useUID)(), [h, m] = l.useState(s);
  return l.useEffect(() => {
    m(e => e || s)
  }, [s]), (0, a.jsxs)("div", {
    className: n()({
      [c.publishable]: !t && !s,
      [c.wasEverPublished]: h
    }, c.container),
    children: [(0, a.jsxs)("div", {
      className: c.explanationColumn,
      children: [(0, a.jsx)(r.Heading, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: s ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_TITLE : u.default.Messages.GUILD_PRODUCT_PUBLISH_TITLE
      }), (0, a.jsx)(r.Text, {
        id: C,
        variant: "text-sm/normal",
        color: "text-normal",
        children: s ? u.default.Messages.GUILD_PRODUCT_UNPUBLISH_DESCRIPTION : u.default.Messages.GUILD_PRODUCT_PUBLISH_DESCRIPTION
      })]
    }), (0, a.jsx)(r.Tooltip, {
      text: t ? A : void 0,
      children: e => (0, a.jsxs)(r.Button, {
        ...e,
        className: n()(c.button, {
          [c.wasEverPublished]: h,
          [c.publishButton]: !s,
          [c.disabledPublishButton]: t
        }),
        innerClassName: c.buttonContents,
        color: s ? r.Button.Colors.RED : r.Button.Colors.CUSTOM,
        "aria-describedby": C,
        "aria-disabled": t,
        grow: !1,
        onClick: t ? void 0 : g,
        submitting: f,
        children: [s ? u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_UNPUBLISH_BUTTON : u.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PUBLISH_BUTTON, s ? (0, a.jsx)(d.default, {
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