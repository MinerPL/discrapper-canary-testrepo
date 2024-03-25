"use strict";
i.r(t), i.d(t, {
  default: function() {
    return E
  }
}), i("222007");
var n = i("37983");
i("884691");
var a = i("414456"),
  l = i.n(a),
  s = i("669491"),
  r = i("77078"),
  o = i("461380"),
  d = i("772970"),
  u = i("933351"),
  c = i("782340"),
  f = i("935090"),
  E = function(e) {
    let {
      channelId: t,
      formField: i,
      index: a,
      isDragEnabled: E,
      isDropHovered: I,
      onDrop: T,
      onEdit: m,
      onRemove: _,
      title: x
    } = e, h = i.values, p = h.slice(0, 1), M = h.length - p.length;
    return (0, n.jsxs)(u.default, {
      field: i,
      index: a,
      isDragEnabled: E,
      isDropHovered: I,
      onDrop: T,
      onEdit: m,
      onRemove: _,
      title: x,
      children: [(0, n.jsx)(d.TermsFieldBody, {
        className: l(f.fieldBackground, {
          [f.withFooter]: 0 !== M
        }),
        terms: p,
        channelId: t
      }), 0 !== M && (0, n.jsxs)(r.Clickable, {
        className: l(f.fieldFooterContainer, f.clickable),
        onClick: m,
        children: [(0, n.jsx)(r.FormText, {
          className: f.clickable,
          children: c.default.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
            count: M
          })
        }), (0, n.jsx)(o.default, {
          className: f.termsFieldCaretIcon,
          height: 14,
          width: 14,
          color: s.default.unsafe_rawColors.WHITE_500.css
        })]
      }), (0, n.jsx)(d.TermsFieldCheckbox, {
        disabled: !0,
        checked: !1
      })]
    })
  }