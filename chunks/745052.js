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
  E = n(45114),
  h = n(230711),
  m = n(112724),
  I = n(183126),
  g = n(607070),
  p = n(209613),
  T = n(325708),
  S = n(320149),
  f = n(82295),
  C = n(252618),
  N = n(605236),
  A = n(243778),
  v = n(984370),
  Z = n(797614),
  L = n(359110),
  O = n(6025),
  R = n(897473),
  x = n(108427),
  b = n(970731),
  P = n(210887),
  M = n(433355),
  D = n(592125),
  y = n(819640),
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
  en = n(23947),
  ei = n(625032);

function ea() {
  let e = a.useRef(null),
t = (0, Y.q)(),
n = (0, W.Z)(),
s = (0, H.K)(),
c = (0, I.N)(),
d = n.length > 0 ? null == n ? void 0 : n[0].channel.id : null,
_ = (0, G.e)({
  location: 'message-request-page-web'
});
  a.useEffect(() => {
if (!!_ && null != d)
  (0, E.ES)(d);
  }, [
d,
_
  ]);
  let h = a.useCallback(() => {
  (0, u.showToast)((0, u.createToast)(et.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, u.ToastType.FAILURE));
}, []),
{
  rejectAll: m
} = (0, V.m)({
  onError: h
}),
g = (0, p.Z)('message-requests-list'),
{
  channelId: T
} = (0, F._)(),
S = a.useCallback(() => {
  m(n.map(e => e.channel.id));
}, [
  n,
  m
]),
C = a.useCallback(e => {
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
N = a.useCallback(() => (0, i.jsxs)(f.Z, {
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
  return (n.length !== t && Z.Z.increment({
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
      renderSection: N,
      renderRow: C,
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
  } = e, a = (0, c.e7)([M.ZP], () => M.ZP.getSidebarState(M.uZ)), s = (0, c.e7)([D.Z], () => D.Z.getChannel(null == a ? void 0 : a.channelId));
  if (null == a || a.type !== R.tI.VIEW_MESSAGE_REQUEST || null == s || !s.isPrivate())
return null;
  let r = t - J.R7I;
  return (0, i.jsx)(T.Z, {
sidebarType: T.y.MessageRequestSidebar,
maxWidth: r,
onWidthChange: n,
children: (0, i.jsx)(S.Z, {
  channel: s,
  baseChannelId: M.uZ
})
  });
}
let er = function(e) {
let {
  markAsDismissed: t
} = e;
return (0, i.jsx)(b.ZP, {
  header: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
  content: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
  buttonCTA: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
  className: en.messageRequestCoachmark,
  onClick: () => t($.L.UNKNOWN),
  markAsDismissed: t,
  caretPosition: b.DF.TOP_CENTER,
  headerClassName: en.__invalid_header
});
  },
  el = e => {
let t = (0, B.Z)(),
  n = () => y.Z.hasLayers() || (0, u.hasAnyModalOpen)(),
  s = (0, c.e7)([g.Z], () => g.Z.useReducedMotion);
return a.useEffect(() => {
  (0, N.kk)(d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
}, []), (0, i.jsx)(A.ZP, {
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
        }) : (0, i.jsx)(b.ZP, {
          header: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
          content: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
          buttonCTA: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
          secondaryButtonCTA: et.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
          className: en.messageRequestCoachmark,
          onClick: e => {
            e.stopPropagation(), h.Z.open(J.oAB.PRIVACY_AND_SAFETY, null, {
              scrollPosition: ee.to.MESSAGE_REQUESTS
            });
          },
          markAsDismissed: l,
          caretPosition: b.DF.TOP_CENTER,
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
let ec = (0, m.Z)(function(e) {
  let {
width: t
  } = e, n = (0, Y.q)();
  a.useEffect(() => {
_.Y(J.Z5c.MESSAGE_REQUESTS), (0, x.e)('message-requests'), j.default.track(J.rMx.MESSAGE_REQUESTS_VIEWED, {
  num_message_requests: n
}), Z.Z.increment({
  name: o.V.MESSAGE_REQUEST_VIEW
});
  }, []);
  let s = (0, c.e7)([P.Z], () => P.Z.theme),
l = (0, z.w)(),
[d, E] = a.useState(!1),
h = (0, c.e7)([M.ZP], () => {
  let e = M.ZP.getSidebarState(M.uZ);
  return null != e && e.type === R.tI.VIEW_MESSAGE_REQUEST ? e : null;
}),
m = null == h ? void 0 : h.channelId,
I = null != h,
g = (0, w.T)(m),
p = (0, k.J)(m);
  a.useEffect(() => {
null != m && !g && p && I && ((0, L.Kh)(m), O.Z.closeChannelSidebar(M.uZ));
  }, [
m,
p,
I,
g
  ]);
  let [T, S] = a.useState(X.pS.REQUESTS);
  return (0, C.Tt)({
location: et.Z.Messages.MESSAGE_REQUESTS
  }), (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: r()(ei.chat, en.container, {
      [ei.threadSidebarOpen]: I,
      [ei.threadSidebarFloating]: I && d
    }),
    children: [
      (0, i.jsxs)(v.Z, {
        className: (0, U.Q)(s),
        toolbar: !0,
        children: [
          (0, i.jsx)(v.Z.Icon, {
            icon: u.EnvelopeIcon,
            'aria-hidden': !0
          }),
          (0, i.jsx)(el, {
            children: (0, i.jsx)(v.Z.Title, {
              children: et.Z.Messages.MESSAGE_REQUESTS
            })
          }),
          (0, i.jsx)(v.Z.Divider, {}),
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
  I && (0, i.jsx)(es, {
    pageWidth: t,
    onSidebarResize: (e, t) => {
      E(t);
    }
  })
]
  });
});
t.Z = ec;