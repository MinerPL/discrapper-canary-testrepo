t.d(n, {
  Z: function() {
return C;
  }
}), t(653041), t(47120);
var i = t(735250),
  a = t(470079),
  s = t(120356),
  l = t.n(s),
  r = t(243814),
  o = t(442837),
  d = t(481060),
  c = t(367907),
  u = t(213459),
  I = t(600164),
  m = t(488915),
  _ = t(970731),
  N = t(598077),
  E = t(626135),
  T = t(486199),
  h = t(929507),
  g = t(981631),
  p = t(689938),
  f = t(503899);

function C(e) {
  var n, t, s, C, O, x, S;
  let {
name: A,
icon: R,
imageSrc: b,
iconBackgroundColor: Z,
iconClassName: v,
details: M,
integration: L,
buttonText: j,
buttonDisabled: D,
hasNextSection: P,
onButtonClick: B,
guildId: y,
isScrolling: G,
canShowMigrationTooltip: k
  } = e, [U, H] = a.useState(!1), [w, W] = a.useState(!1);
  let F = (C = j, O = D, x = P, S = B, null == C || null == S ? null : x ? (0, i.jsxs)(I.Z, {
  align: I.Z.Align.CENTER,
  children: [
    (0, i.jsx)(d.Text, {
      variant: 'text-sm/normal',
      children: C
    }),
    x ? (0, i.jsx)(d.ChevronSmallRightIcon, {
      size: 'custom',
      color: 'currentColor',
      width: 10,
      height: 10,
      className: f.caret
    }) : null
  ]
}) : (0, i.jsx)(d.Button, {
  size: d.Button.Sizes.SMALL,
  look: x ? d.Button.Looks.LINK : d.Button.Looks.FILLED,
  color: x ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
  disabled: O,
  onClick: S,
  children: C
})),
V = k && !G && !w && void 0 !== y && null != L;
  a.useEffect(() => {
V && E.default.track(g.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
  ...(0, c.hH)(y),
  application_id: null == L ? void 0 : L.application.id,
  location: 'overview'
});
  }, [
y,
null == L ? void 0 : L.application.id,
V
  ]);
  let K = V ? (0, i.jsx)(d.Popout, {
  renderPopout: () => (0, i.jsx)(d.Clickable, {
    onClick: e => {
      e.stopPropagation(), W(!0), h.Z.dismissOverviewTooltip(y, L.integration);
    },
    children: (0, i.jsx)(_.ZP, {
      content: p.Z.Messages.COMMANDS_SCOPE_MIGRATION_OVERVIEW_TOOLTIP,
      onClick: () => {}
    })
  }),
  position: 'bottom',
  align: 'center',
  animation: d.Popout.Animation.TRANSLATE,
  shouldShow: !0,
  children: () => F
}) : F,
Y = (0, o.Wu)([m.Z], () => {
  var e;
  return null != L && null != y && null !== (e = m.Z.getApplicationEntitlementsForGuild(L.application.id, y)) && void 0 !== e ? e : [];
}),
z = (0, u.LD)(y, !0),
q = (null == L ? void 0 : L.application) != null && Object.keys(null !== (s = null === (t = z.result) || void 0 === t ? void 0 : null === (n = t.sections[L.application.id]) || void 0 === n ? void 0 : n.commands) && void 0 !== s ? s : {}).length > 0,
X = (0, i.jsxs)(I.Z, {
  children: [
    (0, i.jsx)(T.Z, {
      name: A,
      icon: R,
      imageSrc: b,
      iconBackgroundColor: Z,
      iconClassName: v,
      details: M,
      isPremium: Y.length > 0
    }),
    (0, i.jsx)(I.Z.Child, {
      shrink: 0,
      grow: 0,
      children: (0, i.jsxs)(I.Z, {
        align: I.Z.Align.CENTER,
        justify: I.Z.Justify.END,
        children: [
          function(e, n, t) {
            var a;
            if (null == e)
              return null;
            let s = [],
              {
                application: l,
                integration: o,
                webhooks: c
              } = e;
            return null != l.bot && s.push((0, i.jsx)(d.TooltipContainer, {
              forceOpen: n,
              text: new N.Z(l.bot).isVerifiedBot() ? p.Z.Messages.INTEGRATIONS_APPLICATION_VERIFIED_BOT : p.Z.Messages.INTEGRATIONS_APPLICATION_BOT,
              className: f.feature,
              children: (0, i.jsx)(d.RobotIcon, {
                size: 'md',
                color: 'currentColor',
                className: f.featureIcon
              })
            }, 'bot')), c.length > 0 && s.push((0, i.jsx)(d.TooltipContainer, {
              forceOpen: n,
              text: p.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                count: c.length
              }),
              className: f.feature,
              children: (0, i.jsx)(d.WebhookIcon, {
                size: 'md',
                color: 'currentColor',
                className: f.featureIcon
              })
            }, 'webhooks')), (null == o ? void 0 : null === (a = o.scopes) || void 0 === a ? void 0 : a.includes(r.x.APPLICATIONS_COMMANDS)) === !0 && t && s.push((0, i.jsx)('div', {
              className: f.feature,
              children: (0, i.jsx)(d.SlashBoxIcon, {
                size: 'md',
                color: 'currentColor',
                className: f.featureIcon
              })
            }, 'commands')), s;
          }(L, U, q),
          K
        ]
      })
    })
  ]
});
  return P ? (0, i.jsx)(d.Clickable, {
onClick: () => {
  k && null != y && null != L && h.Z.dismissOverviewTooltip(y, L.integration), null == B || B();
},
onFocus: () => H(!0),
onBlur: () => H(!1),
children: (0, i.jsx)(d.Card, {
  editable: !0,
  className: l()(f.card, f.clickable),
  children: X
})
  }) : (0, i.jsx)(d.Card, {
editable: !0,
className: f.card,
children: X
  });
}