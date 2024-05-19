"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var r = a("120356"),
  s = a.n(r),
  i = a("692547"),
  l = a("481060"),
  o = a("259580"),
  c = a("196345"),
  d = a("137158"),
  u = a("689938"),
  f = a("17359");
t.default = function(e) {
  let {
    channelId: t,
    formField: a,
    index: r,
    isDragEnabled: m,
    isDropHovered: h,
    onDrop: p,
    onEdit: E,
    onRemove: T,
    canRemove: C,
    title: x,
    actionsLocation: _
  } = e, g = a.values, I = g.slice(0, 1), N = g.length - I.length;
  return (0, n.jsxs)(d.default, {
    field: a,
    index: r,
    isDragEnabled: m,
    isDropHovered: h,
    onDrop: p,
    onEdit: E,
    onRemove: T,
    title: x,
    canRemove: C,
    actionsLocation: _,
    children: [(0, n.jsx)(c.TermsFieldBody, {
      className: s()(f.fieldBackground, {
        [f.withFooter]: 0 !== N
      }),
      terms: I,
      channelId: t
    }), 0 !== N && (0, n.jsxs)(l.Clickable, {
      className: s()(f.fieldFooterContainer, f.clickable),
      onClick: E,
      children: [(0, n.jsx)(l.FormText, {
        className: f.clickable,
        children: u.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: N
        })
      }), (0, n.jsx)(o.default, {
        className: f.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: i.default.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, n.jsx)(c.TermsFieldCheckbox, {
      disabled: !0,
      checked: !1
    })]
  })
}