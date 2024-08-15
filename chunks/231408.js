n(47120), n(312677);
var e = n(8048),
  o = n(647425);
let i = new Map(),
  u = r => {
let {
  canvas: t,
  canvasId: n,
  animationId: u,
  assetUrl: c,
  assetData: a,
  isVisible: f,
  shouldAnimate: s
} = r, l = new e.default({
  canvas: t,
  id: u,
  assetUrl: c,
  assetData: a,
  isVisible: f,
  shouldAnimate: s,
  onInitialDraw: () => {
    self.postMessage({
      type: o.u.FIRST_DRAW,
      canvasId: n
    });
  },
  onError: () => {
    self.postMessage({
      type: o.u.ERROR,
      canvasId: n
    });
  }
});
i.set(n, l);
  },
  c = r => {
var t;
let {
  canvasId: n
} = r;
null === (t = i.get(n)) || void 0 === t || t.drop(), i.delete(n);
  },
  a = r => {
var t;
let {
  canvasId: n,
  isVisible: e
} = r;
null === (t = i.get(n)) || void 0 === t || t.setVisibility(e);
  },
  f = r => {
var t;
let {
  canvasId: n,
  shouldAnimate: e,
  nextFrame: o
} = r;
null === (t = i.get(n)) || void 0 === t || t.setState(e, o);
  };
self.addEventListener('message', r => {
  let {
data: t
  } = r;
  switch (t.type) {
case o.u.INITIALIZE:
  u(t);
  break;
case o.u.DROP:
  c(t);
  break;
case o.u.VISIBILITY_CHANGE:
  a(t);
  break;
case o.u.STATE_CHANGE:
  f(t);
  }
});