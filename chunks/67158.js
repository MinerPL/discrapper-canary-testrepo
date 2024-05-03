"use strict";
a.r(t), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("120356"),
  r = a.n(l),
  i = a("143927"),
  o = a("28546"),
  u = a("401227"),
  d = a("957825"),
  c = a("414367");
t.default = n.memo(n.forwardRef(function(e, t) {
  let {
    disabled: a,
    type: l,
    className: m,
    onClick: h
  } = e, [f, g] = (0, o.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], i.default), x = n.useCallback(() => {
    (0, o.toggleMultiExpressionPicker)(l), null == h || h()
  }, [l, h]);
  return a ? null : (0, s.jsx)("div", {
    className: r()(d.CHAT_INPUT_BUTTON_CLASSNAME, c.buttonContainer),
    ref: t,
    children: (0, s.jsx)(u.default, {
      className: r()(c.emojiButton, m),
      onClick: x,
      active: (f === d.ExpressionPickerViewType.GIF || f === d.ExpressionPickerViewType.EMOJI || f === d.ExpressionPickerViewType.STICKER) && g === l,
      tabIndex: 0,
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: -4,
          right: -4
        }
      }
    })
  })
}))