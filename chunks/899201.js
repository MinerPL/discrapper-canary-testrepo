t.r(a), t.d(a, {
    default: function () {
        return V;
    }
}), t(47120), t(653041);
var i = t(735250), n = t(470079), s = t(120356), l = t.n(s), r = t(218887), o = t.n(r), c = t(990547), d = t(442837), u = t(481060), m = t(493683), E = t(247272), _ = t(166459), f = t(966390), h = t(476326), I = t(213609), g = t(835473), S = t(43267), p = t(933557), C = t(957730), T = t(592125), N = t(703558), b = t(430824), M = t(751771), w = t(496675), A = t(699516), Z = t(117530), x = t(594174), y = t(626135), v = t(768581), D = t(971130), R = t(358085), j = t(624138), P = t(591759), O = t(51144), k = t(998502), U = t(317381), B = t(964517), L = t(981631), G = t(245335), F = t(689938), H = t(245917);
async function z(e) {
    return e.type === D.bm.DM || e.type === D.bm.FRIEND ? await m.Z.ensurePrivateChannel(e.item.id) : e.item.id;
}
function V(e) {
    let {
            applicationId: a,
            mediaUrl: t,
            channelId: s,
            onClose: l,
            transitionState: r,
            ...m
        } = e, S = (0, d.e7)([U.ZP], () => U.ZP.getSelfEmbeddedActivityForChannel(s));
    (0, I.Z)({
        type: c.ImpressionTypes.MODAL,
        name: c.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: a,
            activity_session_id: (0, B.Z)(S)
        }
    });
    let [p] = (0, g.Z)([a]), b = (0, d.e7)([x.default], () => x.default.getCurrentUser()), [A, v] = n.useState(''), [R, j] = n.useState([]), [O, k] = n.useState(null), [V, Y] = n.useState(null);
    n.useEffect(() => {
        (async () => {
            let e = P.Z.toURLSafe(t);
            if (null == e)
                return;
            let a = o().basename(e.pathname), i = await fetch(t), n = new File([await i.arrayBuffer()], a);
            k(n);
            let s = new FileReader();
            s.onload = () => {
                var e;
                return Y(null == s ? void 0 : null === (e = s.result) || void 0 === e ? void 0 : e.toString());
            }, s.readAsDataURL(n);
        })();
    }, [
        t,
        k
    ]);
    let K = (0, d.Wu)([
        M.Z,
        w.Z
    ], () => M.Z.getInviteSuggestionRows().filter(e => e.type === D.bm.FRIEND || e.type === D.bm.DM || w.Z.can(L.Plq.ATTACH_FILES, e.item)));
    n.useEffect(() => {
        (0, E.x)({
            omitUserIds: new Set(),
            applicationId: a,
            inviteTargetType: G.Iq.EMBEDDED_APPLICATION
        });
    }, [a]), n.useEffect(() => (0, E.C)(A), [A]);
    let X = n.useCallback(async () => {
        await Promise.all(R.map(async e => {
            let a = K.find(a => a.item.id === e);
            if (null != a) {
                let e = await z(a);
                _.Z.clearAll(e, N.d.ChannelMessage);
            }
        }));
    }, [
        R,
        K
    ]);
    n.useEffect(() => {
        r === u.ModalTransitionState.EXITING && X();
    }, [
        X,
        r
    ]);
    let Q = n.useCallback(async () => {
            await X(), l();
        }, [
            l,
            X
        ]), J = n.useCallback(async () => {
            let e = 0, t = 0, i = 0;
            async function n(n) {
                switch (n.type) {
                case D.bm.DM:
                case D.bm.FRIEND:
                    e++;
                    break;
                case D.bm.GROUP_DM:
                    t++;
                    break;
                case D.bm.CHANNEL:
                    i++;
                }
                let s = await z(n), l = Z.Z.getUploads(s, N.d.ChannelMessage), r = T.Z.getChannel(s);
                f.Z.uploadFiles({
                    channelId: s,
                    uploads: l,
                    parsedMessage: null != p ? C.ZP.parse(r, F.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({ applicationName: '**'.concat(p.name, '**') })) : void 0,
                    draftType: N.d.ChannelMessage,
                    options: { applicationId: a }
                }), _.Z.clearAll(s, N.d.ChannelMessage);
            }
            let s = M.Z.getInviteSuggestionRows().filter(e => R.includes(e.item.id)).map(e => n(e));
            y.default.track(L.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == b ? void 0 : b.id,
                application_id: a,
                activity_session_id: (0, B.Z)(S),
                n_users: e,
                n_gdms: t,
                n_channels: i
            });
            try {
                await Promise.all(s), null != p && (0, u.showToast)((0, u.createToast)(F.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({ applicationName: p.name }), u.ToastType.SUCCESS));
            } catch (e) {
                throw (0, u.showToast)((0, u.createToast)(F.Z.Messages.UPLOAD_ERROR_TITLE, u.ToastType.FAILURE)), e;
            }
            Q();
        }, [
            S,
            p,
            a,
            R,
            Q,
            b
        ]), $ = e => {
            let a = async () => {
                let a = await z(e), t = [...R];
                if (t.includes(e.item.id))
                    _.Z.clearAll(a, N.d.ChannelMessage), t = t.filter(a => a !== e.item.id);
                else {
                    if (t.length >= 10)
                        return;
                    null != O && (_.Z.addFile({
                        file: {
                            file: O,
                            platform: h.ow.WEB
                        },
                        channelId: a,
                        draftType: N.d.ChannelMessage
                    }), t.push(e.item.id));
                }
                j(t);
            };
            return () => a();
        };
    return null == V ? (0, i.jsx)(u.Spinner, {}) : (0, i.jsxs)(u.ModalRoot, {
        transitionState: r,
        ...m,
        className: H.modalRoot,
        children: [
            (0, i.jsxs)(u.ModalHeader, {
                className: H.header,
                children: [
                    (0, i.jsxs)('div', {
                        className: H.headerTitle,
                        children: [
                            (0, i.jsx)(u.Heading, {
                                variant: 'heading-md/semibold',
                                children: F.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_HEADING
                            }),
                            (0, i.jsx)(u.ModalCloseButton, { onClick: Q })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)('img', {
                            alt: t,
                            className: H.img,
                            src: V
                        })
                    })
                ]
            }),
            (0, i.jsxs)(u.ModalContent, {
                className: H.modalContent,
                children: [
                    (0, i.jsx)(u.SearchBox, {
                        className: H.searchBar,
                        placeholder: F.Z.Messages.SEARCH,
                        label: F.Z.Messages.SEARCH,
                        searchTerm: A,
                        onChange: e => v(e),
                        onClear: () => v('')
                    }),
                    K.map((e, a) => (0, i.jsxs)(n.Fragment, {
                        children: [
                            0 === a ? null : (0, i.jsx)('div', { className: H.rowDivider }),
                            (0, i.jsx)(q, {
                                row: e,
                                onClick: $(e),
                                checked: R.includes(e.item.id),
                                disabled: !R.includes(e.item.id) && R.length >= 10
                            })
                        ]
                    }, e.item.id))
                ]
            }),
            (0, i.jsx)(u.ModalFooter, {
                className: H.footer,
                children: (0, i.jsxs)('div', {
                    className: H.copySendBar,
                    children: [
                        (0, i.jsx)(W, {
                            applicationId: a,
                            activitySessionId: (0, B.Z)(S),
                            mediaUrl: t
                        }),
                        R.length >= 10 ? (0, i.jsx)(u.Text, {
                            variant: 'text-xs/normal',
                            children: F.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_LIMIT_WARNING.format({ maxShares: 10 })
                        }) : null,
                        (0, i.jsx)(u.Button, {
                            onClick: J,
                            disabled: R.length <= 0,
                            children: F.Z.Messages.SEND
                        })
                    ]
                })
            })
        ]
    });
}
function q(e) {
    let {
            row: a,
            onClick: t,
            checked: n,
            disabled: s
        } = e, r = null, o = null, c = null;
    switch (a.type) {
    case D.bm.DM:
    case D.bm.FRIEND:
        r = (0, i.jsx)(u.Avatar, {
            size: u.AvatarSizes.SIZE_40,
            src: a.item.getAvatarURL(null, 128, !1),
            'aria-label': a.item.username
        }), o = O.ZP.getName(a.item), c = O.ZP.getUserTag(a.item);
        break;
    case D.bm.GROUP_DM: {
            let e = (0, S.x)(a.item), t = (0, p.F6)(a.item, x.default, A.Z);
            r = (0, i.jsx)(u.Avatar, {
                src: e,
                'aria-label': t,
                size: u.AvatarSizes.SIZE_40
            }), o = (0, p.F6)(a.item, x.default, A.Z);
            break;
        }
    case D.bm.CHANNEL: {
            let e = a.item, t = b.Z.getGuild(e.guild_id);
            if (null == t)
                return null;
            if (o = '#'.concat((0, p.F6)(e, x.default, A.Z)), c = t.name, null != t.icon) {
                let a = v.ZP.getGuildIconURL({
                    id: e.guild_id,
                    icon: t.icon,
                    size: 40
                });
                r = (0, i.jsx)(u.Avatar, {
                    src: a,
                    'aria-label': o,
                    size: u.AvatarSizes.SIZE_40
                });
            } else {
                let e = (0, j.Zg)(t.name);
                r = (0, i.jsx)('div', {
                    className: H.acronym,
                    'aria-hidden': !0,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-md/semibold',
                        children: e
                    })
                });
            }
        }
    }
    return (0, i.jsxs)(u.Clickable, {
        onClick: t,
        className: l()(H.rowContainer, { [H.disabled]: s }),
        children: [
            (0, i.jsxs)('div', {
                className: H.rowLeft,
                children: [
                    (0, i.jsx)('div', {
                        className: H.rowAvatar,
                        children: r
                    }),
                    (0, i.jsxs)('div', {
                        className: H.rowNameContainer,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-md/semibold',
                                className: l()(H.rowName, { [H.disabled]: s }),
                                children: o
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                className: l()(H.rowSubName, { [H.disabled]: s }),
                                children: c
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(u.Checkbox, {
                disabled: s,
                value: n,
                type: u.Checkbox.Types.INVERTED,
                displayOnly: !0,
                className: H.rowRight
            })
        ]
    });
}
function W(e) {
    let {
            applicationId: a,
            mediaUrl: t,
            activitySessionId: s
        } = e, [l, r] = n.useState(!1), o = (0, d.e7)([x.default], () => x.default.getCurrentUser());
    async function c() {
        y.default.track(L.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
            user_id: null == o ? void 0 : o.id,
            application_id: a,
            activity_session_id: s
        }), await k.ZP.copyImage(t), r(!0);
    }
    return (n.useEffect(() => {
        let e;
        return l && (e = setTimeout(() => {
            r(!1);
        }, 1000)), () => {
            null != e && clearTimeout(e);
        };
    }, [l]), R.isPlatformEmbedded && k.ZP.canCopyImage(t)) ? (0, i.jsxs)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.LINK,
        onClick: c,
        innerClassName: H.copyButton,
        children: [
            l ? (0, i.jsx)(u.CircleCheckIcon, {
                size: 'md',
                color: 'currentColor'
            }) : (0, i.jsx)(u.CopyIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            l ? F.Z.Messages.COPIED : F.Z.Messages.COPY_IMAGE_MENU_ITEM
        ]
    }) : (0, i.jsx)('div', {});
}
