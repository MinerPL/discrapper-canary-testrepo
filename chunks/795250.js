let r;
n.d(t, {
  Bq: function() {
return ew;
  },
  IB: function() {
return eE;
  },
  NE: function() {
return ex;
  },
  RP: function() {
return eb;
  },
  Sv: function() {
return eM;
  },
  U4: function() {
return ey;
  },
  Xj: function() {
return eR;
  },
  aV: function() {
return eU;
  },
  tN: function() {
return ec;
  }
});
var i = n(53786),
  a = n(519313),
  s = n(588016),
  o = n(993330),
  l = n(119380),
  u = n(230874),
  c = n(643586),
  d = n(676730),
  _ = n(113404),
  E = n(837692),
  f = n(848560),
  h = n(397865),
  p = n(652695),
  m = n(108760),
  I = n(658311),
  T = n(814878),
  g = n(166305),
  S = n(860223),
  A = n(313573),
  N = n(901670),
  v = n(96730),
  O = n(917050),
  R = n(510022),
  C = n(423793),
  y = n(517156),
  D = n(587818),
  L = n(864407),
  b = n(637290),
  M = n(854451),
  P = n(275051),
  U = n(749118),
  w = n(561161),
  x = n(674303),
  G = n(419301),
  k = n(470079),
  B = n(882932),
  F = n(182823),
  V = n(616073),
  H = n(706682),
  Z = n(612001),
  Y = n(699581),
  j = n(230012),
  W = n(297821);
let K = {
top: 'top',
bottom: 'top',
left: 'left',
right: 'left'
  },
  z = {
top: 'bottom',
bottom: 'top',
left: 'right',
right: 'left'
  },
  q = {
top: 'left',
left: 'top'
  },
  Q = {
top: 'height',
left: 'width'
  },
  X = {
width: 'totalWidth',
height: 'totalHeight'
  },
  $ = {},
  J = 'undefined' != typeof document && window.visualViewport;

function ee(e) {
  let t = 0,
n = 0,
r = 0,
i = 0,
a = 0,
s = 0,
o = {};
  if ('BODY' === e.tagName) {
var l, u;
let a = document.documentElement;
r = a.clientWidth, i = a.clientHeight, t = null !== (l = null == J ? void 0 : J.width) && void 0 !== l ? l : r, n = null !== (u = null == J ? void 0 : J.height) && void 0 !== u ? u : i, o.top = a.scrollTop || e.scrollTop, o.left = a.scrollLeft || e.scrollLeft;
  } else
({
  width: t,
  height: n,
  top: a,
  left: s
} = ea(e), o.top = e.scrollTop, o.left = e.scrollLeft, r = t, i = n);
  return {
width: t,
height: n,
totalWidth: r,
totalHeight: i,
scroll: o,
top: a,
left: s
  };
}

function et(e, t, n, r, i, a) {
  let s = i.scroll[e],
o = r[Q[e]],
l = t - a - s,
u = t + a - s + n;
  return l < 0 ? -l : u > o ? Math.max(o - u, -l) : 0;
}

function en(e) {
  if ($[e])
return $[e];
  let [t, n] = e.split(' '), r = K[t] || 'right', i = q[r];
  !K[n] && (n = 'center');
  let a = Q[r],
s = Q[i];
  return $[e] = {
placement: t,
crossPlacement: n,
axis: r,
crossAxis: i,
size: a,
crossSize: s
  }, $[e];
}

function er(e, t, n, r, i, a, s, o, l, u) {
  let {
placement: c,
crossPlacement: d,
axis: _,
crossAxis: E,
size: f,
crossSize: h
  } = r, p = {};
  p[E] = e[E], 'center' === d ? p[E] += (e[h] - n[h]) / 2 : d !== E && (p[E] += e[h] - n[h]), p[E] += a;
  let m = e[E] - n[h] + l + u,
I = e[E] + e[h] - l - u;
  if (p[E] = (0, B.uZ)(p[E], m, I), c === _) {
let n = o ? s[f] : t[X[f]];
p[z[_]] = Math.floor(n - e[_] + i);
  } else
p[_] = Math.floor(e[_] + e[f] + i);
  return p;
}

