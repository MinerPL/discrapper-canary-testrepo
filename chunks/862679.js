var i = n(735250), a = n(470079), l = n(873546), s = n(442837), r = n(481060), o = n(433355), c = n(373791), u = n(96413);
t.Z = a.memo(function (e) {
    let {
            message: t,
            subtitle: n,
            countdown: d,
            buttonText: h,
            buttonColor: p,
            buttonSubmitting: m,
            onButtonClick: _,
            imageSrc: f,
            animationSrc: E,
            secondaryButtonText: C,
            onSecondaryButtonClick: g,
            children: I,
            useReducedMotion: x = !1
        } = e, T = (0, s.e7)([o.ZP], () => o.ZP.getState().isMembersOpen);
    if (l.tq && T)
        return null;
    if (null == t)
        return (0, i.jsx)(i.Fragment, { children: a.Children.only(I) });
    let N = null;
    return null != f ? N = (0, i.jsx)('img', {
        alt: '',
        src: f,
        className: u.image
    }) : null != E && (N = (0, i.jsx)(r.LottieAnimation, {
        importData: E,
        shouldAnimate: !x,
        className: u.animation
    })), (0, i.jsxs)('div', {
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
                            null != n && (0, i.jsx)(r.Text, {
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
                    null != C && (0, i.jsx)(r.Button, {
                        className: u.button,
                        size: r.Button.Sizes.SMALL,
                        onClick: g,
                        look: r.Button.Looks.LINK,
                        color: r.Button.Colors.PRIMARY,
                        submitting: m,
                        children: C
                    }),
                    null != h && (0, i.jsx)(r.Button, {
                        className: u.button,
                        innerClassName: u.innerButton,
                        size: r.Button.Sizes.SMALL,
                        onClick: _,
                        submitting: m,
                        color: null != p ? p : r.Button.Colors.PRIMARY,
                        children: h
                    })
                ]
            }),
            null != d && (0, i.jsx)(c.Z, {
                className: u.countdown,
                deadline: d
            })
        ]
    });
});
