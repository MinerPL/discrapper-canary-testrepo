s.d(t, {
  L1: function() {
return S;
  },
  o1: function() {
return I;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(570140),
  l = s(782568),
  c = s(153124),
  d = s(960359),
  _ = s(524347),
  E = s(853197),
  u = s(689938),
  T = s(747311);

function I(e) {
  let {
onClose: t,
code: s,
copyInputTitle: a,
bodyText: i
  } = e;
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(r.ModalHeader, {
    separator: !1,
    className: T.headerContainer,
    children: [
      (0, n.jsx)('div', {
        className: T.dropArt
      }),
      (0, n.jsx)(r.Heading, {
        variant: 'heading-xl/semibold',
        children: u.Z.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
      })
    ]
  }),
  (0, n.jsxs)(r.ModalContent, {
    className: T.modalContent,
    children: [
      (0, n.jsx)(r.Text, {
        variant: 'text-md/normal',
        className: T.codeBodyText,
        children: i
      }),
      (0, n.jsx)(r.FormDivider, {
        className: T.formDivider
      }),
      (0, n.jsx)(r.FormSection, {
        title: a,
        className: T.formSection,
        children: (0, n.jsx)(r.Button, {
          onClick: () => (0, l.Z)(s),
          color: r.Button.Colors.BRAND,
          look: r.Button.Looks.FILLED,
          children: u.Z.Messages.GIFT_EMBED_BUTTON_CLAIM
        })
      })
    ]
  }),
  (0, n.jsx)(r.ModalFooter, {
    className: T.modalFooter,
    children: (0, n.jsx)(r.Button, {
      className: T.closeButton,
      onClick: t,
      look: r.Button.Looks.LINK,
      color: T.closeButton,
      children: u.Z.Messages.CLOSE
    })
  })
]
  });
}

function S(e) {
  let {
onClose: t,
errorCode: s
  } = e, a = {
260000: u.Z.Messages.DROPS_USER_NOT_ENROLLED_ERROR,
260001: u.Z.Messages.DROPS_QUEST_NOT_COMPLETED_ERROR,
260002: u.Z.Messages.DROPS_NO_CODE_AVAILABLE_ERROR,
260003: u.Z.Messages.DROPS_CODE_ALREADY_CLAIMED_ERROR
  }, i = u.Z.Messages.GENERIC_ERROR_BODY;
  return null != a[s] && (i = a[s]), (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(r.ModalHeader, {
    separator: !1,
    className: T.errorHeader,
    children: [
      (0, n.jsx)('div', {
        className: T.errorArt
      }),
      (0, n.jsx)(r.Heading, {
        variant: 'heading-xl/semibold',
        children: u.Z.Messages.GENERIC_ERROR_TITLE
      })
    ]
  }),
  (0, n.jsx)(r.ModalContent, {
    className: T.errorBody,
    children: (0, n.jsx)(r.Text, {
      variant: 'text-md/normal',
      className: T.bodyText,
      children: i
    })
  }),
  (0, n.jsx)(r.ModalFooter, {
    children: (0, n.jsx)(r.Button, {
      color: r.Button.Colors.BRAND,
      onClick: t,
      children: u.Z.Messages.CLOSE
    })
  })
]
  });
}
t.ZP = function(e) {
  let {
onClose: t,
code: l,
drop: S,
platform: N,
transitionState: C
  } = e, m = (0, c.Dt)(), [A, h] = a.useState();
  a.useEffect(() => {
null == l && o.Z.wait(async () => {
  await (0, d.dN)(S.dropsQuestId);
});
  }, [
S.dropsQuestId,
l
  ]);
  let g = (0, i.e7)([_.Z], () => _.Z.platformAvailability);
  return (0, n.jsx)(r.ModalRoot, {
transitionState: C,
'aria-labelledby': m,
children: (0, n.jsx)(n.Fragment, {
  children: (() => {
    if (null != l)
      return (0, n.jsx)(I, {
        bodyText: S.messages.claimTip(),
        onClose: t,
        copyInputTitle: u.Z.Messages.DROPS_REDEMPTION_CODE_PLATFORM_TITLE.format({
          platform: N
        }),
        code: l
      });
    if (null === g)
      return (0, n.jsx)('div', {
        className: T.spinnerContainer,
        children: (0, n.jsx)(r.Spinner, {})
      });
    {
      let e = g.length > 0,
        a = 1 === g.length;
      return (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsxs)(r.ModalHeader, {
            separator: !1,
            className: T.headerContainer,
            children: [
              (0, n.jsx)('div', {
                className: T.dropArt
              }),
              (0, n.jsx)(r.Heading, {
                variant: 'heading-lg/semibold',
                children: u.Z.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
              })
            ]
          }),
          (0, n.jsxs)(r.ModalContent, {
            children: [
              (0, n.jsx)(r.Text, {
                variant: 'text-md/normal',
                className: T.dropBodyText,
                children: a ? u.Z.Messages.DROPS_MODAL_CHOOSE_SINGLE_PLATFORM.format({
                  platform: (0, E.Un)(g[0])
                }) : u.Z.Messages.DROPS_MODAL_CHOOSE_PLATFORM.format({
                  title: S.title
                })
              }),
              (0, n.jsx)(r.FormDivider, {
                className: T.formDivider
              }),
              (0, n.jsxs)(r.FormSection, {
                className: T.dropFormSection,
                children: [
                  (0, n.jsx)(r.SingleSelect, {
                    onChange: h,
                    options: g.map(e => ({
                      value: e,
                      label: (0, E.Un)(e)
                    })),
                    value: a ? g[0] : A,
                    isDisabled: !e,
                    className: e ? '' : T.selectDangerBorder,
                    look: e ? r.SelectLooks.FILLED : r.SelectLooks.CUSTOM
                  }),
                  !e && (0, n.jsx)(r.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-danger',
                    className: T.errorCodesText,
                    children: u.Z.Messages.DROPS_CODES_RAN_OUT
                  })
                ]
              })
            ]
          }),
          (0, n.jsxs)(r.ModalFooter, {
            children: [
              e && (0, n.jsx)(r.Button, {
                color: r.Button.Colors.BRAND,
                onClick: () => {
                  (0, r.openModalLazy)(async () => {
                    let {
                      default: e
                    } = await s.e('5004').then(s.bind(s, 233070));
                    return s => (void 0 !== A || a) && (0, n.jsx)(e, {
                      ...s,
                      platform: void 0 === A ? g[0] : A,
                      code: l,
                      dropsQuestId: S.dropsQuestId,
                      closeParentModal: t,
                      singlePlatformClaim: a
                    });
                  });
                },
                disabled: void 0 === A && !a,
                children: u.Z.Messages.UNLOCK_CODE
              }),
              e ? (0, n.jsx)(r.Button, {
                onClick: t,
                look: r.Button.Looks.LINK,
                color: T.maybeLaterButton,
                children: u.Z.Messages.MAYBE_LATER
              }) : (0, n.jsx)(r.Button, {
                onClick: t,
                look: r.Button.Looks.LINK,
                color: T.closeButton,
                children: u.Z.Messages.CLOSE
              })
            ]
          })
        ]
      });
    }
  })()
})
  });
};