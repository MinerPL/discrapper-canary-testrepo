"use strict";
t.r(a), t("47120");
var s = t("735250"),
  l = t("470079"),
  i = t("688619"),
  d = t.n(i),
  n = t("442837"),
  r = t("481060"),
  c = t("271383"),
  o = t("430824"),
  u = t("594174"),
  S = t("153124"),
  x = t("626135"),
  C = t("931240"),
  g = t("353093"),
  m = t("728257"),
  h = t("979264"),
  v = t("308083"),
  _ = t("981631"),
  N = t("689938"),
  T = t("912982");
a.default = e => {
  var a, t, i;
  let {
    guildId: E,
    tag: j,
    brandPrimaryColor: f,
    transitionState: A,
    onClose: p
  } = e, L = (0, S.useUID)(), [M, U] = l.useState(!0), b = (0, n.useStateFromStores)([o.default], () => o.default.getGuild(E)), k = (0, n.useStateFromStores)([u.default], () => u.default.getCurrentUser()), B = (0, n.useStateFromStores)([c.default], () => null != k ? c.default.getMember(E, k.id) : null), I = (0, m.useColorIsLowContrastAgainstClientBackground)(f);
  if (l.useEffect(() => {
      x.default.track(_.AnalyticEvents.CLAN_CONVERT_SUCCESS_MODAL_VIEWED, {
        guild_id: E
      })
    }, [E]), null == b || null == k || null == B) return null;
  let w = null != f ? {
      background: "radial-gradient(circle at top, ".concat(d()(f).alpha(.3).hex(), " 0%, transparent 50%)")
    } : void 0,
    y = (0, g.getClanBadgeUrl)(b.id, null === (a = b.clan) || void 0 === a ? void 0 : a.badge, v.ClanTagBadgeSize.SIZE_36);
  return (0, s.jsx)(r.ModalRoot, {
    className: T.modal,
    transitionState: A,
    "aria-labelledby": L,
    size: r.ModalSize.SMALL,
    children: (0, s.jsxs)("div", {
      className: T.content,
      style: w,
      children: [(0, s.jsx)(h.BaseClanTagChiplet, {
        clanTag: j,
        clanBadge: y,
        className: T.tagPreview,
        textClassName: T.tagText,
        textVariant: "heading-xxl/semibold",
        badgeSize: v.ClanTagBadgeSize.SIZE_36
      }), (0, s.jsx)(r.Heading, {
        variant: "heading-xxl/semibold",
        children: b.name
      }), (0, s.jsx)(r.Heading, {
        variant: "heading-xxl/medium",
        children: N.default.Messages.CLAN_SUCCESS_TITLE
      }), (0, s.jsx)(r.Text, {
        className: T.subtitle,
        variant: "text-md/normal",
        children: N.default.Messages.CLAN_SUCCESS_SUBTITLE
      }), (0, s.jsxs)("div", {
        className: T.previewSection,
        children: [(0, s.jsxs)("div", {
          className: T.chatPreview,
          children: [(0, s.jsx)(r.Avatar, {
            src: k.getAvatarURL(E, 40),
            size: r.AvatarSizes.SIZE_40,
            "aria-hidden": !0
          }), (0, s.jsxs)("div", {
            className: T.previewText,
            children: [(0, s.jsxs)("div", {
              className: T.userName,
              children: [(0, s.jsx)(r.NameWithRole, {
                className: T.userName,
                name: null !== (t = B.nick) && void 0 !== t ? t : k.username,
                color: null !== (i = B.colorString) && void 0 !== i ? i : void 0
              }), M && (0, s.jsx)(h.BaseClanTagChiplet, {
                clanBadge: y,
                clanTag: j,
                badgeSize: v.ClanTagBadgeSize.SIZE_12,
                textVariant: "text-xs/normal"
              })]
            }), (0, s.jsx)("div", {
              className: T.fakeMessage,
              style: {
                width: "80%"
              }
            }), (0, s.jsx)("div", {
              className: T.fakeMessage,
              style: {
                width: "50%"
              }
            })]
          })]
        }), (0, s.jsx)("div", {
          className: T.divider
        }), (0, s.jsxs)("div", {
          className: T.settingSection,
          children: [(0, s.jsxs)("div", {
            children: [(0, s.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: N.default.Messages.CLAN_SUCCESS_USE_TAG_TEXT
            }), (0, s.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: N.default.Messages.CLAN_SUCCESS_USE_TAG_HELP
            })]
          }), (0, s.jsx)(r.Switch, {
            onChange: () => U(!M),
            checked: M
          })]
        })]
      }), (0, s.jsx)(r.Button, {
        onClick: () => {
          (0, C.adoptClanIdentity)(E, M), x.default.track(_.AnalyticEvents.CLAN_CONVERT_SUCCESS_MODAL_CONFIRM, {
            guild_id: E,
            enable_tag: M
          }), p()
        },
        color: I ? r.Button.Colors.BRAND : r.Button.Colors.CUSTOM,
        style: I ? void 0 : {
          backgroundColor: f
        },
        children: (0, s.jsx)(r.Text, {
          variant: "text-md/medium",
          className: I ? void 0 : T.ctaText,
          children: N.default.Messages.CLAN_SUCCESS_CTA
        })
      })]
    })
  })
}