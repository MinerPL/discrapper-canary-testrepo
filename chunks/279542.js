"use strict";
s.r(t), s.d(t, {
  GuildExplicitContentFilter: function() {
    return Y
  },
  default: function() {
    return Z
  },
  toggleModerationExperienceGuildFeature: function() {
    return W
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("392711"),
  o = s("442837"),
  d = s("481060"),
  u = s("230711"),
  c = s("497321"),
  E = s("367907"),
  _ = s("933557"),
  I = s("471445"),
  T = s("688465"),
  S = s("154285"),
  f = s("655006"),
  m = s("191471"),
  N = s("467319"),
  g = s("241559"),
  h = s("592125"),
  C = s("496675"),
  R = s("246946"),
  x = s("594174"),
  L = s("474333"),
  O = s("93879"),
  A = s("518896"),
  p = s("614149"),
  M = s("837886"),
  D = s("626135"),
  v = s("63063"),
  j = s("78451"),
  G = s("434404"),
  U = s("999382"),
  P = s("2150"),
  b = s("181339"),
  B = s("193544"),
  y = s("717251"),
  F = s("981631"),
  H = s("689938"),
  k = s("137001");

function w(e) {
  let {
    guild: t
  } = e, s = t.canHaveRaidActivityAlerts(), n = (0, o.useStateFromStores)([C.default], () => null != t && C.default.can(F.Permissions.MANAGE_GUILD, t), [t]), {
    enableRaidAlerts: i
  } = f.RaidAlertExperiment.useExperiment({
    guildId: t.id,
    location: "1a2662_1"
  }, {
    autoTrackExposure: n
  }), r = (0, N.useIsMentionRaidExperimentEnabled)(t.id), u = (0, o.useStateFromStores)([h.default], () => h.default.getChannel(t.safetyAlertsChannelId), [t.safetyAlertsChannelId]), c = (0, _.default)(u), S = null != u, g = l.useMemo(() => {
    let e = (null == u ? void 0 : u.type) != null ? (0, I.getSimpleChannelIconComponent)(u.type) : null;
    return null != e ? e : O.default
  }, [u]);

  function R() {
    i && (0, m.openSafetyChannelSetupModal)(t.id)
  }
  return n ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.FormDivider, {
      className: k.divider
    }), (0, a.jsxs)("div", {
      className: k.setupContainer,
      children: [(0, a.jsxs)("div", {
        className: k.switchItemTextContent,
        children: [(0, a.jsxs)(d.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: [H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_TITLE, " ", (0, a.jsx)(T.default, {
            className: k.betaTag
          })]
        }), (0, a.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_DESCRIPTION
        })]
      }), (0, a.jsx)(y.default, {
        title: (0, a.jsxs)("div", {
          className: k.settingsRowHeader,
          children: [(0, a.jsx)(A.default, {
            width: 20,
            height: 20
          }), (0, a.jsx)(d.Text, {
            color: "text-normal",
            variant: "text-sm/medium",
            children: H.default.Messages.GUILD_ANTIRAID_SAFETY_JOIN_RAIDS_TITLE
          })]
        }),
        highlightColor: P.HighlightColors.GREEN,
        action: i ? (0, a.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          size: d.Button.Sizes.MIN,
          color: d.Button.Colors.LINK,
          children: s ? H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MANAGE_ACTION : H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_SETUP_ACTION
        }) : (0, a.jsx)(d.Text, {
          color: "text-muted",
          variant: "text-sm/medium",
          children: H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_NO_EXPERIMENT_ACTION
        }),
        onClick: i ? R : void 0,
        subsection: i ? (0, a.jsxs)("div", {
          className: k.settingsRowSubsection,
          children: [(0, a.jsxs)("div", {
            className: k.settingsRowSubsectionItem,
            children: [(0, a.jsx)(d.Text, {
              color: "text-normal",
              variant: "text-xs/semibold",
              children: H.default.Messages.GUILD_ANTIRAID_SETTING_PROTECTION_LABEL
            }), (0, a.jsx)(d.Text, {
              color: "text-muted",
              variant: "text-xs/medium",
              children: S && s ? H.default.Messages.GUILD_ANTIRAID_SETTING_ENABLED_ALERTS : H.default.Messages.GUILD_ANTIRAID_SETTING_ENABLED
            })]
          }), (0, a.jsx)("div", {
            className: k.settingsRowSubsectionItem,
            children: S && s ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(d.Text, {
                color: "text-normal",
                variant: "text-xs/semibold",
                children: H.default.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_LABEL
              }), (0, a.jsxs)(d.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                className: k.channelContainer,
                children: [(0, a.jsx)(g, {
                  className: k.channelIcon,
                  width: 12,
                  height: 12
                }), " ", c]
              })]
            }) : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(d.Text, {
                color: "text-normal",
                variant: "text-xs/semibold",
                children: H.default.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_NONE_LABEL
              }), (0, a.jsx)(d.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: H.default.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_NONE
              })]
            })
          })]
        }) : null
      }), !S && i ? (0, a.jsx)(L.default, {
        messageType: L.HelpMessageTypes.INFO,
        textVariant: "text-xs/normal",
        children: H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ENABLE_TIP.format({
          onClick: R
        })
      }) : null, r ? (0, a.jsx)(y.default, {
        title: (0, a.jsxs)("div", {
          className: k.settingsRowHeader,
          children: [(0, a.jsx)(p.default, {
            width: 20,
            height: 20
          }), (0, a.jsx)(d.Text, {
            color: "text-normal",
            variant: "text-sm/medium",
            children: H.default.Messages.GUILD_ANTIRAID_SAFETY_MENTION_RAIDS_TITLE
          })]
        }),
        highlightColor: P.HighlightColors.GREEN,
        action: (0, a.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          size: d.Button.Sizes.MIN,
          color: d.Button.Colors.LINK,
          onClick: function() {
            D.default.track(F.AnalyticEvents.GUILD_SAFETY_MENTION_RAID_SETUP_CTA_CLICKED, {
              ...(0, E.collectGuildAnalyticsMetadata)(t.id)
            }), G.default.setSection(F.GuildSettingsSections.GUILD_AUTOMOD, F.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM)
          },
          children: (0, a.jsxs)("div", {
            className: k.setupAutomodButton,
            children: [H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_IN_AUTOMOD_ACTION, (0, a.jsx)(M.default, {
              className: k.setupAutomodIcon,
              width: 16,
              height: 16
            })]
          })
        })
      }) : null]
    })]
  }) : null
}

