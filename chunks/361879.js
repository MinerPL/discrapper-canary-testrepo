var r = n(814033),
    i = n(685053),
    a = i.assert;
function s(e, t) {
    if (e instanceof s) return e;
    !this._importDER(e, t) && (a(e.r && e.s, 'Signature without r or s'), (this.r = new r(e.r, 16)), (this.s = new r(e.s, 16)), void 0 === e.recoveryParam ? (this.recoveryParam = null) : (this.recoveryParam = e.recoveryParam));
}
function o() {
    this.place = 0;
}
function l(e, t) {
    var n = e[t.place++];
    if (!(128 & n)) return n;
    var r = 15 & n;
    if (0 === r || r > 4) return !1;
    for (var i = 0, a = 0, s = t.place; a < r; a++, s++) (i <<= 8), (i |= e[s]), (i >>>= 0);
    return !(i <= 127) && ((t.place = s), i);
}
function u(e) {
    for (var t = 0, n = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < n; ) t++;
    return 0 === t ? e : e.slice(t);
}
function c(e, t) {
    if (t < 128) {
        e.push(t);
        return;
    }
    var n = 1 + ((Math.log(t) / Math.LN2) >>> 3);
    for (e.push(128 | n); --n; ) e.push((t >>> (n << 3)) & 255);
    e.push(t);
}
(e.exports = s),
    (s.prototype._importDER = function (e, t) {
        e = i.toArray(e, t);
        var n = new o();
        if (48 !== e[n.place++]) return !1;
        var a = l(e, n);
        if (!1 === a || a + n.place !== e.length || 2 !== e[n.place++]) return !1;
        var s = l(e, n);
        if (!1 === s) return !1;
        var u = e.slice(n.place, s + n.place);
        if (((n.place += s), 2 !== e[n.place++])) return !1;
        var c = l(e, n);
        if (!1 === c || e.length !== c + n.place) return !1;
        var d = e.slice(n.place, c + n.place);
        if (0 === u[0]) {
            if (!(128 & u[1])) return !1;
            u = u.slice(1);
        }
        if (0 === d[0]) {
            if (!(128 & d[1])) return !1;
            d = d.slice(1);
        }
        return (this.r = new r(u)), (this.s = new r(d)), (this.recoveryParam = null), !0;
    }),
    (s.prototype.toDER = function (e) {
        var t = this.r.toArray(),
            n = this.s.toArray();
        for (128 & t[0] && (t = [0].concat(t)), 128 & n[0] && (n = [0].concat(n)), t = u(t), n = u(n); !n[0] && !(128 & n[1]); ) n = n.slice(1);
        var r = [2];
        c(r, t.length), (r = r.concat(t)).push(2), c(r, n.length);
        var a = r.concat(n),
            s = [48];
        return c(s, a.length), (s = s.concat(a)), i.encode(s, e);
    });
