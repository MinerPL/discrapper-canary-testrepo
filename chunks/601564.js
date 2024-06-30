n.r(t), n.d(t, {
    getPageSize: function () {
        return O;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(593473), r = n(266067), l = n(442837), o = n(930118), c = n(355467), d = n(410575), u = n(666743), _ = n(112724), E = n(447269), h = n(612226), I = n(714338), m = n(663993), p = n(628123), g = n(703656), T = n(108427), S = n(911314), C = n(429899), N = n(843445), f = n(981631), A = n(689938), Z = n(595115);
function L(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let v = (0, m.Un)({
    createPromise: () => Promise.all([
        n.e('68148'),
        n.e('99838')
    ]).then(n.bind(n, 496691)),
    webpackId: 496691
});
function O(e) {
    return e < N.x ? N.b.SMALL : N.b.LARGE;
}
l.ZP.initialize();
class R extends s.PureComponent {
    componentDidMount() {
        (0, o.Y)(this.props.location), this.stopListeningToHistory = (0, g.s1)().listen(e => {
            e.pathname.startsWith(f.Z5c.APPLICATION_STORE) && (0, o.Y)(e);
        }), this.props.isAuthenticated && (0, c.tZ)(), I.Z.disable(), I.Z.setLayout(E.r), I.Z.enable(), (0, T.e)('application_store');
    }
    componentWillUnmount() {
        null != this.stopListeningToHistory && this.stopListeningToHistory(), I.Z.disable(), I.Z.setLayout(h.oT), I.Z.enable();
    }
    renderCustomErrorMessage() {
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)('p', { children: A.Z.Messages.ERRORS_STORE_CRASH }),
                (0, i.jsx)('p', { children: A.Z.Messages.ERRORS_ACTION_TO_TAKE })
            ]
        });
    }
    render() {
        let {
                isAuthenticated: e,
                location: t
            } = this.props, n = e ? (0, i.jsx)('div', {
                className: Z.applicationStore,
                children: this.renderContent()
            }) : (0, i.jsx)(v, {
                className: Z.applicationStore,
                location: t,
                render: this.renderContent
            });
        return (0, i.jsx)(p.Z, {
            renderCustomMessage: this.renderCustomErrorMessage,
            children: n
        });
    }
    constructor(...e) {
        super(...e), L(this, 'stopListeningToHistory', void 0), L(this, 'renderStoreListing', e => {
            let {
                    match: {
                        params: {
                            skuId: t,
                            applicationId: n,
                            slug: s
                        }
                    },
                    location: r
                } = e, {width: l} = this.props, o = (0, a.parse)(r.search);
            return (0, i.jsx)(d.Z, {
                page: f.ZY5.STORE_LISTING,
                root: !0,
                children: (0, i.jsx)(C.Z, {
                    skuId: t,
                    applicationId: n,
                    slug: s,
                    location: r,
                    storeListingId: o.store_listing_id,
                    pageSize: O(l)
                })
            });
        }), L(this, 'renderContent', () => (0, i.jsxs)(r.rs, {
            children: [
                (0, i.jsx)(r.AW, {
                    path: f.Z5c.APPLICATION_STORE,
                    exact: !0,
                    render: () => (0, i.jsx)(d.Z, {
                        page: f.ZY5.STORE_DIRECTORY_HOME,
                        root: !0,
                        children: (0, i.jsx)(S.Z, {})
                    })
                }),
                (0, i.jsx)(r.AW, {
                    path: f.Z5c.APPLICATION_STORE_LISTING_APPLICATION(':applicationId', ':slug'),
                    render: this.renderStoreListing
                }),
                (0, i.jsx)(r.AW, {
                    path: f.Z5c.APPLICATION_STORE_LISTING_APPLICATION(':applicationId'),
                    render: this.renderStoreListing
                }),
                (0, i.jsx)(r.AW, {
                    path: f.Z5c.APPLICATION_STORE_LISTING_SKU(':skuId', ':slug'),
                    render: this.renderStoreListing
                }),
                (0, i.jsx)(r.AW, {
                    path: f.Z5c.APPLICATION_STORE_LISTING_SKU(':skuId'),
                    render: this.renderStoreListing
                }),
                (0, i.jsx)(r.l_, { to: f.Z5c.APP })
            ]
        }));
    }
}
t.default = (0, r.EN)((0, u.Z)((0, _.Z)(R)));
