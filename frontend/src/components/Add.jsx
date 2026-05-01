import axios from 'axios';
import React, { useState } from 'react';

export default function AddNewPassword({ handleOpenModal }) {

  const [showPassword, setShowPassword] = useState(false)
  const [range, setRange] = useState(20)

  const [formData, setFormData] = useState({
    siteName: "",
    url: "",
    username: "",
    password: "",
    notes: "",
  })

  let handleCancle = () => {
    handleOpenModal(false)
  }

  let handleRangeChange = (e) => {  

    setRange(e.target.value)

  }

  let handleFormChange = (e) => {  

    let {name, value} = e.target

    setFormData((prev)=>({
      ...prev,
      [name]: value
    }))
  }


  let  handleSubmit = (e) =>{
    e.preventDefault() //prevents the refresh of the pages on submit
    console.log("Sending to backend:", formData)
    try {

      const response = await axios.post(
        "http://localhost:5000/api/passwords",
        formData
      )

      console.log("Saved:", response.data)

      // Clear the form
      setFormData({ websiteName: "", url: "", password: "", notes: "" })

    } catch (error) {
      console.error(error)
    }
  }




  return (
    // Overlay background simulating the blurred app background
    <div className="min-h-screen fixed inset-0 backdrop-blur-sm bg-[#9ca3af]/50 flex items-center justify-center p-4 font-sans">

      {/* Modal Container */}
      <div className="bg-white w-full max-w-[850px] rounded-[20px] shadow-2xl overflow-hidden flex flex-col">

        {/* Header Content */}
        <div className="p-8 pb-6 flex justify-between items-start">
          <div>
            <h1 className="text-[22px] font-semibold text-gray-900 leading-tight">Add New Password</h1>
            <p className="text-[14px] text-gray-500 mt-1">Securely store your credentials in the Vault</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" onClick={handleOpenModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>


        <form onSubmit={handleSubmit}>

   
          {/* Main Body - Grid Layout */}
          <div className="px-8 flex flex-col md:flex-row gap-8">

            {/* Left Column - Form */}
            <div className="flex-1 space-y-5">
              {/* Site Name */}
              <div className="space-y-1.5">
                <label className="block text-[13px] font-medium text-gray-900" htmlFor="siteName">Site Name</label>
                <input
                  className="w-full bg-[#f8f9fa] border border-gray-200 text-gray-800 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                  placeholder="e.g. GitHub"
                  type="text"
                  id="siteName"
                  name="siteName"
                  onChange={handleFormChange}
                />
              </div>

              {/* Website URL */}
              <div className="space-y-1.5">
                <label className="block text-[13px] font-medium text-gray-900" htmlFor="url">Website URL</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </div>
                  <input
                    className="w-full bg-[#f8f9fa] border border-gray-200 text-gray-800 text-[14px] pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                    placeholder="https://github.com"
                    type="url"
                    id="url"
                    name="url"
                    onChange={handleFormChange}
                  />
                </div>
              </div>

              {/* Username / Email */}
              <div className="space-y-1.5">
                <label className="block text-[13px] font-medium text-gray-900" htmlFor="username">Username / Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <input
                    className="w-full bg-[#f8f9fa] border border-gray-200 text-gray-800 text-[14px] pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                    placeholder="developer@example.com"
                    type="text"
                    id="username"
                    name="username"
                  onChange={handleFormChange}
    
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="block text-[13px] font-medium text-gray-900" htmlFor="password">Password</label>
                  <span className="text-[11px] font-bold text-[#6366f1] tracking-wider">STRONG</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
                  </div>
                  <input
                    className="w-full bg-[#f8f9fa] block text-[13px] font-medium text-gray-400 border border-gray-200 tracking-widest pl-10 pr-10 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400 placeholder:tracking-normal placeholder:text-[12px]"
                    placeholder="P@ssw0rd!23"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    onChange={handleFormChange}
                  />
                  <button onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600">
                    {
                      showPassword ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> :
                        // Eye-off icon (hide)
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                    }
                  </button>
                </div>
                {/* Password Strength Bar */}
                <div className="flex gap-1 h-1.5 mt-2">
                  <div className="w-full bg-gradient-to-r from-red-500 via-purple-500 to-[#6366f1] rounded-full"></div>
                  <div className="w-[15%] bg-[#e5e7eb] rounded-full"></div>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5 pb-4">
                <label className="block text-[13px] font-medium text-gray-900" htmlFor="notes">Notes</label>
                <textarea
                  className="w-full bg-[#f8f9fa] border border-gray-200 text-gray-800 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400 resize-none"
                  placeholder="Add recovery codes or security questions..."
                  id="notes"
                  name="notes"
                  rows="3"
                  onChange={handleFormChange}
                ></textarea>
              </div>
            </div>

            {/* Right Column - Generator */}
            <div className="w-full md:w-[320px] bg-[#f8f9fa] border border-gray-100 rounded-2xl p-6 flex flex-col mb-4">
              <div className="flex items-center gap-2 mb-6">
                <svg className="text-[#1d4ed8]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
                <h3 className="text-[16px] font-semibold text-gray-900">Generator</h3>
              </div>

              {/* Length Control */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-[13px] text-gray-700 font-medium">Length</label>
                  <span className="text-[14px] font-bold text-[#1d4ed8]">{range}</span>
                </div>
                {/* Custom Slider Styling representation */}
                  <input onChange={(e)=>handleRangeChange(e)} type="range" defaultValue={20} className='h-2 bg-[#1d4ed8] border-0 outline-none accent-[#1d4ed8] cursor-pointer w-full rounded-l-full'/>
                </div>

              {/* Toggles */}
              <div className="space-y-4 mb-8">
                {/* Toggle 1 */}
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-gray-700">Uppercase (A-Z)</span>
                  <div className="w-[36px] h-[20px] bg-[#1d4ed8] rounded-full relative cursor-pointer">
                    <div className="w-[16px] h-[16px] bg-white rounded-full absolute top-[2px] right-[2px] shadow-sm"></div>
                  </div>
                </div>
                {/* Toggle 2 */}
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-gray-700">Numbers (0-9)</span>
                  <div className="w-[36px] h-[20px] bg-[#1d4ed8] rounded-full relative cursor-pointer">
                    <div className="w-[16px] h-[16px] bg-white rounded-full absolute top-[2px] right-[2px] shadow-sm"></div>
                  </div>
                </div>
                {/* Toggle 3 */}
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-gray-700">Symbols (!@#$)</span>
                  <div className="w-[36px] h-[20px] bg-[#1d4ed8] rounded-full relative cursor-pointer">
                    <div className="w-[16px] h-[16px] bg-white rounded-full absolute top-[2px] right-[2px] shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <button className="px-6 py-2.5 cursor-pointer flex items-center gap-2 justify-center bg-[#1d4ed8] hover:bg-blue-700 text-white text-[14px] font-medium rounded-xl shadow-sm transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
                Generate New
              </button>

              {/* Info Box */}
              <div className="mt-6 pt-5 border-t border-gray-200 flex items-start gap-2 text-gray-500">
                <svg className="shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
                <p className="text-[11px] leading-tight">We recommend using at least 16 characters for maximum security.</p>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="bg-[#f8f9fa] border-t border-gray-100 p-6 flex justify-end items-center gap-4">
            <button onClick={handleCancle} className="px-5 py-2.5 cursor-pointer text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Cancel
            </button>
            <button type='submit' onClick={handleSubmit} className="px-6 py-2.5 cursor-pointer bg-[#1d4ed8] hover:bg-blue-700 text-white text-[14px] font-medium rounded-xl flex items-center gap-2 shadow-sm transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Save Securely
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}