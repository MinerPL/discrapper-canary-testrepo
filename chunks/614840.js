"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  i = s("151426"),
  r = s("77078"),
  o = s("10641"),
  d = s("329606"),
  u = s("305961"),
  c = s("137215"),
  E = s("900938"),
  _ = s("431451"),
  I = s("353830"),
  T = s("772871"),
  S = s("900084"),
  f = s("860170"),
  m = s("766829"),
  N = s("994428"),
  g = s("782340"),
  h = s("854743");

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
        className: h.arrow,
        direction: c.default.Directions.LEFT
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/semibold",
        color: "interactive-normal",
        children: g.default.Messages.BACK
      })]
    }), t]
  })
}