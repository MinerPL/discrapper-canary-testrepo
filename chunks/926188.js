n.d(t, {
    I: function () {
        return l;
    }
}),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(963458),
    n(47120);
var i = n(309651),
    a = n(259137);
let s = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
    r = {
        N: 16384,
        r: 8,
        p: 2
    };
async function l(e, t, n, l, o) {
    let c = await Promise.all([(0, i.x)(e, t, n), (0, i.x)(e, l, o)]);
    c.sort();
    let u = new Uint8Array(c[0].byteLength + c[1].byteLength);
    return u.set(c[0], 0), u.set(c[1], c[0].byteLength), new Uint8Array(await (0, a.f3)(u, s, 64, r));
}
