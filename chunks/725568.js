"use strict";
n.d(t, {
  Ox: function() {
    return R
  },
  QP: function() {
    return N
  },
  ob: function() {
    return p
  },
  q4: function() {
    return C
  }
}), n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(97613),
  l = n.n(a),
  u = n(832706),
  _ = n(435802),
  d = n(652874),
  c = n(477690),
  E = n(481060),
  I = n(714338),
  T = n(624138),
  h = n(153850),
  S = n(162534);
let f = (0, T.Mg)(c.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
(r = i || (i = {}))[r.ENTERING = 1] = "ENTERING", r[r.ENTERED = 2] = "ENTERED", r[r.EXITING = 3] = "EXITING", r[r.EXITED = 4] = "EXITED";
let N = (0, d.Z)(e => ({
  fullScreenLayers: [],
  addLayer: t => e(e => {
    let {
      fullScreenLayers: n
    } = e;
    return {
      fullScreenLayers: [...n, t]
    }
  })
}));

function A(e) {
  let {
    item: t
  } = e, n = o.useRef(null);
  return (0, E.useFocusLock)(n), o.useEffect(() => (I.Z.disable(), I.Z.enableTemp(function(e) {
    return {
      POP_LAYER: {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
          p(e)
        }
      }
    }
  }(t.key)), () => {
    I.Z.disableTemp()
  }), [t.key]), (0, s.jsx)(t.LayerComponent, {
    children: (0, s.jsxs)("div", {
      className: S.root,
      ref: n,
      children: [(0, s.jsx)("div", {
        className: S.drag
      }), t.render({
        transitionState: null != t ? t.transitionState : 3,
        closeLayer: () => p(t.key)
      })]
    })
  })
}
let m = {
    enter: S.enter,
    enterActive: S.enterActive,
    enterDone: S.enterDone,
    exit: S.exit,
    exitActive: S.exitActive,
    exitDone: S.exitDone
  },
  O = {
    enter: S.enterReducedMotion,
    enterActive: S.enterActiveReducedMotion,
    enterDone: S.enterDoneReducedMotion,
    exit: S.exitReducedMotion,
    exitActive: S.exitActiveReducedMotion,
    exitDone: S.exitDoneReducedMotion
  };

function R() {
  let {
    reducedMotion: e
  } = o.useContext(E.AccessibilityPreferencesContext), t = e.enabled ? O : m, n = N(e => e.fullScreenLayers);
  return (0, s.jsx)(u.Z, {
    children: n.map(e => (0, s.jsx)(_.Z, {
      classNames: t,
      timeout: f,
      onEntered: () => {
        N.setState({
          fullScreenLayers: n.map(t => t.key === e.key ? {
            ...t,
            transitionState: 2
          } : t)
        })
      },
      unmountOnExit: !0,
      children: (0, s.jsx)(A, {
        item: e
      })
    }, e.key))
  })
}

function C(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
    {
      layerKey: n,
      Layer: i
    } = t,
    r = null != n ? n : l()();
  return N.setState(t => ({
    fullScreenLayers: [...t.fullScreenLayers, {
      key: r,
      transitionState: 1,
      LayerComponent: null != i ? i : h.ZP,
      render: e
    }]
  })), r
}

function p(e) {
  N.setState(t => ({
    fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
  }))
}