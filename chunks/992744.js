var i = n(735250), a = n(470079), l = n(780384), s = n(481060), r = n(410030), o = n(367907), c = n(984370), u = n(981631), d = n(689938), h = n(574827), p = n(66737), m = n(525377);
t.Z = () => {
    let e = (0, r.ZP)();
    a.useEffect(() => {
        o.ZP.trackWithMetadata(u.rMx.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let t = (0, l.wj)(e) ? p : m;
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsxs)(c.Z, {
                toolbar: (0, i.jsx)(a.Fragment, {}),
                children: [
                    (0, i.jsx)(c.Z.Icon, {
                        icon: s.TextIcon,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(c.Z.Title, { children: d.Z.Messages.GUILD_UNAVAILABLE_HEADER })
                ]
            }),
            (0, i.jsxs)('div', {
                className: h.content,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: h.splashImage,
                        src: t
                    }),
                    (0, i.jsx)(s.Heading, {
                        className: h.splashHeader,
                        variant: 'heading-lg/medium',
                        children: d.Z.Messages.GUILD_UNAVAILABLE_TITLE
                    }),
                    (0, i.jsx)(s.Text, {
                        className: h.splashText,
                        variant: 'text-md/normal',
                        children: d.Z.Messages.GUILD_UNAVAILABLE_BODY
                    })
                ]
            })
        ]
    });
};
