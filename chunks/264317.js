"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("222007");
var l = a("884691"),
  n = a("16470"),
  s = a("418009"),
  r = a("850391"),
  i = a("538282"),
  o = a("186859"),
  u = a("13030");

function c(e) {
  var t, a;
  let [c, d] = l.useState(null), [E, _, A, m] = (0, i.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.lastActiveView, e.pickerId], n.default), f = r.ChatInputTypes.CREATE_POLL, L = null != E && null != _ && _ === f;
  let T = (t = A, a = e, null != t && o.POLLS_SUPPORTED_EXPRESSION_PICKER_VIEW_TYPES.has(t) ? t : a === s.PollLayoutTypes.DEFAULT ? u.ExpressionPickerViewType.EMOJI : u.ExpressionPickerViewType.GIF),
    C = l.useCallback(e => {
      d(t => (t === e ? (0, i.toggleExpressionPicker)(T, f) : (0, i.openExpressionPicker)(T, f), e))
    }, [T, f]),
    p = l.useCallback(() => {
      (0, i.closeExpressionPicker)(f)
    }, [f]);
  return l.useEffect(() => () => {
    (0, i.closeExpressionPicker)(f)
  }, [f]), {
    showPollExpressionPicker: L,
    togglePollExpressionPicker: C,
    closePollExpressionPicker: p,
    pollExpressionPickerId: m,
    chatInputType: f,
    lastActiveParentIndex: c
  }
}