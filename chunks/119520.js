n(47120);
var i = n(735250), s = n(470079), a = n(558381), r = n(499371), l = n(689938), o = n(670120);
function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class d extends s.PureComponent {
    render() {
        let {
            game: {name: e}
        } = this.props;
        return (0, i.jsx)('div', {
            className: o.matureListing,
            children: (0, i.jsx)(r.Z, {
                onAgree: this.handleAgree,
                onDisagree: this.handleDisagree,
                title: l.Z.Messages.MATURE_LISTING_TITLE.format({ name: e }),
                description: l.Z.Messages.MATURE_LISTING_DESCRIPTION,
                agreement: l.Z.Messages.MATURE_LISTING_ACCEPT,
                disagreement: l.Z.Messages.MATURE_LISTING_DECLINE
            })
        });
    }
    constructor(...e) {
        super(...e), c(this, 'handleDisagree', () => {
            (0, a.M9)();
        }), c(this, 'handleAgree', () => {
            (0, a.cj)();
        });
    }
}
t.Z = d;
