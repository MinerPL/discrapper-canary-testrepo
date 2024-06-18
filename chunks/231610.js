"use strict";
t.d(s, {
  Z: function() {
    return T
  }
}), t(47120);
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(723047),
  a = t(727843),
  r = t(290348),
  o = t(783454),
  c = t(893729),
  d = t(619326),
  u = t(553204),
  E = t(689938),
  _ = t(169769),
  I = t(654402);

function T() {
  let {
    editStateId: e,
    guildId: s
  } = (0, a.N)(), [, T] = r.p9(e, s), [N, m] = r.Ek(e, s), S = r.qs(e, s);

  function h() {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("22942")]).then(t.bind(t, 660727));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s,
        onUploadIcon: e => T({
          icon: e,
          unicodeEmoji: null
        }),
        onSelectUnicodeEmoji: e => T({
          icon: null,
          unicodeEmoji: e
        })
      })
    })
  }
  let g = (0, l.mY)();
  return (0, n.jsxs)(o.Z, {
    title: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_FLAIR_HEADER_TITLE,
    description: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_FLAIR_HEADER_SUBTITLE,
    children: [(0, n.jsx)(i.FormSection, {
      title: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_COLOR_TITLE,
      disabled: g,
      children: (0, n.jsx)(d.Z, {
        value: N,
        onChange: m,
        disabled: g
      })
    }), (0, n.jsx)(i.Spacer, {
      size: 24
    }), (0, n.jsx)("div", {
      className: _.__invalid_iconSection,
      children: (0, n.jsxs)(i.FormSection, {
        title: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_BADGE_TITLE,
        disabled: g,
        children: [(0, n.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: _.formDescription,
          disabled: g,
          children: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_BADGE_DESCRIPTION
        }), (0, n.jsxs)("div", {
          className: I.iconUploaderContainer,
          children: [(0, n.jsx)(u.Z, {
            role: S,
            "aria-label": E.Z.Messages.ROLE_ICON_CHOOSE_IMAGE,
            onClick: h,
            disabled: g
          }), (0, n.jsx)(i.Button, {
            look: i.Button.Looks.OUTLINED,
            color: i.Button.Colors.PRIMARY,
            className: _.__invalid_imageUploadButtonCTA,
            onClick: h,
            disabled: g,
            children: E.Z.Messages.ROLE_ICON_CHOOSE_IMAGE
          })]
        })]
      })
    }), (0, n.jsx)(i.Spacer, {
      size: 24
    }), (0, n.jsx)(i.FocusBlock, {
      children: (0, n.jsxs)("div", {
        className: I.previewContainer,
        "aria-hidden": !0,
        children: [(0, n.jsx)(c.Z, {
          guildId: s,
          role: S,
          className: I.messageContainer,
          theme: "light"
        }), (0, n.jsx)(c.Z, {
          guildId: s,
          role: S,
          className: I.messageContainer,
          theme: "dark"
        })]
      })
    })]
  })
}