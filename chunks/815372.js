n.d(t, {
  FL: function() {
return l;
  },
  Ky: function() {
return r;
  }
}), n(411104);
var r, i, a = n(81825),
  s = n(981631);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(i = r || (r = {})).SHOP = 'SHOP', i.NITRO_HOME = 'NITRO_HOME';
class l extends a.Z {
  static fromType(e) {
switch (e) {
  case 'SHOP':
    return new l({
      path: s.Z5c.COLLECTIBLES_SHOP,
      type: 'SHOP'
    });
  case 'NITRO_HOME':
    return new l({
      path: s.Z5c.NITRO_HOME,
      type: 'NITRO_HOME'
    });
  default:
    throw Error('Unhandled InAppNavigationType');
}
  }
  constructor(e) {
super(), o(this, 'id', void 0), o(this, 'path', void 0), o(this, 'type', void 0), this.id = e.type, this.path = e.path, this.type = e.type;
  }
}