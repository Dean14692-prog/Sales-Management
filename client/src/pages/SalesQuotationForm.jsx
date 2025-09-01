// import React from "react";

// const SalesQuotationForm = () => {
//   return (
//     <div className="font-sans text-xs p-8 max-w-5xl mx-auto">
//       {/* === Title === */}
//       <div className="text-center mb-4">
//         <h2 className="text-2xl font-extrabold text-gray-800">
//           SALES QUOTATION
//         </h2>
//         <hr className="border-t-2 border-black mt-2 w-full" />
//       </div>

//       {/* === Top Header === */}
//       <div className="flex justify-between items-start mb-6">
//         {/* Left */}
//         <img src="/Cummins Logo.png" alt="Cummins Logo" className="h-25 w-60" />

//         {/* Middle (company details block) */}
//         <div className="w-1/2 mx-auto text-sm text-left ml-40">
//           <p className="text-l font-bold">Cummins C&amp;G Limited</p>
//           <p>P.O. Box 20001 00200</p>
//           <p>TEL 6943000/100 +254-722209872 /3 /6</p>
//           <p>Nairobi, Kenya</p>
//           <p>PIN No.P051630674H &nbsp;&nbsp;&nbsp; VAT No. P051630674H</p>
//         </div>

//         {/* Right */}
//         <div className="text-right text-sm font-bold">Original</div>
//       </div>

//       <hr className="border-t-2 border-black mb-6" />

//       {/* === Quote Info === */}
//       <div className="flex justify-between mb-8">
//         <div className="grid grid-cols-2 gap-2 text-sm mt-2">
//           <div>
//             <div className="font-bold">CUSTOMER</div>
//             <div className="font-bold">CC00015</div>
//             <div className="font-bold">MAUA</div>
//             <div>0723137293</div>
//             <div>operations.maua@beisawa.co.ke</div>
//           </div>
//         </div>
//         <div className="w-72 ml-auto text-sm">
//           <div className="flex justify-between border-b border-dashed border-sky-400 py-1.5 font-normal">
//             <span className="font-semibold">Quote Number</span>
//             <span>PG1006042</span>
//           </div>
//           <div className="flex justify-between border-b border-dashed border-sky-400 py-1.5">
//             <span className="font-semibold">Document Date</span>
//             <span>06/29/2022</span>
//           </div>
//           <div className="flex justify-between border-b border-dashed border-sky-400 py-1.5">
//             <span className="font-semibold">Valid Until</span>
//             <span>07/29/2022</span>
//           </div>
//           <div className="flex justify-between border-b border-dashed border-sky-400 py-1.5">
//             <span className="font-semibold">Contact person</span>
//             <span>Morang&apos;a Gesare Elivine</span>
//           </div>
//         </div>
//       </div>

//       {/* === Customer Details Divider === */}
//       <div className="mb-8">
//         <div className="font-bold border-b border-dashed border-sky-400 py-5"></div>
//       </div>

//       {/* === Items Table === */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse text-sm">
//           <thead>
//             <tr className="bg-gray-200 text-gray-900 font-bold">
//               <th className="p-2 border border-gray-400">No</th>
//               <th className="p-2 border border-gray-400">Item Code</th>
//               <th className="p-2 border border-gray-400">Description</th>
//               <th className="p-2 border border-gray-400 text-center">
//                 Quantity
//               </th>
//               <th className="p-2 border border-gray-400 text-right">Price</th>
//               <th className="p-2 border border-gray-400 text-right">Tax %</th>
//               <th className="p-2 border border-gray-400 text-right">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b border-dashed border-sky-400">
//               <td className="p-2">001</td>
//               <td className="p-2">LP-ATS-100A</td>
//               <td className="p-2">AUTOMATIC TRANSFER SWITCH 100A</td>
//               <td className="p-2 text-center">1</td>
//               <td className="p-2 text-right">120,000.00</td>
//               <td className="p-2 text-right">16.00</td>
//               <td className="p-2 text-right">120,000.00</td>
//             </tr>
//             {/* ... other rows ... */}
//           </tbody>
//         </table>
//       </div>

