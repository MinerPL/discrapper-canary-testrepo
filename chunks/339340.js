t.r(n), t.d(n, {
    VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
        return C;
    },
    default: function () {
        return S;
    }
}), t(47120), t(757143);
var l = t(735250), u = t(470079), i = t(399606), r = t(343817), a = t(481060), o = t(787014), s = t(12498), d = t(541716), c = t(752305), E = t(893718), N = t(19780), _ = t(285952), f = t(626135), Z = t(981631), I = t(689938), T = t(685782);
let C = 'VoiceChannelStatusModal';
function S(e) {
    let {
            channel: n,
            transitionState: t,
            onClose: S
        } = e, A = (0, i.e7)([s.Z], () => s.Z.getChannelStatus(n)), g = (0, i.e7)([N.Z], () => N.Z.getMediaSessionId()), [h, O] = u.useState(null != A ? A : ''), [m, L] = u.useState(!1), [v, M] = u.useState(null), P = h.length > 500;
    u.useEffect(() => {
        f.default.track(Z.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: n.guild_id
        });
    }, [n.guild_id]);
    let p = e => {
            M(new r.Hx(e, e.status).getAnyErrorMessage());
        }, V = async e => {
            h === A && S(), null == e || e.preventDefault(), M(null), L(!0);
            let t = h.length, l = h.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length;
            try {
                let e = await o.ZP.updateVoiceChannelStatus(n.id, h);
                204 === e.status ? (f.default.track(Z.rMx.VOICE_CHANNEL_TOPIC_SET, {
                    guild_id: n.guild_id,
                    channel_id: n.id,
                    media_session_id: g,
                    raw_length: t,
                    text_length: l
                }), S()) : p(e);
            } catch (e) {
                p(e);
            }
            L(!1);
        }, [D, G] = u.useState((0, c.JM)(h)), y = async () => (!P && !m && await V(), Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !0
        }));
    return (0, l.jsx)('form', {
        onSubmit: V,
        className: T.form,
        children: (0, l.jsxs)(a.ModalRoot, {
            transitionState: t,
            size: a.ModalSize.SMALL,
            children: [
                (0, l.jsxs)(a.ModalContent, {
                    children: [
                        (0, l.jsxs)(a.ModalHeader, {
                            direction: _.Z.Direction.VERTICAL,
                            className: T.modalHeader,
                            separator: !1,
                            children: [
                                (0, l.jsx)(a.ModalCloseButton, {
                                    className: T.closeButton,
                                    onClick: S
                                }),
                                (0, l.jsx)('div', { className: T.headerImage }),
                                (0, l.jsx)(a.FormTitle, {
                                    tag: 'h1',
                                    className: T.title,
                                    children: I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
                                }),
                                (0, l.jsx)(a.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
                                })
                            ]
                        }),
                        (0, l.jsxs)(a.FormSection, {
                            className: T.inputSection,
                            title: I.Z.Messages.VOICE_CHANNEL_STATUS,
                            children: [
                                (0, l.jsx)(E.Z, {
                                    innerClassName: T.textArea,
                                    textValue: h,
                                    richValue: D,
                                    placeholder: I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({ channelName: n.name }),
                                    focused: !0,
                                    channel: n,
                                    onChange: (e, n, t) => {
                                        O(n), G(t);
                                    },
                                    onSubmit: y,
                                    type: d.I.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: C,
                                    maxCharacterCount: 500,
                                    showRemainingCharsAfterCount: 250,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }),
                                null != v ? (0, l.jsx)(a.FormErrorBlock, {
                                    className: T.error,
                                    children: v
                                }) : null
                            ]
                        })
                    ]
                }),
                (0, l.jsxs)(a.ModalFooter, {
                    justify: _.Z.Justify.BETWEEN,
                    direction: _.Z.Direction.HORIZONTAL,
                    children: [
                        (0, l.jsx)(a.Button, {
                            color: a.Button.Colors.PRIMARY,
                            onClick: S,
                            children: I.Z.Messages.CANCEL
                        }),
                        (0, l.jsx)(a.Button, {
                            onClick: V,
                            submitting: m,
                            className: T.button,
                            disabled: P,
                            children: I.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
                        })
                    ]
                })
            ]
        })
    });
}
