n.d(t, {
  e: function() {
return m;
  }
});
var i = n(735250);
n(470079);
var a = n(693789),
  s = n(493683),
  l = n(596739),
  r = n(699516),
  o = n(626135),
  c = n(280006),
  u = n(799352),
  d = n(110223),
  h = n(981631),
  p = n(689938);

function m(e) {
  let {
channel: t
  } = e;
  if (!(0, c.f)({
  location: 'blocked_user_banner'
}) || null == t || !t.isGroupDM() || t.blockedUserWarningDismissed)
return null;
  let n = t.recipients.filter(e => r.Z.isBlocked(e));
  if (0 === n.length)
return null;
  let m = n.length > 1 ? p.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_BANNER : p.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_BANNER,
_ = [{
    text: p.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE,
    color: a.zx.Colors.BRAND,
    onclick: () => {
      (0, u.O)(t.id), s.Z.closePrivateChannel(t.id, !0, !0), o.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: d.q.CLICK_TO_LEAVE,
        channel_id: t.id,
        warning_medium: d.X.BANNER,
        blocked_user_ids: n
      });
    },
    size: a.zx.Sizes.MEDIUM
  },
  {
    text: p.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY,
    color: a.zx.Colors.PRIMARY,
    onclick: () => {
      (0, u.O)(t.id), o.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: d.q.CLICK_TO_STAY,
        channel_id: t.id,
        warning_medium: d.X.BANNER,
        blocked_user_ids: n
      });
    },
    size: a.zx.Sizes.MEDIUM
  }
];
  return (0, i.jsx)(l.W, {
header: m,
description: p.Z.Messages.GDM_BLOCKED_USER_WARNING_BANNER_DESCRIPTION,
buttons: _,
dismissible: !1
  });
}