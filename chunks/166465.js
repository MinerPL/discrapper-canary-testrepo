"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("917351"),
  s = n.n(i),
  r = n("866227"),
  a = n.n(r),
  o = n("446674"),
  l = n("913144"),
  u = n("305961");
let d = {
    packsById: new Map
  },
  c = d,
  f = !1,
  _ = null,
  h = !1;

function g(e) {
  let t = null != c.packsById.get(e.id);
  if (t) c.packsById.set(e.id, e);
  else {
    let t = [...c.packsById];
    c.packsById = new Map, c.packsById.set(e.id, e), t.forEach(e => {
      let [t, n] = e;
      return c.packsById.set(t, n)
    })
  }
}
class m extends o.default.PersistedStore {
  initialize(e) {
    this.waitFor(u.default), c = (null == e ? void 0 : e.packsById) instanceof Map ? e : d
  }
  getState() {
    return c
  }
  getPacksForUser() {
    return [...c.packsById.values()].filter(e => !(null === this || void 0 === this ? void 0 : this._isADuplicateGuildPack(e.id)))
  }
  countPacksCollected() {
    return c.packsById.size
  }
  getPackByPackId(e) {
    let {
      packId: t,
      allowDuplicateGuildPack: n
    } = e;
    return !0 !== n && (null === this || void 0 === this ? void 0 : this._isADuplicateGuildPack(t)) ? null : c.packsById.get(t)
  }
  getPacksById() {
    return c.packsById
  }
  getIsFetching() {
    return f
  }
  getSortedPackIds() {
    var e;
    return null !== (e = [...c.packsById.keys()].filter(e => !(null === this || void 0 === this ? void 0 : this._isADuplicateGuildPack(e)))) && void 0 !== e ? e : []
  }
  getPackEmojisTTL() {
    return _
  }
  getHasPackAddedNotification() {
    return h
  }
  hasPersistedState() {
    return !s.isEmpty(c.packsById)
  }
  _isADuplicateGuildPack(e) {
    var t;
    return (null === (t = u.default.getGuild(e)) || void 0 === t ? void 0 : t.joinedAt) != null
  }
  clear() {
    c = d, f = !1, _ = null
  }
}
m.displayName = "InventoryStore", m.persistKey = "InventoryStore";
var E = new m(l.default, {
  LOGOUT: function() {
    c = d, f = !1, _ = null
  },
  INVENTORY_FETCH: function(e) {
    let {} = e;
    !f && (f = !0)
  },
  INVENTORY_FETCH_SUCCESS: function(e) {
    let {
      packs: t
    } = e;
    t.forEach(e => {
      c.packsById.set(e.id, e)
    }), f = !1, _ = a(a()).add(30, "minutes").valueOf()
  },
  INVENTORY_FETCH_ERROR: function(e) {
    let {
      is4XXError: t
    } = e;
    f = !1, _ = a(a()).add(t ? 10 : 1, "minutes").valueOf()
  },
  INVENTORY_COLLECT_PACK_SUCCESS: function(e) {
    let {
      pack: t
    } = e;
    g(t), h = !0
  },
  INVENTORY_REMOVE_PACK_SUCCESS: function(e) {
    let {
      packId: t
    } = e;
    c.packsById.delete(t)
  },
  INVENTORY_PACK_UPDATE: function(e) {
    let {
      pack: t
    } = e;
    g(t)
  },
  INVENTORY_PACK_DELETE: function(e) {
    let {
      pack: t
    } = e;
    c.packsById.delete(t.id)
  },
  INVENTORY_DISMISS_PACK_ADDED_NOTIFICATION: function(e) {
    let {} = e;
    h = !1
  },
  POST_CONNECTION_OPEN: function(e) {
    let {} = e;
    f = !1, _ = null
  }
})