n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(692547),
  s = n(481060),
  l = n(576749),
  r = n(688641),
  o = n(689938);

function c(e) {
  let {
className: t,
guildId: c
  } = e, u = (0, l.Z)();
  return (0, i.jsx)(r.Z, {
className: t,
icon: (0, i.jsx)(s.CalendarIcon, {
  size: 'custom',
  color: 'currentColor',
  height: 20,
  width: 20
}),
color: a.Z.unsafe_rawColors.BRAND_500.css,
title: o.Z.Messages.SCHEDULE_EVENT,
description: o.Z.Messages.SCHEDULE_EVENT_DESCRIPTION,
onClick: function() {
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('22347'),
      n.e('58023'),
      n.e('93567')
    ]).then(n.bind(n, 779250));
    return t => (0, i.jsx)(e, {
      ...t,
      guildId: c
    });
  }, u);
}
  });
}