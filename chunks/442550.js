n.d(t, {
    f: function () {
        return _;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(780384),
    l = n(481060),
    u = n(410030),
    c = n(689938),
    d = n(668850);
function _(e) {
    let { src: t, size: n, constrain: a = 'height', className: _, alt: E, fallbackSrc: f, 'aria-hidden': h, showTooltip: p = !1 } = e,
        I = (0, u.ZP)(),
        m = ''.concat(n, 'px'),
        [T, S] = i.useState(!1),
        [g, A] = i.useState(!1),
        N = null == f || g;
    if (null == t || (T && N))
        return (0, r.jsx)(l.UnknownGameIcon, {
            size: 'custom',
            width: '100%',
            height: '100%',
            color: (0, o.wj)(I) ? l.tokens.colors.WHITE : l.tokens.colors.BLACK,
            style: { maxWidth: m },
            className: s()(d.contentImage, _)
        });
    let O =
        'height' === a
            ? {
                  maxWidth: m,
                  height: m
              }
            : {
                  maxWidth: m,
                  minHeight: m
              };
    return (0, r.jsx)(
        l.Tooltip,
        {
            'aria-label': E,
            text: E,
            shouldShow: p,
            children: (e) =>
                (0, r.jsx)('img', {
                    ...e,
                    style: O,
                    className: s()(d.contentImage, _),
                    src: T && null != f ? f : t,
                    'aria-hidden': h,
                    alt: null != E ? E : h ? void 0 : c.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
                    onError: (e) => (T ? A(!0) : S(!0))
                })
        },
        'content-image'
    );
}
