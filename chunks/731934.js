n(627341);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(278074),
  o = n(91192),
  c = n(481060),
  d = n(209613),
  _ = n(863653),
  u = n(151827),
  E = n(785681),
  T = n(485664),
  I = n(880257),
  R = n(631885),
  C = n(895328),
  g = n(568671),
  p = n(419821),
  A = n(367515),
  m = n(250285),
  N = n(292352),
  f = n(134612),
  h = n(689938),
  S = n(277421),
  M = n(549856),
  x = n(926895);

function b(e) {
  let {
header: t,
description: n,
stepNumber: a
  } = e;
  return (0, s.jsxs)('div', {
className: S.step,
children: [
  (0, s.jsx)('div', {
    className: S.stepNumber,
    children: (0, s.jsx)(c.Heading, {
      variant: 'heading-md/semibold',
      color: 'text-brand',
      children: (0, s.jsx)(c.HeadingLevel, {
        children: a
      })
    })
  }),
  (0, s.jsxs)('div', {
    children: [
      (0, s.jsx)(c.Heading, {
        variant: 'heading-sm/bold',
        children: (0, s.jsx)(c.HeadingLevel, {
          children: t
        })
      }),
      (0, s.jsx)(c.Text, {
        variant: 'text-sm/medium',
        color: 'text-muted',
        children: n
      })
    ]
  })
]
  });
}

function O() {
  return (0, s.jsxs)('div', {
className: i()(S.box, S.linkingBanner, S.linkingBannerParent),
children: [
  (0, s.jsxs)('div', {
    className: i()(S.linkingBannerUpper),
    children: [
      (0, s.jsxs)('div', {
        className: S.__invalid_header,
        children: [
          (0, s.jsx)(c.Heading, {
            className: M.marginBottom8,
            variant: 'heading-xl/medium',
            children: (0, s.jsx)(c.HeadingLevel, {
              children: h.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_PARENT
            })
          }),
          (0, s.jsx)(c.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            className: M.marginBottom20,
            children: h.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_PARENT
          })
        ]
      }),
      (0, s.jsx)('img', {
        className: S.bannerArt,
        src: x,
        alt: h.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
      })
    ]
  }),
  (0, s.jsxs)('div', {
    className: S.steps,
    children: [
      (0, s.jsx)(b, {
        header: h.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_HEADER,
        description: h.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_DESCRIPTION,
        stepNumber: 1
      }),
      (0, s.jsx)(b, {
        header: h.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_HEADER,
        description: h.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_DESCRIPTION,
        stepNumber: 2
      }),
      (0, s.jsx)(b, {
        header: h.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_HEADER,
        description: h.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_DESCRIPTION,
        stepNumber: 3
      })
    ]
  })
]
  });
}

function P() {
  let e = (0, R.VM)();
  return (0, s.jsxs)('div', {
className: i()(S.box, S.linkingBanner),
children: [
  (0, s.jsxs)('div', {
    children: [
      (0, s.jsx)(c.Heading, {
        className: M.marginBottom8,
        variant: 'heading-xl/medium',
        children: (0, s.jsx)(c.HeadingLevel, {
          children: h.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_TEEN
        })
      }),
      (0, s.jsx)(c.Text, {
        variant: 'text-sm/medium',
        color: 'text-muted',
        className: M.marginBottom20,
        children: h.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_TEEN.format({
          link: 'https://support.discord.com/hc/articles/14155060633623'
        })
      }),
      e ? null : (0, s.jsx)(g.Z, {})
    ]
  }),
  (0, s.jsx)('img', {
    className: S.bannerArt,
    src: x,
    alt: h.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
  })
]
  });
}

