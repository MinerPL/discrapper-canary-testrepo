var r = n(413135).Buffer,
    i = n(988608),
    a = n(35609),
    s = n(168725),
    o = {
        binary: !0,
        hex: !0,
        base64: !0
    };
(t.DiffieHellmanGroup =
    t.createDiffieHellmanGroup =
    t.getDiffieHellman =
        function (e) {
            return new s(new r(a[e].prime, 'hex'), new r(a[e].gen, 'hex'));
        }),
    (t.createDiffieHellman = t.DiffieHellman =
        function e(t, n, a, l) {
            return r.isBuffer(n) || void 0 === o[n] ? e(t, 'binary', n, a) : ((n = n || 'binary'), (l = l || 'binary'), (a = a || new r([2])), !r.isBuffer(a) && (a = new r(a, l)), 'number' == typeof t) ? new s(i(t, a), a, !0) : (!r.isBuffer(t) && (t = new r(t, n)), new s(t, a, !0));
        });
