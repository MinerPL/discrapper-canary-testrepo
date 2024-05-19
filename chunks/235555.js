"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("442837"),
  o = n("239091"),
  u = n("476669"),
  d = n("524331"),
  c = n("768419"),
  f = n("831506"),
  E = n("699516"),
  h = n("594174"),
  _ = n("643126"),
  C = n("823379"),
  m = n("689938");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends s.PureComponent {
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
    super(...e), S(this, "handleUserContextMenu", (e, t) => {
      (0, o.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("36441"), n.e("69220")]).then(n.bind(n, "881351"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t
        })
      })
    }), S(this, "renderOverflowPopout", () => {
      let {
        party: e
      } = this.props;
      return (0, a.jsx)(u.default, {
        party: e,
        header: m.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENING_ALONG_COUNT.format({
          count: e.length
        })
      })
    })
  }
}
t.default = r.default.connectStores([c.default, h.default, E.default, f.default], () => {
  let e, t;
  let n = c.default.getSyncingWith(),
    a = c.default.getActivity(),
    s = h.default.getCurrentUser(),
    l = [];
  if (null != n ? (e = h.default.getUser(n.userId), t = n.partyId) : null != a && null != a.party && null != a.party.id && (e = s, t = a.party.id), null != t) {
    var r;
    l = i()(Array.from(null !== (r = f.default.getParty(t)) && void 0 !== r ? r : [])).map(e => h.default.getUser(e)).filter(C.isNotNullish).orderBy([t => null == e || e.id === t.id, e => E.default.isFriend(e.id)], ["desc", "desc"]).value()
  }
  return {
    currentUser: s,
    host: e,
    party: l
  }
})(p)