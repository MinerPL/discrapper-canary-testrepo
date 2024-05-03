"use strict";
n.r(t), n.d(t, {
  __import__useLazyAPIPromise: function() {
    return R
  },
  default: function() {
    return P
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
  x = n("981888"),
  I = n("709054"),
  S = n("897285"),
  p = n("518756"),
  T = n("554747"),
  L = n("710679"),
  M = n("74562"),
  j = n("576749"),
  G = n("765305"),
  y = n("981631"),
  k = n("490897"),
  A = n("689938"),
  D = n("758227");
let R = x.default;

function P(e) {
  let {
    transitionState: t,
    onClose: i,
    guildId: x
  } = e, R = (0, h.useUID)(), P = (0, d.useStateFromStores)([g.default], () => g.default.getGuild(x)), U = (0, p.default)(null == P ? void 0 : P.id), V = (0, T.default)(x), b = a.useRef(v.default.ackMessageId(x, k.ReadStateTypes.GUILD_EVENT)), F = (0, j.default)();
  return a.useEffect(() => {
    V.forEach(e => S.default.getGuildEventUserCounts(x, e.id, [])), S.default.getGuildEventsForCurrentUser(x)
  }, [V, x]), a.useEffect(() => {
    let e = g.default.getGuild(x);
    if (!(null == e ? void 0 : e.hasFeature(y.GuildFeatures.HUB))) return;
    let {
      showHubEventsList: t
    } = c.default.getCurrentConfig({
      guildId: x,
      location: "d3755f_1"
    });
    if (!t) return;
    let n = f.default.getDefaultChannel(x);
    null != n && o.fetchDirectoryEntries(n.id)
  }, [x]), a.useEffect(() => {
    C.default.track(y.AnalyticEvents.OPEN_MODAL, {
      type: G.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: x,
      guild_events_count: V.length
    })
  }, []), a.useEffect(() => {
    u()(V).map(e => e.creator_id).filter(_.isNotNullish).uniq().forEach(e => {
      E.default.requestMember(x, e)
    })
  }, [x, V]), a.useEffect(() => {
    null != x && (0, r.ackGuildFeature)(x, k.ReadStateTypes.GUILD_EVENT)
  }, [x]), (0, l.jsxs)(s.ModalRoot, {
    size: s.ModalSize.MEDIUM,
    transitionState: t,
    "aria-labelledby": R,
    children: [(0, l.jsxs)(s.ModalHeader, {
      className: D.header,
      children: [(0, l.jsx)(m.default, {
        className: D.icon
      }), (0, l.jsx)(s.Heading, {
        id: R,
        variant: "heading-md/semibold",
        children: V.length > 0 ? A.default.Messages.GUILD_EVENTS_PLURAL.format({
          number: V.length
        }) : A.default.Messages.GUILD_EVENTS
      }), U && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: D.divider,
          children: "|"
        }), (0, l.jsx)(s.Button, {
          size: s.Button.Sizes.MIN,
          onClick: () => {
            (0, s.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("58023"), n.e("42632")]).then(n.bind(n, "779250"));
              return t => (0, l.jsx)(e, {
                ...t,
                guildId: x
              })
            }, F)
          },
          innerClassName: D.button,
          children: A.default.Messages.SCHEDULE_EVENT
        })]
      }), (0, l.jsx)(s.Clickable, {
        onClick: i,
        className: D.iconButton,
        "aria-label": A.default.Messages.CLOSE,
        children: (0, l.jsx)(N.default, {
          className: D.icon
        })
      })]
    }), (0, l.jsx)(s.ModalContent, {
      className: D.content,
      children: V.length > 0 ? V.map(e => (0, l.jsx)(L.default, {
        guildEvent: e,
        guildId: x,
        onActionTaken: i,
        isNew: null != b.current && I.default.compare(e.id, b.current) > 0
      }, e.id)) : (0, l.jsx)(M.default, {
        guildId: x,
        onClose: i
      })
    })]
  })
}