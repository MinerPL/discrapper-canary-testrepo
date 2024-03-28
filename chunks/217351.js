"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
});
var l = a("735250"),
  n = a("470079"),
  s = a("392711"),
  i = a.n(s),
  d = a("913527"),
  r = a.n(d),
  u = a("524437"),
  o = a("481060"),
  c = a("131388"),
  f = a("605236"),
  m = a("924301"),
  h = a("554747"),
  g = a("458513"),
  E = a("369701"),
  _ = a("689938"),
  I = a("520064");

function x(e) {
  let {
    guild: t
  } = e, s = (0, c.default)(E.COLLAPSED_SIZE_MEDIA_QUERY), d = (0, h.default)(t.id), x = n.useMemo(() => {
    let e = d.filter(e => (0, m.isGuildScheduledEventActive)(e));
    return s && e.length > 0 ? i().head(e) : i().chain(d).filter(e => !(0, m.isGuildScheduledEventActive)(e)).minBy(e => r()(e.scheduled_start_time)).value()
  }, [d, s]);
  if (null == x) return null;
  async function S() {
    await (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("22347"), a.e("56236")]).then(a.bind(a, "17671"));
      return a => (0, l.jsx)(e, {
        ...a,
        guildId: t.id
      })
    }), (0, f.markDismissibleContentAsDismissed)(u.DismissibleContent.GUILD_HEADER_EVENT_UPSELL)
  }
  return (0, l.jsxs)("div", {
    className: I.container,
    children: [(0, l.jsxs)("div", {
      className: I.header,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: s ? _.default.Messages.GUILD_EVENTS : _.default.Messages.GUILD_HOME_EVENTS_TITLE
      }), d.length >= 2 ? (0, l.jsx)(o.Clickable, {
        onClick: S,
        children: (0, l.jsx)(o.Text, {
          className: I.showEvents,
          variant: "text-sm/normal",
          children: _.default.Messages.GUILD_HOME_SEE_ALL.format({
            count: d.length
          })
        })
      }) : null]
    }), (0, l.jsx)("div", {
      className: I.events,
      children: (0, l.jsx)(g.default, {
        event: x,
        isInList: !1
      })
    })]
  })
}