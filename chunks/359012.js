"use strict";
s.r(t);
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("481060"),
  c = s("16084"),
  r = s("546239"),
  o = s("812206"),
  d = s("55563"),
  u = s("285952"),
  p = s("792295"),
  h = s("626135"),
  A = s("966305"),
  I = s("883571"),
  f = s("981631"),
  L = s("292174"),
  m = s("551249");
class E extends a.Component {
  componentDidMount() {
    let {
      application: e,
      skuId: t,
      sku: s,
      onClose: l
    } = this.props;
    null == s ? (0, c.fetchSKU)(e.id, t).catch(e => l(e.message)) : this.track(s)
  }
  componentDidUpdate(e) {
    let {
      sku: t
    } = this.props;
    t !== e.sku && null != t && this.track(t)
  }
  track(e) {
    let {
      analyticsSource: t
    } = this.props;
    h.default.track(f.AnalyticEvents.OPEN_MODAL, {
      type: "Application Entitlement Confirmation",
      source: t,
      application_id: e.applicationId,
      sku_id: e.id
    })
  }
  render() {
    let {
      sku: e,
      application: t,
      onClose: s,
      isIAP: a,
      transitionState: i
    } = this.props, c = null != e ? (0, I.getSkuHeaderText)(a, e.type) : null;
    return (0, l.jsxs)(n.ModalRoot, {
      transitionState: i,
      size: n.ModalSize.SMALL,
      "aria-label": c,
      className: m.modal,
      children: [(0, l.jsx)(r.default, {
        application: t,
        splashSize: 880
      }), (0, l.jsx)(p.default.Content, {
        className: m.content,
        children: (0, l.jsxs)(u.default, {
          direction: u.default.Direction.VERTICAL,
          className: L.confirmContent,
          children: [(0, l.jsx)(n.ModalCloseButton, {
            onClick: () => s(),
            className: L.confirmCloseButton
          }), null != e ? (0, l.jsx)(A.default, {
            application: t,
            sku: e,
            isIAP: a,
            onClose: () => s()
          }) : null]
        })
      })]
    })
  }
}
t.default = i.default.connectStores([d.default, o.default], e => {
  let {
    applicationId: t,
    skuId: s
  } = e;
  return {
    application: o.default.getApplication(t),
    sku: d.default.get(s)
  }
})(E)