var n = s(735250);
s(470079);
var a = s(120356), i = s.n(a), r = s(780384), o = s(481060), l = s(410030), c = s(726542), d = s(122021), _ = s(231757), E = s(626135), u = s(981631), T = s(165350);
t.Z = e => {
    let {
            disabled: t = !1,
            type: s,
            className: a,
            innerClassName: I,
            onConnect: S
        } = e, N = (0, l.ZP)(), C = c.Z.get((0, d.rR)(s));
    return (0, n.jsx)(o.Tooltip, {
        text: C.name,
        children: e => {
            let {
                onMouseEnter: l,
                onMouseLeave: d
            } = e;
            return (0, n.jsx)('div', {
                className: i()(T.wrapper, a),
                children: (0, n.jsx)(o.FocusRing, {
                    children: (0, n.jsx)('button', {
                        onMouseEnter: l,
                        onMouseLeave: d,
                        className: i()(T.inner, I),
                        type: 'button',
                        disabled: t,
                        style: { backgroundImage: 'url(\''.concat((0, r.wj)(N) ? C.icon.darkSVG : C.icon.lightSVG, '\')') },
                        onClick: null != S ? S : () => function (e) {
                            let t = c.Z.get(e);
                            (0, _.Z)({
                                platformType: t.type,
                                location: 'Friends List'
                            }), E.default.track(u.rMx.ACCOUNT_LINK_STEP, {
                                previous_step: 'desktop connections',
                                current_step: 'desktop oauth',
                                platform_type: t.type
                            });
                        }(s),
                        'aria-label': C.name
                    })
                })
            });
        }
    });
};
