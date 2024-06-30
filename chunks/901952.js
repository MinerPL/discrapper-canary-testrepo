n.d(t, {
    Z: function () {
        return L;
    }
}), n(411104), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(481060), l = n(493683), u = n(904245), c = n(906732), d = n(541716), _ = n(752305), E = n(893718), f = n(957730), h = n(24311), p = n(131704), m = n(592125), I = n(5192), T = n(838440), g = n(332390), S = n(785717), A = n(993409), N = n(765365), v = n(981631), O = n(689938), R = n(717633), C = n(682583);
let y = (0, p.kt)({
        id: '1',
        type: v.d4z.DM
    }), D = async e => {
        let {
                userId: t,
                content: n,
                location: r
            } = e, {
                valid: i,
                failureReason: a
            } = await (0, T.v)({
                type: d.I.NORMAL,
                content: n,
                channel: null
            });
        if (!i)
            throw Error(a);
        let o = await l.Z.openPrivateChannel(t, !1, !1, r), s = m.Z.getChannel(o);
        if (null == s)
            throw Error('Failed to open private channel');
        let c = f.ZP.parse(s, n);
        return u.Z.sendMessage(s.id, c);
    };
function L(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            onClose: u
        } = e, {
            analyticsLocations: f,
            newestAnalyticsLocation: p
        } = (0, c.ZP)(), {trackUserProfileAction: m} = (0, S.KZ)(), {
            messageCtaEnabled: T,
            activeInviteToCallCtaEnabled: v,
            persistentCallCtaEnabled: L
        } = (0, g.l)({ location: 'BiteSizeProfileDirectMessageSection' }), b = (0, N.Z)({
            user: t,
            onClose: u
        }), [M, P] = i.useState(''), [U, w] = i.useState((0, _.JM)(M)), x = i.useRef(!1), G = () => {
            m({ action: 'SEND_MESSAGE' }), l.Z.openPrivateChannel(t.id, !1, !1, p), null == u || u();
        }, k = (0, r.jsxs)('div', {
            className: C.menuItemLabel,
            children: [
                (0, r.jsx)(s.PhoneCallIcon, { size: 'xs' }),
                ' ',
                O.Z.Messages.START_VOICE_CALL
            ]
        }), B = (0, h.Z)({
            user: t,
            label: k,
            id: 'voice-call',
            onCall: () => {
                m({ action: 'VOICE_CALL' }), null == u || u();
            }
        }), F = (0, r.jsxs)('div', {
            className: C.menuItemLabel,
            children: [
                (0, r.jsx)(s.VideoIcon, { size: 'xs' }),
                ' ',
                O.Z.Messages.START_VIDEO_CALL
            ]
        }), V = (0, h.Z)({
            user: t,
            label: F,
            joinCallVideo: !0,
            id: 'video-call',
            onCall: () => {
                m({ action: 'VIDEO_CALL' }), null == u || u();
            }
        }), H = (0, r.jsx)(c.Gt, {
            value: f,
            children: (0, r.jsx)(s.Popout, {
                position: 'bottom',
                renderPopout: e => {
                    let {closePopout: t} = e;
                    return (0, r.jsx)(s.Menu, {
                        navId: 'user-profile-action-call-button',
                        onSelect: void 0,
                        onClose: t,
                        'aria-label': O.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
                        children: (0, r.jsxs)(s.MenuGroup, {
                            children: [
                                B,
                                V
                            ]
                        })
                    });
                },
                children: e => {
                    let {
                        onClick: t,
                        ...n
                    } = e;
                    return (0, r.jsx)(s.Button, {
                        fullWidth: !0,
                        size: s.Button.Sizes.SMALL,
                        onClick: e => {
                            m({ action: 'PRESS_CALL' }), t(e);
                        },
                        look: s.Button.Looks.BLANK,
                        className: C.engagementExpButton,
                        ...n,
                        children: (0, r.jsxs)('div', {
                            className: C.engagementExpButtonInner,
                            children: [
                                (0, r.jsx)(s.PhoneCallIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                O.Z.Messages.CALL
                            ]
                        })
                    });
                }
            })
        });
    if (T)
        return v && null != b ? (0, r.jsxs)('div', {
            className: C.ctaRow,
            children: [
                (0, r.jsx)(A.Z, {
                    fullWidth: !0,
                    variant: 'text',
                    color: C.engagementExpButton,
                    tooltipContainerClassName: C.ctaTooltipContainer,
                    onClick: G,
                    icon: s.ChatIcon,
                    text: O.Z.Messages.USER_PROFILE_MESSAGE
                }),
                b
            ]
        }) : L ? (0, r.jsxs)('div', {
            className: C.ctaRow,
            children: [
                H,
                (0, r.jsx)(A.Z, {
                    fullWidth: !0,
                    variant: 'text',
                    color: o()(s.Button.Colors.BRAND, R.color),
                    onClick: G,
                    icon: s.ChatIcon,
                    text: O.Z.Messages.USER_PROFILE_MESSAGE,
                    tooltipContainerClassName: C.ctaTooltipContainer
                })
            ]
        }) : (0, r.jsx)(A.Z, {
            fullWidth: !0,
            variant: 'text',
            color: o()(s.Button.Colors.BRAND, R.color),
            onClick: G,
            icon: s.ChatIcon,
            text: O.Z.Messages.USER_PROFILE_MESSAGE
        });
    return (0, r.jsx)(E.Z, {
        innerClassName: C.inner,
        editorClassName: C.editor,
        type: d.I.USER_PROFILE,
        placeholder: O.Z.Messages.QUICK_DM_USER.format({ name: I.ZP.getName(n, a, t) }),
        channel: y,
        textValue: M,
        richValue: U,
        onChange: (e, t, n) => {
            if (t !== M)
                P(t), w(n);
        },
        focused: x.current,
        onFocus: () => {
            x.current = !0;
        },
        onBlur: () => {
            x.current = !1;
        },
        onSubmit: async e => {
            let {value: n} = e;
            try {
                return m({ action: 'SEND_DIRECT_MESSAGE' }), await D({
                    userId: t.id,
                    content: n.trim(),
                    location: p
                }), null == u || u(), {
                    shouldClear: !0,
                    shouldRefocus: !1
                };
            } catch {
                return {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
            }
        }
    });
}
