r.d(t, {
  SV: function() {
return s;
  }
});
var n = r(470079);
let o = (0, n.createContext)(null),
  i = {
didCatch: !1,
error: null
  };
class s extends n.Component {
  constructor(e) {
super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = i;
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
  for (var t, r, n = arguments.length, o = Array(n), s = 0; s < n; s++)
    o[s] = arguments[s];
  null === (t = (r = this.props).onReset) || void 0 === t || t.call(r, {
    args: o,
    reason: 'imperative-api'
  }), this.setState(i);
}
  }
  componentDidCatch(e, t) {
var r, n;
null === (r = (n = this.props).onError) || void 0 === r || r.call(n, e, t);
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
    return e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]));
  }(e.resetKeys, n)) {
  var o, s;
  null === (o = (s = this.props).onReset) || void 0 === o || o.call(s, {
    next: n,
    prev: e.resetKeys,
    reason: 'keys'
  }), this.setState(i);
}
  }
  render() {
let {
  children: e,
  fallbackRender: t,
  FallbackComponent: r,
  fallback: i
} = this.props, {
  didCatch: s,
  error: a
} = this.state, c = e;
if (s) {
  let e = {
    error: a,
    resetErrorBoundary: this.resetErrorBoundary
  };
  if ((0, n.isValidElement)(i))
    c = i;
  else if ('function' == typeof t)
    c = t(e);
  else if (r)
    c = (0, n.createElement)(r, e);
  else
    throw a;
}
return (0, n.createElement)(o.Provider, {
  value: {
    didCatch: s,
    error: a,
    resetErrorBoundary: this.resetErrorBoundary
  }
}, c);
  }
}