n.d(t, {
    u$: function () {
        return r;
    }
}),
    n(47120),
    n(411104),
    n(653041);
var r,
    i,
    a = n(230367),
    s = n(320215),
    o = n(240773),
    l = n(495852),
    u = n(835913);
((i = r || (r = {}))[(i.UNSPECIFIED_DISCLOSURE = 0)] = 'UNSPECIFIED_DISCLOSURE'), (i[(i.IP_LOCATION = 1)] = 'IP_LOCATION'), (i[(i.DISPLAYS_ADVERTISEMENTS = 2)] = 'DISPLAYS_ADVERTISEMENTS');
class c extends l.C {
    create(e) {
        let t = {
            metadata: {},
            platformName: '',
            platformUsername: '',
            version: '0'
        };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, s.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(i.metadata, e, n);
                    break;
                case 2:
                    i.platformName = e.string();
                    break;
                case 3:
                    i.platformUsername = e.string();
                    break;
                case 4:
                    i.version = e.fixed64().toString();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== s && (!0 === s ? a.z.onRead : s)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = t.string();
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata');
            }
        }
        e[null != a ? a : ''] = null != s ? s : '';
    }
    internalBinaryWrite(e, t, n) {
        for (let n of Object.keys(e.metadata)) t.tag(1, a.TD.LengthDelimited).fork().tag(1, a.TD.LengthDelimited).string(n).tag(2, a.TD.LengthDelimited).string(e.metadata[n]).join();
        '' !== e.platformName && t.tag(2, a.TD.LengthDelimited).string(e.platformName), '' !== e.platformUsername && t.tag(3, a.TD.LengthDelimited).string(e.platformUsername), '0' !== e.version && t.tag(4, a.TD.Bit64).fixed64(e.version);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection', [
            {
                no: 1,
                name: 'metadata',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'scalar',
                    T: 9
                }
            },
            {
                no: 2,
                name: 'platform_name',
                kind: 'scalar',
                T: 9
            },
            {
                no: 3,
                name: 'platform_username',
                kind: 'scalar',
                T: 9
            },
            {
                no: 4,
                name: 'version',
                kind: 'scalar',
                T: 6
            }
        ]);
    }
}
new c();
class d extends l.C {
    create(e) {
        let t = { disclosureType: 0 };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, s.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.disclosureType = e.int32();
                    break;
                case 2:
                    i.ackedAt = u.E.internalBinaryRead(e, e.uint32(), n, i.ackedAt);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== s && (!0 === s ? a.z.onRead : s)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.disclosureType && t.tag(1, a.TD.Varint).int32(e.disclosureType), e.ackedAt && u.E.internalBinaryWrite(e.ackedAt, t.tag(2, a.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure', [
            {
                no: 1,
                name: 'disclosure_type',
                kind: 'enum',
                T: () => ['discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType', r]
            },
            {
                no: 2,
                name: 'acked_at',
                kind: 'message',
                T: () => u.E
            }
        ]);
    }
}
let _ = new d();
class E extends l.C {
    create(e) {
        let t = { ackedDisclosures: [] };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, s.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) i.ackedDisclosures.push(_.internalBinaryRead(e, e.uint32(), n));
            else {
                let s = n.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== s && (!0 === s ? a.z.onRead : s)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.ackedDisclosures.length; r++) _.internalBinaryWrite(e.ackedDisclosures[r], t.tag(1, a.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures', [
            {
                no: 1,
                name: 'acked_disclosures',
                kind: 'message',
                repeat: 1,
                T: () => _
            }
        ]);
    }
}
new E();
