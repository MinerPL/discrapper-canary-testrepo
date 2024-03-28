"use strict";
s.r(t), s.d(t, {
  GuildProductCardGrid: function() {
    return L
  }
});
var l = s("735250"),
  i = s("470079"),
  r = s("803997"),
  a = s.n(r),
  n = s("392711"),
  d = s.n(n),
  o = s("481060"),
  u = s("100527"),
  c = s("267101"),
  C = s("675297"),
  _ = s("891561"),
  f = s("333866"),
  h = s("689938"),
  S = s("599731");

function L(e) {
  let {
    guildId: t,
    productId: s
  } = e, {
    listingsLoaded: r
  } = (0, c.useFetchGuildProductListingsForGuild)(t), n = (0, c.useGuildProductsForGuild)(t), L = i.useRef(null), {
    sortOption: x
  } = (0, _.useGuildProductsSortOptionContext)(), I = i.useMemo(() => (function(e, t) {
    let s, l;
    switch (t) {
      case f.GuildProductSortOptions.NAME:
        s = e => e.name.toLowerCase(), l = "asc";
        break;
      case f.GuildProductSortOptions.PRICE_ASC:
        s = "price_tier", l = "asc";
        break;
      case f.GuildProductSortOptions.PRICE_DESC:
        s = "price_tier", l = "desc";
        break;
      case f.GuildProductSortOptions.NEWEST_ARRIVALS:
        s = "published_at", l = "desc";
        break;
      default:
        return e
    }
    return d().orderBy(e, [s], [l])
  })(n, x), [n, x]);
  return r ? (0, l.jsx)("ul", {
    className: S.cardContainer,
    "aria-label": h.default.Messages.GUILD_SHOP_PRODUCTS_A11Y_LABEL,
    children: I.map(e => (0, l.jsx)("li", {
      className: S.card,
      children: (0, l.jsx)("div", {
        className: a()(S.cardContent, {
          [S.selectedCard]: e.id === s
        }),
        ref: e.id === s ? L : void 0,
        onLoad: () => {
          let t = L.current;
          null != t && e.id === s && (t.scrollIntoView({
            behavior: "smooth",
            block: "center"
          }), setTimeout(() => {
            t.classList.remove(S.selectedCard)
          }, 2e3))
        },
        children: (0, l.jsx)(C.GuildProductListingPublicCard, {
          guildProductListing: e,
          guildId: t,
          location: u.default.GUILD_SHOP_PAGE,
          shouldShowFullDescriptionButton: !1,
          hideRoleTag: !0,
          lineClamp: 2,
          cardWidth: 332,
          cardHeight: 347,
          thumbnailHeight: 187,
          descriptionTextVariant: "text-xs/normal",
          showOpaqueBackground: !0
        }, e.id)
      }, e.id)
    }, e.id))
  }) : (0, l.jsx)(o.Spinner, {})
}