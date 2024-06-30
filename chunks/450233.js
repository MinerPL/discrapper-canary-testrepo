n.d(t, {
    G: function () {
        return l;
    }
});
var i, s, a, r, l, o, c = n(735250), d = n(470079), u = n(442837), _ = n(570140), E = n(16084), h = n(855775), I = n(689938);
(i = l || (l = {})).SHORT = 'SHORT', i.LONG = 'LONG';
class m extends (o = d.PureComponent) {
    getText(e, t) {
        if (429 === e.status)
            switch (t) {
            case 'SHORT':
                return I.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT;
            case 'LONG':
                return I.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR;
            }
        switch (t) {
        case 'SHORT':
            return I.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR_SHORT;
        case 'LONG':
            return I.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR;
        }
    }
    componentWillUnmount() {
        null != this.props.purchaseError && _.Z.wait(() => E.pB());
    }
    render() {
        let {
            className: e,
            purchaseError: t,
            messageStyle: n
        } = this.props;
        return null == t ? null : (0, c.jsx)('div', {
            className: e,
            children: this.getText(t, n)
        });
    }
}
r = { messageStyle: 'LONG' }, (a = 'defaultProps') in (s = m) ? Object.defineProperty(s, a, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : s[a] = r, t.Z = u.ZP.connectStores([h.Z], () => ({ purchaseError: h.Z.error }))(m);
