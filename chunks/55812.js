"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  r = n("884691"),
  a = n("65597"),
  i = n("77078"),
  s = n("812204"),
  u = n("685665"),
  o = n("271938"),
  d = n("26989"),
  c = n("305961"),
  I = n("476263"),
  f = n("533930"),
  _ = n("599110"),
  E = n("681937"),
  h = n("956967"),
  T = n("143460"),
  N = n("49111"),
  S = n("657944"),
  L = n("782340"),
  p = n("261591");

function g(e) {
  var t;
  let {
    onClose: n,
    transitionState: g,
    guildId: A
  } = e, D = (0, a.useStateFromStores)([o.default], () => o.default.getId()), R = (0, a.useStateFromStores)([d.default], () => d.default.getMember(A, D), [A, D]), M = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(A), [A]), G = null !== (t = null == M ? void 0 : M.name) && void 0 !== t ? t : "", m = (0, E.getAutomodQuarantinedGuildMemberFlags)(R), {
    analyticsLocations: U
  } = (0, u.default)(s.default.AUTOMOD_PROFILE_QUARANTINE_ALERT), [C, O] = (0, h.useOpenFixQuarantinedProfileModal)({
    guildId: A,
    analyticsLocations: U,
    openWithoutBackstack: !0
  }), y = m.has(S.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? L.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE : L.default.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
  !O && (y = L.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
  let P = O ? L.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : L.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
  return (r.useEffect(() => {
    _.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: T.QUARANTINE_USER_ALERT_KEY,
      guild_id: A,
      other_user_id: D
    })
  }, []), r.useEffect(() => {
    if (null == M) {
      n();
      return
    }
  }, [M, n]), null == M) ? null : (0, l.jsxs)(i.ModalRoot, {
    transitionState: g,
    size: i.ModalSize.SMALL,
    children: [(0, l.jsx)(i.ModalHeader, {
      separator: !1,
      children: (0, l.jsxs)("div", {
        className: p.headerContainer,
        children: [(0, l.jsxs)("div", {
          className: p.guildIconContainer,
          children: [(0, l.jsx)(I.default, {
            guild: M,
            size: I.default.Sizes.LARGER
          }), (0, l.jsx)("div", {
            className: p.statusContainer,
            children: (0, l.jsx)(f.default, {
              className: p.statusIcon,
              width: 24,
              height: 24
            })
          })]
        }), (0, l.jsx)(i.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: L.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
            guildName: G
          })
        })]
      })
    }), (0, l.jsx)(i.ModalContent, {
      children: (0, l.jsx)("div", {
        className: p.descriptionContainer,
        children: (0, l.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: y
        })
      })
    }), (0, l.jsxs)(i.ModalFooter, {
      children: [(0, l.jsx)(i.Button, {
        onClick: () => {
          C(), n()
        },
        color: i.Button.Colors.BRAND_NEW,
        look: i.Button.Looks.FILLED,
        children: P
      }), (0, l.jsx)(i.Button, {
        onClick: n,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.LINK,
        children: L.default.Messages.CANCEL
      })]
    })]
  })
}