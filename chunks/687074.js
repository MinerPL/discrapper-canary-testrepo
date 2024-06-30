var n = r(815869);
t.exports = function (t, e) {
    var r = this.__data__, _ = n(r, t);
    return _ < 0 ? (++this.size, r.push([
        t,
        e
    ])) : r[_][1] = e, this;
};
