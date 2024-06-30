r.d(e, {
    F: function () {
        return E;
    }
});
var n = r(358133), _ = r(233863), a = r(416097), i = r(544457), o = r(527475);
let E = t => {
    let e;
    let r = (0, _.Y)(), E = (0, a.I)('FID'), s = t => {
            t.startTime < r.firstHiddenTime && (E.value = t.processingStart - t.startTime, E.entries.push(t), e(!0));
        }, c = t => {
            t.forEach(s);
        }, I = (0, i.N)('first-input', c);
    e = (0, n._)(t, E), I && (0, o.u)(() => {
        c(I.takeRecords()), I.disconnect();
    }, !0);
};
