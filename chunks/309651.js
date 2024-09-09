t.d(n, {
    x: function () {
        return r;
    }
}),
    t(411104),
    t(518263),
    t(970173),
    t(520712),
    t(268111),
    t(941497),
    t(32026),
    t(480839),
    t(744285),
    t(492257),
    t(873817);
async function r(e, n, t) {
    if (0 !== e) throw Error('unsupported fingerprint format version');
    if (0 === n.byteLength) throw Error('zero-length key');
    if (0 === t.length) throw Error('zero-length user ID');
    let r = BigInt(t);
    if (r < 0n || r >= 2n ** 64n) throw Error('user ID out of range');
    let i = new Uint8Array(2 + n.byteLength + 8);
    i.set(n, 2);
    let E = new DataView(i.buffer);
    return E.setUint16(0, e), E.setBigUint64(2 + n.byteLength, r), i;
}
