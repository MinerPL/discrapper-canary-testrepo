"use strict";
E.r(t), E.d(t, {
  shouldNotRenderChangeDetail: function() {
    return U
  },
  AuditLogIcon: function() {
    return R
  },
  AuditLogExpandedChangeDetails: function() {
    return f
  }
}), E("424973");
var _ = E("37983"),
  s = E("884691"),
  T = E("414456"),
  a = E.n(T),
  n = E("917351"),
  A = E.n(n),
  u = E("866227"),
  I = E.n(u),
  i = E("77078"),
  l = E("430568"),
  L = E("90625"),
  o = E("42203"),
  r = E("305961"),
  d = E("697218"),
  N = E("987663"),
  S = E("404008"),
  g = E("449008"),
  D = E("159885"),
  G = E("49111"),
  O = E("782340"),
  c = E("15994");

function U(e, t) {
  let E = N.NotRenderedChanges[e.targetType];
  return null != E && !0 === E[t.key]
}
let C = {
  [G.AuditLogActionTypes.CREATE]: c.typeCreate,
  [G.AuditLogActionTypes.UPDATE]: c.typeUpdate,
  [G.AuditLogActionTypes.DELETE]: c.typeDelete
};

function M(e) {
  let {
    changeItem: t,
    subChanges: E,
    changeNumber: s,
    log: T,
    oldValue: a,
    newValue: n,
    change: A
  } = e, u = null;
  if ("string" == typeof t && (u = t), null != t && "object" == typeof t) {
    if (null == t.format) {
      let e = t[A.newValue];
      null == e && null != t[N.DEFAULT_FOR_STRINGS_KEY] ? t = t[N.DEFAULT_FOR_STRINGS_KEY] : null != e && (t = e)
    }
    if (null != t && null != t.format) {
      var I, o;
      u = t.format({
        user: T.user,
        target: T.target,
        oldValue: a,
        newValue: n,
        count: Array.isArray(n) ? n.length : null,
        subtarget: null !== (o = null !== (I = T.options.subtarget) && void 0 !== I ? I : A.subtarget) && void 0 !== o ? o : null,
        newColorHook: (e, t) => (0, _.jsx)("div", {
          className: c.colorHook,
          style: {
            backgroundColor: A.newValue
          }
        }, t),
        oldColorHook: (e, t) => (0, _.jsx)("div", {
          className: c.colorHook,
          style: {
            backgroundColor: A.oldValue
          }
        }, t),
        oldTagHook: (e, t) => (0, _.jsx)(L.default, {
          tag: a,
          size: L.default.Sizes.SMALL
        }, t),
        newTagHook: (e, t) => (0, _.jsx)(L.default, {
          tag: n,
          size: L.default.Sizes.SMALL
        }, t),
        oldEmojiHook: (e, t) => (0, _.jsx)(l.default, {
          emojiId: a
        }, t),
        newEmojiHook: (e, t) => (0, _.jsx)(l.default, {
          emojiId: n
        }, t)
      })
    } else u = t
  }
  return null == u ? (console.warn("No change string for", A), null) : "" === u ? null : (0, _.jsxs)("div", {
    className: c.detail,
    style: {
      position: "relative",
      top: 1
    },
    children: [(0, _.jsxs)(i.Text, {
      className: c.prefix,
      variant: "code",
      color: function(e) {
        switch (e) {
          case G.AuditLogActionTypes.CREATE:
            return "text-positive";
          case G.AuditLogActionTypes.DELETE:
            return "status-danger";
          default:
            return "text-warning"
        }
      }(T.actionType),
      children: [s < 10 ? "0".concat(s) : s, (0, _.jsx)("span", {
        className: c.dash,
        children: "—"
      })]
    }), (0, _.jsxs)("div", {
      className: c.change,
      children: [(0, _.jsx)("div", {
        className: c.changeStr,
        children: u
      }), null != E ? (0, _.jsx)("div", {
        children: E
      }) : null]
    })]
  }, s)
}
class R extends s.PureComponent {
  render() {
    var e, t;
    let {
      actionType: E,
      targetType: s,
      action: T,
      themeOverride: n
    } = this.props, A = null != n ? c["themeOverride".concat((0, D.upperCaseFirstChar)(n))] : null;
    let u = a(c.icon, C[E], (e = s, (t = T) === G.AuditLogActions.MESSAGE_DELETE ? c.targetMessage : t === G.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE || t === G.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL || t === G.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || t === G.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER ? c.autoModerationBlockMessage : ({
      [G.AuditLogTargetTypes.ALL]: c.targetAll,
      [G.AuditLogTargetTypes.GUILD]: c.targetGuild,
      [G.AuditLogTargetTypes.CHANNEL]: c.targetChannel,
      [G.AuditLogTargetTypes.CHANNEL_OVERWRITE]: c.targetChannel,
      [G.AuditLogTargetTypes.USER]: c.targetMember,
      [G.AuditLogTargetTypes.ROLE]: c.targetRole,
      [G.AuditLogTargetTypes.ONBOARDING_PROMPT]: c.targetOnboarding,
      [G.AuditLogTargetTypes.GUILD_ONBOARDING]: c.targetOnboarding,
      [G.AuditLogTargetTypes.HOME_SETTINGS]: c.targetOnboarding,
      [G.AuditLogTargetTypes.INTEGRATION]: c.targetIntegration,
      [G.AuditLogTargetTypes.INVITE]: c.targetInvite,
      [G.AuditLogTargetTypes.WEBHOOK]: c.targetWebhook,
      [G.AuditLogTargetTypes.EMOJI]: c.targetEmoji,
      [G.AuditLogTargetTypes.STICKER]: c.targetSticker,
      [G.AuditLogTargetTypes.STAGE_INSTANCE]: c.targetStageInstance,
      [G.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT]: c.targetGuildScheduledEvent,
      [G.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION]: c.targetGuildScheduledEvent,
      [G.AuditLogTargetTypes.THREAD]: c.thread,
      [G.AuditLogTargetTypes.APPLICATION_COMMAND]: c.applicationCommand,
      [G.AuditLogTargetTypes.AUTO_MODERATION_RULE]: c.autoModerationRule,
      [G.AuditLogTargetTypes.GUILD_HOME]: c.targetGuildHome,
      [G.AuditLogTargetTypes.GUILD_SOUNDBOARD]: c.targetGuildSoundboard,
      [G.AuditLogTargetTypes.VOICE_CHANNEL_STATUS]: c.targetChannel
    })[e]), A);
    return (0, _.jsx)("div", {
      className: u
    })
  }
}

