"use strict";
s.r(t);
var a = s("735250"),
  i = s("470079"),
  r = s("481060"),
  n = s("378720"),
  l = s("119828"),
  o = s("263704"),
  u = s("863969"),
  d = s("975667"),
  c = s("439034"),
  _ = s("158010"),
  E = s("964309"),
  T = s("38761"),
  I = s("6074"),
  R = s("39377"),
  S = s("417622"),
  f = s("981631"),
  m = s("689938"),
  N = s("866887");
let A = [{
    feature: f.SKUFeatureTypes.SINGLE_PLAYER,
    getText: () => m.default.Messages.APPLICATION_STORE_SINGLE_PLAYER,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_SINGLE_PLAYER_TOOLTIP,
    IconComponent: E.default
  }, {
    feature: f.SKUFeatureTypes.LOCAL_MULTIPLAYER,
    getText: () => m.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: f.SKUFeatureTypes.ONLINE_MULTIPLAYER,
    getText: () => m.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: f.SKUFeatureTypes.PVP,
    getText: () => m.default.Messages.APPLICATION_STORE_PVP,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_PVP_TOOLTIP,
    IconComponent: c.default
  }, {
    feature: f.SKUFeatureTypes.LOCAL_COOP,
    getText: () => m.default.Messages.APPLICATION_STORE_LOCAL_COOP,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_LOCAL_COOP_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: f.SKUFeatureTypes.ONLINE_COOP,
    getText: () => m.default.Messages.APPLICATION_STORE_ONLINE_COOP,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_ONLINE_COOP_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: f.SKUFeatureTypes.CROSS_PLATFORM,
    getText: () => m.default.Messages.APPLICATION_STORE_CROSS_PLATFORM,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_CROSS_PLATFORM_TOOLTIP,
    IconComponent: S.default
  }, {
    feature: f.SKUFeatureTypes.RICH_PRESENCE,
    getText: () => m.default.Messages.APPLICATION_STORE_RICH_PRESENCE,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_RICH_PRESENCE_TOOLTIP,
    IconComponent: I.default
  }, {
    feature: f.SKUFeatureTypes.DISCORD_GAME_INVITES,
    getText: () => m.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES_TOOLTIP,
    IconComponent: T.default
  }, {
    feature: f.SKUFeatureTypes.SPECTATOR_MODE,
    getText: () => m.default.Messages.APPLICATION_STORE_SPECTATOR_MODE,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_SPECTATOR_MODE_TOOLTIP,
    IconComponent: l.default
  }, {
    feature: f.SKUFeatureTypes.CONTROLLER_SUPPORT,
    getText: () => m.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT_TOOLTIP,
    IconComponent: d.default
  }, {
    feature: f.SKUFeatureTypes.CLOUD_SAVES,
    getText: () => m.default.Messages.APPLICATION_STORE_CLOUD_SAVES,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_CLOUD_SAVES_TOOLTIP,
    IconComponent: u.default
  }, {
    feature: f.SKUFeatureTypes.SECURE_NETWORKING,
    getText: () => m.default.Messages.APPLICATION_STORE_SECURE_NETWORKING,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_SECURE_NETWORKING_TOOLTIP,
    IconComponent: R.default
  }],
  p = e => {
    let {
      IconComponent: t,
      text: s,
      tooltip: i
    } = e;
    return (0, a.jsxs)("div", {
      className: N.row,
      children: [(0, a.jsx)(r.Tooltip, {
        text: i,
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
class C extends i.PureComponent {
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
        getText: i,
        getTooltip: r
      } = e;
      return (0, a.jsx)(p, {
        IconComponent: s,
        text: i(),
        tooltip: r()
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
t.default = C