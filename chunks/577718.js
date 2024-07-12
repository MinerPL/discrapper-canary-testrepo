n(47120);
var i = n(735250),
  s = n(470079),
  a = n(704215),
  r = n(780384),
  l = n(481060),
  o = n(906732),
  c = n(380009),
  d = n(282051),
  u = n(243778),
  _ = n(26323),
  h = n(433280),
  E = n(34131),
  I = n(434404),
  m = n(567458),
  g = n(782959),
  p = n(276645),
  T = n(970731),
  S = n(626135),
  C = n(267642),
  f = n(981631),
  N = n(921944),
  A = n(30513),
  Z = n(474936),
  L = n(689938),
  v = n(517770),
  O = n(735233),
  R = n(741160),
  x = n(829972),
  b = n(31932),
  P = n(642301);

function M(e) {
  if (null != e)
I.Z.open(e.id, f.pNK.OVERVIEW, {
  section: f.jXE.PREMIUM_GUILD_PROGRESS_BAR
}, f.KsC.DISPLAY);
}

function D(e, t) {
  t && I.Z.open(e.id, f.pNK.DISCOVERY);
}

function y(e, t) {
  if (null != t)
(0, C.f2)(t, f.Eu4.TIER_1) ? I.Z.open(t.id, f.pNK.OVERVIEW, {
  section: f.jXE.PREMIUM_GUILD_INVITE_SPLASH
}, f.KsC.INVITE) : (0, _.Z)({
  analyticsLocations: e,
  analyticsSourceLocation: f.jXE.PREMIUM_GUILD_INVITE_SPLASH,
  guild: t,
  perks: (0, A.o9)()
});
}

