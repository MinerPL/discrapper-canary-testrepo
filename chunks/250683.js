(t.byteLength = function (e) {
    var t = l(e),
        n = t[0],
        r = t[1];
    return ((n + r) * 3) / 4 - r;
}),
    (t.toByteArray = function (e) {
        var t,
            n,
            a,
            s,
            o = l(e),
            u = o[0],
            c = o[1];
        var d = new i(((t = 0), ((u + (n = c)) * 3) / 4 - n)),
            _ = 0,
            E = c > 0 ? u - 4 : u;
        for (s = 0; s < E; s += 4) (a = (r[e.charCodeAt(s)] << 18) | (r[e.charCodeAt(s + 1)] << 12) | (r[e.charCodeAt(s + 2)] << 6) | r[e.charCodeAt(s + 3)]), (d[_++] = (a >> 16) & 255), (d[_++] = (a >> 8) & 255), (d[_++] = 255 & a);
        return 2 === c && ((a = (r[e.charCodeAt(s)] << 2) | (r[e.charCodeAt(s + 1)] >> 4)), (d[_++] = 255 & a)), 1 === c && ((a = (r[e.charCodeAt(s)] << 10) | (r[e.charCodeAt(s + 1)] << 4) | (r[e.charCodeAt(s + 2)] >> 2)), (d[_++] = (a >> 8) & 255), (d[_++] = 255 & a)), d;
    }),
    (t.fromByteArray = function (e) {
        for (var t, r = e.length, i = r % 3, a = [], s = 0, o = r - i; s < o; s += 16383)
            a.push(
                (function (e, t, r) {
                    for (var i, a, s = [], o = t; o < r; o += 3) {
                        (a = ((e[o] << 16) & 16711680) + ((e[o + 1] << 8) & 65280) + (255 & e[o + 2])), s.push(n[((i = a) >> 18) & 63] + n[(i >> 12) & 63] + n[(i >> 6) & 63] + n[63 & i]);
                    }
                    return s.join('');
                })(e, s, s + 16383 > o ? o : s + 16383)
            );
        return 1 === i ? ((t = e[r - 1]), a.push(n[t >> 2] + n[(t << 4) & 63] + '==')) : 2 === i && ((t = (e[r - 2] << 8) + e[r - 1]), a.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '=')), a.join('');
    });
for (var n = [], r = [], i = 'undefined' != typeof Uint8Array ? Uint8Array : Array, a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', s = 0, o = a.length; s < o; ++s) (n[s] = a[s]), (r[a.charCodeAt(s)] = s);
function l(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var n = e.indexOf('=');
    -1 === n && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
}
(r['-'.charCodeAt(0)] = 62), (r['_'.charCodeAt(0)] = 63);
