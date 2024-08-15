a(47120);
var n = a(735250),
  l = a(470079),
  i = a(120356),
  r = a.n(i),
  o = a(392711),
  s = a(399606),
  u = a(84735),
  d = a(481060),
  c = a(393238),
  m = a(98650),
  p = a(70097),
  v = a(451478),
  f = a(917042),
  b = a(20437),
  h = a(356659),
  x = a(689938),
  g = a(859106);

function C(e) {
  ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
  let t = Math.floor(e / 60),
a = Math.floor(e % 60),
n = Math.floor(e % 1 * 100);
  return t = t < 10 ? '0' + t : t, a = a < 10 ? '0' + a : a, n = n < 10 ? '0' + n : n, ''.concat(t, ':').concat(a, '.').concat(n);
}

function _(e) {
  let t = Math.floor(e / 60),
a = x.Z.Messages.DURATION_MINUTES.format({
  minutes: t
}),
n = x.Z.Messages.DURATION_SECONDS.format({
  seconds: e % 60
});
  return ''.concat(a, ' ').concat(n);
}
t.Z = function(e) {
  var t, a, i, j, S, I;
  let {
sourceURL: E
  } = e, {
videoPlayerRef: T,
cropData: y,
setCropData: w
  } = (0, b.S)(), [N, L] = l.useState((I = !(null === (a = T.current) || void 0 === a ? void 0 : null === (t = a.videoElement) || void 0 === t ? void 0 : t.paused), I)), k = l.useRef(null), [R, M] = l.useState(null), [P, Z] = l.useState(), A = l.useRef(null), F = l.useRef(null), [D, B] = l.useState(0), [O, H] = l.useState(!1), [U, z] = l.useState(null);
  (0, m.Z)(() => {
var e;
let t = null === (e = T.current) || void 0 === e ? void 0 : e.videoElement;
null != t && D !== t.currentTime && B(t.currentTime);
  });
  let W = l.useMemo(() => y.end - y.start, [y]);
  l.useEffect(() => {
var e;
let t = null === (e = T.current) || void 0 === e ? void 0 : e.videoElement,
  a = A.current,
  n = F.current;
if (null == t || null == a || null == n)
  return;
let l = (0, o.debounce)(L, h.HW),
  i = () => {
    M(null), H(!1), l.cancel(), l(!0);
  },
  r = () => {
    l.cancel(), l(!1);
  };
return t.addEventListener('play', i), t.addEventListener('pause', r), () => {
  t.removeEventListener('play', i), t.removeEventListener('pause', r);
};
  }, [T]);
  let {
ref: V,
width: G = 0,
height: K = 0
  } = (0, c.Z)(), Y = (0, s.e7)([v.Z], () => v.Z.windowSize());
  l.useMemo(() => {
let e = V.current;
null != e && z(e.getBoundingClientRect());
  }, [
Y.width,
Y.height,
G
  ]);
  let Q = l.useRef(null),
X = l.useRef({}),
q = l.useCallback(e => {
  var t;
  let a = (0, o.clamp)(e, 0, y.end - h.Hp);
  w({
    ...y,
    start: a
  }), null === (t = T.current) || void 0 === t || t.seek(a);
}, [
  y,
  w,
  T
]),
$ = l.useCallback(e => {
  var t, a;
  let n = null === (t = T.current) || void 0 === t ? void 0 : t.videoElement;
  if (null == n)
    return;
  let l = (0, o.clamp)(e, y.start + h.Hp, n.duration);
  w({
    ...y,
    end: l
  }), null === (a = T.current) || void 0 === a || a.seek(l);
}, [
  y,
  w,
  T
]),
J = l.useCallback((e, t) => {
  var a, n;
  if (null == P)
    return;
  if (null == U)
    return null;
  let l = ((0, o.clamp)(e, U.left, U.right) - U.left) / U.width * P,
    i = (0, o.clamp)(l, 0, P),
    r = R;
  if (null == r && t && (r = i <= y.start ? 'start' : i >= y.end ? 'end' : 'playhead', null === (a = T.current) || void 0 === a || a.pause(), M(r), H(N)), 'start' === r)
    q(i);
  else if ('end' === r)
    $(i);
  else if ('playhead' === r) {
    let e = (0, o.clamp)(i, y.start, y.end);
    null === (n = T.current) || void 0 === n || n.seek(e);
  }
}, [
  P,
  U,
  R,
  y.start,
  y.end,
  T,
  N,
  q,
  $
]),
ee = l.useCallback(e => {
  var t;
  let a = null === (t = T.current) || void 0 === t ? void 0 : t.videoElement;
  if (null == a)
    return;
  let n = (0, f.Z)(a.duration, e.shiftKey),
    l = !1;
  switch (e.key) {
    case 'ArrowLeft':
      l = !0, q(y.start - n);
      break;
    case 'ArrowRight':
      l = !0, q(y.start + n);
  }
  l && (e.stopPropagation(), e.preventDefault());
}, [
  T,
  q,
  y.start
]),
et = l.useCallback(e => {
  var t;
  let a = null === (t = T.current) || void 0 === t ? void 0 : t.videoElement;
  if (null == a)
    return;
  let n = (0, f.Z)(a.duration, e.shiftKey),
    l = !1;
  switch (e.key) {
    case 'ArrowLeft':
      l = !0, $(y.end - n);
      break;
    case 'ArrowRight':
      l = !0, $(y.end + n);
  }
  l && (e.stopPropagation(), e.preventDefault());
}, [
  T,
  $,
  y.end
]),
ea = l.useCallback(e => {
  J(e.clientX, !0);
}, [J]),
en = l.useCallback(e => {
  J(e.clientX, !1);
}, [J]),
el = l.useCallback(() => {
  if (O) {
    var e;
    null === (e = T.current) || void 0 === e || e.play();
  }
  H(!1), M(null);
}, [
  T,
  O
]);
  l.useEffect(() => (document.addEventListener('mousemove', en), document.addEventListener('mouseup', el), () => {
document.removeEventListener('mousemove', en), document.removeEventListener('mouseup', el);
  }), [
en,
el
  ]), l.useEffect(() => {
(async function e() {
  var e;
  let t = V.current,
    a = k.current;
  if (null == t || null == a || null == P)
    return;
  t.height = K, t.width = G;
  let n = t.getContext('2d');
  if (null == n)
    return;
  n.fillStyle = '#000', n.fillRect(0, 0, G, K);
  let l = Math.ceil(K * (a.videoWidth / a.videoHeight)),
    i = Math.ceil(G / l),
    r = Q.current;
  if (null == r)
    return;
  r.width = l, r.height = K;
  let o = null == r ? void 0 : r.getContext('2d', {
    willReadFrequently: !0
  });
  if (null == o)
    return;
  let s = X.current;
  if ((null === (e = s[i]) || void 0 === e ? void 0 : e.length) === i) {
    for (let e = 0; e < i; e++)
      n.putImageData(s[i][e], l * e, 0);
    return;
  }
  for (let e = 0; e < i; e++)
    await new Promise(t => {
      a.onseeked = () => {
        n.drawImage(a, l * e, 0, l, K), o.drawImage(a, 0, 0, l, K);
        let r = o.getImageData(0, 0, l, K);
        null == s[i] && (s[i] = []), s[i][e] = r, t();
      }, a.currentTime = l / G * P * e;
    });
}());
  }, [
G,
K,
V,
P,
Q
  ]);
  let ei = D - y.start,
er = null === (i = T.current) || void 0 === i ? void 0 : i.videoElement;
  return (0, n.jsx)('div', {
className: g.centeringWrapper,
children: (0, n.jsxs)('div', {
  className: g.timelineContainer,
  children: [
    (0, n.jsx)('div', {
      className: g.playPauseButtonWrapper,
      children: (0, n.jsx)(d.Clickable, {
        tabIndex: 0,
        onClick: () => {
          var e, t;
          return N ? null === (e = T.current) || void 0 === e ? void 0 : e.pause() : null === (t = T.current) || void 0 === t ? void 0 : t.play();
        },
        className: g.playPauseButton,
        children: N ? (0, n.jsx)(d.PauseIcon, {
          size: 'md',
          color: 'currentColor',
          className: g.playPauseIcon
        }) : (0, n.jsx)(d.PlayIcon, {
          size: 'md',
          color: 'currentColor',
          className: g.playPauseIcon
        })
      })
    }),
    (0, n.jsxs)('div', {
      className: r()(g.timeline, {
        [g.timelineDragging]: null != R
      }),
      onMouseDown: ea,
      children: [
        (0, n.jsx)('canvas', {
          className: g.hiddenCanvas,
          ref: Q
        }),
        (0, n.jsx)('canvas', {
          className: g.timelineBackground,
          ref: V
        }),
        (0, n.jsx)(u.t, {
          children: (0, n.jsx)('div', {
            tabIndex: 0,
            ref: A,
            className: g.playhead,
            style: {
              left: null != er ? ''.concat(er.currentTime / er.duration * 100, '%') : 0
            }
          })
        }),
        (0, n.jsx)(p.Z, {
          preload: 'auto',
          onLoadedMetadata: function() {
            let e = k.current;
            if (null != e) {
              if (Z(e.duration), 0 === y.start && (0 === y.end || y.end === e.duration)) {
                var t;
                null === (t = T.current) || void 0 === t || t.seek(e.duration / 2), B(e.duration / 2);
              }
              0 === y.end && w(t => ({
                ...t,
                end: e.duration
              }));
            }
          },
          className: g.timelineVideo,
          ref: k,
          src: E,
          muted: !0
        }),
        (0, n.jsxs)('div', {
          className: g.dragBox,
          style: {
            left: null != P ? ''.concat(y.start / P * 100, '%') : '0',
            right: null != P ? ''.concat((P - y.end) / P * 100, '%') : '0'
          },
          children: [
            (0, n.jsx)('div', {
              className: g.timePillContainer,
              children: (0, n.jsx)('div', {
                ref: F,
                className: g.timePillBackground,
                children: (0, n.jsxs)(d.Text, {
                  variant: 'text-sm/normal',
                  className: g.timePillText,
                  color: 'always-white',
                  children: [
                    C(ei),
                    (0, n.jsx)('span', {
                      className: g.slashCharacter,
                      children: ' / '
                    }),
                    C(W)
                  ]
                })
              })
            }),
            (0, n.jsx)(u.t, {
              children: (0, n.jsx)('button', {
                className: r()(g.dragHandleLeft, {
                  [g.dragging]: 'start' === R
                }),
                onMouseDown: ea,
                onKeyDown: ee,
                role: 'slider',
                tabIndex: 0,
                'aria-valuemin': 0,
                'aria-valuenow': y.start,
                'aria-valuetext': _(y.start),
                'aria-valuemax': y.end - h.Hp,
                'aria-label': x.Z.Messages.CLIPS_CROP_START,
                children: (0, n.jsx)('div', {
                  className: g.cropLeftArrow
                })
              })
            }),
            (0, n.jsx)(u.t, {
              children: (0, n.jsx)('button', {
                className: r()(g.dragHandleRight, {
                  [g.dragging]: 'end' === R
                }),
                onMouseDown: ea,
                onKeyDown: et,
                role: 'slider',
                tabIndex: 0,
                'aria-valuemin': y.start + h.Hp,
                'aria-valuenow': y.end,
                'aria-valuetext': _(y.end),
                'aria-valuemax': null === (S = T.current) || void 0 === S ? void 0 : null === (j = S.videoElement) || void 0 === j ? void 0 : j.duration,
                'aria-label': x.Z.Messages.CLIPS_CROP_END,
                children: (0, n.jsx)('div', {
                  className: g.cropRightArrow
                })
              })
            })
          ]
        })
      ]
    })
  ]
})
  });
};