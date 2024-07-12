n.d(t, {
  N: function() {
return d;
  }
}), n(653041);
var r = n(735250),
  i = n(470079),
  a = n(711873),
  o = n.n(a),
  s = n(134432);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let u = /url\(['"](.*)['"]\)/,
  c = e => {
if (null == e || '' === e || 'none' === e)
  return null;
let t = e.match(u);
return null != t ? t[1] : e;
  };

function d(e) {
  class t extends i.Component {
componentDidUpdate(e, t) {
  if (t === this.state)
    return;
  let {
    cached: n,
    loaded: r
  } = this.state, {
    style: i
  } = this.props, a = null != i ? c(i.backgroundImage) : null;
  null == a && a !== n ? this.setState({
    loaded: !0,
    cached: a
  }) : this.cachedURLs.indexOf(a) >= 0 ? this.setState({
    loaded: !0,
    cached: a
  }) : null != a && a !== n && !0 === r && this.setState({
    loaded: !1
  }, () => this.preloadURL(a));
}
preloadURL(e) {
  this.canceller && this.canceller(), this.canceller = (0, s.po)(e, t => {
    this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
      cached: e,
      loaded: !0
    }));
    let {
      onBackgroundImageLoad: n
    } = this.props;
    n && n(t, e);
  });
}
componentWillUnmount() {
  this.canceller && this.canceller(), this.cachedURLs.length = 0;
}
render() {
  let {
    style: t,
    onBackgroundImageLoad: n,
    ...i
  } = this.props, {
    loaded: a,
    cached: o
  } = this.state;
  if (!a && null != t) {
    var s;
    t = {
      ...t,
      backgroundImage: null == (s = o) || '' === s || 'none' === s ? 'none' : 'url('.concat(s, ')')
    };
  }
  return (0, r.jsx)(e, {
    style: t,
    ...i
  });
}
constructor(e) {
  super(e), l(this, 'cachedURLs', []), l(this, 'canceller', null);
  let {
    style: t
  } = e, n = null != t ? c(t.backgroundImage) : null;
  this.cachedURLs = [n], this.state = {
    cached: n,
    loaded: !0
  };
}
  }
  return o()(t, e), t;
}