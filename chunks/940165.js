t.d(n, {
    Z: function () {
        return I;
    }
});
var a = t(735250);
t(470079);
var o = t(120356), s = t.n(o), i = t(793030), c = t(481060), r = t(759198), l = t(552958), _ = t(767157), C = t(689938), O = t(16561);
function I(e) {
    let {
            label: n,
            className: t,
            description: o,
            soundpack: I,
            location: p
        } = e, {
            playSound: M,
            isPlaying: T
        } = (0, l.Z)();
    return (0, a.jsxs)(c.Clickable, {
        'aria-label': C.Z.Messages.PLAY,
        className: s()(O.container, t, { [O.containerActive]: T }),
        onClick: () => {
            (0, _.Z)(I, p), M(I);
        },
        children: [
            (0, a.jsx)(c.CirclePlayIcon, {
                className: O.playButton,
                color: T ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_NORMAL
            }),
            (0, a.jsxs)('div', {
                className: O.textContainer,
                children: [
                    (0, a.jsx)(r.Z, {
                        variant: 'text-md/medium',
                        children: n
                    }),
                    (0, a.jsx)(i.x, {
                        variant: 'text-sm/normal',
                        children: o
                    })
                ]
            })
        ]
    });
}
