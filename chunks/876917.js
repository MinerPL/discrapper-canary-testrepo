s(47120);
var i = s(735250), n = s(470079), l = s(120356), a = s.n(l), r = s(802433), o = s(680295), d = s(895173), u = s(241822);
t.Z = e => {
    let {
            profileEffectId: t,
            isHovering: s,
            forCollectedModal: l = !1,
            isPurchased: c,
            removeSetHeight: h = !1
        } = e, p = l ? 250 : 0.1, [f, m] = n.useState(!0);
    return (n.useEffect(() => {
        if (!0 !== l)
            m(!1);
        else {
            let e = setTimeout(() => {
                m(!1);
            }, p);
            return () => {
                clearTimeout(e);
            };
        }
    }, [
        p,
        l
    ]), null != t) ? (0, i.jsxs)('div', {
        className: a()(d.previewContainer, {
            [d.previewContainerAnimation]: l,
            [d.previewContainerSetHeight]: !h
        }),
        children: [
            (0, i.jsx)('img', {
                src: u,
                alt: ' ',
                className: l ? d.previewForCollected : d.preview,
                'aria-hidden': !0
            }),
            !f && (0, i.jsx)('div', {
                className: c ? d.purchasedEffect : void 0,
                children: (0, i.jsx)(o.Z, {
                    profileEffectId: t,
                    useThumbnail: !0,
                    autoPlay: l,
                    restartMethod: r.j.FromStart,
                    resetOnHover: !0,
                    isHovering: s,
                    introDelay: p,
                    useOpacityOnHover: !1,
                    shopPreview: !0
                })
            })
        ]
    }) : null;
};
