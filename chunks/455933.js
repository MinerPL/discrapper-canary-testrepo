"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
});
var l = n("37983");
n("884691");
var u = n("398351"),
  a = n.n(u),
  d = n("866227"),
  i = n.n(d),
  s = n("730290"),
  r = n("446674"),
  o = n("77078"),
  c = n("49671"),
  E = n("884351"),
  f = n("305961"),
  _ = n("773336"),
  T = n("398604"),
  S = n("466148"),
  v = n("189443"),
  g = n("822516"),
  I = n("745049"),
  N = n("49111"),
  m = n("782340");
let M = "YYYYMMDDTHHmmss",
  h = "YYYY-MM-DDTHH:mm:ss",
  p = /RRULE:.*/;

function D(e, t, n, u) {
  var d, D, R;
  let C;
  let O = (0, r.useStateFromStores)([T.default], () => T.default.isActive(e)),
    {
      startTime: A,
      endTime: L
    } = (0, S.default)(null != e ? e : "", u),
    G = (0, r.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
    y = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
  if (O || null == G) return null;
  C = G.entity_type === I.GuildScheduledEventEntityTypes.EXTERNAL ? G.entity_metadata.location : null != n && null != y ? m.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
    channelName: n.name,
    guildName: y.name
  }) : m.default.Messages.NOTIFICATION_TITLE_DISCORD;
  let x = i(G.scheduled_start_time),
    V = null != G.scheduled_end_time ? i(G.scheduled_end_time) : x,
    U = null != G.description && "" !== G.description ? E.default.unparse(G.description, null !== (d = null == n ? void 0 : n.id) && void 0 !== d ? d : N.EMPTY_STRING_SNOWFLAKE_ID, !0) : "",
    P = (0, v.recurrenceRuleFromServer)(G.recurrence_rule),
    b = null != P ? (0, g.getRRule)(P) : null,
    w = null !== (D = i(A)) && void 0 !== D ? D : x,
    F = null !== (R = i(null != L ? L : A)) && void 0 !== R ? R : x,
    H = () => {
      let e = a();
      e.createEvent({
        start: x,
        end: V,
        summary: G.name,
        description: U,
        location: C,
        repeating: b
      }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
    };
  return (0, l.jsxs)(o.MenuItem, {
    id: m.default.Messages.ADD_TO_CALENDAR,
    label: m.default.Messages.ADD_TO_CALENDAR,
    action: H,
    children: [(0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      label: m.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      action: () => {
        var e;
        let t = null == b ? void 0 : b.toString(),
          n = {
            text: G.name,
            dates: "".concat(x.format(M), "/").concat(V.format(M)),
            details: U,
            action: "TEMPLATE",
            location: C,
            recur: null != t ? null === (e = p.exec(t)) || void 0 === e ? void 0 : e[0] : void 0
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, s.stringify)(n));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.DOWNLOAD_ICS,
      label: m.default.Messages.DOWNLOAD_ICS,
      action: H
    }), (0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_YAHOO,
      label: m.default.Messages.ADD_TO_YAHOO,
      action: () => {
        let e = {
            v: 60,
            title: G.name,
            st: w.format(M),
            et: F.format(M),
            desc: U,
            in_loc: C
          },
          t = "https://calendar.yahoo.com/?".concat((0, s.stringify)(e));
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
            enddt: F.format(h),
            subject: G.name,
            body: U,
            location: C,
            allday: !1
          },
          t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, s.stringify)(e));
        window.open(t, "_blank")
      }
    })]
  })
}