
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
import { CustomerService } from '../../../Pages/Reports/YearlyInvoice/DataService/CustomerService';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdLocalPrintshop } from "react-icons/md";
import { MdLockReset } from "react-icons/md";
import BtnWithIcon from '../Btn/BtnWithIcon';
import Title from '../../../Utility/TItle/Title';
import Btn from '../Btn/Btn';
import FilterDropdown from './FilterDropdown';
import ExportData from './ExportData';
import { FaPrint } from "react-icons/fa";


const DataTableSample = () => {
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

    const cols = [
        { field: 'name', header: 'Name' },
        { field: 'country.name', header: 'Country' },
        { field: 'representative', header: 'Agent' },
        { field: 'date', header: 'Date' },
        { field: 'balance', header: 'Balance' },
        { field: 'status', header: 'Status' },
        { field: 'activity', header: 'Activity' },
        { field: 'verified', header: 'Verified' },
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default();

                doc.autoTable(exportColumns, customers);
                doc.save('customer.pdf');
            });
        }).catch(error => {
            console.error('Error loading jspdf:', error);
        });
    };

    const renderHeader = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray', padding: '10px 0', backgroundColor: '#F6F5F2' }}>
                <div onClick={clearFilter}>
                    <BtnWithIcon text='Reset' icon={<MdLockReset />} />
                </div>

                <div className='flex items-center gap-2'>
                    <div className='rounded-sm text-lg hover:cursor-pointer bg-blue-600 text-white px-4 font-medium hover:bg-blue-700 duration-500 flex items-center' >
                        <Button className='text-2xl my-[6px]' type="button" icon={FaPrint} severity="warning" onClick={exportPdf} data-pr-tooltip="PDF" /> Print
                    </div>
                    <div className="relative">
                        <FaMagnifyingGlass className='text-gray-400 ml-2 absolute right-2 top-4 text-lg' />
                        <InputText className='text-lg font-normal border border-green-600 rounded-sm bg-white p-2' value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                    </div>
                </div>
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

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const filterClearTemplate = (options) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} severity="secondary"></Button>;
    };

    const filterApplyTemplate = (options) => {
        return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} severity="success"></Button>;
    };

    const filterFooterTemplate = () => {
        return <div className="px-3 pt-0 pb-3 text-center">Filter by Country</div>;
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

    const verifiedBodyTemplate = (rowData) => {
        // return <i className={classNames('pi', { 'text-green-500 pi-check-circle': rowData.verified, 'text-red-500 pi-times-circle': !rowData.verified })}></i>;
        return 'icon'
    };

    const verifiedFilterTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2">
                <label htmlFor="verified-filter" className="font-bold">
                    Verified
                </label>
                {/* <TriStateCheckbox inputId="verified-filter" value={options.value} onChange={(e) => options.filterCallback(e.value)} /> */}
            </div>
        );
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

    const header = renderHeader();

    return (
        <div className='max-w-[90vw]'>
            <Title title='Balance Sheet Report' />

            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 dark:border-none w-full border p-2 mt-2'>
                <div className='flex flex-row items-center justify-between gap-2 md:gap-0 dark:border-black w-full'>
                    <div className='flex  '>
                        <Btn text='All' />
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <FilterDropdown />
                        </div>
                        <BtnWithIcon icon={<MdLocalPrintshop />} text='Print' />
                    </div>
                </div>
            </div>
            <DataTable value={customers} paginator showGridlines rows={10} rowsPerPageOptions={[5, 10, 25, 50]} loading={loading} dataKey="id"
                filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status', 'status']} header={header}
                emptyMessage="No customers found."
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
            >
                <Column filterIcon= {<FaPrint />} field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} ico />
                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate}
                    filter filterPlaceholder="Search by country" filterClear={filterClearTemplate}
                    filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />
                <Column header="Agent" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                <Column header="Date" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column field="status" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column field="activity" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} />
            </DataTable>
        </div>
    );
}


export default DataTableSample
