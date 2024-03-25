"use strict";
n.r(e), n.d(e, {
  playApplication: function() {
    return O
  }
}), n("70102"), n("222007");
var l = n("37983"),
  a = n("884691"),
  i = n("866227"),
  o = n.n(i),
  s = n("446674"),
  r = n("77078"),
  c = n("959254"),
  u = n("823411"),
  d = n("299285"),
  p = n("148813"),
  f = n("145131"),
  C = n("599110"),
  h = n("49111"),
  A = n("782340"),
  y = n("628471"),
  S = n("890957");
class _ extends a.PureComponent {
  renderConflictButton(t, e, n, a) {
    return (0, l.jsxs)(r.Button, {
      className: y.conflictButton,
      innerClassName: y.conflictButtonInner,
      onClick: a,
      children: [(0, l.jsx)("div", {
        className: n
      }), (0, l.jsxs)("div", {
        className: y.buttonBody,
        children: [(0, l.jsx)("div", {
          className: y.conflictTitle,
          children: t
        }), (0, l.jsx)("div", {
          children: A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED
        }), (0, l.jsx)("div", {
          className: y.timestamp,
          children: o(e).calendar()
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
            className: y.errorArt
          })
        }), (0, l.jsx)("div", {
          className: y.description,
          children: A.default.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format({
            applicationName: t.name
          })
        })]
      }), (0, l.jsx)(r.ModalFooter, {
        children: (0, l.jsxs)(f.default, {
          justify: f.default.Justify.BETWEEN,
          children: [(0, l.jsx)(r.Button, {
            className: y.linkButton,
            size: y.linkButtonSize,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            onClick: this.onClose,
            children: A.default.Messages.CANCEL
          }), (0, l.jsxs)(f.default, {
            direction: f.default.Direction.HORIZONTAL,
            justify: f.default.Justify.END,
            children: [(0, l.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: () => this.handlePlay(),
              className: y.retryButton,
              children: A.default.Messages.RETRY
            }), (0, l.jsx)(r.Button, {
              onClick: () => this.handlePlay(!1),
              children: A.default.Messages.GAME_ACTION_BUTTON_PLAY
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
        className: y.description,
        children: A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format({
          applicationName: t.name
        })
      }), this.renderConflictButton(A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD, e.remote.timestamp, y.conflictDownloadArt, this.handleChooseDownload), (0, l.jsxs)(f.default, {
        className: y.choiceWrapper,
        align: f.default.Align.CENTER,
        children: [(0, l.jsx)("div", {
          className: y.choiceLine
        }), (0, l.jsx)("div", {
          className: y.choiceTitle,
          children: A.default.Messages.CLOUD_SYNC_MODAL_OR
        }), (0, l.jsx)("div", {
          className: y.choiceLine
        })]
      }), this.renderConflictButton(A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD, e.next.timestamp, y.conflictUploadArt, this.handleChooseUpload)]
    })
  }
  render() {
    let {
      cloudSyncState: t,
      transitionState: e
    } = this.props, n = t.type === h.CloudSyncStateTypes.CONFLICT ? A.default.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER : A.default.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;
    return (0, l.jsxs)(r.ModalRoot, {
      transitionState: e,
      className: y.modal,
      "aria-label": n,
      children: [(0, l.jsxs)(r.ModalHeader, {
        separator: !1,
        children: [(0, l.jsx)(r.ModalCloseButton, {
          className: y.closeButton,
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
    super(...t), e = this, this.onClose = () => {
      this.props.onClose()
    }, this.handlePlay = function() {
      let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        {
          libraryApplication: l,
          analyticsParams: a
        } = e.props;
      e.onClose(), O(l.id, l, {
        analyticsParams: a,
        cloudSync: t,
        cloudSyncForceHash: n
      })
    }, this.handleChooseDownload = () => {
      let {
        cloudSyncState: t
      } = this.props;
      t.type === h.CloudSyncStateTypes.CONFLICT && this.handlePlay(!0, t.remote.hash)
    }, this.handleChooseUpload = () => {
      let {
        cloudSyncState: t
      } = this.props;
      t.type === h.CloudSyncStateTypes.CONFLICT && this.handlePlay(!0, t.next.hash)
    }
  }
}
let N = s.default.connectStores([p.default, d.default], t => {
  let {
    libraryApplication: e,
    branchId: n
  } = t;
  return {
    cloudSyncState: p.default.getState(e.id, n),
    application: d.default.getApplication(e.id)
  }
})(_);
async function O(t, e, n) {
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
      (0, r.openModal)(n => (0, l.jsx)(N, {
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