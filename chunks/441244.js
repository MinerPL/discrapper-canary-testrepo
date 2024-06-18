"use strict";
n(47120), n(411104);
var i = n(735250),
  r = n(470079),
  s = n(902704),
  o = n(250919);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function l(e) {
  var t, n;
  return null !== (n = null !== (t = e.displayName) && void 0 !== t ? t : e.name) && void 0 !== n ? n : "<Unknown>"
}
t.Z = function(e, t, n) {
  return null != n && n.forwardRef ? function(e, t) {
    return n => {
      var _;
      let d = "FluxContainer(".concat(l(n), ")");
      class c extends(_ = r.Component) {
        componentDidMount() {
          this.listener.attach(d)
        }
        componentWillUnmount() {
          this.listener.detach(), this.memoizedGetStateFromStores.clear()
        }
        render() {
          let {
            forwardedConnectStoresRef: e,
            childProps: t
          } = this.props, r = this.memoizedGetStateFromStores(t);
          return (0, i.jsx)(n, {
            ref: e,
            ...t,
            ...r
          })
        }
        constructor(...n) {
          super(...n), a(this, "memoizedGetStateFromStores", u(t)), a(this, "listener", new o.F(e, () => {
            let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
            if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, s.Z)(this.memoizedGetStateFromStores(this.props.childProps), e)))) this.forceUpdate()
          }))
        }
      }
      a(c, "displayName", d);
      let E = r.forwardRef((e, t) => (0, i.jsx)(c, {
        childProps: e,
        forwardedConnectStoresRef: t
      }));
      return E.displayName = "ForwardRef(".concat(d, ")"), E
    }
  }(e, t) : function(e, t) {
    return n => {
      var _;
      let d = "FluxContainer(".concat(l(n), ")");
      class c extends(_ = r.Component) {
        componentDidMount() {
          this.listener.attach(d)
        }
        componentWillUnmount() {
          this.listener.detach(), this.memoizedGetStateFromStores.clear()
        }
        render() {
          let e = this.memoizedGetStateFromStores(this.props);
          return (0, i.jsx)(n, {
            ...this.props,
            ...e
          })
        }
        constructor(...n) {
          super(...n), a(this, "memoizedGetStateFromStores", u(t)), a(this, "listener", new o.F(e, () => {
            let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
            if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, s.Z)(this.memoizedGetStateFromStores(this.props), e)))) this.forceUpdate()
          }))
        }
      }
      return a(c, "displayName", d), c
    }
  }(e, t)
};

function u(e) {
  let t = null,
    n = null,
    i = e => null != t && null != n && (0, s.Z)(t, e) ? n : null != t && null != n && (0, s.Z)(t, e) ? (t = e, n) : null,
    r = r => {
      let s = i(r);
      return null != s ? s : n = e(t = r)
    };
  return r.getCachedResult = i, r.clear = () => {
    t = null, n = null
  }, r
}