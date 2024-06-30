n.d(t, {
    Z: function () {
        return Z;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(399606), o = n(704215), c = n(923462), d = n(481060), u = n(239091), _ = n(100527), E = n(906732), h = n(706140), I = n(294629), m = n(131951), p = n(459273), g = n(242291), T = n(458263), S = n(603074), C = n(981631), N = n(921944), f = n(689938), A = n(707747);
function Z(e) {
    let {
            channel: t,
            iconClassName: a,
            className: Z,
            innerClassName: L,
            ...v
        } = e, {
            mute: O,
            suppress: R
        } = (0, I.Z)(t), x = (0, l.e7)([m.Z], () => m.Z.isDeaf()), P = O || R || x, [b, M] = s.useState(!1), D = t.getGuildId(), y = (0, g.sR)({ isSoundboardButtonDisabled: P }), [j, U] = (0, h.c)(y), {analyticsLocations: G} = (0, E.ZP)(_.Z.SOUNDBOARD_BUTTON);
    function w(e) {
        null != D && (0, u.jW)(e, async () => {
            let {default: e} = await n.e('56049').then(n.bind(n, 338991));
            return t => (0, i.jsx)(e, {
                guildId: D,
                ...t
            });
        });
    }
    let {
            Component: k,
            play: B,
            events: {
                onMouseEnter: H,
                onMouseLeave: V
            }
        } = (0, c.j)(), F = e => (0, i.jsx)(d.Popout, {
            shouldShow: b,
            position: 'top',
            onRequestClose: () => M(!1),
            renderPopout: e => {
                let {closePopout: n} = e;
                return (0, i.jsx)(S.Z, {
                    guildId: D,
                    channel: t,
                    onClose: n,
                    gridNotice: j === o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, i.jsx)(T.o, {
                        onClose: n,
                        markAsDismissed: U
                    }),
                    analyticsSource: 'rtc panel'
                });
            },
            children: t => (0, i.jsx)('div', {
                children: (0, i.jsx)(d.Button, {
                    ...e,
                    ...t,
                    className: r()(Z, {
                        [A.buttonActive]: b,
                        [A.disabled]: P
                    }),
                    wrapperClassName: Z,
                    innerClassName: L,
                    disabled: P,
                    onClick: () => {
                        var t, n;
                        null != j && j !== o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && U(N.L.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), M(!b), B();
                    },
                    onMouseEnter: t => {
                        var n, i;
                        null === (n = v.onMouseEnter) || void 0 === n || n.call(v, t), null == e || null === (i = e.onMouseEnter) || void 0 === i || i.call(e), H();
                    },
                    onMouseLeave: t => {
                        var n, i;
                        null === (n = v.onMouseLeave) || void 0 === n || n.call(v, t), null == e || null === (i = e.onMouseLeave) || void 0 === i || i.call(e), V();
                    },
                    onContextMenu: w,
                    fullWidth: !0,
                    size: d.Button.Sizes.SMALL,
                    ...v,
                    children: (0, i.jsx)(k, {
                        className: a,
                        size: 'sm',
                        color: b ? 'white' : d.tokens.colors.INTERACTIVE_ACTIVE
                    })
                })
            })
        }), Y = s.useCallback(() => {
            !P && M(!b);
        }, [
            P,
            b
        ]);
    return (0, p.yp)({
        event: C.CkL.TOGGLE_SOUNDBOARD,
        handler: Y
    }), (0, i.jsx)(E.Gt, {
        value: G,
        children: (0, i.jsx)(d.Tooltip, {
            text: function () {
                if (O)
                    return f.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
                if (R)
                    return f.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
                if (x)
                    return f.Z.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
                return f.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD;
            }(),
            children: e => F(e)
        })
    });
}
