"use client";
import useModalStore from "@/store/filter-modal-store";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiMiniMapPin } from "react-icons/hi2";

interface FilterModalProps {
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterModal({ onClick, onChange }: FilterModalProps) {
  const isOpen = useModalStore((state) => state.isOpen);
  const onClose = useModalStore((state) => state.onClose);
  const handleClose = () => {
    if (onClick) {
      onClick();
    }
    onClose();

  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-90" onClose={onClose}>
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
                <Dialog.Panel className="w-full max-w-md pointer-events-none transform overflow-hidden rounded-md dark:bg-verydarkblue bg-white p-6 text-left align-middle shadow-xl transition-all">
                
                  <div className=" w-full h-full flex items-center justify-start border-b py-3 pl-2 border-gray my-2">
                    <div className="w-full flex items-center">
                      <span>
                        <HiMiniMapPin size={26} className="text-violet" />
                      </span>
                      <input
                        type="text"
                        onChange={onChange}
                        className="w-full dark:text-white text-verydarkblue bg-transparent outline-none pl-2 border-none text-md"
                        placeholder="Filter by location..."
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2 my-2">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center p-3 rounded-full cursor-pointer"
                        htmlFor="checkbox"
                      >
                        <input
                          type="checkbox"
                          className="before:content[''] peer relative size-6 cursor-pointer appearance-none rounded-md border border-darkgray checked:border-0 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-blue-700 checked:before:bg-midnight hover:before:opacity-10"
                          id="checkbox"
                          defaultChecked={false}
                        />
                        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </label>
                    </div>
                    <span className="font-semibold text-md text-verydarkblue dark:text-white bg-transparent">
                      Full Time Only
                    </span>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={handleClose}
                      className="px-6 py-3 w-full mr-6 bg-violet rounded-[4px] text-white font-semibold text-sm 2xl:text-base hover:opacity-80 transition-all"
                    >
                      Search
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
