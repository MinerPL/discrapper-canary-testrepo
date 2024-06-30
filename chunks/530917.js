var r = n(413135).Buffer, i = n(28704), a = n(706178);
function o(e) {
    var t, n = e.modulus.byteLength();
    do
        t = new i(a(n));
    while (t.cmp(e.modulus) >= 0 || !t.umod(e.prime1) || !t.umod(e.prime2));
    return t;
}
function s(e, t) {
    var n, a, s = {
            blinder: (a = o(n = t)).toRed(i.mont(n.modulus)).redPow(new i(n.publicExponent)).fromRed(),
            unblinder: a.invm(n.modulus)
        }, l = t.modulus.byteLength(), u = new i(e).mul(s.blinder).umod(t.modulus), c = u.toRed(i.mont(t.prime1)), d = u.toRed(i.mont(t.prime2)), _ = t.coefficient, E = t.prime1, f = t.prime2, h = c.redPow(t.exponent1).fromRed(), p = d.redPow(t.exponent2).fromRed(), m = h.isub(p).imul(_).umod(E).imul(f);
    return p.iadd(m).imul(s.unblinder).umod(t.modulus).toArrayLike(r, 'be', l);
}
s.getr = o, e.exports = s;
