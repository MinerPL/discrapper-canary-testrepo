"use strict";
t.d(s, {
  Z: function() {
    return C
  }
});
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(704215),
  r = t(481060),
  o = t(605236),
  c = t(874993),
  d = t(430824),
  u = t(996753),
  E = t(999382),
  _ = t(84613),
  I = t(392885),
  T = t(740903),
  N = t(464610),
  m = t(733629),
  S = t(598622),
  h = t(921944),
  g = t(689938),
  x = t(212723);

function C(e) {
  let s, {
      hideChangelog: t
    } = e,
    C = (0, l.e7)([E.Z], () => E.Z.getGuildId()),
    R = (0, l.e7)([d.Z], () => d.Z.getGuild(C)),
    L = (0, l.e7)([I.Z], () => I.Z.getCurrentPage());
  if (i.useEffect(() => {
      (0, o.EW)(a.z.COMMUNITY_GUILD_SETTINGS_SAFETY, {
        dismissAction: h.L.AUTO
      })
    }, []), null == R) return null;
  let O = (0, S.Q)(R);
  switch (L) {
    case T.u.OVERVIEW:
      s = (0, n.jsx)(N.Z, {
        guild: R,
        hideChangelog: t
      });
      break;
    case T.u.CAPTCHA_AND_RAID_PROTECTION:
      s = (0, n.jsx)(m.Z, {
        title: g.Z.Messages.GUILD_SETTINGS_SAFETY_CAPTCHA_RAID_PROTECTION,
        settings: O[T.u.CAPTCHA_AND_RAID_PROTECTION]
      });
      break;
    case T.u.DM_AND_SPAM_PROTECTION:
      s = (0, n.jsx)(m.Z, {
        title: g.Z.Messages.GUILD_SETTINGS_SAFETY_DM_SPAM_PROTECTION,
        settings: O[T.u.DM_AND_SPAM_PROTECTION]
      });
      break;
    case T.u.AUTOMOD:
      s = (0, n.jsx)(c.Z, {
        guildId: R.id
      });
      break;
    case T.u.PERMISSIONS:
      s = (0, n.jsx)(m.Z, {
        title: g.Z.Messages.GUILD_SETTINGS_SAFETY_PERMISSIONS_TITLE,
        settings: O[T.u.PERMISSIONS]
      })
  }
  return (0, n.jsxs)(n.Fragment, {
    children: [L !== T.u.OVERVIEW && (0, n.jsxs)(r.Button, {
      className: x.back,
      innerClassName: x.backButton,
      look: r.Button.Looks.BLANK,
      size: r.Button.Sizes.MIN,
      onClick: () => {
        (0, _.K)(T.u.OVERVIEW)
      },
      children: [(0, n.jsx)(u.Z, {
        className: x.__invalid_arrow,
        direction: u.Z.Directions.LEFT
      }), (0, n.jsx)(r.Text, {
        variant: "text-sm/semibold",
        color: "interactive-normal",
        children: g.Z.Messages.BACK
      })]
    }), s]
  })
}