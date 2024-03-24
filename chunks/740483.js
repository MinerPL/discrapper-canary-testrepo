"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("414456"),
  r = a.n(l),
  i = a("16470"),
  o = a("538282"),
  u = a("882641"),
  d = a("13030"),
  c = a("350583"),
  m = n.memo(n.forwardRef(function(e, t) {
    let {
      disabled: a,
      type: l,
      className: m,
      onClick: h
    } = e, [f, g] = (0, o.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], i.default), x = n.useCallback(() => {
      (0, o.toggleMultiExpressionPicker)(l), null == h || h()
    }, [l, h]);
    return a ? null : (0, s.jsx)("div", {
      className: r(d.CHAT_INPUT_BUTTON_CLASSNAME, c.buttonContainer),
      ref: t,
      children: (0, s.jsx)(u.default, {
        className: r(c.emojiButton, m),
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