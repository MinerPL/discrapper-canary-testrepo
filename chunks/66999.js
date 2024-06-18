"use strict";
n.d(t, {
  $: function() {
    return _
  },
  Z: function() {
    return u
  }
});
var i = n(442837),
  r = n(430198),
  s = n(592125),
  o = n(496675),
  a = n(981631);
let l = {
  needSubscriptionToAccess: !1,
  isSubscriptionGated: !1
};

function u(e) {
  return (0, i.cj)([s.Z, r.Z, o.Z], () => _(e, s.Z, r.Z, o.Z), [e])
}

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.Z,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Z,
    u = t.getChannel(e);
  return (null == u ? void 0 : u.isRoleSubscriptionTemplatePreviewChannel()) ? {
    isSubscriptionGated: !0,
    needSubscriptionToAccess: !0
  } : null != u && n.isChannelGated(u.guild_id, u.id) ? {
    isSubscriptionGated: !0,
    needSubscriptionToAccess: u.isGuildVocal() ? !i.can(a.Plq.CONNECT, u) : !i.can(a.Plq.VIEW_CHANNEL, u)
  } : l
}