"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("414456"),
  n = s.n(i),
  l = s("146606"),
  o = s("891722"),
  u = s("704426"),
  d = s("77078"),
  c = s("558566"),
  _ = s("559695"),
  E = e => {
    let {
      cards: t,
      className: s,
      cardType: i
    } = e, E = () => window.innerWidth < 890 ? 1 : window.innerWidth < 1080 ? 2 : 3, [T, I] = r.useState(0), [f, R] = r.useState(E()), [S, m] = r.useState(!1), N = t.length;
    r.useEffect(() => {
      let e = () => {
        R(E())
      };
      return window.addEventListener("resize", e), () => {
        window.removeEventListener("resize", e)
      }
    }, []), r.useEffect(() => {
      N > f && T > N - f ? I(N - f) : N <= f && I(0)
    }, [N, f]);
    let A = r.useCallback(e => ({
        x: (e - T) * 100
      }), [T]),
      [p, C] = (0, l.useSprings)(t.length, A);
    return r.useEffect(() => {
      C(A)
    }, [C, A]), (0, a.jsx)("div", {
      className: s,
      children: (0, a.jsxs)("div", {
        className: _.cardContainer,
        children: [N > f && (0, a.jsx)(d.Clickable, {
          onClick: S ? () => {
            I(e => 0 === e ? N - f : e - 1)
          } : void 0,
          className: n({
            [_.leftArrow]: S,
            [_.inactiveArrow]: !S
          }),
          children: (0, a.jsx)(o.ArrowSmallLeftIcon, {
            className: _.arrowIcon,
            colorClass: _.arrowIcon
          })
        }), (0, a.jsx)("div", {
          className: _.cardInnerContainer,
          children: p.map((e, s) => {
            let {
              x: r
            } = e;
            return (0, a.jsx)(l.animated.div, {
              className: _.card,
              style: {
                transform: null == r ? void 0 : r.to(e => "translate3d(".concat(e, "%,0,0)"))
              },
              children: (0, a.jsx)(c.default, {
                ...t[s],
                cardType: i
              }, "".concat(t[s].name, "_").concat(s, "_perks_card"))
            }, "".concat(t[s].name, "_").concat(s, "_animated_div"))
          })
        }), N > f && (0, a.jsx)(d.Clickable, {
          onClick: () => {
            I(e => e >= N - f ? (m(!0), 0) : e + 1)
          },
          className: _.rightArrow,
          children: (0, a.jsx)(u.ArrowSmallRightIcon, {
            className: _.arrowIcon,
            colorClass: _.arrowIcon
          })
        }), N > f && (0, a.jsx)("div", {
          className: _.cardProgressBar,
          children: t.map((e, t) => {
            if (!(t > N - f)) return (0, a.jsx)("div", {
              className: t === T ? _.selectedDot : _.dot
            }, "progress_bar_dot_".concat(t))
          })
        })]
      })
    })
  }