n.d(e, { Z: () => i });
var t = n(475637);
let i = {
    ordinalNumber: (0, n(925300).Z)({
        matchPattern: /^(\d+)\./i,
        parsePattern: /\d+/i,
        valueCallback: function (o) {
            return parseInt(o, 10);
        }
    }),
    era: (0, t.Z)({
        matchPatterns: {
            narrow: /^(pr\.n\.e\.|AD)/i,
            abbreviated: /^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,
            wide: /^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^pr/i, /^(po|nova)/i]
        },
        defaultParseWidth: 'any'
    }),
    quarter: (0, t.Z)({
        matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^[1234]\.\s?kv\.?/i,
            wide: /^[1234]\. kvartal/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/1/i, /2/i, /3/i, /4/i]
        },
        defaultParseWidth: 'any',
        valueCallback: function (o) {
            return o + 1;
        }
    }),
    month: (0, t.Z)({
        matchPatterns: {
            narrow: /^(10|11|12|[123456789])\./i,
            abbreviated: /^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,
            wide: /^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/1/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i, /8/i, /9/i, /10/i, /11/i, /12/i],
            abbreviated: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i],
            wide: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i]
        },
        defaultParseWidth: 'wide'
    }),
    day: (0, t.Z)({
        matchPatterns: {
            narrow: /^[npusčc]/i,
            short: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
            abbreviated: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
            wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
        },
        defaultParseWidth: 'any'
    }),
    dayPeriod: (0, t.Z)({
        matchPatterns: { any: /^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i },
        defaultMatchWidth: 'any',
        parsePatterns: {
            any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^pono/i,
                noon: /^pod/i,
                morning: /jutro/i,
                afternoon: /(poslije\s|po)+podne/i,
                evening: /(navece|naveče)/i,
                night: /(nocu|noću)/i
            }
        },
        defaultParseWidth: 'any'
    })
};
