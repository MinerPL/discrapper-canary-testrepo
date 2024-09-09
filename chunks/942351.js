n.d(e, {
    b: function () {
        return s;
    }
});
var r = n(180450),
    i = n(362133);
class o extends i.kb {
    constructor(t, e) {
        super(), (this.finished = !1), (this.destroyed = !1), (0, r.vp)(t);
        let n = (0, i.O0)(e);
        if (((this.iHash = t.create()), 'function' != typeof this.iHash.update)) throw Error('Expected instance of class which extends utils.Hash');
        (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
        let o = this.blockLen,
            s = new Uint8Array(o);
        s.set(n.length > o ? t.create().update(n).digest() : n);
        for (let t = 0; t < s.length; t++) s[t] ^= 54;
        this.iHash.update(s), (this.oHash = t.create());
        for (let t = 0; t < s.length; t++) s[t] ^= 106;
        this.oHash.update(s), s.fill(0);
    }
    update(t) {
        return (0, r.Gg)(this), this.iHash.update(t), this;
    }
    digestInto(t) {
        (0, r.Gg)(this), (0, r.aI)(t, this.outputLen), (this.finished = !0), this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
    }
    digest() {
        let t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t;
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        let { oHash: e, iHash: n, finished: r, destroyed: i, blockLen: o, outputLen: s } = this;
        return (t.finished = r), (t.destroyed = i), (t.blockLen = o), (t.outputLen = s), (t.oHash = e._cloneInto(t.oHash)), (t.iHash = n._cloneInto(t.iHash)), t;
    }
    destroy() {
        (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
}
let s = (t, e, n) => new o(t, e).update(n).digest();
s.create = (t, e) => new o(t, e);
