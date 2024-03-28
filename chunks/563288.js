"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("735250"),
  i = s("470079"),
  n = s("442837"),
  l = s("524437"),
  r = s("481060"),
  o = s("607070"),
  d = s("434404"),
  c = s("430824"),
  u = s("153124"),
  m = s("810090"),
  f = s("626135"),
  h = s("150340"),
  N = s("721012"),
  x = s("819866"),
  I = s("981631"),
  _ = s("921944"),
  D = s("689938"),
  C = s("337454");

function g(e) {
  let {
    guildId: t,
    transitionState: s,
    onClose: g
  } = e, j = (0, u.useUID)(), L = (0, n.useStateFromStores)([o.default], () => o.default.useReducedMotion), v = (0, n.useStateFromStores)([c.default], () => c.default.getGuild(t));
  return (i.useEffect(() => {
    f.default.track(I.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
      type: l.DismissibleContent[l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2],
      guild_id: t
    })
  }, [t]), null == v) ? null : (0, a.jsxs)(r.ModalRoot, {
    transitionState: s,
    "aria-labelledby": j,
    size: r.ModalSize.LARGE,
    className: C.modal,
    children: [(0, a.jsxs)("div", {
      className: C.content,
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: C.header,
        children: D.default.Messages.GUILD_ONBOARDING_UPSELL_MODAL_TITLE
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: D.default.Messages.GUILD_ONBOARDING_UPSELL_MODAL_DESCRIPTION.format({
          guildName: v.name
        })
      }), (0, a.jsxs)("div", {
        className: C.testimonials,
        children: [(0, a.jsx)("div", {
          className: C.__invalid_designBuddiesContainer,
          children: (0, a.jsx)(N.default, {
            message: D.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
            adminTitle: D.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES,
            profilePic: "https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg",
            emphasisColor: "text-positive",
            arrowPosition: "right"
          })
        }), (0, a.jsx)("div", {
          className: C.__invalid_valorantContainer,
          children: (0, a.jsx)(N.default, {
            message: D.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
            adminTitle: D.default.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT,
            profilePic: "https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg",
            emphasisColor: "text-warning",
            arrowPosition: "left"
          })
        })]
      }), (0, a.jsxs)("div", {
        className: C.buttonContainer,
        children: [(0, a.jsx)(r.Button, {
          onClick: () => g(),
          look: r.Button.Looks.OUTLINED,
          color: r.Button.Colors.PRIMARY,
          children: D.default.Messages.CLOSE
        }), (0, a.jsx)(r.Button, {
          onClick: () => {
            f.default.track(I.AnalyticEvents.UPSELL_CLICKED, {
              type: l.DismissibleContent[l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2],
              action: "primary"
            }), d.default.open(t, I.GuildSettingsSections.ONBOARDING), g(_.ContentDismissActionType.PRIMARY), (0, h.dismissedGuildOnboardingUpsell)(v.id, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2)
          },
          children: D.default.Messages.CHECK_IT_OUT
        })]
      })]
    }), (0, a.jsx)("div", {
      className: C.videoContainer,
      children: (0, a.jsx)(m.default, {
        className: C.video,
        loop: !L,
        autoPlay: !L,
        playsInline: !0,
        "data-testid": "onboarding-demo",
        children: (0, a.jsx)("source", {
          src: x,
          type: "video/mp4"
        }, "hevc")
      })
    })]
  })
}