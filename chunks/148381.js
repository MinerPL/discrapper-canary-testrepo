"use strict";
n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var l = n(735250),
  s = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(481060),
  o = n(958707),
  u = n(555066),
  c = n(716976);

function d(e) {
  let {
    title: t,
    scrollerClassName: n,
    scrollerInnerClassName: a,
    children: d
  } = e, m = s.useRef(null), [E, _] = s.useState(!1), [S, h] = s.useState(!1), g = s.useCallback(() => {
    let {
      current: e
    } = m;
    null != e && (_(!e.isScrolledToTop()), h(!e.isScrolledToBottom()))
  }, []);
  return s.useLayoutEffect(() => g(), []), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: i()(c.title, c.scrollWrapper),
      children: [(0, l.jsx)(r.FormTitle, {
        className: u.formItemTitle,
        children: t
      }), (0, l.jsx)(o.Z, {
        separator: E
      })]
    }), (0, l.jsx)("div", {
      className: n,
      children: (0, l.jsx)(r.AdvancedScroller, {
        ref: m,
        className: i()(c.scrollerInner, a, {
          [c.bottomSeparator]: S
        }),
        onScroll: g,
        children: d
      })
    })]
  })
}