"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("907002"),
  l = s("891722"),
  i = s("704426"),
  u = s("77078"),
  o = s("558566"),
  d = s("821265"),
  c = e => {
    let {
      cards: t,
      className: s,
      cardType: c
    } = e, _ = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [E, I] = r.useState(0), [T, f] = r.useState(_()), [S, R] = r.useState(!1), m = t.length;
    r.useEffect(() => {
      let e = () => {
        f(_())
      };
      return window.addEventListener("resize", e), () => {
        window.removeEventListener("resize", e)
      }
    }, []), r.useEffect(() => {
      m > T && E > m - T ? I(m - T) : m <= T && I(0)
    }, [m, T]);
    let A = r.useCallback(e => ({
        x: (e - E) * 100
      }), [E]),
      [N, p] = (0, n.useSprings)(t.length, A);
    return r.useEffect(() => {
      p(A)
    }, [p, A]), (0, a.jsx)("div", {
      className: s,
      children: (0, a.jsxs)("div", {
        className: d.cardContainer,
        children: [m > T && (0, a.jsx)(u.Clickable, {
          onClick: S ? () => {
            I(e => 0 === e ? m - T : e - 1)
          } : void 0,
          className: d.leftArrow,
          children: (0, a.jsx)(l.ArrowSmallLeftIcon, {
            className: d.arrowIcon,
            colorClass: d.arrowIcon
          })
        }), (0, a.jsx)("div", {
          className: d.cardInnerContainer,
          children: N.map((e, s) => {
            let {
              x: r
            } = e;
            return (0, a.jsx)(n.animated.div, {
              className: d.card,
              style: {
                transform: null == r ? void 0 : r.to(e => "translate3d(".concat(e, "%,0,0)"))
              },
              children: (0, a.jsx)(o.default, {
                ...t[s],
                cardType: c
              }, "".concat(t[s].name, "_").concat(s, "_perks_card"))
            }, "".concat(t[s].name, "_").concat(s, "_animated_div"))
          })
        }), m > T && (0, a.jsx)(u.Clickable, {
          onClick: () => {
            I(e => (R(!0), e >= m - T) ? 0 : e + 1)
          },
          className: d.rightArrow,
          children: (0, a.jsx)(i.ArrowSmallRightIcon, {
            className: d.arrowIcon,
            colorClass: d.arrowIcon
          })
        }), m > T && (0, a.jsx)("div", {
          className: d.cardProgressBar,
          children: t.map((e, t) => {
            if (!(t > m - T)) return (0, a.jsx)("div", {
              className: t === E ? d.selectedDot : d.dot
            }, "progress_bar_dot_".concat(t))
          })
        })]
      })
    })
  }