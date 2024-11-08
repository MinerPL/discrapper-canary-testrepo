n.d(t, {
    Cy: function () {
        return A;
    },
    DY: function () {
        return L;
    },
    FG: function () {
        return r;
    },
    u: function () {
        return D;
    }
}),
    n(411104),
    n(47120);
var r,
    i,
    a,
    s = n(200651),
    o = n(192379),
    l = n(120356),
    u = n.n(l),
    c = n(995295),
    d = n(100621),
    f = n(873546),
    _ = n(374470),
    h = n(846519),
    p = n(377527),
    m = n(186325),
    g = n(481060),
    E = n(607070),
    v = n(314910),
    I = n(185349);
function S(e, t, n) {
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
((a = r || (r = {})).PRIMARY = 'primary'), (a.NESTED = 'nested'), (a.BLACK = 'black'), (a.GREY = 'grey'), (a.BRAND = 'brand'), (a.GREEN = 'green'), (a.YELLOW = 'yellow'), (a.RED = 'red'), (a.PREMIUM = 'premium');
let T = Object.freeze({}),
    b = Object.freeze({
        top: I.tooltipTop,
        bottom: I.tooltipBottom,
        left: I.tooltipLeft,
        right: I.tooltipRight,
        center: I.tooltipCenter,
        window_center: I.tooltipCenter,
        primary: I.tooltipPrimary,
        nested: I.tooltipNested,
        black: I.tooltipBlack,
        grey: I.tooltipGrey,
        brand: I.tooltipBrand,
        green: I.tooltipGreen,
        yellow: I.tooltipYellow,
        red: I.tooltipRed,
        premium: I.tooltipPremium
    });
function y(e, t, n) {
    let r = 'left' === e || 'right' === e,
        i = '50%',
        a = n;
    return t === (r ? 'top' : 'left') ? ((i = '0%'), (a += 16)) : t === (r ? 'bottom' : 'right') && ((i = '100%'), (a -= 20)), { [r ? 'top' : 'left']: 'calc('.concat(i, ' + ').concat(a, 'px)') };
}
let A = (e) => {
        let { targetElementRef: t, align: n = 'center', position: r, color: i, children: a, onNonAccessibleClick: o, tooltipClassName: l, tooltipStyle: c, tooltipContentClassName: f, spacing: _ = 8, animationStyle: h, disableTooltipPointerEvents: p = !1, allowOverflow: m = !1, tooltipPointerClassName: g } = e,
            E = ''.concat('string' == typeof a ? a : '', ':').concat(r);
        return (0, s.jsx)(v.W5, {
            disablePointerEvents: p,
            targetRef: t,
            position: r,
            autoInvert: !0,
            align: n,
            positionKey: E,
            spacing: _,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: t, nudge: _ } = e;
                return (0, s.jsxs)(d.animated.div, {
                    onClick: o,
                    className: u()(I.tooltip, b[null != t ? t : r], b[i], { [I.tooltipDisablePointerEvents]: p }, l),
                    style: {
                        ...h,
                        ...c
                    },
                    children: [
                        (0, s.jsx)('div', {
                            className: u()(I.tooltipPointer, I.tooltipPointerBg, g),
                            style: y(null != t ? t : r, n, _)
                        }),
                        (0, s.jsx)('div', {
                            className: u()(I.tooltipPointer, g),
                            style: y(null != t ? t : r, n, _)
                        }),
                        (0, s.jsx)('div', {
                            className: u()(I.tooltipContent, { [I.tooltipContentAllowOverflow]: m }, f),
                            children: a
                        })
                    ]
                });
            }
        });
    },
    N = {
        scale: 0.95,
        opacity: 0
    },
    C = {
        scale: 1,
        opacity: 0
    },
    R = {
        scale: 1,
        opacity: 1
    },
    O = (e) => {
        let { isVisible: t, onAnimationRest: n, targetElementRef: r, ...i } = e,
            { reducedMotion: a } = o.useContext(m.S);
        return (0, g.useTransition)(
            t,
            {
                keys: (e) => (e ? 'tooltip' : 'empty'),
                config: p.F,
                from: a.enabled ? C : N,
                enter: R,
                leave: a.enabled ? C : N,
                onRest: n
            },
            'animate-always'
        )((e, t) =>
            t
                ? (0, s.jsx)(A, {
                      animationStyle: e,
                      targetElementRef: r,
                      ...i
                  })
                : null
        );
    };
