"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("222007");
var a = s("37983");
s("884691");
var l = s("77078"),
  n = s("191814"),
  i = s("757715"),
  r = s("406876"),
  o = s("167109"),
  d = s("561205"),
  u = s("246506"),
  c = s("301289"),
  E = s("341778"),
  _ = s("782340"),
  I = s("325224"),
  T = s("951397");

function S() {
  let {
    editStateId: e,
    guildId: t
  } = (0, r.useEditStateContext)(), [, S] = o.useRoleIcon(e, t), [f, m] = o.useRoleColor(e, t), N = o.useRole(e, t);

  function g() {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("64567").then(s.bind(s, "64567"));
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
      className: I.iconSection,
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
            className: I.imageUploadButtonCTA,
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