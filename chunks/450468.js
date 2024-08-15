t.r(s), t.d(s, {
  default: function() {
return x;
  }
}), t(47120), t(411104);
var n, a, i = t(735250),
  r = t(470079),
  o = t(512722),
  l = t.n(o),
  c = t(442837),
  d = t(780384),
  _ = t(481060),
  E = t(355467),
  u = t(179360),
  I = t(100527),
  T = t(906732),
  S = t(600164),
  N = t(431369),
  C = t(210887),
  m = t(78839),
  A = t(74538),
  g = t(689938),
  O = t(514121);
async function h(e, s, t, n) {
  await (0, u.bG)(t), await (0, E.Mg)(e, {
items: (0, A.MY)(e, s)
  }, n);
}

function p(e) {
  let {
premiumSubscription: s,
guildBoostSlotId: t,
onNext: n,
onClose: a
  } = e, [o, E] = r.useState(!1), u = (0, c.e7)([C.Z], () => C.Z.theme), {
analyticsLocations: I
  } = (0, T.ZP)();
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)(_.ModalHeader, {
    separator: !1,
    children: [
      (0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H4,
        children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_TITLE
      }),
      (0, i.jsx)(_.ModalCloseButton, {
        onClick: a
      })
    ]
  }),
  (0, i.jsx)(_.ModalContent, {
    className: O.body,
    children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_DESCRIPTION
  }),
  (0, i.jsxs)(_.ModalFooter, {
    justify: S.Z.Justify.START,
    children: [
      (0, i.jsx)(_.Button, {
        onClick: async () => {
          try {
            E(!0);
            let e = (0, N.g)(s, 1);
            l()((0, A.uV)(e) <= (0, A.uV)(s.additionalPlans), 'Uncanceling should not increase the number of guild subscriptions'), await h(s, e, t, I), n();
          } catch (e) {
            E(!1);
          }
        },
        submitting: o,
        children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_BUTTON
      }),
      (0, i.jsx)(_.Button, {
        look: _.Button.Looks.LINK,
        color: (0, d.ap)(u) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
        onClick: a,
        disabled: o,
        children: g.Z.Messages.NEVERMIND
      })
    ]
  })
]
  });
}

function R(e) {
  let {
onClose: s
  } = e;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)(_.ModalHeader, {
    separator: !1,
    children: [
      (0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H4,
        children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_TITLE
      }),
      (0, i.jsx)(_.ModalCloseButton, {
        onClick: s
      })
    ]
  }),
  (0, i.jsxs)(_.ModalContent, {
    className: O.body,
    children: [
      (0, i.jsx)('div', {
        className: O.uncancelImage
      }),
      (0, i.jsx)('div', {
        children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_DESCRIPTION
      })
    ]
  }),
  (0, i.jsx)(_.ModalFooter, {
    children: (0, i.jsx)(_.Button, {
      onClick: s,
      children: g.Z.Messages.OKAY
    })
  })
]
  });
}

function x(e) {
  let s, {
  guildBoostSlotId: t,
  transitionState: n,
  onClose: a
} = e,
{
  analyticsLocations: o
} = (0, T.ZP)(I.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
  r.useEffect(() => {
!m.ZP.hasFetchedSubscriptions() && (0, E.jg)();
  }, []);
  let l = (0, c.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
[d, u] = r.useState(1);
  if (null == l)
s = (0, i.jsx)(_.ModalContent, {
  children: (0, i.jsx)(_.Spinner, {})
});
  else
switch (d) {
  case 1:
    s = (0, i.jsx)(p, {
      premiumSubscription: l,
      guildBoostSlotId: t,
      onNext: () => u(2),
      onClose: a
    });
    break;
  case 2:
    s = (0, i.jsx)(R, {
      onClose: a
    });
    break;
  default:
    throw Error('Unexpected step: '.concat(d));
}
  return (0, i.jsx)(T.Gt, {
value: o,
children: (0, i.jsx)(_.ModalRoot, {
  transitionState: n,
  children: s
})
  });
}
(a = n || (n = {}))[a.START = 1] = 'START', a[a.CONFIRM = 2] = 'CONFIRM';