function V(e) {
  let {
    guild: t
  } = e, s = (0, o.useStateFromStores)([C.default], () => null != t && C.default.can(F.Permissions.MANAGE_GUILD, t), [t]), n = l.useCallback(async e => {
    let {
      value: s
    } = e;
    try {
      await G.default.saveGuild(t.id, {
        verificationLevel: s
      }), G.default.updateGuild({
        verificationLevel: s
      })
    } catch (e) {
      (0, d.showToast)((0, d.createToast)(H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, d.ToastType.FAILURE))
    }
  }, [t]), i = l.useMemo(() => {
    let e = (0, j.generateVerificationLevelOptions)(null == t ? void 0 : t.hasFeature(F.GuildFeatures.COMMUNITY)).map(e => ({
      ...e,
      tooltipPosition: "left"
    }));
    return (0, j.mapOptionToHighlightedRowOptions)(e)
  }, [t]), r = l.useMemo(() => i.find(e => e.value === (null == t ? void 0 : t.verificationLevel)), [t, i]);
  return (0, a.jsxs)("div", {
    className: k.setupContainer,
    children: [(0, a.jsxs)("div", {
      className: k.switchItemTextContent,
      children: [(0, a.jsx)(d.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: H.default.Messages.FORM_LABEL_VERIFICATION_LEVEL
      }), (0, a.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: H.default.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
      })]
    }), (0, a.jsx)(B.default, {
      changeTitle: H.default.Messages.FORM_LABEL_VERIFICATION_LEVEL_CHANGE,
      value: null == r ? void 0 : r.value,
      options: i,
      disabled: !s,
      onChange: n
    })]
  })
}

function Y(e) {
  let {
    guild: t,
    className: s,
    withDivider: n = !0
  } = e, r = (0, o.useStateFromStores)([C.default], () => null != t && C.default.can(F.Permissions.MANAGE_GUILD, t), [t]), u = l.useCallback(async e => {
    let {
      value: s
    } = e;
    try {
      await G.default.saveGuild(t.id, {
        explicitContentFilter: s
      }), G.default.updateGuild({
        explicitContentFilter: s
      })
    } catch (e) {
      (0, d.showToast)((0, d.createToast)(H.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, d.ToastType.FAILURE))
    }
  }, [t.id]), c = l.useMemo(() => {
    let e = (0, j.generateContentFilterHighlightedOptions)(null == t ? void 0 : t.hasFeature(F.GuildFeatures.COMMUNITY)).map(e => ({
      ...e,
      tooltipPosition: "left"
    }));
    return (0, j.mapOptionToHighlightedRowOptions)(e)
  }, [t]), E = l.useMemo(() => c.find(e => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, c]);
  return (0, a.jsxs)(a.Fragment, {
    children: [n && (0, a.jsx)(d.FormDivider, {
      className: k.divider
    }), (0, a.jsxs)("div", {
      className: i()(k.setupContainer, s),
      children: [(0, a.jsxs)("div", {
        className: k.switchItemTextContent,
        children: [(0, a.jsx)(d.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: H.default.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_V2
        }), (0, a.jsx)(d.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: H.default.Messages.FORM_HELP_EXPLICIT_CONTENT_FILTER_V2.format({
            helpdeskArticle: v.default.getArticleURL(F.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
          })
        })]
      }), (0, a.jsx)(B.default, {
        changeTitle: H.default.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_CHANGE,
        value: null == E ? void 0 : E.value,
        options: c,
        disabled: !r,
        onChange: u
      })]
    })]
  })
}
async function W(e, t) {
  if (e.hasFeature(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
  let s = e.features;
  return t ? s.add(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : s.delete(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await G.default.saveGuild(e.id, {
    features: s
  })
}

function z(e) {
  let {
    guild: t
  } = e, s = (0, o.useStateFromStores)([C.default], () => null != t && C.default.can(F.Permissions.MANAGE_GUILD, t), [t]), n = t.hasFeature(F.GuildFeatures.COMMUNITY), i = (0, g.useCanAccessMemberSafetyPage)(t.id), [r, u] = l.useState(t.hasFeature(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), c = l.useCallback(async e => {
    u(e), await W(t, e)
  }, [t]);
  return n || !i ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: k.setupContainer,
      children: [(0, a.jsx)(d.FormSwitch, {
        value: r,
        onChange: c,
        className: k.switchItem,
        disabled: !s,
        hideBorder: !0,
        children: (0, a.jsxs)("div", {
          className: k.switchItemTextContent,
          children: [(0, a.jsxs)(d.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: [H.default.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE, (0, a.jsx)(T.default, {
              className: k.betaTag
            })]
          }), (0, a.jsx)(d.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: H.default.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE_DESCRIPTION
          })]
        })
      }), (0, a.jsx)(L.default, {
        messageType: L.HelpMessageTypes.INFO,
        textVariant: "text-xs/normal",
        children: H.default.Messages.GUILD_SETTINGS_SAFETY_MODERATION_EXPERIENCE_IN_COMMUNITY
      })]
    }), (0, a.jsx)(d.FormDivider, {
      className: k.divider
    })]
  })
}

