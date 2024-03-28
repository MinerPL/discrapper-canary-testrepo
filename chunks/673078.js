"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("512722"),
  d = a.n(s),
  i = a("399606"),
  r = a("481060"),
  u = a("668781"),
  o = a("430824"),
  _ = a("682864"),
  c = a("759231"),
  E = a("495437"),
  T = a("240864"),
  f = a("981631"),
  D = a("689938"),
  O = a("317361");

function m(e) {
  let {
    guildProductListing: t,
    guildId: a
  } = e, n = (0, i.useStateFromStores)([o.default], () => {
    var e;
    return o.default.getRole(a, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : f.EMPTY_STRING_SNOWFLAKE_ID)
  });
  return null == n ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(r.Heading, {
      className: O.warningSectionHeader,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, l.jsx)(c.default, {
        height: 18,
        width: 18
      }), (0, l.jsx)(_.default, {
        horizontal: !0,
        size: 8
      }), D.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY_ROLE_WARNING_HEADER]
    }), (0, l.jsx)(r.Text, {
      variant: "text-md/normal",
      children: D.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY_ROLE_WARNING.format({
        roleName: n.name
      })
    })]
  })
}

function I(e) {
  let {
    guildId: t,
    productId: a,
    ...s
  } = e, [i] = n.useState(() => T.default.getGuildProduct(a));
  d()(null != i, "guildProductListing cannot be null");
  let [o, _] = n.useState(!1), c = async () => {
    try {
      _(!0), await E.deleteGuildProductListing(t, a)
    } catch (e) {
      u.default.show({
        title: D.default.Messages.GUILD_PRODUCTS_DELETE_ERROR_TITLE,
        body: e.message
      })
    } finally {
      _(!1)
    }
  };
  return (0, l.jsxs)(r.ConfirmModal, {
    ...s,
    className: O.modalContainer,
    header: D.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_HEADER,
    confirmText: D.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BUTTON,
    cancelText: D.default.Messages.CANCEL,
    loading: o,
    onConfirm: c,
    children: [(0, l.jsx)(r.Text, {
      variant: "text-md/normal",
      children: D.default.Messages.GUILD_PRODUCTS_DELETE_CONFIRMATION_BODY.format({
        productName: i.name
      })
    }), (0, l.jsx)(m, {
      guildProductListing: i,
      guildId: t
    })]
  })
}