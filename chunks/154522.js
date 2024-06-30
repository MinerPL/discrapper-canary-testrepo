n.d(t, {
    Q: function () {
        return p;
    }
});
var r = n(735250), s = n(470079), i = n(120356), o = n.n(i), a = n(392711), l = n.n(a), c = n(481060), d = n(100527), C = n(267101), u = n(675297), _ = n(891561), x = n(333866), f = n(689938), I = n(169021);
function p(e) {
    let {
            guildId: t,
            productId: n
        } = e, {listingsLoaded: i} = (0, C.eD)(t), a = (0, C.ue)(t), p = s.useRef(null), {sortOption: h} = (0, _.s)(), m = s.useMemo(() => function (e, t) {
            let n, r;
            switch (t) {
            case x.zJ.NAME:
                n = e => e.name.toLowerCase(), r = 'asc';
                break;
            case x.zJ.PRICE_ASC:
                n = 'price_tier', r = 'asc';
                break;
            case x.zJ.PRICE_DESC:
                n = 'price_tier', r = 'desc';
                break;
            case x.zJ.NEWEST_ARRIVALS:
                n = 'published_at', r = 'desc';
                break;
            default:
                return e;
            }
            return l().orderBy(e, [n], [r]);
        }(a, h), [
            a,
            h
        ]);
    return i ? (0, r.jsx)('ul', {
        className: I.cardContainer,
        'aria-label': f.Z.Messages.GUILD_SHOP_PRODUCTS_A11Y_LABEL,
        children: m.map(e => (0, r.jsx)('li', {
            className: I.card,
            children: (0, r.jsx)('div', {
                className: o()(I.cardContent, { [I.selectedCard]: e.id === n }),
                ref: e.id === n ? p : void 0,
                onLoad: () => {
                    let t = p.current;
                    null != t && e.id === n && (t.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    }), setTimeout(() => {
                        t.classList.remove(I.selectedCard);
                    }, 2000));
                },
                children: (0, r.jsx)(u.H, {
                    guildProductListing: e,
                    guildId: t,
                    location: d.Z.GUILD_SHOP_PAGE,
                    shouldShowFullDescriptionButton: !1,
                    hideRoleTag: !0,
                    lineClamp: 2,
                    cardWidth: 332,
                    cardHeight: 347,
                    thumbnailHeight: 187,
                    descriptionTextVariant: 'text-xs/normal',
                    showOpaqueBackground: !0
                }, e.id)
            }, e.id)
        }, e.id))
    }) : (0, r.jsx)(c.Spinner, {});
}
