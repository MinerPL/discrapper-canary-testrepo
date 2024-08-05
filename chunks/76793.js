s.d(t, {
  Z: function() {
return R;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(232567),
  l = s(700582),
  c = s(718629),
  d = s(615830),
  _ = s(630759),
  E = s(931500),
  u = s(921157),
  T = s(171368),
  I = s(594174),
  S = s(51144),
  N = s(760373),
  C = s(689938),
  m = s(212491),
  A = s(549856);

function g(e) {
  let {
userId: t,
count: s
  } = e, c = (0, i.e7)([I.default], () => I.default.getUser(t)), d = S.ZP.getFormattedName(c), E = a.useCallback(() => {
(0, _.Zn)(t);
  }, [t]), u = a.useCallback(() => (0, T.openUserProfileModal)({
userId: t
  }), [t]);
  return a.useEffect(() => {
(0, o.PR)(t);
  }, [t]), (0, n.jsxs)('div', {
className: m.section,
children: [
  null != c && (0, n.jsx)(l.Z, {
    className: m.avatar,
    user: c,
    size: r.AvatarSizes.SIZE_40
  }),
  (0, n.jsxs)('div', {
    className: m.text,
    children: [
      (0, n.jsx)(r.Clickable, {
        className: m.username,
        onClick: u,
        children: (0, n.jsx)(r.Text, {
          variant: 'text-md/semibold',
          color: 'interactive-active',
          children: d
        })
      }),
      (0, n.jsx)(r.Text, {
        variant: 'text-md/medium',
        color: 'header-secondary',
        children: C.Z.Messages.E2EE_DEVICES_COUNT.format({
          count: s
        })
      })
    ]
  }),
  (0, n.jsx)(r.Clickable, {
    onClick: E,
    className: m.sectionIconContainer,
    children: (0, n.jsx)(r.TrashIcon, {
      size: 'xs'
    })
  })
]
  });
}

function h(e) {
  let {
className: t,
userId: s,
verification: i,
index: o
  } = e, l = (0, _.bo)(i.timestamp), c = a.useCallback(() => {
(0, _.ZU)(s, i.verifiedKey);
  }, [
i.verifiedKey,
s
  ]);
  return (0, n.jsxs)('div', {
className: t,
children: [
  (0, n.jsxs)('div', {
    className: m.text,
    children: [
      (0, n.jsx)(r.Text, {
        variant: 'text-sm/semibold',
        color: 'interactive-active',
        children: C.Z.Messages.E2EE_ANONYMOUS_DEVICE_TAG.format({
          index: o
        })
      }),
      (0, n.jsx)(r.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: l
      })
    ]
  }),
  (0, n.jsx)(r.Clickable, {
    className: m.icon,
    onClick: c,
    children: (0, n.jsx)(r.CloseSmallIcon, {
      size: 'md',
      color: r.tokens.colors.INTERACTIVE_NORMAL
    })
  })
]
  });
}

function O(e) {
  let {
userId: t
  } = e, s = (0, E._)(t);
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(g, {
    userId: t,
    count: s.length
  }),
  s.map((e, i) => (0, n.jsxs)(a.Fragment, {
    children: [
      (0, n.jsx)(h, {
        className: m.row,
        userId: t,
        index: i,
        verification: e
      }),
      i !== s.length - 1 && (0, n.jsx)('div', {
        className: m.divider
      })
    ]
  }, ''.concat(i, '-').concat(e.timestamp)))
]
  });
}

function p(e) {
  let {
userIds: t
  } = e;
  return 0 === t.length ? null : (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(r.FormItem, {
    className: A.marginBottom20,
    children: [
      (0, n.jsx)(r.FormTitle, {
        tag: r.FormTitleTags.H5,
        className: A.marginBottom8,
        children: C.Z.Messages.E2EE_VERIFIED_DEVICES
      }),
      (0, n.jsx)(r.FormText, {
        type: r.FormTextTypes.DESCRIPTION,
        children: C.Z.Messages.E2EE_VERIFIED_DEVICES_DESCRIPTION.format({
          helpArticle: N.s9
        })
      })
    ]
  }),
  t.map(e => (0, n.jsx)('div', {
    className: m.item,
    children: (0, n.jsx)(O, {
      userId: e
    })
  }, e))
]
  });
}

function R() {
  let e = (0, i.e7)([d.Z], () => d.Z.getPersistentCodesEnabled()),
t = a.useCallback(e => {
  c.Z.updatePersistentCodesEnabled(e);
}, []),
s = (0, u.s)();
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: C.Z.Messages.E2EE_END_TO_END_ENCRYPTION,
    children: [
      (0, n.jsx)(r.FormText, {
        type: r.FormTextTypes.DESCRIPTION,
        className: A.marginBottom20,
        children: C.Z.Messages.E2EE_SETTINGS_SUBTITLE.format({
          helpArticle: N.l4
        })
      }),
      (0, n.jsxs)(r.FormItem, {
        children: [
          (0, n.jsx)(r.FormTitle, {
            tag: r.FormTitleTags.H5,
            className: A.marginBottom8,
            children: C.Z.Messages.E2EE_VERIFICATION_CODES
          }),
          (0, n.jsx)(r.FormSwitch, {
            hideBorder: 0 === s.length,
            value: e,
            note: C.Z.Messages.E2EE_PERSISTENT_CODES_DESCRIPTION.format({
              helpArticle: N.$J
            }),
            onChange: t,
            children: C.Z.Messages.E2EE_ENABLE_PERSISTENT_CODES
          })
        ]
      })
    ]
  }),
  (0, n.jsx)(p, {
    userIds: s
  })
]
  });
}