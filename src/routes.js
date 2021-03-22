import Buttons from "views/Components/Buttons.js";
import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import ErrorPage from "views/Pages/ErrorPage.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/Pages/PricingPage.js";
import RTLSupport from "views/Pages/RTLSupport.js";
import ReactTables from "views/Tables/ReactTables.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import RegularForms from "views/Forms/RegularForms.js";
import RegularTables from "views/Tables/RegularTables.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/Pages/Timeline.js";
import Typography from "views/Components/Typography.js";
import UserProfile from "views/Pages/UserProfile.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import VectorMap from "views/Maps/VectorMap.js";
import Widgets from "views/Widgets/Widgets.js";
import Wizard from "views/Forms/Wizard.js";
//import Divisionmaster from 'components/Divisionmaster';

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";

//NEW PAGES


import division_master from "components/pages/company-master/division-master";
import Godown_master from "components/pages/company-master/Godown-master";
import Department_master from "components/pages/company-master/Department-master";
import Cost_master from "components/pages/company-master/Cost-master";
import Series_master from 'components/pages/company-master/Series-master';
import Shedule_master from 'components/pages/company-master/Shedule-master';
import Branch_master from 'components/pages/company-master/Branch-master';
import Staff_master from 'components/pages/company-master/Staff-master';
import Gst_master from 'components/pages/company-master/Gst-master';
import Tcondition_master from 'components/pages/company-master/Tcondition-master';

//Master
import Party_master from 'components/pages/master/Party-master';
import New_account from 'components/pages/master/New-account';
import Unit_master from 'components/pages/master/Unit-master';
import Brand_master from 'components/pages/master/Brand-master';
import Maincategory_master from 'components/pages/master/Maincategory-master';
import Subcategory_master from 'components/pages/master/Subcategory-master';
import Producttype_master from 'components/pages/master/Producttype-master';
import Item_master from 'components/pages/master/Item-master';
import partycategory_master from 'components/pages/master/Partycategory-master';


