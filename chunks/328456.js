n.d(t, {
  R: function() {
return l;
  },
  b: function() {
return o;
  }
}), n(724458), n(653041), n(47120);
var r = n(470079),
  a = n(979554);
class o {
  get firstAvatarDecoration() {
return this.getFirstItemByType(a.Z.AVATAR_DECORATION);
  }
  get firstProfileEffect() {
return this.getFirstItemByType(a.Z.PROFILE_EFFECT);
  }
  getFirstItemByType(e) {
var t;
let n = (null !== (t = this.itemsByTypes.get(e)) && void 0 !== t ? t : [])[0];
if (null != n)
  return n;
  }
  sortByTypes(e) {
return e.reduce((e, t) => {
  let n = e.get(t.type);
  return null != n ? n.push(t) : e.set(t.type, [t]), e;
}, new Map());
  }
  constructor(e) {
var t, n, r;
t = this, r = void 0, (n = 'itemsByTypes') in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r, this.itemsByTypes = this.sortByTypes(e);
  }
}
let l = e => {
  let {
firstProfileEffect: t,
firstAvatarDecoration: n
  } = r.useMemo(() => new o(e.items), [e]);
  return {
firstProfileEffect: t,
firstAvatarDecoration: n
  };
};