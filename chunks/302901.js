n.d(t, {
  Og: function() {
return f;
  },
  Xv: function() {
return T;
  },
  li: function() {
return h;
  },
  mh: function() {
return I;
  },
  px: function() {
return p;
  },
  wL: function() {
return m;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(512722),
  l = n.n(o),
  u = n(699581),
  c = n(251625),
  d = n(872801),
  _ = n(65551);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let f = _.layerContainer;
class h extends i.Component {
  componentWillUnmount() {
this.state.layerContainerElement = null;
  }
  render() {
let {
  layerContext: e,
  children: t
} = this.props, {
  layerContainerElement: n
} = this.state;
return (0, r.jsx)(e.Provider, {
  value: this.getContextValue(n),
  children: t
});
  }
  constructor(...e) {
super(...e), E(this, 'state', {
  layerContainerElement: null
}), E(this, 'setLayerContainerElement', e => {
  this.setState({
    layerContainerElement: e
  });
}), E(this, 'getContextValue', (0, c.oH)(e => [
  e,
  this.setLayerContainerElement
]));
  }
}
let p = e => {
  let {
layerContext: t,
className: n
  } = e, [, a] = i.useContext(t);
  return (0, r.jsx)('div', {
className: s()(f, n),
ref: a
  });
};

function m(e) {
  let t = (0, d.Z)(e, _.layerContainer);
  return l()(null != t, 'Unexpected missing parent container'), t;
}
let I = e => {
  let {
layerContext: t,
children: n
  } = e;
  return (0, r.jsx)(t.Consumer, {
children: e => function(e, t) {
  let [n] = e;
  return null == n ? null : u.createPortal(i.Children.only(t), n);
}(e, n)
  });
};

function T(e) {
  let t = i.createContext([
  null,
  () => {}
]),
n = {
  LayerProvider: e => (0, r.jsx)(h, {
    layerContext: t,
    ...e
  }),
  LayerContainer: e => (0, r.jsx)(p, {
    layerContext: t,
    ...e
  }),
  Layer: e => (0, r.jsx)(I, {
    layerContext: t,
    ...e
  }),
  layerContext: t
};
  return n.LayerProvider.displayName = ''.concat(e, 'LayerProvider'), n.LayerContainer.displayName = ''.concat(e, 'LayerContainer'), n.Layer.displayName = ''.concat(e, 'Layer'), n;
}