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
        let { products: t, logo: n, hero_ranking: i, pdp_bg: a, mobile_bg: o, success_modal_bg: l, mobile_banner: u, hero_banner: c, featured_block: d, ...f } = e;
        return new s({
            ...super.fromServer(f),
            products: t.reduce((e, t) => {
                let n = r.Z.fromServer(t);
                return 0 === n.items.length ? e : (e.push(n), e);
            }, []),
            logo: n,
            heroRanking: i,
            pdpBg: a,
            mobileBg: o,
            successModalBg: l,
            mobileBanner: u,
            heroBanner: c,
            featuredBlock: d
        });
    }
    constructor(e) {
        super(e), a(this, 'products', void 0), a(this, 'logo', void 0), a(this, 'heroRanking', void 0), a(this, 'pdpBg', void 0), a(this, 'mobileBg', void 0), a(this, 'successModalBg', void 0), a(this, 'mobileBanner', void 0), a(this, 'heroBanner', void 0), a(this, 'featuredBlock', void 0), (this.products = e.products), (this.logo = e.logo), (this.heroRanking = e.heroRanking), (this.pdpBg = e.pdpBg), (this.mobileBg = e.mobileBg), (this.successModalBg = e.successModalBg), (this.mobileBanner = e.mobileBanner), (this.heroBanner = e.heroBanner), (this.featuredBlock = e.featuredBlock);
    }
}
