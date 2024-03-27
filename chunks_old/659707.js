"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
});
var l = n("37983"),
  u = n("884691"),
  i = n("917351"),
  a = n.n(i),
  r = n("446674"),
  d = n("77078"),
  s = n("267363"),
  o = n("15433"),
  c = n("27978"),
  f = n("923959"),
  E = n("124948"),
  v = n("305961"),
  g = n("660478"),
  S = n("476765"),
  h = n("943232"),
  N = n("945330"),
  _ = n("599110"),
  C = n("449008"),
  I = n("299039"),
  T = n("933326"),
  m = n("334683"),
  p = n("534222"),
  x = n("473031"),
  G = n("266763"),
  D = n("842672"),
  L = n("745049"),
  R = n("49111"),
  M = n("133335"),
  y = n("782340"),
  A = n("290487");

function U(e) {
  let {
    transitionState: t,
    onClose: i,
    guildId: U
  } = e, V = (0, S.useUID)(), O = (0, r.useStateFromStores)([v.default], () => v.default.getGuild(U)), P = (0, m.default)(null == O ? void 0 : O.id), j = (0, p.default)(U), F = u.useRef(g.default.ackMessageId(U, M.ReadStateTypes.GUILD_EVENT)), k = (0, D.default)();
  return u.useEffect(() => {
    j.forEach(e => T.default.getGuildEventUserCounts(U, e.id, [])), T.default.getGuildEventsForCurrentUser(U)
  }, [j, U]), u.useEffect(() => {
    let e = v.default.getGuild(U);
    if (!(null == e ? void 0 : e.hasFeature(R.GuildFeatures.HUB))) return;
    let {
      showHubEventsList: t
    } = c.default.getCurrentConfig({
      guildId: U,
      location: "d3755f_1"
    });
    if (!t) return;
    let n = f.default.getDefaultChannel(U);
    null != n && o.fetchDirectoryEntries(n.id)
  }, [U]), u.useEffect(() => {
    _.default.track(R.AnalyticEvents.OPEN_MODAL, {
      type: L.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: U,
      guild_events_count: j.length
    })
  }, []), u.useEffect(() => {
    a(j).map(e => e.creator_id).filter(C.isNotNullish).uniq().forEach(e => {
      E.default.requestMember(U, e)
    })
  }, [U, j]), u.useEffect(() => {
    null != U && (0, s.ackGuildFeature)(U, M.ReadStateTypes.GUILD_EVENT)
  }, [U]), (0, l.jsxs)(d.ModalRoot, {
    size: d.ModalSize.MEDIUM,
    transitionState: t,
    "aria-labelledby": V,
    children: [(0, l.jsxs)(d.ModalHeader, {
      className: A.header,
      children: [(0, l.jsx)(h.default, {
        className: A.icon
      }), (0, l.jsx)(d.Heading, {
        id: V,
        variant: "heading-md/semibold",
        children: j.length > 0 ? y.default.Messages.GUILD_EVENTS_PLURAL.format({
          number: j.length
        }) : y.default.Messages.GUILD_EVENTS
      }), P && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: A.divider,
          children: "|"
        }), (0, l.jsx)(d.Button, {
          size: d.Button.Sizes.MIN,
          onClick: () => {
            (0, d.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("590942").then(n.bind(n, "590942"));
              return t => (0, l.jsx)(e, {
                ...t,
                guildId: U
              })
            }, k)
          },
          innerClassName: A.button,
          children: y.default.Messages.SCHEDULE_EVENT
        })]
      }), (0, l.jsx)(d.Clickable, {
        onClick: i,
        className: A.iconButton,
        "aria-label": y.default.Messages.CLOSE,
        children: (0, l.jsx)(N.default, {
          className: A.icon
        })
      })]
    }), (0, l.jsx)(d.ModalContent, {
      className: A.content,
      children: j.length > 0 ? j.map(e => (0, l.jsx)(x.default, {
        guildEvent: e,
        guildId: U,
        onActionTaken: i,
        isNew: null != F.current && I.default.compare(e.id, F.current) > 0
      }, e.id)) : (0, l.jsx)(G.default, {
        guildId: U,
        onClose: i
      })
    })]
  })
}