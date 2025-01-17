var i = n(735250),
    a = n(470079),
    s = n(873546),
    l = n(442837),
    r = n(481060),
    o = n(346486),
    c = n(433355),
    u = n(841829);
t.Z = a.memo(function (e) {
    let { message: t, subtitle: n, countdown: d, buttonText: h, buttonColor: m, buttonSubmitting: p, onButtonClick: _, imageSrc: f, animationSrc: E, secondaryButtonText: g, onSecondaryButtonClick: C, children: I, useReducedMotion: x = !1 } = e,
        T = (0, l.e7)([c.ZP], () => c.ZP.getState().isMembersOpen);
    if (s.tq && T) return null;
    if (null == t) return (0, i.jsx)(i.Fragment, { children: a.Children.only(I) });
    let N = null;
    return (
        null != f
            ? (N = (0, i.jsx)('img', {
                  alt: '',
                  src: f,
                  className: u.image
              }))
            : null != E &&
              (N = (0, i.jsx)(r.LottieAnimation, {
                  importData: E,
                  shouldAnimate: !x,
                  className: u.animation
              })),
        (0, i.jsxs)('div', {
            className: u.wrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: u.content,
                    children: [
                        N,
                        (0, i.jsxs)('div', {
                            className: u.text,
                            children: [
                                (0, i.jsx)(r.Heading, {
                                    variant: 'heading-md/semibold',
                                    className: u.title,
                                    children: t
                                }),
                                null != n &&
                                    (0, i.jsx)(r.Text, {
                                        color: 'text-muted',
                                        variant: 'text-xs/normal',
                                        children: n
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: u.buttonContainer,
                    children: [
                        null != g &&
                            (0, i.jsx)(r.Button, {
                                className: u.button,
                                size: r.Button.Sizes.SMALL,
                                onClick: C,
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                submitting: p,
                                children: g
                            }),
                        null != h &&
                            (0, i.jsx)(r.Button, {
                                className: u.button,
                                innerClassName: u.innerButton,
                                size: r.Button.Sizes.SMALL,
                                onClick: _,
                                submitting: p,
                                color: null != m ? m : r.Button.Colors.PRIMARY,
                                children: h
                            })
                    ]
                }),
                null != d &&
                    (0, i.jsx)(o.Z, {
                        className: u.countdown,
                        deadline: d
                    })
            ]
        })
    );
});
