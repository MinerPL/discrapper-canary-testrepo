n.d(t, {
  _: function() {
return l;
  }
});
var r = n(470079),
  s = n(772848),
  a = n(638730),
  o = n(626135);
let i = (e, t, n, r) => {
let {
  scrollTop: s = 0,
  scrollOffset: a = 0,
  scrollHeight: i = 0,
  scrollWidth: l = 0
} = r;
if (i > 0) {
  let r = (s + a) / i;
  r > 0 && o.default.track(e, {
    scroll_visible_percent: r,
    source: n,
    page_height: Math.round(i),
    page_width: Math.round(l),
    page_session_id: t
  });
}
  },
  l = (e, t) => {
let n = r.useRef(null),
  o = r.useRef((0, s.Z)()),
  l = (0, a.h)(i, 5000, [], {
    trailing: !0
  }),
  c = r.useCallback(() => {
    var r;
    let s = null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerNode();
    null != s && l(e, o.current, t, {
      scrollTop: s.scrollTop,
      scrollOffset: s.offsetHeight,
      scrollHeight: s.scrollHeight,
      scrollWidth: s.scrollWidth
    });
  }, [
    l,
    e,
    t
  ]);
return {
  scrollerRef: n,
  scrollHandler: c,
  sessionId: o.current
};
  };