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
import SettingsIcon from '@material-ui/icons/Settings';
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

//PURCHASE PAGES
import Good_reciept from 'components/pages/purchase-pages/Goods-receipt';
import Purchase_order from 'components/pages/purchase-pages/Purchase-order';
import Journal_voucher from 'components/pages/purchase-pages/Purchase-return';
import Purchase_invoice from 'components/pages/purchase-pages/Purchase-invoice';
import Purchase_return from 'components/pages/purchase-pages/Purchase-return';

//SALE PAGES
import Sales_oredr from 'components/pages/salepages/Sales-order';
import Goods_Dispatch from 'components/pages/salepages/Goods-Dispatch';
import Sales_return from 'components/pages/salepages/Sales-return';
import Sales_invoice from 'components/pages/salepages/Sales-invoice';
import Report_sale from 'components/pages/salepages/Report-sale';
//ACCOUNTPAGES
import Receipt_voucher from 'components/pages/Accountpages/Receipt-voucher';
import Report_account from 'components/pages/Accountpages/Report-account';
import Service_voucher from 'components/pages/Accountpages/Service-voucher';
import Payment_voucher from 'components/pages/Accountpages/Payment-voucher';
//import Journal_voucher from 'components/pages/Accountpages/Journal-voucher';
import Multiledger_report from 'components/pages/Accountpages/Multiledger-report';
import Ledger_report from 'components/pages/Accountpages/Ledger-report';
import Adjustment from 'components/pages/Accountpages/Adjustment';
import Debtorspending_bill from 'components/pages/Accountpages/Debtorspending-bill';
import Creditorspending_bill from 'components/pages/Accountpages/Creditorspending-bill';
import Bankreconciliation from 'components/pages/Accountpages/Bankreconciliation';
import ClearCheckentry_list from 'components/pages/Accountpages/ClearCheckentry-list';
import Credit_note from 'components/pages/Accountpages/Credit-note';
import Debit_note from 'components/pages/Accountpages/Debit-note';

//INVENTORY PAGES
import Opening_stock from 'components/pages/Enventorypages/Opening-stock';
import StockTransfer from 'components/pages/Enventorypages/StockTransfer';
import StockTransferRequest from 'components/pages/Enventorypages/StockTransferRequest';
import StoreReceipt from 'components/pages/Enventorypages/StoreReceipt';
import Report_enventory from 'components/pages/Enventorypages/Report-enventory';
import Stock_summary from 'components/pages/Enventorypages/Stock-summary';
import MaterialRequistion from 'components/pages/Enventorypages/MaterialRequistion';
import Purchase_indent from 'components/pages/Enventorypages/Purchase-indent';

//Productionpages
import Cashew_production from 'components/pages/Productionpages/Cashew-production';
import Report_production from 'components/pages/Productionpages/Report-production';
import Bom from 'components/pages/Productionpages/Bom';
import Production_voucher from 'components/pages/Productionpages/Production-voucher';
//reportpages
import Globalitemwisereport from 'components/pages/Reportpages/Globalitemwisereport';
import Globalreportfor_statem from 'components/pages/Reportpages/Globalreportfor-statem';
import Salerelated_reports from 'components/pages/Reportpages/Salerelated-reports';
//datatransferpages
import Dtaa_transfer from 'components/pages/DataTransferpage/data-transfer';
import Tallyexport_data from 'components/pages/ExportDataForTally/Tallyexport-data';

//GST PORTAL
import Gst_verification from 'components/pages/GstPortalpage/Gst-verification';

//sadmin master
import Stock_reposting from 'components/pages/SadMinMaster/Stock-reposting';
import Field_reposting from 'components/pages/SadMinMaster/Field-reposting';
import Formate_parameter from 'components/pages/SadMinMaster/Format-parameter';
import Ledger_reposting from 'components/pages/SadMinMaster/Ledger-reposting';
import Miscellaneous_master from 'components/pages/SadMinMaster/Miscellaneous-master';
import Sms_master from 'components/pages/SadMinMaster/Sms-master';
import User_master from 'components/pages/SadMinMaster/User-master';
import Config_parameter from 'components/pages/SadMinMaster/Config-parameter';



