"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i, r = n(735250),
  s = n(470079),
  o = n(772848),
  a = n(626135),
  l = n(251625),
  u = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class d extends(i = s.Component) {
  renderProvider(e) {
    var t, n;
    let {
      section: i,
      page: s,
      object: o,
      objectType: l,
      children: u
    } = this.props, _ = this.mergeLocation(e.location, this.getLocation(s, i, o, l)), d = this.getContext(_, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
    return (0, r.jsx)(a.AnalyticsContext.Provider, {
      value: d,
      children: u
    })
  }
  render() {
    let {
      context: e
    } = this.props;
    return null != e ? this.renderProvider(e) : (0, r.jsx)(a.AnalyticsContext.Consumer, {
      children: e => this.renderProvider(e)
    })
  }
  constructor(e) {
    super(e), _(this, "_loadId", null), _(this, "_loadDate", this.props.root ? Date.now() : null), _(this, "getLocation", (0, l.oH)((e, t, n, i) => {
      let r = {};
      return null != e && (r.page = e), null != t && (r.section = t), null != n && (r.object = n), null != i && (r.objectType = i), r
    })), _(this, "mergeLocation", (0, l.oH)((e, t) => ({
      ...e,
      ...t
    }))), _(this, "getContext", (0, l.oH)((e, t, n) => ({
      location: e,
      loadDate: t,
      loadId: n
    }))), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, o.Z)())
  }
}
_(d, "Pages", u.ZY5), _(d, "Sections", u.jXE), _(d, "Objects", u.qAy), _(d, "ObjectTypes", u.Qqv), _(d, "defaultProps", {
  root: !1
})