"use strict";
n.d(t, {
  N: function() {
    return I
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(920906),
  o = n(481060),
  a = n(450096),
  l = n(981631),
  u = n(599908);
let _ = {
    from: {
      opacity: 1
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: {
      duration: 200
    }
  },
  d = {
    ..._,
    config: {
      duration: 50
    }
  },
  c = {
    ..._,
    config: (e, t) => t ? {
      duration: 800
    } : {
      duration: 200
    }
  };

function E(e) {
  let {
    readyState: t,
    placeholderImg: n,
    placeholderStyle: o
  } = e, a = t === l.zo9.LOADING, [c] = r.useState(() => Date.now()), E = t === l.zo9.READY && Date.now() - c < 200, I = (0, s.useTransition)(a && null != n, E ? d : _);
  return (0, i.jsx)(i.Fragment, {
    children: I((e, t) => t && (0, i.jsx)(s.animated.img, {
      style: {
        ...o,
        ...e
      },
      className: u.imagePlaceholder,
      src: n,
      alt: ""
    }))
  })
}

function I(e) {
  let {
    readyState: t,
    aspectRatio: n,
    placeholder: _,
    placeholderVersion: d,
    placeholderStyle: I,
    children: T
  } = e, h = t === l.zo9.LOADING, [S] = r.useState(h), [f, N] = r.useState(!1), A = (0, a.L)(_, d, S);
  r.useEffect(() => {
    let e = setTimeout(() => {
      N(!0)
    }, 2e3);
    return () => {
      clearTimeout(e)
    }
  }, [S]);
  let m = (0, s.useTransition)(h && f, c);
  return (0, i.jsxs)("div", {
    className: u.loadingOverlay,
    style: {
      aspectRatio: n
    },
    children: [T, null != A && (0, i.jsx)(E, {
      readyState: t,
      placeholderImg: A,
      placeholderStyle: I
    }), m((e, t) => t && (0, i.jsx)(s.animated.div, {
      style: e,
      className: u.imageLoadingOverlay,
      children: (0, i.jsx)(o.Spinner, {
        type: o.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
        className: u.cornerLoadingSpinner
      })
    }))]
  })
}