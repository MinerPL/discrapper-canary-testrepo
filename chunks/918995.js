a.r(s), a(47120);
var n = a(735250),
    t = a(470079),
    c = a(481060),
    i = a(233787),
    l = a(689938);
function o(e, s, a) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = a),
        e
    );
}
class r extends t.Component {
    render() {
        let { transitionState: e } = this.props;
        return (0, n.jsxs)(i.Z, {
            transitionState: e,
            'aria-label': l.Z.Messages.PREMIUM_NOT_CLAIMED,
            children: [
                (0, n.jsx)(i.Z.Header, { children: l.Z.Messages.PREMIUM_NOT_CLAIMED }),
                (0, n.jsx)(i.Z.Content, {
                    type: i.Z.Types.UNCLAIMED,
                    children: l.Z.Messages.PREMIUM_NOT_CLAIMED_BODY
                }),
                (0, n.jsx)(i.Z.Footer, {
                    secondary: {
                        onClick: this.cancel,
                        label: l.Z.Messages.NEVERMIND
                    },
                    primary: {
                        onClick: this.claimAccount,
                        label: l.Z.Messages.CLAIM_ACCOUNT
                    }
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            o(this, 'cancel', () => {
                let { onClose: e } = this.props;
                null == e || e();
            }),
            o(this, 'claimAccount', () => {
                let { onClose: e } = this.props;
                null == e || e(),
                    (0, c.openModalLazy)(async () => {
                        let { default: e } = await a.e('60827').then(a.bind(a, 324239));
                        return (s) => (0, n.jsx)(e, { ...s });
                    });
            });
    }
}
s.default = r;
