"use strict";
n.r(t), n.d(t, {
  GuildProductSortOptions: function() {
    return l
  },
  ServerShopTabOrder: function() {
    return s
  },
  getGuildProductSortOptionLabel: function() {
    return o
  },
  DISPLAYED_SORT_OPTIONS: function() {
    return a
  }
});
var i, r, l, s, u = n("782340");

function o(e) {
  return ({
    4: u.default.Messages.GUILD_STORE_SORT_OPTION_NEWEST_ARRIVALS,
    2: u.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_ASC,
    3: u.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_DESC,
    1: u.default.Messages.GUILD_STORE_SORT_OPTION_NAME
  })[e]
}(i = l || (l = {}))[i.NAME = 1] = "NAME", i[i.PRICE_ASC = 2] = "PRICE_ASC", i[i.PRICE_DESC = 3] = "PRICE_DESC", i[i.NEWEST_ARRIVALS = 4] = "NEWEST_ARRIVALS", (r = s || (s = {}))[r.SUBS_FIRST = 1] = "SUBS_FIRST", r[r.PRODUCTS_FIRST = 2] = "PRODUCTS_FIRST";
let a = [4, 2, 3, 1]