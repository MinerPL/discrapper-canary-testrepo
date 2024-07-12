n(47120);
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(481060),
  l = n(325432),
  o = n(391690),
  c = n(714759),
  d = n(285952),
  u = n(546591),
  _ = n(424218),
  h = n(358085),
  E = n(998502),
  I = n(689938),
  m = n(489927),
  g = n(549856);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class T extends s.PureComponent {
  renderDiskUsageCircle() {
let {
  metadata: e
} = this.props;
return null != e && null != e.availableKB && null != e.totalKB ? (0, i.jsx)(c.Z, {
  total: e.totalKB,
  used: e.totalKB - e.availableKB
}) : null;
  }
  renderViewing() {
let e, t;
let {
  path: n,
  label: s,
  editingPath: a,
  isDefault: l,
  metadata: c
} = this.props;
return null != c && (e = null != c.availableKB ? (0, _.BU)(c.availableKB, {
  useKibibytes: !0
}) : null, t = null != c.totalKB ? (0, _.BU)(c.totalKB, {
  useKibibytes: !0
}) : null), (0, i.jsxs)(d.Z, {
  className: m.installationPath,
  align: d.Z.Align.CENTER,
  children: [
    this.renderDiskUsageCircle(),
    (0, i.jsxs)(d.Z, {
      direction: d.Z.Direction.VERTICAL,
      className: m.__invalid_descriptionWrapper,
      children: [
        (0, i.jsxs)(d.Z, {
          align: d.Z.Align.CENTER,
          children: [
            (0, i.jsx)(r.Heading, {
              className: m.rowTitle,
              variant: 'heading-md/semibold',
              children: null != s ? s : o.Z.getLabelFromPath(n)
            }),
            l ? (0, i.jsx)('span', {
              className: m.defaultIndicator,
              children: I.Z.Messages.DEFAULT
            }) : null
          ]
        }),
        null != c && null != e && null != t ? (0, i.jsx)(u.Z, {
          className: m.rowBody,
          hoverText: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_SPACE.format({
            available: e,
            total: t
          }),
          children: n
        }) : (0, i.jsx)(r.Text, {
          className: m.rowBody,
          variant: 'text-xs/normal',
          children: n
        })
      ]
    }),
    (0, i.jsx)(r.Button, {
      size: r.Button.Sizes.SMALL,
      disabled: null != a,
      color: r.Button.Colors.PRIMARY,
      onClick: this.handleStartEditing,
      children: I.Z.Messages.EDIT
    })
  ]
});
  }
  renderEditing() {
let {
  path: e,
  hasGamesInstalledInPath: t
} = this.props, {
  label: n,
  isDefault: s
} = this.state;
return (0, i.jsx)(r.Card, {
  editable: !0,
  className: m.installationPathEditing,
  children: (0, i.jsxs)(d.Z, {
    children: [
      this.renderDiskUsageCircle(),
      (0, i.jsxs)(d.Z.Child, {
        children: [
          (0, i.jsx)(r.FormItem, {
            title: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_NAME,
            children: (0, i.jsx)(r.TextInput, {
              value: n,
              placeholder: o.Z.getLabelFromPath(e),
              onChange: this.handleLabelChange
            })
          }),
          (0, i.jsx)(r.FormItem, {
            title: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION,
            className: g.marginTop20,
            children: (0, i.jsx)(r.TextInput, {
              disabled: !0,
              value: e
            })
          }),
          (0, i.jsx)(r.Checkbox, {
            type: r.Checkbox.Types.INVERTED,
            value: null != s ? s : this.props.isDefault,
            disabled: this.props.isDefault,
            className: m.defaultLocationCheckbox,
            onChange: this.handleToggleDefault,
            children: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_MAKE_DEFAULT
          }),
          (0, i.jsx)(r.FormDivider, {
            className: m.separator
          }),
          (0, i.jsxs)(d.Z, {
            children: [
              (0, i.jsx)(r.Button, {
                disabled: t || this.props.isDefault,
                size: r.Button.Sizes.SMALL,
                color: r.Button.Colors.RED,
                look: r.Button.Looks.OUTLINED,
                onClick: this.handleRemoveLocation,
                children: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE
              }),
              (0, i.jsxs)(d.Z, {
                justify: d.Z.Justify.END,
                children: [
                  (0, i.jsx)(r.Button, {
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.PRIMARY,
                    look: r.Button.Looks.LINK,
                    onClick: this.handleStopEditing,
                    children: I.Z.Messages.CANCEL
                  }),
                  (0, i.jsx)(r.Button, {
                    disabled: e === this.props.path && n === this.props.label && s === this.props.isDefault,
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.GREEN,
                    onClick: this.handleSaveChanges,
                    children: I.Z.Messages.SAVE
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  })
});
  }
  render() {
return this.props.editingPath === this.props.path ? this.renderEditing() : this.renderViewing();
  }
  constructor(...e) {
super(...e), p(this, 'state', {
  label: void 0,
  isDefault: null
}), p(this, 'handleStartEditing', () => {
  let {
    path: e,
    label: t,
    isDefault: n,
    onToggleEditing: i
  } = this.props;
  i(e), this.setState({
    label: t,
    isDefault: n
  });
}), p(this, 'handleStopEditing', () => {
  let {
    onToggleEditing: e
  } = this.props;
  e(null), this.setState({
    label: void 0,
    isDefault: null
  });
}), p(this, 'handleRemoveLocation', () => {
  (0, r.openModal)(e => (0, i.jsx)(r.ConfirmModal, {
    ...e,
    header: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE,
    confirmText: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE,
    cancelText: I.Z.Messages.CANCEL,
    onConfirm: () => {
      this.handleStopEditing(), (0, l.iD)(this.props.path);
    },
    children: (0, i.jsx)(r.Text, {
      variant: 'text-md/normal',
      children: I.Z.Messages.USER_SETTINGS_GAMES_REMOVE_LOCATION_BODY
    })
  }));
}), p(this, 'handleSaveChanges', () => {
  (0, l.Tb)(this.props.path, {
    label: null != this.state.label ? this.state.label : this.props.label,
    isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
  }), this.handleStopEditing();
}), p(this, 'handleLabelChange', e => {
  this.setState({
    label: e
  });
}), p(this, 'handleToggleDefault', () => {
  this.setState({
    isDefault: !this.state.isDefault
  });
});
  }
}
class S extends s.PureComponent {
  componentDidMount() {
(0, l.ec)(this.props.installationPaths.map(e => {
  let {
    path: t
  } = e;
  return t;
}));
  }
  render() {
let {
  installationPaths: e,
  installationPathsMetadata: t,
  defaultInstallationPath: n
} = this.props, {
  editingPath: s
} = this.state;
return (0, i.jsxs)(r.FormSection, {
  className: m.wrapper,
  title: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATIONS,
  children: [
    e.map(e => {
      let {
        path: a,
        label: r
      } = e;
      return (0, i.jsx)(T, {
        path: a,
        label: r,
        metadata: t[a],
        isDefault: n === a,
        editingPath: s,
        hasGamesInstalledInPath: o.Z.hasGamesInstalledInPath(a),
        onToggleEditing: this.handleToggleEditing
      }, a);
    }),
    (0, i.jsx)('div', {
      className: m.buttonRowWrapper,
      children: (0, i.jsx)(r.Button, {
        disabled: !h.isPlatformEmbedded,
        onClick: this.handleAddInstallationLocation,
        size: r.Button.Sizes.SMALL,
        children: I.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_ADD
      })
    })
  ]
});
  }
  constructor(...e) {
super(...e), p(this, 'state', {
  editingPath: null
}), p(this, 'handleAddInstallationLocation', () => {
  E.ZP.showOpenDialog(['openDirectory']).then(e => {
    if (null != e && 0 !== e.length && null != e[0] && 'undefined' !== e[0])
      (0, l.RY)(e[0]);
  });
}), p(this, 'handleToggleEditing', e => {
  this.setState({
    editingPath: e
  });
});
  }
}
t.Z = a.ZP.connectStores([o.Z], () => ({
  installationPaths: o.Z.installationPaths,
  installationPathsMetadata: o.Z.installationPathsMetadata,
  defaultInstallationPath: o.Z.defaultInstallationPath
}))(S);