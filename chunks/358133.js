r.d(e, {
    _: function () {
        return n;
    }
});
let n = (t, e, r) => {
    let n, _;
    return a => {
        e.value >= 0 && (a || r) && ((_ = e.value - (n || 0)) || void 0 === n) && (n = e.value, e.delta = _, t(e));
    };
};
