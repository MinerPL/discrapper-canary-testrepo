n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(239091), l = n(665692), u = n(689938), c = n(635195);
function d(e) {
    var t;
    let a, d, _, {
            className: E,
            activeCommand: f,
            activeOption: h,
            optionStates: p
        } = e, m = i.useCallback(e => {
            var t;
            let i = null == f ? void 0 : null === (t = f.rootCommand) || void 0 === t ? void 0 : t.id;
            if (null == i) {
                e.preventDefault();
                return;
            }
            (0, s.jW)(e, async () => {
                let {default: e} = await n.e('5396').then(n.bind(n, 731646));
                return t => (0, r.jsx)(e, {
                    ...t,
                    id: i,
                    label: u.Z.Messages.COPY_ID_COMMAND
                });
            });
        }, [null == f ? void 0 : null === (t = f.rootCommand) || void 0 === t ? void 0 : t.id]);
    if (null == f)
        return null;
    if (null != h) {
        let e = p[h.name].lastValidationResult;
        a = h.displayName, d = h.displayDescription, _ = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error;
    } else
        a = ''.concat(l.GI).concat(f.displayName), d = f.displayDescription, _ = null;
    return (0, r.jsxs)('div', {
        className: o()(E, c.bar),
        onContextMenu: m,
        children: [
            (0, r.jsx)('span', {
                className: c.name,
                children: a
            }),
            null != _ ? (0, r.jsx)('span', {
                className: c.error,
                children: _
            }) : (0, r.jsx)('span', {
                className: c.description,
                children: d
            })
        ]
    });
}
