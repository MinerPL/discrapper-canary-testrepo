s(47120);
var n = s(735250), i = s(470079), o = s(120356), l = s.n(o), a = s(217986), r = s(481060), h = s(317175), d = s(285952), u = s(259580), c = s(689938), p = s(993430), m = s(972667), C = s(331651);
function f(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
class g extends i.PureComponent {
    render() {
        let {
                countryCode: e,
                phone: t,
                open: s
            } = this.state, {
                className: i,
                submitting: o
            } = this.props, [, a] = e.split('+');
        return (0, n.jsxs)(d.Z, {
            className: l()(p.phoneField, m.elevationLow, i),
            align: d.Z.Align.CENTER,
            grow: 0,
            children: [
                (0, n.jsxs)(r.Button, {
                    size: r.ButtonSizes.SMALL,
                    className: p.countryButton,
                    color: r.ButtonColors.PRIMARY,
                    innerClassName: p.countryButtonInner,
                    onClick: this.handleTogglePopout,
                    children: [
                        (0, n.jsxs)(d.Z, {
                            className: l()(p.countryCodeContainer, C.marginReset),
                            justify: d.Z.Justify.CENTER,
                            children: [
                                (0, n.jsx)('div', {
                                    className: p.plusSign,
                                    children: '+'
                                }),
                                (0, n.jsx)('div', {
                                    className: p.countryCode,
                                    children: a
                                })
                            ]
                        }),
                        (0, n.jsx)(u.Z, {
                            foreground: p.phoneFieldExpand,
                            expanded: s,
                            width: 16,
                            height: 16
                        })
                    ]
                }),
                (0, n.jsx)('input', {
                    'aria-label': c.Z.Messages.PHONE_VERIFICATION_PHONE_LABEL,
                    className: p.inputField,
                    value: t,
                    onChange: this.handleChange,
                    onKeyPress: this.handleKeyPress,
                    autoFocus: !0
                }),
                (0, n.jsx)(r.Button, {
                    className: p.sendButton,
                    size: r.ButtonSizes.SMALL,
                    submitting: o,
                    onClick: this.handleSubmit,
                    children: c.Z.Messages.SEND
                }),
                s ? (0, n.jsx)(h.Z, { onClick: this.handleClick }) : null
            ]
        });
    }
    closePopout() {
        this.state.open && this.setState({ open: !1 });
    }
    constructor(e) {
        super(e), f(this, 'handleChange', e => {
            this.closePopout(), this.setState({ phone: e.currentTarget.value });
        }), f(this, 'handleKeyPress', e => {
            this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit());
        }), f(this, 'handleSubmit', () => {
            let {
                    onSubmit: e,
                    submitting: t
                } = this.props, {
                    countryCode: s,
                    phone: n
                } = this.state;
            !t && (null == e || e(''.concat(s).concat(n)));
        }), f(this, 'handleTogglePopout', () => {
            this.setState({ open: !this.state.open });
        }), f(this, 'handleClick', e => {
            let [t, s] = e.code.split(' ');
            this.setState({
                open: !1,
                countryCode: t,
                phone: null != s ? s : ''
            });
        });
        let [t, s] = a.Z.find(e => 'United States' === e.name).phoneCountryCode.split(' ');
        this.state = {
            countryCode: t,
            phone: null != s ? s : '',
            open: !1
        };
    }
}
t.Z = g;
