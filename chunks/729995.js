"use strict";
t.d(s, {
  Z: function() {
    return O
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(2052),
  r = t(367907),
  o = t(45966),
  c = t(734893),
  d = t(621923),
  u = t(430824),
  E = t(759231),
  _ = t(132338),
  I = t(626135),
  T = t(983135),
  N = t(8426),
  m = t(969632),
  S = t(570961),
  h = t(84658),
  g = t(974513),
  x = t(677892),
  C = t(981631),
  R = t(689938),
  L = t(131387);

function O(e) {
  let {
    guildId: s,
    completed: t
  } = e, {
    homeSettingsEnabled: l
  } = (0, d.kZ)(s), c = (0, i.e7)([o.Z], () => o.Z.getEnabled(s)), {
    location: u
  } = (0, a.O)();
  u.object = t ? C.qAy.ONBOARDING_EDIT : C.qAy.ONBOARDING_REVIEW;
  let E = async function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    c ? (await (0, S.$y)(s, !1), I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
      ...(0, r.hH)(s),
      action_taken: h.W$[h.W$.TOGGLE_DISABLED],
      location: u
    })) : (await (0, S.$y)(s, !0), e && (0, N.To)(s, !0), t ? I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
      ...(0, r.hH)(s),
      action_taken: h.W$[h.W$.TOGGLE_ENABLED],
      location: u
    }) : I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
      ...(0, r.hH)(s),
      step: h.PG[h.PG.REVIEW],
      back: !1,
      skip: !1,
      completed: !0
    }))
  }, m = () => {
    I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
      ...(0, r.hH)(s),
      action_taken: h.W$[h.W$.PREVIEW],
      location: u
    }), (0, T.di)(s)
  }, g = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(x.ku, {
      guildId: s,
      onEdit: () => {
        I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
          ...(0, r.hH)(s),
          action_taken: h.W$[h.W$.EDIT_DEFAULT_CHANNELS],
          location: u
        }), (0, T.$K)(h.PG.DEFAULT_CHANNELS)
      },
      disableGoodStatus: t
    }), (0, n.jsx)(_.Z, {
      className: L.divider
    }), (0, n.jsx)(x.ap, {
      guildId: s,
      onEdit: () => {
        I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
          ...(0, r.hH)(s),
          action_taken: h.W$[h.W$.EDIT_CUSTOMIZATION_QUESTIONS],
          location: u
        }), (0, T.$K)(h.PG.CUSTOMIZATION_QUESTIONS)
      },
      disableGoodStatus: t
    }), l && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(_.Z, {
        className: L.divider
      }), (0, n.jsx)(x.P_, {
        guildId: s,
        onEdit: () => {
          I.default.track(C.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
            ...(0, r.hH)(s),
            action_taken: h.W$[h.W$.EDIT_HOME_SETTINGS],
            location: u
          }), (0, T.$K)(h.PG.HOME_SETTINGS)
        },
        disableGoodStatus: t
      })]
    })]
  });
  return t ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(A, {
      guildId: s,
      handlePreview: m
    }), (0, n.jsx)(p, {}), (0, n.jsxs)("div", {
      className: L.content,
      children: [(0, n.jsx)(M, {
        guildId: s,
        handleOnboardingToggle: E
      }), g]
    })]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: L.content,
      children: [(0, n.jsx)(f, {
        guildId: s,
        handleOnboardingToggle: E,
        handlePreview: m
      }), g]
    }), (0, n.jsx)(v, {
      guildId: s
    })]
  })
}

function A(e) {
  let {
    guildId: s,
    handlePreview: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: L.header,
      children: R.Z.Messages.GUILD_SETTINGS_ONBOARDING
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: L.subheader,
      children: R.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE
    }), (0, n.jsxs)("div", {
      className: L.help,
      children: [(0, n.jsx)(l.Anchor, {
        target: "_blank",
        href: C.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, n.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: R.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SEE_EXAMPLES
        })
      }), (0, n.jsx)("div", {
        className: L.helpSeparator
      }), (0, n.jsx)(l.Anchor, {
        onClick: t,
        children: (0, n.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: R.Z.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
        })
      }), (0, n.jsx)("div", {
        className: L.helpSeparator
      }), (0, n.jsx)(g.Wu, {
        guildId: s
      })]
    })]
  })
}

function p() {
  let e = "• ";
  return (0, n.jsxs)("div", {
    className: L.notice,
    children: [(0, n.jsx)("img", {
      className: L.wumpus,
      src: t(33631),
      alt: "wumpus"
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        className: L.header,
        children: R.Z.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_HEADER
      }), (0, n.jsxs)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, R.Z.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_2]
      }), (0, n.jsxs)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, R.Z.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_3]
      })]
    })]
  })
}

function M(e) {
  let {
    guildId: s,
    handleOnboardingToggle: t
  } = e, a = (0, x.$$)(s), r = (0, i.e7)([o.Z], () => o.Z.getEnabled(s));
  return (0, n.jsxs)("div", {
    className: L.review,
    children: [(0, n.jsxs)("div", {
      className: L.reviewHeaderText,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: r ? R.Z.Messages.GUILD_ONBOARDING_OVERVIEW_TITLE_ENABLED : R.Z.Messages.GUILD_ONBOARDING_OVERVIEW_TITLE_DISABLED
      }), (0, n.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: r ? R.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE_ENABLED : R.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE_DISABLED
      })]
    }), (0, n.jsx)(l.Switch, {
      checked: r,
      onChange: () => t(!1),
      disabled: !r && !a
    })]
  })
}

function f(e) {
  let {
    guildId: s,
    handleOnboardingToggle: t,
    handlePreview: a
  } = e, r = (0, x.$$)(s), o = (0, i.e7)([m.Z], () => m.Z.getSettings()), d = (0, c.uo)(o);
  return (0, n.jsxs)("div", {
    className: L.reviewHeader,
    children: [(0, n.jsxs)("div", {
      className: L.reviewHeaderText,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: r ? R.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_TITLE : R.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_TITLE_INCOMPLETE
      }), (0, n.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: r ? R.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_DESCRIPTION : R.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_DESCRIPTION_INCOMPLETE
      })]
    }), (0, n.jsxs)("div", {
      className: L.reviewActions,
      children: [(0, n.jsx)(l.Button, {
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.OUTLINED,
        onClick: a,
        children: R.Z.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
      }), (0, n.jsx)(l.Button, {
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.BRAND,
        onClick: () => t(d),
        disabled: !r,
        children: R.Z.Messages.GUILD_ONBOARDING_SETUP_REVIEW_ENABLE_ONBOARDING
      })]
    })]
  })
}

function v(e) {
  let {
    guildId: s
  } = e, t = (0, i.e7)([u.Z], () => u.Z.getGuild(s));
  return null == t || t.verificationLevel < C.sFg.VERY_HIGH ? null : (0, n.jsxs)("div", {
    className: L.rolesWarning,
    children: [(0, n.jsx)(E.Z, {
      width: 16,
      height: 16,
      className: L.warningIcon
    }), (0, n.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: R.Z.Messages.GUILD_ONBOARDING_SETUP_PREVIEW_ROLES_WARNING
    })]
  })
}