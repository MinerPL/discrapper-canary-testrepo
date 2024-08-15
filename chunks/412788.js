n.d(t, {
  Z: function() {
return _;
  }
}), n(653041);
var r, i, a, s, o = n(512722),
  l = n.n(o),
  u = n(442837),
  c = n(433517),
  d = n(570140);
class _ extends(r = u.ZP.Store) {
  static clearAll() {
_.allStores.forEach(e => e.clear());
  }
  get persistKey() {
return ''.concat(this.getClass().displayName, '-snapshot');
  }
  clear() {
c.K.remove(this.persistKey);
  }
  save() {
c.K.set(this.persistKey, this.takeSnapshot());
  }
  readSnapshot(e) {
let t = c.K.get(this.persistKey);
return null == t || t.version !== e ? null : t.data;
  }
  getClass() {
return this.constructor;
  }
  constructor(e) {
super(d.Z, {
  ...e,
  CLEAR_CACHES: () => (this.clear(), !1),
  WRITE_CACHES: () => (this.save(), !1)
}), l()(null != this.getClass().displayName, 'Snapshot stores need a display name'), l()(!('CLEAR_CACHES' in e), 'SnapshotStores cannot use the \'CLEAR_CACHES\' action'), l()(!('WRITE_CACHES' in e), 'SnapshotStores cannot use the \'WRITE_CACHES\' action'), _.allStores.push(this);
  }
}
s = [], (a = 'allStores') in(i = _) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s;