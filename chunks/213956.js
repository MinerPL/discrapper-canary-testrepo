"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  i = s("524437"),
  r = s("481060"),
  o = s("605236"),
  d = s("874993"),
  u = s("430824"),
  c = s("996753"),
  E = s("999382"),
  _ = s("84613"),
  I = s("392885"),
  T = s("740903"),
  S = s("464610"),
  f = s("733629"),
  m = s("598622"),
  N = s("921944"),
  g = s("689938"),
  h = s("893079");

function C(e) {
  let t, {
      hideChangelog: s
    } = e,
    C = (0, n.useStateFromStores)([E.default], () => E.default.getGuildId()),
    R = (0, n.useStateFromStores)([u.default], () => u.default.getGuild(C)),
    x = (0, n.useStateFromStores)([I.default], () => I.default.getCurrentPage());
  if (l.useEffect(() => {
      (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.COMMUNITY_GUILD_SETTINGS_SAFETY, {
        dismissAction: N.ContentDismissActionType.AUTO
      })
    }, []), null == R) return null;
  let L = (0, m.getGuildSafetySettings)(R);
  switch (x) {
    case T.GuildSettingsSafetyPage.OVERVIEW:
      t = (0, a.jsx)(S.default, {
        guild: R,
        hideChangelog: s
      });
      break;
    case T.GuildSettingsSafetyPage.CAPTCHA_AND_RAID_PROTECTION:
      t = (0, a.jsx)(f.default, {
        title: g.default.Messages.GUILD_SETTINGS_SAFETY_CAPTCHA_RAID_PROTECTION,
        settings: L[T.GuildSettingsSafetyPage.CAPTCHA_AND_RAID_PROTECTION]
      });
      break;
    case T.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION:
      t = (0, a.jsx)(f.default, {
        title: g.default.Messages.GUILD_SETTINGS_SAFETY_DM_SPAM_PROTECTION,
        settings: L[T.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION]
      });
      break;
    case T.GuildSettingsSafetyPage.AUTOMOD:
      t = (0, a.jsx)(d.default, {
        guildId: R.id
      });
      break;
    case T.GuildSettingsSafetyPage.PERMISSIONS:
      t = (0, a.jsx)(f.default, {
        title: g.default.Messages.GUILD_SETTINGS_SAFETY_PERMISSIONS_TITLE,
        settings: L[T.GuildSettingsSafetyPage.PERMISSIONS]
      })
  }
  return (0, a.jsxs)(a.Fragment, {
    children: [x !== T.GuildSettingsSafetyPage.OVERVIEW && (0, a.jsxs)(r.Button, {
      className: h.back,
      innerClassName: h.backButton,
      look: r.Button.Looks.BLANK,
      size: r.Button.Sizes.MIN,
      onClick: () => {
        (0, _.setSafetyPage)(T.GuildSettingsSafetyPage.OVERVIEW)
      },
      children: [(0, a.jsx)(c.default, {
        className: h.__invalid_arrow,
        direction: c.default.Directions.LEFT
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/semibold",
        color: "interactive-normal",
        children: g.default.Messages.BACK
      })]
    }), t]
  })
}