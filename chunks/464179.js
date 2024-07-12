t(47120), t(411104);
var n, r, s, l, o, i, c, u = t(735250),
  d = t(470079),
  E = t(588391),
  _ = t(217986),
  p = t(971809),
  m = t(481060),
  A = t(153124),
  N = t(823379),
  h = t(754103),
  T = t(689938),
  I = t(761462);

function S(e, a, t) {
  return a in e ? Object.defineProperty(e, a, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[a] = t, e;
}
let C = [
'AE',
'AG',
'AN',
'AO',
'AW',
'BF',
'BI',
'BJ',
'BM',
'BO',
'BQ',
'BS',
'BW',
'BZ',
'CD',
'CF',
'CG',
'CI',
'CK',
'CM',
'CW',
'DJ',
'DM',
'ER',
'FJ',
'GA',
'GD',
'GH',
'GM',
'GQ',
'GY',
'HK',
'HM',
'IE',
'JM',
'KE',
'KI',
'KM',
'KN',
'KP',
'LY',
'ML',
'MO',
'MR',
'MW',
'NA',
'NR',
'NU',
'QA',
'RW',
'SB',
'SC',
'SL',
'SR',
'ST',
'SX',
'SY',
'TD',
'TF',
'TG',
'TK',
'TL',
'TO',
'TV',
'UG',
'VU',
'YE',
'ZA',
'ZW'
  ],
  b = _.Z.map(e => ({
value: e.alpha2,
label: e.name
  })).filter(e => 'KP' !== e.value && 'SY' !== e.value),
  P = (0, A.hQ)(),
  R = (0, A.hQ)(),
  f = (0, A.hQ)(),
  y = (0, A.hQ)(),
  M = (0, A.hQ)(),
  g = (0, A.hQ)(),
  O = (0, A.hQ)();
(o = n || (n = {})).NAME = 'name', o.COUNTRY = 'country', o.LINE1 = 'line1', o.LINE2 = 'line2', o.CITY = 'city', o.POSTAL_CODE = 'postalCode', o.STATE = 'state', (i = r || (r = {})).MODAL_US = 'modalUS', i.MODAL_INTL = 'modalInternational', i.MODAL_US_WITH_NAME = 'modalUSWithName', i.MODAL_INTL_WITH_NAME = 'modalInternationalWithName', i.SETTINGS_US = 'settingsUS', i.SETTINGS_INTL = 'settingsInternational', i.SETTINGS_INTL_NO_NAME = 'settingsInternationalWithoutName', i.SETTINGS_US_MOBILE = 'settingsUSMobile', i.SETTINGS_INTL_MOBILE = 'settingsInternationalMobile', i.SETTINGS_INTL_NO_NAME_MOBILE = 'settingsInternationalWithoutNameMobile', (c = s || (s = {})).EDIT = 'edit', c.CREATE = 'create';
let L = {
US: p.G,
CA: E.X
  },
  v = e => ({
name: 'name',
id: P,
title: () => T.Z.Messages.BILLING_ADDRESS_NAME,
autoComplete: 'name',
getClassNameForLayout: e => [
  'modalUS',
  'modalInternational',
  'modalUSWithName',
  'modalInternationalWithName',
  'settingsUSMobile',
  'settingsInternationalMobile',
  'settingsInternationalWithoutNameMobile'
].includes(e) ? I.width100 : I.width60,
renderInput: e => (0, u.jsx)(m.TextInput, {
  ...e
})
  }),
  D = e => ({
name: 'country',
id: R,
title: () => T.Z.Messages.BILLING_ADDRESS_COUNTRY,
autoComplete: 'country',
getClassNameForLayout: e => {
  switch (e) {
    case 'modalUS':
    case 'modalInternational':
    case 'modalUSWithName':
    case 'modalInternationalWithName':
      return I.width100;
    default:
      return I.width75;
  }
},
renderInput(e, a) {
  let {
    onChange: t,
    ...n
  } = e;
  return (0, u.jsx)(m.SearchableSelect, {
    ...n,
    autoFocus: !0,
    maxVisibleItems: 8,
    isDisabled: 'edit' === a.mode,
    options: b,
    onChange: a => {
      null != t && t(a, e.name);
    }
  });
}
  }),
  x = e => ({
name: 'line1',
id: f,
title: () => T.Z.Messages.BILLING_ADDRESS_ADDRESS,
autoComplete: 'address-line1',
placeholder: () => T.Z.Messages.BILLING_ADDRESS_ADDRESS_PLACEHOLDER,
getClassNameForLayout: e => [
  'modalUS',
  'modalInternational',
  'modalUSWithName',
  'modalInternationalWithName',
  'settingsUSMobile',
  'settingsInternationalMobile',
  'settingsInternationalWithoutNameMobile'
].includes(e) ? I.width100 : I.width60,
renderInput: e => (0, u.jsx)(m.TextInput, {
  ...e
})
  }),
  Z = e => ({
name: 'line2',
id: y,
title: () => T.Z.Messages.BILLING_ADDRESS_ADDRESS2,
placeholder: () => T.Z.Messages.BILLING_ADDRESS_ADDRESS2_PLACEHOLDER,
autoComplete: 'address-line2',
getClassNameForLayout: e => [
  'modalUS',
  'modalInternational',
  'modalUSWithName',
  'modalInternationalWithName',
  'settingsUSMobile',
  'settingsInternationalMobile',
  'settingsInternationalWithoutNameMobile'
].includes(e) ? I.width100 : I.width40,
renderInput: e => (0, u.jsx)(m.TextInput, {
  ...e
})
  }),
  Y = e => ({
name: 'city',
id: M,
title: () => T.Z.Messages.BILLING_ADDRESS_CITY,
autoComplete: 'address-level2',
placeholder: () => T.Z.Messages.BILLING_ADDRESS_CITY_PLACEHOLDER,
getClassNameForLayout: e => {
  switch (e) {
    case 'modalInternational':
    case 'modalUS':
    case 'modalInternationalWithName':
    case 'modalUSWithName':
    case 'settingsUSMobile':
    case 'settingsInternationalMobile':
    case 'settingsInternationalWithoutNameMobile':
      return I.width100;
    case 'settingsInternational':
      return I.width60;
    default:
      return I.width50;
  }
},
renderInput: e => (0, u.jsx)(m.TextInput, {
  ...e
})
  }),
  w = e => {
let a, t;
switch (e) {
  case 'US':
    a = T.Z.Messages.BILLING_ADDRESS_ZIP_CODE, t = T.Z.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER;
    break;
  case 'CA':
    a = T.Z.Messages.BILLING_ADDRESS_POSTAL_CODE, t = T.Z.Messages.BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER;
    break;
  default:
    a = T.Z.Messages.BILLING_ADDRESS_POSTAL_CODE;
}
return {
  name: 'postalCode',
  id: g,
  title: () => a,
  autoComplete: 'postal-code',
  placeholder: () => t,
  getClassNameForLayout: e => {
    switch (e) {
      case 'modalInternational':
      case 'modalInternationalWithName':
        return I.width100;
      case 'modalUS':
      case 'modalUSWithName':
      case 'settingsUSMobile':
      case 'settingsInternationalMobile':
      case 'settingsInternationalWithoutNameMobile':
        return I.width50;
      case 'settingsInternational':
        return I.width30;
      default:
        return I.width25;
    }
  },
  renderInput: e => (0, u.jsx)(m.TextInput, {
    ...e
  })
};
  },
  U = e => {
let a;
switch (e) {
  case 'US':
    a = T.Z.Messages.BILLING_ADDRESS_STATE;
    break;
  case 'CA':
    a = T.Z.Messages.BILLING_ADDRESS_PROVINCE;
    break;
  default:
    a = T.Z.Messages.BILLING_ADDRESS_REGION;
}
return {
  name: 'state',
  id: O,
  title: () => a,
  autoComplete: 'address-level1',
  getClassNameForLayout: e => {
    switch (e) {
      case 'modalInternational':
      case 'modalInternationalWithName':
      case 'settingsUSMobile':
      case 'settingsInternationalMobile':
      case 'settingsInternationalWithoutNameMobile':
        return I.width100;
      case 'modalUS':
      case 'modalUSWithName':
        return I.width50;
      case 'settingsInternational':
        return I.width30;
      default:
        return I.width25;
    }
  },
  renderInput(a) {
    let t = L[e],
      n = null == a.value || '' === a.value || null != t && null != t.find(e => {
        let {
          value: t
        } = e;
        return t === a.value;
      }),
      {
        layout: r,
        onChange: s,
        ...l
      } = a;
    return [
      'US',
      'CA'
    ].includes(e) && n ? (0, u.jsx)(m.SearchableSelect, {
      ...l,
      popoutPosition: [
        'modalUS',
        'modalInternational'
      ].includes(r) ? 'top' : void 0,
      options: t,
      onChange: e => {
        null != s && s(e, a.name);
      }
    }) : (0, u.jsx)(m.TextInput, {
      ...a
    });
  }
};
  },
  B = {
modalUS: [
  [D],
  [x],
  [Z],
  [Y],
  [
    U,
    w
  ]
],
modalInternational: [
  [D],
  [x],
  [Z],
  [Y],
  [U],
  [w]
],
modalUSWithName: [
  [D],
  [v],
  [x],
  [Z],
  [Y],
  [
    U,
    w
  ]
],
modalInternationalWithName: [
  [D],
  [v],
  [x],
  [Z],
  [Y],
  [U],
  [w]
],
settingsUS: [
  [v],
  [
    x,
    Z
  ],
  [
    Y,
    U,
    w
  ],
  [D]
],
settingsUSMobile: [
  [v],
  [x],
  [Z],
  [Y],
  [U],
  [w],
  [D]
],
settingsInternational: [
  [v],
  [
    x,
    Z
  ],
  [Y],
  [
    U,
    w
  ],
  [D]
],
settingsInternationalMobile: [
  [v],
  [x],
  [Z],
  [Y],
  [U],
  [w],
  [D]
],
settingsInternationalWithoutName: [
  [
    x,
    Z
  ],
  [Y],
  [
    U,
    w
  ],
  [D]
],
settingsInternationalWithoutNameMobile: [
  [x],
  [Z],
  [Y],
  [U],
  [w],
  [D]
]
  };
class H extends(l = d.PureComponent) {
  componentDidMount() {
this.handleInfoChange();
  }
  componentDidUpdate(e, a) {
this.state !== a && this.handleInfoChange();
  }
  hasValue(e) {
return null != e && '' !== e;
  }
  validateForm(e) {
let {
  values: a,
  dirtyFields: t
} = this.state, n = {};
(!e || t.name) && !this.hasValue(a.name) && 'edit' === this.props.mode && (n.name = T.Z.Messages.BILLING_ADDRESS_NAME_ERROR_REQUIRED), (!e || t.country) && !this.hasValue(a.country) && (n.country = T.Z.Messages.BILLING_ADDRESS_COUNTRY_ERROR_REQUIRED), (!e || t.line1) && !this.hasValue(a.line1) && (n.line1 = T.Z.Messages.BILLING_ADDRESS_ADDRESS_ERROR_REQUIRED), (!e || t.city) && !this.hasValue(a.city) && (n.city = T.Z.Messages.BILLING_ADDRESS_CITY_ERROR_REQUIRED);
let r = a.country;
switch (r) {
  case 'US':
    if (!e || t.postalCode) {
      let e = a.postalCode;
      this.hasValue(e) ? 5 !== e.length ? n.postalCode = T.Z.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH : !/^\d{5}$/.test(e) && (n.postalCode = T.Z.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID) : n.postalCode = T.Z.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED;
    }
    (!e || t.state) && !this.hasValue(a.state) && (n.state = T.Z.Messages.BILLING_ADDRESS_STATE_ERROR_REQUIRED);
    break;
  case 'CA':
    (!e || t.postalCode) && !this.hasValue(a.postalCode) && (n.postalCode = T.Z.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED), (!e || t.state) && !this.hasValue(a.state) && (n.state = T.Z.Messages.BILLING_ADDRESS_PROVINCE_ERROR_REQUIRED);
    break;
  default:
    (!e || t.postalCode) && !this.hasValue(a.postalCode) && !C.includes(null != r ? r : '') && (n.postalCode = T.Z.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED);
}
return n;
  }
  handleInfoChange() {
let {
  values: e,
  dirtyFields: a
} = this.state, t = this.validateForm(!1);
this.props.onBillingAddressChange(e, 0 === Object.keys(t).length, Object.keys(a).length > 0);
  }
  render() {
let {
  errors: e,
  values: a
} = this.state, {
  layout: t,
  mode: n,
  className: r,
  error: s
} = this.props, l = B[t];
if (null == l)
  throw Error('Provide a proper layout property.');
let o = a.country,
  i = l.map(e => {
    let a = e.map(e => e(null != o ? o : '')).filter(N.lm);
    return a.length > 0 ? {
      fields: a
    } : null;
  }).filter(N.lm);
return (0, u.jsx)(h.Z, {
  className: r,
  form: i,
  layout: t,
  values: a,
  errors: e,
  formError: s,
  onFieldChange: this.handleFieldChange,
  onFieldBlur: this.handleFieldBlur,
  mode: n
});
  }
  constructor(...e) {
super(...e), S(this, 'state', {
  values: {
    name: this.props.name,
    country: this.props.country,
    line1: this.props.line1,
    line2: this.props.line2,
    city: this.props.city,
    postalCode: this.props.postalCode,
    state: this.props.state
  },
  dirtyFields: {},
  errors: {}
}), S(this, 'handleFieldBlur', () => {
  this.setState({
    errors: this.validateForm(!0)
  });
}), S(this, 'handleFieldChange', (e, a) => {
  if (null == a)
    return;
  let {
    values: t,
    errors: n,
    dirtyFields: r
  } = this.state;
  delete n[a], this.setState({
    values: {
      ...t,
      [a]: e
    },
    dirtyFields: {
      ...r,
      [a]: !0
    },
    errors: n
  });
});
  }
}
S(H, 'Layouts', r), S(H, 'Modes', s), S(H, 'defaultProps', {
  name: '',
  country: '',
  line1: '',
  line2: '',
  city: '',
  postalCode: '',
  state: '',
  layout: 'modalUS',
  mode: 'create',
  error: null
}), a.ZP = H;