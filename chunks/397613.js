"use strict";
r.r(t), r.d(t, {
  ErrorBoundary: function() {
    return l
  }
}), r("70102"), r("222007");
var n = r("884691");
let i = (0, n.createContext)(null),
  s = {
    didCatch: !1,
    error: null
  };
class l extends n.Component {
  static getDerivedStateFromError(e) {
    return {
      didCatch: !0,
      error: e
    }
  }
  resetErrorBoundary() {
    let {
      error: e
    } = this.state;
    if (null !== e) {
      for (var t, r, n = arguments.length, i = Array(n), l = 0; l < n; l++) i[l] = arguments[l];
      null === (t = (r = this.props).onReset) || void 0 === t || t.call(r, {
        args: i,
        reason: "imperative-api"
      }), this.setState(s)
    }
  }
  componentDidCatch(e, t) {
    var r, n;
    null === (r = (n = this.props).onError) || void 0 === r || r.call(n, e, t)
  }
  componentDidUpdate(e, t) {
    let {
      didCatch: r
    } = this.state, {
      resetKeys: n
    } = this.props;
    if (r && null !== t.error && function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]))
      }(e.resetKeys, n)) {
      var i, l;
      null === (i = (l = this.props).onReset) || void 0 === i || i.call(l, {
        next: n,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(s)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: t,
      FallbackComponent: r,
      fallback: s
    } = this.props, {
      didCatch: l,
      error: a
    } = this.state, u = e;
    if (l) {
      let e = {
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ((0, n.isValidElement)(s)) u = s;
      else if ("function" == typeof t) u = t(e);
      else if (r) u = (0, n.createElement)(r, e);
      else throw a
    }
    return (0, n.createElement)(i.Provider, {
      value: {
        didCatch: l,
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, u)
  }
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = s
  }
}