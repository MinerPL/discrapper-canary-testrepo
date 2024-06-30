var r = n(735250), i = n(470079), a = n(335854), o = n(481060), s = n(626135), l = n(981631), u = n(689938);
t.Z = e => {
    let {
            href: t,
            className: n,
            iconClassName: c,
            rel: d,
            target: _,
            mimeType: E,
            fileName: f,
            focusProps: h,
            onClick: p,
            ...m
        } = e, I = i.useMemo(() => a.X.getDefaultLinkInterceptor(t), [t]), T = i.useCallback(e => {
            s.default.track(l.rMx.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: null == E ? void 0 : E[0],
                attachment_subtype: null == E ? void 0 : E[1]
            }), null == p || p(), null == I || I(e);
        }, [
            I,
            E,
            p
        ]);
    return null != f ? (0, r.jsx)(o.Anchor, {
        href: t,
        onClick: T,
        target: _,
        rel: d,
        className: n,
        'aria-label': u.Z.Messages.DOWNLOAD,
        focusProps: h,
        ...m,
        children: f
    }) : (0, r.jsx)(o.Anchor, {
        href: t,
        onClick: T,
        target: _,
        rel: d,
        className: n,
        'aria-label': u.Z.Messages.DOWNLOAD,
        focusProps: h,
        ...m,
        children: (0, r.jsx)(o.DownloadIcon, {
            size: 'md',
            color: 'currentColor',
            className: c
        })
    });
};
