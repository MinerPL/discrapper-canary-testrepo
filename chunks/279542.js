"use strict";
t.d(s, {
  ZP: function() {
    return z
  },
  fp: function() {
    return Y
  },
  k0: function() {
    return V
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(392711),
  o = t(442837),
  c = t(481060),
  d = t(230711),
  u = t(497321),
  E = t(367907),
  _ = t(933557),
  I = t(471445),
  T = t(688465),
  N = t(154285),
  m = t(655006),
  S = t(191471),
  h = t(467319),
  g = t(241559),
  x = t(592125),
  C = t(496675),
  R = t(246946),
  L = t(594174),
  O = t(474333),
  A = t(93879),
  p = t(518896),
  M = t(614149),
  f = t(837886),
  v = t(626135),
  D = t(63063),
  Z = t(78451),
  j = t(434404),
  U = t(999382),
  G = t(2150),
  P = t(181339),
  b = t(193544),
  B = t(717251),
  y = t(981631),
  F = t(689938),
  w = t(55973);

function k(e) {
  let {
    guild: s
  } = e, t = s.canHaveRaidActivityAlerts(), l = (0, o.e7)([C.Z], () => null != s && C.Z.can(y.Plq.MANAGE_GUILD, s), [s]), {
    enableRaidAlerts: a
  } = m.l.useExperiment({
    guildId: s.id,
    location: "1a2662_1"
  }, {
    autoTrackExposure: l
  }), r = (0, h.a)(s.id), d = (0, o.e7)([x.Z], () => x.Z.getChannel(s.safetyAlertsChannelId), [s.safetyAlertsChannelId]), u = (0, _.ZP)(d), N = null != d, g = i.useMemo(() => {
    let e = (null == d ? void 0 : d.type) != null ? (0, I.Th)(d.type) : null;
    return null != e ? e : A.Z
  }, [d]);

  function R() {
    if (!!a)(0, S.K)(s.id)
  }
  return l ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.FormDivider, {
      className: w.divider
    }), (0, n.jsxs)("div", {
      className: w.setupContainer,
      children: [(0, n.jsxs)("div", {
        className: w.switchItemTextContent,
        children: [(0, n.jsxs)(c.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: [F.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_TITLE, " ", (0, n.jsx)(T.Z, {
            className: w.betaTag
          })]
        }), (0, n.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: F.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_DESCRIPTION
        })]
      }), (0, n.jsx)(B.Z, {
        title: (0, n.jsxs)("div", {
          className: w.settingsRowHeader,
          children: [(0, n.jsx)(p.Z, {
            width: 20,
            height: 20
          }), (0, n.jsx)(c.Text, {
            color: "text-normal",
            variant: "text-sm/medium",
            children: F.Z.Messages.GUILD_ANTIRAID_SAFETY_JOIN_RAIDS_TITLE
          })]
        }),
        highlightColor: G.q.GREEN,
        action: a ? (0, n.jsx)(c.Button, {
          look: c.Button.Looks.LINK,
          size: c.Button.Sizes.MIN,
          color: c.Button.Colors.LINK,
          children: t ? F.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MANAGE_ACTION : F.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_SETUP_ACTION
        }) : (0, n.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-sm/medium",
          children: F.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_NO_EXPERIMENT_ACTION
        }),
        onClick: a ? R : void 0,
        subsection: a ? (0, n.jsxs)("div", {
          className: w.settingsRowSubsection,
          children: [(0, n.jsxs)("div", {
            className: w.settingsRowSubsectionItem,
            children: [(0, n.jsx)(c.Text, {
              color: "text-normal",
              variant: "text-xs/semibold",
              children: F.Z.Messages.GUILD_ANTIRAID_SETTING_PROTECTION_LABEL
            }), (0, n.jsx)(c.Text, {
              color: "text-muted",
              variant: "text-xs/medium",
              children: N && t ? F.Z.Messages.GUILD_ANTIRAID_SETTING_ENABLED_ALERTS : F.Z.Messages.GUILD_ANTIRAID_SETTING_ENABLED
            })]
          }), (0, n.jsx)("div", {
            className: w.settingsRowSubsectionItem,
            children: N && t ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(c.Text, {
                color: "text-normal",
                variant: "text-xs/semibold",
                children: F.Z.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_LABEL
              }), (0, n.jsxs)(c.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                className: w.channelContainer,
                children: [(0, n.jsx)(g, {
                  className: w.channelIcon,
                  width: 12,
                  height: 12
                }), " ", u]
              })]
            }) : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(c.Text, {
                color: "text-normal",
                variant: "text-xs/semibold",
                children: F.Z.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_NONE_LABEL
              }), (0, n.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                children: F.Z.Messages.GUILD_ANTIRAID_SETTING_CHANNEL_NONE
              })]
            })
          })]
        }) : null
      }), !N && a ? (0, n.jsx)(O.Z, {
        messageType: O.Q.INFO,
        textVariant: "text-xs/normal",
        children: F.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ENABLE_TIP.format({
          onClick: R
        })
      }) : null, r ? (0, n.jsx)(B.Z, {
        title: (0, n.jsxs)("div", {
          className: w.settingsRowHeader,
          children: [(0, n.jsx)(M.Z, {
            width: 20,
            height: 20
          }), (0, n.jsx)(c.Text, {
            color: "text-normal",
            variant: "text-sm/medium",
            children: F.Z.Messages.GUILD_ANTIRAID_SAFETY_MENTION_RAIDS_TITLE
          })]
        }),
        highlightColor: G.q.GREEN,
        action: (0, n.jsx)(c.Button, {
          look: c.Button.Looks.LINK,
          size: c.Button.Sizes.MIN,
          color: c.Button.Colors.LINK,
          onClick: function() {
            v.default.track(y.rMx.GUILD_SAFETY_MENTION_RAID_SETUP_CTA_CLICKED, {
              ...(0, E.hH)(s.id)
            }), j.Z.setSection(y.pNK.GUILD_AUTOMOD, y.KsC.AUTOMOD_MENTION_SPAM)
          },
          children: (0, n.jsxs)("div", {
            className: w.setupAutomodButton,
            children: [F.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_IN_AUTOMOD_ACTION, (0, n.jsx)(f.Z, {
              className: w.setupAutomodIcon,
              width: 16,
              height: 16
            })]
          })
        })
      }) : null]
    })]
  }) : null
}

