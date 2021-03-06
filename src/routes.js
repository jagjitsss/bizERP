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
import Po_against_indent from 'components/pages/purchase-pages/po_against_indent';
import All_pending_orders from 'components/pages/purchase-pages/all_pending_orders';
import New_entry from 'components/pages/purchase-pages/new_entry';


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

//add new sreies
import Add_newSeries from 'components/pages/company-master/Add-newSeries';



var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "???????? ??????????????",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },

  
  // {
  //   collapse: true,
  //   name: "DASHBOARD",
  //   rtlName: "??????????1",
  //   icon: Image,
  //   state: "das_pageCollapse",
  //   views: [
  //     {
  //       path: "/dashboard60",
  //       name: "NSPODASH",
  //       rtlName: "????????????????",
  //       mini: "N",
  //       rtlMini: "??",
  //       component: Dashboard,
  //       layout: "/admin"
  //     }
  //   ]
  // },

  {
    collapse: true,
    name: "COMPANY MASTER",
    rtlName: "??????????",
    icon: Apps,
    state: "company_master_Collapse",
    views: [
      {
        path: "/divisionMaster",
        name: "DIVISION MASTER",
        rtlName: "????????????????",
        mini: "DM",
        rtlMini: "??",
        component:division_master,
        layout: "/admin"
      },
      {
        path: "/GodownMaster",
        name: "  Godown Master",
        rtlName: "?????????? ??????",
        mini: "GM",
        rtlMini: "????",
        component: Godown_master,
        layout: "/admin"
      },
      {
        path: "/DepartmentMaster",
        name: "DEPARTMENT MASTER",
        rtlName: "???????????????? ????????????",
        mini: "DM",
        rtlMini: "????",
        component: Department_master,
        layout: "/admin"
      },
      {
        path: "/CostCenterMaster",
        name: "COST CENTER MASTER",
        rtlName: "?????????????????? ????????????",
        mini: "CCM",
        rtlMini: "????????",
        component: Cost_master,
        layout: "/admin"
      },
      {
        path: "/SeriesMaster",
        name: "SERIES MASTER",
        rtlName: "??????????",
        mini: "SM",
        rtlMini: "????",
        component: Series_master,
        layout: "/admin"
      },
      {
        path: "/AddnewUser",
        name: "Add NEW SERIES MASTER",
        rtlName: "??????????",
        mini: "SM",
        rtlMini: "????",
        component: Add_newSeries,
        layout: "/admin"
      },
     
    
      {
        path: "/ScheduleMaster",
        name: "SCHEDULE MASTER",
        rtlName: "???????? ????????????",
        mini: "SM",
        rtlMini: "????????",
        component: Shedule_master,
        layout: "/admin"
      },
      {
        path: "/BranchMaster",
        name: "BRANCH MASTER",
        rtlName: "?????? ???????????? ????????????????",
        mini: "BM",
        rtlMini: "????",
        component: Branch_master,
        layout: "/admin"
      },
      {
        path: "/StaffMaster",
        name: "STAFF MASTER",
        rtlName: "???????? ??????????",
        mini: "SM",
        rtlMini: "????????????",
        component: Staff_master,
        layout: "/admin"
      },
      {
        path: "/GstMaster",
        name: "GST MASTER",
        rtlName: "???????? ??????????",
        mini: "GM",
        rtlMini: "????????????",
        component: Gst_master,
        layout: "/admin"
      },
      {
        path: "/Terms&ConditionMaster",
        name: "TERMS & CONDITION MASTER",
        rtlName: "???????? ??????????",
        mini: "TCM",
        rtlMini: "????????????",
        component: Tcondition_master,
        layout: "/admin"
      },
      {
        path: "/StaffMaster",
        name: "STAFF MASTER",
        rtlName: "???????? ??????????",
        mini: "SM",
        rtlMini: "????????????",
        component: Staff_master,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "MASTER",
    rtlName: "??????????1",
    icon: Apps,
    state: "master_pageCollapse",
    views: [
      {
        path: "/PartyMaster",
        name: "PARTY MASTER",
        rtlName: "????????????????",
        mini: "PM",
        rtlMini: "??",
        component: Party_master,
        layout: "/admin"
      },
      {
        path: "/NewAccount",
        name: "NEW ACCOUNT",
        rtlName: "?????????? ??????",
        mini: "NA",
        rtlMini: "????",
        component: New_account,
        layout: "/admin"
      },
      {
        path: "/UnitMaster",
        name: "UNIT MASTER",
        rtlName: "???????????????? ????????????",
        mini: "UM",
        rtlMini: "????",
        component: Unit_master,
        layout: "/admin"
      },
      {
        path: "/BrandMaster",
        name: "BRAND MASTER",
        rtlName: "?????????????????? ????????????",
        mini: "BM",
        rtlMini: "????????",
        component: Brand_master,
        layout: "/admin"
      },
      {
        path: "/MainCategoryMaster",
        name: "MAIN CATEGORY MASTER",
        rtlName: "??????????",
        mini: "MCM",
        rtlMini: "????",
        component: Maincategory_master,
        layout: "/admin"
      },
      {
        path: "/SubCategoryMaster",
        name: "SUB CATEGORY MASTER",
        rtlName: "???????? ????????????",
        mini: "SCM",
        rtlMini: "????????",
        component: Subcategory_master,
        layout: "/admin"
      },
      {
        path: "/ProductTypeMaster",
        name: "PRODUCT TYPE MASTER",
        rtlName: "?????? ???????????? ????????????????",
        mini: "PTM",
        rtlMini: "????",
        component: Producttype_master,
        layout: "/admin"
      },
      {
        path: "/ItemMaster",
        name: "ITEM MASTER",
        rtlName: "???????? ??????????",
        mini: "TM",
        rtlMini: "????????????",
        component: Item_master,
        layout: "/admin"
      },
      {
        path: "/PartycategoryMaster",
        name: "PARTY CATEGORY",
        rtlName: "???????? ??????????",
        mini: "PC",
        rtlMini: "????????????",
        component: partycategory_master,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "Account",
    rtlName: "??????????1",
    icon: Apps,
    state: "account_pageCollapse",
    views: [
      {
        path: "/ReceiptVoucher",
        name: "RECEIPT VOUCHER",
        rtlName: "????????????????",
        mini: "RV",
        rtlMini: "??",
        component: Receipt_voucher,
        layout: "/admin"
      },
      {
        path: "/ReportAccount",
        name: "REPORT - ACCOUNT",
        rtlName: "?????????? ??????",
        mini: "RA",
        rtlMini: "????",
        component: Report_account,
        layout: "/admin"
      },
      {
        path: "/ServiceVoucher",
        name: "SERVICE VOUCHER",
        rtlName: "???????????????? ????????????",
        mini: "SV",
        rtlMini: "????",
        component: Service_voucher,
        layout: "/admin"
      },
      {
        path: "/PaymentVoucher",
        name: "PAYMENT VOUCHER",
        rtlName: "?????????????????? ????????????",
        mini: "PV",
        rtlMini: "????????",
        component: Payment_voucher,
        layout: "/admin"
      },
      {
        path: "/JournalVoucher",
        name: "JOURNAL VOUCHER",
        rtlName: "??????????",
        mini: "JV",
        rtlMini: "????",
        component: Journal_voucher,
        layout: "/admin"
      },
      {
        path: "/MultiledgerReport",
        name: "MULTI LEDGER REPORT",
        rtlName: "???????? ????????????",
        mini: "MLR",
        rtlMini: "????????",
        component: Multiledger_report,
        layout: "/admin"
      },
      {
        path: "/LedgerReport",
        name: "LEDGER REPORT",
        rtlName: "?????? ???????????? ????????????????",
        mini: "LR",
        rtlMini: "????",
        component: Ledger_report,
        layout: "/admin"
      },
      {
        path: "/Adjustment",
        name: "ADJUSTMENT",
        rtlName: "???????? ??????????",
        mini: "A",
        rtlMini: "????????????",
        component: Adjustment,
        layout: "/admin"
      },
      {
        path: "/DebtorsPendingBill",
        name: "DEBTORS PENDING BILL",
        rtlName: "???????? ??????????",
        mini: "DPB",
        rtlMini: "????????????",
        component: Debtorspending_bill,
        layout: "/admin"
      },
      {
        path: "/CreditorsPendingBill",
        name: "CREDITORS PENDING BILL",
        rtlName: "???????? ??????????",
        mini: "CPB",
        rtlMini: "????????????",
        component: Creditorspending_bill,
        layout: "/admin"
      },
      {
        path: "/BankReconciliation",
        name: "BANK RECONCILIATION",
        rtlName: "???????? ??????????",
        mini: "BR",
        rtlMini: "????????????",
        component: Bankreconciliation,
        layout: "/admin"
      },
      {
        path: "/ClearCheckEntryList",
        name: "CLEAR CHECK ENTRY LIST",
        rtlName: "???????? ??????????",
        mini: "CCEL",
        rtlMini: "????????????",
        component: ClearCheckentry_list,
        layout: "/admin"
      },
      {
        path: "/DebitNote",
        name: "DEBIT NOTE",
        rtlName: "???????? ??????????",
        mini: "DN",
        rtlMini: "????????????",
        component: Debit_note,
        layout: "/admin"
      },
      {
        path: "/Credit_note",
        name: "CREDIT NOTE",
        rtlName: "???????? ??????????",
        mini: "CN",
        rtlMini: "????????????",
        component: Credit_note,
        layout: "/admin"
      },
    ]
  },
  {
    collapse: true,
    name: "PURCHASE",
    rtlName: "??????????1",
    icon: Apps,
    state: "purchase_pageCollapse",
    views: [
      {
        path: "/PurchaseOrder",
        name: "PURCHASE ORDER",
        rtlName: "????????????????",
        mini: "PO",
        rtlMini: "??",
        component: Purchase_order,
        layout: "/admin"
      },
      {
        path: "/GoodReciept",
        name: "GOODS RECEIPT",
        rtlName: "?????????? ??????",
        mini: "GR",
        rtlMini: "????",
        component: Good_reciept,
        layout: "/admin"
      },
      {
        path: "/PurchaseInvoice",
        name: "PURCHASE INVOICE",
        rtlName: "???????????????? ????????????",
        mini: "PI",
        rtlMini: "????",
        component: Purchase_invoice,
        layout: "/admin"
      },
      {
        path: "/PurchaseReturn",
        name: "PURCHASE RETURN",
        rtlName: "?????????????????? ????????????",
        mini: "PR ",
        rtlMini: "????????",
        component: Purchase_return,
        layout: "/admin"
      },{
        path: "/po-against-indent",
        name: "PO Against Indent",
        rtlName: "?????????????????? ????????????",
        mini: "PR ",
        rtlMini: "????????",
        component: Po_against_indent,
        layout: "/admin"
      },{
        path: "/all-pending-orders",
        name: "All Pending Orders",
        rtlName: "?????????????????? ????????????",
        mini: "PR ",
        rtlMini: "????????",
        component: All_pending_orders,
        layout: "/admin"
      },
      {
        path: "/new-entry",
        name: "New Entry",
        rtlName: "?????????????????? ????????????",
        mini: "PR ",
        rtlMini: "????????",
        component: New_entry,
        layout: "/admin"
      },
      {
        path: "/JournalVoucher",
        name: "JOURNAL VOUCHER",
        rtlName: "??????????",
        mini: "JV",
        rtlMini: "????",
        component: Journal_voucher,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "SALE",
    rtlName: "??????????1",
    icon: Apps,
    state: "Sale_pageCollapse",
    views: [
      {
        path: "/SalesOrder",
        name: "SALES ORDER",
        rtlName: "????????????????",
        mini: "SO",
        rtlMini: "??",
        component: Sales_oredr,
        layout: "/admin"
      },
      {
        path: "/GoodsDispatch",
        name: "GOODS DISPATCH",
        rtlName: "?????????? ??????",
        mini: "GD",
        rtlMini: "????",
        component: Goods_Dispatch,
        layout: "/admin"
      },
      {
        path: "/SalesInvoice",
        name: "SALES INVOICE",
        rtlName: "???????????????? ????????????",
        mini: "SI",
        rtlMini: "????",
        component: Sales_invoice,
        layout: "/admin"
      },
      {
        path: "/SalesReturn",
        name: "SALES RETURN",
        rtlName: "?????????????????? ????????????",
        mini: "SR",
        rtlMini: "????????",
        component: Sales_return,
        layout: "/admin"
      },
      {
        path: "/ReportSale",
        name: "REPORT - SALE",
        rtlName: "??????????",
        mini: "RS",
        rtlMini: "????",
        component: Report_sale,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "INVENTORY",
    rtlName: "??????????1",
    icon: Apps,
    state: "inventory_pageCollapse",
    views: [
      {
        path: "/OpeningStock",
        name: "OPENING STOCK",
        rtlName: "????????????????",
        mini: "OS",
        rtlMini: "??",
        component: Opening_stock,
        layout: "/admin"
      },
      {
        path: "/StockTransfer",
        name: "STOCK TRANSFER",
        rtlName: "?????????? ??????",
        mini: "ST",
        rtlMini: "????",
        component: StockTransfer,
        layout: "/admin"
      },
      {
        path: "/StockTransferRequest",
        name: "STOCK TRANSFER REQUEST",
        rtlName: "???????????????? ????????????",
        mini: "STR",
        rtlMini: "????",
        component: Globalitemwisereport,
        layout: "/admin"
      },
      {
        path: "/StoreReceipt",
        name: "STORE RECEIPT",
        rtlName: "?????????????????? ????????????",
        mini: "SR",
        rtlMini: "????????",
        component: StoreReceipt,
        layout: "/admin"
      },
      {
        path: "/ReportEnventory",
        name: "REPORT - INVENTORY",
        rtlName: "??????????",
        mini: "RI",
        rtlMini: "????",
        component: Report_enventory,
        layout: "/admin"
      },
      {
        path: "/StockSummary",
        name: "STOCK SUMMARY",
        rtlName: "??????????",
        mini: "SS",
        rtlMini: "????",
        component: Stock_summary,
        layout: "/admin"
      },
      {
        path: "/MaterialRequistion",
        name: "MATERIAL REQUISTION",
        rtlName: "??????????",
        mini: "MR",
        rtlMini: "????",
        component: MaterialRequistion,
        layout: "/admin"
      },
      {
        path: "/PurchaseIndent",
        name: "PURCHASE INDENT",
        rtlName: "??????????",
        mini: "PI",
        rtlMini: "????",
        component: Purchase_indent,
        layout: "/admin"
      },

    ]
  } ,

  {
    collapse: true,
    name: "PRODUCTION",
    rtlName: "??????????1",
    icon: Apps,
    state: "production_pageCollapse",
    views: [
      {
        path: "/CashewProduction",
        name: "CASHEW PRODUCTION",
        rtlName: "????????????????",
        mini: "CP",
        rtlMini: "??",
        component: Cashew_production,
        layout: "/admin"
      },
      {
        path: "/ReportProduction",
        name: "REPORT - PRODUCTION",
        rtlName: "?????????? ??????",
        mini: "RP",
        rtlMini: "????",
        component: Report_production,
        layout: "/admin"
      },
      {
        path: "/Bom",
        name: "BOM",
        rtlName: "???????????????? ????????????",
        mini: "B",
        rtlMini: "????",
        component: Bom,
        layout: "/admin"
      },
      {
        path: "/ProductionVoucher",
        name: "PRODUCTION VOUCHER",
        rtlName: "?????????????????? ????????????",
        mini: "PV",
        rtlMini: "????????",
        component: Production_voucher,
        layout: "/admin"
      }
    ]
  }

  ,

  {
    collapse: true,
    name: "REPORT",
    rtlName: "??????????1",
    icon: Apps,
    state: "report_pageCollapse",
    views: [
      {
        path: "/GlobalItemWiseReport",
        name: "GLOBAL ITEM WISE REPORT",
        rtlName: "????????????????",
        mini: "GIWR",
        rtlMini: "??",
        componen:Globalitemwisereport,
        layout: "/admin"
      },
      {
        path: "/GlobalReportForStatem",
        name: "GLOBAL REPORT FOR STATEMENT",
        rtlName: "?????????? ??????",
        mini: "GRFS",
        rtlMini: "????",
        component: Globalreportfor_statem,
        layout: "/admin"
      },
      {
        path: "/SalerelatedReports",
        name: "SALE RELATED REPORTS",
        rtlName: "???????????????? ????????????",
        mini: "SRR",
        rtlMini: "????",
        component: Salerelated_reports,
        layout: "/admin"
      }
    ]
  },

   
  {
    collapse: true,
    name: "DATA TRANSFER ",
    rtlName: "??????????1",
    icon: Apps,
    state: "data_tr_pageCollapse",
    views: [
      {
        path: "/DtaaTransfer",
        name: "DATA TRANSFER FRM PRE YR TO NXT YR",
        rtlName: "????????????????",
        mini: "DT",
        rtlMini: "??",
        component: Dtaa_transfer,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "EXPORT DATA FOR TALLY",
    rtlName: "??????????1",
    icon: Apps,
    state: "ex_d_tr_pageCollapse",
    views: [
      {
        path: "/TallyexportData",
        name: "TALLY EXPORT DATA",
        rtlName: "????????????????",
        mini: "TED",
        rtlMini: "??",
        component: Tallyexport_data,
        layout: "/admin"
      }
    ]
  },

  {
    collapse: true,
    name: "SADMIN MASTER",
    rtlName: "??????????1",
    icon: Apps,
    state: "s_a_pageCollapse",
    views: [
      {
        path: "/StockReposting",
        name: "STOCK REPOSTING",
        rtlName: "????????????????",
        mini: "SR",
        rtlMini: "??",
        component: Stock_reposting,
        layout: "/admin"
      },
      {
        path: "/FieldReposting",
        name: "FIELD REPOSTING",
        rtlName: "?????????? ??????",
        mini: "FR",
        rtlMini: "????",
        component: Field_reposting,
        layout: "/admin"
      },
      {
        path: "/LedgerReposting",
        name: "LEDGER REPOSTING",
        rtlName: "???????????????? ????????????",
        mini: "LR",
        rtlMini: "????",
        component: Ledger_reposting,
        layout: "/admin"
      },
      {
        path: "/UserMaster",
        name: "USER MASTER",
        rtlName: "?????????????????? ????????????",
        mini: "UM",
        rtlMini: "????????",
        component: User_master,
        layout: "/admin"
      },
      {
        path: "/MiscellaneousMaster",
        name: "MISCELLANEOUS MASTER",
        rtlName: "?????????????????? ????????????",
        mini: "MM",
        rtlMini: "????????",
        component: Miscellaneous_master,
        layout: "/admin"
      },
      {
        path: "/FormateParameter",
        name: "FORMAT PARAMETER",
        rtlName: "?????????????????? ????????????",
        mini: "FP",
        rtlMini: "????????",
        component: Formate_parameter,
        layout: "/admin"
      },
      {
        path: "/ConfigParameter",
        name: "CONFIG PARAMETER",
        rtlName: "?????????????????? ????????????",
        mini: "CP",
        rtlMini: "????????",
        component: Config_parameter,
        layout: "/admin"
      },
      {
        path: "/SmsMaster",
        name: "SMS MASTER",
        rtlName: "?????????????????? ????????????",
        mini: "SM",
        rtlMini: "????????",
        component: Sms_master,
        layout: "/admin"
      }
    ]
  },
    {
    collapse: true,
    name: "GST PORTAL",
    rtlName: "??????????1",
    icon: Apps,
    state: "gst_pageCollapse",
    views: [
      {
        path: "/GstVerification",
        name: "GST VERIFICATION",
        rtlName: "????????????????",
        mini: "GV",
        rtlMini: "??",
        component: Gst_verification,
        layout: "/admin"
      }
    ]
  },





 
];
export default dashRoutes;