function j(e) {
  let {
renderPopout: t,
renderGuildHeaderDropdownButton: n
  } = e;
  return (0, i.jsx)(l.Popout, {
renderPopout: () => (0, i.jsx)('div', {
  onClick: e => e.stopPropagation(),
  children: t
}),
position: 'bottom',
align: 'center',
animation: l.Popout.Animation.TRANSLATE,
shouldShow: !0,
children: () => n()
  });
}
t.Z = s.memo(function(e) {
  let {
contentTypes: t,
theme: n,
guild: s,
renderGuildHeaderDropdownButton: l
  } = e, {
analyticsLocations: _
  } = (0, o.ZP)(), A = () => {
S.default.track(f.rMx.TOOLTIP_VIEWED, {
  type: Z.cd.PREMIUM_PROGRESS_BAR,
  location: {
    page: f.ZY5.GUILD_CHANNEL
  }
});
  }, U = () => {
S.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
  type: Z.cd.INVITE_SPLASH_UPSELL,
  location: {
    page: f.ZY5.GUILD_CHANNEL
  },
  location_stack: _
});
  }, G = (0, r.wj)(n) ? x : b, [k, w] = (0, u.U)(t, N.R.GUILD_HEADER_TOOLTIPS);
  return (0, i.jsx)(i.Fragment, {
children: (() => {
  switch (k) {
    case a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
      return (0, i.jsx)(j, {
        renderPopout: (0, i.jsx)(p.Z, {
          guildId: s.id,
          markAsDismissed: w
        }),
        renderGuildHeaderDropdownButton: l
      });
    case a.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
      return (0, i.jsx)(j, {
        renderPopout: (0, i.jsx)(T.ZP, {
          onComponentMount: A,
          header: L.Z.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_TITLE,
          asset: (0, i.jsx)('img', {
            alt: '',
            src: G,
            className: O.fullWidthImage
          }),
          content: L.Z.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CONTENT.format(),
          buttonCTA: L.Z.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
          secondaryButtonCTA: L.Z.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
          onSecondaryClick: () => M(),
          onClick: () => M(s),
          markAsDismissed: w
        }),
        renderGuildHeaderDropdownButton: l
      });
    case a.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
      return (0, i.jsx)(j, {
        renderPopout: (0, i.jsx)(T.ZP, {
          onComponentMount: A,
          header: L.Z.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_TITLE,
          asset: (0, i.jsx)('img', {
            alt: '',
            src: G,
            className: O.fullWidthImage
          }),
          content: L.Z.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_CONTENT.format(),
          buttonCTA: L.Z.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
          secondaryButtonCTA: L.Z.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
          onSecondaryClick: () => M(),
          onClick: () => M(s),
          markAsDismissed: w
        }),
        renderGuildHeaderDropdownButton: l
      });
    case a.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
      return (0, i.jsx)(j, {
        renderPopout: (0, i.jsx)(h.Z, {
          guildId: s.id,
          markAsDismissed: w
        }),
        renderGuildHeaderDropdownButton: l
      });
    case a.z.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP:
      return (0, i.jsx)(j, {
        renderPopout: (0, i.jsx)(d.Z, {
          onClick: () => D(s, !0),
          onSecondaryClick: () => D(s),
          markAsDismissed: w
        }),
        renderGuildHeaderDropdownButton: l
      });
    case a.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
      return (0, i.jsx)(j, {
        renderPopout: (0, i.jsx)(c.Z, {
          guild: s,
          markAsDismissed: w
        }),
        renderGuildHeaderDropdownButton: l
      });
    case a.z.GUILD_HEADER_INVITE_SPLASH:
      let e = (0, C.f2)(s, f.Eu4.TIER_1) ? L.Z.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT.format() : L.Z.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT_LOCKED.format({
          boostCount: (0, C.KK)(s, f.Eu4.TIER_1)
        }),
        t = (0, C.f2)(s, f.Eu4.TIER_1) ? L.Z.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS : L.Z.Messages.LEARN_MORE;
      return (0, i.jsx)(j, {
        renderPopout: (0, i.jsx)(T.ZP, {
          onComponentMount: U,
          header: L.Z.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_TITLE,
          asset: (0, i.jsx)('img', {
            alt: '',
            src: R,
            className: O.fullWidthImage
          }),
          content: e,
          buttonCTA: t,
          secondaryButtonCTA: L.Z.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
          onSecondaryClick: () => y(_),
          onClick: () => y(_, s),
          markAsDismissed: w
        }),
        renderGuildHeaderDropdownButton: l
      });
    case a.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
      return (0, i.jsx)(j, {
        renderPopout: (0, i.jsx)(m.Z, {
          markAsDismissed: w
        }),
        renderGuildHeaderDropdownButton: l
      });
    case a.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
      return (0, i.jsx)(j, {
        renderPopout: (0, i.jsx)(T.ZP, {
          className: v.tooltipOverrideColor,
          header: L.Z.Messages.ACTIVE_THREADS_UPSELL_HEADER,
          content: L.Z.Messages.ACTIVE_THREADS_UPSELL_CONTENT,
          buttonCTA: L.Z.Messages.GOT_IT,
          onClick: () => w(N.L.UNKNOWN),
          markAsDismissed: w
        }),
        renderGuildHeaderDropdownButton: l
      });
    case a.z.GUILD_HEADER_SOUNDBOARD_PERMISSION:
      return (0, i.jsx)(j, {
        renderPopout: (0, i.jsx)(T.ZP, {
          header: L.Z.Messages.SOUNDBOARD_TOOLTIP_TITLE_NEW,
          content: L.Z.Messages.SOUNDBOARD_TOOLTIP_BODY,
          buttonCTA: L.Z.Messages.CHECK_IT_OUT,
          secondaryButtonCTA: L.Z.Messages.NO_THANKS,
          asset: (0, i.jsx)('img', {
            alt: '',
            src: P,
            className: O.fullWidthImage
          }),
          onClick: () => {
            I.Z.open(s.id, f.pNK.ROLES), I.Z.selectRole(s.getEveryoneRoleId(), L.Z.Messages.USE_SOUNDBOARD);
          },
          markAsDismissed: w
        }),
        renderGuildHeaderDropdownButton: l
      });
    case a.z.MEDIA_CHANNEL_UPSELL:
      return (0, i.jsx)(j, {
        renderPopout: (0, i.jsx)(g.Z, {
          guildId: s.id,
          markAsDismissed: w
        }),
        renderGuildHeaderDropdownButton: l
      });
    case a.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
      return (0, i.jsx)(j, {
        renderPopout: (0, i.jsx)(E.Z, {
          guildId: s.id,
          markAsDismissed: w
        }),
        renderGuildHeaderDropdownButton: l
      });
    default:
      return l();
  }
})()
  });
});