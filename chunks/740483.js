"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("16470"),
  o = s("65597"),
  u = s("77078"),
  d = s("538282"),
  c = s("13162"),
  m = s("166465"),
  h = s("882641"),
  f = s("13030"),
  g = s("365058"),
  x = s("782340"),
  C = s("537461"),
  T = n.memo(n.forwardRef(function(e, t) {
    let {
      disabled: s,
      type: l,
      className: T,
      onClick: _
    } = e, S = (0, o.default)([m.default], () => m.default.getHasPackAddedNotification(), []);
    n.useEffect(() => {
      S && setTimeout(() => {
        (0, c.dismissPackAddedNotification)()
      }, g.INVENTORY_PACK_ADDED_NOTIFICATION_DURATION)
    }, [S]);
    let [p, E] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], i.default), N = n.useCallback(() => {
      (0, d.toggleMultiExpressionPicker)(l), null == _ || _()
    }, [l, _]);
    return s ? null : (0, a.jsx)(u.Tooltip, {
      color: u.TooltipColors.GREEN,
      text: S ? x.default.Messages.INVENTORY_PACK_ADDED.format({
        number: 1
      }) : null,
      forceOpen: !0,
      children: e => (0, a.jsx)("div", {
        className: r(f.CHAT_INPUT_BUTTON_CLASSNAME, C.buttonContainer),
        ref: t,
        ...e,
        children: (0, a.jsx)(h.default, {
          className: r(C.emojiButton, T),
          onClick: N,
          active: (p === f.ExpressionPickerViewType.GIF || p === f.ExpressionPickerViewType.EMOJI || p === f.ExpressionPickerViewType.STICKER) && E === l,
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
    })
  }))