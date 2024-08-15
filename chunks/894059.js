t.d(n, {
  Z: function() {
return u;
  }
});
var a = t(735250);
t(470079);
var i = t(481060),
  l = t(518756),
  s = t(576749),
  o = t(689938);

function u(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
u = (0, l.Z)(e),
r = (0, s.Z)();
  return u ? (0, a.jsx)(i.MenuItem, {
id: 'create-event',
label: o.Z.Messages.SCHEDULE_EVENT,
icon: n ? i.CalendarPlusIcon : void 0,
action: () => {
  (0, i.openModalLazy)(async () => {
    let {
      default: n
    } = await Promise.all([
      t.e('18543'),
      t.e('53115'),
      t.e('22347'),
      t.e('58023'),
      t.e('6719')
    ]).then(t.bind(t, 779250));
    return t => (0, a.jsx)(n, {
      ...t,
      guildId: e
    });
  }, r);
}
  }) : null;
}