function ei(e, t, n, r, i, a) {
  let {
placement: s,
axis: o,
size: l
  } = a;
  return s === o ? Math.max(0, n[o] - e[o] - e.scroll[o] + t[o] - r[o] - r[z[o]] - i) : Math.max(0, e[l] + e[o] + e.scroll[o] - t[o] - n[o] - n[l] - r[o] - r[z[o]] - i);
}

function ea(e) {
  let {
top: t,
left: n,
width: r,
height: i
  } = e.getBoundingClientRect(), {
scrollTop: a,
scrollLeft: s,
clientTop: o,
clientLeft: l
  } = document.documentElement;
  return {
top: t + a - o,
left: n + s - l,
width: r,
height: i
  };
}

function es(e, t) {
  let n, r = window.getComputedStyle(e);
  if ('fixed' === r.position) {
let {
  top: t,
  left: r,
  width: i,
  height: a
} = e.getBoundingClientRect();
n = {
  top: t,
  left: r,
  width: i,
  height: a
};
  } else {
n = ea(e);
let r = ea(t),
  i = window.getComputedStyle(t);
r.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop, r.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= r.top, n.left -= r.left;
  }
  return n.top -= parseInt(r.marginTop, 10) || 0, n.left -= parseInt(r.marginLeft, 10) || 0, n;
}

function eo(e) {
  let t = window.getComputedStyle(e);
  return 'none' !== t.transform || /transform|perspective/.test(t.willChange) || 'none' !== t.filter || 'paint' === t.contain || 'backdropFilter' in t && 'none' !== t.backdropFilter || 'WebkitBackdropFilter' in t && 'none' !== t.WebkitBackdropFilter;
}
let el = new WeakMap(),
  eu = 'undefined' != typeof document && window.visualViewport;

