"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("718017"),
  i = n("442837"),
  r = n("780384"),
  o = n("435064"),
  u = n("39604"),
  d = n("175470"),
  c = n("569545"),
  f = n("153850"),
  h = n("214576");
let m = {
    visibility: "hidden"
  },
  p = {
    precision: 1e-4,
    duration: 300
  },
  E = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  C = {
    duration: 1e3
  };

function g(e) {
  let {
    stream: t,
    inPopout: n
  } = e, {
    reducedMotion: g
  } = l.useContext(r.AccessibilityPreferencesContext), S = (0, l.useRef)(null), _ = d.useClipsButtonStore.getState().clipsButtonRef, T = (0, c.encodeStreamKey)(t), I = (0, i.useStateFromStores)([o.default], () => o.default.getActiveAnimation()), A = (0, i.useStateFromStoresArray)([o.default], () => o.default.getStreamClipAnimations(T)), v = (0, l.useRef)();
  l.useEffect(() => () => {
    (0, u.dismissSaveClipAnimation)(T)
  }, [T]);
  let N = () => {
      var e;
      let t = null === (e = S.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
      return null == t || n ? m : {
        width: t.width,
        height: t.height,
        top: t.top,
        left: t.left
      }
    },
    x = e => {
      let t = null == _ ? void 0 : _.getBoundingClientRect();
      if (v.current = t, e.timestamp !== I || null == t || n) return m;
      let {
        top: a,
        left: l
      } = t;
      return {
        top: a + 36,
        left: l - 216,
        height: 151,
        width: 268
      }
    },
    M = (0, l.useRef)(null),
    R = (0, s.useTransition)(A, {
      keys: e => e.timestamp,
      ref: M,
      from: {
        opacity: .2
      },
      enter: {
        opacity: 0
      },
      config: p
    }),
    L = (0, l.useRef)(null),
    y = (0, s.useTransition)(A, {
      ref: L,
      keys: e => e.timestamp,
      from: e => ({
        position: "fixed",
        visibility: "hidden",
        opacity: 1,
        ...g.enabled ? x(e) : N()
      }),
      enter: e => [{
        opacity: 1,
        visibility: "visible",
        ...x(e)
      }],
      leave: {
        opacity: 0,
        ...!g.enabled && {
          height: 0,
          width: 0,
          ...(() => {
            if (null != v.current) return {
              top: v.current.top + 12,
              left: v.current.left + 12
            }
          })()
        }
      },
      config: g.enabled ? C : E,
      onRest: (e, t) => {
        null != t.item && null != A.find(e => e.timestamp === t.item.timestamp) && (0, u.dismissSaveClipAnimation)(T, t.item.timestamp)
      }
    });
  return (0, s.useChain)([M, L], [0, .1], 3e3), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: h.hidden,
      ref: S
    }), R((e, t) => null != t && (0, a.jsx)(s.animated.div, {
      className: h.whiteFlash,
      style: e
    })), (0, a.jsx)(f.default, {
      children: (0, a.jsx)("div", {
        className: h.hidden,
        children: y((e, t, n, l) => (null == t ? void 0 : t.thumbnail) != null && (0, a.jsx)(s.animated.img, {
          src: t.thumbnail,
          className: h.movingImage,
          style: e
        }))
      })
    })]
  })
}