"use strict";
l.r(t), l.d(t, {
  GuildSelectModalBody: function() {
    return x
  },
  GuildSelectModalHeader: function() {
    return E
  },
  default: function() {
    return N
  }
}), l("724458"), l("653041"), l("47120");
var s = l("735250"),
  n = l("470079"),
  a = l("658722"),
  r = l.n(a),
  i = l("442837"),
  o = l("481060"),
  d = l("37234"),
  u = l("703656"),
  c = l("430824"),
  C = l("771845"),
  m = l("346656"),
  f = l("6048"),
  S = l("267642"),
  I = l("981631"),
  _ = l("689938"),
  M = l("776150");

function E(e) {
  let {
    isTransfer: t = !1,
    setQuery: l,
    query: n
  } = e;
  return (0, s.jsxs)(o.ModalHeader, {
    className: M.selectHeaderContainer,
    children: [(0, s.jsx)(o.Heading, {
      className: M.selectHeader,
      variant: "heading-md/semibold",
      children: t ? _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
    }), (0, s.jsx)(f.default, {
      size: f.default.Sizes.MEDIUM,
      placeholder: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      "aria-label": _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      className: M.selectSearch,
      query: n,
      onChange: l,
      onClear: () => l("")
    })]
  })
}

function x(e) {
  let {
    isTransfer: t = !1,
    selectedSlotGuilds: l,
    onClose: n,
    onSelectGuild: a,
    query: f
  } = e, E = (0, i.useStateFromStores)([C.default], () => C.default.getFlattenedGuildIds()), x = (0, i.useStateFromStoresArray)([c.default], () => E.reduce((e, t) => {
    let s = c.default.getGuild(t);
    return null == s || null != l && l.some(e => e.id === t) ? e : ((f.length <= 0 || r()(f.toLowerCase(), null == s ? void 0 : s.name.toLowerCase())) && e.push(s), e)
  }, []));

  function N() {
    n(), (0, d.popLayer)(), (0, u.transitionTo)(I.Routes.GUILD_DISCOVERY)
  }
  return (0, s.jsxs)(s.Fragment, {
    children: [0 === x.length && (0, s.jsx)("div", {
      className: M.emptyStateWrapper,
      children: (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        children: 0 === E.length ? _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
          publicGuildDirectoryHook: (e, t) => (0, s.jsx)(o.Clickable, {
            onClick: N,
            tag: "a",
            children: e
          }, t)
        }) : _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
      })
    }), x.map(e => (0, s.jsxs)(o.Clickable, {
      className: M.selectGuild,
      onClick: () => {
        a(e)
      },
      children: [(0, s.jsx)(m.default, {
        className: M.selectGuildIcon,
        guild: e,
        size: m.default.Sizes.SMALL
      }), (0, s.jsxs)("div", {
        className: M.selectGuildCopy,
        children: [(0, s.jsx)(o.Text, {
          className: M.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), (0, s.jsx)(o.Text, {
          className: M.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, S.getTierName)(e.premiumTier)
        })]
      }), (0, s.jsx)(o.Text, {
        className: M.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: t ? _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
      })]
    }, e.id))]
  })
}

function N(e) {
  let {
    onClose: t,
    onSelectGuild: l,
    transitionState: a
  } = e, [r, i] = n.useState("");
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: a,
    className: M.modal,
    size: o.ModalSize.SMALL,
    children: [(0, s.jsx)(E, {
      query: r,
      setQuery: i
    }), (0, s.jsx)(o.ModalContent, {
      className: M.modalContent,
      children: (0, s.jsx)(x, {
        onClose: t,
        onSelectGuild: l,
        query: r
      })
    }), (0, s.jsx)(o.ModalCloseButton, {
      className: M.modalCloseButton,
      onClick: t
    })]
  })
}