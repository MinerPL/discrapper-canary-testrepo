"use strict";
s.r(a), s("47120");
var t = s("735250"),
  l = s("470079"),
  i = s("688619"),
  d = s.n(i),
  n = s("442837"),
  r = s("481060"),
  c = s("271383"),
  o = s("430824"),
  u = s("594174"),
  S = s("153124"),
  x = s("931240"),
  m = s("970606"),
  g = s("353093"),
  C = s("979264"),
  h = s("284019"),
  v = s("308083"),
  N = s("981631"),
  T = s("689938"),
  j = s("306366");
a.default = e => {
  var a, s, i;
  let {
    guildId: _,
    tag: f,
    brandPrimaryColor: E,
    transitionState: p,
    onClose: A
  } = e, L = (0, S.useUID)(), [M, U] = l.useState(!0), k = (0, n.useStateFromStores)([o.default], () => o.default.getGuild(_)), b = (0, n.useStateFromStores)([u.default], () => u.default.getCurrentUser()), w = (0, n.useStateFromStores)([c.default], () => null != b ? c.default.getMember(_, b.id) : null);
  if (l.useEffect(() => {
      (0, m.trackConvertSuccessModalViewed)(_)
    }, [_]), null == k || null == b || null == w) return null;
  let z = null != E ? {
      background: "radial-gradient(circle at top, ".concat(d()(E).alpha(.3).hex(), " 0%, transparent 50%)")
    } : void 0,
    B = (0, g.getClanBadgeUrl)(k.id, null === (a = k.clan) || void 0 === a ? void 0 : a.badge, v.ClanTagBadgeSize.SIZE_36);
  return (0, t.jsx)(r.ModalRoot, {
    className: j.modal,
    transitionState: p,
    "aria-labelledby": L,
    size: r.ModalSize.SMALL,
    children: (0, t.jsxs)("div", {
      className: j.content,
      style: z,
      children: [(0, t.jsx)(C.BaseClanTagChiplet, {
        clanTag: f,
        clanBadge: B,
        className: j.tagPreview,
        textClassName: j.tagText,
        textVariant: "heading-xxl/semibold",
        badgeSize: v.ClanTagBadgeSize.SIZE_36
      }), (0, t.jsx)(r.Heading, {
        variant: "heading-xxl/medium",
        children: T.default.Messages.CLAN_SUCCESS_TITLE.format({
          name: k.name
        })
      }), (0, t.jsx)(r.Text, {
        className: j.subtitle,
        variant: "text-md/normal",
        children: T.default.Messages.CLAN_SUCCESS_SUBTITLE
      }), (0, t.jsxs)("div", {
        className: j.previewSection,
        children: [(0, t.jsxs)("div", {
          className: j.chatPreview,
          children: [(0, t.jsx)(r.Avatar, {
            src: b.getAvatarURL(_, 40),
            size: r.AvatarSizes.SIZE_40,
            "aria-hidden": !0
          }), (0, t.jsxs)("div", {
            className: j.previewText,
            children: [(0, t.jsxs)("div", {
              className: j.userName,
              children: [(0, t.jsx)(r.NameWithRole, {
                className: j.userName,
                name: null !== (s = w.nick) && void 0 !== s ? s : b.username,
                color: null !== (i = w.colorString) && void 0 !== i ? i : void 0
              }), M && (0, t.jsx)(C.BaseClanTagChiplet, {
                clanBadge: B,
                clanTag: f,
                badgeSize: v.ClanTagBadgeSize.SIZE_12,
                textVariant: "text-xs/normal"
              })]
            }), (0, t.jsx)("div", {
              className: j.fakeMessage,
              style: {
                width: "80%"
              }
            }), (0, t.jsx)("div", {
              className: j.fakeMessage,
              style: {
                width: "50%"
              }
            })]
          })]
        }), (0, t.jsx)("div", {
          className: j.divider
        }), (0, t.jsxs)("div", {
          className: j.settingSection,
          children: [(0, t.jsxs)("div", {
            children: [(0, t.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: T.default.Messages.CLAN_SUCCESS_USE_TAG_TEXT
            }), (0, t.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: T.default.Messages.CLAN_SUCCESS_USE_TAG_HELP
            })]
          }), (0, t.jsx)(r.Switch, {
            onChange: () => U(!M),
            checked: M
          })]
        })]
      }), (0, t.jsx)(h.default, {
        themeColor: E,
        onClick: () => {
          M && (0, x.adoptClanIdentity)(_, M, N.AnalyticsLocations.CLAN_SETUP_MODAL), (0, m.trackConvertSuccessModalConfirm)(_, M), A()
        },
        children: (0, t.jsx)(r.Text, {
          color: "none",
          variant: "text-md/medium",
          children: T.default.Messages.CLAN_SUCCESS_CTA
        })
      })]
    })
  })
}