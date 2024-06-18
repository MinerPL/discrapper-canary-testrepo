"use strict";
n.d(t, {
  Z: function() {
    return E
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n(481060),
  a = n(220082),
  l = n(768581),
  u = n(772606),
  _ = n(217992);

function d(e, t, n) {
  return e + (t - e) * n
}

function c(e) {
  let [t, n] = r.useState(void 0);
  return r.useEffect(() => {
    null != e.current && n(getComputedStyle(e.current))
  }, [e]), t
}

function E(e) {
  let {
    application: t,
    scrollerRef: n
  } = e, d = l.ZP.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: t.bot,
    size: 24
  }), E = r.useRef(null), I = r.useRef(null), T = r.useRef(null), h = (0, o.useToken)(o.tokens.colors.BG_BASE_PRIMARY).hex(), S = (0, a.ZP)("number" == typeof d ? "" : d, null != h ? h : ""), f = c(E), N = c(I);
  return r.useEffect(() => {
    let e = n.current,
      t = () => {
        var t, n, i, r, o, a, l, u, _;
        let d = E.current,
          c = T.current,
          I = parseInt(null !== (t = null == f ? void 0 : f.height) && void 0 !== t ? t : ""),
          h = parseInt(null !== (n = null == N ? void 0 : N.height) && void 0 !== n ? n : "");
        if (null != e && null != d && null != c && !isNaN(I) && !isNaN(h)) {
          ;
          let t = null !== (i = e.scrollTop) && void 0 !== i ? i : 0,
            n = 0 !== e.scrollHeight ? e.scrollHeight : h + 20,
            E = 0 !== e.clientHeight ? e.clientHeight : h + 20,
            T = Math.min(n - E, h + 20);
          let S = (r = t, (o = h - I) === (a = T) ? 1 : (0, s.clamp)((r - o) / (a - o), 0, 1));
          d.style.filter = "brightness(".concat(1 + (.6 - (l = 1)) * S, ")"), c.style.opacity = "".concat(0 + (1 - (u = 0)) * S), c.style.transform = "translateY(".concat((_ = I / 4) + (0 - _) * S, "px)")
        }
      };
    return null == e || e.addEventListener("scroll", t), () => {
      null == e || e.removeEventListener("scroll", t)
    }
  }, [null == N ? void 0 : N.height, n, null == f ? void 0 : f.height]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: _.stickyContainer,
      children: [(0, i.jsx)("div", {
        className: _.stickyBannerContainer,
        children: (0, i.jsx)("div", {
          className: _.stickyBanner,
          ref: E,
          style: {
            backgroundColor: S
          }
        })
      }), (0, i.jsx)("div", {
        className: _.backButtonContainer,
        children: (0, i.jsx)(u.Z, {})
      }), (0, i.jsx)("div", {
        className: _.nameContainer,
        children: (0, i.jsx)(o.Heading, {
          ref: T,
          className: _.textApplicationName,
          variant: "heading-md/extrabold",
          children: t.name
        })
      })]
    }), (0, i.jsx)("div", {
      ref: I,
      className: _.bannerBackground,
      style: {
        backgroundColor: S
      }
    })]
  })
}