function ec(e) {
  let {
direction: t
  } = (0, V.bU)(), {
arrowSize: n = 0,
targetRef: r,
overlayRef: i,
scrollRef: a = i,
placement: s = 'bottom',
containerPadding: o = 12,
shouldFlip: l = !0,
boundaryElement: u = 'undefined' != typeof document ? document.body : null,
offset: c = 0,
crossOffset: d = 0,
shouldUpdatePosition: _ = !0,
isOpen: E = !0,
onClose: f,
maxHeight: h,
arrowBoundaryOffset: p = 0
  } = e, [m, I] = (0, k.useState)({
position: {},
arrowOffsetLeft: void 0,
arrowOffsetTop: void 0,
maxHeight: void 0,
placement: void 0
  }), T = [
_,
s,
i.current,
r.current,
a.current,
o,
l,
u,
c,
d,
E,
t,
h,
p,
n
  ], g = (0, k.useCallback)(() => {
if (!1 === _ || !E || !i.current || !r.current || !a.current || !u)
  return;
let e = function(e) {
  var t, n;
  let r, {
      placement: i,
      targetNode: a,
      overlayNode: s,
      scrollNode: o,
      padding: l,
      shouldFlip: u,
      boundaryElement: c,
      offset: d,
      crossOffset: _,
      maxHeight: E,
      arrowSize: f = 0,
      arrowBoundaryOffset: h = 0
    } = e,
    p = s instanceof HTMLElement ? function(e) {
      let t = e.offsetParent;
      if (t && t === document.body && 'static' === window.getComputedStyle(t).position && !eo(t) && (t = document.documentElement), null == t)
        for (t = e.parentElement; t && !eo(t);)
          t = t.parentElement;
      return t || document.documentElement;
    }(s) : document.documentElement,
    m = p === document.documentElement,
    I = window.getComputedStyle(p).position,
    T = m ? ea(a) : es(a, p);
  if (!m) {
    let {
      marginTop: e,
      marginLeft: t
    } = window.getComputedStyle(a);
    T.top += parseInt(e, 10) || 0, T.left += parseInt(t, 10) || 0;
  }
  let g = ea(s);
  let S = (t = s, {
    top: parseInt((r = window.getComputedStyle(t)).marginTop, 10) || 0,
    bottom: parseInt(r.marginBottom, 10) || 0,
    left: parseInt(r.marginLeft, 10) || 0,
    right: parseInt(r.marginRight, 10) || 0
  });
  return g.width += S.left + S.right, g.height += S.top + S.bottom,
    function(e, t, n, r, i, a, s, o, l, u, c, d, _, E, f, h) {
      var p, m, I, T, g, S;
      let A = en(e),
        {
          size: N,
          crossAxis: v,
          crossSize: O,
          placement: R,
          crossPlacement: C
        } = A,
        y = er(t, o, n, A, c, d, u, _, f, h),
        D = c,
        L = ei(o, u, t, i, a + c, A);
      if (s && r[N] > L) {
        let e = en(`${ z[R] } ${ C }`),
          r = er(t, o, n, e, c, d, u, _, f, h);
        ei(o, u, t, i, a + c, e) > L && (A = e, y = r, D = c);
      }
      let b = et(v, y[v], n[O], o, l, a);
      y[v] += b;
      let M = (p = y, m = o, I = u, T = t, g = i, S = a, null != p.top ? Math.max(0, m.height + m.top + m.scroll.top - (I.top + p.top) - (g.top + g.bottom + S)) : Math.max(0, T.top + I.top - (m.top + m.scroll.top) - (g.top + g.bottom + S)));
      E && E < M && (M = E), n.height = Math.min(n.height, M), b = et(v, (y = er(t, o, n, A, D, d, u, _, f, h))[v], n[O], o, l, a), y[v] += b;
      let P = {},
        U = t[v] + 0.5 * t[O] - n[v],
        w = f / 2 + h,
        x = n[O] - f / 2 - h,
        G = t[v] - n[v] + f / 2,
        k = t[v] + t[O] - n[v] - f / 2,
        F = (0, B.uZ)(U, G, k);
      return P[v] = (0, B.uZ)(F, w, x), {
        position: y,
        maxHeight: M,
        arrowOffsetLeft: P.left,
        arrowOffsetTop: P.top,
        placement: A.placement
      };
    }(i, T, g, {
      top: (n = o).scrollTop,
      left: n.scrollLeft,
      width: n.scrollWidth,
      height: n.scrollHeight
    }, S, l, u, ee(c), ee(p), 'BODY' === c.tagName ? ea(p) : es(p, c), d, _, !!I && 'static' !== I, E, f, h);
}({
  placement: function(e, t) {
    return 'rtl' === t ? e.replace('start', 'right').replace('end', 'left') : e.replace('start', 'left').replace('end', 'right');
  }(s, t),
  overlayNode: i.current,
  targetNode: r.current,
  scrollNode: a.current,
  padding: o,
  shouldFlip: l,
  boundaryElement: u,
  offset: c,
  crossOffset: d,
  maxHeight: h,
  arrowSize: n,
  arrowBoundaryOffset: p
});
Object.keys(e.position).forEach(t => i.current.style[t] = e.position[t] + 'px'), i.current.style.maxHeight = null != e.maxHeight ? e.maxHeight + 'px' : void 0, I(e);
  }, T);
  (0, F.bt)(g, T),
  function(e) {
(0, F.bt)(() => (window.addEventListener('resize', e, !1), () => {
  window.removeEventListener('resize', e, !1);
}), [e]);
  }(g), (0, F.yU)({
ref: i,
onResize: g
  });
  let S = (0, k.useRef)(!1);
  (0, F.bt)(() => {
let e;
let t = () => {
  S.current = !0, clearTimeout(e), e = setTimeout(() => {
    S.current = !1;
  }, 500), g();
};
return null == eu || eu.addEventListener('resize', t), null == eu || eu.addEventListener('scroll', t), () => {
  null == eu || eu.removeEventListener('resize', t), null == eu || eu.removeEventListener('scroll', t);
};
  }, [g]);
  let A = (0, k.useCallback)(() => {
!S.current && f();
  }, [
f,
S
  ]);
  return ! function(e) {
let {
  triggerRef: t,
  isOpen: n,
  onClose: r
} = e;
(0, k.useEffect)(() => {
  if (!n || null === r)
    return;
  let e = e => {
    let n = e.target;
    if (!t.current || n instanceof Node && !n.contains(t.current))
      return;
    let i = r || el.get(t.current);
    i && i();
  };
  return window.addEventListener('scroll', e, !0), () => {
    window.removeEventListener('scroll', e, !0);
  };
}, [
  n,
  r,
  t
]);
  }({
triggerRef: r,
isOpen: E,
onClose: f && A
  }), {
overlayProps: {
  style: {
    position: 'absolute',
    zIndex: 100000,
    ...m.position,
    maxHeight: m.maxHeight
  }
},
placement: m.placement,
arrowProps: {
  'aria-hidden': 'true',
  role: 'presentation',
  style: {
    left: m.arrowOffsetLeft,
    top: m.arrowOffsetTop
  }
},
updatePosition: g
  };
}
let ed = [];

