n.d(t, {
    Cy: function () {
        return N;
    },
    DY: function () {
        return D;
    },
    FG: function () {
        return r;
    },
    u: function () {
        return y;
    }
}), n(411104), n(47120);
var r, i, a, o = n(735250), s = n(470079), l = n(120356), u = n.n(l), c = n(699581), d = n(920906), _ = n(873546), E = n(374470), f = n(846519), h = n(377527), p = n(186325), m = n(607070), I = n(153850), T = n(92606);
function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
(a = r || (r = {})).PRIMARY = 'primary', a.NESTED = 'nested', a.BLACK = 'black', a.GREY = 'grey', a.BRAND = 'brand', a.GREEN = 'green', a.YELLOW = 'yellow', a.RED = 'red', a.CUSTOM = 'custom', a.PREMIUM = 'premium';
let S = Object.freeze({}), A = Object.freeze({
        top: T.tooltipTop,
        bottom: T.tooltipBottom,
        left: T.tooltipLeft,
        right: T.tooltipRight,
        center: T.tooltipCenter,
        window_center: T.tooltipCenter,
        primary: T.tooltipPrimary,
        nested: T.tooltipNested,
        black: T.tooltipBlack,
        grey: T.tooltipGrey,
        brand: T.tooltipBrand,
        green: T.tooltipGreen,
        yellow: T.tooltipYellow,
        red: T.tooltipRed,
        custom: null,
        premium: T.tooltipPremium
    }), N = e => {
        let {
                targetElementRef: t,
                align: n = 'center',
                position: r,
                color: i,
                children: a,
                onNonAccessibleClick: s,
                tooltipClassName: l,
                tooltipStyle: c,
                tooltipContentClassName: _,
                spacing: E = 8,
                animationStyle: f,
                disableTooltipPointerEvents: h = !1,
                allowOverflow: p = !1
            } = e, m = ''.concat('string' == typeof a ? a : '', ':').concat(r);
        return (0, o.jsx)(I.W5, {
            disablePointerEvents: h,
            targetRef: t,
            position: r,
            autoInvert: !0,
            align: n,
            positionKey: m,
            spacing: E,
            nudgeAlignIntoViewport: !0,
            children: e => {
                let {
                    position: t,
                    nudge: E
                } = e;
                return (0, o.jsxs)(d.animated.div, {
                    onClick: s,
                    className: u()(T.tooltip, A[null != t ? t : r], A[i], { [T.tooltipDisablePointerEvents]: h }, l),
                    style: {
                        ...f,
                        ...c
                    },
                    children: [
                        (0, o.jsx)('div', {
                            className: T.tooltipPointer,
                            style: function (e, t, n) {
                                let r = 'left' === e || 'right' === e, i = '50%', a = n;
                                return t === (r ? 'top' : 'left') ? (i = '0%', a += 16) : t === (r ? 'bottom' : 'right') && (i = '100%', a -= 20), { [r ? 'top' : 'left']: 'calc('.concat(i, ' + ').concat(a, 'px)') };
                            }(null != t ? t : r, n, E)
                        }),
                        (0, o.jsx)('div', {
                            className: u()(T.tooltipContent, { [T.tooltipContentAllowOverflow]: p }, _),
                            children: a
                        })
                    ]
                });
            }
        });
    }, v = {
        scale: 0.95,
        opacity: 0
    }, O = {
        scale: 1,
        opacity: 0
    }, R = {
        scale: 1,
        opacity: 1
    }, C = e => {
        let {
                isVisible: t,
                onAnimationRest: n,
                targetElementRef: r,
                ...i
            } = e, {reducedMotion: a} = s.useContext(p.S);
        return (0, d.useTransition)(t, {
            keys: e => e ? 'tooltip' : 'empty',
            config: h.F,
            from: a.enabled ? O : v,
            enter: R,
            leave: a.enabled ? O : v,
            onRest: n
        })((e, t) => t ? (0, o.jsx)(N, {
            animationStyle: e,
            targetElementRef: r,
            ...i
        }) : null);
    };
