n.d(t, {
  E: function() {
return A;
  }
}), n(47120);
var r, i = n(735250),
  a = n(470079),
  s = n(120356),
  o = n.n(s),
  l = n(780384),
  u = n(481060),
  c = n(410030),
  d = n(446108),
  _ = n(956664),
  E = n(921948),
  f = n(823023),
  h = n(981631),
  p = n(217702),
  m = n(689938),
  I = n(235202),
  T = n(167969),
  g = n(557256);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class A extends(r = a.PureComponent) {
  render() {
let e;
let {
  className: t,
  imageClassName: n,
  readyState: r,
  src: a,
  placeholder: s,
  placeholderVersion: l,
  alt: c,
  width: E,
  height: T,
  maxWidth: g = E,
  maxHeight: S = T,
  minWidth: A,
  minHeight: O,
  mediaLayoutType: R,
  limitResponsiveWidth: C = !0,
  accessory: y,
  zoomable: D,
  original: L,
  children: b,
  renderAccessory: M,
  onClick: P,
  tabIndex: U,
  dataSafeSrc: w,
  useFullWidth: x = !1,
  ...G
} = this.props;
if (1 === E && 1 === T)
  return null;
let k = (0, _.Tj)({
    width: E,
    height: T,
    maxWidth: g,
    maxHeight: S,
    minWidth: A,
    minHeight: O
  }),
  B = 0 !== k.width ? k.width / k.height : 1;
'' !== a && r !== h.zo9.ERROR ? e = b({
  src: a,
  size: k,
  alt: c,
  className: n,
  mediaLayoutType: R
}) : r !== h.zo9.LOADING && (e = (0, i.jsx)(N, {
  size: k,
  mediaLayoutType: R,
  alt: c
})), e = (0, i.jsx)(f.N, {
  readyState: r,
  aspectRatio: B,
  placeholder: s,
  placeholderVersion: l,
  placeholderStyle: v(k, R),
  children: e
});
let F = null != M ? M() : null;
return F = null != F ? F : y, (0, i.jsx)(u.FocusRing, {
  ringTarget: this._containerRef,
  focusTarget: this._clickableRef,
  children: (0, i.jsxs)('div', {
    className: o()(I.imageWrapper, {
      [I.imageZoom]: D,
      [I.imageWrapperBackground]: r !== h.zo9.READY,
      [I.clickable]: null != P
    }, t),
    style: function(e, t, n, r) {
      return r === p.hV.MOSAIC ? {
        display: 'block',
        maxHeight: 'inherit',
        margin: 'auto',
        width: !n && e.width <= p.mT ? e.width : '100%',
        height: '100%'
      } : r === p.hV.RESPONSIVE ? {
        maxWidth: t ? e.width : void 0,
        width: '100%',
        aspectRatio: ''.concat(e.width, ' / ').concat(e.height)
      } : e;
    }(k, C, x, R),
    ...G,
    children: [
      null != L && (0, i.jsx)('a', {
        tabIndex: -1,
        onClick: P,
        'aria-hidden': !0,
        className: I.originalLink,
        href: L,
        ref: this._containerRef,
        'data-role': 'img',
        'data-safe-src': null != w ? w : a
      }),
      null != P ? (0, i.jsx)(u.Clickable, {
        className: I.clickableWrapper,
        tabIndex: null != U ? U : 0,
        onClick: P,
        'aria-label': null != c ? c : m.Z.Messages.IMAGE,
        'aria-describedby': d.r5,
        innerRef: this._clickableRef,
        focusProps: {
          enabled: !1
        },
        children: e
      }) : e,
      null != F ? (0, i.jsx)('div', {
        className: I.imageAccessory,
        children: F
      }) : null
    ]
  })
});
  }
  constructor(...e) {
super(...e), S(this, '_containerRef', a.createRef()), S(this, '_clickableRef', a.createRef());
  }
}

function N(e) {
  let {
size: t,
mediaLayoutType: n,
alt: r
  } = e, a = (0, c.ZP)();
  return (0, i.jsx)('div', {
className: I.imageErrorWrapper,
style: function(e, t) {
  switch (t) {
    case p.hV.MOSAIC:
      return {
        width: '100%',
          height: '100%',
          aspectRatio: ''.concat(e.width, ' / ').concat(e.height),
          display: 'flex',
          maxHeight: 'inherit'
      };
    case p.hV.RESPONSIVE:
      return {
        ...O(e),
          display: 'flex'
      };
    default:
      return e;
  }
}(t, n),
children: (0, i.jsx)('img', {
  src: (0, l.ap)(a) ? g : T,
  className: I.imageError,
  alt: null != r ? r : m.Z.Messages.IMAGE
})
  });
}
S(A, 'defaultProps', {
  readyState: h.zo9.READY,
  zoomable: !0,
  children: e => {
let {
  src: t,
  size: n,
  alt: r,
  className: a,
  mediaLayoutType: s
} = e;
return (0, i.jsx)('img', {
  className: null != a ? a : void 0,
  alt: null != r ? r : m.Z.Messages.IMAGE,
  src: t,
  style: v(n, s)
});
  },
  minWidth: 0,
  minHeight: 0
});

function v(e, t) {
  switch (t) {
case p.hV.MOSAIC:
  return {
    display: 'block',
      objectFit: 'cover',
      minWidth: '100%',
      minHeight: '100%',
      maxWidth: 1 === (0, E.Z)() ? 'calc(100% + 1px)' : '100%'
  };
case p.hV.RESPONSIVE:
  return O(e);
default:
  return e;
  }
}

function O(e) {
  let {
width: t,
height: n
  } = e;
  return {
maxWidth: t,
maxHeight: n,
width: '100%',
display: 'block',
aspectRatio: ''.concat(t, ' / ').concat(n)
  };
}