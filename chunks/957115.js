o.d(t, {
    B: function () {
        return s;
    }
}), o(653041);
var n = o(392711), a = o.n(n);
let s = (e, t) => {
    let o = a().shuffle(e), n = o.findIndex(e => e.value === t);
    if (n > -1) {
        let e = o[n];
        o.splice(n, 1), o.push(e);
    }
    return o;
};