var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },

  
  // {
  //   collapse: true,
  //   name: "DASHBOARD",
  //   rtlName: "صفحات1",
  //   icon: Image,
  //   state: "das_pageCollapse",
  //   views: [
  //     {
  //       path: "/dashboard60",
  //       name: "NSPODASH",
  //       rtlName: "عالتسعير",
  //       mini: "N",
  //       rtlMini: "ع",
  //       component: Dashboard,
  //       layout: "/admin"
  //     }
  //   ]
  // },

  {
    collapse: true,
    name: "COMPANY MASTER",
    rtlName: "صفحات",
    icon: Apps,
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
    icon: Apps,
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
    icon: Apps,
    state: "account_pageCollapse",
    views: [
      {
        path: "/ReceiptVoucher",
        name: "RECEIPT VOUCHER",
        rtlName: "عالتسعير",
        mini: "RV",
        rtlMini: "ع",
        component: Receipt_voucher,
        layout: "/admin"
      },
      {
        path: "/ReportAccount",
        name: "REPORT - ACCOUNT",
        rtlName: "صودعم رتل",
        mini: "RA",
        rtlMini: "صو",
        component: Report_account,
        layout: "/admin"
      },
      {
        path: "/ServiceVoucher",
        name: "SERVICE VOUCHER",
        rtlName: "تيالجدول الزمني",
        mini: "SV",
        rtlMini: "تي",
        component: Service_voucher,
        layout: "/admin"
      },
      {
        path: "/PaymentVoucher",
        name: "PAYMENT VOUCHER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "PV",
        rtlMini: "هعذا",
        component: Payment_voucher,
        layout: "/admin"
      },
      {
        path: "/JournalVoucher",
        name: "JOURNAL VOUCHER",
        rtlName: "تسجيل",
        mini: "JV",
        rtlMini: "صع",
        component: Journal_voucher,
        layout: "/admin"
      },
      {
        path: "/MultiledgerReport",
        name: "MULTI LEDGER REPORT",
        rtlName: "اقفل الشاشة",
        mini: "MLR",
        rtlMini: "هذاع",
        component: Multiledger_report,
        layout: "/admin"
      },
      {
        path: "/LedgerReport",
        name: "LEDGER REPORT",
        rtlName: "ملف تعريفي للمستخدم",
        mini: "LR",
        rtlMini: "شع",
        component: Ledger_report,
        layout: "/admin"
      },
      {
        path: "/Adjustment",
        name: "ADJUSTMENT",
        rtlName: "صفحة الخطأ",
        mini: "A",
        rtlMini: "البريد",
        component: Adjustment,
        layout: "/admin"
      },
      {
        path: "/DebtorsPendingBill",
        name: "DEBTORS PENDING BILL",
        rtlName: "صفحة الخطأ",
        mini: "DPB",
        rtlMini: "البريد",
        component: Debtorspending_bill,
        layout: "/admin"
      },
      {
        path: "/CreditorsPendingBill",
        name: "CREDITORS PENDING BILL",
        rtlName: "صفحة الخطأ",
        mini: "CPB",
        rtlMini: "البريد",
        component: Creditorspending_bill,
        layout: "/admin"
      },
      {
        path: "/BankReconciliation",
        name: "BANK RECONCILIATION",
        rtlName: "صفحة الخطأ",
        mini: "BR",
        rtlMini: "البريد",
        component: Bankreconciliation,
        layout: "/admin"
      },
      {
        path: "/ClearCheckEntryList",
        name: "CLEAR CHECK ENTRY LIST",
        rtlName: "صفحة الخطأ",
        mini: "CCEL",
        rtlMini: "البريد",
        component: ClearCheckentry_list,
        layout: "/admin"
      },
      {
        path: "/DebitNote",
        name: "DEBIT NOTE",
        rtlName: "صفحة الخطأ",
        mini: "DN",
        rtlMini: "البريد",
        component: Debit_note,
        layout: "/admin"
      },
      {
        path: "/Credit_note",
        name: "CREDIT NOTE",
        rtlName: "صفحة الخطأ",
        mini: "CN",
        rtlMini: "البريد",
        component: Credit_note,
        layout: "/admin"
      },
    ]
  },
  {
    collapse: true,
    name: "PURCHASE",
    rtlName: "صفحات1",
    icon: Apps,
    state: "purchase_pageCollapse",
    views: [
      {
        path: "/PurchaseOrder",
        name: "PURCHASE ORDER",
        rtlName: "عالتسعير",
        mini: "PO",
        rtlMini: "ع",
        component: Purchase_order,
        layout: "/admin"
      },
      {
        path: "/GoodReciept",
        name: "GOODS RECEIPT",
        rtlName: "صودعم رتل",
        mini: "GR",
        rtlMini: "صو",
        component: Good_reciept,
        layout: "/admin"
      },
      {
        path: "/PurchaseInvoice",
        name: "PURCHASE INVOICE",
        rtlName: "تيالجدول الزمني",
        mini: "PI",
        rtlMini: "تي",
        component: Purchase_invoice,
        layout: "/admin"
      },
      {
        path: "/PurchaseReturn",
        name: "PURCHASE RETURN",
        rtlName: "هعذاتسجيل الدخول",
        mini: "PR ",
        rtlMini: "هعذا",
        component: Purchase_return,
        layout: "/admin"
      },
      {
        path: "/JournalVoucher",
        name: "JOURNAL VOUCHER",
        rtlName: "تسجيل",
        mini: "JV",
        rtlMini: "صع",
        component: Journal_voucher,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "SALE",
    rtlName: "صفحات1",
    icon: Apps,
    state: "Sale_pageCollapse",
    views: [
      {
        path: "/SalesOrder",
        name: "SALES ORDER",
        rtlName: "عالتسعير",
        mini: "SO",
        rtlMini: "ع",
        component: Sales_oredr,
        layout: "/admin"
      },
      {
        path: "/GoodsDispatch",
        name: "GOODS DISPATCH",
        rtlName: "صودعم رتل",
        mini: "GD",
        rtlMini: "صو",
        component: Goods_Dispatch,
        layout: "/admin"
      },
      {
        path: "/SalesInvoice",
        name: "SALES INVOICE",
        rtlName: "تيالجدول الزمني",
        mini: "SI",
        rtlMini: "تي",
        component: Sales_invoice,
        layout: "/admin"
      },
      {
        path: "/SalesReturn",
        name: "SALES RETURN",
        rtlName: "هعذاتسجيل الدخول",
        mini: "SR",
        rtlMini: "هعذا",
        component: Sales_return,
        layout: "/admin"
      },
      {
        path: "/ReportSale",
        name: "REPORT - SALE",
        rtlName: "تسجيل",
        mini: "RS",
        rtlMini: "صع",
        component: Report_sale,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "INVENTORY",
    rtlName: "صفحات1",
    icon: Apps,
    state: "inventory_pageCollapse",
    views: [
      {
        path: "/OpeningStock",
        name: "OPENING STOCK",
        rtlName: "عالتسعير",
        mini: "OS",
        rtlMini: "ع",
        component: Opening_stock,
        layout: "/admin"
      },
      {
        path: "/StockTransfer",
        name: "STOCK TRANSFER",
        rtlName: "صودعم رتل",
        mini: "ST",
        rtlMini: "صو",
        component: StockTransfer,
        layout: "/admin"
      },
      {
        path: "/StockTransferRequest",
        name: "STOCK TRANSFER REQUEST",
        rtlName: "تيالجدول الزمني",
        mini: "STR",
        rtlMini: "تي",
        component: Globalitemwisereport,
        layout: "/admin"
      },
      {
        path: "/StoreReceipt",
        name: "STORE RECEIPT",
        rtlName: "هعذاتسجيل الدخول",
        mini: "SR",
        rtlMini: "هعذا",
        component: StoreReceipt,
        layout: "/admin"
      },
      {
        path: "/ReportEnventory",
        name: "REPORT - INVENTORY",
        rtlName: "تسجيل",
        mini: "RI",
        rtlMini: "صع",
        component: Report_enventory,
        layout: "/admin"
      },
      {
        path: "/StockSummary",
        name: "STOCK SUMMARY",
        rtlName: "تسجيل",
        mini: "SS",
        rtlMini: "صع",
        component: Stock_summary,
        layout: "/admin"
      },
      {
        path: "/MaterialRequistion",
        name: "MATERIAL REQUISTION",
        rtlName: "تسجيل",
        mini: "MR",
        rtlMini: "صع",
        component: MaterialRequistion,
        layout: "/admin"
      },
      {
        path: "/PurchaseIndent",
        name: "PURCHASE INDENT",
        rtlName: "تسجيل",
        mini: "PI",
        rtlMini: "صع",
        component: Purchase_indent,
        layout: "/admin"
      },

    ]
  } ,

  {
    collapse: true,
    name: "PRODUCTION",
    rtlName: "صفحات1",
    icon: Apps,
    state: "production_pageCollapse",
    views: [
      {
        path: "/CashewProduction",
        name: "CASHEW PRODUCTION",
        rtlName: "عالتسعير",
        mini: "CP",
        rtlMini: "ع",
        component: Cashew_production,
        layout: "/admin"
      },
      {
        path: "/ReportProduction",
        name: "REPORT - PRODUCTION",
        rtlName: "صودعم رتل",
        mini: "RP",
        rtlMini: "صو",
        component: Report_production,
        layout: "/admin"
      },
      {
        path: "/Bom",
        name: "BOM",
        rtlName: "تيالجدول الزمني",
        mini: "B",
        rtlMini: "تي",
        component: Bom,
        layout: "/admin"
      },
      {
        path: "/ProductionVoucher",
        name: "PRODUCTION VOUCHER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "PV",
        rtlMini: "هعذا",
        component: Production_voucher,
        layout: "/admin"
      }
    ]
  }

  ,

  {
    collapse: true,
    name: "REPORT",
    rtlName: "صفحات1",
    icon: Apps,
    state: "report_pageCollapse",
    views: [
      {
        path: "/GlobalItemWiseReport",
        name: "GLOBAL ITEM WISE REPORT",
        rtlName: "عالتسعير",
        mini: "GIWR",
        rtlMini: "ع",
        componen:Globalitemwisereport,
        layout: "/admin"
      },
      {
        path: "/GlobalReportForStatem",
        name: "GLOBAL REPORT FOR STATEMENT",
        rtlName: "صودعم رتل",
        mini: "GRFS",
        rtlMini: "صو",
        component: Globalreportfor_statem,
        layout: "/admin"
      },
      {
        path: "/SalerelatedReports",
        name: "SALE RELATED REPORTS",
        rtlName: "تيالجدول الزمني",
        mini: "SRR",
        rtlMini: "تي",
        component: Salerelated_reports,
        layout: "/admin"
      }
    ]
  },

   
  {
    collapse: true,
    name: "DATA TRANSFER ",
    rtlName: "صفحات1",
    icon: Apps,
    state: "data_tr_pageCollapse",
    views: [
      {
        path: "/DtaaTransfer",
        name: "DATA TRANSFER FRM PRE YR TO NXT YR",
        rtlName: "عالتسعير",
        mini: "DT",
        rtlMini: "ع",
        component: Dtaa_transfer,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "EXPORT DATA FOR TALLY",
    rtlName: "صفحات1",
    icon: Apps,
    state: "ex_d_tr_pageCollapse",
    views: [
      {
        path: "/TallyexportData",
        name: "TALLY EXPORT DATA",
        rtlName: "عالتسعير",
        mini: "TED",
        rtlMini: "ع",
        component: Tallyexport_data,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "SADMIN MASTER",
    rtlName: "صفحات1",
    icon: Apps,
    state: "s_a_pageCollapse",
    views: [
      {
        path: "/StockReposting",
        name: "STOCK REPOSTING",
        rtlName: "عالتسعير",
        mini: "SR",
        rtlMini: "ع",
        component: Stock_reposting,
        layout: "/admin"
      },
      {
        path: "/FieldReposting",
        name: "FIELD REPOSTING",
        rtlName: "صودعم رتل",
        mini: "FR",
        rtlMini: "صو",
        component: Field_reposting,
        layout: "/admin"
      },
      {
        path: "/LedgerReposting",
        name: "LEDGER REPOSTING",
        rtlName: "تيالجدول الزمني",
        mini: "LR",
        rtlMini: "تي",
        component: Ledger_reposting,
        layout: "/admin"
      },
      {
        path: "/UserMaster",
        name: "USER MASTER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "UM",
        rtlMini: "هعذا",
        component: User_master,
        layout: "/admin"
      },
      {
        path: "/MiscellaneousMaster",
        name: "MISCELLANEOUS MASTER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "MM",
        rtlMini: "هعذا",
        component: Miscellaneous_master,
        layout: "/admin"
      },
      {
        path: "/FormateParameter",
        name: "FORMAT PARAMETER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "FP",
        rtlMini: "هعذا",
        component: Formate_parameter,
        layout: "/admin"
      },
      {
        path: "/ConfigParameter",
        name: "CONFIG PARAMETER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "CP",
        rtlMini: "هعذا",
        component: Config_parameter,
        layout: "/admin"
      },
      {
        path: "/SmsMaster",
        name: "SMS MASTER",
        rtlName: "هعذاتسجيل الدخول",
        mini: "SM",
        rtlMini: "هعذا",
        component: Sms_master,
        layout: "/admin"
      }
    ]
  },
    {
    collapse: true,
    name: "GST PORTAL",
    rtlName: "صفحات1",
    icon: Apps,
    state: "gst_pageCollapse",
    views: [
      {
        path: "/GstVerification",
        name: "GST VERIFICATION",
        rtlName: "عالتسعير",
        mini: "GV",
        rtlMini: "ع",
        component: Gst_verification,
        layout: "/admin"
      }
    ]
  },





 
];
export default dashRoutes;
