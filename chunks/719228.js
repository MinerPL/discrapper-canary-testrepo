l.r(s), l.d(s, {
  GuildSelectModalBody: function() {
return E;
  },
  GuildSelectModalHeader: function() {
return x;
  },
  default: function() {
return U;
  }
}), l(724458), l(653041), l(47120);
var n = l(735250),
  t = l(470079),
  r = l(658722),
  a = l.n(r),
  i = l(442837),
  o = l(481060),
  d = l(37234),
  u = l(565138),
  c = l(703656),
  C = l(430824),
  m = l(771845),
  S = l(267642),
  I = l(981631),
  M = l(689938),
  _ = l(294503);

function x(e) {
  let {
isTransfer: s = !1,
setQuery: l,
query: t
  } = e;
  return (0, n.jsxs)(o.ModalHeader, {
className: _.selectHeaderContainer,
children: [
  (0, n.jsx)(o.Heading, {
    className: _.selectHeader,
    variant: 'heading-md/semibold',
    children: s ? M.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : M.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
  }),
  (0, n.jsx)(o.SearchBar, {
    size: o.SearchBar.Sizes.MEDIUM,
    placeholder: M.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
    'aria-label': M.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
    className: _.selectSearch,
    query: t,
    onChange: l,
    onClear: () => l('')
  })
]
  });
}

function E(e) {
  let {
isTransfer: s = !1,
selectedSlotGuilds: l,
onClose: t,
onSelectGuild: r,
query: x
  } = e, E = (0, i.e7)([m.ZP], () => m.ZP.getFlattenedGuildIds()), U = (0, i.Wu)([C.Z], () => E.reduce((e, s) => {
let n = C.Z.getGuild(s);
return null == n || null != l && l.some(e => e.id === s) ? e : ((x.length <= 0 || a()(x.toLowerCase(), null == n ? void 0 : n.name.toLowerCase())) && e.push(n), e);
  }, []));

  function R() {
t(), (0, d.xf)(), (0, c.uL)(I.Z5c.GUILD_DISCOVERY);
  }
  return (0, n.jsxs)(n.Fragment, {
children: [
  0 === U.length && (0, n.jsx)('div', {
    className: _.emptyStateWrapper,
    children: (0, n.jsx)(o.Text, {
      variant: 'text-md/normal',
      children: 0 === E.length ? M.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
        publicGuildDirectoryHook: (e, s) => (0, n.jsx)(o.Clickable, {
          onClick: R,
          tag: 'a',
          children: e
        }, s)
      }) : M.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
    })
  }),
  U.map(e => (0, n.jsxs)(o.Clickable, {
    className: _.selectGuild,
    onClick: () => {
      r(e);
    },
    children: [
      (0, n.jsx)(u.Z, {
        className: _.selectGuildIcon,
        guild: e,
        size: u.Z.Sizes.SMALL
      }),
      (0, n.jsxs)('div', {
        className: _.selectGuildCopy,
        children: [
          (0, n.jsx)(o.Text, {
            className: _.selectGuildName,
            variant: 'text-md/normal',
            children: e.name
          }),
          (0, n.jsx)(o.Text, {
            className: _.selectGuildLevel,
            color: 'text-muted',
            variant: 'text-xs/normal',
            children: (0, S.nW)(e.premiumTier)
          })
        ]
      }),
      (0, n.jsx)(o.Text, {
        className: _.selectGuildPseudoCta,
        color: 'always-white',
        variant: 'text-sm/medium',
        children: s ? M.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : M.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION
      })
    ]
  }, e.id))
]
  });
}

function U(e) {
  let {
onClose: s,
onSelectGuild: l,
transitionState: r
  } = e, [a, i] = t.useState('');
  return (0, n.jsxs)(o.ModalRoot, {
transitionState: r,
className: _.modal,
size: o.ModalSize.SMALL,
children: [
  (0, n.jsx)(x, {
    query: a,
    setQuery: i
  }),
  (0, n.jsx)(o.ModalContent, {
    className: _.modalContent,
    children: (0, n.jsx)(E, {
      onClose: s,
      onSelectGuild: l,
      query: a
    })
  }),
  (0, n.jsx)(o.ModalCloseButton, {
    className: _.modalCloseButton,
    onClick: s
  })
]
  });
}