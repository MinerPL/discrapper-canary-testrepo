"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("862337"),
  r = n("77078"),
  o = n("148813"),
  u = n("530311"),
  d = n("858722"),
  c = n("220978"),
  f = n("581454"),
  E = n("49111"),
  h = n("782340");
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
class S extends s.PureComponent {
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
    super(...e), this._doneTimer = new i.Timeout
  }
}
var I = l.default.connectStores([o.default], e => {
  let {
    libraryApplication: t
  } = e;
  return {
    cloudSyncState: o.default.getState(t.id, t.branchId)
  }
})(S)