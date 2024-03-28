"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("512722"),
  i = s.n(n),
  r = s("442837"),
  o = s("481060"),
  d = s("674180"),
  u = s("584825"),
  c = s("289393"),
  E = s("727843"),
  _ = s("14263"),
  I = s("783454"),
  T = s("689938"),
  S = s("606353"),
  f = s("541062");

function m(e) {
  var t;
  let {
    onDeleteEditState: n
  } = e, {
    editStateId: m,
    guildId: N,
    groupListingId: g
  } = (0, E.useEditStateContext)(), h = (0, r.useStateFromStores)([c.default], () => c.default.getSubscriptionListing(m)), C = null == h ? void 0 : h.id, R = (0, _.default)(N), x = l.useMemo(() => {
    var e;
    return null != R && null != h && (null !== (e = R[h.role_id]) && void 0 !== e ? e : 0)
  }, [R, h]), L = 0 === x, O = null == C, A = null !== (t = null == h ? void 0 : h.archived) && void 0 !== t && t, {
    deleteSubscriptionListing: p,
    submitting: M
  } = (0, u.useDeleteSubscriptionListing)(), {
    archiveSubscriptionListing: D,
    submitting: v
  } = (0, u.useArchiveSubscriptionListing)(), j = () => {
    let e = async () => {
      if (!!O || (i()(null != g, "group listing doesnt exist"), i()(null != C, "subscription listing doesnt exist"), !!await p(N, g, C))) null == n || n()
    };
    (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await Promise.resolve().then(s.bind(s, "481060"));
      return s => (0, a.jsx)(t, {
        header: T.default.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
        confirmText: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_BUTTON,
        cancelText: T.default.Messages.CANCEL,
        onConfirm: () => {
          e()
        },
        confirmButtonColor: o.Button.Colors.RED,
        ...s,
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_DESCRIPTION
        })
      })
    })
  }, {
    allowSelfRemoveMonetization: G
  } = (0, d.useShouldRestrictUpdatingCreatorMonetizationSettings)(N);
  return null == h ? null : (0, a.jsx)(I.default, {
    title: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ADVANCE_SECTION_TITLE,
    children: A ? (0, a.jsxs)(o.FormSection, {
      title: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_LABEL,
      disabled: !G,
      children: [(0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: S.formDescription,
        disabled: !G,
        children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_DESCRIPTION
      }), (0, a.jsx)(o.Tooltip, {
        shouldShow: !L,
        text: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_TOOLTIP.format({
          listingMemberCount: x
        }),
        children: e => (0, a.jsx)(o.Button, {
          ...e,
          wrapperClassName: f.deleteListingButton,
          color: o.Button.Colors.RED,
          onClick: j,
          submitting: M,
          disabled: !G || !L,
          children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_BUTTON
        })
      })]
    }) : (0, a.jsxs)(o.FormSection, {
      title: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_LABEL,
      disabled: !G,
      children: [(0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: S.formDescription,
        disabled: !G,
        children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_DESCRIPTION
      }), (0, a.jsx)(o.Button, {
        wrapperClassName: f.deleteListingButton,
        color: o.Button.Colors.RED,
        onClick: () => {
          i()(null != g, "group listing doesnt exist"), i()(null != C, "subscription listing doesnt exist"), (0, o.openModalLazy)(async () => {
            let {
              ConfirmModal: e
            } = await Promise.resolve().then(s.bind(s, "481060"));
            return t => (0, a.jsx)(e, {
              header: T.default.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
              confirmText: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_BUTTON,
              cancelText: T.default.Messages.CANCEL,
              onConfirm: () => {
                D(N, g, C)
              },
              confirmButtonColor: o.Button.Colors.RED,
              ...t,
              children: (0, a.jsx)(o.Text, {
                variant: "text-md/normal",
                children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_DESCRIPTION
              })
            })
          })
        },
        submitting: v,
        disabled: !G,
        children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_BUTTON
      })]
    })
  })
}