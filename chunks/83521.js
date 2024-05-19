"use strict";
l.r(a), l.d(a, {
  default: function() {
    return N
  }
}), l("47120");
var t = l("735250"),
  s = l("470079"),
  n = l("481060"),
  o = l("442837"),
  i = l("410030"),
  d = l("430824"),
  r = l("594174"),
  u = l("931240"),
  c = l("645896"),
  m = l("603368"),
  C = l("353093"),
  _ = l("114487"),
  g = l("380365"),
  A = l("981631"),
  S = l("921944"),
  v = l("689938"),
  x = l("230468");

function N(e) {
  var a, l;
  let {
    guildId: N,
    transitionState: T,
    onClose: f
  } = e, h = (0, o.useStateFromStores)([d.default], () => d.default.getGuild(N), [N]), D = (0, c.useClanInfo)(null != N ? N : null), E = (0, o.useStateFromStores)([r.default], () => r.default.getCurrentUser(), []), [I, L] = s.useState(!0), M = (0, i.default)(), j = s.useCallback(async () => {
    I && await (0, u.adoptClanIdentity)(N, !0, A.AnalyticsLocations.CLAN_ADOPT_IDENTITY_MODAL), f(S.ContentDismissActionType.PRIMARY)
  }, [I, f, N]), p = s.useCallback(() => {
    f(S.ContentDismissActionType.DISMISS)
  }, [f]);
  s.useEffect(() => ((null == h || null == E) && f(S.ContentDismissActionType.AUTO_DISMISS), () => {}), [E, h, N, f]);
  let k = (0, m.useBrandColor)(null == D ? void 0 : null === (a = D.branding) || void 0 === a ? void 0 : a.primaryColor, [n.tokens.colors.BG_BRAND, .7]),
    R = n.tokens.colors.BG_SURFACE_OVERLAY.resolve({
      theme: M,
      saturation: 1
    }).hex(),
    B = (0, m.getClanRadialBackgroundStyle)(k, R, "top center"),
    O = (0, m.useBrandColor)(null == D ? void 0 : null === (l = D.branding) || void 0 === l ? void 0 : l.primaryColor, [n.tokens.colors.BG_BRAND, 1]),
    U = (0, m.getAccessibleTextColor)(k).hex(),
    y = (0, C.isGuildAdoptedUserClanIdentityChanged)(h, null == E ? void 0 : E.clan);
  if (null == h || null == E) return null;
  let G = y ? v.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_NEW_IDENTITY_HEADING.format({
      guildName: h.name
    }) : v.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_HEADING.format({
      guildName: h.name
    }),
    P = y ? v.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_NEW_IDENTITY_DESCRIPTION.format({
      guildName: h.name
    }) : v.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_DESCRIPTION.format({
      guildName: h.name
    }),
    b = v.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA;
  return (0, t.jsxs)(n.ModalRoot, {
    transitionState: T,
    size: n.ModalSize.SMALL,
    className: x.modal,
    children: [(0, t.jsx)(n.ModalContent, {
      style: B,
      children: (0, t.jsxs)("div", {
        className: x.mainContainer,
        children: [(0, t.jsxs)("div", {
          className: x.infoContainer,
          children: [(0, t.jsx)(_.default, {
            guild: h,
            iconSize: 64
          }), (0, t.jsxs)("div", {
            className: x.headerTextContainer,
            children: [(0, t.jsx)(n.Heading, {
              variant: "heading-xl/normal",
              color: "header-primary",
              children: G
            }), (0, t.jsx)(n.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              children: P
            })]
          })]
        }), (0, t.jsx)(g.default, {
          guildId: N,
          isTagAdopted: I,
          onChangeUseTag: L
        })]
      })
    }), (0, t.jsxs)(n.ModalFooter, {
      className: x.modalFooter,
      children: [(0, t.jsx)(n.Button, {
        onClick: j,
        color: n.Button.Colors.CUSTOM,
        look: n.Button.Looks.FILLED,
        style: {
          backgroundColor: O,
          color: U
        },
        children: b
      }), (0, t.jsx)(n.Button, {
        onClick: p,
        color: n.Button.Colors.PRIMARY,
        look: n.Button.Looks.LINK,
        children: v.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL
      })]
    })]
  })
}