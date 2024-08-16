t.d(a, {
    w: function () {
        return m;
    }
}),
    t(47120);
var s,
    n,
    l = t(735250),
    r = t(470079),
    o = t(481060),
    i = t(285888),
    c = t(754103),
    u = t(689938),
    d = t(702512),
    E = t(473276);
function A(e) {
    let { onChange: a, billingAddressInfo: t, error: s } = e,
        [n, i] = r.useState({}),
        [E, A] = r.useState({}),
        N = {
            name: 'email',
            title: () => u.Z.Messages.EMAIL,
            autoComplete: 'cc-name',
            placeholder: () => u.Z.Messages.EMAIL,
            getClassNameForLayout: () => d.width100,
            renderInput: (e) => (0, l.jsx)(o.TextInput, { ...e })
        },
        m = {
            name: 'name',
            title: () => u.Z.Messages.CREDIT_CARD_NAME,
            autoComplete: 'cc-name',
            placeholder: () => u.Z.Messages.CREDIT_CARD_NAME,
            getClassNameForLayout: () => d.width100,
            renderInput: (e) => (0, l.jsx)(o.TextInput, { ...e })
        };
    return (0, l.jsx)(c.Z, {
        form: [{ fields: [N] }, { fields: [m] }],
        errors: E,
        formError: s,
        values: {
            name: t.name,
            email: t.email
        },
        onFieldChange: function (e, s) {
            if (null != s)
                !n[s] && '' !== e && i((e) => ((e[s] = !0), e)),
                    n[s] && '' === e ? A((e) => ('email' === s && (e[s] = u.Z.Messages.PAYMENT_SOURCE_EMAIL_ERROR_REQUIRED), 'name' === s && (e[s] = u.Z.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED), e)) : A((e) => (delete e[s], e)),
                    a({
                        name: t.name,
                        email: t.email,
                        [s]: e
                    });
        }
    });
}
((n = s || (s = {})).EMAIL = 'email'), (n.NAME = 'name');
let N = [
    {
        label: 'Alior Bank',
        value: 'alior_bank'
    },
    {
        label: 'Bank Millenium',
        value: 'bank_millennium'
    },
    {
        label: 'Bank Nowy BFG S.A.',
        value: 'bank_nowy_bfg_sa'
    },
    {
        label: 'Bank PEKAO S.A',
        value: 'bank_pekao_sa'
    },
    {
        label: 'Banki SpBdzielcze',
        value: 'banki_spbdzielcze'
    },
    {
        label: 'Blik via redirect',
        value: 'blik'
    },
    {
        label: 'BNP Paribas',
        value: 'bnp_paribas'
    },
    {
        label: 'BOZ',
        value: 'boz'
    },
    {
        label: 'CitiHandlowy',
        value: 'citi_handlowy'
    },
    {
        label: 'Credit Agricole',
        value: 'credit_agricole'
    },
    {
        label: 'EnveloBank',
        value: 'envelobank'
    },
    {
        label: 'e-Transfer Poctowy24',
        value: 'etransfer_pocztowy24'
    },
    {
        label: 'Getin Bank',
        value: 'getin_bank'
    },
    {
        label: 'IdeaBank',
        value: 'ideabank'
    },
    {
        label: 'ING',
        value: 'ing'
    },
    {
        label: 'inteligo',
        value: 'inteligo'
    },
    {
        label: 'mBank-mtransfer',
        value: 'mbank_mtransfer'
    },
    {
        label: 'Nest Przelew',
        value: 'nest_przelew'
    },
    {
        label: 'Noble Pay',
        value: 'noble_pay'
    },
    {
        label: 'PBac z iPKO (PKO+BP)',
        value: 'pbac_z_ipko'
    },
    {
        label: 'Plus Bank',
        value: 'plus_bank'
    },
    {
        label: 'Santander-przelew24',
        value: 'santander_przelew24'
    },
    {
        label: 'T-Mobile Usbugi Bankowe',
        value: 'tmobile_usbugi_bankowe'
    },
    {
        label: 'Toyota Bank',
        value: 'toyota_bank'
    },
    {
        label: 'Volkswagen Bank',
        value: 'volkswagen_bank'
    }
];
function m(e) {
    let { onDetailsChange: a, onP24BankChange: t, error: s, billingAddressInfo: n, p24BankValue: o } = e,
        [m, _] = r.useState(o),
        p = 'p24Bank',
        h = [
            {
                fields: [
                    {
                        name: p,
                        title: () => u.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL,
                        getClassNameForLayout: () => d.width100,
                        renderInput: (e) =>
                            (0, l.jsx)(i.Z, {
                                maxMenuHeight: 190,
                                menuPlacement: i.Z.MenuPlacements.TOP,
                                clearable: !1,
                                options: N,
                                value: e.value,
                                onChange: (e) => {
                                    let { value: a } = e;
                                    t(a), _(a);
                                }
                            })
                    }
                ]
            }
        ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(A, {
                error: s,
                billingAddressInfo: n,
                onChange: a
            }),
            (0, l.jsx)(c.Z, {
                className: E.p24Form,
                form: h,
                errors: {},
                formError: s,
                values: { [p]: m }
            })
        ]
    });
}
a.Z = A;
