n.d(t, {
    B: function () {
        return o;
    }
}),
    n(47120);
var i = n(786761),
    a = n(23750),
    s = n(306680),
    r = n(709054);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o {
    isLatest(e, t) {
        return this.messageGeneration(e, t) === t;
    }
    messageGeneration(e, t) {
        let n = this.messages.get(e);
        return null == n
            ? -1 / 0
            : n.generation !== t && null != n.message && n.message.id === s.ZP.lastMessageId(e)
              ? (this.messages.set(e, {
                    ...n,
                    generation: t
                }),
                t)
              : n.generation;
    }
    messageId(e) {
        var t, n;
        let i = this.messages.get(e);
        return null !== (n = null == i ? void 0 : null === (t = i.message) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null;
    }
    messageRecord(e) {
        var t;
        let n = this.messages.get(e);
        return null != n && null != n.message && !(n.message instanceof a.ZP) && (n.message = (0, i.e5)(n.message)), null !== (t = null == n ? void 0 : n.message) && void 0 !== t ? t : null;
    }
    has(e) {
        return this.messages.has(e);
    }
    put(e, t, n) {
        this.messages.set(e, {
            message: t,
            generation: n
        });
    }
    putNew(e, t, n) {
        var i;
        let a = this.messages.get(e);
        null != t &&
            (function (e, t) {
                return null == t || r.default.compare(e, t) > 0;
            })(t.id, null == a ? void 0 : null === (i = a.message) || void 0 === i ? void 0 : i.id) &&
            this.put(e, t, n);
    }
    putMany(e, t) {
        for (let n of e) this.put(n.channel_id, n, t);
    }
    update(e) {
        var t;
        if (null == e.id || null == e.channel_id) return;
        let n = e.channel_id,
            s = this.messages.get(n);
        if ((null == s ? void 0 : null === (t = s.message) || void 0 === t ? void 0 : t.id) !== e.id) return;
        let r = s.message instanceof a.ZP ? (0, i.wi)(s.message, e) : (0, i.gx)(s.message, e);
        this.messages.set(n, {
            ...s,
            message: r
        });
    }
    delete(e) {
        this.messages.delete(e);
    }
    constructor() {
        l(this, 'localNeeded', !0), l(this, 'messages', new Map());
    }
}
