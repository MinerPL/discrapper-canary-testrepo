"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("47120");
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("682864"),
  i = s("723047"),
  r = s("727843"),
  o = s("290348"),
  d = s("783454"),
  u = s("893729"),
  c = s("619326"),
  E = s("553204"),
  _ = s("689938"),
  I = s("606353"),
  T = s("392587");

function S() {
  let {
    editStateId: e,
    guildId: t
  } = (0, r.useEditStateContext)(), [, S] = o.useRoleIcon(e, t), [f, m] = o.useRoleColor(e, t), N = o.useRole(e, t);

  function g() {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("22942")]).then(s.bind(s, "660727"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        onUploadIcon: e => S({
          icon: e,
          unicodeEmoji: null
        }),
        onSelectUnicodeEmoji: e => S({
          icon: null,
          unicodeEmoji: e
        })
      })
    })
  }
  let h = (0, i.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsxs)(d.default, {
    title: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_FLAIR_HEADER_TITLE,
    description: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_FLAIR_HEADER_SUBTITLE,
    children: [(0, a.jsx)(l.FormSection, {
      title: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_COLOR_TITLE,
      disabled: h,
      children: (0, a.jsx)(c.default, {
        value: f,
        onChange: m,
        disabled: h
      })
    }), (0, a.jsx)(n.default, {
      size: 24
    }), (0, a.jsx)("div", {
      className: I.__invalid_iconSection,
      children: (0, a.jsxs)(l.FormSection, {
        title: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_BADGE_TITLE,
        disabled: h,
        children: [(0, a.jsx)(l.FormText, {
          type: l.FormText.Types.DESCRIPTION,
          className: I.formDescription,
          disabled: h,
          children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_BADGE_DESCRIPTION
        }), (0, a.jsxs)("div", {
          className: T.iconUploaderContainer,
          children: [(0, a.jsx)(E.default, {
            role: N,
            "aria-label": _.default.Messages.ROLE_ICON_CHOOSE_IMAGE,
            onClick: g,
            disabled: h
          }), (0, a.jsx)(l.Button, {
            look: l.Button.Looks.OUTLINED,
            color: l.Button.Colors.PRIMARY,
            className: I.__invalid_imageUploadButtonCTA,
            onClick: g,
            disabled: h,
            children: _.default.Messages.ROLE_ICON_CHOOSE_IMAGE
          })]
        })]
      })
    }), (0, a.jsx)(n.default, {
      size: 24
    }), (0, a.jsx)(l.FocusBlock, {
      children: (0, a.jsxs)("div", {
        className: T.previewContainer,
        "aria-hidden": !0,
        children: [(0, a.jsx)(u.default, {
          guildId: t,
          role: N,
          className: T.messageContainer,
          theme: "light"
        }), (0, a.jsx)(u.default, {
          guildId: t,
          role: N,
          className: T.messageContainer,
          theme: "dark"
        })]
      })
    })]
  })
}