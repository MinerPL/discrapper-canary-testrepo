"use strict";
n.r(t), n.d(t, {
  Banner: function() {
    return s
  }
});
var i = n("735250"),
  l = n("470079"),
  r = n("777207"),
  a = n("156440");

function s(e) {
  let {
    title: t,
    subtitle: n,
    iconSrc: s,
    backgroundSrc: o,
    animatedBackgroundSrc: u,
    prefersReducedMotion: d = !0
  } = e, c = l.useMemo(() => {
    let e = null != o ? o : s;
    if (null != e) return {
      "--custom-background-url": "url(".concat(e.toString(), ")")
    }
  }, [o, s]), f = l.useMemo(() => {
    if (null == o) return;
    let e = {
      "--custom-background-static": "url(".concat(o.toString())
    };
    return !d && null != u && (e["--custom-background-animated"] = "url(".concat(u.toString(), ")")), e
  }, [u, o, d]);
  return (0, i.jsxs)("div", {
    className: a.wrapper,
    children: [(0, i.jsx)("div", {
      className: a.background,
      style: c
    }), (0, i.jsxs)("div", {
      className: a.content,
      children: [null != s && (0, i.jsx)("div", {
        className: a.icon,
        children: (0, i.jsx)("img", {
          src: s.toString(),
          alt: ""
        })
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(r.Text, {
          variant: "heading-xl/bold",
          tag: "div",
          children: t
        }), null != n && (0, i.jsxs)(r.Text, {
          variant: "text-sm/normal",
          children: ["“", n, "”"]
        })]
      })]
    }), null != o ? (0, i.jsx)("div", {
      className: a.image,
      style: f
    }) : null]
  })
}