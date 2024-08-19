n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(239091),
    l = n(962293),
    u = n(555573),
    c = n(665692),
    d = n(689938),
    _ = n(286378);
function E(e) {
    var t;
    let a,
        E,
        f,
        { className: h, activeCommand: p, activeOption: m, optionStates: I, channelId: T } = e,
        g = i.useCallback(
            (e) => {
                var t;
                let i = null == p ? void 0 : null === (t = p.rootCommand) || void 0 === t ? void 0 : t.id;
                if (null == i) {
                    e.preventDefault();
                    return;
                }
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            id: i,
                            label: d.Z.Messages.COPY_ID_COMMAND
                        });
                });
            },
            [null == p ? void 0 : null === (t = p.rootCommand) || void 0 === t ? void 0 : t.id]
        ),
        S = i.useCallback(() => {
            u.Po({
                channelId: T,
                command: null,
                section: null
            });
        }, [T]);
    if (null == p) return null;
    if (null != m) {
        let e = I[m.name].lastValidationResult;
        (a = m.displayName), (E = m.displayDescription), (f = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error);
    } else (a = ''.concat(c.GI).concat(p.displayName)), (E = p.displayDescription), (f = null);
    return (0, r.jsxs)('div', {
        className: s()(h, _.bar),
        onContextMenu: g,
        children: [
            (0, r.jsxs)('div', {
                className: _.commandInfo,
                children: [
                    (0, r.jsx)('span', {
                        className: _.name,
                        children: a
                    }),
                    null != f
                        ? (0, r.jsx)('span', {
                              className: _.error,
                              children: f
                          })
                        : (0, r.jsx)('span', {
                              className: _.description,
                              children: E
                          })
                ]
            }),
            (0, r.jsx)('div', {
                className: _.actions,
                children: (0, r.jsx)(l.B, { onClick: S })
            })
        ]
    });
}
