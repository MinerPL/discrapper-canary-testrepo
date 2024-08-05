let r;
var i, a, s, o, l = n(392711),
  u = n.n(l),
  c = n(442837),
  d = n(433517),
  _ = n(570140),
  E = n(981631);
let f = 'GameLibraryViewStore',
  h = E.sHY.ASCENDING,
  p = E.iEv.LAST_PLAYED,
  m = !1,
  I = u().debounce(() => {
m = !1, g.emitChange();
  }, 200);
class T extends(o = c.ZP.Store) {
  initialize() {
var e;
let t = null !== (e = d.K.get(f)) && void 0 !== e ? e : {};
null != t.sortDirection && null != t.sortKey && (h = t.sortDirection, p = t.sortKey);
  }
  get sortDirection() {
return h;
  }
  get sortKey() {
return p;
  }
  get activeRowKey() {
return r;
  }
  get isNavigatingByKeyboard() {
return m;
  }
}
s = 'GameLibraryViewStore', (a = 'displayName') in(i = T) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s;
let g = new T(_.Z, {
  LIBRARY_TABLE_SORT_UPDATE: function(e) {
let {
  direction: t,
  key: n
} = e;
h = t, p = n, d.K.set(f, {
  sortDirection: h,
  sortKey: p
});
  },
  LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
let {
  key: t,
  isKeyboardEvent: n
} = e;
n && (m = !0, I()), r = t;
  }
});
t.Z = g;