"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  i = s("139387"),
  r = s("726542"),
  o = s("499150"),
  d = s("434404"),
  u = s("999382"),
  c = s("981631"),
  E = s("689938");

function _(e) {
  let t = (0, n.useStateFromStores)([u.default], () => u.default.getProps().integrations);
  return l.useMemo(() => (function(e, t) {
    var s, l, n, u;
    let _;
    if (!e.managed) return null;
    let I = null === (s = e.tags) || void 0 === s ? void 0 : s.bot_id,
      T = null === (l = e.tags) || void 0 === l ? void 0 : l.integration_id,
      S = (null === (n = e.tags) || void 0 === n ? void 0 : n.premium_subscriber) !== void 0,
      f = (null === (u = e.tags) || void 0 === u ? void 0 : u.guild_connections) !== void 0;
    if (null != I ? _ = null == t ? void 0 : t.find(e => {
        var t;
        let {
          application: s
        } = e;
        return (null == s ? void 0 : null === (t = s.bot) || void 0 === t ? void 0 : t.id) === I
      }) : null != T && (_ = null == t ? void 0 : t.find(e => {
        let {
          id: t
        } = e;
        return t === T
      })), null != _ && null != _.application && null != _.name) {
      let e = _.application.id,
        t = _.name;
      [c.PlatformTypes.TWITCH, c.PlatformTypes.YOUTUBE].includes(_.type) && (t = "".concat(r.default.get(_.type).name, " - ").concat(t));
      let s = () => {
        d.default.setSection(c.GuildSettingsSections.INTEGRATIONS), i.default.setSection(c.IntegrationSettingsSections.APPLICATION, e)
      };
      return E.default.Messages.MANAGED_ROLE_INTEGRATION_LINKED_EXPLANATION.format({
        name: t,
        integrationNameHook: (e, t) => (0, a.jsx)(o.default, {
          onClick: s,
          children: e
        }, t)
      })
    }
    return S ? E.default.Messages.MANAGED_ROLE_PREMIUM_SUBSCRIBER_EXPLANATION : f ? E.default.Messages.MANAGED_ROLE_GUILD_CONNECTIONS_EXPLANATION : E.default.Messages.MANAGED_ROLE_EXPLAINATION
  })(e, t), [e, t])
}