"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var s = n(470079),
  l = n(924826);

function a(e) {
  let {
    listRef: t,
    padding: n,
    channel: a,
    isEnabled: i
  } = e, r = s.useCallback(e => {
    let s = t.current,
      l = document.querySelector(e);
    null != l && (null == s || s.scrollIntoViewNode({
      node: l,
      padding: n,
      callback: () => {
        var t;
        null === (t = document.querySelector(e)) || void 0 === t || t.focus({
          preventScroll: !0
        })
      }
    }))
  }, [n]), o = s.useCallback(() => new Promise(e => {
    let n = t.current;
    null == n || n.scrollToTop({
      callback: () => requestAnimationFrame(e)
    })
  }), []), c = s.useCallback(() => new Promise(e => {
    let n = t.current;
    null == n || n.scrollToBottom({
      callback: () => requestAnimationFrame(e)
    })
  }), []);
  return (0, l.ZP)({
    id: "forum-channel-list-".concat(a.id),
    isEnabled: i,
    scrollToStart: o,
    scrollToEnd: c,
    setFocus: r
  })
}