function e_(e, t) {
  let {
onClose: n,
shouldCloseOnBlur: r,
isOpen: i,
isDismissable: a = !1,
isKeyboardDismissDisabled: s = !1,
shouldCloseOnInteractOutside: o
  } = e;
  (0, k.useEffect)(() => (i && ed.push(t), () => {
let e = ed.indexOf(t);
e >= 0 && ed.splice(e, 1);
  }), [
i,
t
  ]);
  let l = () => {
ed[ed.length - 1] === t && n && n();
  };
  (0, Z.Fc)({
ref: t,
onInteractOutside: a && i ? e => {
  (!o || o(e.target)) && (ed[ed.length - 1] === t && (e.stopPropagation(), e.preventDefault()), l());
} : null,
onInteractOutsideStart: e => {
  (!o || o(e.target)) && ed[ed.length - 1] === t && (e.stopPropagation(), e.preventDefault());
}
  });
  let {
focusWithinProps: u
  } = (0, Z.L_)({
isDisabled: !r,
onBlurWithin: e => {
  !(!e.relatedTarget || (0, H.cW)(e.relatedTarget)) && (!o || o(e.relatedTarget)) && n();
}
  });
  return {
overlayProps: {
  onKeyDown: e => {
    'Escape' === e.key && !s && (e.stopPropagation(), e.preventDefault(), l());
  },
  ...u
},
underlayProps: {
  onPointerDown: e => {
    e.target === e.currentTarget && e.preventDefault();
  }
}
  };
}

function eE(e, t, n) {
  let r, {
  type: i
} = e,
{
  isOpen: a
} = t;
  (0, k.useEffect)(() => {
n && n.current && el.set(n.current, t.close);
  });
  'menu' === i ? r = !0 : 'listbox' === i && (r = 'listbox');
  let s = (0, F.Me)();
  return {
triggerProps: {
  'aria-haspopup': r,
  'aria-expanded': a,
  'aria-controls': a ? s : null,
  onPress: t.toggle
},
overlayProps: {
  id: s
}
  };
}
let ef = 'undefined' != typeof document && window.visualViewport,
  eh = new Set([
'checkbox',
'radio',
'range',
'color',
'file',
'image',
'button',
'submit',
'reset'
  ]),
  ep = 0;

function em(e = {}) {
  let {
isDisabled: t
  } = e;
  (0, F.bt)(() => {
if (!t)
  return 1 == ++ep && (r = (0, F.gn)() ? function() {
    let e, t;
    let n = null,
      r = () => {
        if (n)
          return;
        let e = window.pageXOffset,
          t = window.pageYOffset;
        n = (0, F.tS)(eT(window, 'scroll', () => {
          window.scrollTo(0, 0);
        }), eI(document.documentElement, 'paddingRight', `${ window.innerWidth - document.documentElement.clientWidth }px`), eI(document.documentElement, 'overflow', 'hidden'), eI(document.body, 'marginTop', `-${ t }px`), () => {
          window.scrollTo(e, t);
        }), window.scrollTo(0, 0);
      },
      i = (0, F.tS)(eT(document, 'touchstart', n => {
        ((e = (0, F.rP)(n.target, !0)) !== document.documentElement || e !== document.body) && e instanceof HTMLElement && 'auto' === window.getComputedStyle(e).overscrollBehavior && (t = eI(e, 'overscrollBehavior', 'contain'));
      }, {
        passive: !1,
        capture: !0
      }), eT(document, 'touchmove', t => {
        if (!e || e === document.documentElement || e === document.body) {
          t.preventDefault();
          return;
        }
        e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault();
      }, {
        passive: !1,
        capture: !0
      }), eT(document, 'touchend', e => {
        let n = e.target;
        eS(n) && n !== document.activeElement && (e.preventDefault(), r(), n.style.transform = 'translateY(-2000px)', n.focus(), requestAnimationFrame(() => {
          n.style.transform = '';
        })), t && t();
      }, {
        passive: !1,
        capture: !0
      }), eT(document, 'focus', e => {
        let t = e.target;
        eS(t) && (r(), t.style.transform = 'translateY(-2000px)', requestAnimationFrame(() => {
          t.style.transform = '', ef && (ef.height < window.innerHeight ? requestAnimationFrame(() => {
            eg(t);
          }) : ef.addEventListener('resize', () => eg(t), {
            once: !0
          }));
        }));
      }, !0));
    return () => {
      null == t || t(), null == n || n(), i();
    };
  }() : function() {
    return (0, F.tS)(eI(document.documentElement, 'paddingRight', `${ window.innerWidth - document.documentElement.clientWidth }px`), eI(document.documentElement, 'overflow', 'hidden'));
  }()), () => {
    0 == --ep && r();
  };
  }, [t]);
}

