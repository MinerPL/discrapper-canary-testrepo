s(47120);
var n = s(735250), a = s(470079), r = s(442837), l = s(481060), i = s(16084), o = s(55563), d = s(689938);
class c extends a.Component {
    componentDidMount() {
        let {
            applicationId: e,
            skus: t,
            selectedSkuId: s,
            onChange: n
        } = this.props;
        null == t || 0 === t.length ? (0, i.uE)(e, !1) : 1 === t.length && null == s && n(t[0].id);
    }
    componentDidUpdate() {
        let {
            skus: e,
            selectedSkuId: t,
            onChange: s
        } = this.props;
        null != e && 1 === e.length && null == t && s(e[0].id);
    }
    render() {
        let {
                skus: e,
                selectedSkuId: t,
                className: s
            } = this.props, a = null != e && 0 === e.length;
        return (0, n.jsx)(l.SingleSelect, {
            options: null != e ? e.map(e => ({
                label: e.name,
                value: e.id
            })) : [],
            placeholder: a ? d.Z.Messages.CREATE_STORE_CHANNEL_NO_SKUS : d.Z.Messages.CREATE_STORE_CHANNEL_SELECT_SKU,
            value: t,
            onChange: this.handleChange,
            className: s,
            isDisabled: a
        });
    }
    constructor(...e) {
        var t, s, n;
        super(...e), t = this, s = 'handleChange', n = e => {
            this.props.onChange(e);
        }, s in t ? Object.defineProperty(t, s, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[s] = n;
    }
}
t.Z = r.ZP.connectStores([o.Z], e => {
    let {applicationId: t} = e;
    return { skus: o.Z.getForApplication(t) };
})(c);
