"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("37983"),
  r = s("884691"),
  i = s("77078"),
  n = s("895530"),
  l = s("437825"),
  o = s("36694"),
  u = s("530311"),
  d = s("824326"),
  c = s("833458"),
  _ = s("155207"),
  E = s("781896"),
  T = s("430025"),
  I = s("137783"),
  f = s("439937"),
  R = s("31225"),
  S = s("49111"),
  m = s("782340"),
  N = s("413037");
let A = [{
    feature: S.SKUFeatureTypes.SINGLE_PLAYER,
    getText: () => m.default.Messages.APPLICATION_STORE_SINGLE_PLAYER,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_SINGLE_PLAYER_TOOLTIP,
    IconComponent: E.default
  }, {
    feature: S.SKUFeatureTypes.LOCAL_MULTIPLAYER,
    getText: () => m.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: S.SKUFeatureTypes.ONLINE_MULTIPLAYER,
    getText: () => m.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: S.SKUFeatureTypes.PVP,
    getText: () => m.default.Messages.APPLICATION_STORE_PVP,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_PVP_TOOLTIP,
    IconComponent: c.default
  }, {
    feature: S.SKUFeatureTypes.LOCAL_COOP,
    getText: () => m.default.Messages.APPLICATION_STORE_LOCAL_COOP,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_LOCAL_COOP_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: S.SKUFeatureTypes.ONLINE_COOP,
    getText: () => m.default.Messages.APPLICATION_STORE_ONLINE_COOP,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_ONLINE_COOP_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: S.SKUFeatureTypes.CROSS_PLATFORM,
    getText: () => m.default.Messages.APPLICATION_STORE_CROSS_PLATFORM,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_CROSS_PLATFORM_TOOLTIP,
    IconComponent: R.default
  }, {
    feature: S.SKUFeatureTypes.RICH_PRESENCE,
    getText: () => m.default.Messages.APPLICATION_STORE_RICH_PRESENCE,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_RICH_PRESENCE_TOOLTIP,
    IconComponent: I.default
  }, {
    feature: S.SKUFeatureTypes.DISCORD_GAME_INVITES,
    getText: () => m.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES_TOOLTIP,
    IconComponent: T.default
  }, {
    feature: S.SKUFeatureTypes.SPECTATOR_MODE,
    getText: () => m.default.Messages.APPLICATION_STORE_SPECTATOR_MODE,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_SPECTATOR_MODE_TOOLTIP,
    IconComponent: l.default
  }, {
    feature: S.SKUFeatureTypes.CONTROLLER_SUPPORT,
    getText: () => m.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT_TOOLTIP,
    IconComponent: d.default
  }, {
    feature: S.SKUFeatureTypes.CLOUD_SAVES,
    getText: () => m.default.Messages.APPLICATION_STORE_CLOUD_SAVES,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_CLOUD_SAVES_TOOLTIP,
    IconComponent: u.default
  }, {
    feature: S.SKUFeatureTypes.SECURE_NETWORKING,
    getText: () => m.default.Messages.APPLICATION_STORE_SECURE_NETWORKING,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_SECURE_NETWORKING_TOOLTIP,
    IconComponent: f.default
  }],
  p = e => {
    let {
      IconComponent: t,
      text: s,
      tooltip: r
    } = e;
    return (0, a.jsxs)("div", {
      className: N.row,
      children: [(0, a.jsx)(i.Tooltip, {
        text: r,
        children: e => (0, a.jsx)(t, {
          className: N.featureIcon,
          ...e
        })
      }), (0, a.jsx)("span", {
        className: N.featureText,
        children: s
      }), (0, a.jsx)(o.default, {
        className: N.checkmarkIcon
      })]
    })
  };
class C extends r.PureComponent {
  render() {
    let {
      sku: e
    } = this.props, t = A.filter(t => {
      let {
        feature: s
      } = t;
      return e.features.has(s)
    }).map(e => {
      let {
        feature: t,
        IconComponent: s,
        getText: r,
        getTooltip: i
      } = e;
      return (0, a.jsx)(p, {
        IconComponent: s,
        text: r(),
        tooltip: i()
      }, t)
    });
    return 0 === t.length ? null : (0, a.jsxs)("div", {
      className: N.features,
      children: [(0, a.jsx)(n.default, {
        children: m.default.Messages.APPLICATION_STORE_SECTION_TITLE_FEATURES
      }), t]
    })
  }
}
var g = C