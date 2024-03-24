"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("446674"),
  o = n("272030"),
  u = n("630273"),
  d = n("823704"),
  c = n("662285"),
  f = n("925758"),
  E = n("27618"),
  h = n("697218"),
  _ = n("663449"),
  C = n("449008"),
  S = n("782340");
class I extends s.PureComponent {
  hasParty(e) {
    return e.length > 1
  }
  handleStopListening() {
    (0, d.default)()
  }
  render() {
    let {
      currentUser: e,
      host: t,
      party: n
    } = this.props;
    return this.hasParty(n) && null != e ? (0, a.jsx)(_.default, {
      currentUser: e,
      host: t,
      party: n,
      renderOverflowPopout: this.renderOverflowPopout,
      onStopListening: this.handleStopListening,
      onUserContextMenu: this.handleUserContextMenu
    }) : null
  }
  constructor(...e) {
    super(...e), this.handleUserContextMenu = (e, t) => {
      (0, o.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("406784").then(n.bind(n, "406784"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t
        })
      })
    }, this.renderOverflowPopout = () => {
      let {
        party: e
      } = this.props;
      return (0, a.jsx)(u.default, {
        party: e,
        header: S.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENING_ALONG_COUNT.format({
          count: e.length
        })
      })
    }
  }
}
var m = r.default.connectStores([c.default, h.default, E.default, f.default], () => {
  let e, t;
  let n = c.default.getSyncingWith(),
    a = c.default.getActivity(),
    s = h.default.getCurrentUser(),
    l = [];
  if (null != n ? (e = h.default.getUser(n.userId), t = n.partyId) : null != a && null != a.party && null != a.party.id && (e = s, t = a.party.id), null != t) {
    var r;
    l = i(Array.from(null !== (r = f.default.getParty(t)) && void 0 !== r ? r : [])).map(e => h.default.getUser(e)).filter(C.isNotNullish).orderBy([t => null == e || e.id === t.id, e => E.default.isFriend(e.id)], ["desc", "desc"]).value()
  }
  return {
    currentUser: s,
    host: e,
    party: l
  }
})(I)