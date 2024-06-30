var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(442837), r = n(692547), o = n(481060), c = n(706454), d = n(930153), u = n(113434), _ = n(524824), E = n(330039), m = n(567345);
t.Z = function (e) {
    let {
            className: t,
            color: n = r.Z.colors.WHITE,
            quest: a,
            isInventory: I
        } = e, T = (0, l.e7)([c.default], () => c.default.locale), {percentComplete: h} = (0, u.Rf)(a), N = 100 * h, f = (0, _.r)(a);
    return f && !I ? (0, i.jsx)(E.Z, {}) : (0, i.jsxs)('div', {
        className: s()(m.wrapper, t),
        style: { color: n.css },
        children: [
            (0, i.jsxs)('div', {
                className: m.percentCompleteWrapper,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/semibold',
                        className: m.percentCompleteLabel,
                        color: 'none',
                        children: (0, d.T3)(T, h, { roundingMode: 'floor' })
                    }),
                    (0, i.jsx)('div', {
                        className: m.percentCompleteLabelOffset,
                        style: { width: ''.concat(100 - N, '%') }
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: m.progressBar,
                role: 'progressbar',
                'aria-valuenow': N,
                children: (0, i.jsx)('div', {
                    className: m.progressBarFill,
                    style: { width: ''.concat(N, '%') }
                })
            }),
            f && (0, i.jsx)(E.Z, { isInventory: I })
        ]
    });
};
