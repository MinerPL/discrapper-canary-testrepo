n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(724458),
    n(653041);
var r = n(778787),
    i = n(803358);
function a(e, t, n) {
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
class s extends i.Z {
    static fromServer(e) {
        let { products: t, logo: n, pdp_bg: i, mobile_bg: a, success_modal_bg: o, mobile_banner: l, ...u } = e;
        return new s({
            ...super.fromServer(u),
            products: t.reduce((e, t) => {
                let n = r.Z.fromServer(t);
                return 0 === n.items.length ? e : (e.push(n), e);
            }, []),
            logo: n,
            pdpBg: i,
            mobileBg: a,
            successModalBg: o,
            mobileBanner: l
        });
    }
    constructor(e) {
        super(e), a(this, 'products', void 0), a(this, 'logo', void 0), a(this, 'pdpBg', void 0), a(this, 'mobileBg', void 0), a(this, 'successModalBg', void 0), a(this, 'mobileBanner', void 0), (this.products = e.products), (this.logo = e.logo), (this.pdpBg = e.pdpBg), (this.mobileBg = e.mobileBg), (this.successModalBg = e.successModalBg), (this.mobileBanner = e.mobileBanner);
    }
}
