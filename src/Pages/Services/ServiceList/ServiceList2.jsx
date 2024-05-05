
import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './ProductService';
import NewServiceModal from '../NewServiceModal/NewServiceModal';
import './Css/ServiceListCss.css'
import HoverButton from './Button/HoverButton';

const ServiceList2 = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };
    const imageBodyTemplate = (product) => {
        return <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="w-[70px] h-[50px] my-4 mx-auto shadow-2 border-round " />;
    };
    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };
   
    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} className='text-white bg-green-600 px-2 rounded-md' severity={getSeverity(product)}></Tag>;
    };
    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'Active':
                return 'success';

            case 'Inactive':
                return 'warning';

            default:
                return null;
        }
    };
    const header = (
        <>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 md:border bg-[#DDDBFB] dark:border-gray-600 mb-4 w-full dark:bg-[#2F3349]'>
                <div className='flex border md:border-none w-full '>
                    <button className='btn rounded-none border-none text-blue-600 hover:bg-green-600 hover:text-white dark:text-white dark:hover:bg-green-600 bg-[#DDDBFB]'>ALL</button>
                    <button className='btn rounded-none bg-[#DDDBFB] hover:bg-green-600 hover:text-white dark:text-white dark:hover:bg-green-600 border-none text-blue-600 '>Active</button>
                    <button className='btn rounded-none hover:bg-green-600 hover:text-white dark:text-white dark:hover:bg-green-600 border-none text-blue-600 bg-[#DDDBFB]'>Inactive</button>
                </div>
                <button  className='btn rounded-none bg-success text-white '>New Service</button>
            </div>
        </>
    );

    return (
        <>
            <div className=" border dark:border-none rounded-md p-4 dark:bg-[#2F3349]">
                <DataTable className='' value={products} header={header} tableStyle={{ minWidth: '70rem' }}  >
                    {/* image column */}
                    <Column header="Image"  headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#DDDBFB', padding: '8px ' }} className='border' body={imageBodyTemplate}></Column>
                    {/* category name column */}
                    <Column field="category" className='border text-center dark:text-gray-300' headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', fontWeight: 'bold', backgroundColor: '#DDDBFB', padding: '8px ' }} header="Category Name" body={HoverButton} ></Column>
                    {/* service name column */}
                    <Column field="price" className='border  text-center dark:text-gray-300' header="Service Name" headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bold', backgroundColor: '#DDDBFB', padding: '8px' }} body={priceBodyTemplate}></Column>
                    {/*service price column */}
                    <Column field="price" className='border text-center dark:text-gray-300' header="Service Price" headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bold', backgroundColor: '#DDDBFB', padding: '8px' }} body={priceBodyTemplate}></Column>
                    {/* Status column */}
                    <Column header="Status" headerStyle={{ border: '1px solid gray', textTransform: 'uppercase', textAlign: 'right', fontWeight: 'bold', backgroundColor: '#DDDBFB', padding: '8px' }} className='border text-center' body={statusBodyTemplate}></Column>
                </DataTable>
            </div>
        </>
    );
};

export default ServiceList2;