"use strict";
s.r(t), s.d(t, {
  GuildSettingsOnboardingPromptsNotice: function() {
    return p
  },
  default: function() {
    return O
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  i = s("481060"),
  r = s("852860"),
  o = s("471445"),
  d = s("45966"),
  u = s("637853"),
  c = s("93879"),
  E = s("605403"),
  _ = s("759231"),
  I = s("999382"),
  T = s("889369"),
  S = s("983135"),
  f = s("570961"),
  m = s("208665"),
  N = s("974513"),
  g = s("716130"),
  h = s("981631"),
  C = s("290511"),
  R = s("689938"),
  x = s("82591");

function L(e) {
  let {
    guildId: t,
    prompts: s
  } = e, r = (0, n.useStateFromStores)([T.default], () => T.default.editedDefaultChannelIds), [d, I] = (0, u.useChannelCoverageForOnboarding)(t, s, [...r]), S = d.length, f = d.length + I.length, m = S / f * 100, N = Math.max(Math.ceil(85 * f / 100) - S, 0), [g, h] = l.useState(!1);
  return (0, a.jsxs)("div", {
    className: x.channelCoverage,
    children: [(0, a.jsxs)(i.Clickable, {
      className: x.coverageHeader,
      onClick: () => h(!g),
      children: [(0, a.jsxs)("div", {
        className: x.warningTextContainer,
        children: [m <= 85 && (0, a.jsx)(_.default, {
          width: 16,
          height: 16,
          className: x.warning
        }), (0, a.jsx)(i.Text, {
          className: x.coverageTitle,
          variant: "text-xs/medium",
          color: "text-muted",
          children: R.default.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_MISSING_CHANNELS.format({
            numChannelsMissing: f - S
          })
        })]
      }), (0, a.jsxs)("div", {
        className: x.progressContainer,
        children: [(0, a.jsx)(i.Progress, {
          className: x.coverageProgress,
          foregroundColor: m > 85 ? "var(--status-positive)" : "var(--status-warning)",
          percent: m
        }), (0, a.jsx)(E.default, {
          className: x.caret,
          open: g
        })]
      })]
    }), g ? (0, a.jsxs)("div", {
      className: x.channelCoverageDetails,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: R.default.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_CHANNELS
      }), (0, a.jsx)("div", {
        className: x.channels,
        children: I.map(e => {
          var t;
          let s = null !== (t = (0, o.getChannelIconComponent)(e)) && void 0 !== t ? t : c.default;
          return (0, a.jsx)("div", {
            className: x.channelPill,
            children: (0, a.jsxs)(i.Text, {
              className: x.channel,
              variant: "text-xs/normal",
              color: "interactive-active",
              children: [(0, a.jsx)(s, {
                width: 12,
                height: 12
              }), e.name]
            })
          }, e.id)
        })
      }), (0, a.jsx)("div", {
        className: x.channelCoverageHint,
        children: N > 0 ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(_.default, {
            width: 16,
            height: 16
          }), (0, a.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: R.default.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_ADD_HELP.format({
              numChannels: N
            })
          })]
        }) : (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: R.default.Messages.GUILD_NO_CHANNELS_HEADER
        })
      })]
    }) : null]
  })
}

function O(e) {
  let {
    saveOnClose: t
  } = e, s = (0, n.useStateFromStores)([I.default], () => I.default.getGuild());
  return null == s ? null : (0, a.jsx)(A, {
    guild: s,
    saveOnClose: t
  })
}

function A(e) {
  let {
    guild: t,
    saveOnClose: s
  } = e, r = (0, n.useStateFromStores)([d.default], () => d.default.isLoading()), o = (0, n.useStateFromStores)([m.default], () => m.default.editedOnboardingPrompts), u = (0, n.useStateFromStores)([m.default], () => m.default.advancedMode), c = l.useRef(!1);
  if (l.useEffect(() => {
      !r && !c.current && 0 === o.length && (c.current = !0, !u && (0, f.editGuildOnboardingPrompts)(t, [(0, C.getDefaultPrompt)()], !1))
    }), l.useEffect(() => {
      if (s) return () => {
        (0, f.saveGuildOnboardingPrompts)(t, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }
    }, [s]), null == t) return null;
  let E = async () => {
    try {
      await (0, f.saveGuildOnboardingPrompts)(t), await (0, S.startPreview)(t.id)
    } catch {}
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.Heading, {
      className: x.header,
      variant: "heading-lg/extrabold",
      children: u ? R.default.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER_ADVANCED : R.default.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: R.default.Messages.ONBOARDING_PROMPT_SETTINGS_SUBHEADER
    }), (0, a.jsxs)("div", {
      className: x.links,
      children: [(0, a.jsx)(i.Anchor, {
        target: "_blank",
        href: h.MarketingURLs.GUILD_ONBOARDING_EXAMPLES,
        children: (0, a.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: R.default.Messages.GUILD_ONBOARDING_OVERVIEW_SEE_EXAMPLES
        })
      }), (0, a.jsx)("div", {
        className: x.dot
      }), (0, a.jsx)(i.Anchor, {
        onClick: E,
        children: (0, a.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: R.default.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
        })
      }), (0, a.jsx)("div", {
        className: x.dot
      }), (0, a.jsx)(N.AdvancedModeToggle, {
        guildId: t.id
      })]
    }), (0, a.jsx)(L, {
      guildId: t.id,
      prompts: o
    }), (0, a.jsx)("div", {
      className: x.prompts,
      children: r ? (0, a.jsx)(i.Spinner, {}) : (0, a.jsx)(g.default, {
        postjoinOnly: u,
        guildId: t.id
      })
    })]
  })
}

function p() {
  let e = (0, n.useStateFromStores)([I.default], () => I.default.getGuild()),
    t = (0, n.useStateFromStores)([m.default], () => m.default.submitting);
  return null == e ? null : (0, a.jsx)(r.default, {
    onSave: () => {
      try {
        (0, f.saveGuildOnboardingPrompts)(e)
      } catch {}
    },
    onReset: f.resetGuildOnboardingPrompts,
    submitting: t,
    onSaveText: R.default.Messages.SAVE
  })
}