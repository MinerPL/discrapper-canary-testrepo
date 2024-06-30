n.d(t, {
    t: function () {
        return c;
    }
}), n(47120), n(411104);
var i = n(230367), s = n(320215), a = n(240773), r = n(495852), l = n(740111);
class o extends r.C {
    create(e) {
        let t = { properties: { oneofKind: void 0 } };
        return globalThis.Object.defineProperty(t, a.C, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, s.l)(this, t, e), t;
    }
    internalBinaryRead(e, t, n, s) {
        let a = null != s ? s : this.create(), r = e.pos + t;
        for (; e.pos < r;) {
            let [t, s] = e.tag();
            switch (t) {
            case 1:
                a.properties = {
                    oneofKind: 'placeholder',
                    placeholder: e.string()
                };
                break;
            case 2:
                a.properties = {
                    oneofKind: 'announcementModalVariant1',
                    announcementModalVariant1: l.xY.internalBinaryRead(e, e.uint32(), n, a.properties.announcementModalVariant1)
                };
                break;
            default:
                let r = n.readUnknownField;
                if ('throw' === r)
                    throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(s, ') for ').concat(this.typeName));
                let o = e.skip(s);
                !1 !== r && (!0 === r ? i.z.onRead : r)(this.typeName, a, t, s, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        'placeholder' === e.properties.oneofKind && t.tag(1, i.TD.LengthDelimited).string(e.properties.placeholder), 'announcementModalVariant1' === e.properties.oneofKind && l.xY.internalBinaryWrite(e.properties.announcementModalVariant1, t.tag(2, i.TD.LengthDelimited).fork(), n).join();
        let s = n.writeUnknownFields;
        return !1 !== s && (!0 == s ? i.z.onWrite : s)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties', [
            {
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
            }
        ]);
    }
}
let c = new o();