function H(e) {
  let {
    guild: s
  } = e, t = (0, o.e7)([C.Z], () => null != s && C.Z.can(y.Plq.MANAGE_GUILD, s), [s]), l = i.useCallback(async e => {
    let {
      value: t
    } = e;
    try {
      await j.Z.saveGuild(s.id, {
        verificationLevel: t
      }), j.Z.updateGuild({
        verificationLevel: t
      })
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(F.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE))
    }
  }, [s]), a = i.useMemo(() => {
    let e = (0, Z.IF)(null == s ? void 0 : s.hasFeature(y.oNc.COMMUNITY)).map(e => ({
      ...e,
      tooltipPosition: "left"
    }));
    return (0, Z.LJ)(e)
  }, [s]), r = i.useMemo(() => a.find(e => e.value === (null == s ? void 0 : s.verificationLevel)), [s, a]);
  return (0, n.jsxs)("div", {
    className: w.setupContainer,
    children: [(0, n.jsxs)("div", {
      className: w.switchItemTextContent,
      children: [(0, n.jsx)(c.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: F.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL
      }), (0, n.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: F.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
      })]
    }), (0, n.jsx)(b.Z, {
      changeTitle: F.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL_CHANGE,
      value: null == r ? void 0 : r.value,
      options: a,
      disabled: !t,
      onChange: l
    })]
  })
}

function V(e) {
  let {
    guild: s,
    className: t,
    withDivider: l = !0
  } = e, r = (0, o.e7)([C.Z], () => null != s && C.Z.can(y.Plq.MANAGE_GUILD, s), [s]), d = i.useCallback(async e => {
    let {
      value: t
    } = e;
    try {
      await j.Z.saveGuild(s.id, {
        explicitContentFilter: t
      }), j.Z.updateGuild({
        explicitContentFilter: t
      })
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(F.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, c.ToastType.FAILURE))
    }
  }, [s.id]), u = i.useMemo(() => {
    let e = (0, Z.MF)(null == s ? void 0 : s.hasFeature(y.oNc.COMMUNITY)).map(e => ({
      ...e,
      tooltipPosition: "left"
    }));
    return (0, Z.LJ)(e)
  }, [s]), E = i.useMemo(() => u.find(e => e.value === (null == s ? void 0 : s.explicitContentFilter)), [s, u]);
  return (0, n.jsxs)(n.Fragment, {
    children: [l && (0, n.jsx)(c.FormDivider, {
      className: w.divider
    }), (0, n.jsxs)("div", {
      className: a()(w.setupContainer, t),
      children: [(0, n.jsxs)("div", {
        className: w.switchItemTextContent,
        children: [(0, n.jsx)(c.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: F.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_V2
        }), (0, n.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: F.Z.Messages.FORM_HELP_EXPLICIT_CONTENT_FILTER_V2.format({
            helpdeskArticle: D.Z.getArticleURL(y.BhN.SAFE_DIRECT_MESSAGING)
          })
        })]
      }), (0, n.jsx)(b.Z, {
        changeTitle: F.Z.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER_CHANGE,
        value: null == E ? void 0 : E.value,
        options: u,
        disabled: !r,
        onChange: d
      })]
    })]
  })
}
async function Y(e, s) {
  if (e.hasFeature(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === s) return;
  let t = e.features;
  return s ? t.add(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) : t.delete(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY), await j.Z.saveGuild(e.id, {
    features: t
  })
}

function W(e) {
  let {
    guild: s
  } = e, t = (0, o.e7)([C.Z], () => null != s && C.Z.can(y.Plq.MANAGE_GUILD, s), [s]), l = s.hasFeature(y.oNc.COMMUNITY), a = (0, g.n2)(s.id), [r, d] = i.useState(s.hasFeature(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), u = i.useCallback(async e => {
    d(e), await Y(s, e)
  }, [s]);
  return l || !a ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: w.setupContainer,
      children: [(0, n.jsx)(c.FormSwitch, {
        value: r,
        onChange: u,
        className: w.switchItem,
        disabled: !t,
        hideBorder: !0,
        children: (0, n.jsxs)("div", {
          className: w.switchItemTextContent,
          children: [(0, n.jsxs)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: [F.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE, (0, n.jsx)(T.Z, {
              className: w.betaTag
            })]
          }), (0, n.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: F.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE_DESCRIPTION
          })]
        })
      }), (0, n.jsx)(O.Z, {
        messageType: O.Q.INFO,
        textVariant: "text-xs/normal",
        children: F.Z.Messages.GUILD_SETTINGS_SAFETY_MODERATION_EXPERIENCE_IN_COMMUNITY
      })]
    }), (0, n.jsx)(c.FormDivider, {
      className: w.divider
    })]
  })
}

