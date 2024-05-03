"use strict";
n.r(t), n.d(t, {
  Banner: function() {
    return a
  }
});
var i = n("735250"),
  r = n("470079"),
  l = n("777207"),
  s = n("81228");

function a(e) {
  let {
    title: t,
    subtitle: n,
    iconSrc: a,
    backgroundSrc: o,
    animatedBackgroundSrc: d,
    prefersReducedMotion: c = !0
  } = e, u = r.useMemo(() => {
    let e = null != o ? o : a;
    if (null != e) return {
      "--custom-background-url": "url(".concat(e.toString(), ")")
    }
  }, [o, a]), f = r.useMemo(() => {
    if (null == o) return;
    let e = {
      "--custom-background-static": "url(".concat(o.toString())
    };
    return !c && null != d && (e["--custom-background-animated"] = "url(".concat(d.toString(), ")")), e
  }, [d, o, c]);
  return (0, i.jsxs)("div", {
    className: s.wrapper,
    children: [(0, i.jsx)("div", {
      className: s.background,
      style: u
    }), (0, i.jsxs)("div", {
      className: s.content,
      children: [null != a && (0, i.jsx)("div", {
        className: s.icon,
        children: (0, i.jsx)("img", {
          src: a.toString(),
          alt: ""
        })
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(l.Text, {
          variant: "heading-xl/bold",
          tag: "div",
          children: t
        }), null != n && (0, i.jsxs)(l.Text, {
          variant: "text-sm/normal",
          children: ["“", n, "”"]
        })]
      })]
    }), null != o ? (0, i.jsx)("div", {
      className: s.image,
      style: f
    }) : null]
  })
}