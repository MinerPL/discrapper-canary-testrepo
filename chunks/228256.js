"use strict";
n.r(t), n.d(t, {
  LayerClassName: function() {
    return h
  },
  LayerProvider: function() {
    return g
  },
  LayerContainer: function() {
    return m
  },
  getParentLayerContainer: function() {
    return E
  },
  Layer: function() {
    return p
  },
  createLayer: function() {
    return v
  }
}), n("222007");
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("627445"),
  l = n.n(o),
  u = n("817736"),
  d = n.n(u),
  c = n("117362"),
  f = n("411093"),
  _ = n("260921");
let h = _.layerContainer;
class g extends s.Component {
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
    super(...e), this.state = {
      layerContainerElement: null
    }, this.setLayerContainerElement = e => {
      this.setState({
        layerContainerElement: e
      })
    }, this.getContextValue = (0, c.cachedFunction)(e => [e, this.setLayerContainerElement])
  }
}
let m = e => {
  let {
    layerContext: t,
    className: n
  } = e, [, r] = s.useContext(t);
  return (0, i.jsx)("div", {
    className: a(h, n),
    ref: r
  })
};

function E(e) {
  let t = (0, f.default)(e, _.layerContainer);
  return l(null != t, "Unexpected missing parent container"), t
}
let p = e => {
  let {
    layerContext: t,
    children: n
  } = e;
  return (0, i.jsx)(t.Consumer, {
    children: e => (function(e, t) {
      let [n] = e;
      return null == n ? null : d.createPortal(s.Children.only(t), n)
    })(e, n)
  })
};

function v(e) {
  let t = s.createContext([null, () => {}]),
    n = {
      LayerProvider: e => (0, i.jsx)(g, {
        layerContext: t,
        ...e
      }),
      LayerContainer: e => (0, i.jsx)(m, {
        layerContext: t,
        ...e
      }),
      Layer: e => (0, i.jsx)(p, {
        layerContext: t,
        ...e
      }),
      layerContext: t
    };
  return n.LayerProvider.displayName = "".concat(e, "LayerProvider"), n.LayerContainer.displayName = "".concat(e, "LayerContainer"), n.Layer.displayName = "".concat(e, "Layer"), n
}