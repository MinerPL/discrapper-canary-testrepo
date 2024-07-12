s(47120), s(411104);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(392711),
  l = s.n(o),
  c = s(268146),
  d = s(442837),
  _ = s(692547),
  E = s(481060),
  u = s(570140),
  T = s(661111),
  I = s(179658),
  S = s(491428),
  N = s(225433),
  C = s(484614),
  m = s(386506),
  A = s(865427),
  h = s(802098),
  g = s(663993),
  O = s(38618),
  p = s(921801),
  R = s(857192),
  x = s(558724),
  M = s(808506),
  D = s(285952),
  f = s(154921),
  P = s(998502),
  L = s(210887),
  Z = s(601948),
  b = s(726985),
  v = s(981631),
  j = s(908442),
  B = s(302128),
  U = s(735194),
  G = s(549856),
  F = s(986095);

function y(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let V = [
'discord_web',
'discord_marketing',
'discord_developers',
'discord_ios',
'discord_android'
  ],
  Y = [{
  value: 'branch',
  label: 'Branch Name'
},
{
  value: 'id',
  label: 'Build ID'
}
  ];

function w(e) {
  return 'discord_ios' in e || 'discord_android' in e;
}
class k extends a.Component {
  render() {
let {
  project: e,
  overrideType: t,
  overrideId: s,
  disabled: a,
  error: i
} = this.props;
return (0, n.jsxs)(D.Z, {
  direction: D.Z.Direction.VERTICAL,
  className: r()(B.buildOverrideGroup, G.marginBottom20, U.card, B.row),
  children: [
    (0, n.jsx)(N.Z, {
      className: r()(B.removeBuildOverride, {
        [B.removeBuildOverrideDisabled]: a
      }),
      onClick: a ? void 0 : this.handleRemoveBuildOverride
    }),
    (0, n.jsxs)(D.Z, {
      className: G.marginBottom8,
      children: [
        (0, n.jsx)(D.Z.Child, {
          basis: '50%',
          children: (0, n.jsx)(E.FormItem, {
            title: 'Override Type',
            className: B.item,
            children: (0, n.jsx)(E.SingleSelect, {
              options: Y,
              onChange: this.handleOverrideTypeChanged,
              value: t,
              isDisabled: a
            })
          })
        }),
        (0, n.jsx)(D.Z.Child, {
          basis: '50%',
          children: (0, n.jsx)(E.FormItem, {
            title: 'branch' === t ? 'Branch Name' : 'Build ID',
            className: B.item,
            children: (0, n.jsx)(E.TextInput, {
              value: s,
              onChange: this.handleOverrideIdChanged,
              disabled: a
            })
          })
        })
      ]
    }),
    (0, n.jsxs)(D.Z.Child, {
      children: [
        null != i && '' !== i && (0, n.jsx)(E.FormText, {
          className: B.item,
          style: {
            color: _.Z.unsafe_rawColors.RED_400.css
          },
          type: E.FormText.Types.DESCRIPTION,
          children: i
        }),
        (0, n.jsxs)(E.FormText, {
          className: B.item,
          type: E.FormText.Types.DESCRIPTION,
          children: [
            'This controls the build that will be served for the ',
            (0, n.jsx)('code', {
              children: e
            }),
            ' project.'
          ]
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), y(this, 'handleRemoveBuildOverride', () => {
  this.props.onBuildOverrideRemoved(this.props.project);
}), y(this, 'handleOverrideIdChanged', e => {
  this.props.onBuildOverrideUpdated(this.props.project, {
    id: e
  });
}), y(this, 'handleOverrideTypeChanged', e => {
  this.props.onBuildOverrideUpdated(this.props.project, {
    type: e,
    id: ''
  });
});
  }
}
class H extends a.Component {
  async refreshBuildOverrides() {
this.setState({
  loading: !0
});
let e = await (0, A.Ce)();
this.setState({
  loading: !1,
  buildOverrides: e,
  loadedBuildOverrides: l().cloneDeep(e),
  errors: {}
});
  }
  isDirty() {
let {
  buildOverrides: e,
  loadedBuildOverrides: t
} = this.state;
return !l().isEqual(e, t);
  }
  componentDidMount() {
this.refreshBuildOverrides();
  }
  getAvailableProjects() {
let {
  buildOverrides: e
} = this.state;
if (null == e)
  return [];
let t = Object.keys(e);
return l().without(V, ...t);
  }
  renderEmpty() {
return (0, n.jsxs)(E.EmptyState, {
  theme: L.Z.theme,
  className: r()(G.marginTop40, G.marginBottom20),
  children: [
    (0, n.jsx)(E.EmptyStateImage, {
      darkSrc: s(770227),
      lightSrc: s(398684),
      width: 294,
      height: 192
    }),
    (0, n.jsx)(E.EmptyStateText, {
      children: 'You have no build overrides configured.'
    })
  ]
});
  }
  renderItems() {
let {
  buildOverrides: e,
  saving: t,
  errors: s
} = this.state;
return null == e ? null : l().map(e, (e, a) => (0, n.jsx)(k, {
  project: a,
  overrideType: e.type,
  overrideId: e.id,
  disabled: t,
  error: s[a],
  onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
  onBuildOverrideRemoved: this.handleBuildOverrideRemoved
}, a));
  }
  renderRefreshButton() {
return !this.state.didSave || this.isDirty() ? null : (0, n.jsx)(D.Z, {
  grow: 0,
  direction: D.Z.Direction.HORIZONTAL_REVERSE,
  children: (0, n.jsx)(D.Z.Child, {
    grow: 0,
    children: (0, n.jsx)(E.Button, {
      onClick: () => location.reload(),
      color: E.Button.Colors.PRIMARY,
      children: 'Reload App'
    })
  })
});
  }
  renderLinkButton() {
let {
  buildOverrides: e
} = this.state;
return null == e || 0 === Object.keys(e).length ? null : (0, n.jsx)(D.Z, {
  grow: 0,
  direction: D.Z.Direction.HORIZONTAL_REVERSE,
  children: (0, n.jsx)(D.Z.Child, {
    grow: 0,
    children: (0, n.jsx)(E.Button, {
      onClick: this.handleLinkGeneration,
      color: E.Button.Colors.BRAND,
      children: 'Generate Public Link'
    })
  })
});
  }
  renderSaveButton() {
if (!this.isDirty())
  return null;
let {
  saving: e,
  buildOverrides: t
} = this.state;
return (0, n.jsxs)(D.Z, {
  grow: 0,
  direction: D.Z.Direction.HORIZONTAL_REVERSE,
  children: [
    (0, n.jsx)(D.Z.Child, {
      grow: 0,
      children: (0, n.jsx)(E.Button, {
        disabled: w(null != t ? t : {}),
        onClick: this.handleSaveChanges,
        submitting: e,
        color: E.Button.Colors.GREEN,
        children: 'Save Build Overrides'
      })
    }),
    (0, n.jsx)(D.Z.Child, {
      grow: 0,
      children: (0, n.jsx)(E.Button, {
        onClick: this.handleDiscardChanges,
        disabled: e,
        color: E.Button.Colors.RED,
        children: 'Discard Changes'
      })
    })
  ]
});
  }
  render() {
let e;
let {
  loading: t,
  saving: s,
  buildOverrides: a
} = this.state;
e = t ? (0, n.jsx)(E.Spinner, {
  className: G.marginTop20
}) : null != a && 0 === Object.keys(a).length ? this.renderEmpty() : this.renderItems();
let i = !s && !t && this.getAvailableProjects().length > 0,
  r = w(null != a ? a : {}) && 'stable' !== window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, n.jsx)(E.Text, {
    color: 'text-danger',
    variant: 'text-md/normal',
    children: 'Mobile build overrides must be generated using the desktop/web stable client for now!'
  }) : null;
return (0, n.jsx)(p.F, {
  setting: b.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
  children: (0, n.jsxs)(E.FormSection, {
    className: G.marginTop60,
    children: [
      (0, n.jsxs)(D.Z, {
        className: G.marginBottom20,
        children: [
          (0, n.jsx)(D.Z.Child, {
            children: (0, n.jsx)(E.FormTitle, {
              tag: E.FormTitleTags.H1,
              children: 'Build Overrides'
            })
          }),
          (0, n.jsx)(D.Z.Child, {
            grow: 0,
            children: (0, n.jsx)(E.Button, {
              size: E.ButtonSizes.SMALL,
              onClick: this.handleAddBuildOverride,
              disabled: !i,
              children: 'Add Build Override'
            })
          })
        ]
      }),
      (0, n.jsx)(E.FormDivider, {}),
      (0, n.jsxs)(D.Z, {
        direction: D.Z.Direction.VERTICAL,
        children: [
          r,
          e,
          (0, n.jsxs)(D.Z, {
            grow: 0,
            direction: D.Z.Direction.HORIZONTAL_REVERSE,
            children: [
              this.renderRefreshButton(),
              this.renderSaveButton(),
              this.renderLinkButton()
            ]
          })
        ]
      })
    ]
  })
});
  }
  constructor(...e) {
super(...e), y(this, 'state', {
  loading: !0,
  buildOverrides: {},
  loadedBuildOverrides: {},
  errors: {},
  saving: !1,
  didSave: !1
}), y(this, 'handleAddBuildOverride', async () => {
  var e;
  let t = await (e = this.getAvailableProjects(), new Promise(t => {
    (0, E.openModal)(s => {
      let a = e => {
        s.onClose(), t(e);
      };
      return (0, n.jsxs)(E.ModalRoot, {
        ...s,
        'aria-label': 'Choose A Project to Override',
        children: [
          (0, n.jsx)(E.ModalHeader, {
            separator: !1,
            children: (0, n.jsx)(E.Heading, {
              variant: 'heading-lg/semibold',
              children: 'Choose A Project to Override'
            })
          }),
          (0, n.jsx)(E.ModalContent, {
            children: (0, n.jsx)('div', {
              className: B.buildOverrideList,
              children: e.map(e => (0, n.jsx)(E.Button, {
                value: e,
                color: E.Button.Colors.GREEN,
                onClick: () => a(e),
                children: e
              }, e))
            })
          }),
          (0, n.jsx)(E.ModalFooter, {
            children: (0, n.jsx)(E.Button, {
              color: E.Button.Colors.PRIMARY,
              look: E.Button.Looks.LINK,
              onClick: () => a(null),
              children: 'Nevermind'
            })
          })
        ]
      });
    });
  }));
  if (null == t)
    return;
  let s = {
    ...this.state.buildOverrides,
    [t]: {
      type: 'branch',
      id: ''
    }
  };
  this.setState({
    buildOverrides: s
  });
}), y(this, 'handleBuildOverrideUpdated', (e, t) => {
  let {
    buildOverrides: s
  } = this.state, n = {
    ...null != s ? s[e] : {},
    ...t
  }, a = {
    ...this.state.buildOverrides,
    [e]: n
  };
  this.setState({
    buildOverrides: a
  });
}), y(this, 'handleBuildOverrideRemoved', e => {
  let t = {
    ...this.state.buildOverrides
  };
  delete t[e], this.setState({
    buildOverrides: t
  });
}), y(this, 'handleDiscardChanges', () => {
  this.setState({
    buildOverrides: l().cloneDeep(this.state.loadedBuildOverrides),
    errors: {},
    didSave: !1
  });
}), y(this, 'handleSaveChanges', async () => {
  let {
    buildOverrides: e
  } = this.state;
  if (null == e)
    return;
  this.setState({
    saving: !0
  });
  let t = await (0, m.aD)(e);
  if (200 === t.status) {
    let e = t.body;
    this.setState({
      buildOverrides: e,
      loadedBuildOverrides: l().cloneDeep(e),
      errors: {},
      didSave: !0,
      saving: !1
    });
  } else if (400 === t.status) {
    let e = t.body;
    this.setState({
      errors: e,
      saving: !1,
      didSave: !1
    });
  } else
    this.setState({
      saving: !1,
      didSave: !1
    });
}), y(this, 'handleLinkGeneration', () => {
  let {
    buildOverrides: e
  } = this.state;
  (0, E.openModal)(t => (0, n.jsx)(W, {
    ...t,
    buildOverrides: e
  }));
});
  }
}
class W extends a.Component {
  isMobile() {
var e;
return w(null !== (e = this.props.buildOverrides) && void 0 !== e ? e : {});
  }
  renderSettingsForm() {
let {
  ttlSeconds: e,
  releaseChannel: t,
  userIdEntry: s,
  userIdEntryError: a,
  allowedVersions: i,
  allowedVersionEntry: r,
  allowedVersionEntryError: o,
  allowLoggedOut: l,
  experiments: c,
  experimentsError: d
} = this.state, _ = j.S6.find(t => t.value === e), u = i.map(e => ({
  label: e,
  value: e
}));
return (0, n.jsxs)(D.Z.Child, {
  basis: '70%',
  children: [
    (0, n.jsx)(E.FormItem, {
      title: 'Expire After',
      className: G.marginBottom20,
      children: (0, n.jsx)(E.SingleSelect, {
        value: null != _ ? _.value : null,
        options: j.S6,
        onChange: this.handleExpirationChange
      })
    }),
    this.isMobile() ? null : (0, n.jsx)(E.FormItem, {
      title: 'Release Channel',
      className: G.marginBottom20,
      children: (0, n.jsx)(E.SingleSelect, {
        value: t,
        options: j.F$,
        onChange: this.handleReleaseChannelChange
      })
    }),
    this.isMobile() ? (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(E.FormItem, {
          title: 'Add allowed app version (required)',
          className: G.marginBottom20,
          children: (0, n.jsxs)(D.Z, {
            direction: D.Z.Direction.HORIZONTAL,
            children: [
              (0, n.jsx)(D.Z.Child, {
                wrap: !0,
                basis: '90%',
                children: (0, n.jsx)(E.TextInput, {
                  autoFocus: !0,
                  value: r,
                  onKeyPress: this.handleAllowedVersionEnter,
                  error: o,
                  onChange: this.handleAllowedVersionEntry,
                  placeholder: 'Example: 34'
                })
              }),
              (0, n.jsx)(E.Button, {
                onClick: this.handleAddAllowedVersion,
                children: 'Add'
              })
            ]
          })
        }),
        (0, n.jsx)(E.FormItem, {
          title: 'Remove allowed app version',
          className: G.marginBottom20,
          children: (0, n.jsx)(E.SingleSelect, {
            value: null,
            options: u,
            onChange: this.handleRemoveAllowedVersion,
            isDisabled: 0 === i.length
          })
        })
      ]
    }) : null,
    this.isMobile() ? null : (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)(E.FormItem, {
        title: 'Limit to User IDs (optional)',
        className: G.marginBottom20,
        children: [
          (0, n.jsx)(D.Z, {
            direction: D.Z.Direction.HORIZONTAL,
            children: (0, n.jsx)(D.Z.Child, {
              wrap: !0,
              basis: '90%',
              children: (0, n.jsx)(E.TextArea, {
                value: s,
                error: a,
                onBlur: () => this.setUserEntryError(''),
                onChange: this.handleUserIDEntry
              })
            })
          }),
          (0, n.jsx)(E.Text, {
            variant: 'text-sm/normal',
            color: 'text-muted',
            className: G.marginTop8,
            children: 'User IDs can be separated by whitespace or commas.'
          })
        ]
      })
    }),
    (0, n.jsxs)(E.FormItem, {
      title: 'Client Experiment Override',
      className: G.marginBottom20,
      children: [
        (0, n.jsx)(D.Z, {
          direction: D.Z.Direction.HORIZONTAL,
          children: (0, n.jsx)(D.Z.Child, {
            wrap: !0,
            basis: '90%',
            children: (0, n.jsx)(E.TextArea, {
              value: c,
              error: d,
              onChange: this.handleExperiments,
              placeholder: '{"2022-01_threads":1}'
            })
          })
        }),
        (0, n.jsx)(E.Text, {
          variant: 'text-sm/normal',
          color: 'text-muted',
          className: G.marginTop8,
          children: 'Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.'
        })
      ]
    }),
    (0, n.jsx)(E.FormSwitch, {
      onChange: this.handleAllowLoggedOut,
      value: l,
      children: 'Allow logged out users'
    })
  ]
});
  }
  renderPayloadBlock() {
let e = JSON.stringify(this.generatePayload(), null, 2),
  t = () => e,
  a = (0, n.jsx)(g.GI, {
    createPromise: () => Promise.resolve().then(s.bind(s, 364964)),
    webpackId: 364964,
    renderFallback: t,
    render: s => {
      let a = s.highlight('json', e, !0);
      return null == a ? t() : (0, n.jsx)('code', {
        className: 'hljs scroller '.concat(a.language, ' ').concat(F.scrollbarGhost, ' ').concat(B.codebox),
        dangerouslySetInnerHTML: {
          __html: a.value
        }
      });
    }
  });
return (0, n.jsx)(D.Z.Child, {
  children: (0, n.jsx)(E.Card, {
    children: (0, n.jsx)('pre', {
      children: a
    })
  })
});
  }
  renderLinkForm() {
let {
  statusTextColor: e,
  statusText: t,
  publicLink: s
} = this.state;
return (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(E.FormItem, {
      title: 'Signed Link',
      children: (0, n.jsxs)(D.Z, {
        children: [
          (0, n.jsx)(D.Z.Child, {
            wrap: !0,
            basis: '75%',
            children: (0, n.jsx)(C.Z, {
              value: s
            })
          }),
          (0, n.jsx)(E.Button, {
            onClick: this.handleGenerateLink,
            children: 'Generate Link'
          })
        ]
      })
    }),
    (0, n.jsx)(f.Z, {
      color: e,
      className: ''.concat(G.marginBottom8, ' ').concat(G.marginTop8),
      children: t
    })
  ]
});
  }
  render() {
let {
  onClose: e,
  transitionState: t
} = this.props;
return (0, n.jsxs)(E.ModalRoot, {
  size: E.ModalSize.LARGE,
  transitionState: t,
  'aria-label': 'Generate Public Build Override Link',
  children: [
    (0, n.jsxs)(E.ModalHeader, {
      justify: D.Z.Justify.BETWEEN,
      separator: !1,
      children: [
        (0, n.jsx)(E.Heading, {
          variant: 'heading-lg/semibold',
          children: 'Generate Public Build Override Link'
        }),
        (0, n.jsx)(E.ModalCloseButton, {
          onClick: e
        })
      ]
    }),
    (0, n.jsxs)(E.ModalContent, {
      children: [
        (0, n.jsxs)(D.Z, {
          children: [
            this.renderSettingsForm(),
            this.renderPayloadBlock()
          ]
        }),
        this.renderLinkForm()
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), y(this, 'state', {
  ttlSeconds: 3600,
  releaseChannel: 'all',
  userIds: new Set(),
  userIdEntry: '',
  userIdEntryError: null,
  allowedVersions: [],
  allowedVersionEntry: '',
  allowedVersionEntryError: null,
  publicLink: ' ',
  statusText: null,
  statusTextColor: f.Z.Colors.STATUS_RED,
  allowLoggedOut: !1
}), y(this, 'setUserEntryError', e => {
  this.setState({
    userIdEntryError: e
  });
}), y(this, 'setStatusMessage', (e, t) => {
  this.setState({
    statusText: e,
    statusTextColor: null != t ? t : f.Z.Colors.STATUS_RED
  });
}), y(this, 'handleUserIDEntry', e => {
  if (!/^[\d\s,]*$/.test(e))
    return this.setUserEntryError('User IDs are numbers!');
  let t = new Set(e.split(/[,\s]+/).filter(Boolean));
  this.setState({
    userIdEntry: e,
    userIds: t
  });
}), y(this, 'setAllowedVersionError', e => {
  this.setState({
    allowedVersionEntryError: e
  });
}), y(this, 'handleAllowedVersionEntry', e => {
  this.setState({
    allowedVersionEntry: e
  });
}), y(this, 'handleAllowedVersionEnter', e => {
  e.charCode === v.yXg.ENTER && this.handleAddAllowedVersion();
}), y(this, 'handleAddAllowedVersion', () => {
  let {
    allowedVersions: e,
    allowedVersionEntry: t
  } = this.state;
  return 0 === (t = t.trim()).length ? this.setAllowedVersionError('Enter a valid version number!') : e.indexOf(t) >= 0 ? this.setAllowedVersionError('You already added that version!') : void this.setState({
    allowedVersions: [
      ...e,
      t
    ],
    allowedVersionEntry: '',
    allowedVersionEntryError: ''
  });
}), y(this, 'handleRemoveAllowedVersion', e => {
  let {
    allowedVersions: t
  } = this.state;
  t = t.filter(t => t !== e), this.setState({
    allowedVersions: t
  });
}), y(this, 'handleAllowLoggedOut', e => {
  this.setState({
    allowLoggedOut: e
  });
}), y(this, 'handleExpirationChange', e => {
  this.setState({
    ttlSeconds: e
  });
}), y(this, 'handleReleaseChannelChange', e => {
  this.setState({
    releaseChannel: e
  });
}), y(this, 'handleExperiments', e => {
  if (0 === e.trim().length) {
    this.setState({
      experimentsError: void 0
    });
    return;
  }
  try {
    let t = JSON.parse(e);
    for (let e in t) {
      if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/)) {
        this.setState({
          experimentsError: ''.concat(e, ' is an invalid experiment name')
        });
        return;
      }
      if ('number' != typeof t[e]) {
        this.setState({
          experimentsError: ''.concat(e, ' has an invalid bucket override')
        });
        return;
      }
    }
  } catch (e) {
    this.setState({
      experimentsError: 'Unable to parse experiments '.concat(e.message)
    });
    return;
  }
  this.setState({
    experiments: e,
    experimentsError: void 0
  });
}), y(this, 'generatePayload', () => ({
  overrides: this.props.buildOverrides,
  meta: {
    release_channel: 'all' === this.state.releaseChannel ? null : this.state.releaseChannel,
    ttl_seconds: this.state.ttlSeconds,
    user_ids: Array.from(this.state.userIds),
    allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
    allow_logged_out: this.state.allowLoggedOut,
    experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments)
  }
})), y(this, 'handleGenerateLink', async () => {
  if (this.isMobile() && 0 === this.state.allowedVersions.length) {
    this.setAllowedVersionError('You must add at least one allowed version for iOS');
    return;
  }
  this.setStatusMessage(null);
  let e = this.generatePayload(),
    t = await (0, m.M3)(e);
  !1 !== t.error ? this.setStatusMessage(JSON.stringify(t.error), f.Z.Colors.STATUS_RED) : (this.setState({
    publicLink: t.url.toString()
  }), 0 === e.meta.user_ids.length && this.setStatusMessage('Warning! No users added to the whitelist! This link could be used by anyone to override their build.', f.Z.Colors.STATUS_YELLOW));
});
  }
}

function K() {
  throw Error('Send help');
}

function z() {
  let [e, t] = a.useState(!1), [s, i] = a.useState('');
  return (a.useEffect(() => {
(async () => {
  i(await (0, M.Y)());
})();
  }, []), e) ? {} : (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)('div', {
    className: [
      B.buttonsContainer,
      G.marginBottom20
    ].join(' '),
    children: [
      (0, n.jsx)(p.F, {
        setting: b.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
        children: (0, n.jsx)(E.Button, {
          onClick: () => window.open(s, '_blank'),
          disabled: '' === s,
          children: 'Open Overlay'
        })
      }),
      (0, n.jsx)(p.F, {
        setting: b.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
        children: (0, n.jsx)(E.Button, {
          onClick: () => {
            O.Z.getSocket().close(), O.Z.getSocket().connect();
          },
          children: 'Reset Socket'
        })
      }),
      (0, n.jsx)(p.F, {
        setting: b.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
        children: (0, n.jsx)(E.Button, {
          onClick: () => {
            u.Z.dispatch({
              type: 'CLEAR_CACHES',
              reason: 'Requested by user',
              preventWritingCachesAgainThisSession: !0,
              resetSocket: !0
            });
          },
          children: 'Clear Caches'
        })
      })
    ]
  }),
  (0, n.jsx)(p.F, {
    setting: b.s6.DEVELOPER_OPTIONS_CRASHES,
    children: (0, n.jsx)(E.FormSection, {
      title: 'Crashes',
      tag: E.FormTitleTags.H1,
      children: (0, n.jsxs)('div', {
        className: B.buttonsContainer,
        children: [
          (0, n.jsx)(E.SingleSelect, {
            value: void 0,
            options: [{
                value: void 0,
                label: 'Native libdiscord crash'
              },
              {
                value: 0,
                label: 'Abort()'
              },
              {
                value: 1,
                label: 'SIGSEGV()'
              },
              {
                value: 2,
                label: 'EXCEPTION_ACCESS_VIOLATION'
              },
              {
                value: 3,
                label: 'RaiseFailFastException'
              },
              {
                value: 4,
                label: 'Out of Memory'
              }
            ],
            onChange: e => null != e && P.ZP.crash(e)
          }),
          (0, n.jsx)(E.SingleSelect, {
            value: void 0,
            options: [{
                value: void 0,
                label: 'Native JS crash'
              },
              {
                value: c.Xo.RendererProcessDelayed,
                label: 'Delayed exception in renderer process'
              },
              {
                value: c.Xo.RendererProcess,
                label: 'Exception in renderer process'
              },
              {
                value: c.Xo.MainProcess,
                label: 'Exception in main process'
              }
            ],
            onChange: e => {
              var t;
              return null != e ? (t = e, void P.ZP.triggerJSException(t)) : void 0;
            }
          }),
          (0, n.jsx)(E.Button, {
            onClick: () => t(!0),
            children: 'React Crash'
          }),
          (0, n.jsx)(E.Button, {
            onClick: K,
            children: 'onClick Throw'
          })
        ]
      })
    })
  })
]
  });
}
let Q = d.ZP.connectStores([R.default], () => ({
  isTracingRequests: R.default.isTracingRequests,
  isForcedCanary: R.default.isForcedCanary,
  isLoggingGatewayEvents: R.default.isLoggingGatewayEvents,
  isLoggingOverlayEvents: R.default.isLoggingOverlayEvents,
  isLoggingAnalyticsEvents: R.default.isLoggingAnalyticsEvents,
  isAxeEnabled: R.default.isAxeEnabled,
  isSourceMapsEnabled: R.default.sourceMapsEnabled,
  isAnalyticsDebuggerEnabled: R.default.isAnalyticsDebuggerEnabled,
  isIdleStatusIndicatorEnabled: R.default.isIdleStatusIndicatorEnabled,
  appDirectoryIncludesInactiveCollections: R.default.appDirectoryIncludesInactiveCollections
}))(e => {
  let {
isTracingRequests: t,
isForcedCanary: s,
isLoggingGatewayEvents: a,
isLoggingOverlayEvents: i,
isLoggingAnalyticsEvents: r,
isAxeEnabled: o,
isSourceMapsEnabled: l,
isAnalyticsDebuggerEnabled: c,
isIdleStatusIndicatorEnabled: d,
appDirectoryIncludesInactiveCollections: _
  } = e;
  return (0, n.jsx)(p.F, {
setting: b.s6.DEVELOPER_OPTIONS_FLAGS,
children: (0, n.jsxs)(E.FormSection, {
  title: 'Developer Flags',
  tag: E.FormTitleTags.H1,
  children: [
    (0, n.jsx)(p.F, {
      setting: b.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
      children: (0, n.jsx)(E.FormSwitch, {
        value: t,
        note: 'Force trace all client requests with APM',
        onChange: e => (0, I.y)({
          trace: e
        }),
        children: 'Enable Tracing Requests'
      })
    }),
    (0, n.jsx)(p.F, {
      setting: b.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
      children: (0, n.jsx)(E.FormSwitch, {
        value: s,
        note: 'Force all API requests to canary instances',
        onChange: e => (0, I.y)({
          canary: e
        }),
        children: 'Enable Forced Canary'
      })
    }),
    (0, n.jsx)(p.F, {
      setting: b.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
      children: (0, n.jsx)(E.FormSwitch, {
        value: a,
        note: 'Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.',
        onChange: e => (0, I.y)({
          logGatewayEvents: e
        }),
        children: 'Enable Logging of Gateway Events to Console'
      })
    }),
    (0, n.jsx)(p.F, {
      setting: b.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
      children: (0, n.jsx)(E.FormSwitch, {
        value: i,
        note: 'Logs all overlay related RPC events. Super noisy if an overlay is connected',
        onChange: e => (0, I.y)({
          logOverlayEvents: e
        }),
        children: 'Enable Logging of Overlay RPC Events & Commands'
      })
    }),
    (0, n.jsx)(p.F, {
      setting: b.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
      children: (0, n.jsx)(E.FormSwitch, {
        value: r,
        note: 'Logs all analytics events to the developer console',
        onChange: e => (0, I.y)({
          logAnalyticsEvents: e
        }),
        children: 'Enable Logging of Analytics Events'
      })
    }),
    (0, n.jsx)(p.F, {
      setting: b.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
      children: (0, n.jsx)(E.FormSwitch, {
        value: l,
        note: 'Only enable on devices you trust.',
        onChange: e => (0, I.y)({
          sourceMapsEnabled: e
        }),
        children: 'Enable source maps to be loaded on this client'
      })
    }),
    (0, n.jsx)(p.F, {
      setting: b.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
      children: (0, n.jsx)(E.FormSwitch, {
        value: c,
        note: 'Displays a floating debugger with viewed impressions',
        onChange: e => (0, I.y)({
          analyticsDebuggerEnabled: e
        }),
        children: 'Enable standard analytics debugger view'
      })
    }),
    (0, n.jsx)(p.F, {
      setting: b.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
      children: (0, n.jsx)(E.FormSwitch, {
        value: d,
        note: 'Displays a floating idle status indicator',
        onChange: e => (0, I.y)({
          idleStatusIndicatorEnabled: e
        }),
        children: 'Enable idle status indicator'
      })
    }),
    (0, n.jsx)(p.F, {
      setting: b.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
      children: (0, n.jsx)(E.FormSwitch, {
        value: o,
        note: 'Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development',
        onChange: e => (0, I.y)({
          axeEnabled: e
        }),
        children: 'Enable Accessibility Auditing'
      })
    }),
    (0, n.jsx)(p.F, {
      setting: b.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
      children: (0, n.jsx)(E.FormSwitch, {
        value: _,
        note: 'In App Directory, include inactive collections on the homepage. Use this to preview changes to collections before publishing them.',
        onChange: e => (0, I.y)({
          appDirectoryIncludesInactiveCollections: e
        }),
        children: 'Preview Unpublished Collections on App Directory Homepage'
      })
    }),
    (0, n.jsxs)(p.F, {
      setting: b.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
      children: [
        (0, n.jsx)('div', {
          className: [
            B.buttonsContainer,
            G.marginBottom20
          ].join(' '),
          children: (0, n.jsx)(Z.S, {})
        }),
        (0, n.jsx)(E.FormDivider, {
          className: B.divider
        })
      ]
    })
  ]
})
  });
});

