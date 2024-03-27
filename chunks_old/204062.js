"use strict";
let a;
s.r(t), s.d(t, {
  FetchState: function() {
    return l
  },
  default: function() {
    return h
  }
});
var n, l, i = s("446674"),
  r = s("913144"),
  o = s("976028"),
  d = s("630615");
(n = l || (l = {}))[n.NOT_FETCHED = 0] = "NOT_FETCHED", n[n.FETCHING = 1] = "FETCHING", n[n.FETCHED = 2] = "FETCHED", n[n.ERROR = 3] = "ERROR";
let u = 0,
  c = 0,
  S = {},
  E = !1,
  T = 0,
  f = 0,
  _ = 0,
  m = 0;
class g extends i.default.Store {
  get openedItems() {
    return S
  }
  get redeemedPrize() {
    return E
  }
  get globalOpenedCount() {
    return f
  }
  get lastGlobalOpenedCount() {
    return T
  }
  get globalOpenedCountFetchTime() {
    return _
  }
  get nextGlobalOpenedCountFetchDelay() {
    return m
  }
  get recentlyOpenedItem() {
    return a
  }
  get userDataFetchState() {
    return u
  }
  get globalOpenedCountFetchState() {
    return c
  }
}
g.displayName = "LootboxStore";
var h = new g(r.default, {
  USER_LOOTBOX_DATA_FETCH: function() {
    u = 1
  },
  USER_LOOTBOX_DATA_FETCH_SUCCESS: function(e) {
    S = {
      ...e.openedItems
    }, E = e.redeemedPrize, u = 2
  },
  USER_LOOTBOX_DATA_FETCH_FAILURE: function() {
    u = 3
  },
  USER_LOOTBOX_OPEN_ITEM: function(e) {
    let {
      userLootboxData: t,
      openedItem: s
    } = e;
    S = {
      ...t.openedItems
    }, E = t.redeemedPrize, a = s, f++, T++
  },
  LOOTBOX_COUNT_STAT_FETCHED: function(e) {
    let {
      currentCount: t,
      previousCount: s
    } = e;
    f = t, T = s, _ = Date.now(), m = (0, o.randomBetween)(d.LOOTBOX_COUNT_STAT_FETCH_DELAY_MIN, d.LOOTBOX_COUNT_STAT_FETCH_DELAY_MAX), c = 2
  },
  LOGOUT: function() {
    S = {}, E = !1, a = void 0, u = 0
  }
})