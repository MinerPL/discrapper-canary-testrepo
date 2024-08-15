n.d(t, {
  U: function() {
return s;
  },
  Z: function() {
return o;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(689938);

function s(e) {
  return null == e || null == e.end_time ? null : a.Z.Messages.MUTED_UNTIL_TIME.format({
endTime: new Date(e.end_time).toLocaleString(a.Z.getLocale(), {
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit'
})
  });
}

function o(e) {
  let {
muteConfig: t,
className: n
  } = e, a = s(t);
  return null != a ? (0, r.jsx)(i.Text, {
variant: 'text-xs/normal',
color: 'text-muted',
className: n,
children: a
  }) : null;
}