//       {/* Caption under table */}
//       <div className="mt-3 bg-gray-100 px-3 py-2 text-center font-semibold">
//         ATS AND INSTALLATION MATERIALS QUOTATION FOR A 55KVA CUMMINS GENERATOR.
//       </div>

//       {/* === Payment Term + Totals (side by side) === */}
//       {/* === Payment Term + Totals (side by side) === */}
//       <div className="flex justify-between mt-10">
//         {/* Left: Payment Term */}
//         <div className="w-64">
//           <div className="flex justify-between items-center border-b-[3px] border-blue-600 pb-1">
//             <span className="flex items-center font-bold text-base">
//               <span className="w-2 h-6 bg-yellow-500 inline-block mr-2"></span>
//               Payment Term
//             </span>
//             <span className="text-base pr-10">Cash</span>{" "}
//             {/* Added padding-right */}
//           </div>
//         </div>

//         {/* Right: Totals */}
//         <div className="w-72 text-sm">
//           <div className="flex justify-between border-b border-dashed border-sky-400 py-1.5">
//             <span className="font-semibold">Order Subtotal:</span>
//             <span className="font-bold">KES 397,000.00</span>
//           </div>
//           <div className="flex justify-between border-b border-dashed border-sky-400 py-1.5">
//             <span className="font-semibold">Total Before Tax:</span>
//             <span className="font-bold">KES 397,000.00</span>
//           </div>
//           <div className="flex justify-between border-b border-dashed border-sky-400 py-1.5">
//             <span className="font-semibold">Total Tax Amount:</span>
//             <span className="font-bold">KES 63,520.00</span>
//           </div>
//           <div className="flex justify-between items-center border-b-[3px] border-blue-600 pb-1 mt-2">
//             <span className="flex items-center font-semibold text-base">
//               <span className="w-2 h-6 bg-yellow-500 inline-block mr-2"></span>
//               Total Amount:
//             </span>
//             <span className="text-base font-bold">KES 460,520.00</span>
//           </div>
//         </div>
//       </div>

//       <hr className="border-t-2 border-black my-6" />

//       {/* === Signatures Section === */}
//       <div className="mt-10 text-sm">
//         {/* First row */}
//         <div className="flex justify-between items-end mb-12">
//           <div className="flex items-end">
//             <span className="mr-2">Prepared By</span>
//             <span className="border-b-2 border-black w-48"></span>
//             <div className="flex items-end ml-30">
//               <span className="mr-2">Date</span>
//               <span className="border-b-2 border-black w-48"></span>
//             </div>
//           </div>
//         </div>

//         {/* Second row */}
//         <div className="flex justify-between items-end">
//           <div className="flex items-end">
//             <span className="mr-2">Approved By</span>
//             <span className="border-b-2 border-black w-48"></span>
//           </div>
//           <div className="flex items-end">
//             <span className="mr-2">Date</span>
//             <span className="border-b-2 border-black w-48"></span>
//           </div>
//           <div className="flex items-end">
//             <span className="mr-2">ID</span>
//             <span className="border-b-2 border-black w-48"></span>
//           </div>
//         </div>
//       </div>

//       {/* === Disclaimer === */}
//       <div className="text-xs mt-8">
//         <p className="text-gray-700 mb-2">
//           Payments above ksh 1M (One Million) or US$ 10,000/ is paid through
//           Real (RTGS) with effect from OCT09. Bank Details STANDARD CHARTERED
//           BANK, Moi Avenue, A/C 0104046293300, Currency: KES
//         </p>
//         <p className="mt-4 italic leading-relaxed text-gray-700">
//           “As a result of the outbreak of the disease Covid-19 arising from the
//           novel coronavirus, temporary delays in delivery, labor or services
//           from Cummins and its sub-suppliers or subcontractors may occur. Among
//           other factors, Cummins’ delivery obligations are subject to correct
//           and punctual supply from our sub-suppliers or subcontractors, and
//           Cummins reserves the right to make partial deliveries or modify its
//           labor or service. While Cummins shall make every commercially
//           reasonable effort to meet the delivery, service or completion
//           obligations set forth herein, such dates are subject to change”
//         </p>
//       </div>

