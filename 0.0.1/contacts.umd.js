(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ionic-native/keyboard/ngx'), require('@ionic-native/keyboard/ngx/index'), require('@ionic-native/in-app-browser/ngx'), require('@ionic-native/in-app-browser/ngx/index'), require('graphql-tag'), require('apollo-angular'), require('immutability-helper'), require('@sorba-app/sorba-ui-components'), require('@ionic/angular'), require('@angular/common'), require('@agm/core'), require('@angular/platform-browser'), require('@angular/router'), require('@angular/forms'), require('@ionic-native/document-viewer/ngx'), require('@ionic-native/file/ngx'), require('@ionic-native/file-opener/ngx'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/scrolling'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('contacts', ['exports', '@ionic-native/keyboard/ngx', '@ionic-native/keyboard/ngx/index', '@ionic-native/in-app-browser/ngx', '@ionic-native/in-app-browser/ngx/index', 'graphql-tag', 'apollo-angular', 'immutability-helper', '@sorba-app/sorba-ui-components', '@ionic/angular', '@angular/common', '@agm/core', '@angular/platform-browser', '@angular/router', '@angular/forms', '@ionic-native/document-viewer/ngx', '@ionic-native/file/ngx', '@ionic-native/file-opener/ngx', 'rxjs', 'rxjs/operators', '@angular/cdk/scrolling', '@angular/core'], factory) :
    (factory((global.contacts = {}),global.ngx,global.i1,global.ngx$1,global.i1$1,global.gql,global.i1$2,global.update,global.sorbaUiComponents,global.i2,global.ng.common,global.core,global.ng.platformBrowser,global.ng.router,global.ng.forms,global.ngx$2,global.ngx$3,global.ngx$4,global.rxjs,global.rxjs.operators,global.ng.cdk.scrolling,global.ng.core));
}(this, (function (exports,ngx,i1,ngx$1,i1$1,gql,i1$2,update,sorbaUiComponents,i2,common,core,platformBrowser,router,forms,ngx$2,ngx$3,ngx$4,rxjs,operators,scrolling,i0) { 'use strict';

    gql = gql && gql.hasOwnProperty('default') ? gql['default'] : gql;
    update = update && update.hasOwnProperty('default') ? update['default'] : update;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var EContactPath = {
        contacts: 'contacts',
        contact: 'contact',
        notifications: 'notifications',
    };
    /** @enum {string} */
    var EContactTitles = {
        contacts: 'Contacts',
    };
    /** @enum {string} */
    var EContactType = {
        user: 'user',
        company: 'company',
        all: 'all',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var storageKeys = {
        USER: 'user',
        TOKEN: 'token',
        DOMAINS: 'domains',
        ACTIVE_LANGUAGE: 'activeLanguage',
        SHOW_ONBOARDING_PAGE: 'showOnboardingPage',
        ACTIVE_DOMAIN: 'activeDomain',
    };
    /** @enum {number} */
    var EKeyboardOutput = {
        output: 220,
    };
    EKeyboardOutput[EKeyboardOutput.output] = 'output';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var selectedMenu = [
        {
            count: 0,
            type: EContactType.all,
            label: 'All contacts',
            active: true
        },
        {
            count: 0,
            type: EContactType.user,
            label: 'User contacts',
            active: false
        },
        {
            count: 0,
            type: EContactType.company,
            label: 'Company contacts',
            active: false
        }
    ];
    /** @type {?} */
    var menu = [
        {
            menuItemIcon: 'contact',
            menuItemName: 'Contact list',
            menuItemLink: '#/contacts/contact',
            subMenu: []
        },
        {
            menuItemIcon: 'outlook',
            menuItemName: 'Outlook export',
            menuItemLink: '#/contacts/contact',
            subMenu: []
        },
        {
            menuItemIcon: 'report',
            menuItemName: 'Reports',
            menuItemLink: '#/contacts/contact',
            subMenu: [
                {
                    subMenuItemName: 'Number ranges',
                    subMenuItemLink: '#/contacts/contact'
                },
                {
                    subMenuItemName: 'Default values',
                    subMenuItemLink: '#/contacts/contact'
                },
                {
                    subMenuItemName: 'Address import',
                    subMenuItemLink: '#/contacts/contact'
                }
            ]
        },
        {
            menuItemIcon: 'mutations',
            menuItemName: 'Global mutations',
            menuItemLink: '#/contacts/contact',
            subMenu: []
        },
        {
            menuItemIcon: 'settings-filled',
            menuItemName: 'Settings',
            menuItemLink: '#/contacts/contact',
            subMenu: [
                {
                    subMenuItemName: 'Number ranges',
                    subMenuItemLink: '#/contacts/contact'
                },
                {
                    subMenuItemName: 'Default values',
                    subMenuItemLink: '#/contacts/contact'
                },
                {
                    subMenuItemName: 'Address import',
                    subMenuItemLink: '#/contacts/contact'
                },
                {
                    subMenuItemName: 'Subdivisions',
                    subMenuItemLink: '#/contacts/contact'
                }
            ]
        }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routePaths = {
        PRIVACY_POLICY: 'privacy-policy',
        TERMS_OF_SERVICE: '/assets/docs/2019_AGB_SORBA_EDV_AG.pdf',
        HELP_CENTER: 'https://support.sorba.ch/hc/de'
    };
    /** @type {?} */
    var iabOptions = {
        clearcache: 'yes',
        clearsessioncache: 'yes',
        hideurlbar: 'yes',
        location: 'no',
        zoom: 'no'
    };
    /** @type {?} */
    var contactsListHeaderHeight = 120;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var platforms = {
        MOBILE: 'mobile',
        ANDROID: 'android',
        IOS: 'ios',
        MOBILE_WEB: 'mobileweb',
        DESKTOP: 'desktop',
        TABLET: 'tablet',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} items
     * @param {?} field
     * @return {?}
     */
    function sortByABC(items, field) {
        return items.sort(( /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */function (a, b) { return a[field].localeCompare(b[field]); }));
    }
    /**
     * @param {?} names
     * @return {?}
     */
    function contactStringArr(names) {
        return names
            .join(' ')
            .trim()
            .replace(/\s{2,}/g, ' ');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactsHelper = /** @class */ (function () {
        function ContactsHelper(appService, urlUtils) {
            this.appService = appService;
            this.urlUtils = urlUtils;
            this.isMobile = window.innerWidth < 768;
            this.isDesktop = window.innerWidth > 1023;
            this.isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
            this.desktopHeight = 'calc(100vh - var(--header-height) - var(--ion-safe-area-top, 0) - 277px)';
            this.activeContact = new rxjs.BehaviorSubject(null);
            this.activeLanguage$ = new rxjs.BehaviorSubject('ENGLISH');
            this.activeDomain$ = new rxjs.BehaviorSubject(null);
            this.headerData = new rxjs.BehaviorSubject({
                title: EContactTitles.contacts,
                path: '/'
            });
        }
        /**
         * @param {?} users
         * @param {?} sText
         * @return {?}
         */
        ContactsHelper.prototype.searchBySymbol = /**
         * @param {?} users
         * @param {?} sText
         * @return {?}
         */
            function (users, sText) {
                /** @type {?} */
                var searchText = sText.toLowerCase();
                return users
                    .map(( /**
             * @param {?} item
             * @return {?}
             */function (item) {
                    var e_1, _a;
                    /** @type {?} */
                    var key;
                    /** @type {?} */
                    var text = contactStringArr([item.first_name, item.name]);
                    try {
                        for (var _b = __values(Object.keys(item)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            key = _c.value;
                            if (item[key] && ("" + item[key]).toLowerCase().includes(searchText)) {
                                return __assign({}, item, { subText: item[key], text: text });
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }))
                    .filter(( /**
             * @param {?} item
             * @return {?}
             */function (item) { return !!item; }));
            };
        /**
         * @param {?} height
         * @return {?}
         */
        ContactsHelper.prototype.getMobileHeight = /**
         * @param {?} height
         * @return {?}
         */
            function (height) {
                return "calc(100vh - var(--header-height) - var(--ion-safe-area-top, 0) - " + height + ")";
            };
        /**
         * @return {?}
         */
        ContactsHelper.prototype.getActiveDomain = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return new Promise(( /**
                 * @param {?} res
                 * @param {?} rej
                 * @return {?}
                 */function (res, rej) {
                    if (_this.isTablet || _this.isMobile) {
                        _this.appService
                            .getActiveDomain()
                            .pipe(operators.take(1))
                            .subscribe(( /**
                     * @param {?} activeDomain
                     * @return {?}
                     */function (activeDomain) {
                            res(activeDomain);
                        }));
                    }
                    else {
                        res(_this.urlUtils.getSubDomain());
                    }
                }));
            };
        ContactsHelper.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ContactsHelper.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['appService',] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['urlUtils',] }] }
            ];
        };
        /** @nocollapse */ ContactsHelper.ngInjectableDef = i0.defineInjectable({ factory: function ContactsHelper_Factory() { return new ContactsHelper(i0.inject("appService"), i0.inject("urlUtils")); }, token: ContactsHelper, providedIn: "root" });
        return ContactsHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var KeyboardHelper = /** @class */ (function () {
        function KeyboardHelper(keyboard, platform) {
            var _this = this;
            this.keyboard = keyboard;
            this.platform = platform;
            this.keyboardHeight$ = new rxjs.BehaviorSubject(null);
            window.addEventListener('keyboardDidHide', ( /**
             * @return {?}
             */function () {
                return _this.keyboardHeight$.next(null);
            }));
            window.addEventListener('keyboardWillShow', ( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                return _this.keyboardHeight$.next(event['keyboardHeight']);
            }));
        }
        /**
         * @return {?}
         */
        KeyboardHelper.prototype.setKeyboardMode = /**
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var isWeb;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.platform.is('desktop')];
                            case 1:
                                isWeb = _a.sent();
                                if (!isWeb) {
                                    this.keyboard.setResizeMode(ngx.KeyboardResizeMode.Native);
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            };
        KeyboardHelper.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        KeyboardHelper.ctorParameters = function () {
            return [
                { type: ngx.Keyboard },
                { type: i2.Platform }
            ];
        };
        /** @nocollapse */ KeyboardHelper.ngInjectableDef = i0.defineInjectable({ factory: function KeyboardHelper_Factory() { return new KeyboardHelper(i0.inject(i1.Keyboard), i0.inject(i2.Platform)); }, token: KeyboardHelper, providedIn: "root" });
        return KeyboardHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinkRedirectHelper = /** @class */ (function () {
        function LinkRedirectHelper(iab) {
            this.iab = iab;
        }
        /**
         * @param {?} $event
         * @param {?} link
         * @return {?}
         */
        LinkRedirectHelper.prototype.redirect = /**
         * @param {?} $event
         * @param {?} link
         * @return {?}
         */
            function ($event, link) {
                $event.preventDefault();
                this.iab.create(link, '_blank', iabOptions);
            };
        LinkRedirectHelper.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LinkRedirectHelper.ctorParameters = function () {
            return [
                { type: ngx$1.InAppBrowser }
            ];
        };
        /** @nocollapse */ LinkRedirectHelper.ngInjectableDef = i0.defineInjectable({ factory: function LinkRedirectHelper_Factory() { return new LinkRedirectHelper(i0.inject(i1$1.InAppBrowser)); }, token: LinkRedirectHelper, providedIn: "root" });
        return LinkRedirectHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlatformHelper = /** @class */ (function () {
        function PlatformHelper(plt) {
            this.plt = plt;
        }
        /**
         * @return {?}
         */
        PlatformHelper.prototype.isMobileWeb = /**
         * @return {?}
         */
            function () {
                return this.plt.is(platforms.MOBILE_WEB);
            };
        /**
         * @return {?}
         */
        PlatformHelper.prototype.isDesktop = /**
         * @return {?}
         */
            function () {
                return this.plt.is(platforms.DESKTOP);
            };
        /**
         * @return {?}
         */
        PlatformHelper.prototype.isMobileApp = /**
         * @return {?}
         */
            function () {
                return this.plt.is(platforms.MOBILE);
            };
        /**
         * @return {?}
         */
        PlatformHelper.prototype.isIOS = /**
         * @return {?}
         */
            function () {
                return this.plt.is(platforms.IOS);
            };
        /**
         * @return {?}
         */
        PlatformHelper.prototype.isAndroid = /**
         * @return {?}
         */
            function () {
                return this.plt.is(platforms.ANDROID);
            };
        /**
         * @return {?}
         */
        PlatformHelper.prototype.isTablet = /**
         * @return {?}
         */
            function () {
                return this.plt.is(platforms.TABLET);
            };
        PlatformHelper.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PlatformHelper.ctorParameters = function () {
            return [
                { type: i2.Platform }
            ];
        };
        /** @nocollapse */ PlatformHelper.ngInjectableDef = i0.defineInjectable({ factory: function PlatformHelper_Factory() { return new PlatformHelper(i0.inject(i2.Platform)); }, token: PlatformHelper, providedIn: "root" });
        return PlatformHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ContactAppInfoFragmentDoc = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fragment ContactAppInfo on AppContact {\n  first_name\n  name\n  id\n}\n    "], ["\n    fragment ContactAppInfo on AppContact {\n  first_name\n  name\n  id\n}\n    "])));
    /** @type {?} */
    var SearchContactAppInfoFragmentDoc = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    fragment SearchContactAppInfo on AppContact {\n  business_number\n  mobile_number\n  first_name\n  private_number\n  fax\n  website\n  address\n  logical20\n  name\n  id\n  postal_code\n  city\n  po_box\n}\n    "], ["\n    fragment SearchContactAppInfo on AppContact {\n  business_number\n  mobile_number\n  first_name\n  private_number\n  fax\n  website\n  address\n  logical20\n  name\n  id\n  postal_code\n  city\n  po_box\n}\n    "])));
    /** @type {?} */
    var AppProjectInfoFragmentDoc = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    fragment AppProjectInfo on AppProject {\n  id\n  name\n  description\n  order_no\n  offer_total\n  responsible\n  denied\n  done\n  warranty\n  in_progress\n  do_not_calculate\n  acquisition\n  replicating\n  archives\n  offer\n}\n    "], ["\n    fragment AppProjectInfo on AppProject {\n  id\n  name\n  description\n  order_no\n  offer_total\n  responsible\n  denied\n  done\n  warranty\n  in_progress\n  do_not_calculate\n  acquisition\n  replicating\n  archives\n  offer\n}\n    "])));
    /** @type {?} */
    var ContactAppsDocument = gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    query ContactApps($domain: String!, $page: UInt!, $perPage: UInt!, $filter: ContactAppFilterInput) {\n  contactApps(domain: $domain, page: $page, perPage: $perPage, filter: $filter) {\n    items {\n      ...ContactAppInfo\n    }\n    pageInfo {\n      totalCount\n    }\n    aggregatedInfo {\n      companiesContactsCount\n      usersContactsCount\n    }\n  }\n}\n    ", ""], ["\n    query ContactApps($domain: String!, $page: UInt!, $perPage: UInt!, $filter: ContactAppFilterInput) {\n  contactApps(domain: $domain, page: $page, perPage: $perPage, filter: $filter) {\n    items {\n      ...ContactAppInfo\n    }\n    pageInfo {\n      totalCount\n    }\n    aggregatedInfo {\n      companiesContactsCount\n      usersContactsCount\n    }\n  }\n}\n    ", ""])), ContactAppInfoFragmentDoc);
    var ContactAppsGQL = /** @class */ (function (_super) {
        __extends(ContactAppsGQL, _super);
        function ContactAppsGQL() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.document = ContactAppsDocument;
            return _this;
        }
        ContactAppsGQL.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ ContactAppsGQL.ngInjectableDef = i0.defineInjectable({ factory: function ContactAppsGQL_Factory() { return new ContactAppsGQL(i0.inject(i1$2.Apollo)); }, token: ContactAppsGQL, providedIn: "root" });
        return ContactAppsGQL;
    }(i1$2.Query));
    /** @type {?} */
    var SearchContactsDocument = gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    query SearchContacts($domain: String!, $page: UInt!, $perPage: UInt!, $filter: ContactAppFilterInput) {\n  contactApps(domain: $domain, page: $page, perPage: $perPage, filter: $filter) {\n    items {\n      ...SearchContactAppInfo\n    }\n  }\n}\n    ", ""], ["\n    query SearchContacts($domain: String!, $page: UInt!, $perPage: UInt!, $filter: ContactAppFilterInput) {\n  contactApps(domain: $domain, page: $page, perPage: $perPage, filter: $filter) {\n    items {\n      ...SearchContactAppInfo\n    }\n  }\n}\n    ", ""])), SearchContactAppInfoFragmentDoc);
    var SearchContactsGQL = /** @class */ (function (_super) {
        __extends(SearchContactsGQL, _super);
        function SearchContactsGQL() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.document = SearchContactsDocument;
            return _this;
        }
        SearchContactsGQL.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ SearchContactsGQL.ngInjectableDef = i0.defineInjectable({ factory: function SearchContactsGQL_Factory() { return new SearchContactsGQL(i0.inject(i1$2.Apollo)); }, token: SearchContactsGQL, providedIn: "root" });
        return SearchContactsGQL;
    }(i1$2.Query));
    /** @type {?} */
    var ContactAppByIdDocument = gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    query ContactAppByID($id: ID!, $domain: String!) {\n  contactAppById(id: $id, domain: $domain) {\n    ...SearchContactAppInfo\n    projects {\n      ...AppProjectInfo\n    }\n    geocode_address {\n      lat\n      lon\n    }\n  }\n}\n    ", "\n", ""], ["\n    query ContactAppByID($id: ID!, $domain: String!) {\n  contactAppById(id: $id, domain: $domain) {\n    ...SearchContactAppInfo\n    projects {\n      ...AppProjectInfo\n    }\n    geocode_address {\n      lat\n      lon\n    }\n  }\n}\n    ", "\n", ""])), SearchContactAppInfoFragmentDoc, AppProjectInfoFragmentDoc);
    var ContactAppByIdGQL = /** @class */ (function (_super) {
        __extends(ContactAppByIdGQL, _super);
        function ContactAppByIdGQL() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.document = ContactAppByIdDocument;
            return _this;
        }
        ContactAppByIdGQL.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ ContactAppByIdGQL.ngInjectableDef = i0.defineInjectable({ factory: function ContactAppByIdGQL_Factory() { return new ContactAppByIdGQL(i0.inject(i1$2.Apollo)); }, token: ContactAppByIdGQL, providedIn: "root" });
        return ContactAppByIdGQL;
    }(i1$2.Query));
    /** @type {?} */
    var LanguagesDocument = gql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    query Languages {\n  languages\n}\n    "], ["\n    query Languages {\n  languages\n}\n    "])));
    var LanguagesGQL = /** @class */ (function (_super) {
        __extends(LanguagesGQL, _super);
        function LanguagesGQL() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.document = LanguagesDocument;
            return _this;
        }
        LanguagesGQL.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ LanguagesGQL.ngInjectableDef = i0.defineInjectable({ factory: function LanguagesGQL_Factory() { return new LanguagesGQL(i0.inject(i1$2.Apollo)); }, token: LanguagesGQL, providedIn: "root" });
        return LanguagesGQL;
    }(i1$2.Query));
    var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactsComponent = /** @class */ (function () {
        function ContactsComponent(storageService, urlUtils, appService, contactsHelper, contactListGQL, router$$1, cd, keyboardHelper, platform) {
            var _this = this;
            this.storageService = storageService;
            this.urlUtils = urlUtils;
            this.appService = appService;
            this.contactsHelper = contactsHelper;
            this.contactListGQL = contactListGQL;
            this.router = router$$1;
            this.cd = cd;
            this.keyboardHelper = keyboardHelper;
            this.platform = platform;
            this.windowWidth = window.innerWidth;
            this.menuData = menu;
            this.showMenu = false;
            this.menuItems = selectedMenu.map(( /**
             * @param {?} item
             * @return {?}
             */function (item) { return (__assign({}, item)); }));
            this.contactsList = [];
            this.unsubscribe$ = new rxjs.Subject();
            this.isMobile = this.contactsHelper.isMobile;
            this.mobileHeight = this.contactsHelper.getMobileHeight('152px');
            this.searchText = '';
            this.itemsPerPage = 100;
            this.isLoading = true;
            this.getActiveLanguage();
            this.setContactsGql().then(( /**
             * @return {?}
             */function () {
                _this.updateOnChangeDomain();
            }));
            this.contactsHelper.headerData.next({
                title: EContactTitles.contacts,
                path: '/'
            });
        }
        Object.defineProperty(ContactsComponent.prototype, "menuFloat", {
            get: /**
             * @return {?}
             */ function () {
                return this.windowWidth < 1024 && this.windowWidth > 767;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactsComponent.prototype, "desktopHeight", {
            get: /**
             * @return {?}
             */ function () {
                if (!this.isMobile) {
                    /** @type {?} */
                    var info = this.rightPanel &&
                        this.rightPanel.nativeElement &&
                        this.rightPanel.nativeElement.getElementsByClassName('contact-details-body');
                    /** @type {?} */
                    var desktopHeight = info &&
                        info[0] &&
                        info[0].offsetHeight > contactsListHeaderHeight &&
                        info[0].offsetHeight - contactsListHeaderHeight;
                    return desktopHeight ? desktopHeight : 0;
                }
                else {
                    return (this.platform &&
                        this.platform.height() &&
                        this.platform.height() - EKeyboardOutput.output);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ContactsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.unsubscribe$.next();
                this.unsubscribe$.complete();
            };
        /**
         * @return {?}
         */
        ContactsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.toggleMenu();
                this.keyboardHelper.setKeyboardMode();
            };
        /**
         * @return {?}
         */
        ContactsComponent.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                this.cd.detectChanges();
            };
        /**
         * @private
         * @return {?}
         */
        ContactsComponent.prototype.updateOnChangeDomain = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.contactsHelper.activeDomain$
                    .pipe(operators.takeUntil(this.unsubscribe$), operators.filter(( /**
             * @param {?} domain
             * @return {?}
             */function (domain) { return domain !== null; })), operators.distinctUntilChanged())
                    .subscribe(( /**
             * @param {?} domain
             * @return {?}
             */function (domain) {
                    _this.resetSearch = domain;
                    _this.resetVariables(domain);
                    _this.contactsGqlQuery.refetch(_this.gqlVariables).then(( /**
                     * @return {?}
                     */function () {
                        _this.menuItems.forEach(( /**
                         * @param {?} menuItem
                         * @return {?}
                         */function (menuItem) {
                            menuItem.active = selectedMenu.find(( /**
                             * @param {?} __0
                             * @return {?}
                             */function (_a) {
                                var type = _a.type;
                                return type === menuItem.type;
                            })).active;
                        }));
                    }));
                }));
            };
        /**
         * @private
         * @return {?}
         */
        ContactsComponent.prototype.setContactsGql = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var domain;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.contactsHelper.getActiveDomain()];
                            case 1:
                                domain = _a.sent();
                                this.resetVariables(domain);
                                this.contactsGqlQuery = this.contactListGQL.watch(this.gqlVariables);
                                this.contactsGqlQuery.valueChanges
                                    .pipe(operators.takeUntil(this.unsubscribe$), operators.tap(( /**
                             * @param {?} __0
                             * @return {?}
                             */function (_a) {
                                    var loading = _a.loading;
                                    return (_this.isLoading = loading);
                                })), operators.filter(( /**
                                 * @param {?} __0
                                 * @return {?}
                                 */function (_a) {
                                    var loading = _a.loading;
                                    return !loading;
                                })), operators.switchMap(( /**
                                 * @param {?} __0
                                 * @return {?}
                                 */function (_a) {
                                    var data = _a.data, errors = _a.errors;
                                    if (errors) {
                                        return rxjs.throwError(errors);
                                    }
                                    else {
                                        return rxjs.of(data.contactApps);
                                    }
                                })))
                                    .subscribe(( /**
                             * @param {?} contactApps
                             * @return {?}
                             */function (contactApps) {
                                    /** @type {?} */
                                    var contacts = _this.countContacts(contactApps);
                                    sortByABC(contacts, 'text');
                                    _this.contactsList = contacts;
                                    _this.selectFirstContact();
                                }));
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @private
         * @return {?}
         */
        ContactsComponent.prototype.getActiveLanguage = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.storageService.getValue(storageKeys.ACTIVE_LANGUAGE).then(( /**
                 * @param {?} language
                 * @return {?}
                 */function (language) {
                    if (language) {
                        _this.contactsHelper.activeLanguage$.next(language);
                    }
                }));
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ContactsComponent.prototype.selectContactItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.contactsHelper.activeContact.next(item);
                        if (this.isMobile) {
                            this.router.navigate(["/" + EContactPath.contacts + "/" + item.id]);
                        }
                        return [2 /*return*/];
                    });
                });
            };
        /**
         * @param {?} search
         * @return {?}
         */
        ContactsComponent.prototype.searchEvent = /**
         * @param {?} search
         * @return {?}
         */
            function (search) {
                this.searchText = search;
            };
        /**
         * @return {?}
         */
        ContactsComponent.prototype.fetchMore = /**
         * @return {?}
         */
            function () {
                this.contactsGqlQuery.fetchMore({
                    variables: {
                        page: ++this.gqlVariables.page
                    },
                    updateQuery: ( /**
                     * @param {?} prev
                     * @param {?} __1
                     * @return {?}
                     */function (prev, _a) {
                        var fetchMoreResult = _a.fetchMoreResult;
                        if (!fetchMoreResult) {
                            return prev;
                        }
                        return update(prev, {
                            contactApps: {
                                items: { $push: fetchMoreResult.contactApps.items },
                                pageInfo: { $merge: fetchMoreResult.contactApps.pageInfo },
                                aggregatedInfo: {
                                    $merge: fetchMoreResult.contactApps.aggregatedInfo
                                }
                            }
                        });
                    })
                });
            };
        /**
         * @param {?} menuItem
         * @return {?}
         */
        ContactsComponent.prototype.filterByMenu = /**
         * @param {?} menuItem
         * @return {?}
         */
            function (menuItem) {
                this.resetSearch = menuItem;
                this.gqlVariables.page = 1;
                switch (menuItem.type) {
                    case EContactType.company:
                        this.gqlVariables.filter.logical20 = true;
                        break;
                    case EContactType.user:
                        this.gqlVariables.filter.logical20 = false;
                        break;
                    default:
                        delete this.gqlVariables.filter.logical20;
                        break;
                }
                this.contactsGqlQuery.refetch(this.gqlVariables);
            };
        /**
         * @private
         * @param {?} __0
         * @return {?}
         */
        ContactsComponent.prototype.countContacts = /**
         * @private
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var items = _a.items, pageInfo = _a.pageInfo, aggregatedInfo = _a.aggregatedInfo;
                this.setMenuCount({
                    companyCount: aggregatedInfo.companiesContactsCount,
                    userCount: aggregatedInfo.usersContactsCount,
                    totalCount: pageInfo.totalCount
                });
                return items.map(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    /** @type {?} */
                    var text = contactStringArr([item.first_name, item.name]);
                    return Object.assign({}, item, { text: text });
                }));
            };
        /**
         * @private
         * @param {?} users
         * @return {?}
         */
        ContactsComponent.prototype.setMenuCount = /**
         * @private
         * @param {?} users
         * @return {?}
         */
            function (users) {
                this.totalCountContacts = users.totalCount;
                this.menuItems.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    switch (item.type) {
                        case EContactType.user:
                            item.count = users.userCount;
                            break;
                        case EContactType.company:
                            item.count = users.companyCount;
                            break;
                        default:
                            item.count = users.userCount + users.companyCount;
                            break;
                    }
                }));
            };
        /**
         * @private
         * @return {?}
         */
        ContactsComponent.prototype.selectFirstContact = /**
         * @private
         * @return {?}
         */
            function () {
                if (!this.isMobile &&
                    this.contactsList.length > 0 &&
                    this.gqlVariables.page < 2) {
                    this.selectContactItem(this.contactsList[0]);
                }
            };
        /**
         * @private
         * @return {?}
         */
        ContactsComponent.prototype.toggleMenu = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.keyboardHelper.keyboardHeight$
                    .pipe(operators.takeUntil(this.unsubscribe$))
                    .subscribe(( /**
             * @param {?} height
             * @return {?}
             */function (height) {
                    _this.mobileHeight = _this.contactsHelper.getMobileHeight(height ? '96px' : '152px');
                    _this.showMenu = !!height;
                }));
            };
        /**
         * @private
         * @param {?} domain
         * @return {?}
         */
        ContactsComponent.prototype.resetVariables = /**
         * @private
         * @param {?} domain
         * @return {?}
         */
            function (domain) {
                this.gqlVariables = {
                    page: 1,
                    perPage: this.itemsPerPage,
                    domain: domain,
                    filter: {}
                };
            };
        ContactsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-contacts',
                        template: "<sr-sidemenu\n  *ngIf=\"!showMenu\"\n  openMenuText=\"menu\"\n  closeMenuText=\"close\"\n  [data]=\"menuData\"\n  [windowWidth]=\"windowWidth\"\n  [isMenuFloat]=\"menuFloat\"\n></sr-sidemenu>\n\n<sr-content-card class=\"contacts-container\" *ngIf=\"!isLoading; else loading\">\n  <div class=\"left-panel\">\n    <header class=\"contacts-list-header\">\n      <div class=\"top-block\">\n        <lib-selected-menu\n          [items]=\"menuItems\"\n          (selectedEvent)=\"filterByMenu($event)\"\n        ></lib-selected-menu>\n        <sr-button\n          *ngIf=\"!showMenu\"\n          buttonType=\"icon\"\n          iconName=\"contact-add\"\n          class=\"contact-add\"\n        ></sr-button>\n      </div>\n\n      <lib-search-contacts\n        [scrollHeight]=\"desktopHeight\"\n        [gqlVariables]=\"gqlVariables\"\n        [resetSearch]=\"resetSearch\"\n        (searchEvent)=\"searchEvent($event)\"\n        (selectContactItem)=\"selectContactItem($event)\"\n      ></lib-search-contacts>\n    </header>\n\n    <lib-scroller\n      *ngIf=\"!searchText.length && contactsList.length; else noData\"\n      [scrollHeight]=\"desktopHeight\"\n      [totalCountContacts]=\"totalCountContacts\"\n      (fetchMore)=\"fetchMore()\"\n      [activeItemId]=\"(contactsHelper.activeContact | async)?.id\"\n      (selectContact)=\"selectContactItem($event)\"\n      [contacts]=\"contactsList\"\n    ></lib-scroller>\n\n    <ng-template #noData>\n      <p class=\"empty-contacts\" *ngIf=\"!searchText.length\">No data ...</p>\n    </ng-template>\n  </div>\n\n  <!-- user details column-->\n  <div class=\"right-panel\" #rightPanel *ngIf=\"!isMobile\">\n    <div class=\"contact-details-body\">\n      <lib-contact-detail></lib-contact-detail>\n    </div>\n  </div>\n</sr-content-card>\n\n<ng-template #loading>\n  <sr-progress-spinner backdropColor=\"#fff\"></sr-progress-spinner>\n</ng-template>\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [".contacts-list-header .top-block{display:flex;align-items:center;justify-content:space-between;padding:14px 8px 14px 12px}.contacts-list-header .mat-button-wrapper sr-text{order:-1}.contacts-list-header .mat-icon-button.text{font-weight:600}.contact-add .mat-icon-button.icon{color:var(--sr-base-color)}.search-field .input-wrapper{display:flex;align-items:center;height:48px;padding:4px 16px 4px 28px;border-top:1px solid var(--sr-border-color);border-bottom:1px solid var(--sr-border-color)}.search-field .input-wrapper sr-icon{color:var(--base-gray-64)}.search-field .input-wrapper input{width:100%;padding:0;border:0;font-weight:600}.search-field .input-wrapper .search-icon{margin-right:16px}.search-field .no-data{display:block;padding:16px 16px 16px 68px}@media (max-width:767px){.contacts-container .contact-add{position:fixed;right:8px;bottom:8px;z-index:71}}ion-spinner{margin:0 auto;display:block}@media (min-width:768px){.contacts-container .content-card{display:flex}.contacts-container .left-panel{width:263px;border-right:1px solid var(--sr-border-color);border-bottom-left-radius:5px;overflow:hidden}.contacts-container .right-panel{width:calc(100% - 263px)}.contacts-list-header .top-block{height:72px;padding:3px 16px 4px 24px}.filter-menu{min-width:226px;max-width:300px;margin:8px 0 0 -24px}}.empty-contacts{text-align:center}.info-section{padding:16px 12px;border-top:1px solid var(--sr-border-color)}.info-section .link{display:inline-block;color:var(--sr-base-color);line-height:24px;text-decoration:none}.info-section .link:focus,.info-section .link:hover{text-decoration:underline}.info-section .section-header{display:flex;align-items:center;justify-content:space-between;min-height:40px}.info-section .section-header sr-heading{color:var(--sr-light-text-color)}.info-section .section-body{margin:10px 0 8px}.info-section .section-body .button-wrapper{padding-left:44px;margin-top:21px}.info-section .section-info-field{display:flex}.info-section .section-info-field:not(:first-child){margin-top:11px}.info-section .section-info-field .field-content{flex-grow:1}.info-section .section-info-field .field-content.contact{display:flex}.info-section .section-info-field .field-content.contact sr-avatar{margin-right:12px}.info-section .section-info-field .field-content.contact sr-link{display:block;margin-top:6px}.info-section .section-info-field .field-content.project{display:flex}.info-section .section-info-field .field-content.project sr-font-icon,.info-section .section-info-field .field-content.project sr-icon{color:var(--base-gray-64)}.info-section .section-info-field .field-content.project .price-label{display:inline-block;margin:6px 0 0}.info-section .section-info-field .field-content.project .icon-wrapper{min-width:32px;margin-right:12px;text-align:center}.info-section .section-info-field .field-content.project .divider{display:none}.info-section .section-info-field .field-content.project .field{display:block}.info-section .section-info-field .field-content.contact,.info-section .section-info-field .field-content.contact .info,.info-section .section-info-field .field-content.contact .text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.price-label{display:inline-block;padding:1px 5px 0;border:1px solid var(--sr-border-color);border-radius:9px;color:var(--sr-green);font-size:14px;font-weight:600;line-height:15px}@media (min-width:768px){.info-section{padding:23px 24px 21px}.info-section .section-body{margin:10px 0 6px}.info-section .section-info-field .field-content.project .price-label{display:inline-block;margin:0}.info-section .section-info-field .field-content.project .project-name{margin-right:5px}.info-section .section-info-field .field-content.project .icon-wrapper{width:32px;display:flex;justify-content:center;margin-right:12px}.info-section .section-info-field .field-content.project .divider{display:inline-block;margin:0 2px;color:var(--sr-light-text-color)}.info-section .section-info-field .field-content.project .field{display:inline-block}}@media (min-width:1024px){::-webkit-scrollbar-track{background:var(--base-gray-3)}::-webkit-scrollbar{background:0 0}::-webkit-scrollbar-thumb{background:var(--base-gray-16);border-radius:calc(5px / 2)}::-webkit-scrollbar:vertical{width:5px}::-webkit-scrollbar:horizontal{height:5px}}@media (min-width:1280px){.info-section .section-info-field{position:relative;cursor:pointer}.info-section .section-info-field sr-actions{opacity:0;visibility:hidden;transition:250ms}.info-section .section-info-field:hover sr-actions{opacity:1;visibility:visible}}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:0;width:100%}.contacts-list-container{position:relative}.contacts-list-container .group-title-wrapper{background:var(--white);z-index:3}.contacts-list-container .group-title-wrapper .group-title{position:relative;padding-left:56px;background-color:var(--base-gray-3);color:var(--base-gray-64);line-height:24px;text-transform:uppercase}.scroller{position:relative}.sticker{padding-left:56px;color:var(--base-gray-64);line-height:24px;text-transform:uppercase;position:absolute;width:100%;z-index:10;background:#f9f9f9;left:0}@media (min-width:768px){.contacts-list-container .group-title-wrapper .group-title,.sticker{padding-left:68px}}"]
                    }] }
        ];
        /** @nocollapse */
        ContactsComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['storageService',] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['urlUtils',] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['appService',] }] },
                { type: ContactsHelper },
                { type: ContactAppsGQL },
                { type: router.Router },
                { type: i0.ChangeDetectorRef },
                { type: KeyboardHelper },
                { type: i2.Platform }
            ];
        };
        ContactsComponent.propDecorators = {
            rightPanel: [{ type: i0.ViewChild, args: ['rightPanel',] }]
        };
        return ContactsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectedMenuComponent = /** @class */ (function () {
        function SelectedMenuComponent() {
            this.selectedEvent = new i0.EventEmitter();
        }
        Object.defineProperty(SelectedMenuComponent.prototype, "selectedMenu", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var item = this.items.find(( /**
                 * @param {?} i
                 * @return {?}
                 */function (i) { return i.active; }));
                return item.label + " (" + item.count + ")";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} item
         * @return {?}
         */
        SelectedMenuComponent.prototype.clickEvent = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (item.active) {
                    return;
                }
                this.items.forEach(( /**
                 * @param {?} i
                 * @return {?}
                 */function (i) {
                    i.active = i.type === item.type;
                }));
                this.selectedEvent.emit(item);
            };
        SelectedMenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-selected-menu',
                        template: "<sr-menu\n  menuButtonType=\"text\"\n  xPosition=\"after\"\n  yPosition=\"below\"\n  [buttonText]=\"selectedMenu\"\n  iconName=\"chevron-down\"\n  customMenuClass=\"filter-menu\"\n>\n  <sr-menu-body>\n    <sr-menu-item\n      (click)=\"clickEvent(item)\"\n      [hasCheckMark]=\"true\"\n      [class.active]=\"item.active\"\n      *ngFor=\"let item of items\"\n      itemsPosition=\"between\"\n    >\n      <sr-text>{{ item.label }} ({{ item.count }})</sr-text>\n    </sr-menu-item>\n  </sr-menu-body>\n</sr-menu>\n",
                        styles: [""]
                    }] }
        ];
        SelectedMenuComponent.propDecorators = {
            items: [{ type: i0.Input }],
            selectedEvent: [{ type: i0.Output }]
        };
        return SelectedMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(storageService, appService, sanitizer, router$$1, contactsHelper) {
            this.storageService = storageService;
            this.appService = appService;
            this.sanitizer = sanitizer;
            this.router = router$$1;
            this.contactsHelper = contactsHelper;
            this.isMobile = this.contactsHelper.isMobile;
            this.unsubscribe = new rxjs.Subject();
            this.headerData$ = this.contactsHelper.headerData;
            this.storageService.getValue(storageKeys.DOMAINS);
            this.getDomains();
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.unsubscribe.next();
                this.unsubscribe.complete();
            };
        /**
         * @private
         * @return {?}
         */
        HeaderComponent.prototype.getDomains = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var domains, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.storageService.getValue(storageKeys.DOMAINS)];
                            case 1:
                                domains = _b.sent();
                                _a = this;
                                return [4 /*yield*/, this.contactsHelper.getActiveDomain()];
                            case 2:
                                _a.activeDomainName = _b.sent();
                                this.domains = domains.map(( /**
                                 * @param {?} domain
                                 * @return {?}
                                 */function (domain) { return Object.assign(domain, { name: domain.name.toLowerCase() }); }));
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?} activeDomain
         * @return {?}
         */
        HeaderComponent.prototype.handleChangeDomain = /**
         * @param {?} activeDomain
         * @return {?}
         */
            function (activeDomain) {
                this.router.navigate(["/" + EContactPath.contacts]);
                this.appService.handleChangeDomain(activeDomain);
                this.activeDomainName = activeDomain;
                this.contactsHelper.activeDomain$.next(activeDomain);
            };
        /**
         * @param {?} gradient
         * @return {?}
         */
        HeaderComponent.prototype.style = /**
         * @param {?} gradient
         * @return {?}
         */
            function (gradient) {
                /** @type {?} */
                var colorStop1 = "var(" + gradient + ")";
                /** @type {?} */
                var colorStop2 = 'var(--sr-gradient-blue)';
                return this.sanitizer.bypassSecurityTrustStyle("--color-stop-1: " + colorStop1 + "; --color-stop-2: " + colorStop2);
            };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.getRoot = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.headerData$
                    .pipe(operators.take(1))
                    .subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) { return _this.router.navigate([data.path]); }));
            };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.getNotificationPage = /**
         * @return {?}
         */
            function () {
                this.router.navigate(["/" + EContactPath.notifications]);
            };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.logout = /**
         * @return {?}
         */
            function () {
                this.appService.logout();
            };
        HeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-header',
                        template: "<sr-header>\n  <sr-header-inner-block blockPosition=\"left\">\n    <sr-button\n      (clickHandler)=\"getRoot()\"\n      buttonType=\"icon\"\n      iconName=\"arrow-left\"\n    ></sr-button>\n    <sr-heading\n      *ngIf=\"!isMobile\"\n      [headingText]=\"(headerData$ | async)?.title\"\n      headingType=\"h1\"\n    ></sr-heading>\n  </sr-header-inner-block>\n\n  <sr-header-title *ngIf=\"!isMobile\">\n    <sr-icon\n      [style]=\"style('--sr-gradient-cyan')\"\n      iconName=\"ic-c\"\n      iconSize=\"36\"\n    ></sr-icon>\n  </sr-header-title>\n\n  <sr-header-inner-block blockPosition=\"right\">\n    <sr-menu\n      menuButtonType=\"icon\"\n      iconName=\"notifications\"\n      badgeContent=\"2\"\n      xPosition=\"before\"\n      yPosition=\"below\"\n      customMenuClass=\"notifications header-menu\"\n    >\n      <sr-menu-body noPadding=\"true\">\n        <sr-notifications\n          [data]=\"[\n            {\n              text:\n                '<b>Michael Klein</b> has shared the <b>Werden Bau</b> project with you.',\n              time: '5h',\n              unread: true\n            },\n            {\n              text: 'You have a new message from <b>Andreas Kolt.</b>',\n              time: 'Yesterday',\n              unread: true\n            },\n            {\n              text:\n                '<b>Martina M\u00FCller</b> has shared the <b>Dogo Gartenbau</b> contact with you.',\n              time: 'May 27',\n              unread: true\n            },\n            {\n              text: 'You have joined to <b>Sorba Web Container</b>.',\n              time: 'January 5, 2018',\n              unread: false\n            }\n          ]\"\n        ></sr-notifications>\n      </sr-menu-body>\n      <sr-button\n        buttonType=\"additional\"\n        [isBoxed]=\"true\"\n        (click)=\"getNotificationPage()\"\n        buttonText=\"Show all\"\n      ></sr-button>\n    </sr-menu>\n\n    <sr-menu\n      *ngIf=\"activeDomainName\"\n      menuButtonType=\"avatar\"\n      xPosition=\"before\"\n      yPosition=\"below\"\n      [avatarValue]=\"activeDomainName[0]\"\n      customMenuClass=\"domains header-menu\"\n    >\n      <sr-menu-header class=\"main-menu-item\">\n        <sr-avatar\n          [avatarSize]=\"48\"\n          [avatarValue]=\"activeDomainName[0]\"\n        ></sr-avatar>\n        <sr-text>{{ activeDomainName }}</sr-text>\n      </sr-menu-header>\n\n      <sr-menu-body>\n        <span *ngFor=\"let domain of domains\">\n          <sr-menu-item\n            *ngIf=\"activeDomainName !== domain?.name\"\n            (click)=\"handleChangeDomain(domain?.name)\"\n          >\n            <sr-avatar\n              [avatarSize]=\"40\"\n              [avatarValue]=\"(domain?.name)[0]\"\n            ></sr-avatar>\n            <sr-text>{{ domain?.name }}</sr-text>\n          </sr-menu-item>\n        </span>\n      </sr-menu-body>\n\n      <sr-menu-footer itemsPosition=\"end\">\n        <sr-button\n          buttonType=\"primary\"\n          buttonText=\"Sign out\"\n          (clickHandler)=\"logout()\"\n        ></sr-button>\n      </sr-menu-footer>\n    </sr-menu>\n  </sr-header-inner-block>\n</sr-header>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['storageService',] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['appService',] }] },
                { type: platformBrowser.DomSanitizer },
                { type: router.Router },
                { type: ContactsHelper }
            ];
        };
        return HeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Escapes/prepares string for a RegExp
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */
    var escapeRegExp = ( /**
     * @param {?} str
     * @return {?}
     */function (str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }); // $& means the whole matched string

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchContactsComponent = /** @class */ (function () {
        function SearchContactsComponent(contactsHelper, searchContactsGQL) {
            var _this = this;
            this.contactsHelper = contactsHelper;
            this.searchContactsGQL = searchContactsGQL;
            this.searchEvent = new i0.EventEmitter();
            this.selectContactItem = new i0.EventEmitter();
            this.search = new forms.FormControl('');
            this.subject = new rxjs.Subject();
            this.searchText = '';
            this.search.valueChanges
                .pipe(operators.takeUntil(this.subject), operators.debounceTime(400))
                .subscribe(( /**
         * @param {?} text
         * @return {?}
         */function (text) { return _this.searchContact(text && text.trim()); }));
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        SearchContactsComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.resetSearch) {
                    this.clearInput();
                }
            };
        /**
         * @return {?}
         */
        SearchContactsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subject.next();
                this.subject.complete();
            };
        Object.defineProperty(SearchContactsComponent.prototype, "isSearching", {
            get: /**
             * @return {?}
             */ function () {
                return !!this.searchText.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} contact
         * @return {?}
         */
        SearchContactsComponent.prototype.selectContact = /**
         * @param {?} contact
         * @return {?}
         */
            function (contact) {
                this.selectContactItem.emit(contact);
            };
        /**
         * @return {?}
         */
        SearchContactsComponent.prototype.clearInput = /**
         * @return {?}
         */
            function () {
                this.search.setValue('');
            };
        /**
         * @private
         * @param {?} search
         * @return {?}
         */
        SearchContactsComponent.prototype.searchContact = /**
         * @private
         * @param {?} search
         * @return {?}
         */
            function (search) {
                var _this = this;
                this.searchText = search;
                this.searchEvent.emit(search);
                if (search && search.length) {
                    this.isLoading = true;
                    /** @type {?} */
                    var filters = this.gqlVariables.hasOwnProperty('filter')
                        ? Object.assign({}, this.gqlVariables.filter, { search: search })
                        : { search: search };
                    this.searchContactsGQL
                        .watch({
                        domain: this.gqlVariables.domain,
                        page: 1,
                        perPage: 1000,
                        filter: filters
                    })
                        .valueChanges.pipe(operators.map(( /**
                 * @param {?} __0
                 * @return {?}
                 */function (_a) {
                        var data = _a.data;
                        return data.contactApps;
                    })), operators.takeUntil(this.subject))
                        .subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                        /** @type {?} */
                        var items = ( /** @type {?} */(data.items));
                        _this.searchList = _this.contactsHelper.searchBySymbol(items, search);
                        _this.setTagHighLight(search);
                        _this.isLoading = false;
                    }));
                }
            };
        /**
         * @private
         * @param {?} text
         * @return {?}
         */
        SearchContactsComponent.prototype.setTagHighLight = /**
         * @private
         * @param {?} text
         * @return {?}
         */
            function (text) {
                var _this = this;
                if (!text.length) {
                    return;
                }
                /** @type {?} */
                var regex = new RegExp(escapeRegExp(text), 'ig');
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    var e_1, _a;
                    if (_this.searchContent && _this.searchContent.nativeElement) {
                        /** @type {?} */
                        var content = _this.searchContent.nativeElement.getElementsByClassName('info-field');
                        if (content.length) {
                            /** @type {?} */
                            var key = void 0;
                            try {
                                for (var content_1 = __values(content), content_1_1 = content_1.next(); !content_1_1.done; content_1_1 = content_1.next()) {
                                    key = content_1_1.value;
                                    /** @type {?} */
                                    var found = key.textContent.match(regex);
                                    /** @type {?} */
                                    var foundText = found && found.length && found[0];
                                    key.innerHTML = key.textContent.replace(regex, "<span class=\"highlight\">" + foundText + "</span>");
                                }
                            }
                            catch (e_1_1) {
                                e_1 = { error: e_1_1 };
                            }
                            finally {
                                try {
                                    if (content_1_1 && !content_1_1.done && (_a = content_1.return))
                                        _a.call(content_1);
                                }
                                finally {
                                    if (e_1)
                                        throw e_1.error;
                                }
                            }
                        }
                    }
                }));
            };
        SearchContactsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-search-contacts',
                        template: "<div class=\"bottom-block\">\n  <div class=\"search-field\">\n    <div class=\"input-wrapper\">\n      <sr-icon iconName=\"search\" class=\"search-icon\"></sr-icon>\n      <input type=\"search\" placeholder=\"Search\" [formControl]=\"search\" />\n      <sr-button\n        *ngIf=\"isSearching\"\n        buttonType=\"icon\"\n        iconName=\"cross\"\n        (clickHandler)=\"clearInput()\"\n      ></sr-button>\n    </div>\n\n    <ng-container *ngIf=\"isSearching\">\n      <div\n        *ngIf=\"!isLoading; else showSpinner\"\n        class=\"search-result\"\n        #searchContent\n      >\n        <lib-scroller\n          *ngIf=\"searchList?.length; else notFound\"\n          [activeItemId]=\"(contactsHelper.activeContact | async)?.id\"\n          [grouping]=\"false\"\n          [scrollHeight]=\"scrollHeight\"\n          [contacts]=\"searchList\"\n          (selectContact)=\"selectContact($event)\"\n        ></lib-scroller>\n      </div>\n\n      <ng-template #notFound>\n        <span class=\"no-data\">No match data ...</span>\n      </ng-template>\n\n      <ng-template #showSpinner><ion-spinner></ion-spinner></ng-template>\n    </ng-container>\n  </div>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SearchContactsComponent.ctorParameters = function () {
            return [
                { type: ContactsHelper },
                { type: SearchContactsGQL }
            ];
        };
        SearchContactsComponent.propDecorators = {
            searchContent: [{ type: i0.ViewChild, args: ['searchContent',] }],
            scrollHeight: [{ type: i0.Input }],
            resetSearch: [{ type: i0.Input }],
            gqlVariables: [{ type: i0.Input }],
            searchEvent: [{ type: i0.Output }],
            selectContactItem: [{ type: i0.Output }]
        };
        return SearchContactsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactDetailComponent = /** @class */ (function () {
        function ContactDetailComponent(contactByIdGQL, contactHelper) {
            var _this = this;
            this.contactByIdGQL = contactByIdGQL;
            this.contactHelper = contactHelper;
            this.contact = ( /** @type {?} */({}));
            this.unsubscribe$ = new rxjs.Subject();
            this.maxVisibleProjects = 3;
            this.projectSliceEnd = this.maxVisibleProjects;
            this.windowWidth = window.innerWidth;
            this.actions = [
                {
                    icon: 'edit',
                    text: 'Edit',
                    handler: ( /**
                     * @return {?}
                     */function () { return console.log('edit'); })
                },
                {
                    icon: 'delete',
                    text: 'Delete',
                    handler: ( /**
                     * @return {?}
                     */function () { return console.log('delete'); })
                }
            ];
            this.isMobile = this.contactHelper.isMobile;
            this.contactSub$ = this.contactHelper.activeContact.pipe(operators.takeUntil(this.unsubscribe$), operators.filter(( /**
             * @param {?} contactId
             * @return {?}
             */function (contactId) { return contactId !== null; })), operators.distinctUntilChanged());
            this.contactSub$.subscribe(( /**
             * @param {?} contact
             * @return {?}
             */function (contact) {
                if (!_this.contact) {
                    _this.contact = __assign({}, contact);
                }
                else {
                    Object.assign(_this.contact, contact);
                    _this.fetchLess();
                }
            }));
            this.initContactDetailsQuery();
            if (this.isMobile) {
                this.contactHelper.headerData.next({
                    path: "/" + EContactPath.contacts + "/" + EContactPath.contact,
                    title: ''
                });
            }
        }
        /**
         * @private
         * @return {?}
         */
        ContactDetailComponent.prototype.initContactDetailsQuery = /**
         * @private
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var domain;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.contactHelper.getActiveDomain()];
                            case 1:
                                domain = _a.sent();
                                this.contactSub$
                                    .pipe(operators.switchMap(( /**
                             * @param {?} contact
                             * @return {?}
                             */function (contact) {
                                    return _this.contactByIdGQL
                                        .fetch({ id: contact.id, domain: domain })
                                        .pipe(operators.map(( /**
                                 * @param {?} __0
                                 * @return {?}
                                 */function (_a) {
                                        var data = _a.data;
                                        return data.contactAppById;
                                    })));
                                })))
                                    .subscribe(( /**
                             * @param {?} contact
                             * @return {?}
                             */function (contact) {
                                    if (contact) {
                                        Object.assign(_this.contact, contact);
                                    }
                                }));
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @return {?}
         */
        ContactDetailComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.unsubscribe$.next();
                this.unsubscribe$.complete();
            };
        /**
         * @return {?}
         */
        ContactDetailComponent.prototype.fetchLess = /**
         * @return {?}
         */
            function () {
                this.projectSliceEnd = this.maxVisibleProjects;
            };
        /**
         * @return {?}
         */
        ContactDetailComponent.prototype.fetchMore = /**
         * @return {?}
         */
            function () {
                this.projectSliceEnd = undefined;
            };
        /**
         * @param {?=} contact
         * @return {?}
         */
        ContactDetailComponent.prototype.getFullName = /**
         * @param {?=} contact
         * @return {?}
         */
            function (contact) {
                if (contact) {
                    return contactStringArr([contact.first_name, contact.name]);
                }
            };
        /**
         * @param {?} field
         * @return {?}
         */
        ContactDetailComponent.prototype.getField = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                return field && field.length ? field : ' - ';
            };
        /**
         * @param {?} field
         * @param {?=} symbol
         * @return {?}
         */
        ContactDetailComponent.prototype.getAddress = /**
         * @param {?} field
         * @param {?=} symbol
         * @return {?}
         */
            function (field, symbol) {
                if (symbol === void 0) {
                    symbol = ',';
                }
                return field && field.length ? "" + field + (symbol || '') : '';
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        ContactDetailComponent.prototype.trackByFn = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                return item.id || index;
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ContactDetailComponent.prototype.getStatus = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                switch (true) {
                    case item.specification:
                        return 'Specification';
                    case item.offer:
                        return 'Offer';
                    case item.done:
                        return 'Done';
                    case item.denied:
                        return 'Denied';
                    case item.in_progress:
                    default:
                        return 'In progress';
                }
            };
        ContactDetailComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-contact-detail',
                        template: "<lib-contact-actions [fullName]=\"getFullName(contact)\"></lib-contact-actions>\n\n<div class=\"main-info-section\">\n  <sr-heading headingText=\"Contact Details\" headingType=\"h3\"></sr-heading>\n\n  <ul class=\"info-list\">\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Business number</div>\n      <div class=\"cell value\">\n        <sr-text>{{ getField(contact.business_number) }}</sr-text>\n      </div>\n    </li>\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Mobile number</div>\n      <div class=\"cell value\">\n        <sr-text>{{ getField(contact.mobile_number) }}</sr-text>\n      </div>\n    </li>\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Private Number</div>\n      <div class=\"cell value\">\n        <sr-text>{{ getField(contact.private_number) }}</sr-text>\n      </div>\n    </li>\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Fax</div>\n      <div class=\"cell value\">\n        <sr-text>{{ getField(contact.fax) }}</sr-text>\n      </div>\n    </li>\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Email</div>\n      <div class=\"cell value\">\n        <sr-text>{{ getField(contact.email) }}</sr-text>\n      </div>\n    </li>\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Website</div>\n      <div class=\"cell value\">\n        <sr-text>{{ getField(contact.website) }}</sr-text>\n      </div>\n    </li>\n    <li class=\"info-list-item\">\n      <div class=\"cell label\">Address</div>\n      <div class=\"cell value\">\n        <sr-text>{{ getAddress(contact.address) }}</sr-text>\n        <sr-text\n          >{{ contact.postal_code }}\n          {{ contact.city }}\n          {{ contact.po_box ? ',' : '' }}</sr-text\n        >\n        <sr-text>{{ contact.po_box }}</sr-text>\n      </div>\n    </li>\n  </ul>\n  <div class=\"map-container\">\n    <agm-map\n      [latitude]=\"contact?.geocode_address?.lat\"\n      [longitude]=\"contact?.geocode_address?.lon\"\n      [draggable]=\"false\"\n      [panControl]=\"false\"\n      [zoom]=\"15\"\n      [scaleControl]=\"false\"\n      [zoomControl]=\"false\"\n    >\n      <agm-marker\n        [latitude]=\"contact?.geocode_address?.lat\"\n        [longitude]=\"contact?.geocode_address?.lon\"\n      ></agm-marker>\n    </agm-map>\n  </div>\n</div>\n\n<div class=\"info-section\">\n  <header class=\"section-header\">\n    <sr-heading headingText=\"notes\" headingType=\"h3\"></sr-heading>\n    <sr-button buttonType=\"icon\" iconName=\"add-circle\"></sr-button>\n  </header>\n  <div class=\"section-body\">\n    <div class=\"section-info-field\">\n      <div class=\"field-content\">\n        <sr-text\n          >The company team is very qualified, so just follow the solutions that\n          will be provided and enjoy with a result.\n        </sr-text>\n      </div>\n      <sr-actions [windowWidth]=\"windowWidth\" [data]=\"actions\"></sr-actions>\n    </div>\n  </div>\n</div>\n\n<div class=\"info-section\">\n  <header class=\"section-header\">\n    <sr-heading headingText=\"Contact Persons\" headingType=\"h3\"></sr-heading>\n    <sr-button buttonType=\"icon\" iconName=\"add-circle\"></sr-button>\n  </header>\n  <div class=\"section-body\">\n    <div class=\"section-info-field\">\n      <div class=\"field-content contact\">\n        <sr-avatar avatarValue=\"y\"></sr-avatar>\n        <div class=\"info\">\n          <sr-link [linkUrl]=\"'#/contacts/contact'\"\n            >Mrs. Alyssa Ashcroft</sr-link\n          >\n          <sr-text textType=\"complementary\"\n            >Seestrasse 25, 9000 St. Gallen Seestrasse 25, 9000 St.\n            Gallen</sr-text\n          >\n        </div>\n      </div>\n      <sr-actions [windowWidth]=\"windowWidth\" [data]=\"actions\"></sr-actions>\n    </div>\n    <div class=\"section-info-field\">\n      <div class=\"field-content contact\">\n        <sr-avatar avatarValue=\"y\"></sr-avatar>\n        <div class=\"info\">\n          <sr-link [linkUrl]=\"'#/contacts/contact'\"\n            >Mrs. Alyssa Ashcroft</sr-link\n          >\n          <sr-text textType=\"complementary\"\n            >Seestrasse 25, 9000 St. Gallen Seestrasse 25, 9000 St.\n            Gallen</sr-text\n          >\n        </div>\n      </div>\n      <sr-actions [windowWidth]=\"windowWidth\" [data]=\"actions\"></sr-actions>\n    </div>\n    <div class=\"section-info-field\">\n      <div class=\"field-content contact\">\n        <sr-avatar avatarValue=\"y\"></sr-avatar>\n        <div class=\"info\">\n          <sr-link [linkUrl]=\"'#/contacts/contact'\"\n            >Mrs. Alyssa Ashcroft</sr-link\n          >\n          <sr-text textType=\"complementary\"\n            >Seestrasse 25, 9000 St. Gallen Seestrasse 25, 9000 St.\n            Gallen</sr-text\n          >\n        </div>\n      </div>\n      <sr-actions [windowWidth]=\"windowWidth\" [data]=\"actions\"></sr-actions>\n    </div>\n  </div>\n</div>\n\n<div class=\"info-section\">\n  <header class=\"section-header\">\n    <sr-heading headingText=\"Projects\" headingType=\"h3\"></sr-heading>\n    <sr-button buttonType=\"icon\" iconName=\"add-circle\"></sr-button>\n  </header>\n  <div class=\"section-body\">\n    <div\n      class=\"section-info-field\"\n      *ngFor=\"\n        let project of contact.projects | slice: 0:projectSliceEnd;\n        trackBy: trackByFn\n      \"\n    >\n      <div class=\"field-content project\">\n        <div class=\"icon-wrapper\">\n          <sr-icon iconName=\"case\"></sr-icon>\n        </div>\n        <div class=\"info\">\n          <div>\n            <a href=\"'#/contacts/contact'\" class=\"project-name link\">\n              {{ project.name }} {{ project.description }}\n            </a>\n            <span class=\"price-label\" *ngIf=\"!isMobile\">{{\n              project.offer_total | currency: 'EUR'\n            }}</span>\n          </div>\n          <sr-text textType=\"complementary\">\n            <span class=\"field order\">Order-No.: {{ project.order_no }}</span>\n            <span class=\"divider\">/</span>\n            <span class=\"field responsible\"\n              >Responsible:\n              <a href=\"'#/contacts/contact'\" class=\"link\">{{\n                project.responsible || '-'\n              }}</a></span\n            >\n            <span class=\"divider\">/</span>\n            <span class=\"field status\">Status: {{ getStatus(project) }}</span>\n          </sr-text>\n          <span class=\"price-label\" *ngIf=\"isMobile\">{{\n            project.offer_total | currency: 'EUR'\n          }}</span>\n        </div>\n      </div>\n      <sr-actions [windowWidth]=\"windowWidth\" [data]=\"actions\"></sr-actions>\n    </div>\n    <div\n      class=\"button-wrapper\"\n      *ngIf=\"contact?.projects?.length > maxVisibleProjects\"\n    >\n      <sr-button\n        (clickHandler)=\"fetchMore()\"\n        *ngIf=\"projectSliceEnd > 0\"\n        buttonText=\"Show more\"\n        buttonType=\"link\"\n      >\n      </sr-button>\n      <sr-button\n        (clickHandler)=\"fetchLess()\"\n        *ngIf=\"!projectSliceEnd\"\n        buttonText=\"Show less\"\n        buttonType=\"link\"\n      >\n      </sr-button>\n    </div>\n  </div>\n</div>\n",
                        styles: ["agm-map{height:160px}.main-info-section{padding:24px 12px}.main-info-section ::ng-deep .sub-heading{margin-bottom:14px;color:var(--base-gray-48)}.main-info-section .info-list-item:not(:last-child){padding-bottom:9px}.main-info-section .info-list-item .value{color:var(--sr-base-color)}.main-info-section .map-container{margin-top:23px}@media (min-width:768px){agm-map{height:216px}.main-info-section{padding:29px 24px 31px}.main-info-section .info-list-item{display:table-row}.main-info-section .info-list-item:not(:last-child) .cell{padding-bottom:8px}.main-info-section .info-list-item .cell{display:table-cell}.main-info-section .info-list-item .label{padding-right:14px;text-align:right}.main-info-section .map-container{height:216px;margin-top:31px}}"]
                    }] }
        ];
        /** @nocollapse */
        ContactDetailComponent.ctorParameters = function () {
            return [
                { type: ContactAppByIdGQL },
                { type: ContactsHelper }
            ];
        };
        return ContactDetailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ContactActionsComponent = /** @class */ (function () {
        function ContactActionsComponent() {
        }
        Object.defineProperty(ContactActionsComponent.prototype, "avatarSize", {
            get: /**
             * @return {?}
             */ function () {
                return window.innerWidth < 768 ? 36 : 40;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactActionsComponent.prototype, "showContact", {
            get: /**
             * @return {?}
             */ function () {
                return window.innerWidth < 768;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ContactActionsComponent.prototype, "showActions", {
            get: /**
             * @return {?}
             */ function () {
                return window.innerWidth > 767;
            },
            enumerable: true,
            configurable: true
        });
        ContactActionsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-contact-actions',
                        template: "<header class=\"contact-details-header\">\n  <div class=\"contact-base-info\">\n    <sr-avatar\n      [avatarValue]=\"fullName.charAt(0)\"\n      [avatarSize]=\"avatarSize\"\n    ></sr-avatar>\n    <sr-heading [headingText]=\"fullName\"></sr-heading>\n  </div>\n\n  <div class=\"contact-actions\" *ngIf=\"showContact\">\n    <sr-menu\n      menuButtonType=\"icon\"\n      iconName=\"more-vertical\"\n      class=\"contact-actions\"\n    >\n      <sr-menu-body>\n        <sr-menu-item\n          [hasCheckMark]=\"true\"\n          itemsPosition=\"between\"\n          class=\"contact-action\"\n        >\n          <sr-icon iconName=\"file-export\"></sr-icon>\n          <sr-text>Export</sr-text>\n        </sr-menu-item>\n        <sr-menu-item\n          [hasCheckMark]=\"true\"\n          itemsPosition=\"between\"\n          class=\"contact-action\"\n        >\n          <sr-icon iconName=\"print\"></sr-icon>\n          <sr-text>Print</sr-text>\n        </sr-menu-item>\n        <sr-menu-item\n          [hasCheckMark]=\"true\"\n          itemsPosition=\"between\"\n          class=\"contact-action\"\n        >\n          <sr-icon iconName=\"edit\"></sr-icon>\n          <sr-text>Edit</sr-text>\n        </sr-menu-item>\n        <sr-menu-item [hasCheckMark]=\"true\" class=\"contact-action\">\n          <sr-icon iconName=\"delete\"></sr-icon>\n          <sr-text>Delete</sr-text>\n        </sr-menu-item>\n      </sr-menu-body>\n    </sr-menu>\n  </div>\n\n  <div class=\"contact-actions\" *ngIf=\"showActions\">\n    <sr-button buttonType=\"icon\" iconName=\"file-export\"></sr-button>\n    <sr-button buttonType=\"icon\" iconName=\"print\"></sr-button>\n    <sr-button buttonType=\"icon\" iconName=\"edit\"></sr-button>\n    <sr-button buttonType=\"icon\" iconName=\"delete\"></sr-button>\n    <span class=\"divider\"></span>\n    <sr-button buttonType=\"icon\" iconName=\"three-column-view\"></sr-button>\n  </div>\n</header>\n",
                        styles: [".contact-details-header{display:flex;align-items:center;justify-content:space-between;padding:13px 12px 10px;border-bottom:1px solid var(--sr-border-color)}.contact-details-header sr-avatar{margin-right:8px}.contact-details-header sr-heading{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.contact-details-header ::ng-deep .heading{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.contact-base-info{display:flex;align-items:center;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.contact-action sr-icon{margin-right:16px;color:var(--base-gray-64)}@media (min-width:768px){.contact-details-header{padding:16px 16px 16px 24px}.contact-details-header sr-avatar{margin-right:12px}.contact-details-header sr-button{margin-left:8px}.contact-details-header .divider{width:1px;margin-left:8px;background:var(--sr-border-color)}.contact-details-header .contact-actions{display:flex}}"]
                    }] }
        ];
        /** @nocollapse */
        ContactActionsComponent.ctorParameters = function () { return []; };
        ContactActionsComponent.propDecorators = {
            fullName: [{ type: i0.Input }]
        };
        return ContactActionsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterComponent = /** @class */ (function () {
        function FooterComponent(linkRedirect, contactsHelper, languageGql, appService) {
            var _this = this;
            this.linkRedirect = linkRedirect;
            this.contactsHelper = contactsHelper;
            this.languageGql = languageGql;
            this.appService = appService;
            this.isMobile = this.contactsHelper.isMobile;
            this.isDesktop = this.contactsHelper.isDesktop;
            this.privacyPolicy = '#/' + routePaths.PRIVACY_POLICY;
            this.helpCenter = routePaths.HELP_CENTER;
            // texts
            this.privacy = 'Privacy';
            this.policy = 'Privacy Policy';
            this.service = 'Terms of Service';
            this.terms = 'Terms';
            this.center = 'Help Center';
            this.help = 'Help';
            this.subject = new rxjs.Subject();
            this.getLanguages();
            this.contactsHelper.activeLanguage$
                .pipe(operators.takeUntil(this.subject))
                .subscribe(( /**
         * @param {?} activeLanguage
         * @return {?}
         */function (activeLanguage) { return (_this.activeLanguage = activeLanguage); }));
        }
        /**
         * @return {?}
         */
        FooterComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subject.next();
                this.subject.complete();
            };
        Object.defineProperty(FooterComponent.prototype, "getText", {
            get: /**
             * @return {?}
             */ function () {
                return this.isDesktop ? this.policy : this.privacy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FooterComponent.prototype, "buttonText", {
            get: /**
             * @return {?}
             */ function () {
                return this.isDesktop ? this.service : this.terms;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FooterComponent.prototype, "getHelpText", {
            get: /**
             * @return {?}
             */ function () {
                return this.isDesktop ? this.center : this.help;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        FooterComponent.prototype.getLanguages = /**
         * @private
         * @return {?}
         */
            function () {
                this.languages$ = this.languageGql
                    .watch()
                    .valueChanges.pipe(operators.map(( /**
             * @param {?} __0
             * @return {?}
             */function (_a) {
                    var data = _a.data;
                    return data.languages;
                })));
            };
        /**
         * @param {?} event
         * @return {?}
         */
        FooterComponent.prototype.getHelpCenter = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.linkRedirect.redirect(event, this.helpCenter);
            };
        /**
         * @param {?} activeLanguage
         * @return {?}
         */
        FooterComponent.prototype.handleChangeLanguage = /**
         * @param {?} activeLanguage
         * @return {?}
         */
            function (activeLanguage) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (activeLanguage === this.activeLanguage) {
                                    return [2 /*return*/, null];
                                }
                                return [4 /*yield*/, this.appService.changeLanguage(activeLanguage)];
                            case 1:
                                _a.sent();
                                this.contactsHelper.activeLanguage$.next(activeLanguage);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        // todo: remove/replace with common component from the app container
        // todo: remove/replace with common component from the app container
        /**
         * @param {?} str
         * @return {?}
         */
        FooterComponent.prototype.uppercase =
            // todo: remove/replace with common component from the app container
            /**
             * @param {?} str
             * @return {?}
             */
            function (str) {
                /** @type {?} */
                var f = str.charAt(0).toUpperCase();
                return f + str.substr(1, str.length - 1).toLowerCase();
            };
        FooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-footer',
                        template: "<sr-footer *ngIf=\"!isMobile\">\n  <div class=\"row\">\n    <div class=\"col xs-4 m-4 l-5\">\n      <sr-text class=\"copyright\">&copy; 2019 Sorba</sr-text>\n    </div>\n    <div class=\"col xs-8 m-4 l-5 last-m\">\n      <sr-buttons-group buttonsPosition=\"end\">\n        <sr-link linkColor=\"gray\" linkSize=\"small\" [linkUrl]=\"privacyPolicy\">{{\n          getText\n        }}</sr-link>\n        <!--        <sr-link linkColor=\"gray\" linkSize=\"small\">-->\n        <!--          {{isDesktop ? 'Terms of Service' : 'Terms'}}-->\n        <!--        </sr-link>-->\n        <lib-terms-button [buttonText]=\"buttonText\"></lib-terms-button>\n        <sr-link\n          linkColor=\"gray\"\n          linkSize=\"small\"\n          (click)=\"getHelpCenter($event)\"\n          >{{ getHelpText }}</sr-link\n        >\n      </sr-buttons-group>\n    </div>\n    <div class=\"col m-4 l-2\">\n      <sr-buttons-group buttonsPosition=\"center\">\n        <sr-menu\n          menuButtonType=\"text\"\n          xPosition=\"after\"\n          yPosition=\"above\"\n          [buttonText]=\"uppercase(activeLanguage)\"\n          iconName=\"language\"\n          customMenuClass=\"languages footer-menu\"\n        >\n          <sr-menu-body>\n            <sr-menu-item\n              *ngFor=\"let language of languages$ | async\"\n              [hasCheckMark]=\"true\"\n              (click)=\"handleChangeLanguage(language)\"\n              [class.active]=\"language === activeLanguage\"\n              itemsPosition=\"between\"\n            >\n              <sr-text>{{ uppercase(language) }}</sr-text>\n            </sr-menu-item>\n          </sr-menu-body>\n        </sr-menu>\n      </sr-buttons-group>\n    </div>\n  </div>\n</sr-footer>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () {
            return [
                { type: LinkRedirectHelper },
                { type: ContactsHelper },
                { type: LanguagesGQL },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['appService',] }] }
            ];
        };
        return FooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TermsButtonComponent = /** @class */ (function () {
        function TermsButtonComponent(linkRedirect, document, file, fileOpener, platformHelper) {
            this.linkRedirect = linkRedirect;
            this.document = document;
            this.file = file;
            this.fileOpener = fileOpener;
            this.platformHelper = platformHelper;
            this.termsOfService = routePaths.TERMS_OF_SERVICE;
        }
        /**
         * @return {?}
         */
        TermsButtonComponent.prototype.openTermsOfService = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var filePath = this.file.applicationDirectory + 'www/assets/docs';
                /** @type {?} */
                var termsOfServiceFileName = '2019_AGB_SORBA_EDV_AG.pdf';
                /** @type {?} */
                var fileType = 'application/pdf';
                if (this.platformHelper.isIOS()) {
                    this.document.viewDocument(filePath + "/" + termsOfServiceFileName, fileType, {});
                }
                else if (this.platformHelper.isAndroid()) {
                    /** @type {?} */
                    var fakeName = Date.now();
                    this.file
                        .copyFile(filePath, termsOfServiceFileName, this.file.dataDirectory, fakeName + ".pdf")
                        .then(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                        _this.fileOpener
                            .open(result.nativeURL, fileType)
                            .catch(( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) { return console.log(e); }));
                    }));
                }
            };
        TermsButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-terms-button',
                        template: "<sr-button\n  *ngIf=\"!platformHelper.isDesktop()\"\n  buttonType=\"text\"\n  (clickHandler)=\"openTermsOfService()\"\n  >{{ buttonText }}</sr-button\n>\n<sr-link\n  *ngIf=\"platformHelper.isDesktop()\"\n  (click)=\"linkRedirect.redirect($event, termsOfService)\"\n  linkColor=\"gray\"\n  linkSize=\"small\"\n>\n  {{ buttonText }}\n</sr-link>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TermsButtonComponent.ctorParameters = function () {
            return [
                { type: LinkRedirectHelper },
                { type: ngx$2.DocumentViewer },
                { type: ngx$3.File },
                { type: ngx$4.FileOpener },
                { type: PlatformHelper }
            ];
        };
        TermsButtonComponent.propDecorators = {
            buttonText: [{ type: i0.Input }]
        };
        return TermsButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScrollerComponent = /** @class */ (function () {
        function ScrollerComponent() {
            this.grouping = true;
            this.fetchMore = new i0.EventEmitter();
            this.selectContact = new i0.EventEmitter();
            this.loading = false;
            this.windowWidth = window.innerWidth;
            this.itemSize = 50;
            this.subject = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        ScrollerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.getViewScroll();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.itemSize =
                        _this.contactItem &&
                            _this.contactItem.nativeElement &&
                            _this.contactItem.nativeElement.offsetHeight;
                }));
            };
        /**
         * @return {?}
         */
        ScrollerComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.loading = false;
                if (this.scrollHeight) {
                    this.setHeightViewScroll(this.scrollHeight + "px");
                }
            };
        /**
         * @return {?}
         */
        ScrollerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subject.next();
                this.subject.complete();
            };
        /**
         * @param {?} height
         * @return {?}
         */
        ScrollerComponent.prototype.setHeightViewScroll = /**
         * @param {?} height
         * @return {?}
         */
            function (height) {
                if (this.viewPort &&
                    this.viewPort.elementRef &&
                    this.viewPort.elementRef.nativeElement) {
                    /** @type {?} */
                    var nativeElement = this.viewPort.elementRef.nativeElement;
                    nativeElement.style.height = height;
                    this.viewPort.checkViewportSize();
                }
            };
        /**
         * @param {?} record
         * @param {?} recordIndex
         * @param {?} records
         * @return {?}
         */
        ScrollerComponent.prototype.groupContacts = /**
         * @param {?} record
         * @param {?} recordIndex
         * @param {?} records
         * @return {?}
         */
            function (record, recordIndex, records) {
                if (recordIndex === 0) {
                    return this.getFirstChar(record.text);
                }
                if (!isNaN(recordIndex)) {
                    /** @type {?} */
                    var prev = this.getFirstChar(records[recordIndex - 1].text);
                    /** @type {?} */
                    var current = this.getFirstChar(records[recordIndex].text);
                    return prev !== current ? current : null;
                }
            };
        /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        ScrollerComponent.prototype.trackByFn = /**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
            function (index, item) {
                return item.id || index;
            };
        /**
         * @param {?} contact
         * @return {?}
         */
        ScrollerComponent.prototype.onSelectContactItem = /**
         * @param {?} contact
         * @return {?}
         */
            function (contact) {
                this.selectContact.emit(contact);
            };
        /**
         * @private
         * @param {?} text
         * @return {?}
         */
        ScrollerComponent.prototype.getFirstChar = /**
         * @private
         * @param {?} text
         * @return {?}
         */
            function (text) {
                return text
                    .trim()
                    .charAt(0)
                    .toUpperCase();
            };
        /**
         * @private
         * @return {?}
         */
        ScrollerComponent.prototype.getViewScroll = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.viewPort && this.totalCountContacts) {
                    this.viewPort.scrolledIndexChange
                        .pipe(operators.auditTime(300), operators.filter(( /**
                 * @return {?}
                 */function () { return _this.loading === false; })), operators.takeUntil(this.subject))
                        .subscribe(( /**
                 * @param {?} index
                 * @return {?}
                 */function (index) {
                        if (_this.contacts.length < _this.totalCountContacts) {
                            _this.nextBatch();
                        }
                        if (_this.contacts[index].text) {
                            _this.sticker = _this.contacts[index].text[0];
                        }
                    }));
                }
            };
        /**
         * @private
         * @return {?}
         */
        ScrollerComponent.prototype.nextBatch = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var end = this.viewPort.getRenderedRange().end;
                /** @type {?} */
                var total = this.viewPort.getDataLength();
                if (total === end) {
                    this.fetchMore.emit();
                    this.loading = true;
                }
            };
        ScrollerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-scroller',
                        template: "<div class=\"scroller-wrapper\">\n  <p class=\"sticker\" *ngIf=\"grouping\">{{ sticker }}</p>\n\n  <cdk-virtual-scroll-viewport\n    class=\"scroller\"\n    #viewPort\n    [itemSize]=\"itemSize\"\n    [minBufferPx]=\"itemSize\"\n    [maxBufferPx]=\"itemSize\"\n  >\n    <div class=\"contacts-list-container\">\n      <ng-container\n        *cdkVirtualFor=\"let item of contacts; let i = index; trackBy: trackByFn\"\n      >\n        <div class=\"contacts-group\">\n          <div\n            class=\"group-title-wrapper\"\n            *ngIf=\"grouping && groupContacts(item, i, contacts) as char\"\n          >\n            <div class=\"group-title\">\n              {{ char }}\n            </div>\n          </div>\n          <div class=\"scroller-parent\" #contactItem>\n            <sr-section-list-item\n              [data]=\"item\"\n              [windowWidth]=\"windowWidth\"\n              [hasActions]=\"true\"\n              [activeItemId]=\"activeItemId\"\n              (click)=\"onSelectContactItem(item)\"\n            >\n            </sr-section-list-item>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n      <div class=\"loader\">\n        <ion-spinner></ion-spinner>\n      </div>\n    </ng-container>\n  </cdk-virtual-scroll-viewport>\n</div>\n",
                        styles: [".loader{height:50px}.scroller-parent sr-contact-item,.scroller-parent sr-section-list-item{margin:0}.scroller-wrapper{position:relative}"]
                    }] }
        ];
        /** @nocollapse */
        ScrollerComponent.ctorParameters = function () { return []; };
        ScrollerComponent.propDecorators = {
            viewPort: [{ type: i0.ViewChild, args: ['viewPort',] }],
            contactItem: [{ type: i0.ViewChild, args: ['contactItem',] }],
            grouping: [{ type: i0.Input }],
            contacts: [{ type: i0.Input }],
            scrollHeight: [{ type: i0.Input }],
            totalCountContacts: [{ type: i0.Input }],
            activeItemId: [{ type: i0.Input }],
            fetchMore: [{ type: i0.Output }],
            selectContact: [{ type: i0.Output }]
        };
        return ScrollerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StringLimitPipe = /** @class */ (function () {
        function StringLimitPipe() {
        }
        /**
         * @param {?} value
         * @param {?=} limit
         * @param {?=} show
         * @return {?}
         */
        StringLimitPipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} limit
         * @param {?=} show
         * @return {?}
         */
            function (value, limit, show) {
                return show && value && value.length && value.length > limit
                    ? value.substr(0, limit) + " ..."
                    : value;
            };
        StringLimitPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'stringLimit'
                    },] }
        ];
        return StringLimitPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            sorbaUiComponents.SorbaUiComponentsModule,
                            i2.IonicModule,
                            common.CommonModule,
                            scrolling.ScrollingModule,
                            forms.ReactiveFormsModule,
                            core.AgmCoreModule.forRoot({
                                apiKey: 'AIzaSyBfnFP4_clqP63H0yaEUIEc84FhGK8y1Ng'
                            })
                        ],
                        exports: [
                            sorbaUiComponents.SorbaUiComponentsModule,
                            i2.IonicModule,
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            // components
                            HeaderComponent,
                            SearchContactsComponent,
                            SelectedMenuComponent,
                            ContactDetailComponent,
                            ContactActionsComponent,
                            FooterComponent,
                            TermsButtonComponent,
                            ScrollerComponent,
                            // pipes
                            StringLimitPipe
                        ],
                        declarations: [
                            HeaderComponent,
                            SearchContactsComponent,
                            SelectedMenuComponent,
                            ContactDetailComponent,
                            ContactActionsComponent,
                            FooterComponent,
                            TermsButtonComponent,
                            ScrollerComponent,
                            // pipes
                            StringLimitPipe
                        ],
                        providers: [ContactsHelper, KeyboardHelper]
                    },] }
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RootPage = /** @class */ (function () {
        function RootPage() {
        }
        RootPage.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-root-contact',
                        template: "\n    <lib-header></lib-header>\n    <sr-content>\n      <sr-container noPadding=\"horizontal-top\">\n        <router-outlet></router-outlet>\n      </sr-container>\n\n      <lib-footer></lib-footer>\n    </sr-content>\n  "
                    }] }
        ];
        return RootPage;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: '',
            component: RootPage,
            children: [
                {
                    path: 'contact',
                    component: ContactsComponent
                },
                {
                    path: ':id',
                    component: ContactDetailComponent
                },
                {
                    path: '**',
                    redirectTo: 'contact'
                }
            ]
        },
        {
            path: '**',
            redirectTo: ''
        }
    ];
    var ContactsModule = /** @class */ (function () {
        function ContactsModule() {
        }
        ContactsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ContactsComponent, RootPage],
                        exports: [ContactsComponent, RootPage],
                        imports: [SharedModule, router.RouterModule.forChild(routes)]
                    },] }
        ];
        return ContactsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ContactsModule = ContactsModule;
    exports.ɵk = ContactActionsComponent;
    exports.ɵj = ContactDetailComponent;
    exports.ɵl = FooterComponent;
    exports.ɵg = HeaderComponent;
    exports.ɵn = ScrollerComponent;
    exports.ɵh = SearchContactsComponent;
    exports.ɵi = SelectedMenuComponent;
    exports.ɵm = TermsButtonComponent;
    exports.ɵo = StringLimitPipe;
    exports.ɵb = ContactsHelper;
    exports.ɵd = KeyboardHelper;
    exports.ɵf = SharedModule;
    exports.ɵa = ContactsComponent;
    exports.ɵc = ContactAppsGQL;
    exports.ɵe = RootPage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=contacts.umd.js.map