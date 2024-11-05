n.d(t, {
    n: function () {
        return o;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(70956),
    s = n(388032);
let o = (e) => {
    let t = Math.max(0, i()(e).diff(i()(), 's'));
    if (t < 2 * a.Z.Seconds.HOUR) {
        let e = Math.round(t / a.Z.Seconds.MINUTE);
        return s.intl.formatToPlainString(s.t['2JbxRE'], { count: e });
    }
    if (t < a.Z.Seconds.DAY) {
        let e = Math.round(t / a.Z.Seconds.HOUR);
        return s.intl.formatToPlainString(s.t.V9Ebys, { count: e });
    }
    {
        let e = Math.round(t / a.Z.Seconds.DAY);
        return s.intl.formatToPlainString(s.t.OQFxHh, { count: e });
    }
};
