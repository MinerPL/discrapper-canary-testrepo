t.d(n, {
  Z: function() {
return o;
  }
});
var u = t(735250);
t(470079);
var s = t(442837),
  r = t(481060),
  c = t(92114),
  i = t(9156),
  a = t(621600),
  d = t(689938);

function o(e) {
  let n = (0, s.e7)([i.ZP], () => i.ZP.isMuteScheduledEventsEnabled(e), [e]);
  return (0, u.jsx)(r.MenuCheckboxItem, {
id: 'mute-events',
label: d.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
action: () => {
  var t;
  return t = {
    mute_scheduled_events: !n
  }, void c.Z.updateGuildNotificationSettings(e, t, a.UE.mutedEvents(t.mute_scheduled_events));
},
checked: n
  });
}