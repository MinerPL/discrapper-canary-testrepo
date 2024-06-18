"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(374470);

function r(e, t) {
  if ("horizontal" === t) {
    let {
      scrollLeft: t,
      scrollWidth: n,
      offsetWidth: i
    } = e;
    return {
      scrollPosition: t,
      scrollSize: n,
      offsetSize: i
    }
  }
  let {
    scrollTop: n,
    scrollHeight: i,
    offsetHeight: r
  } = e;
  return {
    scrollPosition: n,
    scrollSize: i,
    offsetSize: r
  }
}

function s(e, t, n) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vertical",
    o = e => {
      let {
        to: i,
        animate: o,
        callback: a
      } = e, {
        scrollPosition: l,
        scrollSize: u,
        offsetSize: _
      } = r(t(), s);
      n.to({
        to: function(e, t, n) {
          let i = t - n + 1;
          return e >= i - 1 ? i : Math.max(0, e)
        }(i, u, _),
        from: l,
        animate: o,
        callback: a
      })
    },
    a = e => {
      let {
        start: n,
        end: i,
        shouldScrollToStart: a = !1,
        padding: l = 0,
        animate: u,
        callback: _
      } = e, {
        scrollPosition: d,
        offsetSize: c
      } = r(t(), s);
      n -= l, i += l, n >= d && i <= d + c ? null != _ && _() : n < d || a ? o({
        to: n,
        animate: u,
        callback: _
      }) : o({
        to: i - c,
        animate: u,
        callback: _
      })
    };
  return {
    spring: n,
    scrollTo: o,
    mergeTo: n.mergeTo,
    scrollIntoViewRect: a,
    scrollIntoViewNode(t) {
      let {
        node: n,
        shouldScrollToStart: r = !1,
        padding: o = 0,
        animate: l = !1,
        callback: u
      } = t, {
        current: _
      } = e;
      if (null == _) return;
      let {
        offset: d,
        offsetSize: c
      } = function(e, t, n) {
        let r = "horizontal" === t ? e.offsetWidth : e.offsetHeight,
          s = "horizontal" === t ? e.offsetLeft : e.offsetTop,
          o = e.offsetParent;
        for (; null != o && o !== n;)(0, i.k)(o, HTMLElement) ? (s += "horizontal" === t ? o.offsetLeft : o.offsetTop, o = o.offsetParent) : o = o.parentNode;
        return {
          offset: s,
          offsetSize: r
        }
      }(n, s, _);
      a({
        start: d,
        end: d + c,
        shouldScrollToStart: r,
        padding: o,
        animate: l,
        callback: u
      })
    },
    scrollPageUp() {
      let {
        animate: e = !1,
        callback: n
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        scrollPosition: i,
        offsetSize: a
      } = r(t(), s);
      o({
        to: i - .9 * a,
        animate: e,
        callback: n
      })
    },
    scrollPageDown() {
      let {
        animate: e = !1,
        callback: n
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        scrollPosition: i,
        offsetSize: a
      } = r(t(), s);
      o({
        to: i + .9 * a,
        animate: e,
        callback: n
      })
    },
    scrollToTop() {
      let {
        animate: e = !1,
        callback: t
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      o({
        to: 0,
        animate: e,
        callback: t
      })
    },
    scrollToBottom() {
      let {
        animate: e = !1,
        callback: t
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      o({
        to: Number.MAX_SAFE_INTEGER,
        animate: e,
        callback: t
      })
    },
    isScrolledToTop: () => 0 === r(t(), s).scrollPosition,
    isScrolledToBottom() {
      let {
        scrollPosition: e,
        scrollSize: n,
        offsetSize: i
      } = r(t(), s);
      return e >= n - i
    },
    getDistanceFromTop: () => Math.max(0, r(t(), s).scrollPosition),
    getDistanceFromBottom() {
      let {
        scrollPosition: e,
        scrollSize: n,
        offsetSize: i
      } = r(t(), s);
      return Math.max(0, n - i - e)
    }
  }
}