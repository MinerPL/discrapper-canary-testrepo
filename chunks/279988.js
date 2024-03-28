"use strict";
i.r(t), i("47120");
var a = i("735250");
i("470079");
var l = i("803997"),
  n = i.n(l),
  s = i("692547"),
  r = i("481060"),
  o = i("259580"),
  d = i("196345"),
  c = i("137158"),
  u = i("689938"),
  f = i("482249");
t.default = function(e) {
  let {
    channelId: t,
    formField: i,
    index: l,
    isDragEnabled: m,
    isDropHovered: E,
    onDrop: I,
    onEdit: x,
    onRemove: h,
    title: T
  } = e, M = i.values, F = M.slice(0, 1), _ = M.length - F.length;
  return (0, a.jsxs)(c.default, {
    field: i,
    index: l,
    isDragEnabled: m,
    isDropHovered: E,
    onDrop: I,
    onEdit: x,
    onRemove: h,
    title: T,
    children: [(0, a.jsx)(d.TermsFieldBody, {
      className: n()(f.fieldBackground, {
        [f.withFooter]: 0 !== _
      }),
      terms: F,
      channelId: t
    }), 0 !== _ && (0, a.jsxs)(r.Clickable, {
      className: n()(f.fieldFooterContainer, f.clickable),
      onClick: x,
      children: [(0, a.jsx)(r.FormText, {
        className: f.clickable,
        children: u.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
          count: _
        })
      }), (0, a.jsx)(o.default, {
        className: f.termsFieldCaretIcon,
        height: 14,
        width: 14,
        color: s.default.unsafe_rawColors.WHITE_500.css
      })]
    }), (0, a.jsx)(d.TermsFieldCheckbox, {
      disabled: !0,
      checked: !1
    })]
  })
}