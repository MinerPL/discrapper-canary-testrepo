"use strict";
t.d(s, {
  Z: function() {
    return _
  }
});
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(139387),
  r = t(726542),
  o = t(499150),
  c = t(434404),
  d = t(999382),
  u = t(981631),
  E = t(689938);

function _(e) {
  let s = (0, l.e7)([d.Z], () => d.Z.getProps().integrations);
  return i.useMemo(() => (function(e, s) {
    var t, i, l, d;
    let _;
    if (!e.managed) return null;
    let I = null === (t = e.tags) || void 0 === t ? void 0 : t.bot_id,
      T = null === (i = e.tags) || void 0 === i ? void 0 : i.integration_id,
      N = (null === (l = e.tags) || void 0 === l ? void 0 : l.premium_subscriber) !== void 0,
      m = (null === (d = e.tags) || void 0 === d ? void 0 : d.guild_connections) !== void 0;
    if (null != I ? _ = null == s ? void 0 : s.find(e => {
        var s;
        let {
          application: t
        } = e;
        return (null == t ? void 0 : null === (s = t.bot) || void 0 === s ? void 0 : s.id) === I
      }) : null != T && (_ = null == s ? void 0 : s.find(e => {
        let {
          id: s
        } = e;
        return s === T
      })), null != _ && null != _.application && null != _.name) {
      let e = _.application.id,
        s = _.name;
      [u.ABu.TWITCH, u.ABu.YOUTUBE].includes(_.type) && (s = "".concat(r.Z.get(_.type).name, " - ").concat(s));
      let t = () => {
        c.Z.setSection(u.pNK.INTEGRATIONS), a.Z.setSection(u.b4C.APPLICATION, e)
      };
      return E.Z.Messages.MANAGED_ROLE_INTEGRATION_LINKED_EXPLANATION.format({
        name: s,
        integrationNameHook: (e, s) => (0, n.jsx)(o.Z, {
          onClick: t,
          children: e
        }, s)
      })
    }
    return N ? E.Z.Messages.MANAGED_ROLE_PREMIUM_SUBSCRIBER_EXPLANATION : m ? E.Z.Messages.MANAGED_ROLE_GUILD_CONNECTIONS_EXPLANATION : E.Z.Messages.MANAGED_ROLE_EXPLAINATION
  })(e, s), [e, s])
}