function K(e) {
  let {
    guild: s,
    mfaLevel: t
  } = e, l = (0, o.e7)([C.Z], () => null != s && C.Z.can(y.Plq.MANAGE_GUILD, s), [s]), a = (0, o.e7)([L.default], () => L.default.getCurrentUser()), {
    isGuildOwnerWithMFA: u,
    showMFAUserTooltip: E
  } = i.useMemo(() => null == a ? {
    canChangeMFALevel: !1,
    showMFAUserTooltip: !1
  } : {
    isGuildOwnerWithMFA: s.isOwnerWithRequiredMfaLevel(a),
    showMFAUserTooltip: !a.mfaEnabled && s.isOwner(a)
  }, [a, s]), _ = t === y.BpS.ELEVATED, I = (0, r.throttle)(async e => {
    if (!!u && !E) await j.Z.updateMFALevel({
      guildId: s.id,
      level: e ? y.BpS.ELEVATED : y.BpS.NONE,
      isEnabled: !e
    })
  }, 1e3);
  return l ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.FormDivider, {
      className: w.divider
    }), (0, n.jsxs)("div", {
      className: w.setupContainer,
      children: [(0, n.jsx)(c.FormSwitch, {
        value: _,
        onChange: I,
        className: w.switchItem,
        disabled: !u,
        hideBorder: !0,
        children: (0, n.jsxs)("div", {
          className: w.switchItemTextContent,
          children: [(0, n.jsx)(c.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            children: F.Z.Messages.GUILD_SETTINGS_REQ_MFA_LABEL
          }), (0, n.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: F.Z.Messages.GUILD_SETTINGS_REQ_MFA_BODY
          })]
        })
      }), E && (0, n.jsx)(O.Z, {
        messageType: O.Q.INFO,
        textVariant: "text-xs/normal",
        children: F.Z.Messages.GUILD_SETTINGS_REQ_MFA_TOOLTIP.format({
          onClick: function() {
            d.Z.open(y.oAB.ACCOUNT)
          }
        })
      })]
    })]
  }) : null
}

function z() {
  var e;
  let {
    guild: s,
    mfaLevel: t
  } = (0, o.cj)([U.Z], () => U.Z.getProps(), []), i = (0, o.e7)([R.Z], () => R.Z.enabled, []), {
    showAlertMode: l
  } = (0, N.sw)(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : y.lds);
  return null == s ? null : i ? (0, n.jsx)(u.Z, {}) : (0, n.jsxs)(c.FormSection, {
    title: F.Z.Messages.SAFETY_SETUP,
    tag: c.FormTitleTags.H1,
    titleClassName: w.headerContainer,
    children: [(0, n.jsx)(W, {
      guild: s
    }), (0, n.jsx)(H, {
      guild: s
    }), (0, n.jsx)(K, {
      guild: s,
      mfaLevel: t
    }), (0, n.jsx)(V, {
      guild: s
    }), l ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.FormDivider, {
        className: w.divider
      }), (0, n.jsx)("div", {
        className: a()(w.setupContainer),
        children: (0, n.jsx)(P.w, {
          guild: s
        })
      })]
    }) : (0, n.jsx)(k, {
      guild: s
    })]
  })
}