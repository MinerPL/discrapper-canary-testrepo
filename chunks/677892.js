"use strict";
t.d(s, {
  $$: function() {
    return O
  },
  P_: function() {
    return M
  },
  ap: function() {
    return p
  },
  ku: function() {
    return A
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(45966),
  o = t(637853),
  c = t(734893),
  d = t(621923),
  u = t(877453),
  E = t(93879),
  _ = t(263704),
  I = t(988951),
  T = t(308570),
  N = t(759231),
  m = t(8426),
  S = t(969632),
  h = t(974513),
  g = t(290511),
  x = t(689938),
  C = t(419894);

function R(e) {
  let s, {
    title: t,
    description: i,
    icon: l,
    hasStarted: r,
    status: o,
    onEdit: c,
    extra: d
  } = e;
  switch (o) {
    case "good":
      s = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(_.Z, {
          width: 16,
          height: 16,
          className: C.checkmark
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "status-positive",
          className: C.statusText,
          children: x.Z.Messages.DEFAULT_CHANNELS_GOOD
        })]
      });
      break;
    case "warning":
      s = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(N.Z, {
          width: 16,
          height: 16,
          className: C.warning
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "status-warning",
          className: C.statusText,
          children: x.Z.Messages.ONBOARDING_PROMPTS_WARNING
        })]
      });
      break;
    case "required":
      s = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(N.Z, {
          width: 16,
          height: 16,
          className: C.danger
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "status-danger",
          className: C.statusText,
          children: x.Z.Messages.REQUIRED
        })]
      })
  }
  return (0, n.jsxs)("div", {
    className: C.onboardingStepContainer,
    children: [(0, n.jsxs)("div", {
      className: C.leftContainer,
      children: [(0, n.jsx)("div", {
        className: C.iconContainer,
        children: l
      }), (0, n.jsxs)("div", {
        className: C.onboardingStepText,
        children: [(0, n.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: t
        }), (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: r && "required" === o ? "status-danger" : "text-normal",
          children: i
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: C.rightContainer,
      children: [s, d, r ? (0, n.jsx)(a.Button, {
        className: C.cta,
        size: a.Button.Sizes.SMALL,
        color: a.Button.Colors.PRIMARY,
        look: a.Button.Looks.OUTLINED,
        onClick: c,
        children: x.Z.Messages.EDIT
      }) : (0, n.jsxs)(a.Button, {
        className: C.cta,
        innerClassName: C.ctaInner,
        size: a.Button.Sizes.SMALL,
        color: a.Button.Colors.PRIMARY,
        onClick: c,
        children: [x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_SET_UP, (0, n.jsx)(u.Z, {
          width: 12,
          height: 12
        })]
      })]
    })]
  })
}

function L(e) {
  let s = (0, l.e7)([r.Z], () => r.Z.getDefaultChannelIds(e)),
    t = i.useMemo(() => new Set(s), [s]),
    [n, a] = (0, o.VF)(e, t);
  return a.length >= g.md && n.length >= g.X
}

function O(e) {
  let s = L(e),
    t = (0, h.O4)(e);
  return s || t
}

function A(e) {
  var s, t, a, c;
  let {
    guildId: d,
    onEdit: u,
    disableGoodStatus: _
  } = e, I = (0, l.Wu)([r.Z], () => r.Z.getDefaultChannelIds(d)), T = (0, l.e7)([r.Z], () => (0, o.kl)(d, r.Z.getDefaultChannelIds(d), r.Z.getOnboardingPrompts(d)).length), N = i.useMemo(() => new Set(I), [I]), [, m] = (0, o.VF)(d, N), S = m.length, O = L(d), A = (0, h.O4)(d), p = (0, l.e7)([r.Z], () => r.Z.isAdvancedMode(d));
  let M = (s = O, t = p, a = S, c = T, t ? x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NUM_DEFAULT_CHANNELS_ADVANCED.format({
    numDefaultChannels: a,
    numFromQuestions: c - a
  }) : s ? x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NUM_DEFAULT_CHANNELS.format({
    numDefaultChannels: a
  }) : x.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_NOT_ENOUGH_DEFAULT_CHANNELS.format({
    numDefaultChannels: g.md,
    numChattableChannels: g.X
  }));
  return (0, n.jsx)(R, {
    title: p ? x.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS_ADVANCED : x.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS,
    description: M,
    icon: (0, n.jsx)(E.Z, {
      width: 24,
      height: 24,
      className: C.channelIcon
    }),
    hasStarted: S > 0 || p,
    status: O || A ? _ ? "none" : "good" : "required",
    onEdit: u
  })
}

function p(e) {
  let {
    guildId: s,
    onEdit: t,
    disableGoodStatus: i
  } = e, a = (0, l.Wu)([r.Z], () => r.Z.getDefaultChannelIds(s)), c = (0, l.Wu)([r.Z], () => r.Z.getOnboardingPrompts(s)), d = c.length, [u, E] = (0, o.dF)(s, c, a), _ = u.length, T = u.length + E.length, N = _ / T * 100, m = (0, l.e7)([r.Z], () => r.Z.isAdvancedMode(s)), S = d > 0, h = "none";
  return S && (N >= 85 && !i ? h = "good" : N < 85 && (h = "warning")), (0, n.jsx)(R, {
    title: m ? x.Z.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER_ADVANCED : x.Z.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER,
    description: x.Z.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE.format({
      numChannels: _,
      numTotalChannels: T,
      channelsHook: (e, s) => (0, n.jsx)("span", {
        style: {
          color: N > 85 ? "var(--header-primary)" : "var(--status-warning)"
        },
        children: e
      }, s)
    }),
    icon: (0, n.jsx)(I.Z, {
      width: 24,
      height: 24,
      className: C.channelIcon
    }),
    hasStarted: S,
    status: h,
    onEdit: t
  })
}

function M(e) {
  let {
    guildId: s,
    onEdit: t,
    disableGoodStatus: o
  } = e, u = (0, l.e7)([S.Z], () => S.Z.getSettings()), E = (0, l.e7)([r.Z], () => r.Z.getEnabled(s)), {
    serverGuideOptional: _
  } = (0, d.hl)(s), I = (0, c.uo)(u), N = u.enabled, h = i.useCallback(() => {
    (0, m.To)(s, !N)
  }, [s, N]), g = !(0, c.av)(u), L = "none";
  g && (I && !o ? L = "good" : !I && (L = "required"));
  let O = x.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_DESCRIPTION;
  I ? !g && (O = x.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_NOT_STARTED_DESCRIPTION) : O = x.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_INVALID_DESCRIPTION;
  let A = null;
  return g && _ && E && (A = (0, n.jsx)(a.Switch, {
    className: C.inlineSwitch,
    checked: N,
    onChange: h,
    disabled: !I
  })), (0, n.jsx)(R, {
    title: x.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_REVIEW_TITLE,
    description: O,
    icon: (0, n.jsx)(T.Z, {
      width: 24,
      height: 24,
      className: C.channelIcon
    }),
    hasStarted: g,
    status: L,
    onEdit: t,
    extra: A
  })
}