function K(e) {
  let {
    guild: t,
    mfaLevel: s
  } = e, n = (0, o.useStateFromStores)([C.default], () => null != t && C.default.can(F.Permissions.MANAGE_GUILD, t), [t]), i = (0, o.useStateFromStores)([x.default], () => x.default.getCurrentUser()), {
    isGuildOwnerWithMFA: c,
    showMFAUserTooltip: E
  } = l.useMemo(() => null == i ? {
    canChangeMFALevel: !1,
    showMFAUserTooltip: !1
  } : {
    isGuildOwnerWithMFA: t.isOwnerWithRequiredMfaLevel(i),
    showMFAUserTooltip: !i.mfaEnabled && t.isOwner(i)
  }, [i, t]), _ = s === F.MFALevels.ELEVATED, I = (0, r.throttle)(async e => {
    if (!!c) !E && await G.default.updateMFALevel({
      guildId: t.id,
      level: e ? F.MFALevels.ELEVATED : F.MFALevels.NONE,
      isEnabled: !e
    })
  }, 1e3);
  return n ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.FormDivider, {
      className: k.divider
    }), (0, a.jsxs)("div", {
      className: k.setupContainer,
      children: [(0, a.jsx)(d.FormSwitch, {
        value: _,
        onChange: I,
        className: k.switchItem,
        disabled: !c,
        hideBorder: !0,
        children: (0, a.jsxs)("div", {
          className: k.switchItemTextContent,
          children: [(0, a.jsx)(d.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: H.default.Messages.GUILD_SETTINGS_REQ_MFA_LABEL
          }), (0, a.jsx)(d.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: H.default.Messages.GUILD_SETTINGS_REQ_MFA_BODY
          })]
        })
      }), E && (0, a.jsx)(L.default, {
        messageType: L.HelpMessageTypes.INFO,
        textVariant: "text-xs/normal",
        children: H.default.Messages.GUILD_SETTINGS_REQ_MFA_TOOLTIP.format({
          onClick: function() {
            u.default.open(F.UserSettingsSections.ACCOUNT)
          }
        })
      })]
    })]
  }) : null
}

function Z() {
  var e;
  let {
    guild: t,
    mfaLevel: s
  } = (0, o.useStateFromStoresObject)([U.default], () => U.default.getProps(), []), l = (0, o.useStateFromStores)([R.default], () => R.default.enabled, []), {
    showAlertMode: n
  } = (0, S.useGuildAlertModeEnabled)(null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : F.EMPTY_STRING_SNOWFLAKE_ID);
  return null == t ? null : l ? (0, a.jsx)(c.default, {}) : (0, a.jsxs)(d.FormSection, {
    title: H.default.Messages.SAFETY_SETUP,
    tag: d.FormTitleTags.H1,
    titleClassName: k.headerContainer,
    children: [(0, a.jsx)(z, {
      guild: t
    }), (0, a.jsx)(V, {
      guild: t
    }), (0, a.jsx)(K, {
      guild: t,
      mfaLevel: s
    }), (0, a.jsx)(Y, {
      guild: t
    }), n ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.FormDivider, {
        className: k.divider
      }), (0, a.jsx)("div", {
        className: i()(k.setupContainer),
        children: (0, a.jsx)(b.RaidAlertsSection, {
          guild: t
        })
      })]
    }) : (0, a.jsx)(w, {
      guild: t
    })]
  })
}