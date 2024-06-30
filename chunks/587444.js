n.d(t, {
    Z: function () {
        return p;
    },
    u: function () {
        return g;
    }
});
var s = n(735250);
n(470079);
var r = n(120356), i = n.n(r), a = n(692547), l = n(481060), o = n(388905), c = n(285952), u = n(981631), d = n(689938), h = n(595927), _ = n(83922), E = n(331651);
function g(e) {
    let {
        text: t,
        buttonCta: r,
        onClick: u
    } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(o.Ee, { src: n(689411) }),
            (0, s.jsx)(o.Dx, {
                className: i()(E.marginTop20, E.marginBottom8, _.flexCenter),
                children: d.Z.Messages.DISCORD_DESC_SHORT
            }),
            (0, s.jsx)(o.DK, {
                className: E.marginBottom40,
                children: d.Z.Messages.DISCORD_DESC_LONG
            }),
            (0, s.jsxs)(l.Card, {
                className: h.card,
                type: l.Card.Types.CUSTOM,
                children: [
                    (0, s.jsx)('img', {
                        alt: '',
                        className: h.cardAccentLeft,
                        src: n(70519)
                    }),
                    (0, s.jsx)('img', {
                        alt: '',
                        className: h.cardAccentRight,
                        src: n(806848)
                    }),
                    (0, s.jsxs)(c.Z, {
                        className: h.cardContents,
                        direction: c.Z.Direction.VERTICAL,
                        align: c.Z.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, s.jsx)(l.Text, {
                                tag: 'strong',
                                className: h.buttonTitle,
                                variant: 'text-md/normal',
                                style: { color: a.Z.unsafe_rawColors.PRIMARY_300.css },
                                children: t
                            }),
                            (0, s.jsx)(o.zx, {
                                className: h.button,
                                onClick: u,
                                children: r
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function p(e) {
    let {
        text: t,
        buttonCta: n,
        theme: r = u.BRd.DARK,
        onClick: i
    } = e;
    return (0, s.jsx)(o.ZP, {
        theme: r,
        children: (0, s.jsx)(g, {
            text: t,
            buttonCta: n,
            onClick: i
        })
    });
}
