n.d(e, {
  a: function() {
return E;
  }
}), n(411104), n(47120);
var i = n(735250),
  o = n(470079),
  a = n(913527),
  l = n.n(a),
  s = n(442837),
  r = n(481060),
  c = n(372123),
  d = n(224706),
  u = n(812206),
  p = n(293245),
  h = n(285952),
  C = n(626135),
  f = n(981631),
  A = n(689938),
  O = n(404713),
  N = n(549856);

function _(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : t[e] = n, t;
}
class T extends o.PureComponent {
  renderConflictButton(t, e, n, o) {
return (0, i.jsxs)(r.Button, {
  className: O.conflictButton,
  innerClassName: O.conflictButtonInner,
  onClick: o,
  children: [
    (0, i.jsx)('div', {
      className: n
    }),
    (0, i.jsxs)('div', {
      className: O.buttonBody,
      children: [
        (0, i.jsx)('div', {
          className: O.conflictTitle,
          children: t
        }),
        (0, i.jsx)('div', {
          children: A.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED
        }),
        (0, i.jsx)('div', {
          className: O.timestamp,
          children: l()(e).calendar()
        })
      ]
    })
  ]
});
  }
  renderError() {
let {
  application: t
} = this.props;
return (0, i.jsxs)(o.Fragment, {
  children: [
    (0, i.jsxs)(r.ModalContent, {
      children: [
        (0, i.jsx)(h.Z, {
          justify: h.Z.Justify.CENTER,
          children: (0, i.jsx)('div', {
            className: O.errorArt
          })
        }),
        (0, i.jsx)('div', {
          className: O.description,
          children: A.Z.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format({
            applicationName: t.name
          })
        })
      ]
    }),
    (0, i.jsx)(r.ModalFooter, {
      children: (0, i.jsxs)(h.Z, {
        justify: h.Z.Justify.BETWEEN,
        children: [
          (0, i.jsx)(r.Button, {
            className: O.linkButton,
            size: O.linkButtonSize,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            onClick: this.onClose,
            children: A.Z.Messages.CANCEL
          }),
          (0, i.jsxs)(h.Z, {
            direction: h.Z.Direction.HORIZONTAL,
            justify: h.Z.Justify.END,
            children: [
              (0, i.jsx)(r.Button, {
                look: r.Button.Looks.LINK,
                color: r.Button.Colors.PRIMARY,
                onClick: () => this.handlePlay(),
                className: O.retryButton,
                children: A.Z.Messages.RETRY
              }),
              (0, i.jsx)(r.Button, {
                onClick: () => this.handlePlay(!1),
                children: A.Z.Messages.GAME_ACTION_BUTTON_PLAY
              })
            ]
          })
        ]
      })
    })
  ]
});
  }
  renderConflict() {
let {
  application: t,
  cloudSyncState: e
} = this.props;
if (e.type !== f.TzF.CONFLICT)
  throw Error('Cannot render conflict for non conflict type');
return (0, i.jsxs)(r.ModalContent, {
  className: N.marginBottom20,
  children: [
    (0, i.jsx)('div', {
      className: O.description,
      children: A.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format({
        applicationName: t.name
      })
    }),
    this.renderConflictButton(A.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD, e.remote.timestamp, O.conflictDownloadArt, this.handleChooseDownload),
    (0, i.jsxs)(h.Z, {
      className: O.choiceWrapper,
      align: h.Z.Align.CENTER,
      children: [
        (0, i.jsx)('div', {
          className: O.choiceLine
        }),
        (0, i.jsx)('div', {
          className: O.choiceTitle,
          children: A.Z.Messages.CLOUD_SYNC_MODAL_OR
        }),
        (0, i.jsx)('div', {
          className: O.choiceLine
        })
      ]
    }),
    this.renderConflictButton(A.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD, e.next.timestamp, O.conflictUploadArt, this.handleChooseUpload)
  ]
});
  }
  render() {
let {
  cloudSyncState: t,
  transitionState: e
} = this.props, n = t.type === f.TzF.CONFLICT ? A.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER : A.Z.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;
return (0, i.jsxs)(r.ModalRoot, {
  transitionState: e,
  className: O.modal,
  'aria-label': n,
  children: [
    (0, i.jsxs)(r.ModalHeader, {
      separator: !1,
      children: [
        (0, i.jsx)(r.ModalCloseButton, {
          className: O.closeButton,
          onClick: this.onClose
        }),
        (0, i.jsx)(r.FormTitle, {
          tag: 'h2',
          className: N.marginReset,
          children: n
        })
      ]
    }),
    t.type === f.TzF.CONFLICT ? this.renderConflict() : this.renderError()
  ]
});
  }
  constructor(...t) {
var e;
super(...t), e = this, _(this, 'onClose', () => {
  this.props.onClose();
}), _(this, 'handlePlay', function() {
  let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    {
      libraryApplication: i,
      analyticsParams: o
    } = e.props;
  e.onClose(), E(i.id, i, {
    analyticsParams: o,
    cloudSync: t,
    cloudSyncForceHash: n
  });
}), _(this, 'handleChooseDownload', () => {
  let {
    cloudSyncState: t
  } = this.props;
  t.type === f.TzF.CONFLICT && this.handlePlay(!0, t.remote.hash);
}), _(this, 'handleChooseUpload', () => {
  let {
    cloudSyncState: t
  } = this.props;
  t.type === f.TzF.CONFLICT && this.handlePlay(!0, t.next.hash);
});
  }
}
let L = s.ZP.connectStores([
  p.Z,
  u.Z
], t => {
  let {
libraryApplication: e,
branchId: n
  } = t;
  return {
cloudSyncState: p.Z.getState(e.id, n),
application: u.Z.getApplication(e.id)
  };
})(T);
async function E(t, e, n) {
  let o = u.Z.getApplication(t);
  if (null == o)
return;
  let {
cloudSync: a = !0,
cloudSyncForceHash: l = null,
analyticsParams: s
  } = n;
  if (a && null != e) {
let t = e.branchId;
try {
  await c.Z(e.id, t, l);
} catch (n) {
  (0, r.openModal)(n => (0, i.jsx)(L, {
    libraryApplication: e,
    analyticsParams: s,
    branchId: t,
    ...n
  }));
  return;
}
  }
  return C.default.track(f.rMx.APPLICATION_OPENED, {
application_id: o.id,
application_name: o.name,
type: f.q5t.LAUNCH,
distributor: null != e ? e.getDistributor() : null,
...s
  }), d.Z.launch(o.id, null == e ? void 0 : e.branchId);
}