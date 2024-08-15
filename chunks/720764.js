t.d(n, {
  Z: function() {
return h;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  s = t(780384),
  l = t(481060),
  r = t(668781),
  o = t(308063),
  d = t(410030),
  c = t(600164),
  u = t(63063),
  I = t(725875),
  m = t(981631),
  _ = t(689938),
  N = t(165204),
  E = t(893916),
  T = t(408942);

function h(e) {
  let n, {
  guild: t,
  channel: h,
  customWebhooks: g,
  editedWebhook: p,
  selectableWebhookChannels: f,
  refToScroller: C,
  errors: O,
  canNavigate: x
} = e,
S = (0, d.ZP)(),
[A, R] = a.useState(null),
[b, Z] = a.useState(null);
  if (null != h)
n = h;
  else {
let e = Object.values(f);
n = e.length > 0 ? e[0] : null;
  }
  let v = a.useCallback(async () => {
if (x() && null !== n) {
  let e = await o.Z.create(t.id, n.id).catch(e => {
    let {
      body: n,
      status: t
    } = e;
    return n && n.code === m.evJ.TOO_MANY_WEBHOOKS ? r.Z.show({
      title: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
      body: _.Z.Messages.WEBHOOK_ERROR_MAX_WEBHOOKS_REACHED
    }) : 429 === t ? r.Z.show({
      title: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
      body: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK_RATE_LIMIT
    }) : r.Z.show({
      title: _.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
      body: _.Z.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
    }), null;
  });
  null != e && (Z(e.id), R(e));
}
  }, [
x,
n,
t
  ]);
  a.useEffect(() => {
0 === g.length && v();
  }, []);
  let M = null !== n;
  return (0, i.jsxs)(l.FormSection, {
children: [
  (0, i.jsx)(l.FormText, {
    type: l.FormTextTypes.DESCRIPTION,
    children: _.Z.Messages.INTEGRATIONS_WEBHOOKS_DESCRIPTION.format({
      helpdeskArticle: u.Z.getArticleURL(m.BhN.WEBHOOKS),
      developersArticle: m.EYA.API_DOCS_WEBHOOKS
    })
  }),
  (0, i.jsx)(l.FormDivider, {
    className: N.headerDivider
  }),
  g.length > 0 ? (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(l.Button, {
        className: N.createButton,
        size: l.Button.Sizes.SMALL,
        disabled: !M,
        onClick: v,
        children: _.Z.Messages.INTEGRATIONS_WEBHOOKS_CREATE
      }),
      (0, i.jsx)(I.Z, {
        webhooks: g,
        editedWebhook: p,
        selectableWebhookChannels: f,
        lastCreatedWebhookId: null == A ? void 0 : A.id,
        errors: O,
        canNavigate: x
      })
    ]
  }) : function(e, n, t) {
    let a = (0, s.wj)(e) ? E : T;
    return (0, i.jsxs)(c.Z, {
      direction: c.Z.Direction.VERTICAL,
      align: c.Z.Align.CENTER,
      children: [
        (0, i.jsx)('img', {
          alt: '',
          src: a,
          className: N.emptyStateImage
        }),
        (0, i.jsx)(l.Heading, {
          variant: 'heading-md/semibold',
          children: _.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY
        }),
        (0, i.jsx)(l.Button, {
          className: N.emptyStateButton,
          disabled: !n,
          onClick: t,
          children: _.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON
        })
      ]
    });
  }(S, M, v)
]
  });
}