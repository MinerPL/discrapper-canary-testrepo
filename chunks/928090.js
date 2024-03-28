"use strict";
a.r(s), a.d(s, {
  default: function() {
    return O
  }
}), a("47120");
var t = a("735250"),
  r = a("470079"),
  n = a("990547"),
  i = a("481060"),
  o = a("37234"),
  l = a("700582"),
  d = a("213609"),
  u = a("434404"),
  c = a("706454"),
  R = a("285952"),
  E = a("26290"),
  _ = a("768581"),
  N = a("5192"),
  T = a("51144"),
  f = a("981631"),
  I = a("72766"),
  S = a("689938"),
  m = a("419699");
let A = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.default.locale;
  return "https://".concat(f.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
};

function O(e) {
  let {
    guild: s,
    toUser: c,
    fromUser: O,
    onClose: p,
    transitionState: h
  } = e, [x, F] = r.useState(!1), M = s.hasFeature(f.GuildFeatures.VERIFIED) || s.hasFeature(f.GuildFeatures.PARTNERED), g = M ? S.default.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_PAUSED : null, P = M ? S.default.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_LINK_PAUSED.format({
    ticketUrl: A()
  }) : null, C = s.hasFeature(f.GuildFeatures.CREATOR_MONETIZABLE) || s.hasFeature(f.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
  async function L(e) {
    await u.default.transferOwnership(s.id, c.id, I.TransferOwnershipVerificationTypes.EMAIL, e)
  }
  async function j() {
    await u.default.sendTransferOwnershipPincode(s.id, !0)
  }
  async function D(e) {
    e.preventDefault(), p();
    try {
      O.mfaEnabled || null == O.email ? (await u.default.transferOwnership(s.id, c.id, O.mfaEnabled ? I.TransferOwnershipVerificationTypes.MFA : null), (0, o.popLayer)()) : (await u.default.sendTransferOwnershipPincode(s.id), (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("94566")]).then(a.bind(a, "965072"));
        return s => (0, t.jsx)(e, {
          ...s,
          onFormSubmit: L,
          onResend: j,
          onSuccess: o.popLayer,
          headerText: S.default.Messages.TRANSFER_OWNERSHIP,
          confirmButtonText: S.default.Messages.TRANSFER_OWNERSHIP,
          confirmButtonColor: i.Button.Colors.RED,
          impressionName: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
        })
      }))
    } catch (e) {
      e.body.code === f.AbortCodes.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, i.openModal)(e => (0, t.jsx)(i.ConfirmModal, {
        ...e,
        header: S.default.Messages.TRANSFER_OWNERSHIP_FAILURE_MODAL_TITLE,
        confirmText: S.default.Messages.GOT_IT,
        confirmButtonColor: i.Button.Colors.BRAND,
        children: (0, t.jsx)(i.Text, {
          variant: "text-md/normal",
          children: S.default.Messages.SERVER_SUBSCRIPTION_OWNERSHIP_TRANSFER_FAILURE_MODAL_BODY.format({
            server_subscription_owner_transfer_article: f.SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL
          })
        })
      }))
    }
  }(0, d.default)({
    type: n.ImpressionTypes.MODAL,
    name: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
  });
  let v = N.default.getNickname(s.id, void 0, c),
    y = c.hasAvatarForGuild(s.id),
    H = () => (0, t.jsxs)("span", {
      className: m.guildTransfer,
      children: [null != s.icon ? (0, t.jsx)(i.Avatar, {
        src: _.default.getGuildIconURL({
          id: s.id,
          icon: s.icon,
          size: 16
        }),
        size: i.AvatarSizes.SIZE_16,
        className: m.miniGuildIcon,
        "aria-hidden": !0
      }) : null, (0, t.jsx)(i.Text, {
        className: m.guildName,
        variant: "text-sm/bold",
        children: s.toString()
      })]
    });
  return (0, t.jsx)(i.ModalRoot, {
    transitionState: h,
    children: (0, t.jsxs)("form", {
      onSubmit: D,
      children: [(0, t.jsx)(i.ModalHeader, {
        separator: !1,
        children: (0, t.jsx)(i.Heading, {
          variant: "heading-lg/semibold",
          className: m.header,
          children: S.default.Messages.TRANSFER_OWNERSHIP
        })
      }), (0, t.jsxs)(i.ModalContent, {
        children: [(0, t.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: m.subHeader,
          children: null != v || y ? S.default.Messages.TRANSFER_OWNERSHIP_TO_USER_WITH_AKA_V2.format({
            GuildHook: H,
            user: (0, T.getUserTag)(c),
            AKAHook: function() {
              return (0, t.jsxs)("span", {
                className: m.akaTransfer,
                children: [(0, t.jsx)(E.TextBadge, {
                  text: S.default.Messages.AKA,
                  disableColor: !0,
                  className: m.akaBadge
                }), y ? (0, t.jsx)(i.Avatar, {
                  src: c.getAvatarURL(s.id, 16, !0),
                  size: i.AvatarSizes.SIZE_16,
                  className: m.miniAvatar,
                  "aria-hidden": !0
                }) : null, (0, t.jsx)(i.Text, {
                  className: m.nickname,
                  variant: "text-sm/normal",
                  children: null != v ? v : T.default.getName(c)
                })]
              })
            }
          }) : S.default.Messages.TRANSFER_OWNERSHIP_TO_USER_V2.format({
            GuildHook: H,
            user: (0, T.getUserTag)(c)
          })
        }), (0, t.jsxs)(R.default, {
          className: m.fromToWrapper,
          justify: R.default.Justify.CENTER,
          children: [(0, t.jsx)("div", {
            className: m.from,
            children: (0, t.jsx)(l.default, {
              user: O,
              size: i.AvatarSizes.SIZE_80
            })
          }), (0, t.jsx)("div", {
            className: m.to,
            children: (0, t.jsx)(l.default, {
              user: c,
              size: i.AvatarSizes.SIZE_80
            })
          })]
        }), C && (0, t.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: m.roleSubscriptionText,
          children: S.default.Messages.TRANSFER_OWNERSHIP_SERVER_SUBSCRIPTION_GUILD.format({
            server_subscription_owner_transfer_article: f.SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL
          })
        }), (0, t.jsx)(i.FormSwitch, {
          disabled: M,
          tooltipNote: g,
          hideBorder: !0,
          value: x,
          onChange: function(e) {
            F(e)
          },
          children: (0, t.jsx)(i.FormText, {
            type: i.FormText.Types.DESCRIPTION,
            children: S.default.Messages.TRANSFER_OWNERSHIP_ACKNOWLEDGE.format({
              username: (0, T.getUserTag)(c)
            })
          })
        }), (0, t.jsx)(i.FormText, {
          className: m.protectedText,
          type: i.FormText.Types.DEFAULT,
          children: P
        })]
      }), (0, t.jsxs)(i.ModalFooter, {
        children: [(0, t.jsx)(i.Button, {
          type: "submit",
          disabled: !x,
          color: i.Button.Colors.RED,
          children: S.default.Messages.TRANSFER_OWNERSHIP
        }), (0, t.jsx)(i.Button, {
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: p,
          children: S.default.Messages.CANCEL
        })]
      })]
    })
  })
}