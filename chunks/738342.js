t.d(a, {
    w: function () {
        return m;
    }
}), t(47120);
var n, r, s = t(735250), l = t(470079), o = t(481060), i = t(987134), c = t(754103), u = t(689938), d = t(538298), E = t(449234);
function _(e) {
    let {
            onChange: a,
            billingAddressInfo: t,
            error: n
        } = e, [r, i] = l.useState({}), [E, _] = l.useState({}), p = {
            name: 'email',
            title: () => u.Z.Messages.EMAIL,
            autoComplete: 'cc-name',
            placeholder: () => u.Z.Messages.EMAIL,
            getClassNameForLayout: () => d.width100,
            renderInput: e => (0, s.jsx)(o.TextInput, { ...e })
        }, m = {
            name: 'name',
            title: () => u.Z.Messages.CREDIT_CARD_NAME,
            autoComplete: 'cc-name',
            placeholder: () => u.Z.Messages.CREDIT_CARD_NAME,
            getClassNameForLayout: () => d.width100,
            renderInput: e => (0, s.jsx)(o.TextInput, { ...e })
        };
    return (0, s.jsx)(c.Z, {
        form: [
            { fields: [p] },
            { fields: [m] }
        ],
        errors: E,
        formError: n,
        values: {
            name: t.name,
            email: t.email
        },
        onFieldChange: function (e, n) {
            if (null != n)
                !r[n] && '' !== e && i(e => (e[n] = !0, e)), r[n] && '' === e ? _(e => ('email' === n && (e[n] = u.Z.Messages.PAYMENT_SOURCE_EMAIL_ERROR_REQUIRED), 'name' === n && (e[n] = u.Z.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED), e)) : _(e => (delete e[n], e)), a({
                    name: t.name,
                    email: t.email,
                    [n]: e
                });
        }
    });
}
(r = n || (n = {})).EMAIL = 'email', r.NAME = 'name';
let p = [
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
    let {
            onDetailsChange: a,
            onP24BankChange: t,
            error: n,
            billingAddressInfo: r,
            p24BankValue: o
        } = e, [m, A] = l.useState(o), N = 'p24Bank', h = [{
                fields: [{
                        name: N,
                        title: () => u.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL,
                        getClassNameForLayout: () => d.width100,
                        renderInput: e => (0, s.jsx)(i.Z, {
                            maxMenuHeight: 190,
                            menuPlacement: i.Z.MenuPlacements.TOP,
                            clearable: !1,
                            options: p,
                            value: e.value,
                            onChange: e => {
                                let {value: a} = e;
                                t(a), A(a);
                            }
                        })
                    }]
            }];
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(_, {
                error: n,
                billingAddressInfo: r,
                onChange: a
            }),
            (0, s.jsx)(c.Z, {
                className: E.p24Form,
                form: h,
                errors: {},
                formError: n,
                values: { [N]: m }
            })
        ]
    });
}
a.Z = _;
