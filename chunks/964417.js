var r = n(650359),
    i = n(546745);
(e.exports = function (e, t, n) {
    if (i()) return Reflect.construct.apply(null, arguments);
    var a = [null];
    a.push.apply(a, t);
    var s = new (e.bind.apply(e, a))();
    return n && r(s, n.prototype), s;
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
