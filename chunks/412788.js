"use strict";
n.d(t, {
  Z: function() {
    return c
  }
}), n(653041);
var i, r, s, o, a = n(512722),
  l = n.n(a),
  u = n(442837),
  _ = n(433517),
  d = n(570140);
class c extends(i = u.ZP.Store) {
  static clearAll() {
    c.allStores.forEach(e => e.clear())
  }
  get persistKey() {
    return "".concat(this.getClass().displayName, "-snapshot")
  }
  clear() {
    _.K.remove(this.persistKey)
  }
  save() {
    _.K.set(this.persistKey, this.takeSnapshot())
  }
  readSnapshot(e) {
    let t = _.K.get(this.persistKey);
    return null == t || t.version !== e ? null : t.data
  }
  getClass() {
    return this.constructor
  }
  constructor(e) {
    super(d.Z, {
      ...e,
      CLEAR_CACHES: () => this.clear(),
      WRITE_CACHES: () => this.save()
    }), l()(null != this.getClass().displayName, "Snapshot stores need a display name"), l()(!("CLEAR_CACHES" in e), "SnapshotStores cannot use the 'CLEAR_CACHES' action"), l()(!("WRITE_CACHES" in e), "SnapshotStores cannot use the 'WRITE_CACHES' action"), c.allStores.push(this)
  }
}
o = [], (s = "allStores") in(r = c) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o