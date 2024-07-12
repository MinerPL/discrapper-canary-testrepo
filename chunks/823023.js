n.d(t, {
  N: function() {
return f;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(338545),
  o = n(481060),
  s = n(450096),
  l = n(981631),
  u = n(317365);
let c = {
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
...c,
config: {
  duration: 50
}
  },
  _ = {
...c,
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
  } = e, s = t === l.zo9.LOADING, [_] = i.useState(() => Date.now()), E = t === l.zo9.READY && Date.now() - _ < 200, f = (0, a.useTransition)(s && null != n, E ? d : c);
  return (0, r.jsx)(r.Fragment, {
children: f((e, t) => t && (0, r.jsx)(a.animated.img, {
  style: {
    ...o,
    ...e
  },
  className: u.imagePlaceholder,
  src: n,
  alt: ''
}))
  });
}

function f(e) {
  let {
readyState: t,
aspectRatio: n,
placeholder: c,
placeholderVersion: d,
placeholderStyle: f,
children: h
  } = e, p = t === l.zo9.LOADING, [m] = i.useState(p), [I, T] = i.useState(!1), g = (0, s.L)(c, d, m);
  i.useEffect(() => {
let e = setTimeout(() => {
  T(!0);
}, 2000);
return () => {
  clearTimeout(e);
};
  }, [m]);
  let S = (0, a.useTransition)(p && I, _);
  return (0, r.jsxs)('div', {
className: u.loadingOverlay,
style: {
  aspectRatio: n
},
children: [
  h,
  null != g && (0, r.jsx)(E, {
    readyState: t,
    placeholderImg: g,
    placeholderStyle: f
  }),
  S((e, t) => t && (0, r.jsx)(a.animated.div, {
    style: e,
    className: u.imageLoadingOverlay,
    children: (0, r.jsx)(o.Spinner, {
      type: o.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
      className: u.cornerLoadingSpinner
    })
  }))
]
  });
}