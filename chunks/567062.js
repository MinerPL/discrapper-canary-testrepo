"use strict";
i.r(t), i.d(t, {
  default: function() {
    return I
  }
}), i("222007");
var n = i("37983"),
  a = i("884691"),
  l = i("414456"),
  s = i.n(l),
  r = i("146606"),
  o = i("446674"),
  d = i("77078"),
  u = i("731898"),
  c = i("206230"),
  f = i("782340"),
  E = i("398277"),
  I = a.memo(function(e) {
    let {
      renderHeader: t,
      children: i,
      isExpanded: l,
      isStuck: I,
      onExpand: T
    } = e, m = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [_, x] = a.useState(!0), [h, p] = a.useState(!1), {
      ref: M,
      height: R = 0
    } = (0, u.default)(), {
      ref: F,
      height: v = 0
    } = (0, u.default)(), [N, S] = a.useState(l), C = (0, r.useSpring)({
      height: N ? v + R : R,
      immediate: _ || m,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      onStart: () => {
        p(!1)
      },
      onRest: () => {
        p(!0)
      }
    });
    a.useLayoutEffect(() => {
      p(!1), S(l)
    }, [l]);
    let [g, A] = a.useState(!1), L = () => {
      A(!1)
    };
    return a.useLayoutEffect(() => {
      let e = setTimeout(() => {
        x(!1)
      }, 100);
      return () => clearTimeout(e)
    }, []), (0, n.jsx)(d.Clickable, {
      className: s(E.editCard, {
        [E.toggled]: l,
        [E.active]: g
      }),
      onMouseLeave: L,
      onMouseDown: () => {
        A(!0)
      },
      onMouseUp: L,
      children: (0, n.jsxs)(r.animated.div, {
        className: s(E.contentExpandContainer, {
          [E.showOverflow]: l && h
        }),
        style: C,
        children: [(0, n.jsx)(d.Clickable, {
          innerRef: M,
          onClick: I ? void 0 : T,
          className: s(E.innerHeader, {
            [E.toggled]: l && I
          }),
          "aria-label": f.default.Messages.EXPAND,
          children: t
        }), (0, n.jsx)("div", {
          ref: F,
          children: i
        })]
      })
    })
  })