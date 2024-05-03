"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("688619"),
  i = n.n(s),
  r = n("120356"),
  o = n.n(r),
  u = n("913527"),
  d = n.n(u),
  c = n("989600"),
  f = n("442837"),
  h = n("481060"),
  m = n("271383"),
  p = n("430824"),
  E = n("594174"),
  C = n("153124"),
  g = n("5192"),
  S = n("709054"),
  _ = n("931240"),
  T = n("645896"),
  I = n("353093"),
  A = n("728257"),
  N = n("532490"),
  v = n("979264"),
  x = n("620929"),
  M = n("308083"),
  R = n("689938"),
  L = n("958631");

function y(e) {
  var t;
  let {
    guildId: n,
    clanInfo: s,
    onSignCharter: i
  } = e, r = l.useMemo(() => {
    let e = S.default.extractTimestamp(n);
    return d()(new Date(e)).format("MMMM YYYY")
  }, [n]), u = l.useMemo(() => new Set(s.games), [s.games]);
  return (0, a.jsx)(N.default, {
    guildId: n,
    signHintPosition: N.SignHintPosition.LEFT,
    primaryColor: null === (t = s.branding) || void 0 === t ? void 0 : t.primaryColor,
    onSignCharter: i,
    children: (0, a.jsxs)("div", {
      className: L.scrollContentsContainer,
      children: [(0, a.jsx)(v.BaseClanTagChiplet, {
        clanBadge: (0, I.getClanBadgeUrl)(n, s.badge.imageHash, M.ClanTagBadgeSize.SIZE_24),
        clanTag: s.tag,
        textVariant: "heading-lg/semibold",
        badgeSize: M.ClanTagBadgeSize.SIZE_24,
        className: L.clanTagChiplet
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(h.Heading, {
          variant: "heading-xxl/normal",
          color: "text-muted",
          className: L.charterHeaderText,
          children: R.default.Messages.CLAN_SETUP_OVERVIEW_TITLE
        }), (0, a.jsx)(h.Heading, {
          variant: "heading-xxl/bold",
          color: "interactive-active",
          className: L.charterHeaderText,
          children: s.name
        }), (0, a.jsx)("div", {
          className: L.establishedDate,
          children: (0, a.jsx)(h.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: L.charterHeaderText,
            children: R.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
              date: r
            })
          })
        })]
      }), (0, a.jsx)(x.CharterScrollGameSection, {
        applicationIds: u,
        playstyle: s.playstyle,
        className: o()(L.charterBodyText, L.gameSection)
      }), (0, a.jsx)(h.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: L.charterBodyText,
        children: R.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
      })]
    })
  })
}
t.default = function(e) {
  var t, n;
  let {
    guildId: s,
    onClose: r,
    onAccept: u,
    ...d
  } = e, S = (0, C.useUID)(), N = (0, T.useClanInfo)(s), [x, O] = l.useState(!0), [j, P] = l.useState(!1), D = l.useCallback(() => {
    u(), r()
  }, [u, r]);
  l.useEffect(() => {
    null == N && D()
  }, [N, D]);
  let b = null == N ? void 0 : null === (t = N.branding) || void 0 === t ? void 0 : t.primaryColor,
    U = l.useCallback(() => {
      (0, _.adoptClanIdentity)(s, x), D()
    }, [s, D, x]),
    F = l.useCallback(() => {
      P(!0)
    }, []),
    w = (0, f.useStateFromStores)([p.default], () => p.default.getGuild(s)),
    k = (0, f.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
    H = (0, f.useStateFromStores)([m.default], () => null != k ? m.default.getMember(s, k.id) : null),
    B = (0, A.useColorIsLowContrastAgainstClientBackground)(b);
  if (null == w || null == k || null == H || null == N) return null;
  let G = null != b ? {
      background: "radial-gradient(circle at top left, ".concat(i()(b).alpha(.3).hex(), " 0%, transparent 50%)")
    } : void 0,
    V = (0, I.getClanBadgeUrl)(w.id, N.badge.imageHash, M.ClanTagBadgeSize.SIZE_36);
  return (0, a.jsx)(h.ModalRoot, {
    ...d,
    transitionState: d.transitionState,
    "aria-labelledby": S,
    className: L.modal,
    size: h.ModalSize.DYNAMIC,
    children: (0, a.jsxs)(h.ModalContent, {
      className: L.content,
      style: G,
      children: [(0, a.jsxs)("div", {
        className: L.infoSide,
        children: [(0, a.jsxs)("div", {
          className: L.titlesContainer,
          children: [(0, a.jsxs)("div", {
            className: L.title,
            children: [(0, a.jsx)(h.Heading, {
              variant: "heading-xxl/medium",
              children: R.default.Messages.CLAN_JOIN_SUCCESS_TITLE
            }), (0, a.jsx)(h.Heading, {
              variant: "heading-xxl/bold",
              children: w.name
            })]
          }), (0, a.jsx)(h.Text, {
            className: L.subtitle,
            variant: "text-md/normal",
            children: R.default.Messages.CLAN_JOIN_SUCCESS_SUBTITLE
          })]
        }), (0, a.jsxs)("div", {
          className: L.previewSection,
          children: [(0, a.jsxs)("div", {
            className: L.chatPreview,
            children: [(0, a.jsx)(h.Avatar, {
              src: k.getAvatarURL(s, 40),
              size: h.AvatarSizes.SIZE_40,
              "aria-hidden": !0
            }), (0, a.jsxs)("div", {
              className: L.previewText,
              children: [(0, a.jsxs)("div", {
                className: L.userName,
                children: [(0, a.jsx)(h.NameWithRole, {
                  className: L.userName,
                  name: g.default.getName(s, null, k),
                  color: null !== (n = H.colorString) && void 0 !== n ? n : void 0
                }), x && (0, a.jsx)(v.BaseClanTagChiplet, {
                  clanBadge: V,
                  clanTag: N.tag,
                  badgeSize: M.ClanTagBadgeSize.SIZE_12,
                  textVariant: "text-xs/normal"
                })]
              }), (0, a.jsx)("div", {
                className: L.fakeMessage,
                style: {
                  width: "80%"
                }
              }), (0, a.jsx)("div", {
                className: L.fakeMessage,
                style: {
                  width: "50%"
                }
              })]
            })]
          }), (0, a.jsx)("div", {
            className: L.divider
          }), (0, a.jsxs)("div", {
            className: L.settingSection,
            children: [(0, a.jsxs)("div", {
              children: [(0, a.jsx)(h.Text, {
                variant: "text-md/normal",
                color: "header-primary",
                children: R.default.Messages.CLAN_SUCCESS_USE_TAG_TEXT
              }), (0, a.jsx)(h.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: R.default.Messages.CLAN_SUCCESS_USE_TAG_HELP
              })]
            }), (0, a.jsx)(h.Switch, {
              onChange: () => O(!x),
              checked: x
            })]
          })]
        })]
      }), (0, a.jsx)("div", {
        className: L.scrollMainContainer,
        children: (0, a.jsx)(y, {
          guildId: s,
          clanInfo: N,
          onSignCharter: F
        })
      }), (0, a.jsx)(h.Button, {
        onClick: U,
        color: B ? h.Button.Colors.BRAND : h.Button.Colors.CUSTOM,
        style: B || null == b ? void 0 : {
          backgroundColor: b
        },
        fullWidth: !1,
        className: o()(L.ctaButton, j ? L.ctaButtonSigned : null),
        children: (0, a.jsxs)("div", {
          className: L.ctaButtonInner,
          children: [(0, a.jsx)(h.Text, {
            variant: "text-md/medium",
            style: null == b ? void 0 : {
              color: (0, I.getAccessibleTextColor)(b).hex()
            },
            children: R.default.Messages.CLAN_JOIN_SUCCESS_MAIN_CTA
          }), (0, a.jsx)(c.ArrowLargeRightIcon, {
            width: 20,
            height: 20,
            color: null == b ? void 0 : (0, I.getAccessibleTextColor)(b).hex()
          })]
        })
      })]
    })
  })
}