function f(e) {
  let {
    log: t,
    guild: E,
    onContentClick: T,
    className: n
  } = e, u = s.useCallback(e => {
    if (null == t.changes) return null;
    let s = 0,
      u = A.flatten(t.changes.map(T => {
        let {
          oldValue: a,
          newValue: n
        } = T, u = null;
        if (t.action === G.AuditLogActions.MEMBER_ROLE_UPDATE ? u = function(e) {
            let {
              newValue: t
            } = e;
            return Array.isArray(t) ? t.map(e => (0, _.jsx)("div", {
              className: c.subListItem,
              children: e.name
            }, e.id)) : null
          }(T) : t.targetType === G.AuditLogTargetTypes.ROLE || t.action === G.AuditLogActions.CHANNEL_OVERWRITE_CREATE || t.action === G.AuditLogActions.CHANNEL_OVERWRITE_UPDATE ? u = function(e, t) {
            let {
              newValue: E
            } = e;
            return Array.isArray(E) ? E.map((e, E) => (0, _.jsx)("div", {
              className: c.subListItem,
              children: N.getStringForPermission(e, t)
            }, E)) : null
          }(T, t) : (t.action === G.AuditLogActions.CHANNEL_UPDATE || t.action === G.AuditLogActions.THREAD_UPDATE) && T.key === G.AuditLogChangeKeys.FLAGS && (u = function(e) {
            let {
              newValue: t,
              oldValue: E
            } = e, s = [];
            return (Array.isArray(E) && (s = s.concat(E.map(e => (0, _.jsx)("div", {
              className: c.subListItem,
              children: N.getStringForRemovedChannelFlag(e)
            }, e)))), Array.isArray(t) && (s = s.concat(t.map(e => (0, _.jsx)("div", {
              className: c.subListItem,
              children: N.getStringForAddedChannelFlag(e)
            }, e)))), s.length > 0) ? s : null
          }(T)), (t.action === G.AuditLogActions.CHANNEL_UPDATE || t.action === G.AuditLogActions.CHANNEL_CREATE) && T.key === G.AuditLogChangeKeys.TYPE && (null != a && (a = (0, S.channelTypeString)({
            type: a
          })), null != n && (n = (0, S.channelTypeString)({
            type: n
          }))), t.action === G.AuditLogActions.MEMBER_UPDATE && T.key === G.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL) {
          if (null == (n = I(n)) || !n.isValid()) return null;
          n = n.calendar()
        }(t.action === G.AuditLogActions.ONBOARDING_PROMPT_UPDATE || t.action === G.AuditLogActions.ONBOARDING_PROMPT_CREATE) && T.key === G.AuditLogChangeKeys.OPTIONS && (u = function(e, t, E) {
          let {
            newValue: s,
            oldValue: T
          } = e, a = e => {
            var t;
            let _ = null != E ? null === (t = r.default.getRole(E.id, e)) || void 0 === t ? void 0 : t.name : void 0;
            return null == _ ? null : "@".concat(_)
          }, n = e => {
            var t;
            let E = null === (t = o.default.getChannel(e)) || void 0 === t ? void 0 : t.name;
            return null == E ? null : "#".concat(E)
          }, u = (e, E) => {
            let {
              title: s,
              id: T
            } = E, u = e.role_ids.map(a).filter(g.isNotNullish), I = e.channel_ids.map(n).filter(g.isNotNullish), l = E.role_ids.map(a).filter(g.isNotNullish), L = E.channel_ids.map(n).filter(g.isNotNullish), o = A.difference(l, u), r = A.difference(u, l), d = A.difference(L, I), N = A.difference(I, L), S = [];
            return (!A.isEqual(e.title, E.title) && S.push("title"), !A.isEqual(e.description, E.description) && S.push("description"), 0 === o.length && 0 === r.length && 0 === d.length && 0 === N.length && 0 === S.length) ? null : (0, _.jsxs)("li", {
              children: [(0, _.jsxs)("div", {
                className: c.onboardingChangeLogItemTitle,
                children: [(0, _.jsx)(R, {
                  actionType: G.AuditLogActionTypes.UPDATE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_UPDATED_OPTION.format({
                    title: s
                  })
                })]
              }), (0, _.jsxs)("div", {
                className: c.onboardingChangeLogItemChanges,
                children: [o.length > 0 && (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_ROLES.format({
                    roles: o.join(", ")
                  })
                }), r.length > 0 && (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_ROLES.format({
                    roles: r.join(", ")
                  })
                }), d.length > 0 && (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_ADD_CHANNELS.format({
                    channels: d.join(", ")
                  })
                }), N.length > 0 && (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_REMOVE_CHANNELS.format({
                    channels: N.join(", ")
                  })
                }), S.map((t, s) => (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_VALUE_CHANGE.format({
                    key: t,
                    oldValue: e[t],
                    newValue: E[t]
                  })
                }, s))]
              })]
            }, T)
          }, I = A.keyBy(null != T ? T : [], "id"), l = A.keyBy(null != s ? s : [], "id"), L = A.difference(Object.keys(l), Object.keys(I)).map(e => l[e]), d = A.difference(Object.keys(I), Object.keys(l)).map(e => I[e]), N = A.intersection(Object.keys(l), Object.keys(I));
          return (0, _.jsxs)("ul", {
            className: c.onboardingChangeLogContainer,
            children: [L.map(e => {
              let {
                role_ids: E,
                channel_ids: s,
                title: T,
                id: A
              } = e, u = (null != E ? E : []).map(a).filter(g.isNotNullish), I = (null != s ? s : []).map(n).filter(g.isNotNullish);
              return (0, _.jsxs)("li", {
                children: [(0, _.jsxs)("div", {
                  className: c.onboardingChangeLogItemTitle,
                  children: [(0, _.jsx)(R, {
                    actionType: G.AuditLogActionTypes.CREATE,
                    targetType: t.targetType,
                    action: t.action
                  }), (0, _.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CREATED_OPTION.format({
                      title: T
                    })
                  })]
                }), (0, _.jsxs)("div", {
                  className: c.onboardingChangeLogItemChanges,
                  children: [u.length > 0 && (0, _.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_ROLES.format({
                      roles: u.join(", ")
                    })
                  }), I.length > 0 && (0, _.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_WITH_CHANNELS.format({
                      channels: I.join(", ")
                    })
                  })]
                })]
              }, A)
            }), d.map(e => (0, _.jsx)("li", {
              children: (0, _.jsxs)("div", {
                className: c.onboardingChangeLogItemTitle,
                children: [(0, _.jsx)(R, {
                  actionType: G.AuditLogActionTypes.DELETE,
                  targetType: t.targetType,
                  action: t.action
                }), (0, _.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_DELETED_OPTION.format({
                    title: e.title
                  })
                })]
              })
            }, e.id)), N.map(e => u(I[e], l[e]))]
          }, "options")
        }(T, t, E)), (t.action === G.AuditLogActions.HOME_SETTINGS_CREATE || t.action === G.AuditLogActions.HOME_SETTINGS_UPDATE) && (u = function(e, t) {
          let {
            oldValue: E,
            newValue: s,
            key: T
          } = e, {
            targetType: a,
            action: n
          } = t;
          switch (T) {
            case G.AuditLogChangeKeys.WELCOME_MESSAGE:
              return ((e, t) => {
                var E, s, T, a, n;
                let A = d.default.getUser(null == t ? void 0 : null === (E = t.author_ids) || void 0 === E ? void 0 : E[0]),
                  u = d.default.getUser(null === (s = e.author_ids) || void 0 === s ? void 0 : s[0]),
                  I = (null == A ? void 0 : A.id) !== (null == u ? void 0 : u.id) ? (0, _.jsx)("li", {
                    children: (0, _.jsx)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_AUTHOR_CHANGE.format({
                          oldUser: null !== (T = null == A ? void 0 : A.username) && void 0 !== T ? T : O.default.Messages.NONE,
                          newUser: null !== (a = null == u ? void 0 : u.username) && void 0 !== a ? a : O.default.Messages.NONE
                        })
                      })
                    })
                  }) : null,
                  l = (null == t ? void 0 : t.message) !== e.message ? (0, _.jsx)("li", {
                    children: (0, _.jsx)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_MESSAGE_CHANGE.format({
                          oldMessage: null !== (n = null == t ? void 0 : t.message) && void 0 !== n ? n : O.default.Messages.NONE,
                          newMessage: e.message
                        })
                      })
                    })
                  }) : null;
                return (0, _.jsxs)("ul", {
                  children: [I, l]
                })
              })(s, E);
            case G.AuditLogChangeKeys.NEW_MEMBER_ACTIONS:
              return ((e, t) => {
                let E = e.map(e => e.channel_id),
                  s = t.map(e => e.channel_id),
                  T = A.difference(s, E),
                  u = A.difference(E, s),
                  I = t.filter(e => T.includes(e.channel_id)),
                  l = e.filter(e => u.includes(e.channel_id));
                return (0, _.jsxs)("ul", {
                  children: [I.map(e => (0, _.jsx)("li", {
                    children: (0, _.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, _.jsx)(R, {
                        actionType: G.AuditLogActionTypes.CREATE,
                        targetType: a,
                        action: n
                      }), (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), l.map(e => (0, _.jsx)("li", {
                    children: (0, _.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, _.jsx)(R, {
                        actionType: G.AuditLogActionTypes.DELETE,
                        targetType: a,
                        action: n
                      }), (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_NEW_MEMBER_ACTION_REMOVED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                })
              })(null != E ? E : [], s);
            case G.AuditLogChangeKeys.RESOURCE_CHANNELS:
              return ((e, t) => {
                let E = e.map(e => e.channel_id),
                  s = t.map(e => e.channel_id),
                  T = A.difference(s, E),
                  u = A.difference(E, s),
                  I = t.filter(e => T.includes(e.channel_id)),
                  l = e.filter(e => u.includes(e.channel_id));
                return (0, _.jsxs)("ul", {
                  children: [I.map(e => (0, _.jsx)("li", {
                    children: (0, _.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, _.jsx)(R, {
                        actionType: G.AuditLogActionTypes.CREATE,
                        targetType: a,
                        action: n
                      }), (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_ADDED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id)), l.map(e => (0, _.jsx)("li", {
                    children: (0, _.jsxs)("div", {
                      className: c.onboardingChangeLogItemTitle,
                      children: [(0, _.jsx)(R, {
                        actionType: G.AuditLogActionTypes.DELETE,
                        targetType: a,
                        action: n
                      }), (0, _.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_RESOURCE_CHANNEL_REMOVED.format({
                          name: e.title
                        })
                      })]
                    })
                  }, e.channel_id))]
                })
              })(null != E ? E : [], s);
            default:
              return null
          }
        }(T, t));
        let l = e[T.key];
        return U(t, T) ? null : ("function" == typeof l && (l = l(T)), Array.isArray(l)) ? l.map(e => (s++, M({
          changeItem: e,
          subChanges: u,
          changeNumber: s,
          log: t,
          oldValue: a,
          newValue: n,
          change: T
        }))) : (s++, M({
          changeItem: l,
          subChanges: u,
          changeNumber: s,
          log: t,
          oldValue: a,
          newValue: n,
          change: T
        }))
      })).filter(g.isNotNullish);
    return (0, _.jsx)(i.Clickable, {
      onClick: T,
      className: a(c.changeDetails, n),
      children: u
    })
  }, [t, E, T, n]), l = s.useMemo(() => {
    switch (t.targetType) {
      case G.AuditLogTargetTypes.GUILD:
        return u(N.GuildChangeStrings());
      case G.AuditLogTargetTypes.CHANNEL:
      case G.AuditLogTargetTypes.CHANNEL_OVERWRITE:
        return u(N.ChannelChangeStrings());
      case G.AuditLogTargetTypes.USER:
        return u(N.UserChangeStrings());
      case G.AuditLogTargetTypes.ROLE:
        return u(N.RoleChangeStrings());
      case G.AuditLogTargetTypes.ONBOARDING_PROMPT:
        return u(N.OnboardingPromptChangeStrings());
      case G.AuditLogTargetTypes.GUILD_ONBOARDING:
        return u(N.OnboardingChangeStrings());
      case G.AuditLogTargetTypes.HOME_SETTINGS:
        return u(N.HomeSettingsChangeStrings());
      case G.AuditLogTargetTypes.INVITE:
        return u(N.InviteChangeStrings());
      case G.AuditLogTargetTypes.WEBHOOK:
        return u(N.WebhookChangeStrings());
      case G.AuditLogTargetTypes.EMOJI:
        return u(N.EmojiChangeStrings());
      case G.AuditLogTargetTypes.STICKER:
        return u(N.StickerChangeStrings());
      case G.AuditLogTargetTypes.INTEGRATION:
        return u(N.IntegrationChangeStrings());
      case G.AuditLogTargetTypes.STAGE_INSTANCE:
        return u(N.StageInstanceChangeStrings());
      case G.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
        return u(N.GuildScheduledEventChangeStrings());
      case G.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
        return u(N.GuildScheduledEventExceptionChangeStrings());
      case G.AuditLogTargetTypes.THREAD:
        return u(N.ThreadChangeStrings());
      case G.AuditLogTargetTypes.APPLICATION_COMMAND:
        return u(N.CommandPermissionChangeStrings(t.changes));
      case G.AuditLogTargetTypes.AUTO_MODERATION_RULE:
        return u(N.AutoModerationRuleChangeStrings());
      case G.AuditLogTargetTypes.GUILD_SOUNDBOARD:
        return u(N.GuildSoundboardChangeStrings());
      case G.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
        return u(N.VoiceChannelStatusStrings())
    }
  }, [t.targetType, t.changes, u]);
  return (0, _.jsx)(_.Fragment, {
    children: l
  })
}