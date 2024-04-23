"use client"

import { signUp } from "@/app/actions/auth";
import Link from "next/link";
import { useState } from "react";
import Loader from "../common/Loader";
import SucessModal from "@/app/components/SuccessModal";
import { useRouter } from "next/navigation";
import ErrorModal from "@/app/components/ErrorModal";
import { newDistrict } from "@/app/actions/district";
import { District } from "@/types/district";

const initialDistrict: District = {
    name: '', lat: '', long: '',
}
const NewDistrict = () => {
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errMsg, setErrMsg] = useState('')
    const [showErrModal, setShowErrModal] = useState(false);
    const [formData, setFormData] = useState(initialDistrict);
    const router = useRouter();

    const handleSubmit = async () => {
        setLoading(true)
        const res = await newDistrict(formData)
        if (res.status) {
            setFormData(initialDistrict);
            setLoading(false)
            setShowModal(true);
        } else {
            setErrMsg(res.message)
            setShowErrModal(true);
            setLoading(false)
        }
    }
    return (
        <>
            {
                loading && <Loader />
            }
            <SucessModal
                message="Succefully created the instructor."
                title="District created"
                isOpen={showModal}
                onClose={() => {
                    setShowForm(false)
                    setShowModal(false);
                    router.refresh();
                }}
                url=""
            />
            <ErrorModal
                message={errMsg}
                title="Failed to create the instructor"
                isOpen={showErrModal}
                onClose={() => {
                    setShowErrModal(false);
                    router.refresh();
                }}
                url=""
            />
            {!showForm &&
                <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
                    <button type="button" className="inline-flex items-center justify-center rounded-md border border-teal-600 px-10 py-4 text-center font-medium text-teal-600 hover:bg-teal-600 hover:text-white lg:px-8 xl:px-10"
                        onClick={() => { setShowForm(true) }}
                    >
                        Add new
                    </button>
                </div>
            }
            {showForm &&
                <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Add a new district
                        </h3>
                    </div>
                    <form >
                        <div className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    District Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter district name"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-teal-600 active:border-teal-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-teal-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            name: e.target.value
                                        })
                                    }}
                                    value={formData.name}
                                />
                            </div>
                            <div className="mb-4.5">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Latitude
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter the latitude"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-teal-600 active:border-teal-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-teal-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            lat: e.target.value
                                        })
                                    }}
                                    value={formData.lat}
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Longitude
                                </label>
                                <input
                                    type="long"
                                    placeholder="Enter the longitude"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-teal-600 active:border-teal-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-teal-600"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            long: e.target.value
                                        })
                                    }}
                                    value={formData.long}
                                />
                            </div>

                            <div className="w-full flex justify-between">
                                <button type="button" className="flex w-2/5 justify-center rounded bg-teal-600 p-3 font-medium text-gray hover:bg-opacity-90"
                                    onClick={handleSubmit}>
                                    Add
                                </button>

                                <button type="button" className="flex w-2/5 justify-center rounded bg-red-600 p-3 font-medium text-gray hover:bg-opacity-90"
                                    onClick={() => { setShowForm(false) }}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}

export default NewDistrict;