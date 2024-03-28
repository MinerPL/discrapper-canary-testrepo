"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("399606"),
  u = l("481060"),
  r = l("100527"),
  i = l("906732"),
  o = l("314897"),
  d = l("271383"),
  f = l("430824"),
  c = l("346656"),
  _ = l("760623"),
  I = l("626135"),
  A = l("715903"),
  E = l("295474"),
  L = l("273504"),
  M = l("981631"),
  O = l("372897"),
  N = l("689938"),
  C = l("412297");

function R(e) {
  var t;
  let {
    onClose: l,
    transitionState: R,
    guildId: U
  } = e, g = (0, n.useStateFromStores)([o.default], () => o.default.getId()), h = (0, n.useStateFromStores)([d.default], () => d.default.getMember(U, g), [U, g]), D = (0, n.useStateFromStores)([f.default], () => f.default.getGuild(U), [U]), m = null !== (t = null == D ? void 0 : D.name) && void 0 !== t ? t : "", T = (0, A.getAutomodQuarantinedGuildMemberFlags)(h), {
    analyticsLocations: S
  } = (0, i.default)(r.default.AUTOMOD_PROFILE_QUARANTINE_ALERT), [v, x] = (0, E.useOpenFixQuarantinedProfileModal)({
    guildId: U,
    analyticsLocations: S,
    openWithoutBackstack: !0
  }), p = T.has(O.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? N.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE : N.default.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
  !x && (p = N.default.Messages.GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
  let G = x ? N.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : N.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
  return (s.useEffect(() => {
    I.default.track(M.AnalyticEvents.OPEN_MODAL, {
      type: L.QUARANTINE_USER_ALERT_KEY,
      guild_id: U,
      other_user_id: g
    })
  }, []), s.useEffect(() => {
    if (null == D) {
      l();
      return
    }
  }, [D, l]), null == D) ? null : (0, a.jsxs)(u.ModalRoot, {
    transitionState: R,
    size: u.ModalSize.SMALL,
    children: [(0, a.jsx)(u.ModalHeader, {
      separator: !1,
      children: (0, a.jsxs)("div", {
        className: C.headerContainer,
        children: [(0, a.jsxs)("div", {
          className: C.guildIconContainer,
          children: [(0, a.jsx)(c.default, {
            guild: D,
            size: c.default.Sizes.LARGER
          }), (0, a.jsx)("div", {
            className: C.statusContainer,
            children: (0, a.jsx)(_.default, {
              className: C.statusIcon,
              width: 24,
              height: 24
            })
          })]
        }), (0, a.jsx)(u.Heading, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: N.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
            guildName: m
          })
        })]
      })
    }), (0, a.jsx)(u.ModalContent, {
      children: (0, a.jsx)("div", {
        className: C.descriptionContainer,
        children: (0, a.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: p
        })
      })
    }), (0, a.jsxs)(u.ModalFooter, {
      children: [(0, a.jsx)(u.Button, {
        onClick: () => {
          v(), l()
        },
        color: u.Button.Colors.BRAND_NEW,
        look: u.Button.Looks.FILLED,
        children: G
      }), (0, a.jsx)(u.Button, {
        onClick: l,
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        children: N.default.Messages.CANCEL
      })]
    })]
  })
}