t.r(n),
    t.d(n, {
        default: function () {
            return M;
        }
    }),
    t(47120);
var s = t(735250),
    o = t(470079),
    i = t(392711),
    l = t.n(i),
    a = t(442837),
    r = t(481060),
    d = t(706371),
    c = t(563115),
    u = t(313201),
    m = t(661824),
    N = t(984933),
    _ = t(430824),
    O = t(823379),
    h = t(402148),
    I = t(570961),
    v = t(208665),
    E = t(460117),
    x = t(290511),
    R = t(689938),
    j = t(996747);
function M(e) {
    let { transitionState: n, onClose: t, onSave: i, onDelete: _, option: O, guild: h, prompt: M, index: T } = e,
        P = (0, u.Dt)(),
        p = (0, a.e7)([N.ZP], () => N.ZP.getDefaultChannel(h.id)),
        [B, A] = o.useState(() => {
            var e;
            return null !== (e = null == O ? void 0 : O.emoji) && void 0 !== e ? e : null;
        }),
        [C, L] = o.useState(() => {
            var e;
            return null !== (e = null == O ? void 0 : O.title) && void 0 !== e ? e : '';
        }),
        [Z, f] = o.useState(() => {
            var e;
            return null !== (e = null == O ? void 0 : O.description) && void 0 !== e ? e : '';
        }),
        [D, S] = o.useState(() => {
            var e;
            return new Set(null !== (e = null == O ? void 0 : O.channelIds) && void 0 !== e ? e : []);
        }),
        [H, b] = o.useState(() => {
            var e;
            return new Set(null !== (e = null == O ? void 0 : O.roleIds) && void 0 !== e ? e : []);
        }),
        [k, G] = o.useState({}),
        U = o.useRef(null);
    return (
        o.useLayoutEffect(() => {
            var e;
            return null === (e = U.current) || void 0 === e ? void 0 : e.focus();
        }, []),
        (0, s.jsxs)(r.ModalRoot, {
            transitionState: n,
            'aria-labelledby': P,
            children: [
                (0, s.jsxs)('div', {
                    className: j.container,
                    children: [
                        (0, s.jsx)(r.ModalCloseButton, {
                            className: j.closeButton,
                            onClick: t
                        }),
                        (0, s.jsx)(r.Text, {
                            className: j.questionNumber,
                            variant: 'text-xs/semibold',
                            color: 'text-muted',
                            children: R.Z.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({ index: T + 1 })
                        }),
                        (0, s.jsx)(r.Heading, {
                            id: P,
                            className: j.header,
                            variant: 'heading-lg/semibold',
                            children: null != M.title && M.title.length > 0 ? M.title : R.Z.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE
                        }),
                        (0, s.jsx)(r.Heading, {
                            className: j.nameHeader,
                            variant: 'heading-md/semibold',
                            children: R.Z.Messages.ONBOARDING_PROMPT_OPTION_NAME_HEADER
                        }),
                        (0, s.jsx)(r.TextInput, {
                            inputRef: U,
                            placeholder: R.Z.Messages.ONBOARDING_PROMPT_OPTION_TITLE_PLACEHOLDER,
                            value: C,
                            onChange: (e) => L(e),
                            maxLength: x.NE,
                            autoFocus: !0
                        }),
                        (0, s.jsx)(r.InputError, { error: k.title }),
                        (0, s.jsx)(r.TextInput, {
                            className: j.descriptionInput,
                            placeholder: R.Z.Messages.ONBOARDING_PROMPT_OPTION_DESCRIPTION_PLACEHOLDER,
                            value: Z,
                            onChange: (e) => f(e),
                            maxLength: x.NO
                        }),
                        (0, s.jsx)(m.Z, { className: j.divider }),
                        (0, s.jsx)(r.Heading, {
                            className: j.rolesHeader,
                            variant: 'heading-md/semibold',
                            children: R.Z.Messages.ONBOARDING_PROMPT_OPTION_ROLES_CHANNELS_HEADER
                        }),
                        (0, s.jsx)(d.Z, {
                            guildId: h.id,
                            selectedChannelIds: D,
                            placeholder: R.Z.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_CHANNEL_PLACEHOLDER,
                            onChange: S,
                            helperText: R.Z.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS,
                            className: j.searchInput
                        }),
                        (0, s.jsx)(c.Z, {
                            guildId: h.id,
                            selectedRoleIds: H,
                            disableEveryoneRole: !0,
                            placeholder: R.Z.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
                            onChange: b,
                            helperText: R.Z.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS_SUBTEXT,
                            className: j.searchInput,
                            selectableRoleFilter: (e) => !e.managed
                        }),
                        null == k.roles ? null : (0, s.jsx)(r.InputError, { error: k.roles }),
                        (0, s.jsx)(g, {
                            guild: h,
                            roleIds: H
                        }),
                        (0, s.jsx)(m.Z, { className: j.divider }),
                        (0, s.jsxs)('div', {
                            className: j.emojiQuestionContainer,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: j.emojiQuestionText,
                                    children: [
                                        (0, s.jsx)(r.Heading, {
                                            variant: 'heading-md/semibold',
                                            children: R.Z.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_HEADER
                                        }),
                                        (0, s.jsx)(r.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: R.Z.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_SUBHEADER
                                        })
                                    ]
                                }),
                                (0, s.jsx)(E.Z, {
                                    emoji: B,
                                    setEmoji: A,
                                    channel: p
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsx)(r.ModalFooter, {
                    children: (0, s.jsxs)('div', {
                        className: j.footerButtons,
                        children: [
                            (0, s.jsx)('div', {
                                className: j.removeButton,
                                children: (0, s.jsx)(r.Button, {
                                    size: r.Button.Sizes.SMALL,
                                    look: r.Button.Looks.LINK,
                                    color: r.Button.Colors.RED,
                                    onClick: () => {
                                        _(), t();
                                    },
                                    children: R.Z.Messages.REMOVE
                                })
                            }),
                            (0, s.jsxs)('div', {
                                className: j.rightButtons,
                                children: [
                                    (0, s.jsx)(r.Button, {
                                        onClick: t,
                                        size: r.Button.Sizes.SMALL,
                                        look: r.Button.Looks.LINK,
                                        color: r.Button.Colors.PRIMARY,
                                        children: R.Z.Messages.CANCEL
                                    }),
                                    (0, s.jsx)(r.Button, {
                                        onClick: () => {
                                            var e;
                                            let n = {
                                                    id: null !== (e = null == O ? void 0 : O.id) && void 0 !== e ? e : ''.concat(Date.now()),
                                                    title: C,
                                                    description: Z,
                                                    channelIds: Array.from(D).sort(),
                                                    roleIds: Array.from(H).sort(),
                                                    emoji: null == B ? void 0 : B
                                                },
                                                s = (function (e, n, t, s) {
                                                    let o = {};
                                                    s.title.length <= 0 && (o.title = R.Z.Messages.ONBOARDING_PROMPT_OPTION_TITLE_REQUIRED);
                                                    let i = (0, I.en)(e, n, t, s);
                                                    return null != i && (o.roles = i), o;
                                                })(h, v.Z.editedOnboardingPrompts, M, n);
                                            G(s), l().isEmpty(s) && (i(n), t());
                                        },
                                        children: R.Z.Messages.SAVE
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    );
}
function g(e) {
    let { guild: n, roleIds: t } = e,
        o = (0, a.e7)([_.Z], () => _.Z.getRoles(n.id)),
        i = Array.from(t)
            .map((e) => o[e])
            .filter(O.lm)
            .find(h.F);
    return null == i
        ? null
        : (0, s.jsx)('div', {
              className: j.notice,
              children: (0, s.jsxs)('div', {
                  className: j.noticeMessage,
                  children: [
                      (0, s.jsx)(r.CircleWarningIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: j.noticeIcon
                      }),
                      (0, s.jsx)(r.Text, {
                          variant: 'text-sm/normal',
                          children: R.Z.Messages.ROLE_PROMPT_ROLE_IS_POWERFUL.format({ permissions: (0, h.i)(n, i).join(', ') })
                      })
                  ]
              })
          });
}
