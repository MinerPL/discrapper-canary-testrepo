"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("526812"),
  i = n("404607"),
  r = n("670902"),
  u = n("339792"),
  o = n("680986"),
  d = n("258039"),
  c = n("821343"),
  f = n("68238"),
  h = n("664336"),
  m = n("782340");

function p(e) {
  var t, n;
  let {
    channel: p
  } = e, E = (0, o.useCanManageChannel)(p), g = (0, l.useStateFromStores)([s.default], () => s.default.hasHidden(p.id)), S = (0, d.isOnboardingDismissed)(p.id), {
    sortOrder: C,
    tagFilter: _
  } = (0, u.useForumChannelStore)(p.id), I = (0, l.useStateFromStores)([r.default, c.default], () => {
    let e = r.default.getThreadIds(p.id, C, _);
    if (e.length > 0) return !0;
    let t = c.default.getThreads(p.id, C, _);
    return !!(t.length > 0) || !1
  }, [p.id, C, _]), T = p.isMediaChannel();
  if (!E || S || T && I) return null;
  let v = (t = g, n = T, t ? n ? m.default.Messages.MEDIA_CHANNEL_ADMIN_EDUCATION_SHOW : m.default.Messages.FORUM_CHANNEL_ONBOARDING_SHOW : n ? m.default.Messages.MEDIA_CHANNEL_ADMIN_EDUCATION_HIDE : m.default.Messages.FORUM_CHANNEL_ONBOARDING_HIDE);
  return (0, a.jsx)(h.Icon, {
    tooltip: v,
    icon: f.default,
    onClick: () => i.default.hideAdminOnboarding(p.id, !g),
    selected: !g
  })
}