function eI(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
e.style[t] = r;
  };
}

function eT(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
e.removeEventListener(t, n, r);
  };
}

function eg(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t;) {
let t = (0, F.rP)(e);
if (t !== document.documentElement && t !== document.body && t !== e) {
  let n = t.getBoundingClientRect().top,
    r = e.getBoundingClientRect().top;
  r > n + e.clientHeight && (t.scrollTop += r - n);
}
e = t.parentElement;
  }
}

function eS(e) {
  return e instanceof HTMLInputElement && !eh.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
let eA = k.createContext(null);

function eN(e) {
  let {
children: t
  } = e, n = (0, k.useContext)(eA), [r, i] = (0, k.useState)(0), a = (0, k.useMemo)(() => ({
parent: n,
modalCount: r,
addModal() {
  i(e => e + 1), n && n.addModal();
},
removeModal() {
  i(e => e - 1), n && n.removeModal();
}
  }), [
n,
r
  ]);
  return k.createElement(eA.Provider, {
value: a
  }, t);
}

function ev(e) {
  let t;
  let {
modalProviderProps: n
  } = {
modalProviderProps: {
  'aria-hidden': !!(t = (0, k.useContext)(eA)) && t.modalCount > 0 || null
}
  };
  return k.createElement('div', {
'data-overlay-container': !0,
...e,
...n
  });
}

function eO(e) {
  return k.createElement(eN, null, k.createElement(ev, e));
}

function eR(e) {
  let t = (0, j.Av)(),
{
  portalContainer: n = t ? null : document.body,
  ...r
} = e;
  if (k.useEffect(() => {
  if (null == n ? void 0 : n.closest('[data-overlay-container]'))
    throw Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
}, [n]), !n)
return null;
  let i = k.createElement(eO, r);
  return Y.createPortal(i, n);
}
var eC = {};

function ey(e) {
  var t;
  let {
onDismiss: n,
...r
  } = e;
  let i = (0, V.qb)((t = eC) && t.__esModule ? t.default : t, '@react-aria/overlays'),
a = (0, F.bE)(r, i.format('dismiss'));
  return k.createElement(W.T, null, k.createElement('button', {
...a,
tabIndex: -1,
onClick: () => {
  n && n();
},
style: {
  width: 1,
  height: 1
}
  }));
}
eC = {
  'ar-AE': i.Z,
  'bg-BG': a.Z,
  'cs-CZ': s.Z,
  'da-DK': o.Z,
  'de-DE': l.Z,
  'el-GR': u.Z,
  'en-US': c.Z,
  'es-ES': d.Z,
  'et-EE': _.Z,
  'fi-FI': E.Z,
  'fr-FR': f.Z,
  'he-IL': h.Z,
  'hr-HR': p.Z,
  'hu-HU': m.Z,
  'it-IT': I.Z,
  'ja-JP': T.Z,
  'ko-KR': g.Z,
  'lt-LT': S.Z,
  'lv-LV': A.Z,
  'nb-NO': N.Z,
  'nl-NL': v.Z,
  'pl-PL': O.Z,
  'pt-BR': R.Z,
  'pt-PT': C.Z,
  'ro-RO': y.Z,
  'ru-RU': D.Z,
  'sk-SK': L.Z,
  'sl-SI': b.Z,
  'sr-SP': M.Z,
  'sv-SE': P.Z,
  'tr-TR': U.Z,
  'uk-UA': w.Z,
  'zh-CN': x.Z,
  'zh-TW': G.Z
};
let eD = new WeakMap(),
  eL = [];

function eb(e, t = document.body) {
  let n = new Set(e),
r = new Set(),
i = e => {
  for (let t of e.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]'))
    n.add(t);
  let t = e => {
      if (n.has(e) || r.has(e.parentElement) && 'row' !== e.parentElement.getAttribute('role'))
        return NodeFilter.FILTER_REJECT;
      for (let t of n)
        if (e.contains(t))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
    i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: t
    }),
    s = t(e);
  if (s === NodeFilter.FILTER_ACCEPT && a(e), s !== NodeFilter.FILTER_REJECT) {
    let e = i.nextNode();
    for (; null != e;)
      a(e), e = i.nextNode();
  }
},
a = e => {
  var t;
  let n = null !== (t = eD.get(e)) && void 0 !== t ? t : 0;
  ('true' !== e.getAttribute('aria-hidden') || 0 !== n) && (0 === n && e.setAttribute('aria-hidden', 'true'), r.add(e), eD.set(e, n + 1));
};
  eL.length && eL[eL.length - 1].disconnect(), i(t);
  let s = new MutationObserver(e => {
for (let t of e)
  if ('childList' === t.type && 0 !== t.addedNodes.length && ![
      ...n,
      ...r
    ].some(e => e.contains(t.target))) {
    for (let e of t.removedNodes)
      e instanceof Element && (n.delete(e), r.delete(e));
    for (let e of t.addedNodes)
      (e instanceof HTMLElement || e instanceof SVGElement) && ('true' === e.dataset.liveAnnouncer || 'true' === e.dataset.reactAriaTopLayer) ? n.add(e) : e instanceof Element && i(e);
  }
  });
  s.observe(t, {
childList: !0,
subtree: !0
  });
  let o = {
observe() {
  s.observe(t, {
    childList: !0,
    subtree: !0
  });
},
disconnect() {
  s.disconnect();
}
  };
  return eL.push(o), () => {
for (let e of (s.disconnect(), r)) {
  let t = eD.get(e);
  1 === t ? (e.removeAttribute('aria-hidden'), eD.delete(e)) : eD.set(e, t - 1);
}
o === eL[eL.length - 1] ? (eL.pop(), eL.length && eL[eL.length - 1].observe()) : eL.splice(eL.indexOf(o), 1);
  };
}

