var l = n(735250),
  a = n(470079),
  i = n(120356),
  s = n.n(i),
  r = n(974674),
  o = n(438784),
  u = n(481060),
  c = n(806519),
  d = n(3682),
  _ = n(976249);
let h = {},
  f = 1 / 4;

function E(e) {
  let {
height: t,
fillColor: n
  } = e;
  return (0, l.jsx)('div', {
style: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: t / 2,
  backgroundColor: n,
  height: t,
  width: t * d.jR
},
children: (0, l.jsx)(o.b, {
  className: _.dots,
  dotRadius: t * f
})
  });
}

function g(e) {
  let {
isTyping: t,
statusCoords: n,
status: a
  } = e, i = (0, u.useStatusFillColor)(u.StatusTypes.ONLINE);
  return t ? (0, l.jsx)('div', {
style: {
  position: 'absolute',
  top: n.y,
  left: n.x
},
children: (0, l.jsx)(E, {
  height: n.height,
  fillColor: i
})
  }) : null != a ? (0, l.jsx)(u.Status, {
size: n.height,
status: a,
style: {
  position: 'absolute',
  top: n.y,
  left: n.x
}
  }) : null;
}

function S(e) {
  let {
src: t,
size: n
  } = e;
  return (0, l.jsx)('img', {
className: _.circularImage,
src: t,
alt: '',
width: n,
height: n
  });
}
let A = {
  [u.AvatarSizes.SIZE_16]: {
default: c.QS.DIAGONAL_FACEPILE_16,
typing: c.QS.DIAGONAL_FACEPILE_TYPING_16,
status: c.QS.DIAGONAL_FACEPILE_STATUS_16
  },
  [u.AvatarSizes.SIZE_20]: {
default: c.QS.DIAGONAL_FACEPILE_20,
typing: c.QS.DIAGONAL_FACEPILE_TYPING_20,
status: c.QS.DIAGONAL_FACEPILE_STATUS_20
  },
  [u.AvatarSizes.SIZE_24]: {
default: c.QS.DIAGONAL_FACEPILE_24,
typing: c.QS.DIAGONAL_FACEPILE_TYPING_24,
status: c.QS.DIAGONAL_FACEPILE_STATUS_24
  },
  [u.AvatarSizes.SIZE_32]: {
default: c.QS.DIAGONAL_FACEPILE_32,
typing: c.QS.DIAGONAL_FACEPILE_TYPING_32,
status: c.QS.DIAGONAL_FACEPILE_STATUS_32
  },
  [u.AvatarSizes.SIZE_40]: {
default: c.QS.DIAGONAL_FACEPILE_32,
typing: c.QS.DIAGONAL_FACEPILE_TYPING_32,
status: c.QS.DIAGONAL_FACEPILE_STATUS_32
  },
  [u.AvatarSizes.SIZE_48]: {
default: c.QS.DIAGONAL_FACEPILE_40,
typing: c.QS.DIAGONAL_FACEPILE_TYPING_40,
status: c.QS.DIAGONAL_FACEPILE_STATUS_40
  },
  [u.AvatarSizes.SIZE_56]: {
default: c.QS.DIAGONAL_FACEPILE_56,
typing: c.QS.DIAGONAL_FACEPILE_TYPING_56,
status: c.QS.DIAGONAL_FACEPILE_STATUS_56
  },
  [u.AvatarSizes.SIZE_80]: {
default: c.QS.DIAGONAL_FACEPILE_80,
typing: c.QS.DIAGONAL_FACEPILE_TYPING_80,
status: c.QS.DIAGONAL_FACEPILE_STATUS_80
  },
  [u.AvatarSizes.SIZE_120]: {
default: c.QS.DIAGONAL_FACEPILE_120,
typing: c.QS.DIAGONAL_FACEPILE_TYPING_120,
status: c.QS.DIAGONAL_FACEPILE_STATUS_120
  }
};
t.Z = function(e) {
  var t, n, i;
  let {
backSrc: o,
frontSrc: f,
size: E,
isTyping: I,
status: p,
style: m,
className: C,
...N
  } = e, {
size: L
  } = u.AvatarSizeSpecs[E], {
statusCoords: b,
frontAvatarOffsetPx: T,
frontAvatarSizePx: Z,
backAvatarSizePx: y
  } = a.useMemo(() => {
var e;
let t = ''.concat(L, '-').concat(I);
return null !== (e = h[t]) && void 0 !== e ? e : function(e, t, n) {
  let l = u.AvatarSizeSpecs[e],
    a = l.size / (d.z3 + d.o),
    i = a * d.z3,
    s = a * d.o,
    o = {
      statusCoords: (0, r.Vq)(l, u.StatusTypes.ONLINE, !1, t),
      frontAvatarSizePx: i,
      backAvatarSizePx: a,
      frontAvatarOffsetPx: s,
      frontAvatarCenter: s + i / 2
    };
  return h[n] = o, o;
}(E, I, t);
  }, [
L,
I,
E
  ]);
  let x = (t = null != p, n = I, i = E, n ? A[i].typing : t ? A[i].status : A[i].default);
  return (0, l.jsxs)('div', {
style: {
  width: L,
  height: L,
  ...m
},
'aria-label': N['aria-label'],
'aria-hidden': N['aria-hidden'],
className: s()(_.container, C),
children: [
  (0, l.jsxs)(c.ZP, {
    mask: x,
    height: L,
    width: L,
    children: [
      (0, l.jsx)('img', {
        src: o,
        alt: '',
        width: y,
        height: y
      }),
      (0, l.jsx)('div', {
        style: {
          position: 'absolute',
          top: T,
          left: T
        },
        children: (0, l.jsx)(S, {
          src: f,
          size: Z,
          isTyping: I,
          status: p
        })
      })
    ]
  }),
  (0, l.jsx)(g, {
    statusCoords: b,
    status: p,
    isTyping: I
  })
]
  });
};