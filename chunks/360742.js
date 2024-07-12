n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(81825),
  i = n(598077);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class o extends r.Z {
  static createFromServer(e) {
return new o({
  ...e,
  user: new i.Z(e.user)
});
  }
  constructor(e) {
var t;
super(), a(this, 'id', void 0), a(this, 'name', void 0), a(this, 'type', void 0), a(this, 'user', void 0), a(this, 'displayName', void 0), this.id = e.id, this.name = e.name, this.type = e.type, this.user = e.user, this.displayName = null !== (t = e.name_localized) && void 0 !== t ? t : e.name;
  }
}