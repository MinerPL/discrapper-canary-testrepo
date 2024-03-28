"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
});
var l = n("735250"),
  a = n("470079"),
  i = n("392711"),
  u = n.n(i),
  d = n("442837"),
  s = n("481060"),
  r = n("45114"),
  o = n("597"),
  c = n("147754"),
  f = n("984933"),
  E = n("720202"),
  g = n("430824"),
  v = n("306680"),
  h = n("153124"),
  m = n("305878"),
  N = n("465670"),
  C = n("626135"),
  _ = n("823379"),
  x = n("709054"),
  I = n("897285"),
  p = n("518756"),
  S = n("554747"),
  T = n("710679"),
  L = n("74562"),
  M = n("576749"),
  j = n("765305"),
  G = n("981631"),
  k = n("490897"),
  y = n("689938"),
  A = n("248530");

function D(e) {
  let {
    transitionState: t,
    onClose: i,
    guildId: D
  } = e, R = (0, h.useUID)(), P = (0, d.useStateFromStores)([g.default], () => g.default.getGuild(D)), U = (0, p.default)(null == P ? void 0 : P.id), V = (0, S.default)(D), b = a.useRef(v.default.ackMessageId(D, k.ReadStateTypes.GUILD_EVENT)), F = (0, M.default)();
  return a.useEffect(() => {
    V.forEach(e => I.default.getGuildEventUserCounts(D, e.id, [])), I.default.getGuildEventsForCurrentUser(D)
  }, [V, D]), a.useEffect(() => {
    let e = g.default.getGuild(D);
    if (!(null == e ? void 0 : e.hasFeature(G.GuildFeatures.HUB))) return;
    let {
      showHubEventsList: t
    } = c.default.getCurrentConfig({
      guildId: D,
      location: "d3755f_1"
    });
    if (!t) return;
    let n = f.default.getDefaultChannel(D);
    null != n && o.fetchDirectoryEntries(n.id)
  }, [D]), a.useEffect(() => {
    C.default.track(G.AnalyticEvents.OPEN_MODAL, {
      type: j.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: D,
      guild_events_count: V.length
    })
  }, []), a.useEffect(() => {
    u()(V).map(e => e.creator_id).filter(_.isNotNullish).uniq().forEach(e => {
      E.default.requestMember(D, e)
    })
  }, [D, V]), a.useEffect(() => {
    null != D && (0, r.ackGuildFeature)(D, k.ReadStateTypes.GUILD_EVENT)
  }, [D]), (0, l.jsxs)(s.ModalRoot, {
    size: s.ModalSize.MEDIUM,
    transitionState: t,
    "aria-labelledby": R,
    children: [(0, l.jsxs)(s.ModalHeader, {
      className: A.header,
      children: [(0, l.jsx)(m.default, {
        className: A.icon
      }), (0, l.jsx)(s.Heading, {
        id: R,
        variant: "heading-md/semibold",
        children: V.length > 0 ? y.default.Messages.GUILD_EVENTS_PLURAL.format({
          number: V.length
        }) : y.default.Messages.GUILD_EVENTS
      }), U && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: A.divider,
          children: "|"
        }), (0, l.jsx)(s.Button, {
          size: s.Button.Sizes.MIN,
          onClick: () => {
            (0, s.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("58023"), n.e("78884")]).then(n.bind(n, "779250"));
              return t => (0, l.jsx)(e, {
                ...t,
                guildId: D
              })
            }, F)
          },
          innerClassName: A.button,
          children: y.default.Messages.SCHEDULE_EVENT
        })]
      }), (0, l.jsx)(s.Clickable, {
        onClick: i,
        className: A.iconButton,
        "aria-label": y.default.Messages.CLOSE,
        children: (0, l.jsx)(N.default, {
          className: A.icon
        })
      })]
    }), (0, l.jsx)(s.ModalContent, {
      className: A.content,
      children: V.length > 0 ? V.map(e => (0, l.jsx)(T.default, {
        guildEvent: e,
        guildId: D,
        onActionTaken: i,
        isNew: null != b.current && x.default.compare(e.id, b.current) > 0
      }, e.id)) : (0, l.jsx)(L.default, {
        guildId: D,
        onClose: i
      })
    })]
  })
}