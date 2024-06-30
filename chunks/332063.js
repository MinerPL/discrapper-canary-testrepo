s(47120);
var n, a = s(735250), r = s(470079), l = s(442837), i = s(481060), o = s(274616), d = s(560587), c = s(689938);
function h(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
class u extends (n = r.Component) {
    componentDidMount() {
        let {
            applicationId: e,
            branches: t,
            onHasBranchesChange: s
        } = this.props;
        (0, o.Z)(e), null == s || s(t.length > 0);
    }
    componentDidUpdate(e) {
        let {
                onHasBranchesChange: t,
                branches: s
            } = this.props, n = s.length > 0;
        null != t && n !== e.branches.length > 0 && t(n);
    }
    render() {
        let {
            branches: e,
            selectedBranchId: t,
            applicationId: s,
            includeMaster: n,
            hide: r,
            className: l
        } = this.props;
        if (0 === e.length || r)
            return null;
        let o = n ? e : e.filter(e => e.id !== s);
        return (0, a.jsx)(i.SingleSelect, {
            options: o.map(e => ({
                label: e.getName(s),
                value: e.id
            })),
            placeholder: c.Z.Messages.CREATE_STORE_CHANNEL_SELECT_BRANCH,
            value: t,
            onChange: this.handleChange,
            className: l
        });
    }
    constructor(...e) {
        super(...e), h(this, 'handleChange', e => {
            this.props.onChange(e);
        });
    }
}
h(u, 'defaultProps', { includeMaster: !1 }), t.Z = l.ZP.connectStores([d.Z], e => {
    let {applicationId: t} = e;
    return { branches: d.Z.getBranches(t) };
})(u);
