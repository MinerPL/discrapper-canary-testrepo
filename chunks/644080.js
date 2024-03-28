"use strict";
a.r(t), a.d(t, {
  useHomeHeader: function() {
    return A
  }
});
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  i = a.n(s),
  d = a("442837"),
  r = a("692547"),
  u = a("481060"),
  o = a("410030"),
  c = a("637853"),
  f = a("434404"),
  m = a("159300"),
  h = a("496675"),
  g = a("705600"),
  E = a("346656"),
  _ = a("976644"),
  I = a("709586"),
  x = a("54264"),
  S = a("768581"),
  v = a("981631"),
  C = a("689938"),
  N = a("26022"),
  p = a("63190"),
  T = a("102219");
let A = e => {
  let t = n.useMemo(() => null == e ? null : S.default.getGuildHomeHeaderURL({
    id: e.id,
    homeHeader: e.homeHeader
  }), [e]);
  return {
    homeHeaderImage: t,
    isHomeHeaderImageSet: null != t,
    homeHeaderScroll: null != t ? 200 : 0
  }
};

function j(e) {
  let {
    guild: t
  } = e, a = () => {
    f.default.open(t.id, v.GuildSettingsSections.ONBOARDING, void 0, v.GuildSettingsSubsections.SERVER_GUIDE)
  };
  return t.hasFeature(v.GuildFeatures.BANNER) ? (0, l.jsxs)(u.Button, {
    className: N.editButton,
    innerClassName: N.editButtonInner,
    type: "button",
    size: u.Button.Sizes.MEDIUM,
    color: u.Button.Colors.BRAND,
    onClick: a,
    children: [(0, l.jsx)(x.default, {
      height: 16,
      width: 16,
      color: r.default.unsafe_rawColors.WHITE_500.css
    }), C.default.Messages.EDIT_IMAGE]
  }) : (0, l.jsxs)(_.default, {
    color: u.Button.Colors.GREEN,
    className: N.editButton,
    innerClassName: N.editButtonInner,
    onClick: a,
    children: [(0, l.jsx)(I.default, {
      height: 16,
      width: 16,
      className: N.__invalid_premiumUpsellBadge
    }), C.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
  })
}
let M = n.memo(function(e) {
  let {
    guild: t,
    titleClassName: n
  } = e, {
    homeHeaderImage: s,
    isHomeHeaderImageSet: r
  } = A(t), f = (0, c.useGuildOnboardingSettingsAvailable)(t.id), _ = (0, d.useStateFromStores)([h.default], () => (0, m.canViewInviteModal)(h.default, t)), I = (0, o.default)();
  return (0, l.jsxs)("div", {
    className: N.header,
    children: [(0, l.jsxs)("div", {
      className: N.headerArtWrapper,
      children: [(0, l.jsx)("div", {
        className: i()(N.headerArt, {
          [N.headerArtPlaceholder]: !r
        }),
        style: {
          backgroundImage: "url(".concat(r ? s : "dark" === I ? p : T, ")")
        }
      }), f && (0, l.jsx)(j, {
        guild: t
      })]
    }), (0, l.jsx)("div", {
      className: N.titleWrapper,
      children: (0, l.jsxs)("div", {
        className: n,
        children: [(0, l.jsx)(E.default, {
          className: N.headerIcon,
          guild: t,
          size: E.default.Sizes.XLARGE,
          active: !0
        }), (0, l.jsx)(u.HeadingLevel, {
          children: (0, l.jsxs)("div", {
            className: N.headerName,
            children: [(0, l.jsx)(u.Heading, {
              className: N.headerName,
              variant: "heading-xxl/bold",
              children: t.name
            }), (0, l.jsx)(g.default, {
              size: 24,
              guild: t,
              tooltipPosition: "bottom",
              tooltipColor: u.Tooltip.Colors.PRIMARY,
              className: N.__invalid_guildBadge
            }), _ && (0, l.jsx)(u.Button, {
              className: N.inviteButton,
              size: u.Button.Sizes.MEDIUM,
              color: u.Button.Colors.PRIMARY,
              onClick: () => (0, u.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([a.e("99387"), a.e("7654")]).then(a.bind(a, "560114"));
                return a => (0, l.jsx)(e, {
                  ...a,
                  guild: t,
                  source: v.InstantInviteSources.GUILD_HOME
                })
              }),
              children: C.default.Messages.INSTANT_INVITE
            })]
          })
        })]
      })
    })]
  })
});
t.default = M