function eM(e, t) {
  let {
triggerRef: n,
popoverRef: r,
isNonModal: i,
isKeyboardDismissDisabled: a,
shouldCloseOnInteractOutside: s,
...o
  } = e, {
overlayProps: l,
underlayProps: u
  } = e_({
isOpen: t.isOpen,
onClose: t.close,
shouldCloseOnBlur: !0,
isDismissable: !i,
isKeyboardDismissDisabled: a,
shouldCloseOnInteractOutside: s
  }, r), {
overlayProps: c,
arrowProps: d,
placement: _
  } = ec({
...o,
targetRef: n,
overlayRef: r,
isOpen: t.isOpen,
onClose: i ? t.close : null
  });
  return em({
isDisabled: i || !t.isOpen
  }), (0, F.bt)(() => {
if (t.isOpen && !i && r.current)
  return eb([r.current]);
  }, [
i,
t.isOpen,
r
  ]), {
popoverProps: (0, F.dG)(l, c),
arrowProps: d,
underlayProps: u,
placement: _
  };
}
let eP = k.createContext(null);

function eU(e) {
  let t = (0, j.Av)(),
{
  portalContainer: n = t ? null : document.body,
  isExiting: r
} = e,
[i, a] = (0, k.useState)(!1),
s = (0, k.useMemo)(() => ({
  contain: i,
  setContain: a
}), [
  i,
  a
]);
  if (!n)
return null;
  let o = e.children;
  return !e.disableFocusManagement && (o = k.createElement(H.MT, {
restoreFocus: !0,
contain: i && !r
  }, o)), o = k.createElement(eP.Provider, {
value: s
  }, k.createElement(Z.mk, null, o)), Y.createPortal(o, n);
}

function ew() {
  let e = (0, k.useContext)(eP),
t = null == e ? void 0 : e.setContain;
  (0, F.bt)(() => {
null == t || t(!0);
  }, [t]);
}

function ex(e, t, n) {
  let {
overlayProps: r,
underlayProps: i
  } = e_({
...e,
isOpen: t.isOpen,
onClose: t.close
  }, n);
  return em({
isDisabled: !t.isOpen
  }), ew(), (0, k.useEffect)(() => {
if (t.isOpen)
  return eb([n.current]);
  }, [
t.isOpen,
n
  ]), {
modalProps: (0, F.dG)(r),
underlayProps: i
  };
}