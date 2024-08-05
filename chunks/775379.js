t.d(n, {
  S: function() {
return r;
  }
}), t(47120);
var l = t(470079);
class r extends l.PureComponent {
  static getDerivedStateFromError(e) {
return {
  error: e
};
  }
  componentDidCatch(e, n) {
console.error('ErrorBoundary caught an error', e, n);
  }
  render() {
return null != this.state.error ? this.props.fallback : this.props.children;
  }
  constructor(...e) {
var n, t, l;
super(...e), n = this, l = {
  error: null
}, (t = 'state') in n ? Object.defineProperty(n, t, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[t] = l;
  }
}