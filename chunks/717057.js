"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("913527"),
  o = n.n(r),
  u = n("989600"),
  d = n("442837"),
  c = n("481060"),
  f = n("410030"),
  h = n("271383"),
  m = n("430824"),
  p = n("594174"),
  E = n("153124"),
  C = n("709054"),
  g = n("931240"),
  S = n("645896"),
  _ = n("603368"),
  T = n("353093"),
  I = n("532490"),
  A = n("380365"),
  N = n("979264"),
  v = n("620929"),
  x = n("284019"),
  M = n("308083"),
  R = n("981631"),
  y = n("689938"),
  L = n("946984");

function O(e) {
  var t;
  let {
    guildId: n,
    clanInfo: s,
    onSignCharter: r
  } = e, u = l.useMemo(() => {
    let e = C.default.extractTimestamp(n);
    return o()(new Date(e)).format("MMMM YYYY")
  }, [n]), d = l.useMemo(() => new Set(s.games), [s.games]);
  return (0, a.jsx)(I.default, {
    guildId: n,
    signHintPosition: I.SignHintPosition.LEFT,
    primaryColor: null === (t = s.branding) || void 0 === t ? void 0 : t.primaryColor,
    onSignCharter: r,
    children: (0, a.jsxs)("div", {
      className: L.scrollContentsContainer,
      children: [(0, a.jsx)(N.BaseClanTagChiplet, {
        clanBadge: (0, T.getClanBadgeUrl)(n, s.badge.imageHash, M.ClanTagBadgeSize.SIZE_24),
        clanTag: s.tag,
        textVariant: "heading-lg/semibold",
        badgeSize: M.ClanTagBadgeSize.SIZE_24,
        className: L.clanTagChiplet
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-xxl/normal",
          color: "text-muted",
          className: L.charterHeaderText,
          children: y.default.Messages.CLAN_SETUP_OVERVIEW_TITLE
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xxl/bold",
          color: "interactive-active",
          className: L.charterHeaderText,
          children: s.name
        }), (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          className: L.establishedDate,
          children: y.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
            date: u
          })
        })]
      }), (0, a.jsx)(v.CharterScrollGameSection, {
        applicationIds: d,
        playstyle: s.playstyle,
        className: i()(L.charterBodyText, L.gameSection)
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: L.charterBodyText,
        children: y.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
      })]
    })
  })
}

function j(e) {
  var t;
  let {
    guildId: n,
    onClose: s,
    onAccept: r,
    ...o
  } = e, C = (0, E.useUID)(), T = (0, S.useClanInfo)(n), I = (0, S.useIsFetchingClanInfo)(), [N, v] = l.useState(!0), [M, j] = l.useState(!1), P = l.useCallback(() => {
    r(), s()
  }, [r, s]);
  l.useEffect(() => {
    null == T && !I && P()
  }, [T, P, I]);
  let D = l.useCallback(() => {
      N && (0, g.adoptClanIdentity)(n, N, R.AnalyticsLocations.CREATE_JOIN_GUILD_MODAL), P()
    }, [n, P, N]),
    b = l.useCallback(() => {
      j(!0)
    }, []),
    U = (0, d.useStateFromStores)([m.default], () => m.default.getGuild(n)),
    F = (0, d.useStateFromStores)([p.default], () => p.default.getCurrentUser()),
    w = (0, d.useStateFromStores)([h.default], () => null != F ? h.default.getMember(n, F.id) : null),
    k = (0, f.default)(),
    B = (0, _.useBrandColor)(null == T ? void 0 : null === (t = T.branding) || void 0 === t ? void 0 : t.primaryColor, [c.tokens.colors.BG_BRAND, .7]),
    H = c.tokens.colors.BG_SURFACE_OVERLAY.resolve({
      theme: k,
      saturation: 1
    }).hex(),
    G = (0, _.getClanRadialBackgroundStyle)(B, H, "top center");
  return null == U || null == F || null == w || null == T ? null : (0, a.jsx)(c.ModalRoot, {
    ...o,
    transitionState: o.transitionState,
    "aria-labelledby": C,
    className: L.modal,
    size: c.ModalSize.DYNAMIC,
    children: (0, a.jsxs)(c.ModalContent, {
      className: L.content,
      style: G,
      children: [(0, a.jsxs)("div", {
        className: L.infoSide,
        children: [(0, a.jsxs)("div", {
          className: L.titlesContainer,
          children: [(0, a.jsx)("div", {
            className: L.title,
            children: (0, a.jsx)(c.Heading, {
              variant: "heading-xxl/medium",
              children: y.default.Messages.CLAN_JOIN_SUCCESS_TITLE.format({
                name: U.name
              })
            })
          }), (0, a.jsx)(c.Text, {
            className: L.subtitle,
            variant: "text-md/normal",
            children: y.default.Messages.CLAN_JOIN_SUCCESS_SUBTITLE
          })]
        }), (0, a.jsx)(A.default, {
          guildId: n,
          isTagAdopted: N,
          onChangeUseTag: v
        })]
      }), (0, a.jsx)("div", {
        className: L.scrollMainContainer,
        children: (0, a.jsx)(O, {
          guildId: n,
          clanInfo: T,
          onSignCharter: b
        })
      }), (0, a.jsx)(x.default, {
        onClick: D,
        color: c.Button.Colors.BRAND,
        themeColor: B,
        fullWidth: !1,
        className: i()(L.ctaButton, M ? L.ctaButtonSigned : null),
        children: (0, a.jsxs)("div", {
          className: L.ctaButtonInner,
          children: [(0, a.jsx)(c.Text, {
            color: "currentColor",
            variant: "text-md/medium",
            children: y.default.Messages.CLAN_JOIN_SUCCESS_MAIN_CTA
          }), (0, a.jsx)(u.ArrowLargeRightIcon, {
            width: 20,
            height: 20,
            color: null == B ? void 0 : (0, _.getAccessibleTextColor)(B).hex()
          })]
        })
      })]
    })
  })
}