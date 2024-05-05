import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const PosModal = ({setIsOpen, isOpen}) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="" onClose={()=> setIsOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2 flex gap-2 mb-5">
                      <div className="w-full">
                        <p>
                          Your Name<sup>*</sup>
                        </p>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full  "
                        />
                      </div>
                      <div className="w-full">
                        <p>
                          Your Name<sup>*</sup>
                        </p>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full  "
                        />
                      </div>
                    </div>

                    <div className="mt-2 flex gap-2 mb-5">
                      <div className="w-full">
                        <p>
                          Your Name<sup>*</sup>
                        </p>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full  "
                        />
                      </div>
                      <div className="w-full">
                        <p>
                          Your Name<sup>*</sup>
                        </p>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full  "
                        />
                      </div>
                    </div>

                    <div className="w-full mb-5">
                      <p>
                        Note<sup>*</sup>
                      </p>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full  "
                      />
                    </div>
                    <div className="w-full">
                      <p>
                        Address<sup>*</sup>
                      </p>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full  "
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
    );
};

export default PosModal;