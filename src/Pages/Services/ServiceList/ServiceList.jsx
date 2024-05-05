import ServiceList2 from './ServiceList2';

const ServiceList = () => {
    return (
        <div>
            <div className="flex flex-wrap  align-items-center justify-content-between gap-2 my-5">
                <h1 className="text-xl dark:text-white md:text-2xl text-900 font-bold ml-4 md:ml-0">Service List</h1>
            </div>
            <ServiceList2></ServiceList2>
        </div>
    );
};

export default ServiceList;