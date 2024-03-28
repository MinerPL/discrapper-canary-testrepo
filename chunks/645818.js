"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("846519"),
  r = n("481060"),
  o = n("293245"),
  u = n("863969"),
  d = n("563593"),
  c = n("294934"),
  f = n("271322"),
  E = n("981631"),
  h = n("689938");
let _ = new Set([E.CloudSyncStateTypes.PUSHING, E.CloudSyncStateTypes.PULLING]),
  C = Object.freeze({
    [E.CloudSyncStateTypes.DONE]: u.default,
    [E.CloudSyncStateTypes.PLANNING]: u.default,
    [E.CloudSyncStateTypes.PREPARING]: u.default,
    [E.CloudSyncStateTypes.PUSHING]: f.default,
    [E.CloudSyncStateTypes.PULLING]: c.default,
    [E.CloudSyncStateTypes.CONFLICT]: u.default,
    [E.CloudSyncStateTypes.ERROR]: u.default
  });
class m extends s.PureComponent {
  componentDidMount() {
    this.getIsRecentlySynced() && this.setRecentlySyncedTimeout()
  }
  componentDidUpdate(e) {
    null != this.props.cloudSyncState && this.props.cloudSyncState.type === E.CloudSyncStateTypes.DONE && null != this.props.cloudSyncState.timestamp && (null == e.cloudSyncState || null == e.cloudSyncState.timestamp) && this.setRecentlySyncedTimeout()
  }
  componentWillUnmount() {
    this._doneTimer.stop()
  }
  setRecentlySyncedTimeout() {
    this._doneTimer.start(2e3, () => this.forceUpdate())
  }
  getIsRecentlySynced() {
    let {
      cloudSyncState: e
    } = this.props;
    if (null != e && e.type === E.CloudSyncStateTypes.DONE) {
      let t = e.timestamp;
      return null != t && Date.now() - t <= 2e3
    }
    return !1
  }
  getStop(e, t) {
    if (t) return 1;
    if (e.type === E.CloudSyncStateTypes.PUSHING || e.type === E.CloudSyncStateTypes.PULLING) {
      let {
        progress: t,
        total: n
      } = e;
      return t / n
    }
    return 0
  }
  getTooltip(e, t) {
    switch (e.type) {
      case E.CloudSyncStateTypes.DONE:
        if (t) return h.default.Messages.CLOUD_SYNC_ICON_TOOLTIP_DONE;
        return h.default.Messages.CLOUD_SYNC_ICON_TOOLTIP_SUPPORTED;
      case E.CloudSyncStateTypes.CONFLICT:
      case E.CloudSyncStateTypes.ERROR:
        return h.default.Messages.CLOUD_SYNC_ICON_TOOLTIP_SUPPORTED;
      case E.CloudSyncStateTypes.PLANNING:
        return h.default.Messages.CLOUD_SYNC_ICON_TOOLTIP_PLANNING;
      case E.CloudSyncStateTypes.PREPARING:
        return h.default.Messages.CLOUD_SYNC_ICON_TOOLTIP_PREPARING;
      case E.CloudSyncStateTypes.PUSHING:
        return h.default.Messages.CLOUD_SYNC_ICON_TOOLTIP_PUSHING;
      case E.CloudSyncStateTypes.PULLING:
        return h.default.Messages.CLOUD_SYNC_ICON_TOOLTIP_PULLING;
      default:
        return null
    }
  }
  render() {
    let {
      cloudSyncState: e,
      libraryApplication: t,
      className: n
    } = this.props, s = null == e ? {
      type: E.CloudSyncStateTypes.DONE
    } : e, l = this.getIsRecentlySynced(), i = {};
    (_.has(s.type) || l) && (i.gradientConfig = {
      id: t.id,
      startColor: "rgba(199, 208, 240, 1)",
      stopColor: "rgba(114, 137, 218, 1)",
      stop: this.getStop(s, l)
    });
    let o = l ? d.default : C[s.type];
    return (0, a.jsx)(r.Tooltip, {
      text: this.getTooltip(s, l),
      children: e => (0, a.jsx)(o, {
        className: n,
        ...i,
        ...e
      })
    })
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, n = "_doneTimer", a = new i.Timeout, n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}
t.default = l.default.connectStores([o.default], e => {
  let {
    libraryApplication: t
  } = e;
  return {
    cloudSyncState: o.default.getState(t.id, t.branchId)
  }
})(m)