//       {/* === Footer === */}
//       <hr className="border-t-2 border-black my-4" />
//       <div className="flex justify-between items-center text-xs text-gray-700 mt-6 font-bold">
//         <span>Page</span>
//         <span>1/1</span>
//       </div>
//     </div>
//   );
// };

// export default SalesQuotationForm;

import React from "react";

const SalesQuotationForm = () => {
  return (
    <div className="font-sans text-xs p-8 max-w-5xl mx-auto">
      {/* === Title === */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-extrabold text-gray-800">
          SALES QUOTATION
        </h2>
        <hr className="border-t-2 border-black mt-2 w-full" />
      </div>

      {/* === Top Header === */}
      <div className="flex justify-between items-start mb-6">
        {/* Left */}
        <img src="/Cummins Logo.png" alt="Cummins Logo" className="h-25 w-60" />

        {/* Middle (company details block) */}
        <div className="w-1/2 mx-auto text-sm text-left ml-40">
          <p className="text-l font-bold">Cummins C&amp;G Limited</p>
          <p>P.O. Box 20001 00200</p>
          <p>TEL 6943000/100 +254-722209872 /3 /6</p>
          <p>Nairobi, Kenya</p>
          <p>PIN No.P051630674H &nbsp;&nbsp;&nbsp; VAT No. P051630674H</p>
        </div>

        {/* Right */}
        <div className="text-right text-sm font-bold">Original</div>
      </div>

      <hr className="border-t-2 border-black mb-6" />

      {/* === Quote Info === */}
      <div className="flex justify-between mb-1">
        <div className="grid grid-cols-2 gap-2 text-sm mt-2">
          <div>
            <div className="font-bold">CUSTOMER</div>
            <div className="font-bold">CC00015</div>
            <div className="font-bold">MAUA</div>
            <div>0723137293</div>
            <div>operations.maua@beisawa.co.ke</div>
          </div>
        </div>
        <div className="w-72 ml-auto text-sm">
          <div className="flex justify-between border-b border-dashed border-sky-400 py-3 font-normal">
            <span className="font-semibold">Quote Number</span>
            <span>PG1006042</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-sky-400 py-3">
            <span className="font-semibold">Document Date</span>
            <span>06/29/2022</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-sky-400 py-3">
            <span className="font-semibold">Valid Until</span>
            <span>07/29/2022</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-sky-400 py-3">
            <span className="font-semibold">Contact person</span>
            <span>Morang&apos;a Gesare Elivine</span>
          </div>
        </div>
      </div>

      {/* === Customer Details Divider === */}
      <div className="mb-1">
        <div className="font-bold border-b border-dashed border-sky-400 py-5"></div>
      </div>

      {/* === Items Table === */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">

          <thead className="bg-gray-200 text-gray-900 font-bold">
            <tr className="h-8 border-b-1 border-blue-400">
              <th className="px-2 py-3 border-gray-400">No</th>
              <th className="px-2 py-3 border-gray-400">Item Code</th>
              <th className="px-2 py-3 border-gray-400">Description</th>
              <th className="px-2 py-3 border-gray-400 text-center">
                Quantity
              </th>
              <th className="px-2 py-3 border-gray-400 text-right">Price</th>
              <th className="px-2 py-3 border-gray-400 text-right">Tax %</th>
              <th className="px-2 py-3 border-gray-400 text-right">Total</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-dashed border-sky-400">
              <td className="p-2">001</td>
              <td className="p-2">LP-ATS-100A</td>
              <td className="p-2">AUTOMATIC TRANSFER SWITCH 100A</td>
              <td className="p-2 text-center">1</td>
              <td className="p-2 text-right">120,000.00</td>
              <td className="p-2 text-right">16.00</td>
              <td className="p-2 text-right">120,000.00</td>
            </tr>
            {/* ... other rows ... */}
          </tbody>
        </table>
      </div>

      {/* Caption under table */}
      <div className="mt-3 bg-gray-100 px-3 py-2 text-center font-semibold">
        ATS AND INSTALLATION MATERIALS QUOTATION FOR A 55KVA CUMMINS GENERATOR.
      </div>

      {/* === Payment Term + Totals (side by side) === */}
      <div className="flex justify-between mt-10">
        {/* Left: Payment Term */}
        <div className="w-64">
          <div className="flex justify-between items-center border-b-[3px] border-blue-600 pb-1">
            <span className="flex items-center font-bold text-base">
              <span className="w-2 h-6 bg-yellow-500 inline-block mr-2"></span>
              Payment Term
            </span>
            <span className="text-base pr-10">Cash</span>{" "}
            {/* Added padding-right */}
          </div>
        </div>

        {/* Right: Totals */}
        <div className="w-72 text-sm">
          <div className="flex justify-between border-b border-dashed border-sky-400 py-3">
            <span className="font-semibold">Order Subtotal:</span>
            <span className="font-bold">KES 397,000.00</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-sky-400 py-3">
            <span className="font-semibold">Total Before Tax:</span>
            <span className="font-bold">KES 397,000.00</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-sky-400 py-3">
            <span className="font-semibold">Total Tax Amount:</span>
            <span className="font-bold">KES 63,520.00</span>
          </div>
          <div className="flex justify-between items-center border-b-[3px] border-blue-600 pb-1 mt-2">
            <span className="flex items-center font-semibold text-base">
              <span className="w-2 h-6 bg-yellow-500 inline-block mr-2"></span>
              Total Amount:
            </span>
            <span className="text-base font-bold">KES 460,520.00</span>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-black my-6" />

      {/* === Signatures Section === */}
      <div className="mt-10 text-sm">
        {/* First row */}
        <div className="flex justify-between items-end mb-12">
          <div className="flex items-end">
            <span className="mr-2">Prepared By</span>
            <span className="border-b-2 border-black w-48"></span>
          </div>
          <div className="flex items-end">
            <span className="mr-2">Date</span>
            <span className="border-b-2 border-black w-48"></span>
          </div>
        </div>

        {/* Second row */}
        <div className="flex justify-between items-end">
          <div className="flex items-end">
            <span className="mr-2">Approved By</span>
            <span className="border-b-2 border-black w-48"></span>
          </div>
          <div className="flex items-end">
            <span className="mr-2">Date</span>
            <span className="border-b-2 border-black w-48"></span>
          </div>
          <div className="flex items-end">
            <span className="mr-2">ID</span>
            <span className="border-b-2 border-black w-48"></span>
          </div>
        </div>
      </div>

      {/* === Disclaimer === */}
      <div className="text-xs mt-8">
        <p className="text-gray-700 mb-2">
          Payments above ksh 1M (One Million) or US$ 10,000/ is paid through
          Real (RTGS) with effect from OCT09. Bank Details STANDARD CHARTERED
          BANK, Moi Avenue, A/C 0104046293300, Currency: KES
        </p>
        <p className="mt-4 italic leading-relaxed text-gray-700">
          “As a result of the outbreak of the disease Covid-19 arising from the
          novel coronavirus, temporary delays in delivery, labor or services
          from Cummins and its sub-suppliers or subcontractors may occur. Among
          other factors, Cummins’ delivery obligations are subject to correct
          and punctual supply from our sub-suppliers or subcontractors, and
          Cummins reserves the right to make partial deliveries or modify its
          labor or service. While Cummins shall make every commercially
          reasonable effort to meet the delivery, service or completion
          obligations set forth herein, such dates are subject to change”
        </p>
      </div>

      {/* === Footer === */}
      <hr className="border-t-2 border-black my-4" />
      <div className="flex justify-between items-center text-xs text-gray-700 mt-6 font-bold">
        <span>Page</span>
        <span>1/1</span>
      </div>
    </div>
  );
};

export default SalesQuotationForm;