class D extends (i = o.Component) {
    static getDerivedStateFromProps(e, t) {
        return t.shouldShowTooltip && null == e.text ? { shouldShowTooltip: !1 } : null;
    }
    componentDidMount() {
        this.shouldShowTooltip(this.props, this.state) && this.setDomElement();
    }
    componentDidUpdate(e, t) {
        let n = this.shouldShowTooltip(this.props, this.state);
        n !== this.shouldShowTooltip(e, t) && (n ? this.setDomElement() : (this.hasDomElement = !1));
    }
    setDomElement() {
        let e = c.findDOMNode(this);
        if (!(0, _.k)(e)) throw Error('Tooltip cannot find DOM node');
        (this.domElementRef.current = e), (this.hasDomElement = !0), this.forceUpdate();
    }
    componentWillUnmount() {
        this.showTimeout.stop(), (this.domElementRef.current = null);
    }
    render() {
        let e;
        let { children: t, text: n, 'aria-label': r } = this.props;
        if (null == n) return t(T);
        'string' == typeof r ? (e = r) : 'string' == typeof n && !1 !== r && (e = n);
        let i = {
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onContextMenu: this.handleContextMenu,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
        };
        return (
            null != e && (i['aria-label'] = e),
            (0, s.jsxs)(o.Fragment, {
                children: [t(i), this.renderTooltip()]
            })
        );
    }
    shouldShowTooltip(e, t) {
        return e.shouldShow && (t.shouldShowTooltip || e.forceOpen);
    }
    renderTooltip() {
        let { text: e, align: t, position: n, color: r, spacing: i, tooltipClassName: a, tooltipStyle: o, tooltipContentClassName: l, disableTooltipPointerEvents: u, onAnimationRest: c, allowOverflow: d, clickableOnMobile: _, hideOnClick: h, tooltipPointerClassName: p } = this.props,
            m = (f.tq || f.Em) && !0 === _ && h,
            g = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            E = null;
        return (
            (E = e instanceof Function ? (g ? e() : null) : e),
            (0, s.jsx)(O, {
                disableTooltipPointerEvents: (!1 !== u && !m) || !0 === u,
                targetElementRef: this.domElementRef,
                tooltipStyle: o,
                tooltipClassName: a,
                tooltipContentClassName: l,
                tooltipPointerClassName: p,
                align: t,
                position: n,
                color: r,
                spacing: i,
                isVisible: g,
                onAnimationRest: c,
                onNonAccessibleClick: m ? this.handleClick : void 0,
                allowOverflow: d,
                children: E
            })
        );
    }
    show() {
        let { delay: e, overflowOnly: t } = this.props;
        if (t) {
            let e = c.findDOMNode(this);
            if (null == e || ((0, _.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)) return;
        }
        null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0);
    }
    hide() {
        this.showTimeout.stop(), this.toggleShow(!1);
    }
    toggleShow(e) {
        if (this.state.shouldShowTooltip !== e) {
            var t, n, r, i;
            e ? null === (t = (n = this.props).onTooltipShow) || void 0 === t || t.call(n) : null === (r = (i = this.props).onTooltipHide) || void 0 === r || r.call(i),
                c.flushSync(() => {
                    this.setState({ shouldShowTooltip: e });
                });
        }
    }
    constructor(...e) {
        super(...e),
            S(this, 'showTimeout', new h.V7()),
            S(this, 'domElementRef', o.createRef()),
            S(this, 'hasDomElement', !1),
            S(this, 'state', { shouldShowTooltip: !1 }),
            S(this, 'handleMouseEnter', () => {
                !((f.tq || f.Em) && !0 === this.props.clickableOnMobile) && this.show();
            }),
            S(this, 'handleMouseLeave', () => {
                !((f.tq || f.Em) && !0 === this.props.clickableOnMobile) && this.hide();
            }),
            S(this, 'handleFocus', () => {
                E.Z.keyboardModeEnabled && this.show();
            }),
            S(this, 'handleBlur', () => {
                this.hide();
            }),
            S(this, 'handleClick', () => {
                let e = this.hasDomElement;
                e && this.props.hideOnClick ? this.hide() : !e && (f.tq || f.Em) && !0 === this.props.clickableOnMobile && this.show();
            }),
            S(this, 'handleContextMenu', () => {
                this.hide();
            });
    }
}
S(D, 'Colors', r),
    S(D, 'defaultProps', {
        hideOnClick: !0,
        position: 'top',
        color: 'primary',
        forceOpen: !1,
        spacing: 8,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1
    });
let L = (e) => {
    let { children: t, className: n, element: r = 'div', ...i } = e;
    return (0, s.jsx)(D, {
        ...i,
        children: (e) =>
            o.createElement(
                r,
                null != n
                    ? {
                          ...e,
                          className: n
                      }
                    : e,
                t
            )
    });
};
