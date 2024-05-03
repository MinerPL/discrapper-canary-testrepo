"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  s = n("692547"),
  l = n("481060"),
  o = n("259580"),
  c = n("196345"),
  d = n("137158"),
  u = n("689938"),
  f = n("915580");
t.default = function(e) {
  let {
    channelId: t,
    formField: n,
    index: i,
    isDragEnabled: m,
    isDropHovered: h,
    onDrop: E,
    onEdit: T,
    onRemove: p,
    canRemove: _,
    title: C,
    actionsLocation: g
  } = e, x = n.values, I = x.slice(0, 1), v = x.length - I.length;
  return (0, a.jsxs)(d.default, {
    field: n,
    index: i,
    isDragEnabled: m,
    isDropHovered: h,
    onDrop: E,
    onEdit: T,
    onRemove: p,
    title: C,
    canRemove: _,
    actionsLocation: g,
    children: [(0, a.jsx)(c.TermsFieldBody, {
      className: r()(f.fieldBackground, {
        [f.withFooter]: 0 !== v
      }),
      terms: I,
      channelId: t
    }), 0 !== v && (0, a.jsxs)(l.Clickable, {
      className: r()(f.fieldFooterContainer, f.clickable),
      onClick: T,
      children: [(0, a.jsx)(l.FormText, {
        className: f.clickable,
        children: u.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: v
        })
      }), (0, a.jsx)(o.default, {
        className: f.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: s.default.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, a.jsx)(c.TermsFieldCheckbox, {
      disabled: !0,
      checked: !1
    })]
  })
}