n.d(t, {
    mp: function () {
        return C;
    },
    tP: function () {
        return M;
    },
    xO: function () {
        return U;
    }
}),
    n(653041);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(392711),
    o = n.n(a),
    E = n(913527),
    u = n.n(E),
    c = n(481060),
    d = n(596454),
    _ = n(835473),
    A = n(479099),
    T = n(592125),
    I = n(430824),
    g = n(594174),
    N = n(934415),
    f = n(823379),
    R = n(624138),
    O = n(909746),
    S = n(981631),
    p = n(388032),
    D = n(451316);
function U(e, t) {
    let n = O.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let h = {
    [S.vB8.CREATE]: D.typeCreate,
    [S.vB8.UPDATE]: D.typeUpdate,
    [S.vB8.DELETE]: D.typeDelete
};
function L(e) {
    let { applicationId: t } = e,
        n = (0, _.q)(t);
    return null == n
        ? null
        : (0, r.jsx)(c.Text, {
              variant: 'text-md/normal',
              children: n.name
          });
}
class C extends l.PureComponent {
    render() {
        var e, t;
        let { actionType: n, targetType: l, action: i, themeOverride: a } = this.props,
            o = null != a ? D['themeOverride'.concat((0, R.De)(a))] : null;
        let E = s()(
            D.icon,
            h[n],
            ((e = l),
            (t = i) === S.rsA.MESSAGE_DELETE
                ? D.targetMessage
                : t === S.rsA.AUTO_MODERATION_BLOCK_MESSAGE || t === S.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || t === S.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || t === S.rsA.AUTO_MODERATION_QUARANTINE_USER
                  ? D.autoModerationBlockMessage
                  : {
                        [S.KFR.ALL]: D.targetAll,
                        [S.KFR.GUILD]: D.targetGuild,
                        [S.KFR.CHANNEL]: D.targetChannel,
                        [S.KFR.CHANNEL_OVERWRITE]: D.targetChannel,
                        [S.KFR.USER]: D.targetMember,
                        [S.KFR.ROLE]: D.targetRole,
                        [S.KFR.ONBOARDING_PROMPT]: D.targetOnboarding,
                        [S.KFR.GUILD_ONBOARDING]: D.targetOnboarding,
                        [S.KFR.HOME_SETTINGS]: D.targetOnboarding,
                        [S.KFR.INTEGRATION]: D.targetIntegration,
                        [S.KFR.INVITE]: D.targetInvite,
                        [S.KFR.WEBHOOK]: D.targetWebhook,
                        [S.KFR.EMOJI]: D.targetEmoji,
                        [S.KFR.STICKER]: D.targetSticker,
                        [S.KFR.STAGE_INSTANCE]: D.targetStageInstance,
                        [S.KFR.GUILD_SCHEDULED_EVENT]: D.targetGuildScheduledEvent,
                        [S.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: D.targetGuildScheduledEvent,
                        [S.KFR.THREAD]: D.thread,
                        [S.KFR.APPLICATION_COMMAND]: D.applicationCommand,
                        [S.KFR.AUTO_MODERATION_RULE]: D.autoModerationRule,
                        [S.KFR.GUILD_HOME]: D.targetGuildHome,
                        [S.KFR.GUILD_SOUNDBOARD]: D.targetGuildSoundboard,
                        [S.KFR.VOICE_CHANNEL_STATUS]: D.targetChannel
                    }[e]),
            o
        );
        return (0, r.jsx)('div', { className: E });
    }
}
function M(e) {
    let { log: t, guild: n, onContentClick: i, className: a } = e,
        E = l.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let l = 0,
                    E = o()
                        .flatten(
                            t.changes.map((i) => {
                                if (U(t, i)) return null;
                                let { oldValue: s, newValue: a } = (() => {
                                        if ((t.action === S.rsA.CHANNEL_UPDATE || t.action === S.rsA.CHANNEL_CREATE) && i.key === S.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null !== (e = i.oldValue) && void 0 !== e ? e : (0, N.a5)({ type: i.oldValue }),
                                                newValue: null !== (n = i.newValue) && void 0 !== n ? n : (0, N.a5)({ type: i.newValue })
                                            };
                                        }
                                        if (t.action === S.rsA.MEMBER_UPDATE && i.key === S.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = u()(i.newValue);
                                            return {
                                                oldValue: i.oldValue,
                                                newValue: e.isValid() ? e.calendar() : i.newValue
                                            };
                                        }
                                        return i;
                                    })(),
                                    E = (() => {
                                        if (t.action === S.rsA.MEMBER_ROLE_UPDATE)
                                            return (function (e) {
                                                let { newValue: t } = e;
                                                return Array.isArray(t)
                                                    ? t.map((e) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: D.subListItem,
                                                                  children: e.name
                                                              },
                                                              e.id
                                                          )
                                                      )
                                                    : null;
                                            })(i);
                                        if (t.targetType === S.KFR.ROLE || t.action === S.rsA.CHANNEL_OVERWRITE_CREATE || t.action === S.rsA.CHANNEL_OVERWRITE_UPDATE)
                                            return (function (e, t) {
                                                let { newValue: n } = e;
                                                return Array.isArray(n)
                                                    ? n.map((e, n) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: D.subListItem,
                                                                  children: O.hQ(e, t)
                                                              },
                                                              n
                                                          )
                                                      )
                                                    : null;
                                            })(i, t);
                                        if ((t.action === S.rsA.CHANNEL_UPDATE || t.action === S.rsA.THREAD_UPDATE) && i.key === S.zUn.FLAGS)
                                            return (function (e) {
                                                let { newValue: t, oldValue: n } = e,
                                                    l = [];
                                                return (Array.isArray(n) &&
                                                    (l = l.concat(
                                                        n.map((e) =>
                                                            (0, r.jsx)(
                                                                'div',
                                                                {
                                                                    className: D.subListItem,
                                                                    children: O.cT(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                Array.isArray(t) &&
                                                    (l = l.concat(
                                                        t.map((e) =>
                                                            (0, r.jsx)(
                                                                'div',
                                                                {
                                                                    className: D.subListItem,
                                                                    children: O.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                l.length > 0)
                                                    ? l
                                                    : null;
                                            })(i);
                                        else if ((t.action === S.rsA.ONBOARDING_PROMPT_UPDATE || t.action === S.rsA.ONBOARDING_PROMPT_CREATE) && i.key === S.zUn.OPTIONS)
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: i } = e,
                                                    s = (e) => {
                                                        var t;
                                                        let r = null != n ? (null === (t = I.Z.getRole(n.id, e)) || void 0 === t ? void 0 : t.name) : void 0;
                                                        return null == r ? null : '@'.concat(r);
                                                    },
                                                    a = (e) => {
                                                        var t;
                                                        let n = null === (t = T.Z.getChannel(e)) || void 0 === t ? void 0 : t.name;
                                                        return null == n ? null : '#'.concat(n);
                                                    },
                                                    E = (e, n) => {
                                                        let { title: l, id: i } = n,
                                                            E = e.role_ids.map(s).filter(f.lm),
                                                            u = e.channel_ids.map(a).filter(f.lm),
                                                            d = n.role_ids.map(s).filter(f.lm),
                                                            _ = n.channel_ids.map(a).filter(f.lm),
                                                            A = o().difference(d, E),
                                                            T = o().difference(E, d),
                                                            I = o().difference(_, u),
                                                            g = o().difference(u, _),
                                                            N = [];
                                                        return (!o().isEqual(e.title, n.title) && N.push('title'), !o().isEqual(e.description, n.description) && N.push('description'), 0 === A.length && 0 === T.length && 0 === I.length && 0 === g.length && 0 === N.length)
                                                            ? null
                                                            : (0, r.jsxs)(
                                                                  'li',
                                                                  {
                                                                      children: [
                                                                          (0, r.jsxs)('div', {
                                                                              className: D.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, r.jsx)(C, {
                                                                                      actionType: S.vB8.UPDATE,
                                                                                      targetType: t.targetType,
                                                                                      action: t.action
                                                                                  }),
                                                                                  (0, r.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: p.intl.format(p.t['WZO+iY'], { title: l })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, r.jsxs)('div', {
                                                                              className: D.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  A.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: p.intl.format(p.t['R+km+f'], { roles: A.join(', ') })
                                                                                      }),
                                                                                  T.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: p.intl.format(p.t.xIVRoa, { roles: T.join(', ') })
                                                                                      }),
                                                                                  I.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: p.intl.format(p.t.iYowX1, { channels: I.join(', ') })
                                                                                      }),
                                                                                  g.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: p.intl.format(p.t.JLdJpK, { channels: g.join(', ') })
                                                                                      }),
                                                                                  N.map((t, l) =>
                                                                                      (0, r.jsx)(
                                                                                          c.Text,
                                                                                          {
                                                                                              variant: 'text-md/normal',
                                                                                              children: p.intl.format(p.t['0698zc'], {
                                                                                                  key: t,
                                                                                                  oldValue: e[t],
                                                                                                  newValue: n[t]
                                                                                              })
                                                                                          },
                                                                                          l
                                                                                      )
                                                                                  )
                                                                              ]
                                                                          })
                                                                      ]
                                                                  },
                                                                  i
                                                              );
                                                    },
                                                    u = o().keyBy(null != i ? i : [], 'id'),
                                                    d = o().keyBy(null != l ? l : [], 'id'),
                                                    _ = o()
                                                        .difference(Object.keys(d), Object.keys(u))
                                                        .map((e) => d[e]),
                                                    A = o()
                                                        .difference(Object.keys(u), Object.keys(d))
                                                        .map((e) => u[e]),
                                                    g = o().intersection(Object.keys(d), Object.keys(u));
                                                return (0, r.jsxs)(
                                                    'ul',
                                                    {
                                                        className: D.onboardingChangeLogContainer,
                                                        children: [
                                                            _.map((e) => {
                                                                let { role_ids: n, channel_ids: l, title: i, id: o } = e,
                                                                    E = (null != n ? n : []).map(s).filter(f.lm),
                                                                    u = (null != l ? l : []).map(a).filter(f.lm);
                                                                return (0, r.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)('div', {
                                                                                className: D.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(C, {
                                                                                        actionType: S.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action
                                                                                    }),
                                                                                    (0, r.jsx)(c.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: p.intl.format(p.t.CZ1tys, { title: i })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, r.jsxs)('div', {
                                                                                className: D.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    E.length > 0 &&
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: p.intl.format(p.t['gt/5z8'], { roles: E.join(', ') })
                                                                                        }),
                                                                                    u.length > 0 &&
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: p.intl.format(p.t['4q006e'], { channels: u.join(', ') })
                                                                                        })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    },
                                                                    o
                                                                );
                                                            }),
                                                            A.map((e) =>
                                                                (0, r.jsx)(
                                                                    'li',
                                                                    {
                                                                        children: (0, r.jsxs)('div', {
                                                                            className: D.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, r.jsx)(C, {
                                                                                    actionType: S.vB8.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action
                                                                                }),
                                                                                (0, r.jsx)(c.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: p.intl.format(p.t['m3dt+P'], { title: e.title })
                                                                                })
                                                                            ]
                                                                        })
                                                                    },
                                                                    e.id
                                                                )
                                                            ),
                                                            g.map((e) => E(u[e], d[e]))
                                                        ]
                                                    },
                                                    'options'
                                                );
                                            })(i, t, n);
                                        else if (t.action === S.rsA.HOME_SETTINGS_CREATE || t.action === S.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: i } = e,
                                                    { targetType: s, action: a } = t;
                                                switch (i) {
                                                    case S.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, i, s, a;
                                                            let o = g.default.getUser(null == t ? void 0 : null === (n = t.author_ids) || void 0 === n ? void 0 : n[0]),
                                                                E = g.default.getUser(null === (l = e.author_ids) || void 0 === l ? void 0 : l[0]),
                                                                u =
                                                                    (null == o ? void 0 : o.id) !== (null == E ? void 0 : E.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: D.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: p.intl.format(p.t.PrOzAw, {
                                                                                          oldUser: null !== (i = null == o ? void 0 : o.username) && void 0 !== i ? i : p.intl.string(p.t.PoWNfX),
                                                                                          newUser: null !== (s = null == E ? void 0 : E.username) && void 0 !== s ? s : p.intl.string(p.t.PoWNfX)
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null,
                                                                d =
                                                                    (null == t ? void 0 : t.message) !== e.message
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: D.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: p.intl.format(p.t.oB7rBQ, {
                                                                                          oldMessage: null !== (a = null == t ? void 0 : t.message) && void 0 !== a ? a : p.intl.string(p.t.PoWNfX),
                                                                                          newMessage: e.message
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null;
                                                            return (0, r.jsxs)('ul', {
                                                                children: [u, d]
                                                            });
                                                        })(l, n);
                                                    case S.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                i = o().difference(l, n),
                                                                E = o().difference(n, l),
                                                                u = t.filter((e) => i.includes(e.channel_id)),
                                                                d = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: D.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(C, {
                                                                                            actionType: S.vB8.CREATE,
                                                                                            targetType: s,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: p.intl.format(p.t['oFSu6+'], { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    d.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: D.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(C, {
                                                                                            actionType: S.vB8.DELETE,
                                                                                            targetType: s,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: p.intl.format(p.t.GssWam, { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    )
                                                                ]
                                                            });
                                                        })(null != n ? n : [], l);
                                                    case S.zUn.RESOURCE_CHANNELS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                i = o().difference(l, n),
                                                                E = o().difference(n, l),
                                                                u = t.filter((e) => i.includes(e.channel_id)),
                                                                d = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: D.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(C, {
                                                                                            actionType: S.vB8.CREATE,
                                                                                            targetType: s,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: p.intl.format(p.t.HlGndH, { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    d.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: D.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(C, {
                                                                                            actionType: S.vB8.DELETE,
                                                                                            targetType: s,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: p.intl.format(p.t['7pysg4'], { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    )
                                                                ]
                                                            });
                                                        })(null != n ? n : [], l);
                                                    default:
                                                        return null;
                                                }
                                            })(i, t);
                                        return null;
                                    })(),
                                    _ = e[i.key],
                                    R = 'function' == typeof _ ? _(i) : _;
                                return (function (e) {
                                    var t, n;
                                    let { changeItem: l, subChanges: i, changeNumber: s, log: a, oldValue: o, newValue: E, change: u } = e;
                                    if (null == l) return console.warn('No change string for', u), null;
                                    let _ = p.intl.format(l, {
                                        oldValue: o,
                                        newValue: E,
                                        count: Array.isArray(E) ? E.length : null,
                                        subtarget: null !== (n = null !== (t = a.options.subtarget) && void 0 !== t ? t : u.subtarget) && void 0 !== n ? n : null,
                                        newColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: D.colorHook,
                                                    style: { backgroundColor: u.newValue }
                                                },
                                                t
                                            ),
                                        oldColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: D.colorHook,
                                                    style: { backgroundColor: u.oldValue }
                                                },
                                                t
                                            ),
                                        oldTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                A.Z,
                                                {
                                                    tag: o,
                                                    size: A.Z.Sizes.SMALL
                                                },
                                                t
                                            ),
                                        newTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                A.Z,
                                                {
                                                    tag: E,
                                                    size: A.Z.Sizes.SMALL
                                                },
                                                t
                                            ),
                                        oldEmojiHook: (e, t) => (0, r.jsx)(d.Z, { emojiId: o }, t),
                                        newEmojiHook: (e, t) => (0, r.jsx)(d.Z, { emojiId: E }, t),
                                        applicationHook: (e, t) => {
                                            var n;
                                            return (0, r.jsx)(L, { applicationId: null !== (n = null == o ? void 0 : o.application_id) && void 0 !== n ? n : null == E ? void 0 : E.application_id }, t);
                                        }
                                    });
                                    return null == _
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: D.detail,
                                                  style: {
                                                      position: 'relative',
                                                      top: 1
                                                  },
                                                  children: [
                                                      (0, r.jsxs)(c.Text, {
                                                          className: D.prefix,
                                                          variant: 'code',
                                                          color: (function (e) {
                                                              switch (e) {
                                                                  case S.vB8.CREATE:
                                                                      return 'text-positive';
                                                                  case S.vB8.DELETE:
                                                                      return 'status-danger';
                                                                  default:
                                                                      return 'text-warning';
                                                              }
                                                          })(a.actionType),
                                                          children: [
                                                              s < 10 ? '0'.concat(s) : s,
                                                              (0, r.jsx)('span', {
                                                                  className: D.dash,
                                                                  children: '\u2014'
                                                              })
                                                          ]
                                                      }),
                                                      (0, r.jsxs)('div', {
                                                          className: D.change,
                                                          children: [
                                                              (0, r.jsx)('div', {
                                                                  className: D.changeStr,
                                                                  children: _
                                                              }),
                                                              null != i ? (0, r.jsx)('div', { children: i }) : null
                                                          ]
                                                      })
                                                  ]
                                              },
                                              s
                                          );
                                })({
                                    changeItem: R,
                                    subChanges: E,
                                    changeNumber: ++l,
                                    log: t,
                                    oldValue: s,
                                    newValue: a,
                                    change: i
                                });
                            })
                        )
                        .filter(f.lm);
                return (0, r.jsx)(c.Clickable, {
                    onClick: i,
                    className: s()(D.changeDetails, a),
                    children: E
                });
            },
            [t, n, i, a]
        ),
        _ = l.useMemo(() => {
            switch (t.targetType) {
                case S.KFR.GUILD:
                    return E(O.pY());
                case S.KFR.CHANNEL:
                case S.KFR.CHANNEL_OVERWRITE:
                    return E(O.ML());
                case S.KFR.USER:
                    return E(O.lU());
                case S.KFR.ROLE:
                    return E(O.HE());
                case S.KFR.ONBOARDING_PROMPT:
                    return E(O.oD());
                case S.KFR.GUILD_ONBOARDING:
                    return E(O.EN());
                case S.KFR.HOME_SETTINGS:
                    return E(O.hx());
                case S.KFR.INVITE:
                    return E(O.HN());
                case S.KFR.WEBHOOK:
                    return E(O.lR());
                case S.KFR.EMOJI:
                    return E(O.N$());
                case S.KFR.STICKER:
                    return E(O.Bq());
                case S.KFR.INTEGRATION:
                    return E(O.K());
                case S.KFR.STAGE_INSTANCE:
                    return E(O.C2());
                case S.KFR.GUILD_SCHEDULED_EVENT:
                    return E(O.uB());
                case S.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                    return E(O.pi());
                case S.KFR.THREAD:
                    return E(O.pA());
                case S.KFR.APPLICATION_COMMAND:
                    return E(O.vm(t.changes));
                case S.KFR.AUTO_MODERATION_RULE:
                    return E(O.rK());
                case S.KFR.GUILD_SOUNDBOARD:
                    return E(O.C0());
                case S.KFR.VOICE_CHANNEL_STATUS:
                    return E(O.F1());
            }
        }, [t.targetType, t.changes, E]);
    return (0, r.jsx)(r.Fragment, { children: _ });
}
