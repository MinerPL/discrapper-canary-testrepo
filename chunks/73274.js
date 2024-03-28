"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("470079"),
  l = n("924826"),
  s = n("459273"),
  i = n("585483"),
  r = n("534091"),
  o = n("959517"),
  u = n("981631");

function d(e) {
  let {
    scrollerRef: t,
    ...n
  } = e, d = a.useCallback(() => {
    let e = t.current;
    return null == e ? Promise.resolve() : new Promise(t => {
      e.scrollToBottom({
        callback: () => requestAnimationFrame(t)
      })
    })
  }, []), c = a.useCallback(() => {
    let e = t.current;
    return null == e ? Promise.resolve() : new Promise(t => {
      e.scrollToTop({
        callback: () => requestAnimationFrame(t)
      })
    })
  }, []), f = a.useCallback(e => {
    var a, l, s;
    if (!n.keyboardModeEnabled) return;
    let i = null === (l = t.current) || void 0 === l ? void 0 : null === (a = l.getScrollerNode()) || void 0 === a ? void 0 : a.ownerDocument,
      r = null == i ? void 0 : i.querySelector(e);
    null != r && (null === (s = t.current) || void 0 === s || s.scrollIntoViewNode({
      node: r,
      padding: 4 * o.MESSAGE_PADDING,
      callback: () => null == r ? void 0 : r.focus()
    }))
  }, [n.keyboardModeEnabled]), h = a.useCallback(() => {
    !n.hasMoreAfter && i.ComponentDispatch.dispatchToLastSubscribed(u.ComponentActions.TEXTAREA_FOCUS)
  }, [n.hasMoreAfter]), m = (0, l.default)({
    id: r.MESSAGE_ID_PREFIX,
    preserveFocusPosition: !1,
    setFocus: f,
    isEnabled: n.keyboardModeEnabled && !n.isEditing,
    scrollToStart: c,
    scrollToEnd: d,
    onNavigateNextAtEnd: h
  }), p = a.useCallback(e => {
    let {
      atEnd: t = !1
    } = e;
    t ? m.focusLastVisibleItem() : m.focusFirstVisibleItem()
  }, [m]);
  return (0, s.useComponentAction)({
    event: u.ComponentActions.FOCUS_MESSAGES,
    handler: p
  }), m
}