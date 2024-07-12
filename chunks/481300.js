t.d(n, {
  Z: function() {
return o;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  r = t(163268),
  l = t(689938);

function o(e, n) {
  return null != n && (0, r.KP)({
type: r.lJ.GenericMedia,
media: n
  }, (0, r.HH)(e)) ? (0, i.jsx)(a.MenuItem, {
id: 'report-image-false-positive',
label: l.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
action: () => {
  (0, a.openModalLazy)(async () => {
    let {
      default: a
    } = await t(788679);
    return t => (0, i.jsx)(a, {
      channelId: e.channel_id,
      messageId: e.id,
      mediaItemUrl: n.url,
      ...t
    });
  });
},
icon: a.ImageWarningIcon
  }, 'report-image-false-positive') : null;
}