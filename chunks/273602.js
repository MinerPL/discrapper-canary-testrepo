l.r(t), l.d(t, {
    default: function () {
        return C;
    }
}), l(47120);
var i = l(735250), n = l(470079), s = l(442837), a = l(481060), o = l(904245), r = l(166459), d = l(680287), u = l(163268), c = l(813197), _ = l(592125), m = l(703558), f = l(430824), h = l(375954), g = l(153124), E = l(403182), A = l(709054), p = l(127654), M = l(979956), x = l(228392), I = l(404616), T = l(470623), O = l(981631), R = l(231338), v = l(689938), b = l(441371);
function C(e) {
    var t;
    let {
            threadId: l,
            attachments: C,
            sendMessage: L,
            transitionState: j,
            onClose: P
        } = e, Z = (0, g.Dt)(), D = (0, s.e7)([_.Z], () => _.Z.getChannel(l), [l]), S = (0, s.e7)([f.Z], () => f.Z.getGuild(null == D ? void 0 : D.getGuildId()), [D]), N = (0, s.e7)([_.Z], () => _.Z.getChannel(null == D ? void 0 : D.parent_id), [D]), U = null === (t = C[0]) || void 0 === t ? void 0 : t.item, [y, z] = n.useState(null);
    n.useEffect(() => {
        null != U && (0, c.Fq)(U.file, (e, t) => z(e), R.dG);
    }, [U]);
    let G = null != U && null != y ? {
            src: y,
            width: I.TJ,
            height: I.Lp,
            spoiler: C[0].spoiler,
            alt: C[0].description
        } : null, [w, B] = n.useState(!1), k = n.useCallback(() => {
            (0, x.xI)({ added: !1 }), L(), P();
        }, [
            L,
            P
        ]), F = n.useCallback(() => {
            null != D && null != S && ((0, x.xI)({ added: !0 }), !function (e) {
                let {
                        thread: t,
                        attachments: l,
                        setIsUploading: i,
                        guild: n,
                        onClose: s
                    } = e, a = new d.Z(O.ANM.MESSAGE(t.id, A.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                a.on('start', () => {
                    i(!0);
                }), a.on('progress', e => {
                    let o = (0, E.dg)(n.id);
                    e.currentSize > o && (a.cancel(), i(!1), s(), (0, p.G)(t, (0, M.KZ)(l)));
                }), a.on('error', (e, l, n) => {
                    i(!1), l === O.evJ.EXPLICIT_CONTENT && (s(), o.Z.sendExplicitMediaClydeError(t.id, null == n ? void 0 : n.attachments, u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), r.Z.clearAll(t.id, m.d.ChannelMessage));
                }), a.on('complete', () => {
                    i(!1), s(), r.Z.clearAll(t.id, m.d.ChannelMessage);
                });
                let c = h.Z.getMessages(t.id).get(A.default.castChannelIdAsMessageId(t.id)), _ = null != c ? c.attachments : [];
                a.uploadFiles(l, { attachments: [..._] }, { addFilesTo: 'attachments' });
            }({
                thread: D,
                attachments: C,
                setIsUploading: B,
                guild: S,
                onClose: P
            }));
        }, [
            D,
            C,
            B,
            S,
            P
        ]);
    return null == N ? null : (0, i.jsxs)(a.ModalRoot, {
        transitionState: j,
        size: a.ModalSize.SMALL,
        className: b.modalRoot,
        'aria-labelledby': Z,
        children: [
            (0, i.jsxs)(a.ModalContent, {
                className: b.modal,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        className: b.header,
                        id: Z,
                        children: v.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        className: b.__invalid_body,
                        children: v.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
                    }),
                    (0, i.jsx)('div', {
                        className: b.forumPost,
                        children: (0, i.jsx)(T.oL, {
                            createStore: () => (0, T.NU)(N),
                            children: (0, i.jsx)(I.ZP, {
                                threadId: l,
                                goToThread: R.dG,
                                overrideMedia: G
                            })
                        })
                    })
                ]
            }),
            (0, i.jsxs)(a.ModalFooter, {
                className: b.modalFooter,
                children: [
                    (0, i.jsx)(a.Button, {
                        look: a.Button.Looks.BLANK,
                        className: b.cancelButton,
                        disabled: w,
                        onClick: P,
                        children: v.Z.Messages.CANCEL
                    }),
                    (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.PRIMARY,
                        className: b.dontAddButton,
                        disabled: w,
                        onClick: k,
                        children: v.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
                    }),
                    (0, i.jsx)(a.Button, {
                        color: a.Button.Colors.BRAND,
                        className: b.__invalid_button,
                        submitting: w,
                        onClick: F,
                        autoFocus: !0,
                        children: v.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
                    })
                ]
            })
        ]
    });
}
