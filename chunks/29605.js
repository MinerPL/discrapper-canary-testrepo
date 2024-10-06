n.d(t, {
    FT: function () {
        return V;
    },
    L3: function () {
        return H;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(512722),
    o = n.n(l),
    c = n(392711),
    d = n.n(c),
    u = n(772848),
    _ = n(442837),
    I = n(481060),
    E = n(668781),
    T = n(80932),
    m = n(225433),
    N = n(327802),
    S = n(110924),
    g = n(200876),
    h = n(730089),
    C = n(372444),
    x = n(889564),
    p = n(372129),
    R = n(357156),
    L = n(210887),
    f = n(626135),
    O = n(768581),
    A = n(176354),
    M = n(267642),
    D = n(51144),
    v = n(434404),
    j = n(471613),
    Z = n(999382),
    b = n(981631),
    U = n(185923),
    G = n(689938),
    P = n(337225),
    B = n(869042);
let y = d().throttle(T.OQ, 1000),
    F = (e) => {
        let { currentTarget: t, which: n } = e;
        13 === n && t.blur();
    },
    k = (e) => {
        let { guildId: t, emoji: n, onEdit: i, editingDisabled: l = !1 } = e,
            [o, c] = a.useState(n.name),
            d = O.ZP.getEmojiURL({
                id: n.id,
                animated: n.animated,
                size: 32
            }),
            u = D.ZP.useUserTag(n.user);
        return (0, s.jsxs)('div', {
            className: r()(P.emojiRow, B.card),
            children: [
                (0, s.jsx)('div', {
                    className: P.emojiColumn,
                    children: (0, s.jsx)(I.Tooltip, {
                        text: n.available ? null : G.Z.Messages.EMOJI_DISABLED_PREMIUM_TIER_LOST,
                        children: (e) =>
                            (0, s.jsx)('div', {
                                ...e,
                                className: r()(P.emojiImage, { [P.emojiDisabled]: !n.available }),
                                style: { backgroundImage: 'url('.concat(d, ')') }
                            })
                    })
                }),
                (0, s.jsxs)('div', {
                    className: P.column,
                    children: [
                        (0, s.jsx)(I.TextInput, {
                            className: r()(P.emojiAliasInput, { [P.emojiAliasInputDisabled]: l }),
                            inputClassName: P.emojiInput,
                            placeholder: G.Z.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER,
                            onKeyPress: F,
                            onChange: c,
                            onBlur: () => {
                                o !== n.name &&
                                    (0, T.dv)({
                                        guildId: t,
                                        emojiId: n.id,
                                        name: A.ZP.sanitizeEmojiName(o)
                                    });
                            },
                            size: I.TextInput.Sizes.MINI,
                            value: o,
                            maxLength: U.Yc,
                            disabled: l
                        }),
                        (0, s.jsx)('div', {
                            className: P.emojiAliasPlaceholder,
                            children: (0, s.jsx)('div', {
                                className: P.emojiAliasPlaceholderContent,
                                children: o.length > 0 ? o : G.Z.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER
                            })
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: P.column,
                    children: [
                        (0, s.jsx)(I.Avatar, {
                            src: n.user.getAvatarURL(t, 20),
                            'aria-label': u,
                            size: I.AvatarSizes.SIZE_20
                        }),
                        (0, s.jsx)(I.FormText, {
                            className: P.emojiRowText,
                            children: u
                        })
                    ]
                }),
                null != i &&
                    !l &&
                    (0, s.jsx)(I.Clickable, {
                        'aria-label': G.Z.Messages.EDIT,
                        className: P.editEmojiRolesButton,
                        onClick: () => i(n, t),
                        children: (0, s.jsx)(I.PencilIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: P.editEmojiRolesIcon
                        })
                    }),
                !l &&
                    (0, s.jsx)(m.Z, {
                        className: P.emojiRemove,
                        onClick: () => {
                            (0, T.RE)(t, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t &&
                                    E.Z.show({
                                        title: G.Z.Messages.GENERIC_ERROR_TITLE,
                                        body: G.Z.Messages.RATE_LIMITED
                                    });
                            });
                        }
                    })
            ]
        });
    },
    w = (e) => {
        let { isLoading: t, staticEmojis: a, animatedEmojis: i, theme: r, guild: l } = e;
        return t
            ? (0, s.jsx)(I.Spinner, {
                  className: P.spinner,
                  type: I.Spinner.Type.SPINNING_CIRCLE
              })
            : 0 === a.length && 0 === i.length
              ? (0, s.jsxs)(I.EmptyState, {
                    theme: r,
                    className: P.empty,
                    children: [
                        (0, s.jsx)(I.EmptyStateImage, {
                            darkSrc: n(458601),
                            lightSrc: n(673557),
                            width: 272,
                            height: 212
                        }),
                        (0, s.jsx)(I.EmptyStateText, {
                            note: G.Z.Messages.NO_EMOJI,
                            children: G.Z.Messages.NO_EMOJI_TITLE
                        })
                    ]
                })
              : (0, s.jsxs)('div', {
                    children: [
                        (0, s.jsx)(H, {
                            title: G.Z.Messages.EMOJI,
                            maxSlots: l.getMaxEmojiSlots(),
                            emojiCount: a.length
                        }),
                        (0, s.jsx)(V, {
                            emojis: a,
                            guild: l
                        }),
                        (0, s.jsx)(H, {
                            title: G.Z.Messages.ANIMATED_EMOJI,
                            maxSlots: l.getMaxEmojiSlots(),
                            emojiCount: i.length
                        }),
                        (0, s.jsx)(V, {
                            emojis: i,
                            guild: l
                        })
                    ]
                });
    },
    H = (e) => {
        let { title: t, maxSlots: n, emojiCount: a } = e;
        return (0, s.jsxs)(I.FormTitle, {
            tag: I.FormTitleTags.H2,
            className: P.title,
            children: [
                t,
                (0, s.jsxs)('span', {
                    children: [' \u2014 ', G.Z.Messages.EMOJI_SLOTS_AVAILABLE.format({ count: n - a })]
                })
            ]
        });
    },
    V = (e) => {
        let { emojis: t, guild: n, onEdit: i, editingDisabled: r = !1 } = e,
            l = a.useMemo(() => [...t].reverse(), [t]),
            { canManageGuildExpression: o } = (0, R.Gw)(n);
        return 0 === t.length
            ? (0, s.jsx)(I.FormText, {
                  type: I.FormTextTypes.DESCRIPTION,
                  className: P.content,
                  children: G.Z.Messages.NO_EMOJI_BODY
              })
            : (0, s.jsxs)(I.FormSection, {
                  className: P.content,
                  children: [
                      (0, s.jsxs)('div', {
                          className: P.emojiTable,
                          children: [
                              (0, s.jsx)(I.FormText, {
                                  type: I.FormTextTypes.DESCRIPTION,
                                  className: P.emojiColumn,
                                  children: G.Z.Messages.GUILD_SETTINGS_EMOJI_IMAGE
                              }),
                              (0, s.jsx)(I.FormText, {
                                  type: I.FormTextTypes.DESCRIPTION,
                                  className: P.columnLabel,
                                  children: G.Z.Messages.GUILD_SETTINGS_EMOJI_NAME
                              }),
                              (0, s.jsx)(I.FormText, {
                                  type: I.FormTextTypes.DESCRIPTION,
                                  className: P.columnLabel,
                                  children: G.Z.Messages.UPLOADED_BY
                              })
                          ]
                      }),
                      l.map((e) =>
                          (0, s.jsx)(
                              k,
                              {
                                  guildId: n.id,
                                  emoji: e,
                                  onEdit: i,
                                  editingDisabled: r || !o(e)
                              },
                              e.id
                          )
                      )
                  ]
              });
    },
    Y = (e) => {
        let t,
            n,
            a,
            { staticEmojiCount: i, animatedEmojiCount: r, guild: l } = e,
            o = l.getMaxEmojiSlots(),
            c = Math.min(o - i, o - r),
            d = l.premiumTier,
            u = (0, M.FZ)(d, l.id);
        return null == u || d === b.Eu4.TIER_3 || c > 0
            ? null
            : (c > o ? ((t = G.Z.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_HEADER.format({ level: u })), (n = G.Z.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_TEXT.format({ level: u })), (a = b.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL)) : ((t = G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER), (n = G.Z.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TEXT.format({ level: u })), (a = b.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, s.jsx)(C.Z, {
                  header: t,
                  text: n,
                  guild: l,
                  analyticsLocation: {
                      page: b.ZY5.GUILD_SETTINGS,
                      section: b.jXE.GUILD_SETTINGS_STICKERS,
                      object: a,
                      objectType: (0, M.ge)(u)
                  }
              }));
    };
t.ZP = () => {
    let e = (0, _.e7)([Z.Z], () => Z.Z.getGuild()),
        [t, i] = a.useState('');
    o()(null != e, 'ConnectedGuildSettingsEmoji must be rendered within a guild context');
    let r = (0, _.e7)([L.Z], () => L.Z.theme),
        { canCreateExpressions: l } = (0, R.XJ)(e),
        { revision: c, emojis: E } = (0, _.cj)([j.Z], () => ({
            revision: j.Z.getEmojiRevision(e.id),
            emojis: j.Z.getEmojis(e.id)
        })),
        T = (0, S.Z)(c),
        [m, C] = a.useState(!1),
        [O, A] = a.useState(!1),
        M = a.useRef(null);
    a.useEffect(() => {
        m && W();
    }, [m]),
        a.useEffect(() => {
            y(e.id);
        }, [e.id]),
        a.useEffect(() => {
            null != T && T < c && y(e.id);
        }, [c, T, e.id]);
    let [D, B] = a.useMemo(() => {
            let t = null == E ? void 0 : E.filter((t) => !(0, x.Kt)(t, e.id)),
                [n, s] = d().partition(t, (e) => !e.animated);
            return [n, s];
        }, [E, e.id]),
        F = e.getMaxEmojiSlots(),
        k = Math.max(F - D.length, F - B.length),
        H = (n, s, a) =>
            (0, h.G)({
                data: n,
                file: s,
                image: a,
                guildId: e.id,
                uploadId: t,
                hideErrorModal: !0
            }),
        V = async (n) => {
            i((0, u.Z)()),
                f.default.track(b.rMx.EMOJI_UPLOAD_STARTED, {
                    guild_id: e.id,
                    upload_id: t
                }),
                await (0, p._)(n, H),
                C(!0);
        },
        W = () => {
            null !== M.current && ((0, I.closeModal)(M.current), (M.current = null));
        },
        z = async (e) => {
            M.current = await (0, I.openModalLazy)(async () => {
                let { default: t } = await n.e('16169').then(n.bind(n, 935333));
                return (n) =>
                    (0, s.jsx)(t, {
                        processFiles: () => V(e),
                        ...n
                    });
            });
        },
        K = (0, g.l)(e);
    return (0, s.jsxs)('div', {
        className: P.emojiSettings,
        children: [
            0 === k
                ? null
                : (0, s.jsx)(N.Z, {
                      className: P.emojiUploadContainer,
                      onDrop: z
                  }),
            (0, s.jsxs)(I.FormSection, {
                tag: I.FormTitleTags.H1,
                title: G.Z.Messages.EMOJI,
                children: [
                    (0, s.jsx)(Y, {
                        guild: e,
                        staticEmojiCount: D.length,
                        animatedEmojiCount: B.length
                    }),
                    (0, s.jsxs)(I.FormSection, {
                        className: P.uploader,
                        children: [
                            (0, s.jsx)(I.FormText, {
                                type: I.FormTextTypes.DESCRIPTION,
                                children: G.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_TO_SERVER_DESCRIPTION.format({ count: F })
                            }),
                            K &&
                                (0, s.jsx)(I.FormText, {
                                    type: I.FormTextTypes.DESCRIPTION,
                                    children: G.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_SETTINGS_MANAGE_PREMIUM_TEXT.format({ onClick: () => v.Z.open(e.id, b.pNK.ROLE_SUBSCRIPTIONS, void 0, b.KsC.ROLE_SUBSCRIPTION_EMOJI) })
                                }),
                            (0, s.jsxs)('div', {
                                children: [
                                    (0, s.jsx)(I.FormTitle, {
                                        tag: I.FormTitleTags.H2,
                                        className: P.emojiUploadUploadRequirementsHeading,
                                        children: G.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_HEADING
                                    }),
                                    (0, s.jsxs)('ul', {
                                        className: P.emojiUploadUploadRequirementsList,
                                        children: [
                                            (0, s.jsx)('li', {
                                                children: (0, s.jsx)(I.FormText, {
                                                    type: I.FormTextTypes.DESCRIPTION,
                                                    children: G.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_1
                                                })
                                            }),
                                            (0, s.jsx)('li', {
                                                children: (0, s.jsx)(I.FormText, {
                                                    type: I.FormTextTypes.DESCRIPTION,
                                                    children: G.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_2.format({ maxSize: U.xG })
                                                })
                                            }),
                                            (0, s.jsx)('li', {
                                                children: (0, s.jsx)(I.FormText, {
                                                    type: I.FormTextTypes.DESCRIPTION,
                                                    children: G.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_3
                                                })
                                            }),
                                            (0, s.jsx)('li', {
                                                children: (0, s.jsx)(I.FormText, {
                                                    type: I.FormTextTypes.DESCRIPTION,
                                                    children: G.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_4
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, s.jsxs)(I.Button, {
                                tabIndex: -1,
                                size: I.Button.Sizes.MEDIUM,
                                onClick: () => {
                                    let t = (0, u.Z)();
                                    i(t),
                                        f.default.track(b.rMx.EMOJI_UPLOAD_STARTED, {
                                            guild_id: e.id,
                                            upload_id: t
                                        });
                                },
                                disabled: O || 0 === k || !l,
                                submitting: O,
                                focusProps: { within: !0 },
                                children: [
                                    G.Z.Messages.UPLOAD_EMOJI,
                                    k > 0
                                        ? (0, s.jsx)(p.Z, {
                                              disabled: O || 0 === k || !l,
                                              tabIndex: 0,
                                              onChange: H,
                                              setLoading: A,
                                              multiple: !0
                                          })
                                        : null
                                ]
                            })
                        ]
                    }),
                    (0, s.jsx)(w, {
                        isLoading: null == E,
                        staticEmojis: D,
                        animatedEmojis: B,
                        guild: e,
                        theme: r
                    })
                ]
            })
        ]
    });
};
