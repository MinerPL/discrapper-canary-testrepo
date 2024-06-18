"use strict";
n.d(t, {
  v: function() {
    return l
  }
}), n(411104), n(653041), n(47120);
var i = n(956067),
  r = n(930145),
  s = n(350167),
  o = n(503461);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class l {
  static async open(e, t) {
    return new l(await r.A.open(e, t))
  }
  static openSyncUnsafe(e, t) {
    return new l(r.A.openSyncUnsafe(e, t))
  }
  static delete(e) {
    return r.A.delete(e)
  }
  close() {
    var e;
    this.lastState = o.hi.Closed, null === (e = this.raw) || void 0 === e || e.close(), this.raw = null, s.r.removeCompletionCallback(this.databaseStateCallback)
  }
  disable(e) {
    return null == this.raw ? Promise.resolve() : (this.lastState = o.hi.Disabled, this.execute({
      type: "db.disable",
      handle: 0,
      reason: e
    }))
  }
  execute(e, t) {
    if (null == this.raw) throw Error("database is no longer open (database: ".concat(this));
    let n = "key" in e ? e.key[0] : e.table,
      r = () => s.r.executeAsync(null != t ? t : e.type, t => {
        this.raw.execute(t, {
          ...e,
          handle: 0
        })
      });
    return null === t ? r() : i.Z.timeAsync("\uD83D\uDCBE", "".concat(null != t ? t : e.type, " ").concat(null != n ? n : ""), r)
  }
  executeSync(e) {
    if (null == this.raw) throw Error("database is no longer open (database: ".concat(this));
    let t = "key" in e ? e.key[0] : e.table;
    return i.Z.time("\uD83D\uDCBE", "SYNC: ".concat(e.type, " ").concat(null != t ? t : ""), () => this.raw.execute(null, {
      ...e,
      handle: 0
    }, {
      synchronous: !0
    }))
  }
  fullVacuum() {
    return this.execute({
      type: "db.vacuum",
      handle: 0,
      complete: !0
    })
  }
  fsInfo() {
    return this.execute({
      type: "db.fs_info",
      handle: 0
    })
  }
  incrementalVacuum() {
    return this.execute({
      type: "db.vacuum",
      handle: 0,
      complete: !1
    })
  }
  instantaneousState() {
    return null == this.raw ? o.hi.Closed : this.lastState = this.executeSync({
      type: "db.state"
    })
  }
  async instantaneousStateAsync() {
    return null == this.raw ? o.hi.Closed : this.lastState = await this.execute({
      type: "db.state"
    })
  }
  state() {
    return this.lastState
  }
  transaction(e, t) {
    let n = new u(this);
    return Promise.resolve(e(n)).then(() => n.operations.length > 0 ? this.execute({
      type: "db.transaction",
      operations: n.complete()
    }, t) : Promise.resolve())
  }
  constructor(e) {
    a(this, "name", void 0), a(this, "handle", void 0), a(this, "raw", void 0), a(this, "lastState", void 0), a(this, "databaseStateCallback", void 0), this.raw = e, this.name = e.name, this.lastState = o.hi.Open, this.handle = e.handle, this.databaseStateCallback = s.r.addDatabaseStateCallback((e, t) => {
      this.handle === e && (this.lastState = t)
    })
  }
}
class u {
  add(e) {
    this.operations.push(e)
  }
  complete() {
    for (let e of this.operations) e.handle = 0;
    return this.operations
  }
  toString() {
    return "[DatabaseTransaction ".concat(this.database.handle, ": ").concat(this.operations.length, " ops]")
  }
  constructor(e) {
    a(this, "database", void 0), a(this, "operations", void 0), this.database = e, this.operations = []
  }
}