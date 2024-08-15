n.d(t, {
  SV: function() {
return r;
  }
});
var i = n(470079);
let o = (0, i.createContext)(null),
  a = {
didCatch: !1,
error: null
  };
class r extends i.Component {
  constructor(e) {
super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = a;
  }
  static getDerivedStateFromError(e) {
return {
  didCatch: !0,
  error: e
};
  }
  resetErrorBoundary() {
let {
  error: e
} = this.state;
if (null !== e) {
  for (var t, n, i = arguments.length, o = Array(i), r = 0; r < i; r++)
    o[r] = arguments[r];
  null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
    args: o,
    reason: 'imperative-api'
  }), this.setState(a);
}
  }
  componentDidCatch(e, t) {
var n, i;
null === (n = (i = this.props).onError) || void 0 === n || n.call(i, e, t);
  }
  componentDidUpdate(e, t) {
let {
  didCatch: n
} = this.state, {
  resetKeys: i
} = this.props;
if (n && null !== t.error && function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
  }(e.resetKeys, i)) {
  var o, r;
  null === (o = (r = this.props).onReset) || void 0 === o || o.call(r, {
    next: i,
    prev: e.resetKeys,
    reason: 'keys'
  }), this.setState(a);
}
  }
  render() {
let {
  children: e,
  fallbackRender: t,
  FallbackComponent: n,
  fallback: a
} = this.props, {
  didCatch: r,
  error: c
} = this.state, l = e;
if (r) {
  let e = {
    error: c,
    resetErrorBoundary: this.resetErrorBoundary
  };
  if ((0, i.isValidElement)(a))
    l = a;
  else if ('function' == typeof t)
    l = t(e);
  else if (n)
    l = (0, i.createElement)(n, e);
  else
    throw c;
}
return (0, i.createElement)(o.Provider, {
  value: {
    didCatch: r,
    error: c,
    resetErrorBoundary: this.resetErrorBoundary
  }
}, l);
  }
}