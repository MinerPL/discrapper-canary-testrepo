"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("626135"),
  r = n("231467"),
  o = n("207796"),
  u = n("436137"),
  d = n("559469"),
  c = n("981631"),
  f = n("689938"),
  E = n("720395");
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    onClick: n
  } = e;
  s.useEffect(() => {
    i.default.track(c.AnalyticEvents.CLAN_DISCOVERY_USER_NUX_VIEWED)
  }, []);
  let [h, _] = s.useMemo(() => {
    switch (t) {
      case o.ClanDiscoveryGame.GENSHIN:
        return [f.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_TITLE, f.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_SUBTITLE];
      case o.ClanDiscoveryGame.VALORANT:
        return [f.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_TITLE, f.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_SUBTITLE]
    }
  }, [t]);
  return (0, a.jsxs)("div", {
    className: E.upsellContainer,
    children: [(0, a.jsx)("div", {
      className: E.cardsContainer,
      children: (0, a.jsxs)("div", {
        className: E.cards,
        children: [(0, a.jsx)("div", {
          className: E.clanCardOuterContainer,
          children: (0, a.jsx)(r.ClanDiscoveryCardView, {
            clan: d.FAKE_DISCOVERY_UPSELL_CLANS["0"],
            className: E.clanCardOuterLeft
          })
        }), (0, a.jsx)("div", {
          className: E.clanCardInnerContainer,
          children: (0, a.jsx)(r.ClanDiscoveryCardView, {
            clan: d.FAKE_DISCOVERY_UPSELL_CLANS["1"],
            className: E.clanCardInnerLeft
          })
        }), (0, a.jsx)("div", {
          className: E.clanCardCenterContainer,
          children: (0, a.jsx)(r.ClanDiscoveryCardView, {
            clan: d.FAKE_DISCOVERY_UPSELL_CLANS["4"],
            className: E.clanCardCenter
          })
        }), (0, a.jsx)("div", {
          className: E.clanCardInnerContainer,
          children: (0, a.jsx)(r.ClanDiscoveryCardView, {
            clan: d.FAKE_DISCOVERY_UPSELL_CLANS["2"],
            className: E.clanCardInnerRight
          })
        }), (0, a.jsx)("div", {
          className: E.clanCardOuterContainer,
          children: (0, a.jsx)(r.ClanDiscoveryCardView, {
            clan: d.FAKE_DISCOVERY_UPSELL_CLANS["3"],
            className: E.clanCardOuterRight
          })
        })]
      })
    }), (0, a.jsxs)("div", {
      className: E.upsellDetails,
      children: [(0, a.jsx)(l.Heading, {
        className: E.upsellTitle,
        variant: "heading-xxl/semibold",
        children: h
      }), (0, a.jsx)(l.Text, {
        className: E.upsellSubtitle,
        variant: "text-md/medium",
        children: _
      }), (0, a.jsx)(u.default, {
        onClick: n,
        children: f.default.Messages.CLAN_DISCOVERY_UPSELL_GET_STARTED
      })]
    })]
  })
})