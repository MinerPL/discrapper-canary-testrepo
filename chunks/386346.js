"use strict";
let a;
s.r(t), s.d(t, {
  FetchState: function() {
    return o
  }
});
var n, l, i, r, o, d, u = s("442837"),
  c = s("570140"),
  S = s("641826"),
  E = s("232700");
(n = o || (o = {}))[n.NOT_FETCHED = 0] = "NOT_FETCHED", n[n.FETCHING = 1] = "FETCHING", n[n.FETCHED = 2] = "FETCHED", n[n.ERROR = 3] = "ERROR";
let T = 0,
  _ = 0,
  f = {},
  m = !1,
  g = 0,
  h = 0,
  N = 0,
  I = 0;
class p extends(d = u.default.Store) {
  get openedItems() {
    return f
  }
  get redeemedPrize() {
    return m
  }
  get globalOpenedCount() {
    return h
  }
  get lastGlobalOpenedCount() {
    return g
  }
  get globalOpenedCountFetchTime() {
    return N
  }
  get nextGlobalOpenedCountFetchDelay() {
    return I
  }
  get recentlyOpenedItem() {
    return a
  }
  get userDataFetchState() {
    return T
  }
  get globalOpenedCountFetchState() {
    return _
  }
}
r = "LootboxStore", (i = "displayName") in(l = p) ? Object.defineProperty(l, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = r, t.default = new p(c.default, {
  USER_LOOTBOX_DATA_FETCH: function() {
    T = 1
  },
  USER_LOOTBOX_DATA_FETCH_SUCCESS: function(e) {
    f = {
      ...e.openedItems
    }, m = e.redeemedPrize, T = 2
  },
  USER_LOOTBOX_DATA_FETCH_FAILURE: function() {
    T = 3
  },
  USER_LOOTBOX_OPEN_ITEM: function(e) {
    let {
      userLootboxData: t,
      openedItem: s
    } = e;
    f = {
      ...t.openedItems
    }, m = t.redeemedPrize, a = s, h++, g++
  },
  LOOTBOX_COUNT_STAT_FETCHED: function(e) {
    let {
      currentCount: t,
      previousCount: s
    } = e;
    h = t, g = s, N = Date.now(), I = (0, S.randomBetween)(E.LOOTBOX_COUNT_STAT_FETCH_DELAY_MIN, E.LOOTBOX_COUNT_STAT_FETCH_DELAY_MAX), _ = 2
  },
  LOGOUT: function() {
    f = {}, m = !1, a = void 0, T = 0
  }
})