"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("961675"),
  i = n("883429"),
  r = n("238349"),
  o = n("109434"),
  u = n("456269"),
  d = n("432771"),
  c = n("920303"),
  f = n("41542"),
  h = n("502568"),
  m = n("689938");

function p(e) {
  var t, n;
  let {
    channel: p
  } = e, E = (0, u.useCanManageChannel)(p), C = (0, l.useStateFromStores)([s.default], () => s.default.hasHidden(p.id)), g = (0, d.isOnboardingDismissed)(p.id), {
    sortOrder: S,
    tagFilter: _
  } = (0, o.useForumChannelStore)(p.id), T = (0, l.useStateFromStores)([r.default, c.default], () => !!(r.default.getThreadIds(p.id, S, _).length > 0) || !!(c.default.getThreads(p.id, S, _).length > 0) || !1, [p.id, S, _]), I = p.isMediaChannel();
  if (!E || g || I && T) return null;
  let A = (t = C, n = I, t ? n ? m.default.Messages.MEDIA_CHANNEL_ADMIN_EDUCATION_SHOW : m.default.Messages.FORUM_CHANNEL_ONBOARDING_SHOW : n ? m.default.Messages.MEDIA_CHANNEL_ADMIN_EDUCATION_HIDE : m.default.Messages.FORUM_CHANNEL_ONBOARDING_HIDE);
  return (0, a.jsx)(h.Icon, {
    tooltip: A,
    icon: f.default,
    onClick: () => i.default.hideAdminOnboarding(p.id, !C),
    selected: !C
  })
}