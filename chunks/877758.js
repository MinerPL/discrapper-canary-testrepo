n.d(t, {
    Z: function () {
        return i;
    }
});
var a = n(735250);
n(470079);
var s = n(120356), o = n.n(s), r = n(785997), l = n(880173);
function i(e) {
    let {step: t} = e, n = t === r.F.AGE_GATE, s = t === r.F.CHOOSE_TEMPLATE || t === r.F.CREATION_INTENT, i = t === r.F.CUSTOMIZE_GUILD, c = t === r.F.CHANNEL_PROMPT || t === r.F.JOIN_GUILD, d = i || c, u = s || d;
    return (0, a.jsxs)('div', {
        className: l.sidebar,
        children: [
            (0, a.jsx)('div', { className: o()(l.step1, { [l.show]: n }) }),
            (0, a.jsx)('div', { className: o()(l.step24Clouds, { [l.show]: u }) }),
            (0, a.jsx)('div', { className: o()(l.step34Flag, { [l.show]: d }) }),
            (0, a.jsx)('div', { className: o()(l.step24Base, { [l.show]: u }) }),
            (0, a.jsx)('div', { className: o()(l.step24Ground, { [l.show]: u }) }),
            (0, a.jsx)('div', { className: o()(l.step2Base, { [l.show]: s }) }),
            (0, a.jsx)('div', { className: o()(l.step2Character, { [l.show]: s }) }),
            (0, a.jsx)('div', { className: o()(l.step34Base, { [l.show]: d }) }),
            (0, a.jsx)('div', { className: o()(l.step3Character, { [l.show]: i }) }),
            (0, a.jsx)('div', { className: o()(l.step4Character, { [l.show]: c }) }),
            (0, a.jsx)('div', { className: o()(l.step24Foreground, { [l.show]: u }) })
        ]
    });
}
