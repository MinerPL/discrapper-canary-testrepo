n.d(t, {
    I: function () {
        return i;
    }
});
var o = n(333392);
let i = function (e) {
    let { intl: t, t: i } = n(388032),
        l = i[(0, o.runtimeHashMessageKey)(e)],
        a = t.currentLocale;
    t.currentLocale = 'en-US';
    let s = t.string(l);
    return (t.currentLocale = a), s;
};
