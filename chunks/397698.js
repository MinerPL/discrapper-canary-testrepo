n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(776862),
  r = n(306680),
  l = n(626135),
  o = n(499254),
  c = n(827498),
  d = n(314734),
  u = n(981631);

function _(e) {
  let {
channel: t,
openInPopout: _,
analyticsLocation: E
  } = e;
  _ && (0, s.Z)(u.KJ3.CHANNEL_CALL_POPOUT);
  let I = _ ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
  (0, o.y)(c.ti.DISMISSED), (0, o._)(c._b.VOICE);
  let m = t.id,
T = r.ZP.hasUnread(m) || r.ZP.getMentionCount(m) > 0;
  return l.default.track(u.rMx.VOICE_PANEL_TAB_OPENED, {
tab: 'activities',
location: E,
source: c._b.VOICE,
is_chat_badged: T
  }), (0, a.openModalLazy)(async () => {
let {
  default: e
} = await Promise.all([
  n.e('64714'),
  n.e('23919'),
  n.e('79058')
]).then(n.bind(n, 743161));
return n => (0, i.jsx)(e, {
  channel: t,
  ...n
});
  }, {
modalKey: d.e9,
contextKey: I
  });
}