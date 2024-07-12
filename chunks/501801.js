E.d(_, {
  mp: function() {
return d;
  },
  tP: function() {
return f;
  },
  xO: function() {
return c;
  }
}), E(653041);
var s = E(735250),
  T = E(470079),
  I = E(120356),
  n = E.n(I),
  A = E(392711),
  t = E.n(A),
  a = E(913527),
  r = E.n(a),
  N = E(481060),
  L = E(596454),
  D = E(479099),
  S = E(592125),
  l = E(430824),
  U = E(594174),
  G = E(274730),
  O = E(934415),
  i = E(823379),
  M = E(624138),
  R = E(981631),
  o = E(689938),
  u = E(980468);

function c(e, _) {
  let E = G.vc[e.targetType];
  return null != E && !0 === E[_.key];
}
let C = {
  [R.vB8.CREATE]: u.typeCreate,
  [R.vB8.UPDATE]: u.typeUpdate,
  [R.vB8.DELETE]: u.typeDelete
};

function g(e) {
  let {
changeItem: _,
subChanges: E,
changeNumber: T,
log: I,
oldValue: n,
newValue: A,
change: t
  } = e, a = null;
  if ('string' == typeof _ && (a = _), null != _ && 'object' == typeof _) {
if (null == _.format) {
  let e = _[t.newValue];
  null == e && null != _[G.Et] ? _ = _[G.Et] : null != e && (_ = e);
}
if (null != _ && null != _.format) {
  var r, S;
  a = _.format({
    user: I.user,
    target: I.target,
    oldValue: n,
    newValue: A,
    count: Array.isArray(A) ? A.length : null,
    subtarget: null !== (S = null !== (r = I.options.subtarget) && void 0 !== r ? r : t.subtarget) && void 0 !== S ? S : null,
    newColorHook: (e, _) => (0, s.jsx)('div', {
      className: u.colorHook,
      style: {
        backgroundColor: t.newValue
      }
    }, _),
    oldColorHook: (e, _) => (0, s.jsx)('div', {
      className: u.colorHook,
      style: {
        backgroundColor: t.oldValue
      }
    }, _),
    oldTagHook: (e, _) => (0, s.jsx)(D.Z, {
      tag: n,
      size: D.Z.Sizes.SMALL
    }, _),
    newTagHook: (e, _) => (0, s.jsx)(D.Z, {
      tag: A,
      size: D.Z.Sizes.SMALL
    }, _),
    oldEmojiHook: (e, _) => (0, s.jsx)(L.Z, {
      emojiId: n
    }, _),
    newEmojiHook: (e, _) => (0, s.jsx)(L.Z, {
      emojiId: A
    }, _)
  });
} else
  a = _;
  }
  return null == a ? (console.warn('No change string for', t), null) : '' === a ? null : (0, s.jsxs)('div', {
className: u.detail,
style: {
  position: 'relative',
  top: 1
},
children: [
  (0, s.jsxs)(N.Text, {
    className: u.prefix,
    variant: 'code',
    color: function(e) {
      switch (e) {
        case R.vB8.CREATE:
          return 'text-positive';
        case R.vB8.DELETE:
          return 'status-danger';
        default:
          return 'text-warning';
      }
    }(I.actionType),
    children: [
      T < 10 ? '0'.concat(T) : T,
      (0, s.jsx)('span', {
        className: u.dash,
        children: '\u2014'
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: u.change,
    children: [
      (0, s.jsx)('div', {
        className: u.changeStr,
        children: a
      }),
      null != E ? (0, s.jsx)('div', {
        children: E
      }) : null
    ]
  })
]
  }, T);
}
class d extends T.PureComponent {
  render() {
var e, _;
let {
  actionType: E,
  targetType: T,
  action: I,
  themeOverride: A
} = this.props, t = null != A ? u['themeOverride'.concat((0, M.De)(A))] : null;
let a = n()(u.icon, C[E], (e = T, (_ = I) === R.rsA.MESSAGE_DELETE ? u.targetMessage : _ === R.rsA.AUTO_MODERATION_BLOCK_MESSAGE || _ === R.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || _ === R.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || _ === R.rsA.AUTO_MODERATION_QUARANTINE_USER ? u.autoModerationBlockMessage : {
  [R.KFR.ALL]: u.targetAll,
  [R.KFR.GUILD]: u.targetGuild,
  [R.KFR.CHANNEL]: u.targetChannel,
  [R.KFR.CHANNEL_OVERWRITE]: u.targetChannel,
  [R.KFR.USER]: u.targetMember,
  [R.KFR.ROLE]: u.targetRole,
  [R.KFR.ONBOARDING_PROMPT]: u.targetOnboarding,
  [R.KFR.GUILD_ONBOARDING]: u.targetOnboarding,
  [R.KFR.HOME_SETTINGS]: u.targetOnboarding,
  [R.KFR.INTEGRATION]: u.targetIntegration,
  [R.KFR.INVITE]: u.targetInvite,
  [R.KFR.WEBHOOK]: u.targetWebhook,
  [R.KFR.EMOJI]: u.targetEmoji,
  [R.KFR.STICKER]: u.targetSticker,
  [R.KFR.STAGE_INSTANCE]: u.targetStageInstance,
  [R.KFR.GUILD_SCHEDULED_EVENT]: u.targetGuildScheduledEvent,
  [R.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: u.targetGuildScheduledEvent,
  [R.KFR.THREAD]: u.thread,
  [R.KFR.APPLICATION_COMMAND]: u.applicationCommand,
  [R.KFR.AUTO_MODERATION_RULE]: u.autoModerationRule,
  [R.KFR.GUILD_HOME]: u.targetGuildHome,
  [R.KFR.GUILD_SOUNDBOARD]: u.targetGuildSoundboard,
  [R.KFR.VOICE_CHANNEL_STATUS]: u.targetChannel
} [e]), t);
return (0, s.jsx)('div', {
  className: a
});
  }
}

function f(e) {
  let {
log: _,
guild: E,
onContentClick: I,
className: A
  } = e, a = T.useCallback(e => {
if (null == _.changes)
  return null;
let T = 0,
  a = t().flatten(_.changes.map(I => {
    let {
      oldValue: n,
      newValue: A
    } = I, a = null;
    if (_.action === R.rsA.MEMBER_ROLE_UPDATE ? a = function(e) {
        let {
          newValue: _
        } = e;
        return Array.isArray(_) ? _.map(e => (0, s.jsx)('div', {
          className: u.subListItem,
          children: e.name
        }, e.id)) : null;
      }(I) : _.targetType === R.KFR.ROLE || _.action === R.rsA.CHANNEL_OVERWRITE_CREATE || _.action === R.rsA.CHANNEL_OVERWRITE_UPDATE ? a = function(e, _) {
        let {
          newValue: E
        } = e;
        return Array.isArray(E) ? E.map((e, E) => (0, s.jsx)('div', {
          className: u.subListItem,
          children: G.hQ(e, _)
        }, E)) : null;
      }(I, _) : (_.action === R.rsA.CHANNEL_UPDATE || _.action === R.rsA.THREAD_UPDATE) && I.key === R.zUn.FLAGS && (a = function(e) {
        let {
          newValue: _,
          oldValue: E
        } = e, T = [];
        return (Array.isArray(E) && (T = T.concat(E.map(e => (0, s.jsx)('div', {
          className: u.subListItem,
          children: G.cT(e)
        }, e)))), Array.isArray(_) && (T = T.concat(_.map(e => (0, s.jsx)('div', {
          className: u.subListItem,
          children: G.em(e)
        }, e)))), T.length > 0) ? T : null;
      }(I)), (_.action === R.rsA.CHANNEL_UPDATE || _.action === R.rsA.CHANNEL_CREATE) && I.key === R.zUn.TYPE && (null != n && (n = (0, O.a5)({
        type: n
      })), null != A && (A = (0, O.a5)({
        type: A
      }))), _.action === R.rsA.MEMBER_UPDATE && I.key === R.zUn.COMMUNICATION_DISABLED_UNTIL) {
      if (null == (A = r()(A)) || !A.isValid())
        return null;
      A = A.calendar();
    }
    (_.action === R.rsA.ONBOARDING_PROMPT_UPDATE || _.action === R.rsA.ONBOARDING_PROMPT_CREATE) && I.key === R.zUn.OPTIONS && (a = function(e, _, E) {
      let {
        newValue: T,
        oldValue: I
      } = e, n = e => {
        var _;
        let s = null != E ? null === (_ = l.Z.getRole(E.id, e)) || void 0 === _ ? void 0 : _.name : void 0;
        return null == s ? null : '@'.concat(s);
      }, A = e => {
        var _;
        let E = null === (_ = S.Z.getChannel(e)) || void 0 === _ ? void 0 : _.name;
        return null == E ? null : '#'.concat(E);
      }, a = (e, E) => {
        let {
          title: T,
          id: I
        } = E, a = e.role_ids.map(n).filter(i.lm), r = e.channel_ids.map(A).filter(i.lm), L = E.role_ids.map(n).filter(i.lm), D = E.channel_ids.map(A).filter(i.lm), S = t().difference(L, a), l = t().difference(a, L), U = t().difference(D, r), G = t().difference(r, D), O = [];
        return (!t().isEqual(e.title, E.title) && O.push('title'), !t().isEqual(e.description, E.description) && O.push('description'), 0 === S.length && 0 === l.length && 0 === U.length && 0 === G.length && 0 === O.length) ? null : (0, s.jsxs)('li', {
          children: [
            (0, s.jsxs)('div', {
              className: u.onboardingChangeLogItemTitle,
              children: [
                (0, s.jsx)(d, {
                  actionType: R.vB8.UPDATE,
                  targetType: _.targetType,
                  action: _.action
                }),
                (0, s.jsx)(N.Text, {
                  variant: 'text-md/normal',
                  children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({
                    title: T
                  })
                })
              ]
            }),
            (0, s.jsxs)('div', {
              className: u.onboardingChangeLogItemChanges,
              children: [
                S.length > 0 && (0, s.jsx)(N.Text, {
                  variant: 'text-md/normal',
                  children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({
                    roles: S.join(', ')
                  })
                }),
                l.length > 0 && (0, s.jsx)(N.Text, {
                  variant: 'text-md/normal',
                  children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({
                    roles: l.join(', ')
                  })
                }),
                U.length > 0 && (0, s.jsx)(N.Text, {
                  variant: 'text-md/normal',
                  children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({
                    channels: U.join(', ')
                  })
                }),
                G.length > 0 && (0, s.jsx)(N.Text, {
                  variant: 'text-md/normal',
                  children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({
                    channels: G.join(', ')
                  })
                }),
                O.map((_, T) => (0, s.jsx)(N.Text, {
                  variant: 'text-md/normal',
                  children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                    key: _,
                    oldValue: e[_],
                    newValue: E[_]
                  })
                }, T))
              ]
            })
          ]
        }, I);
      }, r = t().keyBy(null != I ? I : [], 'id'), L = t().keyBy(null != T ? T : [], 'id'), D = t().difference(Object.keys(L), Object.keys(r)).map(e => L[e]), U = t().difference(Object.keys(r), Object.keys(L)).map(e => r[e]), G = t().intersection(Object.keys(L), Object.keys(r));
      return (0, s.jsxs)('ul', {
        className: u.onboardingChangeLogContainer,
        children: [
          D.map(e => {
            let {
              role_ids: E,
              channel_ids: T,
              title: I,
              id: t
            } = e, a = (null != E ? E : []).map(n).filter(i.lm), r = (null != T ? T : []).map(A).filter(i.lm);
            return (0, s.jsxs)('li', {
              children: [
                (0, s.jsxs)('div', {
                  className: u.onboardingChangeLogItemTitle,
                  children: [
                    (0, s.jsx)(d, {
                      actionType: R.vB8.CREATE,
                      targetType: _.targetType,
                      action: _.action
                    }),
                    (0, s.jsx)(N.Text, {
                      variant: 'text-md/normal',
                      children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({
                        title: I
                      })
                    })
                  ]
                }),
                (0, s.jsxs)('div', {
                  className: u.onboardingChangeLogItemChanges,
                  children: [
                    a.length > 0 && (0, s.jsx)(N.Text, {
                      variant: 'text-md/normal',
                      children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({
                        roles: a.join(', ')
                      })
                    }),
                    r.length > 0 && (0, s.jsx)(N.Text, {
                      variant: 'text-md/normal',
                      children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({
                        channels: r.join(', ')
                      })
                    })
                  ]
                })
              ]
            }, t);
          }),
          U.map(e => (0, s.jsx)('li', {
            children: (0, s.jsxs)('div', {
              className: u.onboardingChangeLogItemTitle,
              children: [
                (0, s.jsx)(d, {
                  actionType: R.vB8.DELETE,
                  targetType: _.targetType,
                  action: _.action
                }),
                (0, s.jsx)(N.Text, {
                  variant: 'text-md/normal',
                  children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({
                    title: e.title
                  })
                })
              ]
            })
          }, e.id)),
          G.map(e => a(r[e], L[e]))
        ]
      }, 'options');
    }(I, _, E)), (_.action === R.rsA.HOME_SETTINGS_CREATE || _.action === R.rsA.HOME_SETTINGS_UPDATE) && (a = function(e, _) {
      let {
        oldValue: E,
        newValue: T,
        key: I
      } = e, {
        targetType: n,
        action: A
      } = _;
      switch (I) {
        case R.zUn.WELCOME_MESSAGE:
          return ((e, _) => {
            var E, T, I, n, A;
            let t = U.default.getUser(null == _ ? void 0 : null === (E = _.author_ids) || void 0 === E ? void 0 : E[0]),
              a = U.default.getUser(null === (T = e.author_ids) || void 0 === T ? void 0 : T[0]),
              r = (null == t ? void 0 : t.id) !== (null == a ? void 0 : a.id) ? (0, s.jsx)('li', {
                children: (0, s.jsx)('div', {
                  className: u.onboardingChangeLogItemTitle,
                  children: (0, s.jsx)(N.Text, {
                    variant: 'text-md/normal',
                    children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                      oldUser: null !== (I = null == t ? void 0 : t.username) && void 0 !== I ? I : o.Z.Messages.NONE,
                      newUser: null !== (n = null == a ? void 0 : a.username) && void 0 !== n ? n : o.Z.Messages.NONE
                    })
                  })
                })
              }) : null,
              L = (null == _ ? void 0 : _.message) !== e.message ? (0, s.jsx)('li', {
                children: (0, s.jsx)('div', {
                  className: u.onboardingChangeLogItemTitle,
                  children: (0, s.jsx)(N.Text, {
                    variant: 'text-md/normal',
                    children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                      oldMessage: null !== (A = null == _ ? void 0 : _.message) && void 0 !== A ? A : o.Z.Messages.NONE,
                      newMessage: e.message
                    })
                  })
                })
              }) : null;
            return (0, s.jsxs)('ul', {
              children: [
                r,
                L
              ]
            });
          })(T, E);
        case R.zUn.NEW_MEMBER_ACTIONS:
          return ((e, _) => {
            let E = e.map(e => e.channel_id),
              T = _.map(e => e.channel_id),
              I = t().difference(T, E),
              a = t().difference(E, T),
              r = _.filter(e => I.includes(e.channel_id)),
              L = e.filter(e => a.includes(e.channel_id));
            return (0, s.jsxs)('ul', {
              children: [
                r.map(e => (0, s.jsx)('li', {
                  children: (0, s.jsxs)('div', {
                    className: u.onboardingChangeLogItemTitle,
                    children: [
                      (0, s.jsx)(d, {
                        actionType: R.vB8.CREATE,
                        targetType: n,
                        action: A
                      }),
                      (0, s.jsx)(N.Text, {
                        variant: 'text-md/normal',
                        children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({
                          name: e.title
                        })
                      })
                    ]
                  })
                }, e.channel_id)),
                L.map(e => (0, s.jsx)('li', {
                  children: (0, s.jsxs)('div', {
                    className: u.onboardingChangeLogItemTitle,
                    children: [
                      (0, s.jsx)(d, {
                        actionType: R.vB8.DELETE,
                        targetType: n,
                        action: A
                      }),
                      (0, s.jsx)(N.Text, {
                        variant: 'text-md/normal',
                        children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({
                          name: e.title
                        })
                      })
                    ]
                  })
                }, e.channel_id))
              ]
            });
          })(null != E ? E : [], T);
        case R.zUn.RESOURCE_CHANNELS:
          return ((e, _) => {
            let E = e.map(e => e.channel_id),
              T = _.map(e => e.channel_id),
              I = t().difference(T, E),
              a = t().difference(E, T),
              r = _.filter(e => I.includes(e.channel_id)),
              L = e.filter(e => a.includes(e.channel_id));
            return (0, s.jsxs)('ul', {
              children: [
                r.map(e => (0, s.jsx)('li', {
                  children: (0, s.jsxs)('div', {
                    className: u.onboardingChangeLogItemTitle,
                    children: [
                      (0, s.jsx)(d, {
                        actionType: R.vB8.CREATE,
                        targetType: n,
                        action: A
                      }),
                      (0, s.jsx)(N.Text, {
                        variant: 'text-md/normal',
                        children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({
                          name: e.title
                        })
                      })
                    ]
                  })
                }, e.channel_id)),
                L.map(e => (0, s.jsx)('li', {
                  children: (0, s.jsxs)('div', {
                    className: u.onboardingChangeLogItemTitle,
                    children: [
                      (0, s.jsx)(d, {
                        actionType: R.vB8.DELETE,
                        targetType: n,
                        action: A
                      }),
                      (0, s.jsx)(N.Text, {
                        variant: 'text-md/normal',
                        children: o.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({
                          name: e.title
                        })
                      })
                    ]
                  })
                }, e.channel_id))
              ]
            });
          })(null != E ? E : [], T);
        default:
          return null;
      }
    }(I, _));
    let L = e[I.key];
    return c(_, I) ? null : ('function' == typeof L && (L = L(I)), Array.isArray(L)) ? L.map(e => (T++, g({
      changeItem: e,
      subChanges: a,
      changeNumber: T,
      log: _,
      oldValue: n,
      newValue: A,
      change: I
    }))) : (T++, g({
      changeItem: L,
      subChanges: a,
      changeNumber: T,
      log: _,
      oldValue: n,
      newValue: A,
      change: I
    }));
  })).filter(i.lm);
return (0, s.jsx)(N.Clickable, {
  onClick: I,
  className: n()(u.changeDetails, A),
  children: a
});
  }, [
_,
E,
I,
A
  ]), L = T.useMemo(() => {
switch (_.targetType) {
  case R.KFR.GUILD:
    return a(G.pY());
  case R.KFR.CHANNEL:
  case R.KFR.CHANNEL_OVERWRITE:
    return a(G.ML());
  case R.KFR.USER:
    return a(G.lU());
  case R.KFR.ROLE:
    return a(G.HE());
  case R.KFR.ONBOARDING_PROMPT:
    return a(G.oD());
  case R.KFR.GUILD_ONBOARDING:
    return a(G.EN());
  case R.KFR.HOME_SETTINGS:
    return a(G.hx());
  case R.KFR.INVITE:
    return a(G.HN());
  case R.KFR.WEBHOOK:
    return a(G.lR());
  case R.KFR.EMOJI:
    return a(G.N$());
  case R.KFR.STICKER:
    return a(G.Bq());
  case R.KFR.INTEGRATION:
    return a(G.K());
  case R.KFR.STAGE_INSTANCE:
    return a(G.C2());
  case R.KFR.GUILD_SCHEDULED_EVENT:
    return a(G.uB());
  case R.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
    return a(G.pi());
  case R.KFR.THREAD:
    return a(G.pA());
  case R.KFR.APPLICATION_COMMAND:
    return a(G.vm(_.changes));
  case R.KFR.AUTO_MODERATION_RULE:
    return a(G.rK());
  case R.KFR.GUILD_SOUNDBOARD:
    return a(G.C0());
  case R.KFR.VOICE_CHANNEL_STATUS:
    return a(G.F1());
}
  }, [
_.targetType,
_.changes,
a
  ]);
  return (0, s.jsx)(s.Fragment, {
children: L
  });
}