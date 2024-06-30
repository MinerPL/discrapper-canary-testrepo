var n = r(815869), _ = Array.prototype.splice;
t.exports = function (t) {
    var e = this.__data__, r = n(e, t);
    return !(r < 0) && (r == e.length - 1 ? e.pop() : _.call(e, r, 1), --this.size, !0);
};
