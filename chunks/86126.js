"use strict";
t.d(s, {
  Z: function() {
    return S
  }
});
var n = t(735250),
  i = t(470079),
  l = t(512722),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(674180),
  d = t(584825),
  u = t(289393),
  E = t(727843),
  _ = t(14263),
  I = t(783454),
  T = t(689938),
  N = t(169769),
  m = t(492171);

function S(e) {
  var s;
  let {
    onDeleteEditState: l
  } = e, {
    editStateId: S,
    guildId: h,
    groupListingId: g
  } = (0, E.N)(), x = (0, r.e7)([u.Z], () => u.Z.getSubscriptionListing(S)), C = null == x ? void 0 : x.id, R = (0, _.Z)(h), L = i.useMemo(() => {
    var e;
    return null != R && null != x && (null !== (e = R[x.role_id]) && void 0 !== e ? e : 0)
  }, [R, x]), O = 0 === L, A = null == C, p = null !== (s = null == x ? void 0 : x.archived) && void 0 !== s && s, {
    deleteSubscriptionListing: M,
    submitting: f
  } = (0, d.r4)(), {
    archiveSubscriptionListing: v,
    submitting: D
  } = (0, d._1)(), Z = () => {
    let e = async () => {
      if (!!A || (a()(null != g, "group listing doesnt exist"), a()(null != C, "subscription listing doesnt exist"), !!await M(h, g, C))) null == l || l()
    };
    (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: s
      } = await Promise.resolve().then(t.bind(t, 481060));
      return t => (0, n.jsx)(s, {
        header: T.Z.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
        confirmText: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_BUTTON,
        cancelText: T.Z.Messages.CANCEL,
        onConfirm: () => {
          e()
        },
        confirmButtonColor: o.Button.Colors.RED,
        ...t,
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_DESCRIPTION
        })
      })
    })
  }, {
    allowSelfRemoveMonetization: j
  } = (0, c.gX)(h);
  return null == x ? null : (0, n.jsx)(I.Z, {
    title: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ADVANCE_SECTION_TITLE,
    children: p ? (0, n.jsxs)(o.FormSection, {
      title: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_LABEL,
      disabled: !j,
      children: [(0, n.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: N.formDescription,
        disabled: !j,
        children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_DESCRIPTION
      }), (0, n.jsx)(o.Tooltip, {
        shouldShow: !O,
        text: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_TOOLTIP.format({
          listingMemberCount: L
        }),
        children: e => (0, n.jsx)(o.Button, {
          ...e,
          wrapperClassName: m.deleteListingButton,
          color: o.Button.Colors.RED,
          onClick: Z,
          submitting: f,
          disabled: !j || !O,
          children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_BUTTON
        })
      })]
    }) : (0, n.jsxs)(o.FormSection, {
      title: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_LABEL,
      disabled: !j,
      children: [(0, n.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: N.formDescription,
        disabled: !j,
        children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_DESCRIPTION
      }), (0, n.jsx)(o.Button, {
        wrapperClassName: m.deleteListingButton,
        color: o.Button.Colors.RED,
        onClick: () => {
          a()(null != g, "group listing doesnt exist"), a()(null != C, "subscription listing doesnt exist"), (0, o.openModalLazy)(async () => {
            let {
              ConfirmModal: e
            } = await Promise.resolve().then(t.bind(t, 481060));
            return s => (0, n.jsx)(e, {
              header: T.Z.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
              confirmText: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_BUTTON,
              cancelText: T.Z.Messages.CANCEL,
              onConfirm: () => {
                v(h, g, C)
              },
              confirmButtonColor: o.Button.Colors.RED,
              ...s,
              children: (0, n.jsx)(o.Text, {
                variant: "text-md/normal",
                children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_DESCRIPTION
              })
            })
          })
        },
        submitting: D,
        disabled: !j,
        children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_BUTTON
      })]
    })
  })
}