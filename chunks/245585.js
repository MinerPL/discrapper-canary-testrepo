"use strict";
n.d(t, {
  u: function() {
    return o
  }
});
var i = n(503461),
  r = n(190313);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class o {
  get prefix() {
    return this.table.prefix
  }
  withoutLogging() {
    return new o(this.originalPrefix, this.table.tableId, this.table.database, !1)
  }
  get(e, t, n) {
    return this.table.get([e, t, u(n)])
  }
  getLatest(e, t, n) {
    return this.table.getMany([e, t], {
      ordering: i.Sk.Descending,
      limit: n
    })
  }
  getRange(e, t, n, i, r) {
    return this.table.getRange([e, t, u(n)], [e, t, u(i)], r)
  }
  getMostRecents(e) {
    return this.table.messages.getLatest(e)
  }
  put(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Sn.Replace;
    return this.table.put(l(e, t, n), r)
  }
  putAll(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Sn.Replace,
      s = n.map(n => l(e, t, n));
    return this.table.putAll(s, r)
  }
  deleteAll() {
    return this.table.delete()
  }
  deleteGuild(e) {
    return this.table.delete([e])
  }
  deleteChannel(e, t) {
    return this.table.delete([e, t])
  }
  deleteMessage(e, t, n) {
    return this.table.delete([e, t, u(n)])
  }
  transaction(e, t) {
    return this.table.transaction(t => e(new a(t)), t)
  }
  upgradeTransaction(e) {
    return new a(this.table.upgradeTransaction(e))
  }
  constructor(e, t, n, i = !0) {
    s(this, "originalPrefix", void 0), s(this, "table", void 0), this.originalPrefix = e, this.table = new r.i([e], t, n, i)
  }
}
class a {
  static fromTableTransaction(e) {
    return new a(e)
  }
  static fromDatabaseTransaction(e, t, n) {
    return new a(new r.E(e, t, n))
  }
  put(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Sn.Replace;
    this.transaction.put(l(e, t, n), r)
  }
  putAll(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.Sn.Replace,
      s = n.map(n => l(e, t, n));
    this.transaction.putAll(s, r)
  }
  deleteAll() {
    this.transaction.delete()
  }
  deleteGuild(e) {
    this.transaction.delete([e])
  }
  deleteChannel(e, t) {
    this.transaction.delete([e, t])
  }
  deleteMessage(e, t, n) {
    this.transaction.delete([e, t, u(n)])
  }
  trimOrphans(e) {
    this.transaction.messages.trimOrphans(e)
  }
  trimChannel(e, t, n) {
    this.transaction.messages.trimChannel([e, t], n)
  }
  trimChannelsIn(e, t) {
    this.transaction.messages.trimChannelsIn(e, t)
  }
  trimChannelsNotIn(e, t) {
    this.transaction.messages.trimChannelsNotIn(e, t)
  }
  constructor(e) {
    s(this, "transaction", void 0), this.transaction = e
  }
}

function l(e, t, n) {
  let i = u(n.id);
  return {
    key: [e, t, i],
    data: n,
    generation: i
  }
}

function u(e) {
  return e.padStart(19, "0")
}