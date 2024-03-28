"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
});
var l = n("735250");
n("470079");
var u = n("352811"),
  a = n.n(u),
  s = n("913527"),
  d = n.n(s),
  i = n("593473"),
  r = n("442837"),
  o = n("481060"),
  c = n("579806"),
  E = n("957730"),
  f = n("430824"),
  _ = n("358085"),
  T = n("924301"),
  S = n("79874"),
  N = n("236373"),
  v = n("854698"),
  I = n("765305"),
  g = n("981631"),
  m = n("689938");
let M = "YYYYMMDDTHHmmss",
  h = "YYYY-MM-DDTHH:mm:ss",
  p = /RRULE:.*/;

function D(e, t, n, u) {
  var s, D, R;
  let O;
  let C = (0, r.useStateFromStores)([T.default], () => T.default.isActive(e)),
    {
      startTime: A,
      endTime: L
    } = (0, S.default)(null != e ? e : "", u),
    G = (0, r.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
    y = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
  if (C || null == G) return null;
  O = G.entity_type === I.GuildScheduledEventEntityTypes.EXTERNAL ? G.entity_metadata.location : null != n && null != y ? m.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
    channelName: n.name,
    guildName: y.name
  }) : m.default.Messages.NOTIFICATION_TITLE_DISCORD;
  let P = d()(G.scheduled_start_time),
    V = null != G.scheduled_end_time ? d()(G.scheduled_end_time) : P,
    x = null != G.description && "" !== G.description ? E.default.unparse(G.description, null !== (s = null == n ? void 0 : n.id) && void 0 !== s ? s : g.EMPTY_STRING_SNOWFLAKE_ID, !0) : "",
    U = (0, N.recurrenceRuleFromServer)(G.recurrence_rule),
    b = null != U ? (0, v.getRRule)(U) : null,
    w = null !== (D = d()(A)) && void 0 !== D ? D : P,
    H = null !== (R = d()(null != L ? L : A)) && void 0 !== R ? R : P,
    j = () => {
      let e = a()();
      e.createEvent({
        start: P,
        end: V,
        summary: G.name,
        description: x,
        location: O,
        repeating: b
      }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
    };
  return (0, l.jsxs)(o.MenuItem, {
    id: m.default.Messages.ADD_TO_CALENDAR,
    label: m.default.Messages.ADD_TO_CALENDAR,
    action: j,
    children: [(0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      label: m.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      action: () => {
        var e;
        let t = null == b ? void 0 : b.toString(),
          n = {
            text: G.name,
            dates: "".concat(P.format(M), "/").concat(V.format(M)),
            details: x,
            action: "TEMPLATE",
            location: O,
            recur: null != t ? null === (e = p.exec(t)) || void 0 === e ? void 0 : e[0] : void 0
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, i.stringify)(n));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.DOWNLOAD_ICS,
      label: m.default.Messages.DOWNLOAD_ICS,
      action: j
    }), (0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_YAHOO,
      label: m.default.Messages.ADD_TO_YAHOO,
      action: () => {
        let e = {
            v: 60,
            title: G.name,
            st: w.format(M),
            et: H.format(M),
            desc: x,
            in_loc: O
          },
          t = "https://calendar.yahoo.com/?".concat((0, i.stringify)(e));
        window.open(t, "_blank")
      }
    }), (0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_OUTLOOK,
      label: m.default.Messages.ADD_TO_OUTLOOK,
      action: () => {
        let e = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: w.format(h),
            enddt: H.format(h),
            subject: G.name,
            body: x,
            location: O,
            allday: !1
          },
          t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, i.stringify)(e));
        window.open(t, "_blank")
      }
    })]
  })
}