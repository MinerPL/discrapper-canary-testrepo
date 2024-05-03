"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
}), l("47120"), l("653041");
var n = l("735250"),
  a = l("470079"),
  s = l("442837"),
  i = l("481060"),
  r = l("668781"),
  o = l("434404"),
  d = l("590157"),
  u = l("270144"),
  c = l("288594"),
  f = l("588822"),
  m = l("496675"),
  I = l("285952"),
  T = l("497309"),
  N = l("964309"),
  E = l("912527"),
  S = l("191741"),
  g = l("202597"),
  p = l("768581"),
  h = l("709054"),
  _ = l("51144"),
  O = l("486199"),
  A = l("366598"),
  C = l("125657"),
  x = l("725875"),
  R = l("981631"),
  M = l("689938"),
  v = l("171218");

function L(e) {
  let {
    application: t,
    guild: l,
    integration: a,
    ...s
  } = e;
  return (0, n.jsx)(i.ConfirmModal, {
    ...s,
    header: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({
      applicationName: t.name
    }),
    confirmText: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE,
    cancelText: M.default.Messages.CANCEL,
    onConfirm: () => {
      o.default.disableIntegration(l.id, a.id).catch(() => {
        r.default.show({
          title: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
          body: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR
        })
      })
    },
    children: (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      children: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({
        applicationName: t.name
      })
    })
  })
}

function j(e) {
  var t;
  let {
    guild: l,
    applicationIntegration: r,
    selectableWebhookChannels: o,
    editedWebhook: j,
    errors: P,
    canNavigate: b
  } = e, {
    application: D,
    integration: y,
    webhooks: G
  } = r, [B, H] = (0, s.useStateFromStoresArray)([m.default], () => [m.default.can(R.Permissions.MANAGE_ROLES, l), null == D.bot || m.default.canManageUser(R.Permissions.MANAGE_GUILD, D.bot.id, l)], [D.bot, l]), k = (0, s.useStateFromStores)([m.default], () => m.default.can(R.Permissions.MANAGE_WEBHOOKS, l), [l]), U = a.useCallback(() => {
    b() && (0, i.openModal)(e => (0, n.jsx)(L, {
      guild: l,
      application: D,
      integration: y,
      ...e
    }))
  }, [D, b, l, y]), F = a.useMemo(() => {
    let e = [{
      icon: T.default,
      text: M.default.Messages.INTEGRATION_ADDED_DATE.format({
        timestamp: h.default.extractTimestamp(y.id)
      })
    }];
    return null != y.user && e.push({
      icon: N.default,
      text: M.default.Messages.INTEGRATION_ADDED_USER.format({
        user: _.default.getUserTag(y.user)
      })
    }), e
  }, [y.id, y.user]), W = a.useMemo(() => null != D.bot ? (0, n.jsx)(C.default, {
    guild: l,
    applicationIntegration: r
  }) : (0, n.jsx)(i.Card, {
    className: v.emptyCard,
    editable: !0,
    children: (0, n.jsx)(i.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: M.default.Messages.INTEGRATIONS_APPLICATION_NO_BOT
    })
  }), [D.bot, r, l]), {
    applicationSubscriptionListingsShown: w
  } = (0, u.default)({
    applicationId: D.id,
    groupListingId: D.primarySkuId,
    guildId: l.id
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(O.default, {
      name: D.name,
      imageSrc: null !== (t = D.getIconURL(32)) && void 0 !== t ? t : p.DEFAULT_AVATARS["0"],
      details: F,
      isHeader: !0
    }), (null == D ? void 0 : D.description) != null ? (0, n.jsx)(f.default, {
      userBio: D.description,
      className: v.headerDescription
    }) : null, B ? (0, n.jsx)(d.default, {
      application: D,
      canNavigate: b,
      guildId: l.id
    }) : null, (0, n.jsx)(i.FormDivider, {
      className: v.headerDivider
    }), null != D.bot ? (0, n.jsxs)("div", {
      className: v.section,
      children: [(0, n.jsx)(A.default, {
        icon: (0, n.jsx)(E.default, {}),
        title: M.default.Messages.INTEGRATIONS_APPLICATION_BOT
      }), W]
    }) : null, w && null != D.primarySkuId && (0, n.jsxs)("div", {
      className: v.section,
      children: [(0, n.jsx)(A.default, {
        icon: (0, n.jsx)(S.default, {}),
        title: M.default.Messages.INTEGRATIONS_APPLICATION_SUBSCRIPTION_TIERS
      }), (0, n.jsx)(c.default, {
        applicationId: D.id,
        applicationPrimarySkuId: D.primarySkuId,
        guildId: l.id
      })]
    }), (0, n.jsxs)("div", {
      className: v.section,
      children: [(0, n.jsx)(A.default, {
        icon: (0, n.jsx)(g.default, {}),
        title: M.default.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS
      }), G.length > 0 ? (0, n.jsx)(x.default, {
        webhooks: G,
        editedWebhook: j,
        selectableWebhookChannels: o,
        errors: P,
        canNavigate: b
      }) : (0, n.jsx)(i.Card, {
        className: v.emptyCard,
        editable: !0,
        children: (0, n.jsx)(i.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: k ? M.default.Messages.INTEGRATIONS_APPLICATION_NO_WEBHOOKS : M.default.Messages.INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS
        })
      })]
    }), (0, n.jsx)(i.FormDivider, {
      className: v.headerDivider
    }), (0, n.jsxs)(I.default, {
      className: v.section,
      justify: I.default.Justify.BETWEEN,
      align: I.default.Align.CENTER,
      children: [(0, n.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: H ? M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY : M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS
      }), (0, n.jsx)(I.default.Child, {
        grow: 0,
        shrink: 0,
        children: (0, n.jsx)(i.Button, {
          size: i.Button.Sizes.SMALL,
          color: i.Button.Colors.RED,
          look: i.Button.Looks.FILLED,
          disabled: !H,
          onClick: U,
          children: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE
        })
      })]
    })]
  })
}