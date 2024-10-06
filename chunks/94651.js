Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.runtimeHashMessageKey = function (e) {
        var t = (function (e) {
            e = BigInt(e);
            for (var t = [], n = Math.ceil(Math.floor(Math.log2(Number(e)) + 1) / 8), r = 0; r < n; r++) t.unshift(Number((e >> BigInt(8 * r)) & BigInt(255)));
            var i = new Uint8Array(t);
            return s ? i : i.reverse();
        })((0, i.hash)(e, 0));
        return [a[t[0] >> 2], a[((3 & t[0]) << 4) | (t[1] >> 4)], a[((15 & t[1]) << 2) | (t[2] >> 6)], a[63 & t[2]], a[t[3] >> 2], a[((3 & t[3]) << 4) | (t[3] >> 4)]].join('');
    });
var r,
    i = n(820401),
    a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
var s = !((new Uint32Array((r = new Uint8Array(4)).buffer)[0] = 1) & r[0]);
