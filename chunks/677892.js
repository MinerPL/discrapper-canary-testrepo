"use strict";
s.r(t), s.d(t, {
  CustomizationQuestionsOverviewItem: function() {
    return A
  },
  DefaultChannelsOverviewItem: function() {
    return O
  },
  HomeSettingsOverviewItem: function() {
    return p
  },
  useOnboardingCanBeEnabled: function() {
    return L
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  i = s("481060"),
  r = s("45966"),
  o = s("637853"),
  d = s("734893"),
  u = s("621923"),
  c = s("877453"),
  E = s("93879"),
  _ = s("263704"),
  I = s("988951"),
  T = s("308570"),
  S = s("759231"),
  f = s("8426"),
  m = s("969632"),
  N = s("974513"),
  g = s("290511"),
  h = s("689938"),
  C = s("583782");

function R(e) {
  let t, {
    title: s,
    description: l,
    icon: n,
    hasStarted: r,
    status: o,
    onEdit: d,
    extra: u
  } = e;
  switch (o) {
    case "good":
      t = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(_.default, {
          width: 16,
          height: 16,
          className: C.checkmark
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/semibold",
          color: "status-positive",
          className: C.statusText,
          children: h.default.Messages.DEFAULT_CHANNELS_GOOD
        })]
      });
      break;
    case "warning":
      t = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(S.default, {
          width: 16,
          height: 16,
          className: C.warning
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/semibold",
          color: "status-warning",
          className: C.statusText,
          children: h.default.Messages.ONBOARDING_PROMPTS_WARNING
        })]
      });
      break;
    case "required":
      t = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(S.default, {
          width: 16,
          height: 16,
          className: C.danger
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/semibold",
          color: "status-danger",
          className: C.statusText,
          children: h.default.Messages.REQUIRED
        })]
      })
  }
  return (0, a.jsxs)("div", {
    className: C.onboardingStepContainer,
    children: [(0, a.jsxs)("div", {
      className: C.leftContainer,
      children: [(0, a.jsx)("div", {
        className: C.iconContainer,
        children: n
      }), (0, a.jsxs)("div", {
        className: C.onboardingStepText,
        children: [(0, a.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          children: s
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: r && "required" === o ? "status-danger" : "text-normal",
          children: l
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: C.rightContainer,
      children: [t, u, r ? (0, a.jsx)(i.Button, {
        className: C.cta,
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.OUTLINED,
        borderColor: i.Button.BorderColors.PRIMARY,
        onClick: d,
        children: h.default.Messages.EDIT
      }) : (0, a.jsxs)(i.Button, {
        className: C.cta,
        innerClassName: C.ctaInner,
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.PRIMARY,
        onClick: d,
        children: [h.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_SET_UP, (0, a.jsx)(c.default, {
          width: 12,
          height: 12
        })]
      })]
    })]
  })
}

function x(e) {
  let t = (0, n.useStateFromStoresArray)([r.default], () => r.default.getDefaultChannelIds(e)),
    [s, a] = (0, o.useChattableDefaultChannels)(e, t);
  return a.length >= g.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING && s.length >= g.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN
}

function L(e) {
  let t = x(e),
    s = (0, N.useAdvancedModeReady)(e);
  return t || s
}

function O(e) {
  var t, s, l, i;
  let {
    guildId: d,
    onEdit: u,
    disableGoodStatus: c
  } = e, _ = (0, n.useStateFromStoresArray)([r.default], () => r.default.getDefaultChannelIds(d)), I = (0, n.useStateFromStores)([r.default], () => (0, o.getMinimumSetOfDefaultChannelIds)(d, r.default.getDefaultChannelIds(d), r.default.getOnboardingPrompts(d)).length), [, T] = (0, o.useChattableDefaultChannels)(d, _), S = T.length, f = x(d), m = (0, N.useAdvancedModeReady)(d), L = (0, n.useStateFromStores)([r.default], () => r.default.isAdvancedMode(d));
  let O = (t = f, s = L, l = S, i = I, s ? h.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NUM_DEFAULT_CHANNELS_ADVANCED.format({
    numDefaultChannels: l,
    numFromQuestions: i - l
  }) : t ? h.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NUM_DEFAULT_CHANNELS.format({
    numDefaultChannels: l
  }) : h.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NOT_ENOUGH_DEFAULT_CHANNELS.format({
    numDefaultChannels: g.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING,
    numChattableChannels: g.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN
  }));
  return (0, a.jsx)(R, {
    title: L ? h.default.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS_ADVANCED : h.default.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS,
    description: O,
    icon: (0, a.jsx)(E.default, {
      width: 24,
      height: 24,
      className: C.channelIcon
    }),
    hasStarted: S > 0 || L,
    status: f || m ? c ? "none" : "good" : "required",
    onEdit: u
  })
}

function A(e) {
  let {
    guildId: t,
    onEdit: s,
    disableGoodStatus: l
  } = e, i = (0, n.useStateFromStoresArray)([r.default], () => r.default.getDefaultChannelIds(t)), d = (0, n.useStateFromStoresArray)([r.default], () => r.default.getOnboardingPrompts(t)), u = d.length, [c, E] = (0, o.useChannelCoverageForOnboarding)(t, d, i), _ = c.length, T = c.length + E.length, S = _ / T * 100, f = (0, n.useStateFromStores)([r.default], () => r.default.isAdvancedMode(t)), m = u > 0, N = "none";
  return m && (S >= 85 && !l ? N = "good" : S < 85 && (N = "warning")), (0, a.jsx)(R, {
    title: f ? h.default.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER_ADVANCED : h.default.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER,
    description: h.default.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE.format({
      numChannels: _,
      numTotalChannels: T,
      channelsHook: (e, t) => (0, a.jsx)("span", {
        style: {
          color: S > 85 ? "var(--header-primary)" : "var(--status-warning)"
        },
        children: e
      }, t)
    }),
    icon: (0, a.jsx)(I.default, {
      width: 24,
      height: 24,
      className: C.channelIcon
    }),
    hasStarted: m,
    status: N,
    onEdit: s
  })
}

function p(e) {
  let {
    guildId: t,
    onEdit: s,
    disableGoodStatus: o
  } = e, c = (0, n.useStateFromStores)([m.default], () => m.default.getSettings()), E = (0, n.useStateFromStores)([r.default], () => r.default.getEnabled(t)), {
    serverGuideOptional: _
  } = (0, u.useOptionalOnboardingHomeAdminExperiment)(t), I = (0, d.isSettingsValid)(c), S = c.enabled, N = l.useCallback(() => {
    (0, f.enableHomeSettings)(t, !S)
  }, [t, S]), g = !(0, d.isSettingsEmpty)(c), x = "none";
  g && (I && !o ? x = "good" : !I && (x = "required"));
  let L = h.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_DESCRIPTION;
  I ? !g && (L = h.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_NOT_STARTED_DESCRIPTION) : L = h.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_INVALID_DESCRIPTION;
  let O = null;
  return g && _ && E && (O = (0, a.jsx)(i.Switch, {
    className: C.inlineSwitch,
    checked: S,
    onChange: N,
    disabled: !I
  })), (0, a.jsx)(R, {
    title: h.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_TITLE,
    description: L,
    icon: (0, a.jsx)(T.default, {
      width: 24,
      height: 24,
      className: C.channelIcon
    }),
    hasStarted: g,
    status: x,
    onEdit: s,
    extra: O
  })
}