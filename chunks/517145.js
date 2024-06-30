var r = n(957578).Buffer, i = n(28704), a = n(136924).ec, o = n(223428), s = n(733345);
function l(e, t) {
    if (0 >= e.cmpn(0) || e.cmp(t) >= t)
        throw Error('invalid sig');
}
e.exports = function (e, t, n, u, c) {
    var d = o(n);
    if ('ec' === d.type) {
        if ('ecdsa' !== u && 'ecdsa/rsa' !== u)
            throw Error('wrong public key type');
        return function (e, t, n) {
            var r = s[n.data.algorithm.curve.join('.')];
            if (!r)
                throw Error('unknown curve ' + n.data.algorithm.curve.join('.'));
            var i = new a(r), o = n.data.subjectPrivateKey.data;
            return i.verify(t, e, o);
        }(e, t, d);
    }
    if ('dsa' === d.type) {
        if ('dsa' !== u)
            throw Error('wrong public key type');
        return function (e, t, n) {
            var r = n.data.p, a = n.data.q, s = n.data.g, u = n.data.pub_key, c = o.signature.decode(e, 'der'), d = c.s, _ = c.r;
            l(d, a), l(_, a);
            var E = i.mont(r), f = d.invm(a);
            return 0 === s.toRed(E).redPow(new i(t).mul(f).mod(a)).fromRed().mul(u.toRed(E).redPow(_.mul(f).mod(a)).fromRed()).mod(r).mod(a).cmp(_);
        }(e, t, d);
    }
    if ('rsa' !== u && 'ecdsa/rsa' !== u)
        throw Error('wrong public key type');
    t = r.concat([
        c,
        t
    ]);
    for (var _ = d.modulus.byteLength(), E = [1], f = 0; t.length + E.length + 2 < _;)
        E.push(255), f++;
    E.push(0);
    for (var h = -1; ++h < t.length;)
        E.push(t[h]);
    E = r.from(E);
    var p = i.mont(d.modulus);
    e = (e = new i(e).toRed(p)).redPow(new i(d.publicExponent)), e = r.from(e.fromRed().toArray());
    var m = f < 8 ? 1 : 0;
    for (_ = Math.min(e.length, E.length), e.length !== E.length && (m = 1), h = -1; ++h < _;)
        m |= e[h] ^ E[h];
    return 0 === m;
};
