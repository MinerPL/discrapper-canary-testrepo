"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n = l("735250");
l("470079");
var a = l("481060"),
  s = l("63063"),
  i = l("285952"),
  r = l("901524"),
  o = l("153124"),
  d = l("689938"),
  u = l("794711");

function c(e) {
  let {
    value: t,
    onChange: l,
    children: c,
    note: f,
    helpdeskArticleId: m,
    style: I,
    disabled: T = !1,
    hideBorder: N = !1,
    className: E = u.marginBottom20
  } = e, S = (0, o.useUID)();
  return (0, n.jsxs)(i.default, {
    style: I,
    className: E,
    direction: i.default.Direction.VERTICAL,
    children: [(0, n.jsxs)(i.default, {
      children: [(0, n.jsx)(i.default.Child, {
        children: (0, n.jsx)(a.FormTitle, {
          id: S,
          className: u.marginReset,
          tag: a.FormTitleTags.H3,
          disabled: T,
          children: c
        })
      }), (0, n.jsx)(i.default.Child, {
        grow: 0,
        shrink: 0,
        children: (0, n.jsx)(r.default, {
          value: t,
          onChange: l,
          disabled: T,
          labelledBy: S
        })
      })]
    }), null != f && (0, n.jsx)(i.default.Child, {
      className: u.marginTop4,
      children: (0, n.jsx)(a.FormText, {
        type: a.FormTextTypes.DESCRIPTION,
        children: f
      })
    }), null != m && (0, n.jsx)(i.default.Child, {
      className: u.marginTop4,
      children: (0, n.jsx)(a.FormText, {
        disabled: T,
        type: a.FormTextTypes.DESCRIPTION,
        children: (0, n.jsx)(a.Anchor, {
          href: s.default.getArticleURL(m),
          children: d.default.Messages.LEARN_MORE
        })
      })
    }), !N && (0, n.jsx)(i.default.Child, {
      className: u.marginTop20,
      children: (0, n.jsx)(a.FormDivider, {})
    })]
  })
}
r.default.Types, c.Types = r.default.Types