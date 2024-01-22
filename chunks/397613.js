"use strict";
n.r(t), n.d(t, {
  ErrorBoundary: function() {
    return l
  }
}), n("70102"), n("222007");
var r = n("884691");
let a = (0, r.createContext)(null),
  i = {
    didCatch: !1,
    error: null
  };
class l extends r.Component {
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
      for (var t, n, r = arguments.length, a = Array(r), l = 0; l < r; l++) a[l] = arguments[l];
      null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
        args: a,
        reason: "imperative-api"
      }), this.setState(i)
    }
  }
  componentDidCatch(e, t) {
    var n, r;
    null === (n = (r = this.props).onError) || void 0 === n || n.call(r, e, t)
  }
  componentDidUpdate(e, t) {
    let {
      didCatch: n
    } = this.state, {
      resetKeys: r
    } = this.props;
    if (n && null !== t.error && function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
      }(e.resetKeys, r)) {
      var a, l;
      null === (a = (l = this.props).onReset) || void 0 === a || a.call(l, {
        next: r,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(i)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: t,
      FallbackComponent: n,
      fallback: i
    } = this.props, {
      didCatch: l,
      error: o
    } = this.state, u = e;
    if (l) {
      let e = {
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ((0, r.isValidElement)(i)) u = i;
      else if ("function" == typeof t) u = t(e);
      else if (n) u = (0, r.createElement)(n, e);
      else throw o
    }
    return (0, r.createElement)(a.Provider, {
      value: {
        didCatch: l,
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, u)
  }
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = i
  }
}