n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(91192),
  o = n(286379),
  c = n(442837),
  d = n(704215),
  u = n(481060),
  _ = n(150063),
  h = n(45114),
  E = n(230711),
  I = n(112724),
  m = n(183126),
  g = n(607070),
  p = n(209613),
  T = n(325708),
  S = n(320149),
  f = n(252618),
  C = n(605236),
  N = n(243778),
  A = n(984370),
  v = n(797614),
  Z = n(359110),
  L = n(6025),
  O = n(897473),
  R = n(108427),
  x = n(970731),
  b = n(210887),
  P = n(433355),
  M = n(592125),
  D = n(819640),
  y = n(151827),
  j = n(626135),
  U = n(792125),
  G = n(879041),
  k = n(647090),
  w = n(385956),
  B = n(610697),
  H = n(26373),
  V = n(486622),
  F = n(922409),
  Y = n(899740),
  W = n(177033),
  z = n(355350),
  K = n(307947),
  q = n(96479),
  Q = n(480874),
  X = n(687683),
  J = n(981631),
  $ = n(921944),
  ee = n(526761),
  et = n(689938),
  en = n(757833),
  ei = n(489919);

function ea() {
  let e = a.useRef(null),
t = (0, Y.q)(),
n = (0, W.Z)(),
s = (0, H.K)(),
c = (0, m.N)(),
d = n.length > 0 ? null == n ? void 0 : n[0].channel.id : null,
_ = (0, G.e)({
  location: 'message-request-page-web'
});
  a.useEffect(() => {
if (!!_ && null != d)
  (0, h.ES)(d);
  }, [
d,
_
  ]);
  let E = a.useCallback(() => {
  (0, u.showToast)((0, u.createToast)(et.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, u.ToastType.FAILURE));
}, []),
{
  rejectAll: I
} = (0, V.m)({
  onError: E
}),
g = (0, p.Z)('message-requests-list'),
{
  channelId: T
} = (0, F._)(),
S = a.useCallback(() => {
  I(n.map(e => e.channel.id));
}, [
  n,
  I
]),
f = a.useCallback(e => {
  var t, a;
  let {
    row: l
  } = e, o = n[l], c = null === (a = n[l + 1]) || void 0 === a ? void 0 : null === (t = a.channel) || void 0 === t ? void 0 : t.id, d = o.channel.id;
  return (0, i.jsx)(q.Z, {
    index: l,
    className: r()({
      [en.selected]: null != T && T === d,
      [en.siblingSelected]: null != T && T === c
    }),
    channel: o.channel,
    user: o.user,
    hasSingleMessageRequest: s
  }, d);
}, [
  s,
  n,
  T
]),
C = a.useCallback(() => (0, i.jsxs)(y.Z, {
  className: en.sectionTitle,
  children: [
    t > 0 ? et.Z.Messages.MESSAGE_REQUESTS_PAGE_TITLE_WITH_COUNT.format({
      count: t
    }) : et.Z.Messages.MESSAGE_REQUESTS_PAGE_TITLE,
    c && t > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(u.Text, {
          className: en.titleDivider,
          variant: 'eyebrow',
          color: 'header-secondary',
          tag: 'span',
          children: '\u2022'
        }),
        (0, i.jsx)(u.Button, {
          onClick: S,
          look: u.ButtonLooks.LINK,
          color: u.ButtonColors.LINK,
          size: u.ButtonSizes.SMALL,
          className: en.clearAllButton,
          'aria-label': et.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: et.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })
      ]
    }) : null
  ]
}, 'title'), [
  t,
  S,
  c
]);
  return (n.length !== t && v.Z.increment({
name: o.V.MESSAGE_REQUEST_COUNT_DRIFT
  }), 0 === n.length) ? (0, i.jsx)(K.Z, {
section: X.pS.REQUESTS
  }) : (0, i.jsx)(l.bG, {
navigator: g,
children: (0, i.jsx)(l.SJ, {
  children: t => {
    let {
      ref: a,
      role: s,
      ...r
    } = t;
    return (0, i.jsx)(u.List, {
      className: en.list,
      innerRole: s,
      innerAriaLabel: et.Z.Messages.MESSAGE_REQUESTS,
      ref: t => {
        var n;
        e.current = t, a.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null;
      },
      paddingTop: 24,
      paddingBottom: 24,
      sectionHeight: X.oi,
      rowHeight: X.WN,
      renderSection: C,
      renderRow: f,
      sections: [n.length],
      chunkSize: 30,
      fade: !0,
      ...r
    }, 'message-requests-list');
  }
})
  });
}

