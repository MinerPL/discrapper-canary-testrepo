"use strict";
a.r(t), a.d(t, {
  usePageScrollPosition: function() {
    return i
  }
});
var l = a("884691"),
  r = a("748820"),
  s = a("560103"),
  n = a("599110");
let o = (e, t, a, l) => {
    let {
      scrollTop: r = 0,
      scrollOffset: s = 0,
      scrollHeight: o = 0,
      scrollWidth: i = 0
    } = l;
    if (o > 0) {
      let l = (r + s) / o;
      l > 0 && n.default.track(e, {
        scroll_visible_percent: l,
        source: a,
        page_height: Math.round(o),
        page_width: Math.round(i),
        page_session_id: t
      })
    }
  },
  i = (e, t) => {
    let a = l.useRef(null),
      n = l.useRef((0, r.v4)()),
      i = (0, s.useThrottledFunction)(o, 5e3, [], {
        trailing: !0
      }),
      u = l.useCallback(() => {
        var l;
        let r = null === (l = a.current) || void 0 === l ? void 0 : l.getScrollerNode();
        null != r && i(e, n.current, t, {
          scrollTop: r.scrollTop,
          scrollOffset: r.offsetHeight,
          scrollHeight: r.scrollHeight,
          scrollWidth: r.scrollWidth
        })
      }, [i, e, t]);
    return {
      scrollerRef: a,
      scrollHandler: u,
      sessionId: n.current
    }
  }