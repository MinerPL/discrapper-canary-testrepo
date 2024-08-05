t.d(n, {
  Z: function() {
return f;
  }
}), t(653041), t(47120);
var i = t(735250),
  a = t(470079),
  s = t(120356),
  l = t.n(s),
  o = t(243814),
  r = t(442837),
  d = t(481060),
  c = t(367907),
  u = t(213459),
  I = t(488915),
  m = t(970731),
  _ = t(598077),
  N = t(285952),
  E = t(626135),
  T = t(486199),
  h = t(929507),
  g = t(981631),
  p = t(689938),
  C = t(19140);

function f(e) {
  var n, t, s, f, x, O, S;
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
  let F = (f = j, x = D, O = P, S = B, null == f || null == S ? null : O ? (0, i.jsxs)(N.Z, {
  align: N.Z.Align.CENTER,
  children: [
    (0, i.jsx)(d.Text, {
      variant: 'text-sm/normal',
      children: f
    }),
    O ? (0, i.jsx)(d.ChevronSmallRightIcon, {
      size: 'custom',
      color: 'currentColor',
      width: 10,
      height: 10,
      className: C.caret
    }) : null
  ]
}) : (0, i.jsx)(d.Button, {
  size: d.Button.Sizes.SMALL,
  look: O ? d.Button.Looks.LINK : d.Button.Looks.FILLED,
  color: O ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
  disabled: x,
  onClick: S,
  children: f
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
    children: (0, i.jsx)(m.ZP, {
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
Y = (0, r.Wu)([I.Z], () => {
  var e;
  return null != L && null != y && null !== (e = I.Z.getApplicationEntitlementsForGuild(L.application.id, y)) && void 0 !== e ? e : [];
}),
z = (0, u.LD)(y, !0),
q = (null == L ? void 0 : L.application) != null && Object.keys(null !== (s = null === (t = z.result) || void 0 === t ? void 0 : null === (n = t.sections[L.application.id]) || void 0 === n ? void 0 : n.commands) && void 0 !== s ? s : {}).length > 0,
J = (0, i.jsxs)(N.Z, {
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
    (0, i.jsx)(N.Z.Child, {
      shrink: 0,
      grow: 0,
      children: (0, i.jsxs)(N.Z, {
        align: N.Z.Align.CENTER,
        justify: N.Z.Justify.END,
        children: [
          function(e, n, t) {
            var a;
            if (null == e)
              return null;
            let s = [],
              {
                application: l,
                integration: r,
                webhooks: c
              } = e;
            return null != l.bot && s.push((0, i.jsx)(d.TooltipContainer, {
              forceOpen: n,
              text: new _.Z(l.bot).isVerifiedBot() ? p.Z.Messages.INTEGRATIONS_APPLICATION_VERIFIED_BOT : p.Z.Messages.INTEGRATIONS_APPLICATION_BOT,
              className: C.feature,
              children: (0, i.jsx)(d.RobotIcon, {
                size: 'md',
                color: 'currentColor',
                className: C.featureIcon
              })
            }, 'bot')), c.length > 0 && s.push((0, i.jsx)(d.TooltipContainer, {
              forceOpen: n,
              text: p.Z.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                count: c.length
              }),
              className: C.feature,
              children: (0, i.jsx)(d.WebhookIcon, {
                size: 'md',
                color: 'currentColor',
                className: C.featureIcon
              })
            }, 'webhooks')), (null == r ? void 0 : null === (a = r.scopes) || void 0 === a ? void 0 : a.includes(o.x.APPLICATIONS_COMMANDS)) === !0 && t && s.push((0, i.jsx)('div', {
              className: C.feature,
              children: (0, i.jsx)(d.SlashBoxIcon, {
                size: 'md',
                color: 'currentColor',
                className: C.featureIcon
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
  className: l()(C.card, C.clickable),
  children: J
})
  }) : (0, i.jsx)(d.Card, {
editable: !0,
className: C.card,
children: J
  });
}