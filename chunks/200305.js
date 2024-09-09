n.d(s, {
    Y: function () {
        return D;
    }
}),
    n(47120);
var t,
    l,
    i = n(735250),
    a = n(470079),
    r = n(120356),
    o = n.n(r),
    d = n(442837),
    u = n(481060),
    c = n(893776),
    I = n(809206),
    E = n(607070),
    M = n(600164),
    m = n(339085),
    _ = n(565138),
    N = n(601964),
    x = n(650774),
    R = n(271383),
    f = n(430824),
    g = n(594174),
    h = n(626135),
    C = n(768581),
    T = n(863249),
    v = n(944163),
    A = n(246364),
    O = n(983736),
    F = n(266395),
    j = n(990488),
    Z = n(592286),
    L = n(981631),
    p = n(689938),
    B = n(807907),
    V = n(419851),
    S = n(296507),
    b = n(866402),
    P = n(246403);
((l = t || (t = {}))[(l.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (l[(l.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (l[(l.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM');
let y = (e) => {
        let { headerId: s, email: n, password: t, setEmail: l, setPassword: a, emailError: r, passwordError: o } = e;
        return (0, i.jsxs)('div', {
            className: B.content,
            children: [
                (0, i.jsx)('div', {
                    className: B.applicationIconContainer,
                    children: (0, i.jsx)('img', {
                        alt: p.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_ICON,
                        src: V,
                        className: B.applicationIcon
                    })
                }),
                (0, i.jsx)(u.Heading, {
                    id: s,
                    variant: 'heading-xl/semibold',
                    className: B.header,
                    children: p.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_TITLE
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: p.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_SUBTITLE
                }),
                (0, i.jsx)('hr', { className: B.divider }),
                (0, i.jsx)(u.FormItem, {
                    title: p.Z.Messages.FORM_LABEL_EMAIL,
                    className: B.formItem,
                    children: (0, i.jsx)(u.TextInput, {
                        value: n,
                        error: r,
                        onChange: l,
                        autoFocus: !0
                    })
                }),
                (0, i.jsx)(u.FormItem, {
                    title: p.Z.Messages.FORM_LABEL_PASSWORD,
                    className: B.formItem,
                    children: (0, i.jsx)(u.TextInput, {
                        type: 'password',
                        value: t,
                        error: o,
                        onChange: a
                    })
                })
            ]
        });
    },
    U = (e) => {
        let { headerId: s, email: n } = e;
        return (0, i.jsxs)('div', {
            className: B.content,
            children: [
                (0, i.jsx)('img', {
                    alt: p.Z.Messages.MEMBER_VERIFICATION_VERIFY_EMAIL_ICON,
                    src: P,
                    className: B.applicationIcon
                }),
                (0, i.jsx)(u.Heading, {
                    id: s,
                    variant: 'heading-xl/semibold',
                    className: B.header,
                    children: p.Z.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_TITLE.format({ email: n })
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: p.Z.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_SUBTITLE
                }),
                (0, i.jsx)(u.Button, {
                    className: B.resendButton,
                    size: u.Button.Sizes.NONE,
                    look: u.Button.Looks.LINK,
                    onClick: () => c.Z.verifyResend(),
                    children: p.Z.Messages.MEMBER_VERIFICATION_EMAIL_RESEND
                })
            ]
        });
    },
    D = (e) => {
        var s;
        let { guildId: n, formState: t, updateFormState: l, isPreview: a = !1, disableVerification: r = !1 } = e,
            o = (0, d.e7)([v.Z], () => v.Z.get(n));
        if (null == o) return null;
        let u = null !== (s = null != t ? t : null == o ? void 0 : o.formFields) && void 0 !== s ? s : [],
            c = a ? j.W : j.r;
        return (0, i.jsx)(c, {
            guildId: n,
            formFields: u,
            updateFormFields: l,
            disableVerification: r
        });
    },
    k = () =>
        n
            .e('26176')
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
                let { default: s } = e;
                return s;
            }),
    w = (e) => {
        let { headerId: s, guildId: n, formState: t, updateFormState: l, useReducedMotion: a, isPreview: r = !1 } = e;
        return (0, i.jsxs)('div', {
            className: B.content,
            children: [
                (0, i.jsxs)('div', {
                    className: B.animationAndSparklesContainer,
                    children: [
                        (0, i.jsx)('img', {
                            alt: p.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                            src: b,
                            className: o()(B.sparkleIcon, B.sparkleBottom)
                        }),
                        (0, i.jsx)(u.LottieAnimation, {
                            importData: k,
                            shouldAnimate: !a,
                            className: B.animation
                        }),
                        (0, i.jsx)('img', {
                            alt: p.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                            src: S,
                            className: o()(B.sparkleIcon, B.sparkleTop)
                        })
                    ]
                }),
                (0, i.jsx)(u.Heading, {
                    id: s,
                    variant: 'heading-xl/semibold',
                    className: B.header,
                    children: p.Z.Messages.MEMBER_VERIFICATION_MODAL_TITLE
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: B.subheader,
                    children: p.Z.Messages.MEMBER_VERIFICATION_MODAL_SUBTITLE
                }),
                (0, i.jsx)('hr', { className: B.divider }),
                (0, i.jsx)(D, {
                    guildId: n,
                    formState: t,
                    updateFormState: l,
                    isPreview: r
                })
            ]
        });
    };
s.Z = (e) => {
    var s, n;
    let { headerId: t, guildId: l, onClose: r, onComplete: c, inviteCode: j, isPreview: V = !1, disableVerification: S = !1 } = e,
        b = (0, F.rb)((e) => e.hasUnsubmittedChanges),
        P = (0, d.e7)([f.Z], () => f.Z.getGuild(l)),
        D = (0, d.e7)([v.Z], () => v.Z.get(l)),
        k = null == D ? void 0 : D.formFields.some((e) => e.field_type !== A.QJ.TERMS),
        G = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        H = !(null == G ? void 0 : G.isClaimed()),
        Y = null == G ? void 0 : G.verified,
        z = null == G ? void 0 : G.isPhoneVerified(),
        J = (0, d.e7)([m.ZP], () => m.ZP.getGuildEmoji(l)),
        { storeMemberCount: Q, storeOnlineCount: q } = (0, d.cj)([x.Z], () => ({
            storeMemberCount: x.Z.getMemberCount(l),
            storeOnlineCount: x.Z.getOnlineCount(l)
        })),
        [W, X] = a.useState(null !== (s = null == D ? void 0 : D.formFields) && void 0 !== s ? s : []),
        [K, $] = a.useState(!1),
        [ee, es] = a.useState(null),
        [en, et] = a.useState(!S && H ? 0 : 2),
        [el, ei] = a.useState(''),
        [ea, er] = a.useState(''),
        [eo, ed] = a.useState(null),
        [eu, ec] = a.useState(null),
        eI = null == D ? void 0 : D.guild,
        eE = a.useMemo(() => (null != P ? P : null != eI ? new N.ZP(eI) : null), [P, eI]),
        eM = null !== (n = null == eE ? void 0 : eE.hasFeature(L.oNc.CLAN)) && void 0 !== n && n,
        {
            emojisToRender: em,
            remainingEmojis: e_,
            numGuildEmoji: eN
        } = a.useMemo(() => {
            var e;
            let s = [...(null !== (e = 0 === J.length ? (null == eI ? void 0 : eI.emojis) : J) && void 0 !== e ? e : [])].reverse(),
                n = 0,
                t = s.length;
            return (
                t > 12 && null != s && (n = Math.min(t - (s = s.slice(0, 11)).length, 99)),
                {
                    emojisToRender: s,
                    remainingEmojis: n,
                    numGuildEmoji: t
                }
            );
        }, [eI, J]),
        ex = null != Q ? Q : null == eI ? void 0 : eI.approximate_member_count,
        eR = null != q ? q : null == eI ? void 0 : eI.approximate_presence_count;
    a.useEffect(
        () => (
            (0, F.a5)(!1),
            () => {
                (0, F.a5)(!1);
            }
        ),
        []
    ),
        a.useEffect(() => {
            T.ZP.fetchVerificationForm(l, j);
        }, [l, j]),
        a.useEffect(() => {
            null != D && X(D.formFields);
        }, [D]),
        a.useEffect(() => {
            null != G && G.isClaimed() && et(2);
        }, [G]),
        a.useEffect(() => {
            1 === en && Y && et(2);
        }, [en, Y]),
        a.useEffect(() => {
            null != l &&
                h.default.track(L.rMx.OPEN_MODAL, {
                    type: Z.N4,
                    guild_id: l
                });
        }, [l]),
        a.useEffect(() => {
            let e = W.some((e) => e.field_type !== A.QJ.TERMS && (0, O.OA)(e));
            e && !b ? (0, F.a5)(!0) : !e && b && (0, F.a5)(!1);
        }, [W, b]);
    let ef = a.useMemo(() => !(S || (((null == eE ? void 0 : eE.verificationLevel) !== L.sFg.VERY_HIGH || (null == G ? void 0 : G.isStaff())) && Y) || z) || W.some((e) => !(0, O.OA)(e)), [W, eE, z, Y, G, S]),
        eg = (0, d.e7)([E.Z], () => E.Z.useReducedMotion);
    if (null == eE) return null;
    let eh = async () => {
            $(!0), ed(null), ec(null);
            try {
                await (0, I.S2)({
                    email: el,
                    password: ea
                }),
                    $(!1),
                    et(1);
            } catch (n) {
                var e, s;
                ed(null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.email), ec(null == n ? void 0 : null === (s = n.body) || void 0 === s ? void 0 : s.password);
            } finally {
                $(!1);
            }
        },
        eC = async () => {
            $(!0), es(null);
            let e = null != G ? R.ZP.getMember(l, G.id) : null;
            if (null != e && !e.isPending) {
                null == r || r(!0);
                return;
            }
            try {
                await (null == c
                    ? void 0
                    : c({
                          ...(null != D ? D : v.t),
                          formFields: W
                      })),
                    null == r || r(!0);
            } catch (t) {
                var s, n;
                let e = null == t ? void 0 : t.body;
                (null == e ? void 0 : null === (s = e.errors) || void 0 === s ? void 0 : s.version) != null || (null == e ? void 0 : null === (n = e.errors) || void 0 === n ? void 0 : n.form_fields) != null ? es(p.Z.Messages.MEMBER_VERIFICATION_VERSION_MISMATCH_ERROR) : es(null == e ? void 0 : e.message);
            } finally {
                $(!1);
            }
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(M.Z, {
                direction: M.Z.Direction.VERTICAL,
                justify: M.Z.Justify.BETWEEN,
                className: B.guildSidebar,
                shrink: 0,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(_.Z, {
                                guild: eE,
                                active: !0,
                                className: o()(B.guildIcon, { [B.guildIconNoIcon]: null == eE.icon })
                            }),
                            (0, i.jsx)(u.Heading, {
                                variant: 'heading-lg/semibold',
                                className: B.guildName,
                                children: null == eE ? void 0 : eE.name
                            }),
                            (0, i.jsx)(u.Text, {
                                className: B.guildDescription,
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: null == D ? void 0 : D.description
                            }),
                            null != em && em.length > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)('hr', { className: B.divider }),
                                          (0, i.jsx)(u.FormTitle, { children: p.Z.Messages.MEMBER_VERIFICATION_NUM_EMOJIS.format({ emojis: eN }) }),
                                          (0, i.jsxs)('div', {
                                              className: B.emojisContainer,
                                              children: [
                                                  em.map((e) => {
                                                      let s = C.ZP.getEmojiURL({
                                                          id: e.id,
                                                          animated: !1,
                                                          size: 24
                                                      });
                                                      return (0, i.jsx)(
                                                          u.Tooltip,
                                                          {
                                                              text: ':'.concat(e.name, ':'),
                                                              children: (e) =>
                                                                  (0, i.jsx)('img', {
                                                                      ...e,
                                                                      width: 24,
                                                                      height: 24,
                                                                      src: s,
                                                                      className: B.emoji,
                                                                      alt: ''
                                                                  })
                                                          },
                                                          e.id
                                                      );
                                                  }),
                                                  null != e_ && e_ > 0
                                                      ? (0, i.jsx)(u.Heading, {
                                                            variant: 'heading-deprecated-12/semibold',
                                                            className: B.emoji,
                                                            color: 'header-secondary',
                                                            children: '+'.concat(e_)
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            null != eR &&
                                (0, i.jsxs)(M.Z, {
                                    align: M.Z.Align.CENTER,
                                    className: B.onlineCount,
                                    children: [
                                        (0, i.jsx)('div', { className: B.dotOnline }),
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: p.Z.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({ membersOnline: eR })
                                        })
                                    ]
                                }),
                            null != ex &&
                                (0, i.jsxs)(M.Z, {
                                    align: M.Z.Align.CENTER,
                                    children: [
                                        (0, i.jsx)('div', { className: B.dotMembers }),
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: p.Z.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({ members: ex })
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: B.modal,
                children: [
                    (0, i.jsx)(u.ModalContent, {
                        className: B.modalContent,
                        children: (0, i.jsx)(u.Sequencer, {
                            className: o()(B.sequencer, { [B.centerContent]: 2 !== en }),
                            steps: [0, 1, 2],
                            step: en,
                            children: (() => {
                                switch (en) {
                                    case 0:
                                        return (0, i.jsx)(y, {
                                            headerId: t,
                                            email: el,
                                            password: ea,
                                            setEmail: ei,
                                            setPassword: er,
                                            emailError: eo,
                                            passwordError: eu
                                        });
                                    case 1:
                                        return (0, i.jsx)(U, {
                                            headerId: t,
                                            email: el
                                        });
                                    case 2:
                                        return (0, i.jsx)(w, {
                                            headerId: t,
                                            guildId: l,
                                            formState: W,
                                            updateFormState: X,
                                            isPreview: V,
                                            useReducedMotion: eg
                                        });
                                }
                            })()
                        })
                    }),
                    (() => {
                        switch (en) {
                            case 0:
                                return (0, i.jsxs)(u.ModalFooter, {
                                    className: B.footer,
                                    children: [
                                        (0, i.jsx)(u.Button, {
                                            className: B.submitButton,
                                            type: 'submit',
                                            submitting: K,
                                            onClick: eh,
                                            disabled: 0 === el.length || 0 === ea.length,
                                            children: p.Z.Messages.NEXT
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-secondary',
                                            children: p.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_INFO
                                        })
                                    ]
                                });
                            case 1:
                                return null;
                            case 2:
                                return (0, i.jsxs)(u.ModalFooter, {
                                    className: B.footer,
                                    children: [
                                        (0, i.jsx)(u.Button, {
                                            className: B.submitButton,
                                            type: 'submit',
                                            submitting: K,
                                            onClick: eC,
                                            color: u.Button.Colors.GREEN,
                                            disabled: null == c || ef,
                                            children: p.Z.Messages.SUBMIT
                                        }),
                                        null != ee &&
                                            (0, i.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-danger',
                                                children: ee
                                            }),
                                        null == ee &&
                                            k &&
                                            (0, i.jsxs)('div', {
                                                className: B.disclaimerFooter,
                                                children: [
                                                    (0, i.jsx)(u.Text, {
                                                        color: 'header-secondary',
                                                        variant: 'text-xs/normal',
                                                        children: p.Z.Messages.MEMBER_VERIFICATION_WARNING
                                                    }),
                                                    eM &&
                                                        (0, i.jsx)(u.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            children: p.Z.Messages.CLAN_APPLICATION_GDM_CONSENT
                                                        })
                                                ]
                                            })
                                    ]
                                });
                        }
                    })()
                ]
            })
        ]
    });
};
