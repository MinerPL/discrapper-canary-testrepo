n.d(t, {
    c: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var s = n(481060), a = n(176983);
function r(e) {
    let {
        title: t,
        description: n,
        backgroundImageUrl: r = 'https://cdn.discordapp.com/assets/discovery/generic-hero-background.png'
    } = e;
    return (0, i.jsxs)('div', {
        className: a.hero,
        style: { backgroundImage: 'url('.concat(r, ')') },
        children: [
            (0, i.jsx)('div', { className: a.overlay }),
            (0, i.jsxs)('div', {
                className: a.content,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-xl/semibold',
                        children: t
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: n
                    })
                ]
            })
        ]
    });
}
