n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(325432),
  o = n(570928),
  c = n(600164),
  d = n(579022),
  u = n(391690),
  _ = n(424218),
  E = n(358085),
  h = n(998502),
  m = n(689938),
  I = n(275435),
  g = n(224499);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class T extends a.PureComponent {
  renderDiskUsageCircle() {
let {
  metadata: e
} = this.props;
return null != e && null != e.availableKB && null != e.totalKB ? (0, i.jsx)(d.Z, {
  total: e.totalKB,
  used: e.totalKB - e.availableKB
}) : null;
  }
  renderViewing() {
let e, t;
let {
  path: n,
  label: a,
  editingPath: s,
  isDefault: l,
  metadata: d
} = this.props;
return null != d && (e = null != d.availableKB ? (0, _.BU)(d.availableKB, {
  useKibibytes: !0
}) : null, t = null != d.totalKB ? (0, _.BU)(d.totalKB, {
  useKibibytes: !0
}) : null), (0, i.jsxs)(c.Z, {
  className: I.installationPath,
  align: c.Z.Align.CENTER,
  children: [
    this.renderDiskUsageCircle(),
    (0, i.jsxs)(c.Z, {
      direction: c.Z.Direction.VERTICAL,
      className: I.__invalid_descriptionWrapper,
      children: [
        (0, i.jsxs)(c.Z, {
          align: c.Z.Align.CENTER,
          children: [
            (0, i.jsx)(r.Heading, {
              className: I.rowTitle,
              variant: 'heading-md/semibold',
              children: null != a ? a : u.Z.getLabelFromPath(n)
            }),
            l ? (0, i.jsx)('span', {
              className: I.defaultIndicator,
              children: m.Z.Messages.DEFAULT
            }) : null
          ]
        }),
        null != d && null != e && null != t ? (0, i.jsx)(o.Z, {
          className: I.rowBody,
          hoverText: m.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_SPACE.format({
            available: e,
            total: t
          }),
          children: n
        }) : (0, i.jsx)(r.Text, {
          className: I.rowBody,
          variant: 'text-xs/normal',
          children: n
        })
      ]
    }),
    (0, i.jsx)(r.Button, {
      size: r.Button.Sizes.SMALL,
      disabled: null != s,
      color: r.Button.Colors.PRIMARY,
      onClick: this.handleStartEditing,
      children: m.Z.Messages.EDIT
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
  isDefault: a
} = this.state;
return (0, i.jsx)(r.Card, {
  editable: !0,
  className: I.installationPathEditing,
  children: (0, i.jsxs)(c.Z, {
    children: [
      this.renderDiskUsageCircle(),
      (0, i.jsxs)(c.Z.Child, {
        children: [
          (0, i.jsx)(r.FormItem, {
            title: m.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_NAME,
            children: (0, i.jsx)(r.TextInput, {
              value: n,
              placeholder: u.Z.getLabelFromPath(e),
              onChange: this.handleLabelChange
            })
          }),
          (0, i.jsx)(r.FormItem, {
            title: m.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION,
            className: g.marginTop20,
            children: (0, i.jsx)(r.TextInput, {
              disabled: !0,
              value: e
            })
          }),
          (0, i.jsx)(r.Checkbox, {
            type: r.Checkbox.Types.INVERTED,
            value: null != a ? a : this.props.isDefault,
            disabled: this.props.isDefault,
            className: I.defaultLocationCheckbox,
            onChange: this.handleToggleDefault,
            children: m.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_MAKE_DEFAULT
          }),
          (0, i.jsx)(r.FormDivider, {
            className: I.separator
          }),
          (0, i.jsxs)(c.Z, {
            children: [
              (0, i.jsx)(r.Button, {
                disabled: t || this.props.isDefault,
                size: r.Button.Sizes.SMALL,
                color: r.Button.Colors.RED,
                look: r.Button.Looks.OUTLINED,
                onClick: this.handleRemoveLocation,
                children: m.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE
              }),
              (0, i.jsxs)(c.Z, {
                justify: c.Z.Justify.END,
                children: [
                  (0, i.jsx)(r.Button, {
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.PRIMARY,
                    look: r.Button.Looks.LINK,
                    onClick: this.handleStopEditing,
                    children: m.Z.Messages.CANCEL
                  }),
                  (0, i.jsx)(r.Button, {
                    disabled: e === this.props.path && n === this.props.label && a === this.props.isDefault,
                    size: r.Button.Sizes.SMALL,
                    color: r.Button.Colors.GREEN,
                    onClick: this.handleSaveChanges,
                    children: m.Z.Messages.SAVE
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
    header: m.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE,
    confirmText: m.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE,
    cancelText: m.Z.Messages.CANCEL,
    onConfirm: () => {
      this.handleStopEditing(), (0, l.iD)(this.props.path);
    },
    children: (0, i.jsx)(r.Text, {
      variant: 'text-md/normal',
      children: m.Z.Messages.USER_SETTINGS_GAMES_REMOVE_LOCATION_BODY
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
class S extends a.PureComponent {
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
  editingPath: a
} = this.state;
return (0, i.jsxs)(r.FormSection, {
  className: I.wrapper,
  title: m.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATIONS,
  children: [
    e.map(e => {
      let {
        path: s,
        label: r
      } = e;
      return (0, i.jsx)(T, {
        path: s,
        label: r,
        metadata: t[s],
        isDefault: n === s,
        editingPath: a,
        hasGamesInstalledInPath: u.Z.hasGamesInstalledInPath(s),
        onToggleEditing: this.handleToggleEditing
      }, s);
    }),
    (0, i.jsx)('div', {
      className: I.buttonRowWrapper,
      children: (0, i.jsx)(r.Button, {
        disabled: !E.isPlatformEmbedded,
        onClick: this.handleAddInstallationLocation,
        size: r.Button.Sizes.SMALL,
        children: m.Z.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_ADD
      })
    })
  ]
});
  }
  constructor(...e) {
super(...e), p(this, 'state', {
  editingPath: null
}), p(this, 'handleAddInstallationLocation', () => {
  h.ZP.showOpenDialog(['openDirectory']).then(e => {
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
t.Z = s.ZP.connectStores([u.Z], () => ({
  installationPaths: u.Z.installationPaths,
  installationPathsMetadata: u.Z.installationPathsMetadata,
  defaultInstallationPath: u.Z.defaultInstallationPath
}))(S);