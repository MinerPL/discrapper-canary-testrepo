"use strict";
a.r(t), a.d(t, {
  usePageScrollPosition: function() {
    return o
  }
});
var l = a("884691"),
  s = a("748820"),
  r = a("560103"),
  n = a("599110");
let i = (e, t, a, l) => {
    let {
      scrollTop: s = 0,
      scrollOffset: r = 0,
      scrollHeight: i = 0,
      scrollWidth: o = 0
    } = l;
    if (i > 0) {
      let l = (s + r) / i;
      l > 0 && n.default.track(e, {
        scroll_visible_percent: l,
        source: a,
        page_height: Math.round(i),
        page_width: Math.round(o),
        page_session_id: t
      })
    }
  },
  o = (e, t) => {
    let a = l.useRef(null),
      n = l.useRef((0, s.v4)()),
      o = (0, r.useThrottledFunction)(i, 5e3, [], {
        trailing: !0
      }),
      c = l.useCallback(() => {
        var l;
        let s = null === (l = a.current) || void 0 === l ? void 0 : l.getScrollerNode();
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