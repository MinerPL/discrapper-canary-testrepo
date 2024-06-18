"use strict";
t.d(s, {
  ZP: function() {
    return A
  },
  Zm: function() {
    return M
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(852860),
  o = t(471445),
  c = t(45966),
  d = t(637853),
  u = t(93879),
  E = t(605403),
  _ = t(759231),
  I = t(999382),
  T = t(889369),
  N = t(983135),
  m = t(570961),
  S = t(208665),
  h = t(974513),
  g = t(716130),
  x = t(981631),
  C = t(290511),
  R = t(689938),
  L = t(82591);

function O(e) {
  let {
    guildId: s,
    prompts: t
  } = e, r = (0, l.e7)([T.Z], () => T.Z.editedDefaultChannelIds), [c, I] = (0, d.dF)(s, t, [...r]), N = c.length, m = c.length + I.length, S = N / m * 100, h = Math.max(Math.ceil(85 * m / 100) - N, 0), [g, x] = i.useState(!1);
  return (0, n.jsxs)("div", {
    className: L.channelCoverage,
    children: [(0, n.jsxs)(a.Clickable, {
      className: L.coverageHeader,
      onClick: () => x(!g),
      children: [(0, n.jsxs)("div", {
        className: L.warningTextContainer,
        children: [S <= 85 && (0, n.jsx)(_.Z, {
          width: 16,
          height: 16,
          className: L.warning
        }), (0, n.jsx)(a.Text, {
          className: L.coverageTitle,
          variant: "text-xs/medium",
          color: "text-muted",
          children: R.Z.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_MISSING_CHANNELS.format({
            numChannelsMissing: m - N
          })
        })]
      }), (0, n.jsxs)("div", {
        className: L.progressContainer,
        children: [(0, n.jsx)(a.Progress, {
          className: L.coverageProgress,
          foregroundColor: S > 85 ? "var(--status-positive)" : "var(--status-warning)",
          percent: S
        }), (0, n.jsx)(E.Z, {
          className: L.caret,
          open: g
        })]
      })]
    }), g ? (0, n.jsxs)("div", {
      className: L.channelCoverageDetails,
      children: [(0, n.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: R.Z.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_CHANNELS
      }), (0, n.jsx)("div", {
        className: L.channels,
        children: I.map(e => {
          var s;
          let t = null !== (s = (0, o.KS)(e)) && void 0 !== s ? s : u.Z;
          return (0, n.jsx)("div", {
            className: L.channelPill,
            children: (0, n.jsxs)(a.Text, {
              className: L.channel,
              variant: "text-xs/normal",
              color: "interactive-active",
              children: [(0, n.jsx)(t, {
                width: 12,
                height: 12
              }), e.name]
            })
          }, e.id)
        })
      }), (0, n.jsx)("div", {
        className: L.channelCoverageHint,
        children: h > 0 ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(_.Z, {
            width: 16,
            height: 16
          }), (0, n.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: R.Z.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_ADD_HELP.format({
              numChannels: h
            })
          })]
        }) : (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: R.Z.Messages.GUILD_NO_CHANNELS_HEADER
        })
      })]
    }) : null]
  })
}

function A(e) {
  let {
    saveOnClose: s
  } = e, t = (0, l.e7)([I.Z], () => I.Z.getGuild());
  return null == t ? null : (0, n.jsx)(p, {
    guild: t,
    saveOnClose: s
  })
}

function p(e) {
  let {
    guild: s,
    saveOnClose: t
  } = e, r = (0, l.e7)([c.Z], () => c.Z.isLoading()), o = (0, l.e7)([S.Z], () => S.Z.editedOnboardingPrompts), d = (0, l.e7)([S.Z], () => S.Z.advancedMode), u = i.useRef(!1);
  if (i.useEffect(() => {
      !r && !u.current && 0 === o.length && (u.current = !0, !d && (0, m.tS)(s, [(0, C.ae)()], !1))
    }), i.useEffect(() => {
      if (t) return () => {
        (0, m.rS)(s, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }
    }, [t]), null == s) return null;
  let E = async () => {
    try {
      await (0, m.rS)(s), await (0, N.di)(s.id)
    } catch {}
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(a.Heading, {
      className: L.header,
      variant: "heading-lg/extrabold",
      children: d ? R.Z.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER_ADVANCED : R.Z.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER
    }), (0, n.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: R.Z.Messages.ONBOARDING_PROMPT_SETTINGS_SUBHEADER
    }), (0, n.jsxs)("div", {
      className: L.links,
      children: [(0, n.jsx)(a.Anchor, {
        target: "_blank",
        href: x.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, n.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: R.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SEE_EXAMPLES
        })
      }), (0, n.jsx)("div", {
        className: L.dot
      }), (0, n.jsx)(a.Anchor, {
        onClick: E,
        children: (0, n.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: R.Z.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
        })
      }), (0, n.jsx)("div", {
        className: L.dot
      }), (0, n.jsx)(h.Wu, {
        guildId: s.id
      })]
    }), (0, n.jsx)(O, {
      guildId: s.id,
      prompts: o
    }), (0, n.jsx)("div", {
      className: L.prompts,
      children: r ? (0, n.jsx)(a.Spinner, {}) : (0, n.jsx)(g.Z, {
        postjoinOnly: d,
        guildId: s.id
      })
    })]
  })
}

function M() {
  let e = (0, l.e7)([I.Z], () => I.Z.getGuild()),
    s = (0, l.e7)([S.Z], () => S.Z.submitting);
  return null == e ? null : (0, n.jsx)(r.Z, {
    onSave: () => {
      try {
        (0, m.rS)(e)
      } catch {}
    },
    onReset: m.NB,
    submitting: s,
    onSaveText: R.Z.Messages.SAVE
  })
}