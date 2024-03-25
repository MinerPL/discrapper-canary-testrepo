"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("627445"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("465869"),
  u = s("837008"),
  c = s("648825"),
  E = s("406876"),
  _ = s("795228"),
  I = s("561205"),
  T = s("782340"),
  S = s("325224"),
  f = s("103639");

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
  } = (0, u.useArchiveSubscriptionListing)(), G = () => {
    let e = async () => {
      if (!O) {
        i(null != g, "group listing doesnt exist"), i(null != C, "subscription listing doesnt exist");
        let e = await p(N, g, C);
        if (!e) return
      }
      null == n || n()
    };
    (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await s.el("77078").then(s.bind(s, "77078"));
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
    allowSelfRemoveMonetization: j
  } = (0, d.useShouldRestrictUpdatingCreatorMonetizationSettings)(N);
  return null == h ? null : (0, a.jsx)(I.default, {
    title: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ADVANCE_SECTION_TITLE,
    children: A ? (0, a.jsxs)(o.FormSection, {
      title: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_LABEL,
      disabled: !j,
      children: [(0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: S.formDescription,
        disabled: !j,
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
          onClick: G,
          submitting: M,
          disabled: !j || !L,
          children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETE_BUTTON
        })
      })]
    }) : (0, a.jsxs)(o.FormSection, {
      title: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_LABEL,
      disabled: !j,
      children: [(0, a.jsx)(o.FormText, {
        type: o.FormText.Types.DESCRIPTION,
        className: S.formDescription,
        disabled: !j,
        children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_DESCRIPTION
      }), (0, a.jsx)(o.Button, {
        wrapperClassName: f.deleteListingButton,
        color: o.Button.Colors.RED,
        onClick: () => {
          i(null != g, "group listing doesnt exist"), i(null != C, "subscription listing doesnt exist"), (0, o.openModalLazy)(async () => {
            let {
              ConfirmModal: e
            } = await s.el("77078").then(s.bind(s, "77078"));
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
        disabled: !j,
        children: T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_ARCHIVE_BUTTON
      })]
    })
  })
}