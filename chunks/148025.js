var r, i, a, o, s = n(192853), l = n(703825)();
if (l) {
    r = s('Object.prototype.hasOwnProperty'), i = s('RegExp.prototype.exec'), a = {};
    var u = function () {
        throw a;
    };
    o = {
        toString: u,
        valueOf: u
    }, 'symbol' == typeof Symbol.toPrimitive && (o[Symbol.toPrimitive] = u);
}
var c = s('Object.prototype.toString'), d = Object.getOwnPropertyDescriptor;
e.exports = l ? function (e) {
    if (!e || 'object' != typeof e)
        return !1;
    var t = d(e, 'lastIndex');
    if (!(t && r(t, 'value')))
        return !1;
    try {
        i(e, o);
    } catch (e) {
        return e === a;
    }
} : function (e) {
    return !!e && ('object' == typeof e || 'function' == typeof e) && '[object RegExp]' === c(e);
};
