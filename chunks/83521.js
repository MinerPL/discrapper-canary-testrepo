"use strict";
t.r(l), t.d(l, {
  default: function() {
    return S
  }
});
var a = t("735250"),
  s = t("470079"),
  n = t("461920"),
  o = t("481060"),
  i = t("442837"),
  d = t("700582"),
  r = t("518738"),
  c = t("271383"),
  u = t("430824"),
  h = t("594174"),
  m = t("176278"),
  x = t("5192"),
  v = t("931240"),
  A = t("353093"),
  f = t("114487"),
  C = t("979264"),
  _ = t("921944"),
  T = t("689938"),
  g = t("107468");

function S(e) {
  var l, t, S, N, j;
  let {
    guildId: L,
    transitionState: M,
    onClose: R
  } = e, p = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(L), [L]), I = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser(), []), D = null == I ? void 0 : I.id, E = (0, i.useStateFromStores)([c.default], () => null == D ? null : c.default.getMember(L, D), [L, D]), k = null !== (S = null == E ? void 0 : E.colorString) && void 0 !== S ? S : void 0, O = x.default.getName(L, null, I), B = null !== (N = null == E ? void 0 : E.highestRoleId) && void 0 !== N ? N : void 0, U = (0, i.useStateFromStores)([u.default], () => null != B ? u.default.getRole(L, B) : void 0, [L, B]), y = (0, r.useRoleIcon)({
    roleId: null !== (j = null == U ? void 0 : U.id) && void 0 !== j ? j : void 0,
    size: 20,
    guildId: L
  }), w = s.useCallback(async () => {
    await (0, v.adoptClanIdentity)(L, !0), R(_.ContentDismissActionType.PRIMARY)
  }, [R, L]), P = s.useCallback(() => {
    R(_.ContentDismissActionType.DISMISS)
  }, [R]);
  if (s.useEffect(() => ((null == p || null == I) && R(_.ContentDismissActionType.AUTO_DISMISS), () => {}), [I, p, L, R]), null == p || null == I) return null;
  let b = (0, A.getClanBadgeUrl)(p.id, null === (l = p.clan) || void 0 === l ? void 0 : l.badge);
  return (0, a.jsxs)(o.ModalRoot, {
    transitionState: M,
    size: o.ModalSize.SMALL,
    children: [(0, a.jsx)(o.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: g.mainContainer,
        children: [(0, a.jsxs)("div", {
          className: g.infoContainer,
          children: [(0, a.jsx)(f.default, {
            guild: p,
            iconSize: 64
          }), (0, a.jsxs)("div", {
            className: g.headerTextContainer,
            children: [(0, a.jsx)(o.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: T.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_HEADING.format({
                guildName: p.name
              })
            }), (0, a.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              children: T.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_DESCRIPTION.format({
                guildName: p.name
              })
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: g.skeletonChatContainer,
          children: [(0, a.jsx)("div", {
            children: (0, a.jsx)(d.default, {
              user: I,
              size: o.AvatarSizes.SIZE_40
            })
          }), (0, a.jsxs)("div", {
            className: g.chat,
            children: [(0, a.jsxs)("div", {
              className: g.chatHeader,
              children: [(0, a.jsx)(o.Text, {
                tag: "span",
                variant: "text-sm/semibold",
                color: "header-primary",
                children: (0, a.jsx)(o.NameWithRole, {
                  name: O,
                  color: k
                })
              }), (0, a.jsx)(C.BaseClanTagChiplet, {
                clanBadge: b,
                clanTag: null === (t = p.clan) || void 0 === t ? void 0 : t.tag,
                className: g.chiplet
              }), null != U && (0, a.jsx)("div", {
                className: g.roleContainer,
                children: (0, a.jsx)(m.default, {
                  ...y,
                  enableTooltip: !1,
                  name: null == U ? void 0 : U.name
                })
              })]
            }), (0, a.jsx)("div", {
              className: g.skeletonChatBody
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: g.footerTextContainer,
          children: [(0, a.jsxs)("div", {
            className: g.footerText,
            children: [(0, a.jsx)(o.Text, {
              variant: "text-md/medium",
              color: "text-primary",
              children: T.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_FEATURE
            }), (0, a.jsx)(n.CheckmarkBoldIcon, {
              width: 16,
              height: 16,
              color: o.tokens.colors.STATUS_POSITIVE
            })]
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: T.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_FEATURE_CALLOUT
          })]
        })]
      })
    }), (0, a.jsxs)(o.ModalFooter, {
      children: [(0, a.jsx)(o.Button, {
        onClick: w,
        color: o.Button.Colors.BRAND_NEW,
        look: o.Button.Looks.FILLED,
        children: T.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA
      }), (0, a.jsx)(o.Button, {
        onClick: P,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: T.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL
      })]
    })]
  })
}