function es(e) {
  let {
pageWidth: t,
onSidebarResize: n
  } = e, a = (0, c.e7)([P.ZP], () => P.ZP.getSidebarState(P.uZ)), s = (0, c.e7)([M.Z], () => M.Z.getChannel(null == a ? void 0 : a.channelId));
  if (null == a || a.type !== O.tI.VIEW_MESSAGE_REQUEST || null == s || !s.isPrivate())
return null;
  let r = t - J.R7I;
  return (0, i.jsx)(T.Z, {
sidebarType: T.y.MessageRequestSidebar,
maxWidth: r,
onWidthChange: n,
children: (0, i.jsx)(S.Z, {
  channel: s,
  baseChannelId: P.uZ
})
  });
}
let er = function(e) {
let {
  markAsDismissed: t
} = e;
return (0, i.jsx)(x.ZP, {
  header: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
  content: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
  buttonCTA: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
  className: en.messageRequestCoachmark,
  onClick: () => t($.L.UNKNOWN),
  markAsDismissed: t,
  caretPosition: x.DF.TOP_CENTER,
  headerClassName: en.__invalid_header
});
  },
  el = e => {
let t = (0, B.Z)(),
  n = () => D.Z.hasLayers() || (0, u.hasAnyModalOpen)(),
  s = (0, c.e7)([g.Z], () => g.Z.useReducedMotion);
return a.useEffect(() => {
  (0, C.kk)(d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
}, []), (0, i.jsx)(N.Z, {
  contentTypes: [d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
  children: a => {
    let {
      visibleContent: r,
      markAsDismissed: l
    } = a;
    if (r === d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
      return (0, i.jsx)(u.Popout, {
        renderPopout: () => t ? (0, i.jsx)(er, {
          markAsDismissed: l
        }) : (0, i.jsx)(x.ZP, {
          header: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
          content: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
          buttonCTA: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
          secondaryButtonCTA: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
          className: en.messageRequestCoachmark,
          onClick: e => {
            e.stopPropagation(), E.Z.open(J.oAB.PRIVACY_AND_SAFETY, null, {
              scrollPosition: ee.to.MESSAGE_REQUESTS
            });
          },
          markAsDismissed: l,
          caretPosition: x.DF.TOP_CENTER,
          headerClassName: en.__invalid_header
        }),
        position: 'bottom',
        align: 'center',
        animation: s ? u.Popout.Animation.NONE : u.Popout.Animation.TRANSLATE,
        shouldShow: !n(),
        spacing: 16,
        children: () => e.children
      });
    return e.children;
  }
});
  };

function eo(e) {
  let {
section: t
  } = e;
  return t === X.pS.SPAM ? (0, i.jsx)(Q.Z, {}) : (0, i.jsx)(ea, {});
}
let ec = (0, I.Z)(function(e) {
  let {
width: t
  } = e, n = (0, Y.q)();
  a.useEffect(() => {
_.Y(J.Z5c.MESSAGE_REQUESTS), (0, R.e)('message-requests'), j.default.track(J.rMx.MESSAGE_REQUESTS_VIEWED, {
  num_message_requests: n
}), v.Z.increment({
  name: o.V.MESSAGE_REQUEST_VIEW
});
  }, []);
  let s = (0, c.e7)([b.Z], () => b.Z.theme),
l = (0, z.w)(),
[d, h] = a.useState(!1),
E = (0, c.e7)([P.ZP], () => {
  let e = P.ZP.getSidebarState(P.uZ);
  return null != e && e.type === O.tI.VIEW_MESSAGE_REQUEST ? e : null;
}),
I = null == E ? void 0 : E.channelId,
m = null != E,
g = (0, w.T)(I),
p = (0, k.J)(I);
  a.useEffect(() => {
null != I && !g && p && m && ((0, Z.Kh)(I), L.Z.closeChannelSidebar(P.uZ));
  }, [
I,
p,
m,
g
  ]);
  let [T, S] = a.useState(X.pS.REQUESTS);
  return (0, f.Tt)({
location: et.Z.Messages.MESSAGE_REQUESTS
  }), (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: r()(ei.chat, en.container, {
      [ei.threadSidebarOpen]: m,
      [ei.threadSidebarFloating]: m && d
    }),
    children: [
      (0, i.jsxs)(A.Z, {
        className: (0, U.Q)(s),
        toolbar: !0,
        children: [
          (0, i.jsx)(A.Z.Icon, {
            icon: u.EnvelopeIcon,
            'aria-hidden': !0
          }),
          (0, i.jsx)(el, {
            children: (0, i.jsx)(A.Z.Title, {
              children: et.Z.Messages.MESSAGE_REQUESTS
            })
          }),
          (0, i.jsx)(A.Z.Divider, {}),
          (0, i.jsxs)(u.TabBar, {
            'aria-label': et.Z.Messages.MESSAGE_REQUESTS,
            selectedItem: T,
            type: 'top-pill',
            onItemSelect: e => {
              S(e);
            },
            className: en.__invalid_tabBar,
            children: [
              (0, i.jsx)(u.TabBar.Item, {
                id: X.pS.REQUESTS,
                className: en.__invalid_item,
                children: et.Z.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
              }),
              (0, i.jsx)(u.TabBar.Item, {
                id: X.pS.SPAM,
                className: en.__invalid_item,
                children: 0 === l ? et.Z.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE : et.Z.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE_WITH_COUNT.format({
                  count: l
                })
              })
            ]
          })
        ]
      }),
      (0, i.jsx)('div', {
        className: ei.content,
        children: (0, i.jsx)(eo, {
          section: T
        })
      })
    ]
  }),
  m && (0, i.jsx)(es, {
    pageWidth: t,
    onSidebarResize: (e, t) => {
      h(t);
    }
  })
]
  });
});
t.Z = ec;