var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },

  
  {
    collapse: true,
    name: "DASHBOARD",
    rtlName: "صفحات1",
    icon: Image,
    state: "das_pageCollapse",
    views: [
      {
        path: "/dashboard60",
        name: "NSPODASH",
        rtlName: "عالتسعير",
        mini: "N",
        rtlMini: "ع",
        component: Dashboard,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "COMPANY MASTER",
    rtlName: "صفحات",
    icon: Image,
    state: "company_master_Collapse",
    views: [
      {
        path: "/divisionMaster",
        name: "DIVISION MASTER",
        rtlName: "عالتسعير",
        mini: "DM",
        rtlMini: "ع",
        component:division_master,
        layout: "/admin"
      },
      {
        path: "/GodownMaster",
        name: "  Godown Master",
        rtlName: "صودعم رتل",
        mini: "GM",
        rtlMini: "صو",
        component: Godown_master,
        layout: "/admin"
      },
      {
        path: "/DepartmentMaster",
        name: "DEPARTMENT MASTER",
        rtlName: "تيالجدول الزمني",
        mini: "DM",
        rtlMini: "تي",
        component: Department_master,
        layout: "/admin"
      },
      {
        path: "/CostCenterMaster",
        name: "COST CENTER MASTER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "CCM",
        rtlMini: "هعذا",
        component: Cost_master,
        layout: "/admin"
      },
      {
        path: "/SeriesMaster",
        name: "SERIES MASTER",
        rtlName: "تسجيل",
        mini: "SM",
        rtlMini: "صع",
        component: Series_master,
        layout: "/admin"
      },
      {
        path: "/ScheduleMaster",
        name: "SCHEDULE MASTER",
        rtlName: "اقفل الشاشة",
        mini: "SM",
        rtlMini: "هذاع",
        component: Shedule_master,
        layout: "/admin"
      },
      {
        path: "/BranchMaster",
        name: "BRANCH MASTER",
        rtlName: "ملف تعريفي للمستخدم",
        mini: "BM",
        rtlMini: "شع",
        component: Branch_master,
        layout: "/admin"
      },
      {
        path: "/StaffMaster",
        name: "STAFF MASTER",
        rtlName: "صفحة الخطأ",
        mini: "SM",
        rtlMini: "البريد",
        component: Staff_master,
        layout: "/admin"
      },
      {
        path: "/GstMaster",
        name: "GST MASTER",
        rtlName: "صفحة الخطأ",
        mini: "GM",
        rtlMini: "البريد",
        component: Gst_master,
        layout: "/admin"
      },
      {
        path: "/Terms&ConditionMaster",
        name: "TERMS & CONDITION MASTER",
        rtlName: "صفحة الخطأ",
        mini: "TCM",
        rtlMini: "البريد",
        component: Tcondition_master,
        layout: "/admin"
      },
      {
        path: "/StaffMaster",
        name: "STAFF MASTER",
        rtlName: "صفحة الخطأ",
        mini: "SM",
        rtlMini: "البريد",
        component: Staff_master,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "MASTER",
    rtlName: "صفحات1",
    icon: Image,
    state: "master_pageCollapse",
    views: [
      {
        path: "/PartyMaster",
        name: "PARTY MASTER",
        rtlName: "عالتسعير",
        mini: "PM",
        rtlMini: "ع",
        component: Party_master,
        layout: "/admin"
      },
      {
        path: "/NewAccount",
        name: "NEW ACCOUNT",
        rtlName: "صودعم رتل",
        mini: "NA",
        rtlMini: "صو",
        component: New_account,
        layout: "/admin"
      },
      {
        path: "/UnitMaster",
        name: "UNIT MASTER",
        rtlName: "تيالجدول الزمني",
        mini: "UM",
        rtlMini: "تي",
        component: Unit_master,
        layout: "/admin"
      },
      {
        path: "/BrandMaster",
        name: "BRAND MASTER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "BM",
        rtlMini: "هعذا",
        component: Brand_master,
        layout: "/admin"
      },
      {
        path: "/MainCategoryMaster",
        name: "MAIN CATEGORY MASTER",
        rtlName: "تسجيل",
        mini: "MCM",
        rtlMini: "صع",
        component: Maincategory_master,
        layout: "/admin"
      },
      {
        path: "/SubCategoryMaster",
        name: "SUB CATEGORY MASTER",
        rtlName: "اقفل الشاشة",
        mini: "SCM",
        rtlMini: "هذاع",
        component: Subcategory_master,
        layout: "/admin"
      },
      {
        path: "/ProductTypeMaster",
        name: "PRODUCT TYPE MASTER",
        rtlName: "ملف تعريفي للمستخدم",
        mini: "PTM",
        rtlMini: "شع",
        component: Producttype_master,
        layout: "/admin"
      },
      {
        path: "/ItemMaster",
        name: "ITEM MASTER",
        rtlName: "صفحة الخطأ",
        mini: "TM",
        rtlMini: "البريد",
        component: Item_master,
        layout: "/admin"
      },
      {
        path: "/PartycategoryMaster",
        name: "PARTY CATEGORY",
        rtlName: "صفحة الخطأ",
        mini: "PC",
        rtlMini: "البريد",
        component: partycategory_master,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "Account",
    rtlName: "صفحات1",
    icon: Image,
    state: "account_pageCollapse",
    views: [
      {
        path: "/dashboard21",
        name: "RECEIPT VOUCHER",
        rtlName: "عالتسعير",
        mini: "RV",
        rtlMini: "ع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard22",
        name: "REPORT - ACCOUNT",
        rtlName: "صودعم رتل",
        mini: "RA",
        rtlMini: "صو",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard23",
        name: "SERVICE VOUCHER",
        rtlName: "تيالجدول الزمني",
        mini: "SV",
        rtlMini: "تي",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard24",
        name: "PAYMENT VOUCHER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "PV",
        rtlMini: "هعذا",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard25",
        name: "JOURNAL VOUCHER",
        rtlName: "تسجيل",
        mini: "JV",
        rtlMini: "صع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard26",
        name: "MULTI LEDGER REPORT",
        rtlName: "اقفل الشاشة",
        mini: "MLR",
        rtlMini: "هذاع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard27",
        name: "LEDGER REPORT",
        rtlName: "ملف تعريفي للمستخدم",
        mini: "LR",
        rtlMini: "شع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard28",
        name: "ADJUSTMENT",
        rtlName: "صفحة الخطأ",
        mini: "A",
        rtlMini: "البريد",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard29",
        name: "DEBTORS PENDING BILL",
        rtlName: "صفحة الخطأ",
        mini: "DPB",
        rtlMini: "البريد",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard30",
        name: "CREDITORS PENDING BILL",
        rtlName: "صفحة الخطأ",
        mini: "CPB",
        rtlMini: "البريد",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard31",
        name: "BANK RECONCILIATION",
        rtlName: "صفحة الخطأ",
        mini: "BR",
        rtlMini: "البريد",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard32",
        name: "CLEAR CHECK ENTRY LIST",
        rtlName: "صفحة الخطأ",
        mini: "CCEL",
        rtlMini: "البريد",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard33",
        name: "DEBIT NOTE",
        rtlName: "صفحة الخطأ",
        mini: "DN",
        rtlMini: "البريد",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard34",
        name: "CREDIT NOTE",
        rtlName: "صفحة الخطأ",
        mini: "CN",
        rtlMini: "البريد",
        component: Dashboard,
        layout: "/admin"
      },
    ]
  },
  {
    collapse: true,
    name: "PURCHASE",
    rtlName: "صفحات1",
    icon: Image,
    state: "purchase_pageCollapse",
    views: [
      {
        path: "/dashboard35",
        name: "PURCHASE ORDER",
        rtlName: "عالتسعير",
        mini: "PO",
        rtlMini: "ع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard36",
        name: "GOODS RECEIPT",
        rtlName: "صودعم رتل",
        mini: "GR",
        rtlMini: "صو",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard37",
        name: "PURCHASE INVOICE",
        rtlName: "تيالجدول الزمني",
        mini: "PI",
        rtlMini: "تي",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard38",
        name: "PURCHASE RETURN",
        rtlName: "هعذاتسجيل الدخول",
        mini: "PR ",
        rtlMini: "هعذا",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard39",
        name: "JOURNAL VOUCHER",
        rtlName: "تسجيل",
        mini: "JV",
        rtlMini: "صع",
        component: Dashboard,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "SALE",
    rtlName: "صفحات1",
    icon: Image,
    state: "Sale_pageCollapse",
    views: [
      {
        path: "/dashboard40",
        name: "SALES ORDER",
        rtlName: "عالتسعير",
        mini: "SO",
        rtlMini: "ع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard41",
        name: "GOODS DISPATCH",
        rtlName: "صودعم رتل",
        mini: "GD",
        rtlMini: "صو",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard42",
        name: "SALES INVOICE",
        rtlName: "تيالجدول الزمني",
        mini: "SI",
        rtlMini: "تي",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard43",
        name: "SALES RETURN",
        rtlName: "هعذاتسجيل الدخول",
        mini: "SR",
        rtlMini: "هعذا",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard44",
        name: "REPORT - SALE",
        rtlName: "تسجيل",
        mini: "RS",
        rtlMini: "صع",
        component: Dashboard,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "INVENTORY",
    rtlName: "صفحات1",
    icon: Image,
    state: "inventory_pageCollapse",
    views: [
      {
        path: "/dashboard45",
        name: "OPENING STOCK",
        rtlName: "عالتسعير",
        mini: "OS",
        rtlMini: "ع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard46",
        name: "STOCK TRANSFER",
        rtlName: "صودعم رتل",
        mini: "ST",
        rtlMini: "صو",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard47",
        name: "STOCK TRANSFER REQUEST",
        rtlName: "تيالجدول الزمني",
        mini: "STR",
        rtlMini: "تي",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard48",
        name: "STORE RECEIPT",
        rtlName: "هعذاتسجيل الدخول",
        mini: "SR",
        rtlMini: "هعذا",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard49",
        name: "REPORT - INVENTORY",
        rtlName: "تسجيل",
        mini: "RI",
        rtlMini: "صع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard50",
        name: "STOCK SUMMARY",
        rtlName: "تسجيل",
        mini: "SS",
        rtlMini: "صع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard51",
        name: "MATERIAL REQUISTION",
        rtlName: "تسجيل",
        mini: "MR",
        rtlMini: "صع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard52",
        name: "PURCHASE INDENT",
        rtlName: "تسجيل",
        mini: "PI",
        rtlMini: "صع",
        component: Dashboard,
        layout: "/admin"
      },

    ]
  } ,

  {
    collapse: true,
    name: "PRODUCTION",
    rtlName: "صفحات1",
    icon: Image,
    state: "production_pageCollapse",
    views: [
      {
        path: "/dashboard53",
        name: "CASHEW PRODUCTION",
        rtlName: "عالتسعير",
        mini: "CP",
        rtlMini: "ع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard54",
        name: "REPORT - PRODUCTION",
        rtlName: "صودعم رتل",
        mini: "RP",
        rtlMini: "صو",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard55",
        name: "BOM",
        rtlName: "تيالجدول الزمني",
        mini: "B",
        rtlMini: "تي",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard56",
        name: "PRODUCTION VOUCHER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "PV",
        rtlMini: "هعذا",
        component: Dashboard,
        layout: "/admin"
      }
    ]
  }

  ,

  {
    collapse: true,
    name: "REPORT",
    rtlName: "صفحات1",
    icon: Image,
    state: "report_pageCollapse",
    views: [
      {
        path: "/dashboard57",
        name: "GLOBAL ITEM WISE REPORT",
        rtlName: "عالتسعير",
        mini: "GIWR",
        rtlMini: "ع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard58",
        name: "GLOBAL REPORT FOR STATEMENT",
        rtlName: "صودعم رتل",
        mini: "GRFS",
        rtlMini: "صو",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard59",
        name: "SALE RELATED REPORTS",
        rtlName: "تيالجدول الزمني",
        mini: "SRR",
        rtlMini: "تي",
        component: Dashboard,
        layout: "/admin"
      }
    ]
  },

   
  {
    collapse: true,
    name: "DATA TRANSFER ",
    rtlName: "صفحات1",
    icon: Image,
    state: "data_tr_pageCollapse",
    views: [
      {
        path: "/dashboard61",
        name: "DATA TRANSFER FRM PRE YR TO NXT YR",
        rtlName: "عالتسعير",
        mini: "DT",
        rtlMini: "ع",
        component: Dashboard,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "EXPORT DATA FOR TALLY",
    rtlName: "صفحات1",
    icon: Image,
    state: "ex_d_tr_pageCollapse",
    views: [
      {
        path: "/dashboard62",
        name: "TALLY EXPORT DATA",
        rtlName: "عالتسعير",
        mini: "TED",
        rtlMini: "ع",
        component: Dashboard,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "SADMIN MASTER",
    rtlName: "صفحات1",
    icon: Image,
    state: "s_a_pageCollapse",
    views: [
      {
        path: "/dashboard63",
        name: "STOCK REPOSTING",
        rtlName: "عالتسعير",
        mini: "SR",
        rtlMini: "ع",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard64",
        name: "FIELD REPOSTING",
        rtlName: "صودعم رتل",
        mini: "FR",
        rtlMini: "صو",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard65",
        name: "LEDGER REPOSTING",
        rtlName: "تيالجدول الزمني",
        mini: "LR",
        rtlMini: "تي",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard66",
        name: "USER MASTER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "UM",
        rtlMini: "هعذا",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard67",
        name: "MISCELLANEOUS MASTER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "MM",
        rtlMini: "هعذا",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard68",
        name: "FORMAT PARAMETER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "FP",
        rtlMini: "هعذا",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard69",
        name: "CONFIG PARAMETER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "CP",
        rtlMini: "هعذا",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/dashboard70",
        name: "SMS MASTER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "SM",
        rtlMini: "هعذا",
        component: Dashboard,
        layout: "/admin"
      }
    ]
  },
    {
    collapse: true,
    name: "GST PORTAL",
    rtlName: "صفحات1",
    icon: Image,
    state: "gst_pageCollapse",
    views: [
      {
        path: "/dashboard70",
        name: "GST VERIFICATION",
        rtlName: "عالتسعير",
        mini: "GV",
        rtlMini: "ع",
        component: Dashboard,
        layout: "/admin"
      }
    ]
  },





 
];
export default dashRoutes;
