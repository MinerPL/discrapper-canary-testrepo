n.d(t, {
    O: function () {
        return o;
    }
});
var r = n(200651);
n(192379);
var a = n(442837),
    s = n(481060),
    i = n(607070),
    l = n(564032);
function o(e) {
    let { category: t } = e,
        n = (0, a.e7)([i.Z], () => i.Z.useReducedMotion);
    return (0, r.jsx)('div', {
        className: l.banner,
        'aria-label': t.name,
        children: (0, r.jsxs)('div', {
            className: l.mainContent,
            style: { backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/content/f7fcebe03d45107413f90019d20fbece106970e96ff5a01bfe73353e6d91fe1e.png', ')') },
            children: [
                !n &&
                    (0, r.jsx)('img', {
                        src: 'https://cdn.discordapp.com/assets/content/b7658932823f6b897cde41e166798d487c836da43f32d59ff392ecb1c5aee4e8.png',
                        className: l.animatedLayer,
                        alt: '',
                        'aria-hidden': !0
                    }),
                (0, r.jsx)(s.Text, {
                    className: l.summary,
                    variant: 'text-md/normal',
                    children: t.summary
                })
            ]
        })
    });
}
