var r = n(288537),
    i = n(754793),
    a = n(911725),
    s = n(441234),
    o = n(404625),
    l = Object.prototype.toString;
function u(e) {
    if (!(this instanceof u)) return new u(e);
    this.options = i.assign(
        {
            level: -1,
            method: 8,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: 0,
            to: ''
        },
        e || {}
    );
    var t,
        n = this.options;
    n.raw && n.windowBits > 0 ? (n.windowBits = -n.windowBits) : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16), (this.err = 0), (this.msg = ''), (this.ended = !1), (this.chunks = []), (this.strm = new o()), (this.strm.avail_out = 0);
    var c = r.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
    if (0 !== c) throw Error(s[c]);
    if ((n.header && r.deflateSetHeader(this.strm, n.header), n.dictionary)) {
        if (((t = 'string' == typeof n.dictionary ? a.string2buf(n.dictionary) : '[object ArrayBuffer]' === l.call(n.dictionary) ? new Uint8Array(n.dictionary) : n.dictionary), 0 !== (c = r.deflateSetDictionary(this.strm, t)))) throw Error(s[c]);
        this._dict_set = !0;
    }
}
function c(e, t) {
    var n = new u(t);
    if ((n.push(e, !0), n.err)) throw n.msg || s[n.err];
    return n.result;
}
(u.prototype.push = function (e, t) {
    var n,
        s,
        o = this.strm,
        u = this.options.chunkSize;
    if (this.ended) return !1;
    (s = t === ~~t ? t : !0 === t ? 4 : 0), 'string' == typeof e ? (o.input = a.string2buf(e)) : '[object ArrayBuffer]' === l.call(e) ? (o.input = new Uint8Array(e)) : (o.input = e), (o.next_in = 0), (o.avail_in = o.input.length);
    do {
        if ((0 === o.avail_out && ((o.output = new i.Buf8(u)), (o.next_out = 0), (o.avail_out = u)), 1 !== (n = r.deflate(o, s)) && 0 !== n)) return this.onEnd(n), (this.ended = !0), !1;
        (0 === o.avail_out || (0 === o.avail_in && (4 === s || 2 === s))) && ('string' === this.options.to ? this.onData(a.buf2binstring(i.shrinkBuf(o.output, o.next_out))) : this.onData(i.shrinkBuf(o.output, o.next_out)));
    } while ((o.avail_in > 0 || 0 === o.avail_out) && 1 !== n);
    return 4 === s ? ((n = r.deflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), 0 === n) : (2 === s && (this.onEnd(0), (o.avail_out = 0)), !0);
}),
    (u.prototype.onData = function (e) {
        this.chunks.push(e);
    }),
    (u.prototype.onEnd = function (e) {
        0 === e && ('string' === this.options.to ? (this.result = this.chunks.join('')) : (this.result = i.flattenChunks(this.chunks))), (this.chunks = []), (this.err = e), (this.msg = this.strm.msg);
    });
(t.Deflate = u),
    (t.deflate = c),
    (t.deflateRaw = function (e, t) {
        return ((t = t || {}).raw = !0), c(e, t);
    }),
    (t.gzip = function (e, t) {
        return ((t = t || {}).gzip = !0), c(e, t);
    });
