n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var a = n(6025),
  s = n(433355),
  r = n(626135),
  l = n(585483),
  o = n(922409),
  c = n(545724),
  d = n(749405),
  u = n(981631);

function _(e) {
  let {
index: t,
className: n,
channel: _,
user: h,
hasSingleMessageRequest: E
  } = e, {
channelId: I
  } = (0, o._)();
  return (0, i.jsx)(c.Z, {
index: t,
className: n,
isFocused: I === _.id,
channel: _,
user: h,
onClick: e => {
  e.stopPropagation(), a.Z.openPrivateChannelAsSidebar({
    channelId: _.id,
    baseChannelId: s.uZ,
    hasSingleMessageRequest: E
  }), r.default.track(u.rMx.MESSAGE_REQUEST_PREVIEW_VIEWED, {
    is_spam: !1,
    channel_id: _.id,
    other_user_id: h.id
  }), setTimeout(() => {
    l.S.dispatch(u.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: _.id
    });
  }, 0);
},
children: e => (0, i.jsx)(d.C, {
  active: e,
  user: h,
  channel: _
})
  });
}