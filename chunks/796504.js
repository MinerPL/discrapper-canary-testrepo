t.r(n), t.d(n, {
    default: function () {
        return h;
    }
});
var r = t(735250), l = t(470079), a = t(442837), o = t(481060), i = t(668274), s = t(807693), c = t(285952), u = t(729035), d = t(689938), f = t(648668);
function h(e) {
    var n;
    let {
            eulaId: t,
            transitionState: h,
            onClose: p
        } = e, g = (0, a.e7)([s.Z], () => s.Z.getEULA(t));
    l.useEffect(() => {
        (0, i.N)(t);
    }, [t]);
    let m = null !== (n = null == g ? void 0 : g.name) && void 0 !== n ? n : d.Z.Messages.LOADING, b = null != g ? (0, r.jsx)(u.Z, {
            children: g.content,
            className: f.markdown
        }) : (0, r.jsx)(o.Spinner, { className: f.spinner });
    return (0, r.jsxs)(o.ModalRoot, {
        transitionState: h,
        size: o.ModalSize.SMALL,
        'aria-label': m,
        children: [
            (0, r.jsxs)(o.ModalHeader, {
                justify: c.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: 'heading-lg/semibold',
                        children: m
                    }),
                    (0, r.jsx)(o.ModalCloseButton, { onClick: p })
                ]
            }),
            (0, r.jsx)(o.ModalContent, { children: b })
        ]
    });
}
