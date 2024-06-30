n(47120);
var i, s = n(735250), a = n(470079), r = n(120356), l = n.n(r), o = n(873546), c = n(481060), d = n(1964), u = n(63063), _ = n(285952), E = n(672705), h = n(981631), I = n(689938), m = n(990330), p = n(331651);
function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let T = u.Z.getArticleURL(h.BhN.VERIFICATION_FAQ);
class S extends (i = a.PureComponent) {
    renderFields() {
        let {
            types: e,
            captchaKey: t,
            theme: n,
            onCaptchaVerify: i
        } = this.props;
        return (0, s.jsx)(s.Fragment, {
            children: e.map(e => e === h.PUi.CAPTCHA ? (0, s.jsx)(E.Z, {
                onVerify: i,
                theme: n
            }, t) : (0, s.jsx)(c.Button, {
                className: l()(p.marginBottom20),
                onClick: () => this.handleClick(e),
                children: d.Z.getButtonTitle(e)
            }, e))
        });
    }
    render() {
        return (0, s.jsxs)(_.Z, {
            className: m.verification,
            align: _.Z.Align.CENTER,
            direction: _.Z.Direction.VERTICAL,
            children: [
                (0, s.jsxs)(_.Z, {
                    className: l()(m.container, { [m.isMobile]: o.tq }),
                    direction: _.Z.Direction.VERTICAL,
                    align: _.Z.Align.CENTER,
                    justify: _.Z.Justify.CENTER,
                    children: [
                        (0, s.jsx)('div', { className: m.image }),
                        (0, s.jsx)('div', {
                            className: l()(m.title, p.marginTop20),
                            children: I.Z.Messages.VERIFICATION_TITLE
                        }),
                        (0, s.jsx)('div', {
                            className: l()(m.body, p.marginTop4, p.marginBottom20),
                            children: I.Z.Messages.VERIFICATION_BODY_WITH_HELP_LINK.format({ helpCenterURL: T })
                        }),
                        (0, s.jsx)(_.Z, {
                            grow: 0,
                            direction: _.Z.Direction.VERTICAL,
                            justify: _.Z.Justify.CENTER,
                            children: this.renderFields()
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: l()(m.footer, p.marginTop20),
                    children: I.Z.Messages.VERIFICATION_FOOTER
                }),
                (0, s.jsxs)(_.Z, {
                    className: l()(p.marginTop4, p.marginBottom20),
                    grow: 0,
                    children: [
                        (0, s.jsx)('div', {
                            className: l()(m.footer, m.footerAction),
                            children: I.Z.Messages.VERIFICATION_FOOTER_SUPPORT.format({ supportURL: u.Z.getSubmitRequestURL() })
                        }),
                        (0, s.jsx)('div', {
                            className: l()(m.footer, m.footerBullet),
                            children: '\u2022'
                        }),
                        (0, s.jsx)('div', {
                            className: l()(m.footer, m.footerAction),
                            children: I.Z.Messages.VERIFICATION_FOOTER_LOGOUT.format({ logoutOnClick: this.props.onLogout })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), g(this, 'handleClick', e => {
            let {onClick: t} = this.props;
            null == t || t(e);
        });
    }
}
g(S, 'defaultProps', {
    types: [h.PUi.CAPTCHA],
    onCaptchaVerify: h.dG4,
    onLogout: h.dG4
}), t.Z = S;