function v(e) {
  let {
sectionType: t,
sectionTitle: n,
requests: r
  } = e, i = a.useRef(null), l = ''.concat(t, '-list'), _ = (0, d.Z)(l), E = a.useCallback(e => {
let {
  row: n,
  listIndex: a
} = e, i = r[n], l = a === r.length;
return null == i ? null : (0, s.jsx)(m.Z, {
  userId: i.id,
  isLast: l,
  children: () => t === N.ne.ACTIVE ? (0, s.jsx)(p.u, {
    user: i
  }) : (0, s.jsx)(A.B, {
    user: i
  })
}, i.id);
  }, [
r,
t
  ]), T = a.useCallback(() => (0, s.jsx)(u.Z, {
className: S.__invalid_sectionTitle,
children: (0, s.jsx)(c.Text, {
  className: M.marginBottom8,
  variant: 'eyebrow',
  color: 'header-secondary',
  children: n
})
  }, 'title'), [n]);
  return (0, s.jsx)('div', {
className: S.section,
children: (0, s.jsx)(o.bG, {
  navigator: _,
  children: (0, s.jsx)(o.SJ, {
    children: e => {
      let {
        ref: t,
        role: a,
        ...o
      } = e;
      return (0, s.jsx)(c.List, {
        className: S.__invalid_list,
        innerRole: a,
        innerAriaLabel: n,
        ref: e => {
          var n;
          i.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
        },
        sectionHeight: N.zE,
        rowHeight: N.ip,
        renderSection: T,
        renderRow: E,
        sections: [r.length],
        chunkSize: 30,
        fade: !0,
        ...o
      }, l);
    }
  })
})
  });
}
let L = () => {
let e = (0, I.Z)(),
  t = (0, R.mq)(N.ne.ACTIVE),
  n = e ? N.AG : N.i0,
  a = {
    count: t.length,
    max: n
  },
  r = (0, E.o)(h.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_TEEN.format(a), h.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_PARENT.format(a));
return (0, s.jsx)(s.Fragment, {
  children: t.length > 0 ? (0, s.jsx)(v, {
    sectionType: N.ne.ACTIVE,
    sectionTitle: r,
    requests: t
  }) : (0, s.jsxs)('div', {
    className: S.section,
    children: [
      (0, s.jsx)(c.Text, {
        className: M.marginBottom8,
        variant: 'eyebrow',
        color: 'header-secondary',
        children: r
      }),
      (0, s.jsx)('div', {
        className: S.box,
        children: (0, s.jsx)(C.Z, {
          text: h.Z.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_EMPTY_DESCRIPTION
        })
      })
    ]
  })
});
  },
  Z = () => {
let e = (0, R.VM)(),
  t = (0, I.Z)() ? N.AG : N.i0,
  n = (0, E.o)(h.Z.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_TEEN.format({
    maxConnections: t
  }), h.Z.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_PARENT.format({
    maxConnections: t
  }));
return e ? (0, s.jsx)('div', {
  className: S.maxConnectionInfo,
  children: (0, s.jsx)(c.Text, {
    variant: 'text-xxs/medium',
    color: 'text-muted',
    children: n
  })
}) : null;
  },
  D = () => {
let e = (0, T.o)(),
  t = (0, _.zF)('family-center-requests-page-desktop'),
  n = (0, l.EQ)({
    helpline: e,
    throughline: t
  }).with({
    helpline: !0
  }, () => h.Z.Messages.FAMILY_CENTER_HELP_LINE_CONTENT.format({
    helpLink: 'https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line'
  })).with({
    throughline: !0
  }, () => h.Z.Messages.FAMILY_CENTER_THROUGHLINE_CONTENT.format({
    helpLink: f.$l
  })).otherwise(() => null);
return null == n ? null : (0, s.jsxs)('div', {
  className: i()(S.__invalid_helpLineInfo, M.marginTop20),
  children: [
    (0, s.jsx)(c.Heading, {
      className: S.supportHeader,
      variant: 'heading-sm/semibold',
      children: (0, s.jsx)(c.HeadingLevel, {
        children: h.Z.Messages.FAMILY_CENTER_HELP_LINE_HEADER
      })
    }),
    (0, s.jsx)(c.Text, {
      variant: 'text-xs/medium',
      color: 'text-muted',
      children: n
    })
  ]
});
  },
  B = () => {
let e = (0, R.mq)(N.ne.PENDING),
  t = (0, E.o)(h.Z.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_TEEN.format({
    count: e.length
  }), h.Z.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_PARENT.format({
    count: e.length
  }));
return 0 === e.length ? null : (0, s.jsx)(v, {
  sectionType: N.ne.PENDING,
  sectionTitle: t,
  requests: e
});
  };
t.Z = () => {
  let e = (0, I.Z)();
  return (0, s.jsxs)('div', {
className: S.container,
children: [
  e ? (0, s.jsx)(O, {}) : (0, s.jsx)(P, {}),
  (0, s.jsx)(L, {}),
  (0, s.jsx)(B, {}),
  (0, s.jsx)(Z, {}),
  (0, s.jsx)(D, {})
]
  });
};