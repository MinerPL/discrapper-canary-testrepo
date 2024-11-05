n(47120), n(411104);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(268146),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    h = n(570140),
    g = n(661111),
    p = n(179658),
    x = n(491428),
    S = n(225433),
    T = n(484614),
    C = n(386506),
    _ = n(865427),
    E = n(802098),
    f = n(663993),
    I = n(600164),
    N = n(118012),
    A = n(482215),
    b = n(38618),
    v = n(568963),
    j = n(388627),
    O = n(921801),
    R = n(857192),
    P = n(558724),
    D = n(808506),
    y = n(998502),
    B = n(210887),
    L = n(601948),
    Z = n(726985),
    F = n(981631),
    M = n(908442),
    k = n(933553),
    w = n(869042),
    U = n(113207),
    V = n(112864);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let Y = ['discord_web', 'discord_marketing', 'discord_developers', 'discord_ios', 'discord_android'],
    H = [
        {
            value: 'branch',
            label: 'Branch Name'
        },
        {
            value: 'id',
            label: 'Build ID'
        }
    ];
function z(e) {
    return 'discord_ios' in e || 'discord_android' in e;
}
class W extends s.Component {
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: s, error: r } = this.props;
        return (0, i.jsxs)(I.Z, {
            direction: I.Z.Direction.VERTICAL,
            className: l()(k.buildOverrideGroup, U.marginBottom20, w.card, k.row),
            children: [
                (0, i.jsx)(S.Z, {
                    className: l()(k.removeBuildOverride, { [k.removeBuildOverrideDisabled]: s }),
                    onClick: s ? void 0 : this.handleRemoveBuildOverride
                }),
                (0, i.jsxs)(I.Z, {
                    className: U.marginBottom8,
                    children: [
                        (0, i.jsx)(I.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(m.FormItem, {
                                title: 'Override Type',
                                className: k.item,
                                children: (0, i.jsx)(m.SingleSelect, {
                                    options: H,
                                    onChange: this.handleOverrideTypeChanged,
                                    value: t,
                                    isDisabled: s
                                })
                            })
                        }),
                        (0, i.jsx)(I.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(m.FormItem, {
                                title: 'branch' === t ? 'Branch Name' : 'Build ID',
                                className: k.item,
                                children: (0, i.jsx)(m.TextInput, {
                                    value: n,
                                    onChange: this.handleOverrideIdChanged,
                                    disabled: s
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(I.Z.Child, {
                    children: [
                        null != r &&
                            '' !== r &&
                            (0, i.jsx)(m.FormText, {
                                className: k.item,
                                style: { color: u.Z.unsafe_rawColors.RED_400.css },
                                type: m.FormText.Types.DESCRIPTION,
                                children: r
                            }),
                        (0, i.jsxs)(m.FormText, {
                            className: k.item,
                            type: m.FormText.Types.DESCRIPTION,
                            children: ['This controls the build that will be served for the ', (0, i.jsx)('code', { children: e }), ' project.']
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            G(this, 'handleRemoveBuildOverride', () => {
                this.props.onBuildOverrideRemoved(this.props.project);
            }),
            G(this, 'handleOverrideIdChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, { id: e });
            }),
            G(this, 'handleOverrideTypeChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, {
                    type: e,
                    id: ''
                });
            });
    }
}
class K extends s.Component {
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, _.Ce)();
        this.setState({
            loading: !1,
            buildOverrides: e,
            loadedBuildOverrides: o().cloneDeep(e),
            errors: {}
        });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !o().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return o().without(Y, ...t);
    }
    renderEmpty() {
        return (0, i.jsxs)(m.EmptyState, {
            theme: B.Z.theme,
            className: l()(U.marginTop40, U.marginBottom20),
            children: [
                (0, i.jsx)(m.EmptyStateImage, {
                    darkSrc: n(770227),
                    lightSrc: n(398684),
                    width: 294,
                    height: 192
                }),
                (0, i.jsx)(m.EmptyStateText, { children: 'You have no build overrides configured.' })
            ]
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : o().map(e, (e, s) =>
                  (0, i.jsx)(
                      W,
                      {
                          project: s,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[s],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved
                      },
                      s
                  )
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, i.jsx)(I.Z, {
                  grow: 0,
                  direction: I.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, i.jsx)(I.Z.Child, {
                      grow: 0,
                      children: (0, i.jsx)(m.Button, {
                          onClick: () => location.reload(),
                          color: m.Button.Colors.PRIMARY,
                          children: 'Reload App'
                      })
                  })
              });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, i.jsx)(I.Z, {
                  grow: 0,
                  direction: I.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, i.jsx)(I.Z.Child, {
                      grow: 0,
                      children: (0, i.jsx)(m.Button, {
                          onClick: this.handleLinkGeneration,
                          color: m.Button.Colors.BRAND,
                          children: 'Generate Public Link'
                      })
                  })
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, i.jsxs)(I.Z, {
            grow: 0,
            direction: I.Z.Direction.HORIZONTAL_REVERSE,
            children: [
                (0, i.jsx)(I.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(m.Button, {
                        disabled: z(null != t ? t : {}),
                        onClick: this.handleSaveChanges,
                        submitting: e,
                        color: m.Button.Colors.GREEN,
                        children: 'Save Build Overrides'
                    })
                }),
                (0, i.jsx)(I.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(m.Button, {
                        onClick: this.handleDiscardChanges,
                        disabled: e,
                        color: m.Button.Colors.RED,
                        children: 'Discard Changes'
                    })
                })
            ]
        });
    }
    render() {
        let e;
        let { loading: t, saving: n, buildOverrides: s } = this.state;
        e = t ? (0, i.jsx)(m.Spinner, { className: U.marginTop20 }) : null != s && 0 === Object.keys(s).length ? this.renderEmpty() : this.renderItems();
        let r = !n && !t && this.getAvailableProjects().length > 0,
            l =
                z(null != s ? s : {}) && 'stable' !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, i.jsx)(m.Text, {
                          color: 'text-danger',
                          variant: 'text-md/normal',
                          children: 'Mobile build overrides must be generated using the desktop/web stable client for now!'
                      })
                    : null;
        return (0, i.jsx)(O.F, {
            setting: Z.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, i.jsxs)(m.FormSection, {
                className: U.marginTop60,
                children: [
                    (0, i.jsxs)(I.Z, {
                        className: U.marginBottom20,
                        children: [
                            (0, i.jsx)(I.Z.Child, {
                                children: (0, i.jsx)(m.FormTitle, {
                                    tag: m.FormTitleTags.H1,
                                    children: 'Build Overrides'
                                })
                            }),
                            (0, i.jsx)(I.Z.Child, {
                                grow: 0,
                                children: (0, i.jsx)(m.Button, {
                                    size: m.ButtonSizes.SMALL,
                                    onClick: this.handleAddBuildOverride,
                                    disabled: !r,
                                    children: 'Add Build Override'
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(m.FormDivider, {}),
                    (0, i.jsxs)(I.Z, {
                        direction: I.Z.Direction.VERTICAL,
                        children: [
                            l,
                            e,
                            (0, i.jsxs)(I.Z, {
                                grow: 0,
                                direction: I.Z.Direction.HORIZONTAL_REVERSE,
                                children: [this.renderRefreshButton(), this.renderSaveButton(), this.renderLinkButton()]
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            G(this, 'state', {
                loading: !0,
                buildOverrides: {},
                loadedBuildOverrides: {},
                errors: {},
                saving: !1,
                didSave: !1
            }),
            G(this, 'handleAddBuildOverride', async () => {
                var e;
                let t = await ((e = this.getAvailableProjects()),
                new Promise((t) => {
                    (0, m.openModal)((n) => {
                        let s = (e) => {
                            n.onClose(), t(e);
                        };
                        return (0, i.jsxs)(m.ModalRoot, {
                            ...n,
                            'aria-label': 'Choose A Project to Override',
                            children: [
                                (0, i.jsx)(m.ModalHeader, {
                                    separator: !1,
                                    children: (0, i.jsx)(m.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: 'Choose A Project to Override'
                                    })
                                }),
                                (0, i.jsx)(m.ModalContent, {
                                    children: (0, i.jsx)('div', {
                                        className: k.buildOverrideList,
                                        children: e.map((e) =>
                                            (0, i.jsx)(
                                                m.Button,
                                                {
                                                    value: e,
                                                    color: m.Button.Colors.GREEN,
                                                    onClick: () => s(e),
                                                    children: e
                                                },
                                                e
                                            )
                                        )
                                    })
                                }),
                                (0, i.jsx)(m.ModalFooter, {
                                    children: (0, i.jsx)(m.Button, {
                                        color: m.Button.Colors.PRIMARY,
                                        look: m.Button.Looks.LINK,
                                        onClick: () => s(null),
                                        children: 'Nevermind'
                                    })
                                })
                            ]
                        });
                    });
                }));
                if (null == t) return;
                let n = {
                    ...this.state.buildOverrides,
                    [t]: {
                        type: 'branch',
                        id: ''
                    }
                };
                this.setState({ buildOverrides: n });
            }),
            G(this, 'handleBuildOverrideUpdated', (e, t) => {
                let { buildOverrides: n } = this.state,
                    i = {
                        ...(null != n ? n[e] : {}),
                        ...t
                    },
                    s = {
                        ...this.state.buildOverrides,
                        [e]: i
                    };
                this.setState({ buildOverrides: s });
            }),
            G(this, 'handleBuildOverrideRemoved', (e) => {
                let t = { ...this.state.buildOverrides };
                delete t[e], this.setState({ buildOverrides: t });
            }),
            G(this, 'handleDiscardChanges', () => {
                this.setState({
                    buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides),
                    errors: {},
                    didSave: !1
                });
            }),
            G(this, 'handleSaveChanges', async () => {
                let { buildOverrides: e } = this.state;
                if (null == e) return;
                this.setState({ saving: !0 });
                let t = await (0, C.aD)(e);
                if (200 === t.status) {
                    let e = t.body;
                    this.setState({
                        buildOverrides: e,
                        loadedBuildOverrides: o().cloneDeep(e),
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
            }),
            G(this, 'handleLinkGeneration', () => {
                let { buildOverrides: e } = this.state;
                (0, m.openModal)((t) =>
                    (0, i.jsx)(q, {
                        ...t,
                        buildOverrides: e
                    })
                );
            });
    }
}
class q extends s.Component {
    isMobile() {
        var e;
        return z(null !== (e = this.props.buildOverrides) && void 0 !== e ? e : {});
    }
    renderSettingsForm() {
        let { ttlSeconds: e, releaseChannel: t, userIdEntry: n, userIdEntryError: s, allowedVersions: r, allowedVersionEntry: l, allowedVersionEntryError: a, allowLoggedOut: o, experiments: c, experimentsError: d } = this.state,
            u = M.S6.find((t) => t.value === e),
            h = r.map((e) => ({
                label: e,
                value: e
            }));
        return (0, i.jsxs)(I.Z.Child, {
            basis: '70%',
            children: [
                (0, i.jsx)(m.FormItem, {
                    title: 'Expire After',
                    className: U.marginBottom20,
                    children: (0, i.jsx)(m.SingleSelect, {
                        value: null != u ? u.value : null,
                        options: M.S6,
                        onChange: this.handleExpirationChange
                    })
                }),
                this.isMobile()
                    ? null
                    : (0, i.jsx)(m.FormItem, {
                          title: 'Release Channel',
                          className: U.marginBottom20,
                          children: (0, i.jsx)(m.SingleSelect, {
                              value: t,
                              options: M.F$,
                              onChange: this.handleReleaseChannelChange
                          })
                      }),
                this.isMobile()
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(m.FormItem, {
                                  title: 'Add allowed app version (required)',
                                  className: U.marginBottom20,
                                  children: (0, i.jsxs)(I.Z, {
                                      direction: I.Z.Direction.HORIZONTAL,
                                      children: [
                                          (0, i.jsx)(I.Z.Child, {
                                              wrap: !0,
                                              basis: '90%',
                                              children: (0, i.jsx)(m.TextInput, {
                                                  autoFocus: !0,
                                                  value: l,
                                                  onKeyPress: this.handleAllowedVersionEnter,
                                                  error: a,
                                                  onChange: this.handleAllowedVersionEntry,
                                                  placeholder: 'Example: 34'
                                              })
                                          }),
                                          (0, i.jsx)(m.Button, {
                                              onClick: this.handleAddAllowedVersion,
                                              children: 'Add'
                                          })
                                      ]
                                  })
                              }),
                              (0, i.jsx)(m.FormItem, {
                                  title: 'Remove allowed app version',
                                  className: U.marginBottom20,
                                  children: (0, i.jsx)(m.SingleSelect, {
                                      value: null,
                                      options: h,
                                      onChange: this.handleRemoveAllowedVersion,
                                      isDisabled: 0 === r.length
                                  })
                              })
                          ]
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsxs)(m.FormItem, {
                              title: 'Limit to User IDs (optional)',
                              className: U.marginBottom20,
                              children: [
                                  (0, i.jsx)(I.Z, {
                                      direction: I.Z.Direction.HORIZONTAL,
                                      children: (0, i.jsx)(I.Z.Child, {
                                          wrap: !0,
                                          basis: '90%',
                                          children: (0, i.jsx)(m.TextArea, {
                                              value: n,
                                              error: s,
                                              onBlur: () => this.setUserEntryError(''),
                                              onChange: this.handleUserIDEntry
                                          })
                                      })
                                  }),
                                  (0, i.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      className: U.marginTop8,
                                      children: 'User IDs can be separated by whitespace or commas.'
                                  })
                              ]
                          })
                      }),
                (0, i.jsxs)(m.FormItem, {
                    title: 'Client Experiment Override',
                    className: U.marginBottom20,
                    children: [
                        (0, i.jsx)(I.Z, {
                            direction: I.Z.Direction.HORIZONTAL,
                            children: (0, i.jsx)(I.Z.Child, {
                                wrap: !0,
                                basis: '90%',
                                children: (0, i.jsx)(m.TextArea, {
                                    value: c,
                                    error: d,
                                    onChange: this.handleExperiments,
                                    placeholder: '{"2022-01_threads":1}'
                                })
                            })
                        }),
                        (0, i.jsx)(m.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            className: U.marginTop8,
                            children: 'Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.'
                        })
                    ]
                }),
                (0, i.jsx)(m.FormSwitch, {
                    onChange: this.handleAllowLoggedOut,
                    value: o,
                    children: 'Allow logged out users'
                })
            ]
        });
    }
    renderPayloadBlock() {
        let e = JSON.stringify(this.generatePayload(), null, 2),
            t = () => e,
            s = (0, i.jsx)(f.GI, {
                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                webpackId: 364964,
                renderFallback: t,
                render: (n) => {
                    let s = n.highlight('json', e, !0);
                    return null == s
                        ? t()
                        : (0, i.jsx)('code', {
                              className: 'hljs scroller '.concat(s.language, ' ').concat(V.scrollbarGhost, ' ').concat(k.codebox),
                              dangerouslySetInnerHTML: { __html: s.value }
                          });
                }
            });
        return (0, i.jsx)(I.Z.Child, { children: (0, i.jsx)(m.Card, { children: (0, i.jsx)('pre', { children: s }) }) });
    }
    renderLinkForm() {
        let { statusTextColor: e, statusText: t, publicLink: n } = this.state;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(m.FormItem, {
                    title: 'Signed Link',
                    children: (0, i.jsxs)(I.Z, {
                        children: [
                            (0, i.jsx)(I.Z.Child, {
                                wrap: !0,
                                basis: '75%',
                                children: (0, i.jsx)(T.Z, { value: n })
                            }),
                            (0, i.jsx)(m.Button, {
                                onClick: this.handleGenerateLink,
                                children: 'Generate Link'
                            })
                        ]
                    })
                }),
                (0, i.jsx)(N.Z, {
                    color: e,
                    className: ''.concat(U.marginBottom8, ' ').concat(U.marginTop8),
                    children: t
                })
            ]
        });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props;
        return (0, i.jsxs)(m.ModalRoot, {
            size: m.ModalSize.LARGE,
            transitionState: t,
            'aria-label': 'Generate Public Build Override Link',
            children: [
                (0, i.jsxs)(m.ModalHeader, {
                    justify: I.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        (0, i.jsx)(m.Heading, {
                            variant: 'heading-lg/semibold',
                            children: 'Generate Public Build Override Link'
                        }),
                        (0, i.jsx)(m.ModalCloseButton, { onClick: e })
                    ]
                }),
                (0, i.jsxs)(m.ModalContent, {
                    children: [
                        (0, i.jsxs)(I.Z, {
                            children: [this.renderSettingsForm(), this.renderPayloadBlock()]
                        }),
                        this.renderLinkForm()
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            G(this, 'state', {
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
                statusTextColor: N.Z.Colors.STATUS_RED,
                allowLoggedOut: !1
            }),
            G(this, 'setUserEntryError', (e) => {
                this.setState({ userIdEntryError: e });
            }),
            G(this, 'setStatusMessage', (e, t) => {
                this.setState({
                    statusText: e,
                    statusTextColor: null != t ? t : N.Z.Colors.STATUS_RED
                });
            }),
            G(this, 'handleUserIDEntry', (e) => {
                if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError('User IDs are numbers!');
                let t = new Set(e.split(/[,\s]+/).filter(Boolean));
                this.setState({
                    userIdEntry: e,
                    userIds: t
                });
            }),
            G(this, 'setAllowedVersionError', (e) => {
                this.setState({ allowedVersionEntryError: e });
            }),
            G(this, 'handleAllowedVersionEntry', (e) => {
                this.setState({ allowedVersionEntry: e });
            }),
            G(this, 'handleAllowedVersionEnter', (e) => {
                e.charCode === F.yXg.ENTER && this.handleAddAllowedVersion();
            }),
            G(this, 'handleAddAllowedVersion', () => {
                let { allowedVersions: e, allowedVersionEntry: t } = this.state;
                return 0 === (t = t.trim()).length
                    ? this.setAllowedVersionError('Enter a valid version number!')
                    : e.indexOf(t) >= 0
                      ? this.setAllowedVersionError('You already added that version!')
                      : void this.setState({
                            allowedVersions: [...e, t],
                            allowedVersionEntry: '',
                            allowedVersionEntryError: ''
                        });
            }),
            G(this, 'handleRemoveAllowedVersion', (e) => {
                let { allowedVersions: t } = this.state;
                (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
            }),
            G(this, 'handleAllowLoggedOut', (e) => {
                this.setState({ allowLoggedOut: e });
            }),
            G(this, 'handleExpirationChange', (e) => {
                this.setState({ ttlSeconds: e });
            }),
            G(this, 'handleReleaseChannelChange', (e) => {
                this.setState({ releaseChannel: e });
            }),
            G(this, 'handleExperiments', (e) => {
                if (0 === e.trim().length) {
                    this.setState({ experimentsError: void 0 });
                    return;
                }
                try {
                    let t = JSON.parse(e);
                    for (let e in t) {
                        if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/)) {
                            this.setState({ experimentsError: ''.concat(e, ' is an invalid experiment name') });
                            return;
                        }
                        if ('number' != typeof t[e]) {
                            this.setState({ experimentsError: ''.concat(e, ' has an invalid bucket override') });
                            return;
                        }
                    }
                } catch (e) {
                    this.setState({ experimentsError: 'Unable to parse experiments '.concat(e.message) });
                    return;
                }
                this.setState({
                    experiments: e,
                    experimentsError: void 0
                });
            }),
            G(this, 'generatePayload', () => ({
                overrides: this.props.buildOverrides,
                meta: {
                    release_channel: 'all' === this.state.releaseChannel ? null : this.state.releaseChannel,
                    ttl_seconds: this.state.ttlSeconds,
                    user_ids: Array.from(this.state.userIds),
                    allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
                    allow_logged_out: this.state.allowLoggedOut,
                    experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments)
                }
            })),
            G(this, 'handleGenerateLink', async () => {
                if (this.isMobile() && 0 === this.state.allowedVersions.length) {
                    this.setAllowedVersionError('You must add at least one allowed version for iOS');
                    return;
                }
                this.setStatusMessage(null);
                let e = this.generatePayload(),
                    t = await (0, C.M3)(e);
                !1 !== t.error ? this.setStatusMessage(JSON.stringify(t.error), N.Z.Colors.STATUS_RED) : (this.setState({ publicLink: t.url.toString() }), 0 === e.meta.user_ids.length && this.setStatusMessage('Warning! No users added to the whitelist! This link could be used by anyone to override their build.', N.Z.Colors.STATUS_YELLOW));
            });
    }
}
function Q(e) {
    let { layoutDebuggingEnabled: t, cssDebuggingEnabled: n } = e,
        { horizontalSpacing: r, verticalSpacing: l, maxHorizontalSpacing: a, maxVerticalSpacing: o } = (0, A.i)(),
        c = s.useMemo(() => Array.from({ length: a + 1 }, (e, t) => t), [a]),
        d = s.useMemo(() => Array.from({ length: o + 1 }, (e, t) => t), [o]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.FormTitle, {
                tag: m.FormTitleTags.H1,
                children: 'Design Tools'
            }),
            (0, i.jsx)(O.F, {
                setting: Z.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, i.jsx)(m.FormSwitch, {
                    value: n,
                    note: 'Display raw colors as pink. Toggling this will refresh the browser.',
                    onChange: (e) => {
                        (0, p.y)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                    children: 'Enable CSS Debugging'
                })
            }),
            (0, i.jsx)(O.F, {
                setting: Z.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, i.jsx)(m.FormSwitch, {
                    value: t,
                    note: 'Renders a grid on top of the app to help debug layout alignment issues.',
                    onChange: (e) => {
                        (0, p.y)({ layoutDebuggingEnabled: e });
                    },
                    children: 'Enable Layout Debugging'
                })
            }),
            (0, i.jsxs)(O.F, {
                setting: Z.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, i.jsxs)(m.FormSection, {
                        className: U.marginBottom20,
                        children: [
                            (0, i.jsx)(m.FormTitle, { children: 'Horizontal Grid Spacing' }),
                            (0, i.jsx)(m.FormText, {
                                className: U.marginBottom20,
                                type: m.FormTextTypes.DESCRIPTION,
                                children: 'Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.'
                            }),
                            (0, i.jsx)(m.Slider, {
                                initialValue: r,
                                minValue: 0,
                                maxValue: a,
                                markers: c,
                                onValueChange: (e) => A.i.getState().setHorizontalSpacing(e),
                                onValueRender: (e) => ''.concat(Math.round(e), 'px'),
                                onMarkerRender: (e) => (e % 4 == 0 ? ''.concat(e) : void 0),
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)(m.FormSection, {
                        className: U.marginBottom20,
                        children: [
                            (0, i.jsx)(m.FormTitle, { children: 'Vertical Grid Spacing' }),
                            (0, i.jsx)(m.FormText, {
                                className: U.marginBottom20,
                                type: m.FormTextTypes.DESCRIPTION,
                                children: 'Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.'
                            }),
                            (0, i.jsx)(m.Slider, {
                                initialValue: l,
                                minValue: 0,
                                maxValue: o,
                                markers: d,
                                onValueChange: (e) => A.i.getState().setVerticalSpacing(e),
                                onValueRender: (e) => ''.concat(Math.round(e), 'px'),
                                onMarkerRender: (e) => (e % 4 == 0 ? ''.concat(e) : void 0),
                                equidistant: !0
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function X() {
    throw Error('Send help');
}
function J() {
    let { useOverlayV3: e } = v.Z.useExperiment({ location: 'developer_settings' }),
        [t, n] = s.useState(!1),
        [r, l] = s.useState('');
    return (s.useEffect(() => {
        (async () => {
            l(await (0, D.Y)());
        })();
    }, []),
    t)
        ? {}
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: [k.buttonsContainer, U.marginBottom20].join(' '),
                      children: [
                          (0, i.jsx)(O.F, {
                              setting: Z.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: e
                                  ? (0, i.jsx)(m.Button, {
                                        onClick: j.fK,
                                        children: 'Open Overlay'
                                    })
                                  : (0, i.jsx)(m.Button, {
                                        onClick: () => window.open(r, '_blank'),
                                        disabled: '' === r,
                                        children: 'Open Overlay'
                                    })
                          }),
                          (0, i.jsx)(O.F, {
                              setting: Z.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, i.jsx)(m.Button, {
                                  onClick: () => {
                                      b.Z.getSocket().close(), b.Z.getSocket().connect();
                                  },
                                  children: 'Reset Socket'
                              })
                          }),
                          (0, i.jsx)(O.F, {
                              setting: Z.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, i.jsx)(m.Button, {
                                  onClick: () => {
                                      h.Z.dispatch({
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
                  (0, i.jsx)(O.F, {
                      setting: Z.s6.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, i.jsx)(m.FormSection, {
                          title: 'Crashes',
                          tag: m.FormTitleTags.H1,
                          children: (0, i.jsxs)('div', {
                              className: k.buttonsContainer,
                              children: [
                                  (0, i.jsx)(m.SingleSelect, {
                                      value: void 0,
                                      options: [
                                          {
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
                                      onChange: (e) => null != e && y.ZP.crash(e)
                                  }),
                                  (0, i.jsx)(m.SingleSelect, {
                                      value: void 0,
                                      options: [
                                          {
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
                                      onChange: (e) => {
                                          var t;
                                          return null != e ? ((t = e), void y.ZP.triggerJSException(t)) : void 0;
                                      }
                                  }),
                                  (0, i.jsx)(m.Button, {
                                      onClick: () => n(!0),
                                      children: 'React Crash'
                                  }),
                                  (0, i.jsx)(m.Button, {
                                      onClick: X,
                                      children: 'onClick Throw'
                                  })
                              ]
                          })
                      })
                  })
              ]
          });
}
let $ = d.ZP.connectStores([R.default], () => ({
    isTracingRequests: R.default.isTracingRequests,
    isForcedCanary: R.default.isForcedCanary,
    isLoggingGatewayEvents: R.default.isLoggingGatewayEvents,
    isLoggingOverlayEvents: R.default.isLoggingOverlayEvents,
    isLoggingAnalyticsEvents: R.default.isLoggingAnalyticsEvents,
    isAxeEnabled: R.default.isAxeEnabled,
    cssDebuggingEnabled: R.default.cssDebuggingEnabled,
    layoutDebuggingEnabled: R.default.layoutDebuggingEnabled,
    isSourceMapsEnabled: R.default.sourceMapsEnabled,
    isAnalyticsDebuggerEnabled: R.default.isAnalyticsDebuggerEnabled,
    isIdleStatusIndicatorEnabled: R.default.isIdleStatusIndicatorEnabled,
    appDirectoryIncludesInactiveCollections: R.default.appDirectoryIncludesInactiveCollections
}))((e) => {
    let { isTracingRequests: t, isForcedCanary: n, isLoggingGatewayEvents: s, isLoggingOverlayEvents: r, isLoggingAnalyticsEvents: l, isAxeEnabled: a, cssDebuggingEnabled: o, layoutDebuggingEnabled: c, isSourceMapsEnabled: d, isAnalyticsDebuggerEnabled: u, isIdleStatusIndicatorEnabled: h, appDirectoryIncludesInactiveCollections: g } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(O.F, {
                setting: Z.s6.DEVELOPER_OPTIONS_FLAGS,
                children: (0, i.jsxs)(m.FormSection, {
                    title: 'Developer Flags',
                    tag: m.FormTitleTags.H1,
                    children: [
                        (0, i.jsx)(O.F, {
                            setting: Z.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: t,
                                note: 'Force trace all client requests with APM',
                                onChange: (e) => (0, p.y)({ trace: e }),
                                children: 'Enable Tracing Requests'
                            })
                        }),
                        (0, i.jsx)(O.F, {
                            setting: Z.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: n,
                                note: 'Force all API requests to canary instances',
                                onChange: (e) => (0, p.y)({ canary: e }),
                                children: 'Enable Forced Canary'
                            })
                        }),
                        (0, i.jsx)(O.F, {
                            setting: Z.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: s,
                                note: 'Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.',
                                onChange: (e) => (0, p.y)({ logGatewayEvents: e }),
                                children: 'Enable Logging of Gateway Events to Console'
                            })
                        }),
                        (0, i.jsx)(O.F, {
                            setting: Z.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: r,
                                note: 'Logs all overlay related RPC events. Super noisy if an overlay is connected',
                                onChange: (e) => (0, p.y)({ logOverlayEvents: e }),
                                children: 'Enable Logging of Overlay RPC Events & Commands'
                            })
                        }),
                        (0, i.jsx)(O.F, {
                            setting: Z.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: l,
                                note: 'Logs all analytics events to the developer console',
                                onChange: (e) => (0, p.y)({ logAnalyticsEvents: e }),
                                children: 'Enable Logging of Analytics Events'
                            })
                        }),
                        (0, i.jsx)(O.F, {
                            setting: Z.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: d,
                                note: 'Only enable on devices you trust.',
                                onChange: (e) => (0, p.y)({ sourceMapsEnabled: e }),
                                children: 'Enable source maps to be loaded on this client'
                            })
                        }),
                        (0, i.jsx)(O.F, {
                            setting: Z.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: u,
                                note: 'Displays a floating debugger with viewed impressions',
                                onChange: (e) => (0, p.y)({ analyticsDebuggerEnabled: e }),
                                children: 'Enable standard analytics debugger view'
                            })
                        }),
                        (0, i.jsx)(O.F, {
                            setting: Z.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: h,
                                note: 'Displays a floating idle status indicator',
                                onChange: (e) => (0, p.y)({ idleStatusIndicatorEnabled: e }),
                                children: 'Enable idle status indicator'
                            })
                        }),
                        (0, i.jsx)(O.F, {
                            setting: Z.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: a,
                                note: 'Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development',
                                onChange: (e) => (0, p.y)({ axeEnabled: e }),
                                children: 'Enable Accessibility Auditing'
                            })
                        }),
                        (0, i.jsx)(O.F, {
                            setting: Z.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: g,
                                note: 'In App Directory, include inactive collections on the homepage. Use this to preview changes to collections before publishing them.',
                                onChange: (e) => (0, p.y)({ appDirectoryIncludesInactiveCollections: e }),
                                children: 'Preview Unpublished Collections on App Directory Homepage'
                            })
                        }),
                        (0, i.jsxs)(O.F, {
                            setting: Z.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                            children: [
                                (0, i.jsx)('div', {
                                    className: [k.buttonsContainer, U.marginBottom20].join(' '),
                                    children: (0, i.jsx)(L.S, {})
                                }),
                                (0, i.jsx)(m.FormDivider, { className: k.divider })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(Q, {
                layoutDebuggingEnabled: c,
                cssDebuggingEnabled: o
            })
        ]
    });
});
function ee() {
    let e = (0, d.e7)([P.Z], () => P.Z.getSurveyOverride()),
        [t, n] = s.useState(null != e ? e : '');
    return (0, i.jsx)(O.F, {
        setting: Z.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, i.jsxs)(m.FormSection, {
            tag: m.FormTitleTags.H1,
            title: 'Survey Override',
            className: U.marginTop60,
            children: [
                (0, i.jsx)(m.FormTitle, { children: 'Copy the ID of the Survey you want to test:' }),
                (0, i.jsxs)('form', {
                    className: k.surveyOverride,
                    onSubmit: (e) => {
                        e.preventDefault(), t.length > 0 ? x.Xq(t) : x.Xq(null);
                    },
                    children: [
                        (0, i.jsx)(m.TextInput, {
                            className: k.surveyOverrideInput,
                            value: t,
                            onChange: n
                        }),
                        (0, i.jsx)(m.Button, {
                            type: 'submit',
                            children: 'Save Override'
                        })
                    ]
                })
            ]
        })
    });
}
function et() {
    var e;
    let t = (0, d.e7)([E.Z], () => E.Z.overrideId()),
        [n, r] = s.useState(null !== (e = E.Z.overrideId()) && void 0 !== e ? e : '');
    return (0, i.jsx)(O.F, {
        setting: Z.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, i.jsxs)(m.FormSection, {
            tag: m.FormTitleTags.H1,
            title: 'Changelog Override',
            className: U.marginTop60,
            children: [
                (0, i.jsx)(m.FormTitle, { children: 'Enter the ID of the changelog you want to test' }),
                (0, i.jsxs)('div', {
                    className: k.surveyOverride,
                    children: [
                        (0, i.jsx)(m.TextInput, {
                            className: k.surveyOverrideInput,
                            value: n,
                            onChange: r
                        }),
                        (0, i.jsx)(m.Button, {
                            onClick: () => {
                                '' === n ? g.Z.setChangelogOverride(null) : g.Z.setChangelogOverride(n);
                            },
                            disabled: t === n,
                            children: 'Update Changelog'
                        })
                    ]
                })
            ]
        })
    });
}
class en extends s.PureComponent {
    render() {
        return (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)($, {}), (0, i.jsx)(J, {}), (0, i.jsx)(ee, {}), (0, i.jsx)(et, {}), (0, i.jsx)(K, {})]
        });
    }
}
t.Z = en;
