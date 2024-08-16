n.d(t, {
    o: function () {
        return a;
    }
});
var s = n(330711);
let a = (e, t) => {
    let n = Math.round(10 * e) / 10;
    if (e < 1000000) return new Intl.NumberFormat(t, { maximumFractionDigits: n % 1 == 0 ? 0 : 1 }).format(e);
    let a = Math.round((e / 1000000) * 10) / 10,
        i = new Intl.NumberFormat(t, { maximumFractionDigits: a % 1 == 0 ? 0 : 1 }).format(e / 1000000);
    return s.Z.Messages.NumberAbbreviations.MILLION.format({ num: i });
};
