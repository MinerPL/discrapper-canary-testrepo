E.d(_, {
    mp: function () {
        return p;
    },
    tP: function () {
        return h;
    },
    xO: function () {
        return R;
    }
}),
    E(653041);
var s = E(735250),
    n = E(470079),
    t = E(120356),
    r = E.n(t),
    a = E(392711),
    T = E.n(a),
    I = E(913527),
    l = E.n(I),
    o = E(481060),
    A = E(596454),
    i = E(835473),
    N = E(479099),
    D = E(592125),
    L = E(430824),
    S = E(594174),
    u = E(934415),
    c = E(823379),
    O = E(624138),
    U = E(909746),
    d = E(981631),
    G = E(689938),
    M = E(451316);
function R(e, _) {
    let E = U.vc[e.targetType];
    return null != E && !0 === E[_.key];
}
let g = {
    [d.vB8.CREATE]: M.typeCreate,
    [d.vB8.UPDATE]: M.typeUpdate,
    [d.vB8.DELETE]: M.typeDelete
};
function C(e) {
    let { applicationId: _ } = e,
        E = (0, i.q)(_);
    return null == E
        ? null
        : (0, s.jsx)(o.Text, {
              variant: 'text-md/normal',
              children: E.name
          });
}
function f(e) {
    let { changeItem: _, subChanges: E, changeNumber: n, log: t, oldValue: r, newValue: a, change: T } = e,
        I = null;
    if (('string' == typeof _ && (I = _), null != _ && 'string' != typeof _ && null != _.format)) {
        var l, i;
        I = _.format({
            user: t.user,
            target: t.target,
            oldValue: r,
            newValue: a,
            count: Array.isArray(a) ? a.length : null,
            subtarget: null !== (i = null !== (l = t.options.subtarget) && void 0 !== l ? l : T.subtarget) && void 0 !== i ? i : null,
            newColorHook: (e, _) =>
                (0, s.jsx)(
                    'div',
                    {
                        className: M.colorHook,
                        style: { backgroundColor: T.newValue }
                    },
                    _
                ),
            oldColorHook: (e, _) =>
                (0, s.jsx)(
                    'div',
                    {
                        className: M.colorHook,
                        style: { backgroundColor: T.oldValue }
                    },
                    _
                ),
            oldTagHook: (e, _) =>
                (0, s.jsx)(
                    N.Z,
                    {
                        tag: r,
                        size: N.Z.Sizes.SMALL
                    },
                    _
                ),
            newTagHook: (e, _) =>
                (0, s.jsx)(
                    N.Z,
                    {
                        tag: a,
                        size: N.Z.Sizes.SMALL
                    },
                    _
                ),
            oldEmojiHook: (e, _) => (0, s.jsx)(A.Z, { emojiId: r }, _),
            newEmojiHook: (e, _) => (0, s.jsx)(A.Z, { emojiId: a }, _),
            applicationHook: (e, _) => {
                var E;
                return (0, s.jsx)(C, { applicationId: null !== (E = null == r ? void 0 : r.application_id) && void 0 !== E ? E : null == a ? void 0 : a.application_id }, _);
            }
        });
    }
    return null == I
        ? (console.warn('No change string for', T), null)
        : '' === I
          ? null
          : (0, s.jsxs)(
                'div',
                {
                    className: M.detail,
                    style: {
                        position: 'relative',
                        top: 1
                    },
                    children: [
                        (0, s.jsxs)(o.Text, {
                            className: M.prefix,
                            variant: 'code',
                            color: (function (e) {
                                switch (e) {
                                    case d.vB8.CREATE:
                                        return 'text-positive';
                                    case d.vB8.DELETE:
                                        return 'status-danger';
                                    default:
                                        return 'text-warning';
                                }
                            })(t.actionType),
                            children: [
                                n < 10 ? '0'.concat(n) : n,
                                (0, s.jsx)('span', {
                                    className: M.dash,
                                    children: '\u2014'
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: M.change,
                            children: [
                                (0, s.jsx)('div', {
                                    className: M.changeStr,
                                    children: I
                                }),
                                null != E ? (0, s.jsx)('div', { children: E }) : null
                            ]
                        })
                    ]
                },
                n
            );
}
class p extends n.PureComponent {
    render() {
        var e, _;
        let { actionType: E, targetType: n, action: t, themeOverride: a } = this.props,
            T = null != a ? M['themeOverride'.concat((0, O.De)(a))] : null;
        let I = r()(
            M.icon,
            g[E],
            ((e = n),
            (_ = t) === d.rsA.MESSAGE_DELETE
                ? M.targetMessage
                : _ === d.rsA.AUTO_MODERATION_BLOCK_MESSAGE || _ === d.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || _ === d.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || _ === d.rsA.AUTO_MODERATION_QUARANTINE_USER
                  ? M.autoModerationBlockMessage
                  : {
                        [d.KFR.ALL]: M.targetAll,
                        [d.KFR.GUILD]: M.targetGuild,
                        [d.KFR.CHANNEL]: M.targetChannel,
                        [d.KFR.CHANNEL_OVERWRITE]: M.targetChannel,
                        [d.KFR.USER]: M.targetMember,
                        [d.KFR.ROLE]: M.targetRole,
                        [d.KFR.ONBOARDING_PROMPT]: M.targetOnboarding,
                        [d.KFR.GUILD_ONBOARDING]: M.targetOnboarding,
                        [d.KFR.HOME_SETTINGS]: M.targetOnboarding,
                        [d.KFR.INTEGRATION]: M.targetIntegration,
                        [d.KFR.INVITE]: M.targetInvite,
                        [d.KFR.WEBHOOK]: M.targetWebhook,
                        [d.KFR.EMOJI]: M.targetEmoji,
                        [d.KFR.STICKER]: M.targetSticker,
                        [d.KFR.STAGE_INSTANCE]: M.targetStageInstance,
                        [d.KFR.GUILD_SCHEDULED_EVENT]: M.targetGuildScheduledEvent,
                        [d.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: M.targetGuildScheduledEvent,
                        [d.KFR.THREAD]: M.thread,
                        [d.KFR.APPLICATION_COMMAND]: M.applicationCommand,
                        [d.KFR.AUTO_MODERATION_RULE]: M.autoModerationRule,
                        [d.KFR.GUILD_HOME]: M.targetGuildHome,
                        [d.KFR.GUILD_SOUNDBOARD]: M.targetGuildSoundboard,
                        [d.KFR.VOICE_CHANNEL_STATUS]: M.targetChannel
                    }[e]),
            T
        );
        return (0, s.jsx)('div', { className: I });
    }
}
function h(e) {
    let { log: _, guild: E, onContentClick: t, className: a } = e,
        I = n.useCallback(
            (e) => {
                if (null == _.changes) return null;
                let n = 0,
                    I = T()
                        .flatten(
                            _.changes.map((t) => {
                                if (R(_, t)) return null;
                                let { oldValue: r, newValue: a } = (() => {
                                        if ((_.action === d.rsA.CHANNEL_UPDATE || _.action === d.rsA.CHANNEL_CREATE) && t.key === d.zUn.TYPE) {
                                            var e, E;
                                            return {
                                                oldValue: null !== (e = t.oldValue) && void 0 !== e ? e : (0, u.a5)({ type: t.oldValue }),
                                                newValue: null !== (E = t.newValue) && void 0 !== E ? E : (0, u.a5)({ type: t.newValue })
                                            };
                                        }
                                        if (_.action === d.rsA.MEMBER_UPDATE && t.key === d.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = l()(t.newValue);
                                            return {
                                                oldValue: t.oldValue,
                                                newValue: e.isValid() ? e.calendar() : t.newValue
                                            };
                                        }
                                        return t;
                                    })(),
                                    I = (() => {
                                        if (_.action === d.rsA.MEMBER_ROLE_UPDATE)
                                            return (function (e) {
                                                let { newValue: _ } = e;
                                                return Array.isArray(_)
                                                    ? _.map((e) =>
                                                          (0, s.jsx)(
                                                              'div',
                                                              {
                                                                  className: M.subListItem,
                                                                  children: e.name
                                                              },
                                                              e.id
                                                          )
                                                      )
                                                    : null;
                                            })(t);
                                        if (_.targetType === d.KFR.ROLE || _.action === d.rsA.CHANNEL_OVERWRITE_CREATE || _.action === d.rsA.CHANNEL_OVERWRITE_UPDATE)
                                            return (function (e, _) {
                                                let { newValue: E } = e;
                                                return Array.isArray(E)
                                                    ? E.map((e, E) =>
                                                          (0, s.jsx)(
                                                              'div',
                                                              {
                                                                  className: M.subListItem,
                                                                  children: U.hQ(e, _)
                                                              },
                                                              E
                                                          )
                                                      )
                                                    : null;
                                            })(t, _);
                                        if ((_.action === d.rsA.CHANNEL_UPDATE || _.action === d.rsA.THREAD_UPDATE) && t.key === d.zUn.FLAGS)
                                            return (function (e) {
                                                let { newValue: _, oldValue: E } = e,
                                                    n = [];
                                                return (Array.isArray(E) &&
                                                    (n = n.concat(
                                                        E.map((e) =>
                                                            (0, s.jsx)(
                                                                'div',
                                                                {
                                                                    className: M.subListItem,
                                                                    children: U.cT(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                Array.isArray(_) &&
                                                    (n = n.concat(
                                                        _.map((e) =>
                                                            (0, s.jsx)(
                                                                'div',
                                                                {
                                                                    className: M.subListItem,
                                                                    children: U.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                n.length > 0)
                                                    ? n
                                                    : null;
                                            })(t);
                                        else if ((_.action === d.rsA.ONBOARDING_PROMPT_UPDATE || _.action === d.rsA.ONBOARDING_PROMPT_CREATE) && t.key === d.zUn.OPTIONS)
                                            return (function (e, _, E) {
                                                let { newValue: n, oldValue: t } = e,
                                                    r = (e) => {
                                                        var _;
                                                        let s = null != E ? (null === (_ = L.Z.getRole(E.id, e)) || void 0 === _ ? void 0 : _.name) : void 0;
                                                        return null == s ? null : '@'.concat(s);
                                                    },
                                                    a = (e) => {
                                                        var _;
                                                        let E = null === (_ = D.Z.getChannel(e)) || void 0 === _ ? void 0 : _.name;
                                                        return null == E ? null : '#'.concat(E);
                                                    },
                                                    I = (e, E) => {
                                                        let { title: n, id: t } = E,
                                                            I = e.role_ids.map(r).filter(c.lm),
                                                            l = e.channel_ids.map(a).filter(c.lm),
                                                            A = E.role_ids.map(r).filter(c.lm),
                                                            i = E.channel_ids.map(a).filter(c.lm),
                                                            N = T().difference(A, I),
                                                            D = T().difference(I, A),
                                                            L = T().difference(i, l),
                                                            S = T().difference(l, i),
                                                            u = [];
                                                        return (!T().isEqual(e.title, E.title) && u.push('title'), !T().isEqual(e.description, E.description) && u.push('description'), 0 === N.length && 0 === D.length && 0 === L.length && 0 === S.length && 0 === u.length)
                                                            ? null
                                                            : (0, s.jsxs)(
                                                                  'li',
                                                                  {
                                                                      children: [
                                                                          (0, s.jsxs)('div', {
                                                                              className: M.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, s.jsx)(p, {
                                                                                      actionType: d.vB8.UPDATE,
                                                                                      targetType: _.targetType,
                                                                                      action: _.action
                                                                                  }),
                                                                                  (0, s.jsx)(o.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({ title: n })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, s.jsxs)('div', {
                                                                              className: M.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  N.length > 0 &&
                                                                                      (0, s.jsx)(o.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({ roles: N.join(', ') })
                                                                                      }),
                                                                                  D.length > 0 &&
                                                                                      (0, s.jsx)(o.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({ roles: D.join(', ') })
                                                                                      }),
                                                                                  L.length > 0 &&
                                                                                      (0, s.jsx)(o.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({ channels: L.join(', ') })
                                                                                      }),
                                                                                  S.length > 0 &&
                                                                                      (0, s.jsx)(o.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({ channels: S.join(', ') })
                                                                                      }),
                                                                                  u.map((_, n) =>
                                                                                      (0, s.jsx)(
                                                                                          o.Text,
                                                                                          {
                                                                                              variant: 'text-md/normal',
                                                                                              children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                                                                                                  key: _,
                                                                                                  oldValue: e[_],
                                                                                                  newValue: E[_]
                                                                                              })
                                                                                          },
                                                                                          n
                                                                                      )
                                                                                  )
                                                                              ]
                                                                          })
                                                                      ]
                                                                  },
                                                                  t
                                                              );
                                                    },
                                                    l = T().keyBy(null != t ? t : [], 'id'),
                                                    A = T().keyBy(null != n ? n : [], 'id'),
                                                    i = T()
                                                        .difference(Object.keys(A), Object.keys(l))
                                                        .map((e) => A[e]),
                                                    N = T()
                                                        .difference(Object.keys(l), Object.keys(A))
                                                        .map((e) => l[e]),
                                                    S = T().intersection(Object.keys(A), Object.keys(l));
                                                return (0, s.jsxs)(
                                                    'ul',
                                                    {
                                                        className: M.onboardingChangeLogContainer,
                                                        children: [
                                                            i.map((e) => {
                                                                let { role_ids: E, channel_ids: n, title: t, id: T } = e,
                                                                    I = (null != E ? E : []).map(r).filter(c.lm),
                                                                    l = (null != n ? n : []).map(a).filter(c.lm);
                                                                return (0, s.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, s.jsxs)('div', {
                                                                                className: M.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, s.jsx)(p, {
                                                                                        actionType: d.vB8.CREATE,
                                                                                        targetType: _.targetType,
                                                                                        action: _.action
                                                                                    }),
                                                                                    (0, s.jsx)(o.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({ title: t })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, s.jsxs)('div', {
                                                                                className: M.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    I.length > 0 &&
                                                                                        (0, s.jsx)(o.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({ roles: I.join(', ') })
                                                                                        }),
                                                                                    l.length > 0 &&
                                                                                        (0, s.jsx)(o.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({ channels: l.join(', ') })
                                                                                        })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    },
                                                                    T
                                                                );
                                                            }),
                                                            N.map((e) =>
                                                                (0, s.jsx)(
                                                                    'li',
                                                                    {
                                                                        children: (0, s.jsxs)('div', {
                                                                            className: M.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, s.jsx)(p, {
                                                                                    actionType: d.vB8.DELETE,
                                                                                    targetType: _.targetType,
                                                                                    action: _.action
                                                                                }),
                                                                                (0, s.jsx)(o.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({ title: e.title })
                                                                                })
                                                                            ]
                                                                        })
                                                                    },
                                                                    e.id
                                                                )
                                                            ),
                                                            S.map((e) => I(l[e], A[e]))
                                                        ]
                                                    },
                                                    'options'
                                                );
                                            })(t, _, E);
                                        else if (_.action === d.rsA.HOME_SETTINGS_CREATE || _.action === d.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, _) {
                                                let { oldValue: E, newValue: n, key: t } = e,
                                                    { targetType: r, action: a } = _;
                                                switch (t) {
                                                    case d.zUn.WELCOME_MESSAGE:
                                                        return ((e, _) => {
                                                            var E, n, t, r, a;
                                                            let T = S.default.getUser(null == _ ? void 0 : null === (E = _.author_ids) || void 0 === E ? void 0 : E[0]),
                                                                I = S.default.getUser(null === (n = e.author_ids) || void 0 === n ? void 0 : n[0]),
                                                                l =
                                                                    (null == T ? void 0 : T.id) !== (null == I ? void 0 : I.id)
                                                                        ? (0, s.jsx)('li', {
                                                                              children: (0, s.jsx)('div', {
                                                                                  className: M.onboardingChangeLogItemTitle,
                                                                                  children: (0, s.jsx)(o.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                                                                                          oldUser: null !== (t = null == T ? void 0 : T.username) && void 0 !== t ? t : G.Z.Messages.NONE,
                                                                                          newUser: null !== (r = null == I ? void 0 : I.username) && void 0 !== r ? r : G.Z.Messages.NONE
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null,
                                                                A =
                                                                    (null == _ ? void 0 : _.message) !== e.message
                                                                        ? (0, s.jsx)('li', {
                                                                              children: (0, s.jsx)('div', {
                                                                                  className: M.onboardingChangeLogItemTitle,
                                                                                  children: (0, s.jsx)(o.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                                                                                          oldMessage: null !== (a = null == _ ? void 0 : _.message) && void 0 !== a ? a : G.Z.Messages.NONE,
                                                                                          newMessage: e.message
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null;
                                                            return (0, s.jsxs)('ul', {
                                                                children: [l, A]
                                                            });
                                                        })(n, E);
                                                    case d.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, _) => {
                                                            let E = e.map((e) => e.channel_id),
                                                                n = _.map((e) => e.channel_id),
                                                                t = T().difference(n, E),
                                                                I = T().difference(E, n),
                                                                l = _.filter((e) => t.includes(e.channel_id)),
                                                                A = e.filter((e) => I.includes(e.channel_id));
                                                            return (0, s.jsxs)('ul', {
                                                                children: [
                                                                    l.map((e) =>
                                                                        (0, s.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, s.jsxs)('div', {
                                                                                    className: M.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, s.jsx)(p, {
                                                                                            actionType: d.vB8.CREATE,
                                                                                            targetType: r,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, s.jsx)(o.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({ name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    A.map((e) =>
                                                                        (0, s.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, s.jsxs)('div', {
                                                                                    className: M.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, s.jsx)(p, {
                                                                                            actionType: d.vB8.DELETE,
                                                                                            targetType: r,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, s.jsx)(o.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({ name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    )
                                                                ]
                                                            });
                                                        })(null != E ? E : [], n);
                                                    case d.zUn.RESOURCE_CHANNELS:
                                                        return ((e, _) => {
                                                            let E = e.map((e) => e.channel_id),
                                                                n = _.map((e) => e.channel_id),
                                                                t = T().difference(n, E),
                                                                I = T().difference(E, n),
                                                                l = _.filter((e) => t.includes(e.channel_id)),
                                                                A = e.filter((e) => I.includes(e.channel_id));
                                                            return (0, s.jsxs)('ul', {
                                                                children: [
                                                                    l.map((e) =>
                                                                        (0, s.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, s.jsxs)('div', {
                                                                                    className: M.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, s.jsx)(p, {
                                                                                            actionType: d.vB8.CREATE,
                                                                                            targetType: r,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, s.jsx)(o.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({ name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    A.map((e) =>
                                                                        (0, s.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, s.jsxs)('div', {
                                                                                    className: M.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, s.jsx)(p, {
                                                                                            actionType: d.vB8.DELETE,
                                                                                            targetType: r,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, s.jsx)(o.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: G.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({ name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    )
                                                                ]
                                                            });
                                                        })(null != E ? E : [], n);
                                                    default:
                                                        return null;
                                                }
                                            })(t, _);
                                        return null;
                                    })(),
                                    A = e[t.key];
                                return ('function' == typeof A && (A = A(t)), Array.isArray(A))
                                    ? A.map((e) =>
                                          f({
                                              changeItem: e,
                                              subChanges: I,
                                              changeNumber: ++n,
                                              log: _,
                                              oldValue: r,
                                              newValue: a,
                                              change: t
                                          })
                                      )
                                    : f({
                                          changeItem: A,
                                          subChanges: I,
                                          changeNumber: ++n,
                                          log: _,
                                          oldValue: r,
                                          newValue: a,
                                          change: t
                                      });
                            })
                        )
                        .filter(c.lm);
                return (0, s.jsx)(o.Clickable, {
                    onClick: t,
                    className: r()(M.changeDetails, a),
                    children: I
                });
            },
            [_, E, t, a]
        ),
        A = n.useMemo(() => {
            switch (_.targetType) {
                case d.KFR.GUILD:
                    return I(U.pY());
                case d.KFR.CHANNEL:
                case d.KFR.CHANNEL_OVERWRITE:
                    return I(U.ML());
                case d.KFR.USER:
                    return I(U.lU());
                case d.KFR.ROLE:
                    return I(U.HE());
                case d.KFR.ONBOARDING_PROMPT:
                    return I(U.oD());
                case d.KFR.GUILD_ONBOARDING:
                    return I(U.EN());
                case d.KFR.HOME_SETTINGS:
                    return I(U.hx());
                case d.KFR.INVITE:
                    return I(U.HN());
                case d.KFR.WEBHOOK:
                    return I(U.lR());
                case d.KFR.EMOJI:
                    return I(U.N$());
                case d.KFR.STICKER:
                    return I(U.Bq());
                case d.KFR.INTEGRATION:
                    return I(U.K());
                case d.KFR.STAGE_INSTANCE:
                    return I(U.C2());
                case d.KFR.GUILD_SCHEDULED_EVENT:
                    return I(U.uB());
                case d.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                    return I(U.pi());
                case d.KFR.THREAD:
                    return I(U.pA());
                case d.KFR.APPLICATION_COMMAND:
                    return I(U.vm(_.changes));
                case d.KFR.AUTO_MODERATION_RULE:
                    return I(U.rK());
                case d.KFR.GUILD_SOUNDBOARD:
                    return I(U.C0());
                case d.KFR.VOICE_CHANNEL_STATUS:
                    return I(U.F1());
            }
        }, [_.targetType, _.changes, I]);
    return (0, s.jsx)(s.Fragment, { children: A });
}
