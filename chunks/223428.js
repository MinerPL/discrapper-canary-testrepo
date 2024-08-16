var r = n(585559),
    i = n(771378),
    a = n(778247),
    s = n(780177),
    o = n(585754),
    l = n(957578).Buffer;
function u(e) {
    'object' == typeof e && !l.isBuffer(e) && ((t = e.passphrase), (e = e.key)), 'string' == typeof e && (e = l.from(e));
    var t,
        n,
        u,
        c = a(e, t),
        d = c.tag,
        _ = c.data;
    switch (d) {
        case 'CERTIFICATE':
            u = r.certificate.decode(_, 'der').tbsCertificate.subjectPublicKeyInfo;
        case 'PUBLIC KEY':
            switch ((!u && (u = r.PublicKey.decode(_, 'der')), (n = u.algorithm.algorithm.join('.')))) {
                case '1.2.840.113549.1.1.1':
                    return r.RSAPublicKey.decode(u.subjectPublicKey.data, 'der');
                case '1.2.840.10045.2.1':
                    return (
                        (u.subjectPrivateKey = u.subjectPublicKey),
                        {
                            type: 'ec',
                            data: u
                        }
                    );
                case '1.2.840.10040.4.1':
                    return (
                        (u.algorithm.params.pub_key = r.DSAparam.decode(u.subjectPublicKey.data, 'der')),
                        {
                            type: 'dsa',
                            data: u.algorithm.params
                        }
                    );
                default:
                    throw Error('unknown key id ' + n);
            }
        case 'ENCRYPTED PRIVATE KEY':
            _ = (function (e, t) {
                var n = e.algorithm.decrypt.kde.kdeparams.salt,
                    r = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
                    a = i[e.algorithm.decrypt.cipher.algo.join('.')],
                    u = e.algorithm.decrypt.cipher.iv,
                    c = e.subjectPrivateKey,
                    d = parseInt(a.split('-')[1], 10) / 8,
                    _ = o.pbkdf2Sync(t, n, r, d, 'sha1'),
                    E = s.createDecipheriv(a, _, u),
                    f = [];
                return f.push(E.update(c)), f.push(E.final()), l.concat(f);
            })((_ = r.EncryptedPrivateKey.decode(_, 'der')), t);
        case 'PRIVATE KEY':
            switch ((n = (u = r.PrivateKey.decode(_, 'der')).algorithm.algorithm.join('.'))) {
                case '1.2.840.113549.1.1.1':
                    return r.RSAPrivateKey.decode(u.subjectPrivateKey, 'der');
                case '1.2.840.10045.2.1':
                    return {
                        curve: u.algorithm.curve,
                        privateKey: r.ECPrivateKey.decode(u.subjectPrivateKey, 'der').privateKey
                    };
                case '1.2.840.10040.4.1':
                    return (
                        (u.algorithm.params.priv_key = r.DSAparam.decode(u.subjectPrivateKey, 'der')),
                        {
                            type: 'dsa',
                            params: u.algorithm.params
                        }
                    );
                default:
                    throw Error('unknown key id ' + n);
            }
        case 'RSA PUBLIC KEY':
            return r.RSAPublicKey.decode(_, 'der');
        case 'RSA PRIVATE KEY':
            return r.RSAPrivateKey.decode(_, 'der');
        case 'DSA PRIVATE KEY':
            return {
                type: 'dsa',
                params: r.DSAPrivateKey.decode(_, 'der')
            };
        case 'EC PRIVATE KEY':
            return {
                curve: (_ = r.ECPrivateKey.decode(_, 'der')).parameters.value,
                privateKey: _.privateKey
            };
        default:
            throw Error('unknown key type ' + d);
    }
}
(e.exports = u), (u.signature = r.signature);
