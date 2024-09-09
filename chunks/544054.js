var n = r(524556),
    a = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    var t = this.__data__;
    if (n) {
        var r = t[e];
        return '__lodash_hash_undefined__' === r ? void 0 : r;
    }
    return a.call(t, e) ? t[e] : void 0;
};
