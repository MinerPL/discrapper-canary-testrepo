"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  },
  useNuxCardHeight: function() {
    return g
  }
});
var n = l("735250");
l("470079");
var a = l("803997"),
  s = l.n(a),
  i = l("524437"),
  r = l("481060"),
  d = l("605236"),
  o = l("434404"),
  u = l("707076"),
  c = l("465670"),
  h = l("398758"),
  f = l("981631"),
  m = l("921944"),
  C = l("689938"),
  N = l("699873"),
  x = l("697611");

function g(e) {
  return (0, h.useShouldShowOnboardingAdminUpsellForGuild)(e) ? 250 : 152
}

function p(e) {
  let {
    guild: t
  } = e, l = (0, h.useShouldShowOnboardingAdminUpsellForGuild)(t.id), a = (0, d.useIsDismissibleContentDismissed)(i.DismissibleContent.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL), g = l && !a ? i.DismissibleContent.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : i.DismissibleContent.CHANNEL_BROWSER_NUX;
  (0, d.requestMarkDismissibleContentAsShown)(g);
  let p = l ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsx)(r.Heading, {
        className: N.heading,
        color: "always-white",
        variant: "heading-lg/semibold",
        children: C.default.Messages.CHANNEL_BROWSER_ADMIN_NUX_TITLE
      }), (0, n.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: C.default.Messages.CHANNEL_BROWSER_ADMIN_NUX_DESCRIPTION
      }), (0, n.jsx)(r.Button, {
        className: N.checkItOut,
        onClick: () => {
          o.default.open(t.id, f.GuildSettingsSections.ONBOARDING), (0, d.markDismissibleContentAsDismissed)(g, {
            dismissAction: m.ContentDismissActionType.PRIMARY
          })
        },
        look: r.Button.Looks.INVERTED,
        children: (0, n.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "none",
          children: C.default.Messages.CHANNEL_BROWSER_ADMIN_NUX_CTA
        })
      })]
    }), (0, n.jsx)(u.OnboardingPreview, {
      isTooltip: !0
    })]
  }) : (0, n.jsxs)("div", {
    className: N.nuxContent,
    children: [(0, n.jsx)("img", {
      width: 180,
      className: N.image,
      src: x,
      alt: "",
      "aria-hidden": !0
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(r.Heading, {
        className: N.heading,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: C.default.Messages.CHANNEL_BROWSER_NUX_TITLE
      }), (0, n.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: C.default.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION
      }), (0, n.jsx)(r.Text, {
        className: N.tip,
        variant: "text-md/normal",
        color: "header-secondary",
        children: C.default.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION_2.format()
      })]
    })]
  });
  return (0, n.jsxs)("div", {
    className: s()(N.container, {
      [N.adminUpsell]: l
    }),
    children: [(0, n.jsx)(r.Clickable, {
      className: N.closeButton,
      onClick: () => {
        (0, d.markDismissibleContentAsDismissed)(g, {
          dismissAction: m.ContentDismissActionType.DISMISS
        })
      },
      children: (0, n.jsx)(c.default, {})
    }), p]
  })
}