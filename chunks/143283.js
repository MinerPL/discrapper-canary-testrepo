var n, _ = r(54640);
var a = (n = /[^.]+$/.exec(_ && _.keys && _.keys.IE_PROTO || '')) ? 'Symbol(src)_1.' + n : '';
t.exports = function (t) {
    return !!a && a in t;
};
