r.d(t, {
  SV: function() {
return o;
  }
});
var a = r(470079);
let n = (0, a.createContext)(null),
  s = {
didCatch: !1,
error: null
  };
class o extends a.Component {
  constructor(e) {
super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = s;
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
  for (var t, r, a = arguments.length, n = Array(a), o = 0; o < a; o++)
    n[o] = arguments[o];
  null === (t = (r = this.props).onReset) || void 0 === t || t.call(r, {
    args: n,
    reason: 'imperative-api'
  }), this.setState(s);
}
  }
  componentDidCatch(e, t) {
var r, a;
null === (r = (a = this.props).onError) || void 0 === r || r.call(a, e, t);
  }
  componentDidUpdate(e, t) {
let {
  didCatch: r
} = this.state, {
  resetKeys: a
} = this.props;
if (r && null !== t.error && function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]));
  }(e.resetKeys, a)) {
  var n, o;
  null === (n = (o = this.props).onReset) || void 0 === n || n.call(o, {
    next: a,
    prev: e.resetKeys,
    reason: 'keys'
  }), this.setState(s);
}
  }
  render() {
let {
  children: e,
  fallbackRender: t,
  FallbackComponent: r,
  fallback: s
} = this.props, {
  didCatch: o,
  error: i
} = this.state, c = e;
if (o) {
  let e = {
    error: i,
    resetErrorBoundary: this.resetErrorBoundary
  };
  if ((0, a.isValidElement)(s))
    c = s;
  else if ('function' == typeof t)
    c = t(e);
  else if (r)
    c = (0, a.createElement)(r, e);
  else
    throw i;
}
return (0, a.createElement)(n.Provider, {
  value: {
    didCatch: o,
    error: i,
    resetErrorBoundary: this.resetErrorBoundary
  }
}, c);
  }
}