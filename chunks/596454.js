n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120),
    n(411104),
    n(733860),
    n(653041);
var r,
    i = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    l = n(699581),
    u = n(374470),
    c = n(442837),
    d = n(249458),
    _ = n(134432),
    E = n(695346),
    f = n(237997),
    h = n(768581),
    p = n(176354),
    I = n(506071),
    m = n(149203);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n(13585);
class S extends (r = a.PureComponent) {
    componentWillUnmount() {
        var e;
        null === (e = this.cancelLoadImage) || void 0 === e || e.call(this);
    }
    getSrc() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { src: t, emojiId: n, emojiName: r, animated: i, shouldAnimate: a, isFocused: s, isInteracting: o, size: l = 'default' } = e,
            { hover: u } = this.state;
        if (null != t) return t;
        if (null != n) {
            let e = m.kV[l];
            return h.ZP.getEmojiURL({
                id: n,
                animated: s && !0 === i && (!0 === a || u || !0 === o),
                size: e
            });
        }
        if (null != r) return p.ZP.getURL(r);
    }
    render() {
        var e, t;
        let n, r;
        let { emojiName: a, animated: s, className: l, size: u = 'default', alt: c, canSelect: d = !0, shouldAnimate: _, isFocused: E, emojiId: f, autoplay: h, isInteracting: p, ...I } = this.props,
            m = this.getSrc();
        if (null == m || '' === m)
            return (0, i.jsx)('span', {
                className: o()('emoji', 'emoji-text'),
                children: a
            });
        s &&
            (n = {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            }),
            (r = null != f && '' !== f ? { 'data-id': f } : { 'data-name': a });
        let T = {
            ...I,
            key: this.key,
            className: o()('emoji', l, { jumboable: 'jumbo' === u }),
            onError: this.onError,
            ...n,
            'data-type': 'emoji',
            ...r
        };
        return d
            ? (0, i.jsx)('img', {
                  ...T,
                  src: m,
                  alt: null !== (e = null != c ? c : a) && void 0 !== e ? e : void 0,
                  draggable: !1
              })
            : (0, i.jsx)('div', {
                  ...T,
                  role: 'img',
                  'aria-label': null !== (t = null != c ? c : a) && void 0 !== t ? t : void 0,
                  style: {
                      backgroundImage: 'url('.concat(m, ')'),
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                  }
              });
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', { hover: !1 }),
            T(this, 'key', void 0),
            T(this, 'cancelLoadImage', void 0),
            T(this, 'onError', () => {
                let e = this.getSrc();
                null != e &&
                    (this.cancelLoadImage = (0, _.po)(e, (e) => {
                        !e && ((this.key = Date.now()), this.forceUpdate());
                    }));
            }),
            T(this, 'onMouseEnter', (e) => {
                this.setState({ hover: !0 });
                let { onMouseEnter: t } = this.props;
                null != t && t(e);
            }),
            T(this, 'onMouseLeave', (e) => {
                this.setState({ hover: !1 });
                let { onMouseLeave: t } = this.props;
                null != t && t(e);
            });
    }
}
T(S, 'defaultProps', { isInteracting: !1 });
let g = (function (e) {
    if (null == window.IntersectionObserver)
        return function (t) {
            return (0, i.jsx)(e, {
                ...t,
                shouldAnimate: t.animated
            });
        };
    let t = [],
        n = [],
        r = new window.IntersectionObserver(
            (e) => {
                e.forEach((e) => {
                    let r = n.find((t) => {
                        let [n] = t;
                        return n === e.target;
                    });
                    if (null == r) return;
                    let i = r[1];
                    if (e.intersectionRatio >= 0.7) {
                        var a, s;
                        if (-1 !== t.indexOf(i)) return;
                        let n = Math.abs(e.intersectionRect.bottom - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.top));
                        n ? t.unshift(i) : t.push(i), i.forceUpdate(), n && t.length > 100 && t[100].forceUpdate();
                    } else {
                        let e = t.indexOf(i);
                        -1 !== e && (t.splice(e, 1), i.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate());
                    }
                });
            },
            { threshold: 0.7 }
        );
    function s(e) {
        let t = l.findDOMNode(e);
        if (!!(0, u.k)(t)) n.push([t, e]), r.observe(t);
    }
    function o(e) {
        let i = l.findDOMNode(e);
        r.unobserve(i);
        let a = n.findIndex((t) => {
            let [n, r] = t;
            return r === e;
        });
        if (-1 !== a) n.splice(a, 1), -1 !== (a = t.indexOf(e)) && (t.splice(a, 1), a < 100 && t.length >= 100 && t[99].forceUpdate());
    }
    return class extends a.Component {
        shouldAutoplay(e) {
            return e.animated && e.autoplay;
        }
        componentDidMount() {
            this.shouldAutoplay(this.props) && s(this);
        }
        componentDidUpdate(e) {
            let t = this.shouldAutoplay(e),
                n = this.shouldAutoplay(this.props);
            n !== t && (n ? s(this) : o(this));
        }
        componentWillUnmount() {
            this.shouldAutoplay(this.props) && o(this);
        }
        render() {
            let n = t.indexOf(this),
                { autoplay: r, allowAnimatedEmoji: a, ...s } = this.props;
            return (0, i.jsx)(d.G.Consumer, {
                children: (t) =>
                    (0, i.jsx)(e, {
                        ...s,
                        autoplay: r || !1,
                        shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
                    })
            });
        }
    };
})(S);
function A(e) {
    let t = E.Yk.useSetting(),
        n = {
            autoplay: null == e.autoplay ? t : e.autoplay,
            allowAnimatedEmoji: t
        },
        r = __OVERLAY__ ? (0, c.e7)([f.Z], () => f.Z.isInstanceFocused()) : (0, I.n)();
    return (0, i.jsx)(g, {
        ...e,
        ...n,
        isFocused: r
    });
}
