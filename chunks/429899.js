n(47120);
var i = n(735250),
    a = n(470079),
    s = n(558381),
    r = n(613311);
class l extends a.Component {
    componentDidMount() {
        this.fetchStoreListing();
    }
    render() {
        let { skuId: e, applicationId: t, slug: n, storeListingId: a, pageSize: s, location: l } = this.props;
        return (0, i.jsx)(r.Z, {
            inputSkuId: e,
            applicationId: t,
            fetchStoreListing: this.fetchStoreListing,
            slug: n,
            storeListingId: a,
            location: l,
            pageSize: s
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'fetchStoreListing'),
            (i = (e) => {
                let { storeListingId: t, skuId: n, applicationId: i } = this.props,
                    a = null != e ? e : n;
                if (null != t) return (0, s.rV)(t);
                if (null != a) return (0, s.km)(a);
                if (null != i) return (0, s.Hq)(i);
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = l;