function X() {
  let e = (0, d.e7)([x.Z], () => x.Z.getSurveyOverride()),
[t, s] = a.useState(null != e ? e : '');
  return (0, n.jsx)(p.F, {
setting: b.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
children: (0, n.jsxs)(E.FormSection, {
  tag: E.FormTitleTags.H1,
  title: 'Survey Override',
  className: G.marginTop60,
  children: [
    (0, n.jsx)(E.FormTitle, {
      children: 'Copy the ID of the Survey you want to test:'
    }),
    (0, n.jsxs)('form', {
      className: B.surveyOverride,
      onSubmit: e => {
        e.preventDefault(), t.length > 0 ? S.Xq(t) : S.Xq(null);
      },
      children: [
        (0, n.jsx)(E.TextInput, {
          className: B.surveyOverrideInput,
          value: t,
          onChange: s
        }),
        (0, n.jsx)(E.Button, {
          type: 'submit',
          children: 'Save Override'
        })
      ]
    })
  ]
})
  });
}

function q() {
  var e;
  let t = (0, d.e7)([h.Z], () => h.Z.overrideId()),
[s, i] = a.useState(null !== (e = h.Z.overrideId()) && void 0 !== e ? e : '');
  return (0, n.jsx)(p.F, {
setting: b.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
children: (0, n.jsxs)(E.FormSection, {
  tag: E.FormTitleTags.H1,
  title: 'Changelog Override',
  className: G.marginTop60,
  children: [
    (0, n.jsx)(E.FormTitle, {
      children: 'Enter the ID of the changelog you want to test'
    }),
    (0, n.jsxs)('div', {
      className: B.surveyOverride,
      children: [
        (0, n.jsx)(E.TextInput, {
          className: B.surveyOverrideInput,
          value: s,
          onChange: i
        }),
        (0, n.jsx)(E.Button, {
          onClick: () => {
            '' === s ? T.Z.setChangelogOverride(null) : T.Z.setChangelogOverride(s);
          },
          disabled: t === s,
          children: 'Update Changelog'
        })
      ]
    })
  ]
})
  });
}
class J extends a.PureComponent {
  render() {
return (0, n.jsxs)(a.Fragment, {
  children: [
    (0, n.jsx)(Q, {}),
    (0, n.jsx)(z, {}),
    (0, n.jsx)(X, {}),
    (0, n.jsx)(q, {}),
    (0, n.jsx)(H, {})
  ]
});
  }
}
t.Z = J;