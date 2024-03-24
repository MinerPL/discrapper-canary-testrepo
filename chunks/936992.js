"use strict";
n.r(t), n.d(t, {
  GuildSelectModalHeader: function() {
    return S
  },
  GuildSelectModalBody: function() {
    return C
  },
  default: function() {
    return R
  }
}), n("808653"), n("424973"), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("448105"),
  l = n.n(a),
  i = n("446674"),
  o = n("77078"),
  u = n("54239"),
  d = n("393414"),
  c = n("305961"),
  f = n("677099"),
  m = n("476263"),
  E = n("810567"),
  p = n("427459"),
  I = n("49111"),
  _ = n("782340"),
  h = n("198591");

function S(e) {
  let {
    isTransfer: t = !1,
    setQuery: n,
    query: r
  } = e;
  return (0, s.jsxs)(o.ModalHeader, {
    className: h.selectHeaderContainer,
    children: [(0, s.jsx)(o.Heading, {
      className: h.selectHeader,
      variant: "heading-md/semibold",
      children: t ? _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
    }), (0, s.jsx)(E.default, {
      size: E.default.Sizes.MEDIUM,
      placeholder: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      "aria-label": _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
      className: h.selectSearch,
      query: r,
      onChange: n,
      onClear: () => n("")
    })]
  })
}

function C(e) {
  let {
    isTransfer: t = !1,
    selectedSlotGuilds: n,
    onClose: r,
    onSelectGuild: a,
    query: E
  } = e, S = (0, i.useStateFromStores)([f.default], () => f.default.getFlattenedGuildIds()), C = (0, i.useStateFromStoresArray)([c.default], () => S.reduce((e, t) => {
    let s = c.default.getGuild(t);
    return null == s || null != n && n.some(e => e.id === t) ? e : ((E.length <= 0 || l(E.toLowerCase(), null == s ? void 0 : s.name.toLowerCase())) && e.push(s), e)
  }, []));

  function R() {
    r(), (0, u.popLayer)(), (0, d.transitionTo)(I.Routes.GUILD_DISCOVERY)
  }
  return (0, s.jsxs)(s.Fragment, {
    children: [0 === C.length && (0, s.jsx)("div", {
      className: h.emptyStateWrapper,
      children: (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        children: 0 === S.length ? _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
          publicGuildDirectoryHook: (e, t) => (0, s.jsx)(o.Clickable, {
            onClick: R,
            tag: "a",
            children: e
          }, t)
        }) : _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
      })
    }), C.map(e => (0, s.jsxs)(o.Clickable, {
      className: h.selectGuild,
      onClick: () => {
        a(e)
      },
      children: [(0, s.jsx)(m.default, {
        className: h.selectGuildIcon,
        guild: e,
        size: m.default.Sizes.SMALL
      }), (0, s.jsxs)("div", {
        className: h.selectGuildCopy,
        children: [(0, s.jsx)(o.Text, {
          className: h.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), (0, s.jsx)(o.Text, {
          className: h.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, p.getTierName)(e.premiumTier)
        })]
      }), (0, s.jsx)(o.Text, {
        className: h.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: t ? _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : _.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
      })]
    }, e.id))]
  })
}

function R(e) {
  let {
    onClose: t,
    onSelectGuild: n,
    transitionState: a
  } = e, [l, i] = r.useState("");
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: a,
    className: h.modal,
    size: o.ModalSize.SMALL,
    children: [(0, s.jsx)(S, {
      query: l,
      setQuery: i
    }), (0, s.jsx)(o.ModalContent, {
      className: h.modalContent,
      children: (0, s.jsx)(C, {
        onClose: t,
        onSelectGuild: n,
        query: l
      })
    }), (0, s.jsx)(o.ModalCloseButton, {
      className: h.modalCloseButton,
      onClick: t
    })]
  })
}