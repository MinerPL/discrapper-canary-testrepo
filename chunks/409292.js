n(47120);
var i = n(735250),
    a = n(470079),
    s = n(266067),
    r = n(442837),
    l = n(493683),
    o = n(112724),
    c = n(108427),
    d = n(184107),
    u = n(410575),
    _ = n(613311),
    E = n(601564),
    h = n(981631),
    m = n(125944);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class g extends a.Component {
    componentDidMount() {
        this.fetchStoreListing(), (0, c.e)('channel_store_listing');
    }
    render() {
        return null != this.props.skuId
            ? (0, i.jsx)(u.Z, {
                  page: h.ZY5.CHANNEL_STORE_LISTING,
                  root: !0,
                  children: (0, i.jsx)('div', {
                      className: m.applicationStore,
                      children: (0, i.jsx)(s.AW, {
                          path: '*',
                          render: this.renderApplicationListing
                      })
                  })
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            I(this, 'fetchStoreListing', (e) => {
                let { channel: t, inputSkuId: n } = this.props;
                return null != e ? l.Z.fetchChannelStoreListing(t.id, e) : null != n ? l.Z.fetchChannelStoreListing(t.id, n) : l.Z.fetchChannelStoreListing(t.id);
            }),
            I(this, 'renderApplicationListing', (e) => {
                let { location: t } = e,
                    { channel: n, skuId: a, width: s } = this.props;
                return (0, i.jsx)(_.Z, {
                    channel: n,
                    inputSkuId: a,
                    fetchStoreListing: this.fetchStoreListing,
                    location: t,
                    pageSize: (0, E.getPageSize)(s)
                });
            });
    }
}
t.Z = (0, o.Z)(
    r.ZP.connectStores([d.Z], (e) => {
        let { channel: t, inputSkuId: n } = e;
        return { skuId: null != n ? n : d.Z.getSkuIdForChannel(t.id) };
    })(g)
);
