n.d(t, {
    Vq: function () {
        return x;
    },
    c8: function () {
        return k;
    },
    oQ: function () {
        return C;
    }
});
var a = n(735250);
n(470079);
var r = n(120356), i = n.n(r), l = n(692547), s = n(780384), d = n(481060), o = n(410030), u = n(285952), c = n(63063), f = n(211242), h = n(981631), m = n(689938), _ = n(950651), b = n(51125), g = n(47268);
function p(e) {
    let {className: t} = e, n = (0, o.ZP)(), r = (0, s.wj)(n) ? b : g;
    return (0, a.jsxs)('div', {
        className: i()(_.container, t),
        children: [
            (0, a.jsx)(d.Heading, {
                className: _.header,
                variant: 'heading-xl/semibold',
                children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
            }),
            (0, a.jsxs)(d.Text, {
                className: _.description,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: [
                    (0, a.jsx)('p', { children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY }),
                    (0, a.jsx)('p', { children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({ helpdeskArticle: c.Z.getArticleURL(h.BhN.BLOCKED_PAYMENTS) }) })
                ]
            }),
            (0, a.jsx)('img', {
                src: r,
                className: _.splashImage,
                alt: 'Blocked Payments'
            })
        ]
    });
}
function k() {
    return (0, a.jsx)(p, { className: _.settings });
}
function x(e) {
    let {onClose: t} = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(d.ModalHeader, {
                className: _.blockedPaymentsModalHeader,
                justify: u.Z.Justify.END,
                children: (0, a.jsx)(d.ModalCloseButton, { onClick: t })
            }),
            (0, a.jsx)(d.ModalContent, {
                className: _.blockedPaymentsModalContent,
                children: (0, a.jsx)(p, { className: _.modal })
            })
        ]
    });
}
function C(e) {
    let {className: t} = e;
    return (0, f.Q)() ? (0, a.jsxs)(d.Card, {
        className: i()(_.blockedPaymentsWarning, t),
        type: d.Card.Types.CUSTOM,
        children: [
            (0, a.jsx)(d.CircleExclamationPointIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                className: _.blockedPaymentsWarningIcon,
                color: l.Z.unsafe_rawColors.YELLOW_300.css
            }),
            (0, a.jsx)(d.Text, {
                variant: 'text-sm/normal',
                children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({ helpdeskArticle: c.Z.getArticleURL(h.BhN.BLOCKED_PAYMENTS) })
            })
        ]
    }) : null;
}
