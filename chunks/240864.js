"use strict";
u.r(e), u.d(e, {
  FetchState: function() {
    return l
  }
}), u("653041"), u("47120");
var l, n, i, d, r, a, o = u("442837"),
  c = u("759174"),
  s = u("570140"),
  E = u("70956"),
  C = u("709054");
(i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
let f = {},
  _ = {},
  T = {},
  D = 10 * E.default.Millis.MINUTE;

function U(t) {
  return "guild:".concat(t)
}

function F(t) {
  return "guild:".concat(t, ":published")
}
let G = new c.SecondaryIndexMap(t => {
    let e = [U(t.guild_id)];
    return t.published && e.push(F(t.guild_id)), e
  }, t => (function(t) {
    let e = C.default.extractTimestamp(t.id);
    return t.published ? -e : -e + 1e12
  })(t)),
  P = [];
class h extends(n = o.default.Store) {
  getGuildProductsForGuildFetchState(t) {
    var e;
    return null !== (e = f[t]) && void 0 !== e ? e : 0
  }
  getGuildProduct(t) {
    return G.get(t)
  }
  getGuildProductsForGuild(t, e) {
    let {
      publishedOnly: u
    } = e;
    return null == t ? P : G.values(u ? F(t) : U(t))
  }
  getGuildProductFetchState(t) {
    var e;
    return null !== (e = _[t]) && void 0 !== e ? e : 0
  }
  isGuildProductsCacheExpired(t) {
    var e;
    return Date.now() - (null !== (e = T[t]) && void 0 !== e ? e : 0) > D
  }
}
a = "GuildProductsStore", (r = "displayName") in(d = h) ? Object.defineProperty(d, r, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[r] = a, e.default = new h(s.default, {
  CONNECTION_OPEN: function() {
    G.clear(), f = {}, _ = {}, T = {}
  },
  GUILD_PRODUCTS_FETCH: function(t) {
    let {
      guildId: e
    } = t;
    f[e] = 1, [...G.values(U(e))].forEach(t => {
      G.delete(t.id)
    })
  },
  GUILD_PRODUCTS_FETCH_SUCCESS: function(t) {
    let {
      guildId: e,
      products: u
    } = t;
    f[e] = 2, T[e] = Date.now(), u.forEach(t => {
      G.set(t.id, t), _[t.id] = 2
    })
  },
  GUILD_PRODUCTS_FETCH_FAILURE: function(t) {
    let {
      guildId: e
    } = t;
    f[e] = 2
  },
  GUILD_PRODUCT_CREATE: function(t) {
    let {
      product: e
    } = t;
    G.set(e.id, e)
  },
  GUILD_PRODUCT_UPDATE: function(t) {
    let {
      product: e
    } = t;
    G.set(e.id, e)
  },
  GUILD_PRODUCT_DELETE: function(t) {
    let {
      productId: e
    } = t;
    G.delete(e)
  },
  GUILD_PRODUCT_FETCH: function(t) {
    let {
      productId: e
    } = t;
    _[e] = 1
  },
  GUILD_PRODUCT_FETCH_SUCCESS: function(t) {
    let {
      product: e
    } = t;
    _[e.id] = 2, G.set(e.id, e)
  },
  GUILD_PRODUCT_FETCH_FAILURE: function(t) {
    let {
      productId: e,
      error: u
    } = t;
    _[e] = 2, 404 === u.status && G.delete(e)
  }
})