class y extends (i = s.Component) {
    static getDerivedStateFromProps(e, t) {
        return t.shouldShowTooltip && null == e.text ? { shouldShowTooltip: !1 } : null;
    }
    componentDidMount() {
        this.shouldShowTooltip(this.props, this.state) && this.setDomElement();
    }
    componentDidUpdate(e, t) {
        let n = this.shouldShowTooltip(this.props, this.state);
        n !== this.shouldShowTooltip(e, t) && (n ? this.setDomElement() : this.hasDomElement = !1);
    }
    setDomElement() {
        let e = c.findDOMNode(this);
        if (!(0, E.k)(e))
            throw Error('Tooltip cannot find DOM node');
        this.domElementRef.current = e, this.hasDomElement = !0, this.forceUpdate();
    }
    componentWillUnmount() {
        this.showTimeout.stop(), this.domElementRef.current = null;
    }
    render() {
        let e;
        let {
            children: t,
            text: n,
            'aria-label': r
        } = this.props;
        if (null == n)
            return t(S);
        'string' == typeof r ? e = r : 'string' == typeof n && !1 !== r && (e = n);
        let i = {
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onContextMenu: this.handleContextMenu,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
        };
        return null != e && (i['aria-label'] = e), (0, o.jsxs)(s.Fragment, {
            children: [
                t(i),
                this.renderTooltip()
            ]
        });
    }
    shouldShowTooltip(e, t) {
        return e.shouldShow && (t.shouldShowTooltip || e.forceOpen);
    }
    renderTooltip() {
        let {
                text: e,
                align: t,
                position: n,
                color: r,
                spacing: i,
                tooltipClassName: a,
                tooltipStyle: s,
                tooltipContentClassName: l,
                disableTooltipPointerEvents: u,
                onAnimationRest: c,
                allowOverflow: d,
                clickableOnMobile: E,
                hideOnClick: f
            } = this.props, h = (_.tq || _.Em) && !0 === E && f, p = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement, m = null;
        return m = e instanceof Function ? p ? e() : null : e, (0, o.jsx)(C, {
            disableTooltipPointerEvents: !1 !== u && !h || !0 === u,
            targetElementRef: this.domElementRef,
            tooltipStyle: s,
            tooltipClassName: a,
            tooltipContentClassName: l,
            align: t,
            position: n,
            color: r,
            spacing: i,
            isVisible: p,
            onAnimationRest: c,
            onNonAccessibleClick: h ? this.handleClick : void 0,
            allowOverflow: d,
            children: m
        });
    }
    show() {
        let {
            delay: e,
            overflowOnly: t
        } = this.props;
        if (t) {
            let e = c.findDOMNode(this);
            if (null == e || (0, E.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)
                return;
        }
        null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0);
    }
    hide() {
        this.showTimeout.stop(), this.toggleShow(!1);
    }
    toggleShow(e) {
        if (this.state.shouldShowTooltip !== e) {
            var t, n, r, i;
            e ? null === (t = (n = this.props).onTooltipShow) || void 0 === t || t.call(n) : null === (r = (i = this.props).onTooltipHide) || void 0 === r || r.call(i), c.flushSync(() => {
                this.setState({ shouldShowTooltip: e });
            });
        }
    }
    constructor(...e) {
        super(...e), g(this, 'showTimeout', new f.V7()), g(this, 'domElementRef', s.createRef()), g(this, 'hasDomElement', !1), g(this, 'state', { shouldShowTooltip: !1 }), g(this, 'handleMouseEnter', () => {
            !((_.tq || _.Em) && !0 === this.props.clickableOnMobile) && this.show();
        }), g(this, 'handleMouseLeave', () => {
            !((_.tq || _.Em) && !0 === this.props.clickableOnMobile) && this.hide();
        }), g(this, 'handleFocus', () => {
            m.Z.keyboardModeEnabled && this.show();
        }), g(this, 'handleBlur', () => {
            this.hide();
        }), g(this, 'handleClick', () => {
            let e = this.hasDomElement;
            e && this.props.hideOnClick ? this.hide() : !e && (_.tq || _.Em) && !0 === this.props.clickableOnMobile && this.show();
        }), g(this, 'handleContextMenu', () => {
            this.hide();
        });
    }
}
g(y, 'Colors', r), g(y, 'defaultProps', {
    hideOnClick: !0,
    position: 'top',
    color: 'primary',
    forceOpen: !1,
    spacing: 8,
    shouldShow: !0,
    allowOverflow: !1,
    overflowOnly: !1
});
let D = e => {
    let {
        children: t,
        className: n,
        element: r = 'div',
        ...i
    } = e;
    return (0, o.jsx)(y, {
        ...i,
        children: e => s.createElement(r, null != n ? {
            ...e,
            className: n
        } : e, t)
    });
};
