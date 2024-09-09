t.d(n, {
    I: function () {
        return a;
    }
}),
    t(518263),
    t(970173),
    t(520712),
    t(268111),
    t(941497),
    t(32026),
    t(480839),
    t(744285),
    t(492257),
    t(873817),
    t(963458),
    t(47120);
var r = t(309651),
    i = t(802667);
let E = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
    u = {
        N: 16384,
        r: 8,
        p: 2,
        dkLen: 64
    };
async function a(e, n, t, a, o) {
    let s = await Promise.all([(0, r.x)(e, n, t), (0, r.x)(e, a, o)]);
    s.sort();
    let c = new Uint8Array(s[0].byteLength + s[1].byteLength);
    return c.set(s[0], 0), c.set(s[1], s[0].byteLength), new Uint8Array(await (0, i.E)(c, E, u));
}
