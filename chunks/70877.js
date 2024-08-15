t.d(n, {
  Z: function() {
return A;
  }
});
var l = t(735250);
t(470079);
var i = t(360963),
  u = t.n(i),
  s = t(913527),
  r = t.n(s),
  a = t(593473),
  d = t(442837),
  E = t(481060),
  o = t(579806),
  c = t(957730),
  _ = t(430824),
  T = t(358085),
  N = t(924301),
  I = t(79874),
  Z = t(236373),
  f = t(854698),
  g = t(765305),
  M = t(981631),
  D = t(689938);
let v = 'YYYYMMDDTHHmmss',
  S = 'YYYY-MM-DDTHH:mm:ss',
  O = /RRULE:.*/;

function A(e, n, t, i) {
  var s, A, m;
  let C;
  let h = (0, d.e7)([N.ZP], () => N.ZP.isActive(e)),
P = (0, I.zI)(null != e ? e : '', i),
R = (0, d.e7)([N.ZP], () => N.ZP.getGuildScheduledEvent(e), [e]),
L = (0, d.e7)([_.Z], () => _.Z.getGuild(n), [n]);
  if (h || null == P || null == R)
return null;
  C = R.entity_type === g.WX.EXTERNAL ? R.entity_metadata.location : null != t && null != L ? D.Z.Messages.CALENDAR_CHANNEL_LOCATION.format({
channelName: t.name,
guildName: L.name
  }) : D.Z.Messages.NOTIFICATION_TITLE_DISCORD;
  let p = r()(R.scheduled_start_time),
V = null != R.scheduled_end_time ? r()(R.scheduled_end_time) : p,
U = null != R.description && '' !== R.description ? c.ZP.unparse(R.description, null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : M.lds, !0) : '',
G = (0, Z.KV)(R.recurrence_rule),
b = null != G ? (0, f.Ho)(G) : null,
{
  startTime: x,
  endTime: y
} = P,
w = null !== (A = r()(x)) && void 0 !== A ? A : p,
j = null !== (m = r()(null != y ? y : x)) && void 0 !== m ? m : p,
H = () => {
  let e = u()();
  e.createEvent({
    start: p,
    end: V,
    summary: R.name,
    description: U,
    location: C,
    repeating: b
  }), T.isPlatformEmbedded ? o.Z.fileManager.saveWithDialog(e.toString(), 'discord-event.ics') : window.open(e.toURL(), '_blank');
};
  return (0, l.jsxs)(E.MenuItem, {
id: D.Z.Messages.ADD_TO_CALENDAR,
label: D.Z.Messages.ADD_TO_CALENDAR,
action: H,
children: [
  (0, l.jsx)(E.MenuItem, {
    id: D.Z.Messages.ADD_TO_GOOGLE_CALENDAR,
    label: D.Z.Messages.ADD_TO_GOOGLE_CALENDAR,
    action: () => {
      var e;
      let n = null == b ? void 0 : b.toString(),
        t = {
          text: R.name,
          dates: ''.concat(p.format(v), '/').concat(V.format(v)),
          details: U,
          action: 'TEMPLATE',
          location: C,
          recur: null != n ? null === (e = O.exec(n)) || void 0 === e ? void 0 : e[0] : void 0
        },
        l = 'https://calendar.google.com/calendar/render?'.concat((0, a.stringify)(t));
      window.open(l, '_blank');
    }
  }),
  (0, l.jsx)(E.MenuItem, {
    id: D.Z.Messages.DOWNLOAD_ICS,
    label: D.Z.Messages.DOWNLOAD_ICS,
    action: H
  }),
  (0, l.jsx)(E.MenuItem, {
    id: D.Z.Messages.ADD_TO_YAHOO,
    label: D.Z.Messages.ADD_TO_YAHOO,
    action: () => {
      let e = {
          v: 60,
          title: R.name,
          st: w.format(v),
          et: j.format(v),
          desc: U,
          in_loc: C
        },
        n = 'https://calendar.yahoo.com/?'.concat((0, a.stringify)(e));
      window.open(n, '_blank');
    }
  }),
  (0, l.jsx)(E.MenuItem, {
    id: D.Z.Messages.ADD_TO_OUTLOOK,
    label: D.Z.Messages.ADD_TO_OUTLOOK,
    action: () => {
      let e = {
          path: '/calendar/action/compose',
          rru: 'addevent',
          startdt: w.format(S),
          enddt: j.format(S),
          subject: R.name,
          body: U,
          location: C,
          allday: !1
        },
        n = 'https://outlook.live.com/calendar/0/deeplink/compose?'.concat((0, a.stringify)(e));
      window.open(n, '_blank');
    }
  })
]
  });
}