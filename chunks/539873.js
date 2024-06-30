n.d(t, {
    Z: function () {
        return A;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(570140), l = n(605236), u = n(837741), c = n(804545), d = n(587446), _ = n(996073), E = n(153124), f = n(327943), h = n(997945), p = n(401460), m = n(441319), I = n(921944), T = n(526761), g = n(689938), S = n(776327);
function A(e) {
    let {
            className: t,
            disabled: n,
            renderCTAButtons: A
        } = e, [N, v] = (0, a.Wu)([f.Z], () => [
            f.Z.getCurrentDesktopIcon(),
            f.Z.isEditorOpen
        ]), O = i.useRef(null);
    (0, _.Z)(O, T.h1.CUSTOM_APP_ICONS);
    let R = (0, E.Dt)(), C = (0, o.useRadioGroup)({
            orientation: 'horizontal',
            labelledBy: R
        }), y = e => {
            s.Z.dispatch({
                type: 'APP_ICON_UPDATED',
                id: e
            });
            let t = h.Mw.get(e);
            null != t && (0, l.EW)(t, { dismissAction: I.L.TAKE_ACTION });
        }, D = 'AppIconSelectionGroup', {enabled: L} = (0, u.J)({ location: D }), {enabled: b} = (0, c._)({ location: D }), M = (e, t) => {
            let n = !1;
            switch (t) {
            case h.Ru.BLURPLE_TWILIGHT:
                n = L;
                break;
            case h.Ru.IN_RAINBOWS:
            case h.Ru.MIDNIGHT_PRISM:
            case h.Ru.COLOR_WAVE:
                n = b;
                break;
            default:
                n = !0;
            }
            return n && !0 !== e;
        }, P = i.useMemo(() => e => {
            let t = h.Mw.get(e), r = null != t && !(0, l.un)(t);
            return n && r && setTimeout(() => (0, l.EW)(t, { dismissAction: I.L.AUTO_DISMISS }), 5000), r;
        }, [n]);
    return (0, r.jsx)('div', {
        ref: O,
        children: (0, r.jsx)('div', {
            ...C,
            className: S.__invalid_container,
            children: (0, r.jsxs)('div', {
                className: t,
                children: [
                    (0, r.jsxs)('div', {
                        className: S.header,
                        children: [
                            (0, r.jsxs)('div', {
                                className: S.headings,
                                children: [
                                    v ? null : (0, r.jsxs)('div', {
                                        className: S.title,
                                        children: [
                                            (0, r.jsx)(o.Heading, {
                                                variant: 'text-md/medium',
                                                children: g.Z.Messages.APP_ICON_SETTINGS_TITLE
                                            }),
                                            (0, r.jsx)(d.Z, { className: S.premiumIcon })
                                        ]
                                    }),
                                    (0, r.jsx)(o.Heading, {
                                        variant: 'text-sm/normal',
                                        children: g.Z.Messages.APP_ICON_SETTINGS_DESCRIPTION
                                    })
                                ]
                            }),
                            null == A ? void 0 : A()
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: S.presets,
                        children: m.UZ.filter(e => {
                            let {
                                isHidden: t,
                                id: n
                            } = e;
                            return M(t, n);
                        }).map((e, t) => (0, r.jsx)(p.Z, {
                            icon: e,
                            isSelected: N === e.id,
                            onSelect: e => y(e),
                            disabled: n,
                            tabIndex: 0 !== t || n ? void 0 : 0,
                            isNew: P(e.id)
                        }, e.id))
                    })
                ]
            })
        })
    });
}
