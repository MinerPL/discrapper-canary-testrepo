t.d(n, {
  Z: function() {
return A;
  }
}), t(47120), t(653041);
var i = t(735250),
  a = t(470079),
  s = t(442837),
  l = t(481060),
  o = t(668781),
  r = t(434404),
  d = t(590157),
  c = t(270144),
  u = t(288594),
  I = t(588822),
  m = t(496675),
  _ = t(285952),
  N = t(768581),
  E = t(709054),
  T = t(51144),
  h = t(486199),
  g = t(366598),
  p = t(125657),
  C = t(725875),
  f = t(981631),
  x = t(689938),
  O = t(653181);

function S(e) {
  let {
application: n,
guild: t,
integration: a,
...s
  } = e;
  return (0, i.jsx)(l.ConfirmModal, {
...s,
header: x.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({
  applicationName: n.name
}),
confirmText: x.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE,
cancelText: x.Z.Messages.CANCEL,
onConfirm: () => {
  r.Z.disableIntegration(t.id, a.id).catch(() => {
    o.Z.show({
      title: x.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
      body: x.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR
    });
  });
},
children: (0, i.jsx)(l.Text, {
  variant: 'text-md/normal',
  children: x.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({
    applicationName: n.name
  })
})
  });
}

function A(e) {
  var n;
  let {
guild: t,
applicationIntegration: o,
selectableWebhookChannels: r,
editedWebhook: A,
errors: R,
canNavigate: b
  } = e, {
application: Z,
integration: v,
webhooks: M
  } = o, [L, j] = (0, s.Wu)([m.Z], () => [
m.Z.can(f.Plq.MANAGE_ROLES, t),
null == Z.bot || m.Z.canManageUser(f.Plq.MANAGE_GUILD, Z.bot.id, t)
  ], [
Z.bot,
t
  ]), D = (0, s.e7)([m.Z], () => m.Z.can(f.Plq.MANAGE_WEBHOOKS, t), [t]), P = a.useCallback(() => {
b() && (0, l.openModal)(e => (0, i.jsx)(S, {
  guild: t,
  application: Z,
  integration: v,
  ...e
}));
  }, [
Z,
b,
t,
v
  ]), B = a.useMemo(() => {
let e = [{
  icon: l.ClockIcon,
  text: x.Z.Messages.INTEGRATION_ADDED_DATE.format({
    timestamp: E.default.extractTimestamp(v.id)
  })
}];
return null != v.user && e.push({
  icon: l.UserIcon,
  text: x.Z.Messages.INTEGRATION_ADDED_USER.format({
    user: T.ZP.getUserTag(v.user)
  })
}), e;
  }, [
v.id,
v.user
  ]), y = a.useMemo(() => null != Z.bot ? (0, i.jsx)(p.Z, {
guild: t,
applicationIntegration: o
  }) : (0, i.jsx)(l.Card, {
className: O.emptyCard,
editable: !0,
children: (0, i.jsx)(l.Text, {
  color: 'text-muted',
  variant: 'text-sm/normal',
  children: x.Z.Messages.INTEGRATIONS_APPLICATION_NO_BOT
})
  }), [
Z.bot,
o,
t
  ]), {
applicationSubscriptionListingsShown: G
  } = (0, c.ZP)({
applicationId: Z.id,
groupListingId: Z.primarySkuId,
guildId: t.id
  });
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(h.Z, {
    name: Z.name,
    imageSrc: null !== (n = Z.getIconURL(32)) && void 0 !== n ? n : N.pK['0'],
    details: B,
    isHeader: !0
  }),
  (null == Z ? void 0 : Z.description) != null ? (0, i.jsx)(I.Z, {
    userBio: Z.description,
    className: O.headerDescription
  }) : null,
  L ? (0, i.jsx)(d.Z, {
    application: Z,
    canNavigate: b,
    guildId: t.id
  }) : null,
  (0, i.jsx)(l.FormDivider, {
    className: O.headerDivider
  }),
  null != Z.bot ? (0, i.jsxs)('div', {
    className: O.section,
    children: [
      (0, i.jsx)(g.Z, {
        icon: (0, i.jsx)(l.RobotIcon, {
          size: 'xs',
          color: 'currentColor'
        }),
        title: x.Z.Messages.INTEGRATIONS_APPLICATION_BOT
      }),
      y
    ]
  }) : null,
  G && null != Z.primarySkuId && (0, i.jsxs)('div', {
    className: O.section,
    children: [
      (0, i.jsx)(g.Z, {
        icon: (0, i.jsx)(l.TicketIcon, {
          size: 'md',
          color: 'currentColor'
        }),
        title: x.Z.Messages.INTEGRATIONS_APPLICATION_SUBSCRIPTION_TIERS
      }),
      (0, i.jsx)(u.Z, {
        applicationId: Z.id,
        applicationPrimarySkuId: Z.primarySkuId,
        guildId: t.id
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: O.section,
    children: [
      (0, i.jsx)(g.Z, {
        icon: (0, i.jsx)(l.WebhookIcon, {
          size: 'md',
          color: 'currentColor'
        }),
        title: x.Z.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS
      }),
      M.length > 0 ? (0, i.jsx)(C.Z, {
        webhooks: M,
        editedWebhook: A,
        selectableWebhookChannels: r,
        errors: R,
        canNavigate: b
      }) : (0, i.jsx)(l.Card, {
        className: O.emptyCard,
        editable: !0,
        children: (0, i.jsx)(l.Text, {
          color: 'text-muted',
          variant: 'text-sm/normal',
          children: D ? x.Z.Messages.INTEGRATIONS_APPLICATION_NO_WEBHOOKS : x.Z.Messages.INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS
        })
      })
    ]
  }),
  (0, i.jsx)(l.FormDivider, {
    className: O.headerDivider
  }),
  (0, i.jsxs)(_.Z, {
    className: O.section,
    justify: _.Z.Justify.BETWEEN,
    align: _.Z.Align.CENTER,
    children: [
      (0, i.jsx)(l.Text, {
        color: 'header-secondary',
        variant: 'text-sm/normal',
        children: j ? x.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY : x.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS
      }),
      (0, i.jsx)(_.Z.Child, {
        grow: 0,
        shrink: 0,
        children: (0, i.jsx)(l.Button, {
          size: l.Button.Sizes.SMALL,
          color: l.Button.Colors.RED,
          look: l.Button.Looks.FILLED,
          disabled: !j,
          onClick: P,
          children: x.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE
        })
      })
    ]
  })
]
  });
}