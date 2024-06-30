n.d(t, {
    Z: function () {
        return d;
    }
});
var r, i = n(735250), a = n(470079), o = n(772848), s = n(626135), l = n(251625), u = n(981631);
function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class d extends (r = a.Component) {
    renderProvider(e) {
        var t, n;
        let {
                section: r,
                page: a,
                object: o,
                objectType: l,
                children: u
            } = this.props, c = this.mergeLocation(e.location, this.getLocation(a, r, o, l)), d = this.getContext(c, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
        return (0, i.jsx)(s.AnalyticsContext.Provider, {
            value: d,
            children: u
        });
    }
    render() {
        let {context: e} = this.props;
        return null != e ? this.renderProvider(e) : (0, i.jsx)(s.AnalyticsContext.Consumer, { children: e => this.renderProvider(e) });
    }
    constructor(e) {
        super(e), c(this, '_loadId', null), c(this, '_loadDate', this.props.root ? Date.now() : null), c(this, 'getLocation', (0, l.oH)((e, t, n, r) => {
            let i = {};
            return null != e && (i.page = e), null != t && (i.section = t), null != n && (i.object = n), null != r && (i.objectType = r), i;
        })), c(this, 'mergeLocation', (0, l.oH)((e, t) => ({
            ...e,
            ...t
        }))), c(this, 'getContext', (0, l.oH)((e, t, n) => ({
            location: e,
            loadDate: t,
            loadId: n
        }))), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, o.Z)());
    }
}
c(d, 'Pages', u.ZY5), c(d, 'Sections', u.jXE), c(d, 'Objects', u.qAy), c(d, 'ObjectTypes', u.Qqv), c(d, 'defaultProps', { root: !1 });
