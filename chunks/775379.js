l.d(n, {
  S: function() {
return r;
  }
}), l(47120);
var t = l(470079);
class r extends t.PureComponent {
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
var n, l, t;
super(...e), n = this, t = {
  error: null
}, (l = 'state') in n ? Object.defineProperty(n, l, {
  value: t,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = t;
  }
}