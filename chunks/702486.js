"use strict";
t.d(s, {
  _: function() {
    return o
  }
});
var n = t(470079),
  a = t(772848),
  i = t(638730),
  l = t(626135);
let r = (e, s, t, n) => {
    let {
      scrollTop: a = 0,
      scrollOffset: i = 0,
      scrollHeight: r = 0,
      scrollWidth: o = 0
    } = n;
    if (r > 0) {
      let n = (a + i) / r;
      n > 0 && l.default.track(e, {
        scroll_visible_percent: n,
        source: t,
        page_height: Math.round(r),
        page_width: Math.round(o),
        page_session_id: s
      })
    }
  },
  o = (e, s) => {
    let t = n.useRef(null),
      l = n.useRef((0, a.Z)()),
      o = (0, i.h)(r, 5e3, [], {
        trailing: !0
      }),
      c = n.useCallback(() => {
        var n;
        let a = null === (n = t.current) || void 0 === n ? void 0 : n.getScrollerNode();
        null != a && o(e, l.current, s, {
          scrollTop: a.scrollTop,
          scrollOffset: a.offsetHeight,
          scrollHeight: a.scrollHeight,
          scrollWidth: a.scrollWidth
        })
      }, [o, e, s]);
    return {
      scrollerRef: t,
      scrollHandler: c,
      sessionId: l.current
    }
  }