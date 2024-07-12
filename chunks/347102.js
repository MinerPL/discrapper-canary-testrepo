n.d(t, {
  e: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var a = n(693789),
  l = n(493683),
  s = n(596739),
  r = n(699516),
  o = n(280006),
  c = n(799352),
  d = n(689938);

function u(e) {
  let {
channel: t
  } = e;
  if (!(0, o.f)({
  location: 'blocked_user_banner'
}) || null == t || !t.isGroupDM() || t.blockedUserWarningDismissed)
return null;
  let n = t.recipients.filter(e => r.Z.isBlocked(e));
  if (0 === n.length)
return null;
  let u = n.length > 1 ? d.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_BANNER : d.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_BANNER,
h = () => {
  (0, c.O)(t.id);
},
p = [{
    text: d.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE,
    color: a.zx.Colors.BRAND,
    onclick: () => {
      h(), l.Z.closePrivateChannel(t.id, !0, !0);
    },
    size: a.zx.Sizes.MEDIUM
  },
  {
    text: d.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY,
    color: a.zx.Colors.PRIMARY,
    onclick: h,
    size: a.zx.Sizes.MEDIUM
  }
];
  return (0, i.jsx)(s.W, {
header: u,
description: d.Z.Messages.GDM_BLOCKED_USER_WARNING_BANNER_DESCRIPTION,
buttons: p,
dismissible: !1
  });
}