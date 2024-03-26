"use strict";
a.r(t), a.d(t, {
  usePageScrollPosition: function() {
    return i
  }
});
var s = a("884691"),
  l = a("748820"),
  r = a("560103"),
  n = a("599110");
let o = (e, t, a, s) => {
    let {
      scrollTop: l = 0,
      scrollOffset: r = 0,
      scrollHeight: o = 0,
      scrollWidth: i = 0
    } = s;
    if (o > 0) {
      let s = (l + r) / o;
      s > 0 && n.default.track(e, {
        scroll_visible_percent: s,
        source: a,
        page_height: Math.round(o),
        page_width: Math.round(i),
        page_session_id: t
      })
    }
  },
  i = (e, t) => {
    let a = s.useRef(null),
      n = s.useRef((0, l.v4)()),
      i = (0, r.useThrottledFunction)(o, 5e3, [], {
        trailing: !0
      }),
      u = s.useCallback(() => {
        var s;
        let l = null === (s = a.current) || void 0 === s ? void 0 : s.getScrollerNode();
        null != l && i(e, n.current, t, {
          scrollTop: l.scrollTop,
          scrollOffset: l.offsetHeight,
          scrollHeight: l.scrollHeight,
          scrollWidth: l.scrollWidth
        })
      }, [i, e, t]);
    return {
      scrollerRef: a,
      scrollHandler: u,
      sessionId: n.current
    }
  }