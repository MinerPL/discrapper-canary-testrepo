"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(470079),
  r = n(924826),
  s = n(536895),
  o = n(40851),
  a = n(590921);

function l(e) {
  var t, n, l;
  let {
    navId: u,
    scrollerRef: _,
    state: d,
    onFocus: c
  } = e, {
    renderWindow: E
  } = i.useContext(o.ZP), I = (e, t) => {
    var n;
    if (null === (n = _.current) || void 0 === n || n.scrollToTop(), e && null != d.query) {
      let e = d.query.typeInfo.focusMode,
        n = !(e === a.QZ.MANUAL || e === a.QZ.AUTO_WHEN_FILTERED && 0 === d.query.queryText.length);
      d.isVisible && (!0 !== t || !1 !== n) ? (h.setFocus("0"), null == c || c(0)) : (h.setFocus(null), null == c || c(null))
    }
  }, T = e => {
    var t;
    if (null === (t = _.current) || void 0 === t || t.scrollToBottom(), e && null != d.query && d.query.resultCount > 0) {
      let e = d.query.resultCount - 1;
      h.setFocus(e.toString()), null == c || c(e)
    }
  }, h = (0, r.ZP)({
    id: u,
    isEnabled: d.isVisible,
    orientation: s.hy.VERTICAL,
    useVirtualFocus: !0,
    setFocus: (e, t) => {
      let n = E.document.querySelector(e);
      if (null != n) {
        var i;
        null === (i = _.current) || void 0 === i || i.scrollIntoViewNode({
          node: n
        })
      }
      null == c || c(+t)
    },
    onNavigateNextAtEnd: () => I(!0),
    onNavigatePreviousAtStart: () => T(!0),
    scrollToStart: () => (I(!1, !1), Promise.resolve()),
    scrollToEnd: () => (T(!1), Promise.resolve())
  });
  return i.useEffect(() => {
    I(!0, !0)
  }, [null === (t = d.query) || void 0 === t ? void 0 : t.type, null === (n = d.query) || void 0 === n ? void 0 : n.queryText, null === (l = d.query) || void 0 === l ? void 0 : l.isLoading, d.isVisible]), h
}