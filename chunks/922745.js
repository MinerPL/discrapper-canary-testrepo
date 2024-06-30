n.d(t, {
    Z: function () {
        return T;
    },
    r: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(442837), s = n(692547), l = n(215569), u = n(481060), c = n(19780), d = n(285952), _ = n(470441), E = n(727218), f = n(540028), h = n(507675), p = n(689938), m = n(910310);
function I(e) {
    let {
            title: t,
            onJumpToChannel: n,
            idle: i,
            preventIdleComponent: a
        } = e, l = (0, o.e7)([c.Z], () => c.Z.getChannelId()), d = null != l ? (0, r.jsx)(f.Z, {
            voiceChannelId: l,
            idle: i
        }) : null;
    return (0, r.jsxs)(a, {
        className: m.headerIdleContainer,
        children: [
            (0, r.jsxs)(u.Clickable, {
                className: m.headerTitle,
                onClick: n,
                children: [
                    (0, r.jsx)(u.ArrowSmallLeftIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        'aria-label': p.Z.Messages.OPEN_IN_THEATER,
                        className: m.backButton,
                        width: 20,
                        height: 20
                    }),
                    (0, r.jsx)(E.Z, {
                        className: m.headerText,
                        size: E.Z.Sizes.SIZE_16,
                        color: s.Z.unsafe_rawColors.WHITE_500.css,
                        children: t
                    })
                ]
            }),
            d
        ]
    });
}
function T(e) {
    let {
        children: t,
        idle: n,
        onJumpToChannel: i,
        backgroundKey: o,
        onActive: s,
        onForceIdle: u,
        renderBottomLeftControls: c,
        renderBottomRightControls: E,
        screenMessage: f,
        hideControls: p = !1,
        className: T,
        innerClassName: g,
        ...S
    } = e;
    return (0, r.jsxs)('div', {
        onMouseMove: s,
        onMouseDown: s,
        onMouseLeave: u,
        className: a()(m.pictureInPictureVideo, { [m.idle]: n }, T),
        onDoubleClick: i,
        children: [
            (0, r.jsx)(l.W, {
                children: (0, r.jsx)(_.B, {
                    className: g,
                    children: t
                }, o)
            }),
            null != f ? (0, r.jsx)(h.Z, {
                size: 'small',
                ...f
            }) : null,
            !p && (0, r.jsxs)('div', {
                className: m.videoControls,
                children: [
                    (0, r.jsx)('div', {
                        className: m.topControls,
                        children: (0, r.jsx)(I, {
                            idle: n,
                            onJumpToChannel: i,
                            ...S
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: m.bottomControls,
                        children: [
                            (0, r.jsx)(d.Z, {
                                grow: 0,
                                shrink: 1,
                                basis: '50%',
                                align: d.Z.Align.CENTER,
                                className: m.bottomLeftControls,
                                children: null == c ? void 0 : c()
                            }),
                            (0, r.jsx)(d.Z, {
                                grow: 0,
                                shrink: 1,
                                justify: d.Z.Justify.END,
                                basis: '50%',
                                align: d.Z.Align.CENTER,
                                children: null == E ? void 0 : E()
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
