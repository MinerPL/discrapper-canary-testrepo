"use strict";
a.r(t), a.d(t, {
  usePageScrollPosition: function() {
    return o
  }
});
var r = a("884691"),
  s = a("748820"),
  l = a("560103"),
  n = a("599110");
let i = (e, t, a, r) => {
    let {
      scrollTop: s = 0,
      scrollOffset: l = 0,
      scrollHeight: i = 0,
      scrollWidth: o = 0
    } = r;
    if (i > 0) {
      let r = (s + l) / i;
      r > 0 && n.default.track(e, {
        scroll_visible_percent: r,
        source: a,
        page_height: Math.round(i),
        page_width: Math.round(o),
        page_session_id: t
      })
    }
  },
  o = (e, t) => {
    let a = r.useRef(null),
      n = r.useRef((0, s.v4)()),
      o = (0, l.useThrottledFunction)(i, 5e3, [], {
        trailing: !0
      }),
      c = r.useCallback(() => {
        var r;
        let s = null === (r = a.current) || void 0 === r ? void 0 : r.getScrollerNode();
        null != s && o(e, n.current, t, {
          scrollTop: s.scrollTop,
          scrollOffset: s.offsetHeight,
          scrollHeight: s.scrollHeight,
          scrollWidth: s.scrollWidth
        })
      }, [o, e, t]);
    return {
      scrollerRef: a,
      scrollHandler: c,
      sessionId: n.current
    }
  }