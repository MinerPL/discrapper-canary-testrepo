"use strict";
n.d(t, {
  N: function() {
    return d
  }
}), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(711873),
  o = n.n(s),
  a = n(134432);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = /url\(['"](.*)['"]\)/,
  _ = e => {
    if (null == e || "" === e || "none" === e) return null;
    let t = e.match(u);
    return null != t ? t[1] : e
  };

function d(e) {
  class t extends r.Component {
    componentDidUpdate(e, t) {
      if (t === this.state) return;
      let {
        cached: n,
        loaded: i
      } = this.state, {
        style: r
      } = this.props, s = null != r ? _(r.backgroundImage) : null;
      null == s && s !== n ? this.setState({
        loaded: !0,
        cached: s
      }) : this.cachedURLs.indexOf(s) >= 0 ? this.setState({
        loaded: !0,
        cached: s
      }) : null != s && s !== n && !0 === i && this.setState({
        loaded: !1
      }, () => this.preloadURL(s))
    }
    preloadURL(e) {
      this.canceller && this.canceller(), this.canceller = (0, a.po)(e, t => {
        this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
          cached: e,
          loaded: !0
        }));
        let {
          onBackgroundImageLoad: n
        } = this.props;
        n && n(t, e)
      })
    }
    componentWillUnmount() {
      this.canceller && this.canceller(), this.cachedURLs.length = 0
    }
    render() {
      let {
        style: t,
        onBackgroundImageLoad: n,
        ...r
      } = this.props, {
        loaded: s,
        cached: o
      } = this.state;
      if (!s && null != t) {
        var a;
        t = {
          ...t,
          backgroundImage: null == (a = o) || "" === a || "none" === a ? "none" : "url(".concat(a, ")")
        }
      }
      return (0, i.jsx)(e, {
        style: t,
        ...r
      })
    }
    constructor(e) {
      super(e), l(this, "cachedURLs", []), l(this, "canceller", null);
      let {
        style: t
      } = e, n = null != t ? _(t.backgroundImage) : null;
      this.cachedURLs = [n], this.state = {
        cached: n,
        loaded: !0
      }
    }
  }
  return o()(t, e), t
}