"use strict";
n.d(t, {
  Og: function() {
    return I
  },
  Xv: function() {
    return N
  },
  li: function() {
    return T
  },
  mh: function() {
    return f
  },
  px: function() {
    return h
  },
  wL: function() {
    return S
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(512722),
  l = n.n(a),
  u = n(699581),
  _ = n(251625),
  d = n(872801),
  c = n(871860);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = c.layerContainer;
class T extends r.Component {
  componentWillUnmount() {
    this.state.layerContainerElement = null
  }
  render() {
    let {
      layerContext: e,
      children: t
    } = this.props, {
      layerContainerElement: n
    } = this.state;
    return (0, i.jsx)(e.Provider, {
      value: this.getContextValue(n),
      children: t
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      layerContainerElement: null
    }), E(this, "setLayerContainerElement", e => {
      this.setState({
        layerContainerElement: e
      })
    }), E(this, "getContextValue", (0, _.oH)(e => [e, this.setLayerContainerElement]))
  }
}
let h = e => {
  let {
    layerContext: t,
    className: n
  } = e, [, s] = r.useContext(t);
  return (0, i.jsx)("div", {
    className: o()(I, n),
    ref: s
  })
};

function S(e) {
  let t = (0, d.Z)(e, c.layerContainer);
  return l()(null != t, "Unexpected missing parent container"), t
}
let f = e => {
  let {
    layerContext: t,
    children: n
  } = e;
  return (0, i.jsx)(t.Consumer, {
    children: e => (function(e, t) {
      let [n] = e;
      return null == n ? null : u.createPortal(r.Children.only(t), n)
    })(e, n)
  })
};

function N(e) {
  let t = r.createContext([null, () => {}]),
    n = {
      LayerProvider: e => (0, i.jsx)(T, {
        layerContext: t,
        ...e
      }),
      LayerContainer: e => (0, i.jsx)(h, {
        layerContext: t,
        ...e
      }),
      Layer: e => (0, i.jsx)(f, {
        layerContext: t,
        ...e
      }),
      layerContext: t
    };
  return n.LayerProvider.displayName = "".concat(e, "LayerProvider"), n.LayerContainer.displayName = "".concat(e, "LayerContainer"), n.Layer.displayName = "".concat(e, "Layer"), n
}