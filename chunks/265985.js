n.d(t, {
  h: function() {
return C;
  },
  x: function() {
return g;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(442837),
  l = n(481060),
  o = n(596454),
  c = n(131388),
  d = n(409813),
  u = n(430824),
  _ = n(73346),
  E = n(817460),
  I = n(584825),
  m = n(570533),
  T = n(629262),
  h = n(575460),
  N = n(293810),
  f = n(689938),
  p = n(128787);
let C = e => {
let {
  onClose: t,
  listing: n,
  step: a,
  guildId: r
} = e, o = (0, I.YB)(r), u = (0, c.Z)(N.Xy), E = (() => {
  var e;
  if (u)
    return null;
  let t = (null == o ? void 0 : null === (e = o.cover_image_asset) || void 0 === e ? void 0 : e.application_id) != null ? (0, _._W)(o.cover_image_asset.application_id, o.cover_image_asset, 440) : void 0;
  return null == t && a !== d.h8.CONFIRM ? null : null == t ? (0, i.jsx)('div', {
    className: p.headerImageEmpty
  }) : (0, i.jsx)('img', {
    src: t,
    alt: '',
    className: p.headerImage
  });
})();
return (0, i.jsxs)('div', {
  className: s()(p.headerContainer, {
    [p.headerEmpty]: u || null == E
  }),
  children: [
    E,
    (() => {
      if (a !== d.h8.CONFIRM)
        return null;
      let e = null == n.image_asset ? void 0 : (0, _._W)(n.application_id, n.image_asset, 80);
      return (0, i.jsx)('div', {
        className: p.tierImageContainer,
        children: (0, i.jsx)('img', {
          src: e,
          alt: '',
          className: p.tierImage
        })
      });
    })(),
    (0, i.jsx)(l.Clickable, {
      className: p.closeContainer,
      onClick: () => t(!1),
      'aria-label': f.Z.Messages.CLOSE,
      children: (0, i.jsx)(l.CloseSmallIcon, {
        size: 'md',
        color: 'currentColor',
        className: p.closeIcon
      })
    })
  ]
});
  },
  g = e => {
let {
  onClose: t,
  listing: n,
  guildId: a
} = e, s = (0, r.e7)([u.Z], () => u.Z.getGuild(a), [a]), c = (0, m.Z)(a).filter(e => e.roles.includes(n.role_id)), d = n.role_benefits.benefits.filter(E.rC).slice(0, null === c.length ? 4 : 3), _ = (0, T.Z)(d).slice(0, null === c.length ? 4 : 3);
return (0, i.jsxs)('div', {
  className: p.confirmationContainer,
  children: [
    (0, i.jsx)(l.Heading, {
      className: p.confirmationHeader,
      variant: 'heading-xl/semibold',
      color: 'header-secondary',
      children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE.format({
        serverName: null == s ? void 0 : s.toString()
      })
    }),
    (0, i.jsx)(l.Text, {
      className: p.confirmationSubtitle,
      variant: 'text-md/normal',
      color: 'header-secondary',
      children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
        tier: n.name
      })
    }),
    _.length > 0 && (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(l.Text, {
          variant: 'text-xs/normal',
          color: 'header-secondary',
          className: p.confirmationSectionLabel,
          children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CHANNEL_PREVIEW
        }),
        (0, i.jsx)('div', {
          className: p.confirmationBenefits,
          children: _.map(e => (0, i.jsx)(h.Z, {
            benefit: e,
            guildId: a,
            onClick: () => t(!0)
          }, (0, E.ab)(e)))
        })
      ]
    }),
    (() => {
      var e;
      if (0 === c.length)
        return null;
      let t = c[0];
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(l.Text, {
            variant: 'text-xs/medium',
            color: 'header-secondary',
            className: p.confirmationSectionLabel,
            children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_PREVIEW_TITLE
          }),
          (0, i.jsxs)('div', {
            className: p.emojiBenefitsRow,
            children: [
              (0, i.jsx)(o.Z, {
                emojiId: t.id,
                emojiName: t.name,
                animated: null !== (e = t.animated) && void 0 !== e && e,
                className: p.emojiImage
              }),
              (0, i.jsxs)('div', {
                children: [
                  (0, i.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    className: p.emojiName,
                    children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_TEXT
                  }),
                  (0, i.jsx)(l.Text, {
                    color: 'interactive-normal',
                    variant: 'text-sm/normal',
                    children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_PREMIUM_EMOJI_BENEFIT_DESCRIPTION.format({
                      count: c.length
                    })
                  })
                ]
              })
            ]
          })
        ]
      });
    })(),
    (0, i.jsx)(l.Button, {
      className: p.confirmationButton,
      onClick: () => t(!0),
      children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
    })
  ]
});
  };