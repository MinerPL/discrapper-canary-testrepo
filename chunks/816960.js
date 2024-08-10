t.r(s), t.d(s, {
  default: function() {
return M;
  }
});
var a = t(735250),
  n = t(470079),
  o = t(286379),
  i = t(399606),
  d = t(481060),
  c = t(92114),
  r = t(661824),
  l = t(797614),
  _ = t(9156),
  N = t(621600),
  E = t(359119),
  R = t(473092),
  u = t(222914),
  T = t(134612),
  A = t(981631),
  m = t(689938),
  x = t(777632);

function M(e) {
  let {
transitionState: s,
onClose: t,
handleBlock: M,
channelId: S,
warningId: h,
senderId: g
  } = e, b = () => {
t();
  }, C = (0, T.C2)();
  n.useEffect(() => {
(0, R.MC)(A.rMx.SAFETY_WARNING_MODAL_VIEWED, {
  channelId: S,
  warningId: h,
  senderId: g,
  warningType: E.pj.STRANGER_DANGER
}), l.Z.increment({
  name: o.V.SAFETY_WARNING_MODAL_VIEW
});
  }, [
S,
h,
g
  ]);
  let G = (0, i.e7)([_.ZP], () => _.ZP.isChannelMuted(null, S));
  return (0, a.jsx)(d.ModalRoot, {
transitionState: s,
children: (0, a.jsxs)(d.Scroller, {
  style: {
    overflow: 'hidden auto'
  },
  children: [
    (0, a.jsxs)(d.ModalHeader, {
      className: x.modalHeader,
      children: [
        (0, a.jsxs)('div', {
          className: x.modalHeaderText,
          children: [
            (0, a.jsx)(d.Text, {
              variant: 'eyebrow',
              color: 'status-positive-text',
              children: m.Z.Messages.STRANGER_DANGER_TIPS_HEADER
            }),
            (0, a.jsx)(d.Heading, {
              variant: 'heading-xl/bold',
              color: 'status-positive-text',
              children: m.Z.Messages.STRANGER_DANGER_TIPS_DESCRIPTION
            })
          ]
        }),
        (0, a.jsx)(d.Button, {
          'aria-label': m.Z.Messages.CLOSE,
          look: d.Button.Looks.BLANK,
          size: d.Button.Sizes.NONE,
          onClick: t,
          innerClassName: x.closeButtonInner,
          className: x.closeButton,
          children: (0, a.jsx)(d.XSmallIcon, {
            size: 'sm',
            color: 'currentColor',
            className: x.closeIcon
          })
        })
      ]
    }),
    (0, a.jsxs)(d.ModalContent, {
      className: x.modalContent,
      children: [
        (0, a.jsx)('div', {
          className: x.tipsSection,
          children: C.map((e, s) => (0, a.jsxs)('div', {
            className: x.tipRow,
            children: [
              (0, a.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                color: 'text-brand',
                className: x.tipNumber,
                children: s + 1
              }),
              (0, a.jsx)(d.Text, {
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: e
              })
            ]
          }, s))
        }),
        (0, a.jsxs)('div', {
          children: [
            (0, a.jsx)(d.Text, {
              className: x.moreHeading,
              variant: 'eyebrow',
              color: 'header-secondary',
              children: m.Z.Messages.STRANGER_DANGER_MORE_HEADER
            }),
            (0, a.jsxs)('div', {
              className: x.tipsSection,
              children: [
                (0, a.jsxs)('div', {
                  className: x.safetyAction,
                  children: [
                    (0, a.jsxs)('div', {
                      className: x.safetyActionText,
                      children: [
                        (0, a.jsx)(d.Text, {
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: m.Z.Messages.STRANGER_DANGER_MORE_MUTE
                        }),
                        (0, a.jsx)(d.Text, {
                          variant: 'text-xs/medium',
                          color: 'header-secondary',
                          children: m.Z.Messages.STRANGER_DANGER_MORE_MUTE_DESCRIPTION
                        })
                      ]
                    }),
                    (0, a.jsx)(d.Button, {
                      size: d.Button.Sizes.SMALL,
                      color: d.Button.Colors.PRIMARY,
                      'aria-label': m.Z.Messages.STRANGER_DANGER_MORE_MUTE,
                      onClick: G ? () => {
                        c.Z.updateChannelOverrideSettings(null, S, {
                          muted: !1
                        }, N.ZB.Unmuted), (0, d.showToast)((0, d.createToast)(m.Z.Messages.STRANGER_DANGER_UNMUTE_CONFIRM, d.ToastType.SUCCESS)), (0, R.qc)({
                          channelId: S,
                          warningId: h,
                          senderId: g,
                          warningType: E.pj.STRANGER_DANGER,
                          cta: R.NM.USER_MODAL_UNMUTE
                        });
                      } : () => {
                        c.Z.updateChannelOverrideSettings(null, S, {
                          muted: !0
                        }, N.ZB.Muted), (0, d.showToast)((0, d.createToast)(m.Z.Messages.STRANGER_DANGER_MUTE_CONFIRM, d.ToastType.SUCCESS)), (0, R.qc)({
                          channelId: S,
                          warningId: h,
                          senderId: g,
                          warningType: E.pj.STRANGER_DANGER,
                          cta: R.NM.USER_MODAL_MUTE
                        });
                      },
                      children: G ? m.Z.Messages.STRANGER_DANGER_MORE_UNMUTE : m.Z.Messages.STRANGER_DANGER_MORE_MUTE
                    })
                  ]
                }),
                (0, a.jsx)(r.Z, {}),
                (0, a.jsxs)('div', {
                  className: x.safetyAction,
                  children: [
                    (0, a.jsxs)('div', {
                      className: x.safetyActionText,
                      children: [
                        (0, a.jsx)(d.Text, {
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: m.Z.Messages.STRANGER_DANGER_MORE_BLOCK
                        }),
                        (0, a.jsx)(d.Text, {
                          variant: 'text-xs/medium',
                          color: 'header-secondary',
                          children: m.Z.Messages.STRANGER_DANGER_MORE_BLOCK_DESCRIPTION
                        })
                      ]
                    }),
                    (0, a.jsx)(d.Button, {
                      size: d.Button.Sizes.SMALL,
                      color: d.Button.Colors.RED,
                      'aria-label': m.Z.Messages.STRANGER_DANGER_BANNER_BLOCK,
                      onClick: () => {
                        b(), M();
                      },
                      children: m.Z.Messages.STRANGER_DANGER_BANNER_BLOCK
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, a.jsx)(u.Z, {
          channelId: S,
          warningId: h,
          senderId: g
        })
      ]
    })
  ]
})
  });
}