n.d(t, {
  t: function() {
return c;
  }
}), n(47120), n(411104);
var i = n(230367),
  a = n(320215),
  s = n(240773),
  r = n(495852),
  l = n(740111);
class o extends r.C {
  create(e) {
let t = {
  properties: {
    oneofKind: void 0
  },
  contentIdentifier: ''
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, a.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, a) {
let s = null != a ? a : this.create(),
  r = e.pos + t;
for (; e.pos < r;) {
  let [t, a] = e.tag();
  switch (t) {
    case 1:
      s.properties = {
        oneofKind: 'placeholder',
        placeholder: e.string()
      };
      break;
    case 2:
      s.properties = {
        oneofKind: 'announcementModalVariant1',
        announcementModalVariant1: l.xY.internalBinaryRead(e, e.uint32(), n, s.properties.announcementModalVariant1)
      };
      break;
    case 3:
      s.contentIdentifier = e.string();
      break;
    default:
      let r = n.readUnknownField;
      if ('throw' === r)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(a, ') for ').concat(this.typeName));
      let o = e.skip(a);
      !1 !== r && (!0 === r ? i.z.onRead : r)(this.typeName, s, t, a, o);
  }
}
return s;
  }
  internalBinaryWrite(e, t, n) {
'placeholder' === e.properties.oneofKind && t.tag(1, i.TD.LengthDelimited).string(e.properties.placeholder), 'announcementModalVariant1' === e.properties.oneofKind && l.xY.internalBinaryWrite(e.properties.announcementModalVariant1, t.tag(2, i.TD.LengthDelimited).fork(), n).join(), '' !== e.contentIdentifier && t.tag(3, i.TD.LengthDelimited).string(e.contentIdentifier);
let a = n.writeUnknownFields;
return !1 !== a && (!0 == a ? i.z.onWrite : a)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties', [{
    no: 1,
    name: 'placeholder',
    kind: 'scalar',
    oneof: 'properties',
    T: 9
  },
  {
    no: 2,
    name: 'announcement_modal_variant_1',
    kind: 'message',
    oneof: 'properties',
    T: () => l.xY
  },
  {
    no: 3,
    name: 'content_identifier',
    kind: 'scalar',
    T: 9
  }
]);
  }
}
let c = new o();