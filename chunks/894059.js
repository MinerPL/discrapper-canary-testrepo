t.d(n, {
  Z: function() {
return r;
  }
});
var a = t(735250);
t(470079);
var l = t(481060),
  i = t(518756),
  s = t(576749),
  o = t(689938);

function r(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
r = (0, i.Z)(e),
d = (0, s.Z)();
  return r ? (0, a.jsx)(l.MenuItem, {
id: 'create-event',
label: o.Z.Messages.SCHEDULE_EVENT,
icon: n ? l.CalendarPlusIcon : void 0,
action: () => {
  (0, l.openModalLazy)(async () => {
    let {
      default: n
    } = await Promise.all([
      t.e('18543'),
      t.e('53115'),
      t.e('22347'),
      t.e('58023'),
      t.e('29999')
    ]).then(t.bind(t, 779250));
    return t => (0, a.jsx)(n, {
      ...t,
      guildId: e
    });
  }, d);
}
  }) : null;
}