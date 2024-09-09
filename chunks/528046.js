n.d(t, {
    k: function () {
        return o;
    }
});
var r = n(581282),
    i = n(69122),
    a = n(36056),
    s = n(17146);
class o {
    constructor(e) {
        var t;
        this.fields = null !== (t = e.fields) && void 0 !== t ? t : [];
    }
    write(e, t) {
        let n = {};
        for (let r of this.fields) {
            if (!r.oneof) {
                let i = this.field(r, e[r.localName], t);
                void 0 !== i && (n[t.useProtoFieldName ? r.name : r.jsonName] = i);
                continue;
            }
            let i = e[r.oneof];
            if (i.oneofKind !== r.localName) continue;
            let a = 'scalar' == r.kind || 'enum' == r.kind ? Object.assign(Object.assign({}, t), { emitDefaultValues: !0 }) : t,
                o = this.field(r, i[r.localName], a);
            (0, s.hu)(void 0 !== o), (n[t.useProtoFieldName ? r.name : r.jsonName] = o);
        }
        return n;
    }
    field(e, t, n) {
        let r;
        if ('map' == e.kind) {
            (0, s.hu)('object' == typeof t && null !== t);
            let i = {};
            switch (e.V.kind) {
                case 'scalar':
                    for (let [n, r] of Object.entries(t)) {
                        let t = this.scalar(e.V.T, r, e.name, !1, !0);
                        (0, s.hu)(void 0 !== t), (i[n.toString()] = t);
                    }
                    break;
                case 'message':
                    let a = e.V.T();
                    for (let [r, o] of Object.entries(t)) {
                        let t = this.message(a, o, e.name, n);
                        (0, s.hu)(void 0 !== t), (i[r.toString()] = t);
                    }
                    break;
                case 'enum':
                    let o = e.V.T();
                    for (let [r, a] of Object.entries(t)) {
                        (0, s.hu)(void 0 === a || 'number' == typeof a);
                        let t = this.enum(o, a, e.name, !1, !0, n.enumAsInteger);
                        (0, s.hu)(void 0 !== t), (i[r.toString()] = t);
                    }
            }
            (n.emitDefaultValues || Object.keys(i).length > 0) && (r = i);
        } else if (e.repeat) {
            (0, s.hu)(Array.isArray(t));
            let i = [];
            switch (e.kind) {
                case 'scalar':
                    for (let n = 0; n < t.length; n++) {
                        let r = this.scalar(e.T, t[n], e.name, e.opt, !0);
                        (0, s.hu)(void 0 !== r), i.push(r);
                    }
                    break;
                case 'enum':
                    let a = e.T();
                    for (let r = 0; r < t.length; r++) {
                        (0, s.hu)(void 0 === t[r] || 'number' == typeof t[r]);
                        let o = this.enum(a, t[r], e.name, e.opt, !0, n.enumAsInteger);
                        (0, s.hu)(void 0 !== o), i.push(o);
                    }
                    break;
                case 'message':
                    let o = e.T();
                    for (let r = 0; r < t.length; r++) {
                        let a = this.message(o, t[r], e.name, n);
                        (0, s.hu)(void 0 !== a), i.push(a);
                    }
            }
            (n.emitDefaultValues || i.length > 0 || n.emitDefaultValues) && (r = i);
        } else
            switch (e.kind) {
                case 'scalar':
                    r = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
                    break;
                case 'enum':
                    r = this.enum(e.T(), t, e.name, e.opt, n.emitDefaultValues, n.enumAsInteger);
                    break;
                case 'message':
                    r = this.message(e.T(), t, e.name, n);
            }
        return r;
    }
    enum(e, t, n, r, i, a) {
        if ('google.protobuf.NullValue' == e[0]) return null;
        if (void 0 === t) {
            (0, s.hu)(r);
            return;
        }
        if (0 !== t || i || r) return ((0, s.hu)('number' == typeof t), (0, s.hu)(Number.isInteger(t)), a || !e[1].hasOwnProperty(t)) ? t : e[2] ? e[2] + e[1][t] : e[1][t];
    }
    message(e, t, n, r) {
        return void 0 === t ? (r.emitDefaultValues ? null : void 0) : e.internalJsonWrite(t, r);
    }
    scalar(e, t, n, o, l) {
        if (void 0 === t) {
            (0, s.hu)(o);
            return;
        }
        let u = l || o;
        switch (e) {
            case a.wx.INT32:
            case a.wx.SFIXED32:
            case a.wx.SINT32:
                if (0 === t) return u ? 0 : void 0;
                return (0, s.ug)(t), t;
            case a.wx.FIXED32:
            case a.wx.UINT32:
                if (0 === t) return u ? 0 : void 0;
                return (0, s.fp)(t), t;
            case a.wx.FLOAT:
                (0, s.E_)(t);
            case a.wx.DOUBLE:
                if (0 === t) return u ? 0 : void 0;
                if (((0, s.hu)('number' == typeof t), Number.isNaN(t))) return 'NaN';
                if (t === Number.POSITIVE_INFINITY) return 'Infinity';
                if (t === Number.NEGATIVE_INFINITY) return '-Infinity';
                return t;
            case a.wx.STRING:
                if ('' === t) return u ? '' : void 0;
                return (0, s.hu)('string' == typeof t), t;
            case a.wx.BOOL:
                if (!1 === t) return !u && void 0;
                return (0, s.hu)('boolean' == typeof t), t;
            case a.wx.UINT64:
            case a.wx.FIXED64:
                (0, s.hu)('number' == typeof t || 'string' == typeof t || 'bigint' == typeof t);
                let c = i.p.from(t);
                if (c.isZero() && !u) return;
                return c.toString();
            case a.wx.INT64:
            case a.wx.SFIXED64:
            case a.wx.SINT64:
                (0, s.hu)('number' == typeof t || 'string' == typeof t || 'bigint' == typeof t);
                let d = i.M.from(t);
                if (d.isZero() && !u) return;
                return d.toString();
            case a.wx.BYTES:
                if (((0, s.hu)(t instanceof Uint8Array), !t.byteLength)) return u ? '' : void 0;
                return (0, r.m)(t);
        }
    }
}
