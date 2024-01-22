"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("884691"),
  n = s("974667");

function l(e) {
  let {
    listRef: t,
    padding: s,
    channel: l,
    isEnabled: r
  } = e, i = a.useCallback(e => {
    let a = t.current,
      n = document.querySelector(e);
    null != n && (null == a || a.scrollIntoViewNode({
      node: n,
      padding: s,
      callback: () => {
        var t;
        null === (t = document.querySelector(e)) || void 0 === t || t.focus({
          preventScroll: !0
        })
      }
    }))
  }, [s]), o = a.useCallback(() => new Promise(e => {
    let s = t.current;
    null == s || s.scrollToTop({
      callback: () => requestAnimationFrame(e)
    })
  }), []), u = a.useCallback(() => new Promise(e => {
    let s = t.current;
    null == s || s.scrollToBottom({
      callback: () => requestAnimationFrame(e)
    })
  }), []);
  return (0, n.default)({
    id: "forum-channel-list-".concat(l.id),
    isEnabled: r,
    scrollToStart: o,
    scrollToEnd: u,
    setFocus: i
  })
}