import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Notice from "../Pages/Notice/Notice";
import Profile from "../Pages/Profile/Profile";
import NewExpenseReceipt from "../Pages/ExpenseReceipt/NewExpenseReceipt/NewExpenseReceipt";
import ServiceList from "../Pages/Services/ServiceList/ServiceList";
import YearlyInvoice from "../Pages/Reports/YearlyInvoice/YearlyInvoice";
import GeneralSetting from "../Pages/Settings/GeneralSetting/GeneralSetting";
import ExpenseReceipt from "../Pages/ExpenseReceipt/ExpenseReceipt/ExpenseReceipt";
import CategoryList from "../Pages/Expense/CategoryList/CategoryList";
// import NewRole from "../Pages/NewRole/NewRole";
import LoginPage from "../Pages/LoginPage/LoginPage";
import TinyMCE from "../Components/dashboard/TinyMCE/TinyMCE";
import RoleTable from "../Pages/Role/RoleTable";
import PosSell from "../Pages/Pos/PosSell";
import PaidInvoice from "../Pages/InvoicePaid/PaidInvoice";
import CreateInvoice from "../Pages/InvoicePaid/CreateInvoice";
import Button from "../Pages/Button/Button";
import MonthlyInvoice from "../Pages/MonthlyInvoice/MonthlyInvoice";
import ExpenseList from "../Pages/Expense/ExpenseList/ExpenseList";
import DataTableSample from "../Components/Shared/DataTable/DataTableSample";
import LeadDetails from "../Pages/LeadDetails/LeadDetails";
import DropDownSearch from "../Components/DropDown/DropDownSearch";
import DropDownNoSearch from "../Components/DropDownNoSearch/DropDownNoSearch";
import NewRoleSample from "../Pages/NewRole/NewRoleSample";
// import PrivetRoute from "../Security/PrivetRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/',
                element: <Notice />
            }
            ,
            {
                path: '/profile',
                element: <Profile />
            }
            ,
            // 21-04-24
            {
                path: '/expenseList',
                element: <ExpenseList></ExpenseList>
            }           
          ,
            {
                path: '/newExpenseReceipt',
                element: <NewExpenseReceipt />
            },
            
            {
                path: '/ExpenseReceipt',
                element: <ExpenseReceipt />
            },
            {
                path: '/serviceList',
                element: <ServiceList />
            },
            {
                path: '/yearlyInvoiceList',
                element: <YearlyInvoice />
            },
            {
                path: '/generalSetting',
                element: <GeneralSetting />
            }
            ,
            {
                path: '/categoryList',
                element: <CategoryList></CategoryList>
            },
            // 21-04-24
            {
                path: '/monthlyInvoice',
                element: <MonthlyInvoice></MonthlyInvoice>
            },

            {
                path: '/btn',
                element: <Button></Button>
            },
        
            {
                path: '/newRole',
                element: <NewRoleSample />
            },
            {
                path: '/TinyMCE',
                element: <TinyMCE></TinyMCE>
            },
            {
                path: '/role',
                element: <RoleTable></RoleTable>
            },
            {
                path: '/pos',
                element: <PosSell />
            },

            // 21-04-24
            {
                path: '/paidList',
                element: <PaidInvoice></PaidInvoice>
            },
            {
                path: '/createInvoice',
                element: <CreateInvoice></CreateInvoice>
            },
            //fahim
            {
                path: '/dataTable',
                element: <DataTableSample />
            },
            //22-04-24
            {
                path: '/leadDetails',
                element: <LeadDetails></LeadDetails>
            },
            //23-04-24 tahna
            {
                path: '/searchDropdown',
                element: <DropDownSearch></DropDownSearch>
            },
            {
                path: '/NoSerachDropdown',
                element: <DropDownNoSearch></DropDownNoSearch>
            },
            
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    }
])

export default Router;