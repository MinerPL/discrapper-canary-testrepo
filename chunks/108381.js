var r = n(689118),
    i = n(292735),
    a = n(335613),
    s = n(315893),
    o = n(764900);
function l(e) {
    o.call(this, 'digest'), (this._hash = e);
}
r(l, o),
    (l.prototype._update = function (e) {
        this._hash.update(e);
    }),
    (l.prototype._final = function () {
        return this._hash.digest();
    }),
    (e.exports = function (e) {
        return 'md5' === (e = e.toLowerCase()) ? new i() : 'rmd160' === e || 'ripemd160' === e ? new a() : new l(s(e));
    });
