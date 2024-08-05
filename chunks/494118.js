t.d(n, {
  Z: function() {
return N;
  }
});
var i = t(735250);
t(470079);
var a = t(780384),
  s = t(481060),
  l = t(410030),
  o = t(285952),
  r = t(63063),
  d = t(725875),
  c = t(981631),
  u = t(689938),
  I = t(843144),
  m = t(893916),
  _ = t(408942);

function N(e) {
  let {
followedChannelWebhooks: n,
editedWebhook: t,
selectableWebhookChannels: N,
errors: E,
canNavigate: T
  } = e, h = (0, l.ZP)();
  return (0, i.jsxs)(s.FormSection, {
children: [
  (0, i.jsx)(s.FormText, {
    type: s.FormTextTypes.DESCRIPTION,
    children: u.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_DESCRIPTION.format({
      helpdeskArticle: r.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING)
    })
  }),
  (0, i.jsx)(s.FormDivider, {
    className: I.headerDivider
  }),
  n.length > 0 ? (0, i.jsx)(d.Z, {
    webhooks: n,
    editedWebhook: t,
    selectableWebhookChannels: N,
    errors: E,
    canNavigate: T
  }) : function(e, n) {
    let t = (0, a.wj)(e) ? m : _;
    return (0, i.jsxs)(o.Z, {
      direction: o.Z.Direction.VERTICAL,
      align: o.Z.Align.CENTER,
      children: [
        (0, i.jsx)('img', {
          alt: '',
          src: t,
          className: I.emptyStateImage
        }),
        (0, i.jsx)(s.Heading, {
          variant: 'heading-md/semibold',
          children: u.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY
        }),
        (0, i.jsx)(s.Button, {
          className: I.emptyStateButton,
          onClick: n,
          children: u.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON
        })
      ]
    });
  }(h, () => open(r.Z.getArticleURL(c.BhN.CHANNEL_FOLLOWING)))
]
  });
}