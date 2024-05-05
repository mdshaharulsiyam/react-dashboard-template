
import { useState, useEffect } from 'react';
// import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { Tag } from 'primereact/tag';
// import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CustomerService } from './DataService/CustomerService';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { LuFilterX } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdLocalPrintshop } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { MdLockReset } from "react-icons/md";


const YearlyInvoice = () => {
    const [date, setDate] = useState(null);
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const representatives = [
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]
    const statuses = ['unqualified', 'qualified', 'new', 'negotiation', 'renewal']
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
        initFilters();
    }, []);

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const clearFilter = () => {
        initFilters();
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            representative: { value: null, matchMode: FilterMatchMode.IN },
            date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
            verified: { value: null, matchMode: FilterMatchMode.EQUALS }
        });
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray', padding: '10px 0', backgroundColor: '#F6F5F2' }}>
                <Button className='bg-green-600 px-2 text-white font-medium' type="button" onClick={clearFilter}>

                    <MdLockReset />
                    Reset
                </Button>
                <span className="relative">
                    <FaMagnifyingGlass className='text-gray-400 ml-2 absolute right-2 top-4 text-lg' />
                    <InputText className='text-lg font-normal border border-green-600 rounded-md bg-white p-2' value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false} style={{ height: '6px' }}></ProgressBar>;
    };

    const activityFilterTemplate = (options) => {
        return (
            <>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </>
        );
    };

    // const verifiedBodyTemplate = (rowData) => {
    //     return <i className={classNames('pi', { 'text-green-500 pi-check-circle': rowData.verified, 'text-red-500 pi-times-circle': !rowData.verified })}></i>;
    // };

    // const verifiedFilterTemplate = (options) => {
    //     return (
    //         <div className="flex align-items-center gap-2">
    //             <label htmlFor="verified-filter" className="font-bold">
    //                 Verified
    //             </label>
    //             <TriStateCheckbox inputId="verified-filter" value={options.value} onChange={(e) => options.filterCallback(e.value)} />
    //         </div>
    //     );
    // };

    const header = renderHeader();

    return (
        <div className='max-w-[90vw]'>
            <h1 className="text-2xl text-black bg-[#f7f7fa] dark:bg-[#2F3349] dark:border-none mb-2 py-2 dark:rounded-sm dark:text-white">
                Balance Sheet Report
            </h1>
            <div className='border p-4 rounded-sm '>
                <div className="card border p-2 rounded-sm flex flex-col lg:flex-row lg:items-center lg:justify-between  gap-3 p-fluid">
                    <div className="flex-auto lg:w-[47%] ">
                        <label
                            htmlFor="buttondisplay"
                            className="font-bold block mb-2 text-black dark:text-white"
                        >
                            Start Date
                        </label>
                        <Calendar
                            id="buttondisplay"
                            className="border border-gray-400 dark:border-black dark:bg-base-100 rounded-md pl-5 pr-2 py-2"
                            placeholder=""
                            value={date}
                            onChange={(e) => setDate(e.value)}
                            showIcon
                        />
                    </div>
                    <div className="flex-auto lg:w-[47%] ">
                        <label
                            htmlFor="buttondisplay"
                            className="font-bold block mb-2 text-black dark:text-white"
                        >
                            End Date
                        </label>
                        <Calendar
                            id="buttondisplay"
                            className="border border-gray-400 dark:border-black dark:bg-base-100 rounded-md pl-5 pr-2 py-2"
                            placeholder=""
                            value={date}
                            onChange={(e) => setDate(e.value)}
                            showIcon
                        />
                    </div>

                    <div className="flex-auto lg:w-[5%] lg:mt-8">
                        <button className="btn btn-success text-white "> Search</button>
                    </div>
                </div>

            </div>

            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none  mb-4 w-full border p-2 mt-2'>

                <div className='flex flex-row items-center justify-between bg-[#DDDBFB] gap-2 md:gap-0 dark:border-black border mb-4 w-full'>
                    <div className='flex  '>
                        <button className='btn rounded-none border-none bg-success text-white hover:bg-green-600 '>ALL(1)</button>

                        <button className='w-[100%]  bg-[#f7f7f7] dark:bg-base-100 '></button>
                    </div>
                    <div className="flex gap-2">
                        <button className='btn rounded-none bg-success text-white border-none hover:bg-green-600'><RiMenuSearchLine />Filter Report </button>
                        <button className='btn rounded-none bg-green-500 text-white border-none hover:bg-green-600'>
                            <span><MdLocalPrintshop /></span> Make Print</button>

                    </div>



                </div>

            </div>


            <DataTable value={customers} paginator showGridlines rows={10} rowsPerPageOptions={[5, 10, 25, 50]} loading={loading} dataKey="id"
                filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status', 'status']} header={header}
                emptyMessage="No customers found."
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
            >
                <Column field=" Serial" header="Serial" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="Date" filterField="Date" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                <Column header="Account" filterField="Account" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column header="Status" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column field="Credit" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column field="Debit" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />

                <Column field="Total Balance" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
            </DataTable>
        </div>
    );
}


export default YearlyInvoice