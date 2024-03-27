"use strict";
l.r(t), l.d(t, {
  default: function() {
    return x
  }
}), l("424973"), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("446674"),
  o = l("77078"),
  d = l("716241"),
  u = l("988721"),
  c = l("248933"),
  f = l("5667"),
  m = l("766274"),
  I = l("145131"),
  T = l("83910"),
  N = l("772280"),
  E = l("71216"),
  h = l("741919"),
  g = l("599110"),
  p = l("674916"),
  S = l("702411"),
  O = l("49111"),
  _ = l("843455"),
  A = l("782340"),
  C = l("794504");

function x(e) {
  var t, l, s, x, R, M, v;
  let {
    name: L,
    icon: j,
    imageSrc: b,
    iconBackgroundColor: P,
    iconClassName: D,
    details: y,
    integration: G,
    buttonText: B,
    buttonDisabled: H,
    hasNextSection: k,
    onButtonClick: U,
    guildId: F,
    isScrolling: w,
    canShowMigrationTooltip: W
  } = e, [V, Y] = a.useState(!1), [K, z] = a.useState(!1);
  let Z = (x = B, R = H, M = k, v = U, null == x || null == v ? null : M ? (0, n.jsxs)(I.default, {
      align: I.default.Align.CENTER,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: x
      }), M ? (0, n.jsx)(N.default, {
        width: 10,
        height: 10,
        className: C.caret
      }) : null]
    }) : (0, n.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      look: M ? o.Button.Looks.LINK : o.Button.Looks.FILLED,
      color: M ? o.Button.Colors.PRIMARY : o.Button.Colors.BRAND,
      disabled: R,
      onClick: v,
      children: x
    })),
    q = W && !w && !K && void 0 !== F && null != G;
  a.useEffect(() => {
    q && g.default.track(O.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
      ...(0, d.collectGuildAnalyticsMetadata)(F),
      application_id: null == G ? void 0 : G.application.id,
      location: "overview"
    })
  }, [F, null == G ? void 0 : G.application.id, q]);
  let J = q ? (0, n.jsx)(o.Popout, {
      renderPopout: () => (0, n.jsx)(o.Clickable, {
        onClick: e => {
          e.stopPropagation(), z(!0), S.default.dismissOverviewTooltip(F, G.integration)
        },
        children: (0, n.jsx)(f.default, {
          content: A.default.Messages.COMMANDS_SCOPE_MIGRATION_OVERVIEW_TOOLTIP,
          onClick: () => {}
        })
      }),
      position: "bottom",
      align: "center",
      animation: o.Popout.Animation.TRANSLATE,
      shouldShow: !0,
      children: () => Z
    }) : Z,
    X = (0, r.useStateFromStoresArray)([c.default], () => {
      var e;
      return null != G && null != F && null !== (e = c.default.getApplicationEntitlementsForGuild(G.application.id, F)) && void 0 !== e ? e : []
    }),
    Q = (0, u.useGuildIndexState)(F, !0),
    $ = (null == G ? void 0 : G.application) != null && Object.keys(null !== (s = null === (l = Q.result) || void 0 === l ? void 0 : null === (t = l.sections[G.application.id]) || void 0 === t ? void 0 : t.commands) && void 0 !== s ? s : {}).length > 0,
    ee = (0, n.jsxs)(I.default, {
      children: [(0, n.jsx)(p.default, {
        name: L,
        icon: j,
        imageSrc: b,
        iconBackgroundColor: P,
        iconClassName: D,
        details: y,
        isPremium: X.length > 0
      }), (0, n.jsx)(I.default.Child, {
        shrink: 0,
        grow: 0,
        children: (0, n.jsxs)(I.default, {
          align: I.default.Align.CENTER,
          justify: I.default.Justify.END,
          children: [function(e, t, l) {
            var a;
            if (null == e) return null;
            let s = [],
              {
                application: i,
                integration: r,
                webhooks: d
              } = e;
            return null != i.bot && s.push((0, n.jsx)(o.TooltipContainer, {
              forceOpen: t,
              text: new(0, m.default)(i.bot).isVerifiedBot() ? A.default.Messages.INTEGRATIONS_APPLICATION_VERIFIED_BOT : A.default.Messages.INTEGRATIONS_APPLICATION_BOT,
              className: C.feature,
              children: (0, n.jsx)(E.default, {
                width: 24,
                height: 24,
                className: C.featureIcon
              })
            }, "bot")), d.length > 0 && s.push((0, n.jsx)(o.TooltipContainer, {
              forceOpen: t,
              text: A.default.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                count: d.length
              }),
              className: C.feature,
              children: (0, n.jsx)(h.default, {
                width: 24,
                height: 24,
                className: C.featureIcon
              })
            }, "webhooks")), (null == r ? void 0 : null === (a = r.scopes) || void 0 === a ? void 0 : a.includes(_.OAuth2Scopes.APPLICATIONS_COMMANDS)) === !0 && l && s.push((0, n.jsx)("div", {
              className: C.feature,
              children: (0, n.jsx)(T.default, {
                width: 24,
                height: 24,
                className: C.featureIcon
              })
            }, "commands")), s
          }(G, V, $), J]
        })
      })]
    });
  return k ? (0, n.jsx)(o.Clickable, {
    onClick: () => {
      W && null != F && null != G && S.default.dismissOverviewTooltip(F, G.integration), null == U || U()
    },
    onFocus: () => Y(!0),
    onBlur: () => Y(!1),
    children: (0, n.jsx)(o.Card, {
      editable: !0,
      className: i(C.card, C.clickable),
      children: ee
    })
  }) : (0, n.jsx)(o.Card, {
    editable: !0,
    className: C.card,
    children: ee
  })
}