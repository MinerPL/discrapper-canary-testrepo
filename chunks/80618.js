n(47120);
var r, i = n(735250), a = n(470079), o = n(120356), s = n.n(o), l = n(481060), u = n(540026), c = n(689938), d = n(566324);
function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class E extends (r = a.PureComponent) {
    componentDidMount() {
        this.updateMediaBar();
    }
    componentDidUpdate(e) {
        (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar();
    }
    updateMediaBar() {
        let {
                muted: e,
                value: t,
                maxValue: n
            } = this.props, r = this._mediaBar.current;
        null != r && (e ? r.setGrabber(0) : r.setGrabber(t / n));
    }
    render() {
        let {
                iconClassName: e,
                className: t,
                sliderWrapperClassName: n,
                sliderClassName: r,
                currentWindow: a,
                muted: o,
                minValue: _,
                maxValue: E,
                value: f,
                onVolumeShow: h,
                onVolumeHide: p
            } = this.props, {
                hovered: m,
                focused: I,
                dragging: T
            } = this.state, g = l.VoiceNormalIcon;
        return o || f === _ ? g = l.VoiceXIcon : f < E / 2 && (g = l.VoiceLowIcon), (0, i.jsxs)('div', {
            className: s()(t, d.container),
            onMouseEnter: () => {
                clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), null == h || h();
            },
            onMouseLeave: () => {
                clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => {
                    this.setState({ hovered: !1 }), null == p || p();
                }, 150);
            },
            onFocus: () => this.setState({ focused: !0 }),
            onBlur: () => this.setState({ focused: !1 }),
            onKeyDown: this.handleKeyDown,
            children: [
                (0, i.jsx)('div', {
                    className: s()(d.volumeButtonSlider, n, { [d.sliderVisible]: m || I || T }),
                    onMouseEnter: () => {
                        clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 });
                    },
                    onMouseLeave: () => {
                        clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), 150);
                    },
                    children: (0, i.jsx)(u.Z, {
                        sliderClassName: r,
                        type: u.Z.Types.VOLUME,
                        value: f / E,
                        onDrag: this.handleValueChange,
                        onDragStart: this.handleDragStart,
                        onDragEnd: this.handleDragEnd,
                        currentWindow: a,
                        ref: this._mediaBar
                    })
                }),
                (0, i.jsx)(l.Button, {
                    className: d.volumeButton,
                    'aria-label': c.Z.Messages.CONTROL_VOLUME,
                    size: l.Button.Sizes.NONE,
                    look: l.Button.Looks.BLANK,
                    onClick: this.handleToggleMute,
                    children: (0, i.jsx)(g, { className: e })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), _(this, '_mediaBar', a.createRef()), _(this, '_hoverTimeout', void 0), _(this, 'state', {
            hovered: !1,
            focused: !1,
            dragging: !1
        }), _(this, 'handleValueChange', e => {
            let {
                maxValue: t,
                onValueChange: n
            } = this.props;
            null == n || n(e * t);
        }), _(this, 'handleToggleMute', () => {
            let {onToggleMute: e} = this.props;
            null == e || e();
        }), _(this, 'handleKeyDown', e => {
            let {
                    minValue: t,
                    value: n,
                    maxValue: r,
                    onValueChange: i
                } = this.props, a = 0.05 * (r - t);
            switch (e.key) {
            case 'ArrowUp':
                e.stopPropagation(), e.preventDefault(), null == i || i(Math.min(r, n + a));
                break;
            case 'ArrowDown':
                e.stopPropagation(), e.preventDefault(), null == i || i(Math.max(t, n - a));
            }
        }), _(this, 'handleDragStart', () => {
            this.setState({ dragging: !0 });
        }), _(this, 'handleDragEnd', () => {
            this.setState({ dragging: !1 });
        }), _(this, 'blur', () => {
            this.setState({ focused: !1 });
        });
    }
}
_(E, 'defaultProps', {
    minValue: 0,
    maxValue: 100,
    handleSize: 16
}), t.Z = E;
