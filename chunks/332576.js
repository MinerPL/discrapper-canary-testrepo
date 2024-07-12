r.d(n, {
  Z: function() {
return c;
  }
});
var i = r(735250);
r(470079);
var s = r(442837),
  a = r(481060),
  t = r(475179),
  l = r(358221),
  d = r(979651),
  o = r(981631),
  u = r(689938);

function c(e, n) {
  let r = (0, s.e7)([l.Z], () => e === l.Z.getSelectedParticipantId(n), [
n,
e
  ]);
  return (0, s.e7)([
l.Z,
d.Z
  ], () => {
let r = d.Z.isInChannel(n, e) && d.Z.hasVideo(n),
  i = l.Z.getLayout(n),
  s = i === o.AEg.MINIMUM || i === o.AEg.NORMAL;
return !r || s;
  }, [
n,
e
  ]) ? null : (0, i.jsx)(a.MenuItem, {
id: 'focus-video',
label: r ? u.Z.Messages.UNFOCUS_PARTICIPANT : u.Z.Messages.FOCUS_PARTICIPANT,
action: () => t.Z.selectParticipant(n, r ? null : e)
  });
}