t.d(n, {
  Z: function() {
return c;
  }
});
var i = t(735250);
t(470079);
var a = t(852229),
  u = t(399606),
  r = t(481060),
  l = t(228392),
  d = t(592125),
  s = t(934415),
  o = t(981631),
  _ = t(689938);

function c(e, n, t) {
  let c = (0, u.e7)([d.Z], () => d.Z.getChannel(e.parent_id));
  return (0, i.jsx)(r.MenuItem, {
id: 'channel-copy-link',
label: _.Z.Messages.COPY_LINK,
action: () => {
  e.isForumPost() && (0, l.B)({
    postId: e.id,
    location: {
      section: o.jXE.CONTEXT_MENU
    }
  }), (0, a.J)((0, s.EO)(e, c, n, t));
}
  });
}