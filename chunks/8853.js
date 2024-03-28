"use strict";
n.r(t), n.d(t, {
  PremiumMarketingComponentProperties: function() {
    return i
  }
}), n("47120"), n("411104");
var a = n("578012"),
  s = n("740111");
class l extends a.MessageType {
  create(e) {
    let t = {
      properties: {
        oneofKind: void 0
      }
    };
    return globalThis.Object.defineProperty(t, a.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, a.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, n, l) {
    let i = null != l ? l : this.create(),
      r = e.pos + t;
    for (; e.pos < r;) {
      let [t, l] = e.tag();
      switch (t) {
        case 1:
          i.properties = {
            oneofKind: "placeholder",
            placeholder: e.string()
          };
          break;
        case 2:
          i.properties = {
            oneofKind: "announcementModalVariant1",
            announcementModalVariant1: s.AnnouncementModalVariant1Properties.internalBinaryRead(e, e.uint32(), n, i.properties.announcementModalVariant1)
          };
          break;
        default:
          let r = n.readUnknownField;
          if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(l, ") for ").concat(this.typeName));
          let o = e.skip(l);
          !1 !== r && (!0 === r ? a.UnknownFieldHandler.onRead : r)(this.typeName, i, t, l, o)
      }
    }
    return i
  }
  internalBinaryWrite(e, t, n) {
    "placeholder" === e.properties.oneofKind && t.tag(1, a.WireType.LengthDelimited).string(e.properties.placeholder), "announcementModalVariant1" === e.properties.oneofKind && s.AnnouncementModalVariant1Properties.internalBinaryWrite(e.properties.announcementModalVariant1, t.tag(2, a.WireType.LengthDelimited).fork(), n).join();
    let l = n.writeUnknownFields;
    return !1 !== l && (!0 == l ? a.UnknownFieldHandler.onWrite : l)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [{
      no: 1,
      name: "placeholder",
      kind: "scalar",
      oneof: "properties",
      T: 9
    }, {
      no: 2,
      name: "announcement_modal_variant_1",
      kind: "message",
      oneof: "properties",
      T: () => s.AnnouncementModalVariant1Properties
    }])
  }
}
let i = new l