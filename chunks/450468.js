s.r(t), s.d(t, {
  default: function() {
return x;
  }
}), s(47120), s(411104);
var n, a, i = s(735250),
  r = s(470079),
  o = s(512722),
  l = s.n(o),
  c = s(442837),
  d = s(780384),
  _ = s(481060),
  E = s(355467),
  u = s(179360),
  T = s(100527),
  I = s(906732),
  S = s(431369),
  N = s(210887),
  C = s(78839),
  m = s(285952),
  A = s(74538),
  g = s(689938),
  h = s(507937);
async function O(e, t, s, n) {
  await (0, u.bG)(s), await (0, E.Mg)(e, {
items: (0, A.MY)(e, t)
  }, n);
}

function p(e) {
  let {
premiumSubscription: t,
guildBoostSlotId: s,
onNext: n,
onClose: a
  } = e, [o, E] = r.useState(!1), u = (0, c.e7)([N.Z], () => N.Z.theme), {
analyticsLocations: T
  } = (0, I.ZP)();
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
    className: h.body,
    children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_DESCRIPTION
  }),
  (0, i.jsxs)(_.ModalFooter, {
    justify: m.Z.Justify.START,
    children: [
      (0, i.jsx)(_.Button, {
        onClick: async () => {
          try {
            E(!0);
            let e = (0, S.g)(t, 1);
            l()((0, A.uV)(e) <= (0, A.uV)(t.additionalPlans), 'Uncanceling should not increase the number of guild subscriptions'), await O(t, e, s, T), n();
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
onClose: t
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
        onClick: t
      })
    ]
  }),
  (0, i.jsxs)(_.ModalContent, {
    className: h.body,
    children: [
      (0, i.jsx)('div', {
        className: h.uncancelImage
      }),
      (0, i.jsx)('div', {
        children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_INVENTORY_UNCANCEL_CONFIRM_DESCRIPTION
      })
    ]
  }),
  (0, i.jsx)(_.ModalFooter, {
    children: (0, i.jsx)(_.Button, {
      onClick: t,
      children: g.Z.Messages.OKAY
    })
  })
]
  });
}

function x(e) {
  let t, {
  guildBoostSlotId: s,
  transitionState: n,
  onClose: a
} = e,
{
  analyticsLocations: o
} = (0, I.ZP)(T.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
  r.useEffect(() => {
!C.ZP.hasFetchedSubscriptions() && (0, E.jg)();
  }, []);
  let l = (0, c.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
[d, u] = r.useState(1);
  if (null == l)
t = (0, i.jsx)(_.ModalContent, {
  children: (0, i.jsx)(_.Spinner, {})
});
  else
switch (d) {
  case 1:
    t = (0, i.jsx)(p, {
      premiumSubscription: l,
      guildBoostSlotId: s,
      onNext: () => u(2),
      onClose: a
    });
    break;
  case 2:
    t = (0, i.jsx)(R, {
      onClose: a
    });
    break;
  default:
    throw Error('Unexpected step: '.concat(d));
}
  return (0, i.jsx)(I.Gt, {
value: o,
children: (0, i.jsx)(_.ModalRoot, {
  transitionState: n,
  children: t
})
  });
}
(a = n || (n = {}))[a.START = 1] = 'START', a[a.CONFIRM = 2] = 'CONFIRM';