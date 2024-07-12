n(47120), n(773603);
var r = n(735250),
  i = n(470079),
  a = n(481060),
  o = n(285952),
  s = n(185625),
  l = n(273389),
  u = n(596891),
  c = n(15667),
  d = n(76264),
  _ = n(822686),
  E = n(356110),
  f = n(730719),
  h = n(996701),
  p = n(320596),
  m = n(273514),
  I = n(995712),
  T = n(234937),
  g = n(473121),
  S = n(449413),
  A = n(266080),
  N = n(316617),
  v = n(15682),
  O = n(905434),
  R = n(196627),
  C = n(739319),
  y = n(842401),
  D = n(375790),
  L = n(981631),
  b = n(689938),
  M = n(482441);

function P(e, t) {
  let {
elements: n
  } = e;
  return n.find(e => {
let {
  type: n
} = e;
return n === t;
  });
}

function U(e, t) {
  let {
elements: n
  } = e;
  return n.filter(e => {
let {
  type: n
} = e;
return n === t;
  });
}
t.Z = e => {
  let {
node: t,
reportType: n,
history: w,
onSelectChild: x,
onModalClose: G,
onSubmit: k,
multiSelect: B,
reportId: F,
textInput: V
  } = e, H = P(t, 'checkbox'), Z = P(t, 'text_line_resource'), Y = U(t, 'external_link'), j = U(t, 'free_text'), W = U(t, 'dropdown'), [K, z] = i.useState(!1), [q, Q] = i.useState(!1), [X, $] = i.useState(''), [J, ee] = i.useState(() => ({})), [et, en] = i.useState(() => ({})), [er, ei] = i.useState((0, s.VP)(j, W, H, V, B)), ea = function(e, t) {
let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
  r = {
    ...et
  };
r[e] = {
  value: t,
  isValid: n
}, en(r), ei((0, s.VP)(j, W, H, r, J));
  }, eo = i.useMemo(() => e => {
x({
  nodeRef: t.id,
  destination: e,
  textInput: null != j || null != W ? et : void 0,
  multiSelect: null != H ? {
    name: H.name,
    state: J
  } : void 0
});
  }, [
t,
x,
H,
J,
et,
j,
W
  ]);
  i.useEffect(() => {
null != B && ee(B), null != V && en(V);
  }, [
B,
V
  ]);
  let es = e => {
  if (e === L.evJ.INVALID_FORM_BODY)
    $(b.Z.Messages.IN_APP_REPORTING_SUBMIT_VALIDATION_ERROR);
  else
    $(b.Z.Messages.MOBILE_REPORTS_SUBMIT_FAILED);
},
el = () => k({
  nodeRef: t.id,
  destination: [
    '',
    e.successNodeId
  ]
}).then(() => {
  $(''), eo([
    '',
    e.successNodeId
  ]);
}).catch(e => {
  var t;
  es(null === (t = e.body) || void 0 === t ? void 0 : t.code);
}).finally(() => {
  z(!1);
});
  return i.useEffect(() => {
t.is_auto_submit && !q && (Q(!0), k({
  nodeRef: t.id,
  destination: [
    '',
    t.id
  ]
}));
  }, [
t.is_auto_submit,
q,
k,
t.id
  ]), (0, r.jsxs)('div', {
className: M.container,
children: [
  (0, r.jsxs)(a.ModalHeader, {
    separator: !1,
    direction: o.Z.Direction.VERTICAL,
    className: M.header,
    children: [
      (0, r.jsx)(R.Z, {
        element: P(t, 'success')
      }),
      (0, r.jsx)(g.Z, {
        node: t
      }),
      (0, r.jsx)(S.Z, {
        node: t
      })
    ]
  }),
  (0, r.jsxs)(a.ModalContent, {
    className: M.body,
    children: [
      null != Z ? (0, r.jsx)(C.Z, {
        element: Z
      }) : null,
      null != P(t, 'breadcrumbs') && (0, r.jsx)(c.Z, {
        history: w
      }),
      null != P(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, r.jsx)(N.Z, {
        message: n.record
      }),
      null != P(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(y.Z, {
        user: n.record
      }) : null,
      function(e) {
        let {
          elements: t
        } = e;
        return t.some(e => {
          let {
            type: t
          } = e;
          return D.O.includes(t);
        });
      }(t) && (0, r.jsx)(a.Heading, {
        className: M.remediationElementsHeader,
        variant: 'heading-sm/semibold',
        children: b.Z.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER
      }),
      (null != P(t, 'block_users') || null != P(t, 'mute_users')) && ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) && (0, r.jsx)(u.Z, {
        userId: 'user' === n.name ? n.record.id : n.record.author.id,
        reportId: F,
        reportName: n.name,
        showBlock: null != P(t, 'block_users'),
        showMute: null != P(t, 'mute_users')
      }),
      null != P(t, 'delete_message') && 'message' === n.name && (0, r.jsx)(_.Z, {
        message: n.record,
        reportId: F
      }),
      null != P(t, 'leave_guild') && 'guild' === n.name && (0, r.jsx)(A.Z, {
        guildId: n.record.id,
        reportId: F
      }),
      null != P(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(O.Z, {
        stageInstance: n.record
      }),
      null != P(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(T.Z, {
        event: n.record
      }),
      null != P(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(m.Z, {
        entry: n.record
      }),
      null != P(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(I.Z, {
        entry: n.record
      }),
      null != H && (0, r.jsx)(v.Z, {
        element: H,
        onChange: (e, t) => {
          let n = {
            ...J
          };
          e in J ? delete n[e] : n[e] = t, ee(n), ei((0, s.VP)(j, W, H, et, n));
        },
        state: J
      }),
      ('user_urf' === n.name || 'message_urf' === n.name) && null != W && W.length > 0 && (0, r.jsx)(E.Z, {
        elements: W,
        onChange: ea,
        state: et
      }),
      ('user_urf' === n.name || 'message_urf' === n.name) && null != j && j.length > 0 && (0, r.jsx)(p.Z, {
        elements: j,
        onChange: ea,
        state: et
      }),
      (0, r.jsx)(d.Z, {
        node: t,
        onSelectChild: eo
      }),
      null != Y && Y.length > 0 ? (0, r.jsx)(h.Z, {
        elements: Y
      }) : null,
      (0, r.jsx)(f.Z, {
        errorMessage: X,
        onClose: () => {
          $('');
        }
      })
    ]
  }),
  (0, r.jsx)(l.Z, {
    button: t.button,
    submitting: K,
    disableNext: er,
    onClick: e => {
      switch (e.type) {
        case 'done':
        case 'cancel':
          G();
          break;
        case 'next':
          eo([
            '',
            e.target
          ]);
          break;
        case 'submit':
          z(!0), el();
      }
    },
    onBackClicked: e.onNavigateBack,
    canNavigateBack: w.length > 0
  }),
  (0, r.jsx)(a.ModalCloseButton, {
    className: M.closeButton,
    onClick: G
  })
]
  });
};