"use strict";

function i(e) {
  let {
    getFocusableElements: t,
    getActiveElement: n,
    scrollToStart: i,
    scrollToEnd: r
  } = e;
  async function s(e) {
    var r, s;
    let a = (null == e ? void 0 : e.from) || n();
    if (null == a) return null;
    let l = (r = a, null !== (s = t().find(e => !!(r.compareDocumentPosition(e) & (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)))) && void 0 !== s ? s : null);
    return null == l && (null == e ? void 0 : e.wrap) ? (await (null == i ? void 0 : i()), o()) : l
  }

  function o() {
    var e;
    return null !== (e = t()[0]) && void 0 !== e ? e : null
  }

  function a() {
    var e;
    let n = t();
    return null !== (e = n[n.length - 1]) && void 0 !== e ? e : null
  }
  return {
    getNextFocusableElement: s,
    getPreviousFocusableElement: async function e(e) {
      let i = (null == e ? void 0 : e.from) || n();
      if (null == i) return null;
      let s = function(e) {
        let n = t();
        for (let t = n.length - 1; t >= 0; t--) {
          let i = n[t];
          if (e.compareDocumentPosition(i) & (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY)) return i
        }
        return null
      }(i);
      return null == s && (null == e ? void 0 : e.wrap) ? (await (null == r ? void 0 : r()), a()) : s
    },
    getFirstFocusableElement: o,
    getLastFocusableElement: a
  }
}
n.d(t, {
  E: function() {
    return i
  }
})