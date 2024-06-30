n(411104);
var i, a, s, l, r, o, c, d, u = n(735250), _ = n(470079), E = n(120356), m = n.n(E), I = n(481060), T = n(646288), h = n(689938), N = n(162176);
(l = i || (i = {}))[l.DIRECTORY_HERO = 1] = 'DIRECTORY_HERO', l[l.DIRECTORY_TILE = 2] = 'DIRECTORY_TILE', l[l.DIRECTORY_SEARCH = 3] = 'DIRECTORY_SEARCH', l[l.LISTING = 4] = 'LISTING', l[l.EMBED = 5] = 'EMBED', (r = a || (a = {}))[r.IN_LIBRARY = 1] = 'IN_LIBRARY', r[r.ON_SALE = 2] = 'ON_SALE', r[r.PREMIUM = 3] = 'PREMIUM', r[r.DEFAULT = 4] = 'DEFAULT', r[r.ENTITLEMENT_BRANCH = 5] = 'ENTITLEMENT_BRANCH';
let f = e => {
        let {className: t} = e;
        return (0, u.jsxs)('div', {
            className: m()(N.row, t),
            children: [
                (0, u.jsx)(I.InventoryIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: N.icon
                }),
                h.Z.Messages.APPLICATION_STORE_IN_LIBRARY
            ]
        });
    }, p = e => {
        let {
            sku: t,
            className: n
        } = e;
        return (0, u.jsxs)('div', {
            className: m()(N.row, n),
            children: [
                (0, u.jsx)(I.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: N.icon
                }),
                (0, T.Z)(t)
            ]
        });
    }, C = e => {
        let {
            sku: t,
            className: n
        } = e;
        return (0, u.jsx)('div', {
            className: m()(N.salePercentage, n),
            children: t.getDisplaySalePercentage()
        });
    }, g = e => {
        let {
            sku: t,
            className: n
        } = e;
        return (0, u.jsx)('div', {
            className: m()(N.originalAmount, n),
            children: (0, T.Z)(t, !1)
        });
    }, S = e => {
        let {
            sku: t,
            className: n
        } = e;
        return (0, u.jsx)('div', {
            className: n,
            children: (0, T.Z)(t)
        });
    }, A = e => {
        let {
            sku: t,
            className: n
        } = e;
        return (0, u.jsxs)('div', {
            className: m()(N.row, n),
            children: [
                (0, u.jsx)(C, { sku: t }),
                (0, u.jsx)(g, { sku: t }),
                (0, u.jsx)(S, { sku: t })
            ]
        });
    }, x = e => {
        let {className: t} = e;
        return (0, u.jsx)('div', {
            className: t,
            children: h.Z.Messages.APPLICATION_STORE_FREE
        });
    };
class O extends (s = _.PureComponent) {
    getState() {
        let {
            inLibrary: e,
            sku: t,
            hasEntitlementBranch: n
        } = this.props;
        if (n)
            return 5;
        if (e)
            return 1;
        if (!t.available)
            return 4;
        else if (t.premium)
            return 3;
        else if (t.isOnSale)
            return 2;
        else if (null != t.getPrice())
            return 4;
        return null;
    }
    renderGeneric(e, t) {
        let {
            className: n,
            sku: i
        } = this.props;
        switch (e) {
        case 5:
            return (0, u.jsx)(x, { className: m()(t, n) });
        case 1:
            return (0, u.jsx)(f, { className: m()(t, n) });
        case 3:
            return (0, u.jsx)(p, {
                sku: i,
                className: m()(t, n)
            });
        case 2:
            return (0, u.jsx)(A, {
                sku: i,
                className: m()(t, n)
            });
        default:
            return (0, u.jsx)(S, {
                className: m()(t, n),
                sku: i
            });
        }
    }
    renderDirectoryHero(e) {
        let {
            className: t,
            sku: n
        } = this.props;
        switch (e) {
        case 5:
            return (0, u.jsx)(x, { className: m()(t) });
        case 3:
            return (0, u.jsx)(p, {
                sku: n,
                className: m()(N.directoryHeroPricePremium, t)
            });
        case 2:
            return (0, u.jsx)(A, {
                sku: n,
                className: m()(N.directoryHeroPrice, t)
            });
        default:
            return (0, u.jsx)(S, {
                className: m()(N.directoryHeroPrice, t),
                sku: n
            });
        }
    }
    renderListing(e) {
        let t;
        let {
            className: n,
            sku: i
        } = this.props;
        switch (e) {
        case 5:
            t = (0, u.jsx)(x, {});
            break;
        case 2:
            t = (0, u.jsxs)(_.Fragment, {
                children: [
                    (0, u.jsxs)('div', {
                        className: N.row,
                        children: [
                            (0, u.jsx)(S, { sku: i }),
                            (0, u.jsx)(C, { sku: i })
                        ]
                    }),
                    (0, u.jsx)(g, { sku: i })
                ]
            });
            break;
        default:
            t = (0, u.jsx)(S, { sku: i });
        }
        return (0, u.jsx)('div', {
            className: m()(N.listingPrice, n),
            children: t
        });
    }
    render() {
        let e = this.getState();
        if (null == e)
            return null;
        switch (this.props.type) {
        case 1:
            return this.renderDirectoryHero(e);
        case 2:
            return this.renderGeneric(e, N.directoryTilePrice);
        case 3:
            return this.renderGeneric(e, N.directorySearchPrice);
        case 4:
            return this.renderListing(e);
        case 5:
            return this.renderGeneric(e, N.embedPrice);
        default:
            throw Error('Invalid Price Unit Type');
        }
    }
}
o = O, c = 'Types', d = i, c in o ? Object.defineProperty(o, c, {
    value: d,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : o[c] = d, t.Z = O;
