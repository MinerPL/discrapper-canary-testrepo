"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("803997"),
  i = l.n(n),
  r = l("481060"),
  u = l("958707"),
  o = l("223318"),
  d = l("573263");

function c(e) {
  let {
    title: t,
    scrollerClassName: l,
    scrollerInnerClassName: n,
    children: c
  } = e, f = s.useRef(null), [m, S] = s.useState(!1), [E, C] = s.useState(!1), _ = s.useCallback(() => {
    let {
      current: e
    } = f;
    null != e && (S(!e.isScrolledToTop()), C(!e.isScrolledToBottom()))
  }, []);
  return s.useLayoutEffect(() => _(), []), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(d.title, d.scrollWrapper),
      children: [(0, a.jsx)(r.FormTitle, {
        className: o.formItemTitle,
        children: t
      }), (0, a.jsx)(u.default, {
        separator: m
      })]
    }), (0, a.jsx)("div", {
      className: l,
      children: (0, a.jsx)(r.AdvancedScroller, {
        ref: f,
        className: i()(d.scrollerInner, n, {
          [d.bottomSeparator]: E
        }),
        onScroll: _,
        children: c
      })
    })]
  })
}