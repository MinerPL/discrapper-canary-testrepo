"use strict";
n.d(t, {
  Z: function() {
    return O
  }
}), n(47120), n(411104), n(733860), n(653041);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(699581),
  u = n(374470),
  _ = n(442837),
  d = n(134432),
  c = n(695346),
  E = n(237997),
  I = n(278297),
  T = n(768581),
  h = n(176354),
  S = n(506071),
  f = n(149203);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class A extends(i = s.PureComponent) {
  componentWillUnmount() {
    var e;
    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
  }
  getSrc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
      {
        src: t,
        emojiId: n,
        emojiName: i,
        animated: r,
        shouldAnimate: s,
        isFocused: o,
        isInteracting: a,
        size: l = "default"
      } = e,
      {
        hover: u
      } = this.state;
    if (null != t) return t;
    if (null != n) {
      let e = f.kV[l];
      return T.ZP.getEmojiURL({
        id: n,
        animated: o && !0 === r && (!0 === s || u || !0 === a),
        size: e
      })
    }
    if (null != i) return h.ZP.getURL(i)
  }
  render() {
    var e;
    let t;
    let {
      emojiName: n,
      animated: i,
      className: o,
      size: l = "default",
      alt: u,
      shouldAnimate: _,
      isFocused: d,
      emojiId: c,
      autoplay: E,
      isInteracting: I,
      ...T
    } = this.props, h = this.getSrc();
    return null == h || "" === h ? (0, r.jsx)("span", {
      className: a()("emoji", "emoji-text"),
      children: n
    }) : (i && (t = {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }), (0, s.createElement)("img", {
      ...T,
      key: this.key,
      src: h,
      alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
      draggable: !1,
      ...t,
      className: a()("emoji", o, {
        jumboable: "jumbo" === l
      }),
      onError: this.onError,
      "data-type": "emoji",
      ...null != c && "" !== c ? {
        "data-id": c
      } : {
        "data-name": n
      }
    }))
  }
  constructor(...e) {
    super(...e), N(this, "state", {
      hover: !1
    }), N(this, "key", void 0), N(this, "cancelLoadImage", void 0), N(this, "onError", () => {
      let e = this.getSrc();
      null != e && (this.cancelLoadImage = (0, d.po)(e, e => {
        !e && (this.key = Date.now(), this.forceUpdate())
      }))
    }), N(this, "onMouseEnter", e => {
      this.setState({
        hover: !0
      });
      let {
        onMouseEnter: t
      } = this.props;
      null != t && t(e)
    }), N(this, "onMouseLeave", e => {
      this.setState({
        hover: !1
      });
      let {
        onMouseLeave: t
      } = this.props;
      null != t && t(e)
    })
  }
}
N(A, "defaultProps", {
  isInteracting: !1
});
let m = function(e) {
  if (null == window.IntersectionObserver) return function(t) {
    return (0, r.jsx)(e, {
      ...t,
      shouldAnimate: t.animated
    })
  };
  let t = [],
    n = [],
    i = new window.IntersectionObserver(e => {
      e.forEach(e => {
        let i = n.find(t => {
          let [n] = t;
          return n === e.target
        });
        if (null == i) return;
        let r = i[1];
        if (e.intersectionRatio >= .7) {
          var s, o;
          if (-1 !== t.indexOf(r)) return;
          let n = Math.abs(e.intersectionRect.bottom - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (o = e.rootBounds) || void 0 === o ? void 0 : o.top));
          n ? t.unshift(r) : t.push(r), r.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
        } else {
          let e = t.indexOf(r); - 1 !== e && (t.splice(e, 1), r.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
        }
      })
    }, {
      threshold: .7
    });

  function o(e) {
    let t = l.findDOMNode(e);
    if (!!(0, u.k)(t)) n.push([t, e]), i.observe(t)
  }

  function a(e) {
    let r = l.findDOMNode(e);
    i.unobserve(r);
    let s = n.findIndex(t => {
      let [n, i] = t;
      return i === e
    });
    if (-1 !== s) n.splice(s, 1), -1 !== (s = t.indexOf(e)) && (t.splice(s, 1), s < 100 && t.length >= 100 && t[99].forceUpdate())
  }
  return class extends s.Component {
    shouldAutoplay(e) {
      return e.animated && e.autoplay
    }
    componentDidMount() {
      this.shouldAutoplay(this.props) && o(this)
    }
    componentDidUpdate(e) {
      let t = this.shouldAutoplay(e),
        n = this.shouldAutoplay(this.props);
      n !== t && (n ? o(this) : a(this))
    }
    componentWillUnmount() {
      this.shouldAutoplay(this.props) && a(this)
    }
    render() {
      let n = t.indexOf(this),
        {
          autoplay: i,
          allowAnimatedEmoji: s,
          ...o
        } = this.props;
      return (0, r.jsx)(I.G.Consumer, {
        children: t => (0, r.jsx)(e, {
          ...o,
          autoplay: i || !1,
          shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && s
        })
      })
    }
  }
}(A);

function O(e) {
  let t = c.Yk.useSetting(),
    n = {
      autoplay: null == e.autoplay ? t : e.autoplay,
      allowAnimatedEmoji: t
    },
    i = __OVERLAY__ ? (0, _.e7)([E.Z], () => E.Z.isInstanceFocused()) : (0, S.n)();
  return (0, r.jsx)(m, {
    ...e,
    ...n,
    isFocused: i
  })
}