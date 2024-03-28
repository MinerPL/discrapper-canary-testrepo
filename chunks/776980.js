"use strict";
s.r(t), s.d(t, {
  fetchCountStat: function() {
    return d
  },
  fetchUserLootboxData: function() {
    return i
  },
  openLootbox: function() {
    return r
  },
  redeemPrize: function() {
    return o
  }
});
var a = s("544891"),
  n = s("570140"),
  l = s("981631");
async function i() {
  n.default.dispatch({
    type: "USER_LOOTBOX_DATA_FETCH"
  });
  try {
    let e = await a.HTTP.get({
      url: l.Endpoints.USER_LOOTBOX_DATA
    });
    if (e.ok && null != e.body) {
      let {
        user_id: t,
        opened_items: s,
        redeemed_prize: a
      } = e.body;
      n.default.dispatch({
        type: "USER_LOOTBOX_DATA_FETCH_SUCCESS",
        userId: t,
        openedItems: s,
        redeemedPrize: a
      })
    } else n.default.dispatch({
      type: "USER_LOOTBOX_DATA_FETCH_FAILURE"
    })
  } catch (e) {
    n.default.dispatch({
      type: "USER_LOOTBOX_DATA_FETCH_FAILURE"
    })
  }
}
async function r() {
  let e = await a.HTTP.post({
    url: l.Endpoints.USER_LOOTBOX_OPEN_ITEM
  });
  if (e.ok && null != e.body) {
    let {
      user_lootbox_data: t,
      opened_item: s
    } = e.body, {
      user_id: a,
      opened_items: l,
      redeemed_prize: i
    } = t;
    n.default.dispatch({
      type: "USER_LOOTBOX_OPEN_ITEM",
      userLootboxData: {
        userId: a,
        openedItems: l,
        redeemedPrize: i
      },
      openedItem: s
    })
  }
}
async function o() {
  let e = await a.HTTP.post({
    url: l.Endpoints.USER_LOOTBOX_REDEEM_PRIZE
  });
  if (e.ok && null != e.body) {
    let {
      user_id: t,
      opened_items: s,
      redeemed_prize: a
    } = e.body;
    n.default.dispatch({
      type: "USER_LOOTBOX_DATA_FETCH_SUCCESS",
      userId: t,
      openedItems: s,
      redeemedPrize: a
    })
  }
}
async function d() {
  let e = await a.HTTP.get({
    url: l.Endpoints.LOOTBOX_COUNT
  });
  n.default.dispatch({
    type: "LOOTBOX_COUNT_STAT_FETCHED",
    currentCount: e.body.current_count,
    previousCount: e.body.previous_count
  })
}