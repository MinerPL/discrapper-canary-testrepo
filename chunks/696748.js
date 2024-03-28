"use strict";
n.r(e), n.d(e, {
  playApplication: function() {
    return T
  }
}), n("411104"), n("47120");
var l = n("735250"),
  a = n("470079"),
  i = n("913527"),
  o = n.n(i),
  s = n("442837"),
  r = n("481060"),
  c = n("372123"),
  u = n("224706"),
  d = n("812206"),
  p = n("293245"),
  f = n("285952"),
  C = n("626135"),
  h = n("981631"),
  y = n("689938"),
  A = n("296601"),
  S = n("794711");

function _(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
class N extends a.PureComponent {
  renderConflictButton(t, e, n, a) {
    return (0, l.jsxs)(r.Button, {
      className: A.conflictButton,
      innerClassName: A.conflictButtonInner,
      onClick: a,
      children: [(0, l.jsx)("div", {
        className: n
      }), (0, l.jsxs)("div", {
        className: A.buttonBody,
        children: [(0, l.jsx)("div", {
          className: A.conflictTitle,
          children: t
        }), (0, l.jsx)("div", {
          children: y.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED
        }), (0, l.jsx)("div", {
          className: A.timestamp,
          children: o()(e).calendar()
        })]
      })]
    })
  }
  renderError() {
    let {
      application: t
    } = this.props;
    return (0, l.jsxs)(a.Fragment, {
      children: [(0, l.jsxs)(r.ModalContent, {
        children: [(0, l.jsx)(f.default, {
          justify: f.default.Justify.CENTER,
          children: (0, l.jsx)("div", {
            className: A.errorArt
          })
        }), (0, l.jsx)("div", {
          className: A.description,
          children: y.default.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format({
            applicationName: t.name
          })
        })]
      }), (0, l.jsx)(r.ModalFooter, {
        children: (0, l.jsxs)(f.default, {
          justify: f.default.Justify.BETWEEN,
          children: [(0, l.jsx)(r.Button, {
            className: A.linkButton,
            size: A.linkButtonSize,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            onClick: this.onClose,
            children: y.default.Messages.CANCEL
          }), (0, l.jsxs)(f.default, {
            direction: f.default.Direction.HORIZONTAL,
            justify: f.default.Justify.END,
            children: [(0, l.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: () => this.handlePlay(),
              className: A.retryButton,
              children: y.default.Messages.RETRY
            }), (0, l.jsx)(r.Button, {
              onClick: () => this.handlePlay(!1),
              children: y.default.Messages.GAME_ACTION_BUTTON_PLAY
            })]
          })]
        })
      })]
    })
  }
  renderConflict() {
    let {
      application: t,
      cloudSyncState: e
    } = this.props;
    if (e.type !== h.CloudSyncStateTypes.CONFLICT) throw Error("Cannot render conflict for non conflict type");
    return (0, l.jsxs)(r.ModalContent, {
      className: S.marginBottom20,
      children: [(0, l.jsx)("div", {
        className: A.description,
        children: y.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format({
          applicationName: t.name
        })
      }), this.renderConflictButton(y.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD, e.remote.timestamp, A.conflictDownloadArt, this.handleChooseDownload), (0, l.jsxs)(f.default, {
        className: A.choiceWrapper,
        align: f.default.Align.CENTER,
        children: [(0, l.jsx)("div", {
          className: A.choiceLine
        }), (0, l.jsx)("div", {
          className: A.choiceTitle,
          children: y.default.Messages.CLOUD_SYNC_MODAL_OR
        }), (0, l.jsx)("div", {
          className: A.choiceLine
        })]
      }), this.renderConflictButton(y.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD, e.next.timestamp, A.conflictUploadArt, this.handleChooseUpload)]
    })
  }
  render() {
    let {
      cloudSyncState: t,
      transitionState: e
    } = this.props, n = t.type === h.CloudSyncStateTypes.CONFLICT ? y.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER : y.default.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;
    return (0, l.jsxs)(r.ModalRoot, {
      transitionState: e,
      className: A.modal,
      "aria-label": n,
      children: [(0, l.jsxs)(r.ModalHeader, {
        separator: !1,
        children: [(0, l.jsx)(r.ModalCloseButton, {
          className: A.closeButton,
          onClick: this.onClose
        }), (0, l.jsx)(r.FormTitle, {
          tag: "h2",
          className: S.marginReset,
          children: n
        })]
      }), t.type === h.CloudSyncStateTypes.CONFLICT ? this.renderConflict() : this.renderError()]
    })
  }
  constructor(...t) {
    var e;
    super(...t), e = this, _(this, "onClose", () => {
      this.props.onClose()
    }), _(this, "handlePlay", function() {
      let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        {
          libraryApplication: l,
          analyticsParams: a
        } = e.props;
      e.onClose(), T(l.id, l, {
        analyticsParams: a,
        cloudSync: t,
        cloudSyncForceHash: n
      })
    }), _(this, "handleChooseDownload", () => {
      let {
        cloudSyncState: t
      } = this.props;
      t.type === h.CloudSyncStateTypes.CONFLICT && this.handlePlay(!0, t.remote.hash)
    }), _(this, "handleChooseUpload", () => {
      let {
        cloudSyncState: t
      } = this.props;
      t.type === h.CloudSyncStateTypes.CONFLICT && this.handlePlay(!0, t.next.hash)
    })
  }
}
let O = s.default.connectStores([p.default, d.default], t => {
  let {
    libraryApplication: e,
    branchId: n
  } = t;
  return {
    cloudSyncState: p.default.getState(e.id, n),
    application: d.default.getApplication(e.id)
  }
})(N);
async function T(t, e, n) {
  let a = d.default.getApplication(t);
  if (null == a) return;
  let {
    cloudSync: i = !0,
    cloudSyncForceHash: o = null,
    analyticsParams: s
  } = n;
  if (i && null != e) {
    let t = e.branchId;
    try {
      await c.sync(e.id, t, o)
    } catch (n) {
      (0, r.openModal)(n => (0, l.jsx)(O, {
        libraryApplication: e,
        analyticsParams: s,
        branchId: t,
        ...n
      }));
      return
    }
  }
  return C.default.track(h.AnalyticEvents.APPLICATION_OPENED, {
    application_id: a.id,
    application_name: a.name,
    type: h.AnalyticsGameOpenTypes.LAUNCH,
    distributor: null != e ? e.getDistributor() : null,
    ...s
  }), u.default.launch(a.id, null == e ? void 0 : e.branchId)
}