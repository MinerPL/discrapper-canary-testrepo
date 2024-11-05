n.d(t, {
    K: function () {
        return o;
    }
});
var r = n(200651),
    i = n(481060),
    a = n(982330),
    s = n(701865);
function o(e) {
    let { location: t, contextKey: o, onCloseCallback: l, ...u } = e,
        c = (0, a.K)(t);
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = c ? await n.e('39476').then(n.bind(n, 97594)) : await n.e('87267').then(n.bind(n, 950120));
            return (t) =>
                (0, r.jsx)(e, {
                    ...t,
                    ...u
                });
        },
        {
            modalKey: s.U,
            contextKey: o,
            onCloseCallback: l
        }
    );
}
