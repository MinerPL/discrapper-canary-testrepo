"use strict";
n.r(t), n.d(t, {
  GuildSelectModalHeader: function() {
    return _
  },
  GuildSelectModalBody: function() {
    return C
  },
  default: function() {
    return L
  }
}), n("808653"), n("424973"), n("222007");
var l = n("37983"),
  s = n("884691"),
  i = n("448105"),
  r = n.n(i),
  a = n("446674"),
  o = n("77078"),
  u = n("54239"),
  d = n("393414"),
  c = n("334811"),
  f = n("305961"),
  p = n("677099"),
  m = n("476263"),
  h = n("810567"),
  E = n("427459"),
  I = n("49111"),
  S = n("782340"),
  g = n("109396");

function _(e) {
  let {
    isTransfer: t = !1,
    setQuery: n,
    query: s
  } = e;
  return (0, l.jsxs)(o.ModalHeader, {
    className: g.selectHeaderContainer,
    children: [(0, l.jsx)(o.Heading, {
      className: g.selectHeader,
      variant: "heading-md/semibold",
      children: t ? S.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : S.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
    }), (0, l.jsx)(h.default, {
      size: h.default.Sizes.MEDIUM,
      placeholder: S.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      "aria-label": S.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      className: g.selectSearch,
      query: s,
      onChange: n,
      onClear: () => n("")
    })]
  })
}

function C(e) {
  let {
    isTransfer: t = !1,
    selectedSlotGuilds: n,
    onClose: s,
    onSelectGuild: i,
    query: h
  } = e, _ = (0, a.useStateFromStores)([p.default], () => p.default.getFlattenedGuildIds()), C = (0, a.useStateFromStoresArray)([f.default], () => _.reduce((e, t) => {
    let l = f.default.getGuild(t);
    return null == l || null != n && n.some(e => e.id === t) ? e : ((h.length <= 0 || r(h.toLowerCase(), null == l ? void 0 : l.name.toLowerCase())) && e.push(l), e)
  }, [])), {
    enabled: L
  } = c.default.useExperiment({
    location: "5f417c_1"
  }, {
    autoTrackExposure: !0
  });

  function R() {
    s(), (0, u.popLayer)(), (0, d.transitionTo)(I.Routes.GUILD_DISCOVERY)
  }
  return (0, l.jsxs)(l.Fragment, {
    children: [0 === C.length && (0, l.jsx)("div", {
      className: g.emptyStateWrapper,
      children: (0, l.jsx)(o.Text, {
        variant: "text-md/normal",
        children: 0 === _.length ? S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
          publicGuildDirectoryHook: (e, t) => (0, l.jsx)(o.Clickable, {
            onClick: R,
            tag: "a",
            children: e
          }, t)
        }) : S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
      })
    }), C.map(e => (0, l.jsxs)(o.Clickable, {
      className: g.selectGuild,
      onClick: () => {
        i(e)
      },
      children: [(0, l.jsx)(m.default, {
        className: g.selectGuildIcon,
        guild: e,
        size: m.default.Sizes.SMALL
      }), (0, l.jsxs)("div", {
        className: g.selectGuildCopy,
        children: [(0, l.jsx)(o.Text, {
          className: g.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), L && (0, l.jsx)(o.Text, {
          className: g.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, E.getTierName)(e.premiumTier)
        })]
      }), L && (0, l.jsx)(o.Text, {
        className: g.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: t ? S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : S.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
      })]
    }, e.id))]
  })
}

function L(e) {
  let {
    onClose: t,
    onSelectGuild: n,
    transitionState: i
  } = e, [r, a] = s.useState("");
  return (0, l.jsxs)(o.ModalRoot, {
    transitionState: i,
    className: g.modal,
    size: o.ModalSize.SMALL,
    children: [(0, l.jsx)(_, {
      query: r,
      setQuery: a
    }), (0, l.jsx)(o.ModalContent, {
      className: g.modalContent,
      children: (0, l.jsx)(C, {
        onClose: t,
        onSelectGuild: n,
        query: r
      })
    }), (0, l.jsx)(o.ModalCloseButton, {
      className: g.modalCloseButton,
      onClick: t
    })]
  })
}