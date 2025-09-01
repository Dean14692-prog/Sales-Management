// import React, { useState } from "react";
// import {
//   BarChart3,
//   TrendingUp,
//   Users,
//   DollarSign,
//   Target,
//   Calendar,
//   Phone,
//   Mail,
//   MessageSquare,
//   Award,
//   Clock,
//   CheckCircle,
//   AlertCircle,
//   ArrowUp,
//   ArrowDown,
//   Filter,
//   Search,
//   Bell,
//   Settings,
//   ChevronDown,
//   PieChart,
//   Activity,
//   FileText,
//   Upload,
//   Plus,
//   Edit,
//   Download,
//   Eye,
//   Trash2,
//   Calculator,
// } from "lucide-react";

// const SalesEngineerDashboard = () => {
//   const [timeRange, setTimeRange] = useState("This Month");
//   const [activeTab, setActiveTab] = useState("overview");
//   const [showQuotationModal, setShowQuotationModal] = useState(false);
//   const [selectedQuotation, setSelectedQuotation] = useState(null);

//   // Sample data
//   const kpiData = [
//     {
//       label: "Revenue Generated",
//       value: "KES 2.1M",
//       change: "+12.5%",
//       trend: "up",
//       icon: DollarSign,
//     },
//     {
//       label: "Demos Completed",
//       value: "47",
//       change: "+8.2%",
//       trend: "up",
//       icon: Target,
//     },
//     {
//       label: "Conversion Rate",
//       value: "68.4%",
//       change: "+3.1%",
//       trend: "up",
//       icon: TrendingUp,
//     },
//     {
//       label: "Quotations Sent",
//       value: "23",
//       change: "+5.2%",
//       trend: "up",
//       icon: FileText,
//     },
//   ];

//   const pipelineData = [
//     { stage: "Prospecting", count: 15, value: "KES 5.5M" },
//     { stage: "Qualification", count: 12, value: "KES 3.1M" },
//     { stage: "Proposal", count: 8, value: "KES 1.7M" },
//     { stage: "Negotiation", count: 5, value: "KES 1.2M" },
//     { stage: "Closed Won", count: 3, value: "KES 1.8M" },
//   ];

//   const recentActivities = [
//     {
//       type: "demo",
//       client: "TechCorp Solutions",
//       status: "completed",
//       time: "2 hours ago",
//     },
//     {
//       type: "proposal",
//       client: "Global Industries",
//       status: "pending",
//       time: "4 hours ago",
//     },
//     {
//       type: "follow-up",
//       client: "StartupXYZ",
//       status: "scheduled",
//       time: "1 day ago",
//     },
//     {
//       type: "demo",
//       client: "Enterprise Ltd",
//       status: "completed",
//       time: "2 days ago",
//     },
//   ];

//   // Sample quotations data based on your Cummins format
//   const quotations = [
//     {
//       id: "PG1006042",
//       customer: "MAUA",
//       contact: "Morang'a Gesare Elivine",
//       email: "operations.maua@beisawa.co.ke",
//       phone: "0723137293",
//       date: "06/29/2022",
//       validUntil: "07/29/2022",
//       status: "approved",
//       items: [
//         {
//           code: "LP-ATS-100A",
//           description: "AUTOMATIC TRANSFER SWITCH 100A",
//           qty: 1,
//           price: 120000,
//           tax: 16,
//         },
//         {
//           code: "LP-Cb-16mm/4C-A",
//           description: "CABLE ARMOURED 16MM 4 CORE",
//           qty: 40,
//           price: 1850,
//           tax: 16,
//         },
//         {
//           code: "LP-Cb-2.5MM/2C-A",
//           description: "CABLE ARMOURED 2.5MM 2 CORE",
//           qty: 60,
//           price: 350,
//           tax: 16,
//         },
//       ],
//       subtotal: 397000,
//       tax: 63520,
//       total: 460520,
//       paymentTerm: "Cash",
//     },
//     {
//       id: "PG1006043",
//       customer: "INDUSTRIAL CORP",
//       contact: "John Kamau",
//       email: "j.kamau@industrial.co.ke",
//       phone: "0712345678",
//       date: "08/15/2024",
//       validUntil: "09/15/2024",
//       status: "pending",
//       subtotal: 850000,
//       tax: 136000,
//       total: 986000,
//       paymentTerm: "RTGS",
//     },
//     {
//       id: "PG1006044",
//       customer: "TECH SOLUTIONS",
//       contact: "Mary Wanjiku",
//       email: "mary@techsol.co.ke",
//       phone: "0798765432",
//       date: "08/20/2024",
//       validUntil: "09/20/2024",
//       status: "draft",
//       subtotal: 245000,
//       tax: 39200,
//       total: 284200,
//       paymentTerm: "Cash",
//     },
//   ];

//   const upcomingTasks = [
//     {
//       task: "Product Demo for MegaCorp",
//       time: "2:00 PM Today",
//       priority: "high",
//     },
//     {
//       task: "Follow-up call with DataFlow Inc",
//       time: "10:00 AM Tomorrow",
//       priority: "medium",
//     },
//     {
//       task: "Proposal review with team",
//       time: "3:30 PM Tomorrow",
//       priority: "low",
//     },
//     {
//       task: "Technical presentation prep",
//       time: "Friday 9:00 AM",
//       priority: "high",
//     },
//   ];

//   const QuotationModal = () => {
//     if (!selectedQuotation) return null;

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//         <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-bold text-gray-900">
//                 Quotation Details
//               </h2>
//               <button
//                 onClick={() => setSelectedQuotation(null)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Quotation Header - Cummins Style */}
//             <div className="bg-gray-50 p-6 rounded-lg mb-6">
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <div className="mb-4">
//                     <h3 className="font-bold text-lg text-green-700">
//                       SALES QUOTATION
//                     </h3>
//                     <p className="text-sm text-gray-600">Cummins C&G Limited</p>
//                     <p className="text-sm text-gray-600">
//                       P.O. Box 20001-00200, Nairobi, Kenya
//                     </p>
//                     <p className="text-sm text-gray-600">TEL: +254-722209872</p>
//                   </div>
//                   <div>
//                     <p>
//                       <span className="font-medium">Quote Number:</span>{" "}
//                       {selectedQuotation.id}
//                     </p>
//                     <p>
//                       <span className="font-medium">Document Date:</span>{" "}
//                       {selectedQuotation.date}
//                     </p>
//                     <p>
//                       <span className="font-medium">Valid Until:</span>{" "}
//                       {selectedQuotation.validUntil}
//                     </p>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-medium mb-2">Customer Information</h4>
//                   <p>
//                     <span className="font-medium">Company:</span>{" "}
//                     {selectedQuotation.customer}
//                   </p>
//                   <p>
//                     <span className="font-medium">Contact:</span>{" "}
//                     {selectedQuotation.contact}
//                   </p>
//                   <p>
//                     <span className="font-medium">Email:</span>{" "}
//                     {selectedQuotation.email}
//                   </p>
//                   <p>
//                     <span className="font-medium">Phone:</span>{" "}
//                     {selectedQuotation.phone}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Items Table */}
//             {selectedQuotation.items && (
//               <div className="mb-6">
//                 <h4 className="font-medium mb-4">Items & Services</h4>
//                 <div className="overflow-x-auto">
//                   <table className="w-full border border-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="border border-gray-200 px-4 py-2 text-left">
//                           No
//                         </th>
//                         <th className="border border-gray-200 px-4 py-2 text-left">
//                           Item Code
//                         </th>
//                         <th className="border border-gray-200 px-4 py-2 text-left">
//                           Description
//                         </th>
//                         <th className="border border-gray-200 px-4 py-2 text-center">
//                           Quantity
//                         </th>
//                         <th className="border border-gray-200 px-4 py-2 text-right">
//                           Price
//                         </th>
//                         <th className="border border-gray-200 px-4 py-2 text-center">
//                           Tax %
//                         </th>
//                         <th className="border border-gray-200 px-4 py-2 text-right">
//                           Total
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {selectedQuotation.items.map((item, index) => (
//                         <tr key={index}>
//                           <td className="border border-gray-200 px-4 py-2">
//                             {String(index + 1).padStart(3, "0")}
//                           </td>
//                           <td className="border border-gray-200 px-4 py-2">
//                             {item.code}
//                           </td>
//                           <td className="border border-gray-200 px-4 py-2">
//                             {item.description}
//                           </td>
//                           <td className="border border-gray-200 px-4 py-2 text-center">
//                             {item.qty}
//                           </td>
//                           <td className="border border-gray-200 px-4 py-2 text-right">
//                             {item.price.toLocaleString()}.00
//                           </td>
//                           <td className="border border-gray-200 px-4 py-2 text-center">
//                             {item.tax}.00
//                           </td>
//                           <td className="border border-gray-200 px-4 py-2 text-right">
//                             {(item.qty * item.price).toLocaleString()}.00
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}

//             {/* Totals */}
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <div className="flex justify-end">
//                 <div className="w-64">
//                   <div className="flex justify-between py-1">
//                     <span>Order Subtotal:</span>
//                     <span>
//                       KES {selectedQuotation.subtotal.toLocaleString()}.00
//                     </span>
//                   </div>
//                   <div className="flex justify-between py-1">
//                     <span>Total Before Tax:</span>
//                     <span>
//                       KES {selectedQuotation.subtotal.toLocaleString()}.00
//                     </span>
//                   </div>
//                   <div className="flex justify-between py-1">
//                     <span>Total Tax Amount:</span>
//                     <span>KES {selectedQuotation.tax.toLocaleString()}.00</span>
//                   </div>
//                   <div className="flex justify-between py-1 font-bold border-t border-gray-300 mt-2 pt-2">
//                     <span>Total Amount:</span>
//                     <span>
//                       KES {selectedQuotation.total.toLocaleString()}.00
//                     </span>
//                   </div>
//                   <div className="flex justify-between py-1 mt-2">
//                     <span>Payment Term:</span>
//                     <span>{selectedQuotation.paymentTerm}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
//                 <BarChart3 className="w-5 h-5 text-white" />
//               </div>
//               <h1 className="text-xl font-bold text-gray-900">
//                 Sales Engineer Dashboard
//               </h1>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               />
//             </div>
//             <button className="p-2 text-gray-400 hover:text-gray-600 relative">
//               <Bell className="w-5 h-5" />
//               <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
//             </button>
//             <button className="p-2 text-gray-400 hover:text-gray-600">
//               <Settings className="w-5 h-5" />
//             </button>
//             <div className="flex items-center space-x-2">
//               <select
//                 value={timeRange}
//                 onChange={(e) => setTimeRange(e.target.value)}
//                 className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               >
//                 <option>This Week</option>
//                 <option>This Month</option>
//                 <option>This Quarter</option>
//                 <option>This Year</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
//           <nav className="p-4 space-y-2">
//             {[
//               { id: "overview", label: "Overview", icon: BarChart3 },
//               { id: "quotations", label: "Quotations", icon: FileText },
//               { id: "pipeline", label: "Sales Pipeline", icon: TrendingUp },
//               { id: "activities", label: "Activities", icon: Activity },
//               { id: "clients", label: "Clients", icon: Users },
//               { id: "reports", label: "Reports", icon: PieChart },
//             ].map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveTab(item.id)}
//                 className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
//                   activeTab === item.id
//                     ? "bg-green-50 text-green-700 border border-green-200"
//                     : "text-gray-600 hover:bg-gray-50"
//                 }`}
//               >
//                 <item.icon className="w-5 h-5" />
//                 <span>{item.label}</span>
//               </button>
//             ))}
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           {activeTab === "overview" && (
//             <>
//               {/* KPI Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//                 {kpiData.map((kpi, index) => (
//                   <div
//                     key={index}
//                     className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex items-center justify-between mb-4">
//                       <div
//                         className={`p-3 rounded-lg ${
//                           index === 0
//                             ? "bg-green-100"
//                             : index === 1
//                             ? "bg-blue-100"
//                             : index === 2
//                             ? "bg-purple-100"
//                             : "bg-orange-100"
//                         }`}
//                       >
//                         <kpi.icon
//                           className={`w-6 h-6 ${
//                             index === 0
//                               ? "text-green-600"
//                               : index === 1
//                               ? "text-blue-600"
//                               : index === 2
//                               ? "text-purple-600"
//                               : "text-orange-600"
//                           }`}
//                         />
//                       </div>
//                       <div
//                         className={`flex items-center space-x-1 text-sm ${
//                           kpi.trend === "up" ? "text-green-600" : "text-red-600"
//                         }`}
//                       >
//                         {kpi.trend === "up" ? (
//                           <ArrowUp className="w-4 h-4" />
//                         ) : (
//                           <ArrowDown className="w-4 h-4" />
//                         )}
//                         <span>{kpi.change}</span>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold text-gray-900 mb-1">
//                         {kpi.value}
//                       </p>
//                       <p className="text-sm text-gray-600">{kpi.label}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                 {/* Sales Pipeline */}
//                 <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-lg font-semibold text-gray-900">
//                       Sales Pipeline
//                     </h2>
//                     <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
//                       <Filter className="w-4 h-4" />
//                       <span>Filter</span>
//                     </button>
//                   </div>
//                   <div className="space-y-4">
//                     {pipelineData.map((stage, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
//                       >
//                         <div className="flex items-center space-x-4">
//                           <div
//                             className={`w-3 h-3 rounded-full ${
//                               index === 0
//                                 ? "bg-blue-500"
//                                 : index === 1
//                                 ? "bg-yellow-500"
//                                 : index === 2
//                                 ? "bg-orange-500"
//                                 : index === 3
//                                 ? "bg-red-500"
//                                 : "bg-green-500"
//                             }`}
//                           ></div>
//                           <div>
//                             <p className="font-medium text-gray-900">
//                               {stage.stage}
//                             </p>
//                             <p className="text-sm text-gray-600">
//                               {stage.count} opportunities
//                             </p>
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <p className="font-semibold text-gray-900">
//                             {stage.value}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Upcoming Tasks */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-lg font-semibold text-gray-900">
//                       Upcoming Tasks
//                     </h2>
//                     <Calendar className="w-5 h-5 text-gray-400" />
//                   </div>
//                   <div className="space-y-4">
//                     {upcomingTasks.map((task, index) => (
//                       <div key={index} className="flex items-start space-x-3">
//                         <div
//                           className={`w-2 h-2 rounded-full mt-2 ${
//                             task.priority === "high"
//                               ? "bg-red-500"
//                               : task.priority === "medium"
//                               ? "bg-yellow-500"
//                               : "bg-green-500"
//                           }`}
//                         ></div>
//                         <div className="flex-1">
//                           <p className="text-sm font-medium text-gray-900">
//                             {task.task}
//                           </p>
//                           <p className="text-xs text-gray-600 flex items-center space-x-1 mt-1">
//                             <Clock className="w-3 h-3" />
//                             <span>{task.time}</span>
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Recent Activities */}
//               <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-lg font-semibold text-gray-900">
//                     Recent Activities
//                   </h2>
//                   <button className="text-sm text-green-600 hover:text-green-700 font-medium">
//                     View All
//                   </button>
//                 </div>
//                 <div className="space-y-4">
//                   {recentActivities.map((activity, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
//                     >
//                       <div className="flex items-center space-x-4">
//                         <div
//                           className={`p-2 rounded-lg ${
//                             activity.type === "demo"
//                               ? "bg-blue-100"
//                               : activity.type === "proposal"
//                               ? "bg-purple-100"
//                               : "bg-green-100"
//                           }`}
//                         >
//                           {activity.type === "demo" && (
//                             <Target className="w-4 h-4 text-blue-600" />
//                           )}
//                           {activity.type === "proposal" && (
//                             <Mail className="w-4 h-4 text-purple-600" />
//                           )}
//                           {activity.type === "follow-up" && (
//                             <Phone className="w-4 h-4 text-green-600" />
//                           )}
//                         </div>
//                         <div>
//                           <p className="font-medium text-gray-900">
//                             {activity.type === "demo"
//                               ? "Demo"
//                               : activity.type === "proposal"
//                               ? "Proposal"
//                               : "Follow-up"}{" "}
//                             - {activity.client}
//                           </p>
//                           <p className="text-sm text-gray-600">
//                             {activity.time}
//                           </p>
//                         </div>
//                       </div>
//                       <div
//                         className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
//                           activity.status === "completed"
//                             ? "bg-green-100 text-green-700"
//                             : activity.status === "pending"
//                             ? "bg-yellow-100 text-yellow-700"
//                             : "bg-blue-100 text-blue-700"
//                         }`}
//                       >
//                         {activity.status === "completed" && (
//                           <CheckCircle className="w-3 h-3" />
//                         )}
//                         {activity.status === "pending" && (
//                           <AlertCircle className="w-3 h-3" />
//                         )}
//                         {activity.status === "scheduled" && (
//                           <Calendar className="w-3 h-3" />
//                         )}
//                         <span className="capitalize">{activity.status}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </>
//           )}

//           {activeTab === "quotations" && (
//             <div>
//               {/* Quotations Header */}
//               <div className="flex items-center justify-between mb-6">
//                 <div>
//                   <h1 className="text-2xl font-bold text-gray-900">
//                     Quotations Management
//                   </h1>
//                   <p className="text-gray-600">
//                     Create, manage, and track your sales quotations
//                   </p>
//                 </div>
//                 <div className="flex space-x-3">
//                   <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
//                     <Upload className="w-4 h-4" />
//                     <span>Upload Quotation</span>
//                   </button>
//                   <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
//                     <Plus className="w-4 h-4" />
//                     <span>New Quotation</span>
//                   </button>
//                 </div>
//               </div>

//               {/* Quotations Stats */}
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center space-x-3">
//                     <div className="p-3 bg-blue-100 rounded-lg">
//                       <FileText className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold text-gray-900">23</p>
//                       <p className="text-sm text-gray-600">Total Quotations</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center space-x-3">
//                     <div className="p-3 bg-yellow-100 rounded-lg">
//                       <Clock className="w-6 h-6 text-yellow-600" />
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold text-gray-900">8</p>
//                       <p className="text-sm text-gray-600">Pending</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center space-x-3">
//                     <div className="p-3 bg-green-100 rounded-lg">
//                       <CheckCircle className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold text-gray-900">12</p>
//                       <p className="text-sm text-gray-600">Approved</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center space-x-3">
//                     <div className="p-3 bg-purple-100 rounded-lg">
//                       <Calculator className="w-6 h-6 text-purple-600" />
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold text-gray-900">
//                         KES 1.7M
//                       </p>
//                       <p className="text-sm text-gray-600">Total Value</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Quotations Table */}
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-lg font-semibold text-gray-900">
//                       Recent Quotations
//                     </h2>
//                     <div className="flex items-center space-x-3">
//                       <div className="relative">
//                         <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
//                         <input
//                           type="text"
//                           placeholder="Search quotations..."
//                           className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                         />
//                       </div>
//                       <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
//                         <option>All Status</option>
//                         <option>Draft</option>
//                         <option>Pending</option>
//                         <option>Approved</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="overflow-x-auto">
//                     <table className="w-full">
//                       <thead>
//                         <tr className="border-b border-gray-200">
//                           <th className="text-left py-3 px-4 font-medium text-gray-600">
//                             Quote #
//                           </th>
//                           <th className="text-left py-3 px-4 font-medium text-gray-600">
//                             Customer
//                           </th>
//                           <th className="text-left py-3 px-4 font-medium text-gray-600">
//                             Contact
//                           </th>
//                           <th className="text-left py-3 px-4 font-medium text-gray-600">
//                             Date
//                           </th>
//                           <th className="text-left py-3 px-4 font-medium text-gray-600">
//                             Valid Until
//                           </th>
//                           <th className="text-left py-3 px-4 font-medium text-gray-600">
//                             Amount
//                           </th>
//                           <th className="text-left py-3 px-4 font-medium text-gray-600">
//                             Status
//                           </th>
//                           <th className="text-left py-3 px-4 font-medium text-gray-600">
//                             Actions
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {quotations.map((quote, index) => (
//                           <tr
//                             key={index}
//                             className="border-b border-gray-100 hover:bg-gray-50"
//                           >
//                             <td className="py-3 px-4">
//                               <span className="font-medium text-gray-900">
//                                 {quote.id}
//                               </span>
//                             </td>
//                             <td className="py-3 px-4">
//                               <div>
//                                 <p className="font-medium text-gray-900">
//                                   {quote.customer}
//                                 </p>
//                               </div>
//                             </td>
//                             <td className="py-3 px-4">
//                               <div>
//                                 <p className="text-sm text-gray-900">
//                                   {quote.contact}
//                                 </p>
//                                 <p className="text-xs text-gray-500">
//                                   {quote.email}
//                                 </p>
//                               </div>
//                             </td>
//                             <td className="py-3 px-4 text-sm text-gray-600">
//                               {quote.date}
//                             </td>
//                             <td className="py-3 px-4 text-sm text-gray-600">
//                               {quote.validUntil}
//                             </td>
//                             <td className="py-3 px-4">
//                               <span className="font-medium text-gray-900">
//                                 KES {quote.total.toLocaleString()}
//                               </span>
//                             </td>
//                             <td className="py-3 px-4">
//                               <span
//                                 className={`px-2 py-1 rounded-full text-xs font-medium ${
//                                   quote.status === "approved"
//                                     ? "bg-green-100 text-green-700"
//                                     : quote.status === "pending"
//                                     ? "bg-yellow-100 text-yellow-700"
//                                     : "bg-gray-100 text-gray-700"
//                                 }`}
//                               >
//                                 {quote.status.charAt(0).toUpperCase() +
//                                   quote.status.slice(1)}
//                               </span>
//                             </td>
//                             <td className="py-3 px-4">
//                               <div className="flex items-center space-x-2">
//                                 <button
//                                   onClick={() => setSelectedQuotation(quote)}
//                                   className="p-1 text-gray-400 hover:text-blue-600"
//                                   title="View"
//                                 >
//                                   <Eye className="w-4 h-4" />
//                                 </button>
//                                 <button
//                                   className="p-1 text-gray-400 hover:text-green-600"
//                                   title="Edit"
//                                 >
//                                   <Edit className="w-4 h-4" />
//                                 </button>
//                                 <button
//                                   className="p-1 text-gray-400 hover:text-purple-600"
//                                   title="Download"
//                                 >
//                                   <Download className="w-4 h-4" />
//                                 </button>
//                                 <button
//                                   className="p-1 text-gray-400 hover:text-red-600"
//                                   title="Delete"
//                                 >
//                                   <Trash2 className="w-4 h-4" />
//                                 </button>
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default SalesEngineerDashboard;

import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Calendar,
  Phone,
  Mail,
  MessageSquare,
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Filter,
  Search,
  Bell,
  Settings,
  ChevronDown,
  PieChart,
  Activity,
  FileText,
  Upload,
  Plus,
  Edit,
  Download,
  Eye,
  Trash2,
  Calculator,
  XCircle,
} from "lucide-react";

const SalesEngineerDashboard = () => {
  const [timeRange, setTimeRange] = useState("This Month");
  const [activeTab, setActiveTab] = useState("overview");
  const [showViewQuotationModal, setShowViewQuotationModal] = useState(false);
  const [showNewQuotationModal, setShowNewQuotationModal] = useState(false);
  const [selectedQuotation, setSelectedQuotation] = useState(null);

  // Sample data
  const kpiData = [
    {
      label: "Revenue Generated",
      value: "KES 2.1M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      label: "Demos Completed",
      value: "47",
      change: "+8.2%",
      trend: "up",
      icon: Target,
    },
    {
      label: "Conversion Rate",
      value: "68.4%",
      change: "+3.1%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      label: "Quotations Sent",
      value: "23",
      change: "+5.2%",
      trend: "up",
      icon: FileText,
    },
  ];

  const pipelineData = [
    { stage: "Prospecting", count: 15, value: "KES 5.5M" },
    { stage: "Qualification", count: 12, value: "KES 3.1M" },
    { stage: "Proposal", count: 8, value: "KES 1.7M" },
    { stage: "Negotiation", count: 5, value: "KES 1.2M" },
    { stage: "Closed Won", count: 3, value: "KES 1.8M" },
  ];

  const recentActivities = [
    {
      type: "demo",
      client: "TechCorp Solutions",
      status: "completed",
      time: "2 hours ago",
    },
    {
      type: "proposal",
      client: "Global Industries",
      status: "pending",
      time: "4 hours ago",
    },
    {
      type: "follow-up",
      client: "StartupXYZ",
      status: "scheduled",
      time: "1 day ago",
    },
    {
      type: "demo",
      client: "Enterprise Ltd",
      status: "completed",
      time: "2 days ago",
    },
  ];

  // Sample quotations data based on your Cummins format
  const quotations = [
    {
      id: "PG1006042",
      customer: "MAUA",
      contact: "Morang'a Gesare Elivine",
      email: "operations.maua@beisawa.co.ke",
      phone: "0723137293",
      date: "06/29/2022",
      validUntil: "07/29/2022",
      status: "approved",
      items: [
        {
          code: "LP-ATS-100A",
          description: "AUTOMATIC TRANSFER SWITCH 100A",
          qty: 1,
          price: 120000,
          tax: 16,
        },
        {
          code: "LP-Cb-16mm/4C-A",
          description: "CABLE ARMOURED 16MM 4 CORE",
          qty: 40,
          price: 1850,
          tax: 16,
        },
        {
          code: "LP-Cb-2.5MM/2C-A",
          description: "CABLE ARMOURED 2.5MM 2 CORE",
          qty: 60,
          price: 350,
          tax: 16,
        },
      ],
      subtotal: 397000,
      tax: 63520,
      total: 460520,
      paymentTerm: "Cash",
    },
    {
      id: "PG1006043",
      customer: "INDUSTRIAL CORP",
      contact: "John Kamau",
      email: "j.kamau@industrial.co.ke",
      phone: "0712345678",
      date: "08/15/2024",
      validUntil: "09/15/2024",
      status: "pending",
      subtotal: 850000,
      tax: 136000,
      total: 986000,
      paymentTerm: "RTGS",
    },
    {
      id: "PG1006044",
      customer: "TECH SOLUTIONS",
      contact: "Mary Wanjiku",
      email: "mary@techsol.co.ke",
      phone: "0798765432",
      date: "08/20/2024",
      validUntil: "09/20/2024",
      status: "draft",
      subtotal: 245000,
      tax: 39200,
      total: 284200,
      paymentTerm: "Cash",
    },
  ];

  const upcomingTasks = [
    {
      task: "Product Demo for MegaCorp",
      time: "2:00 PM Today",
      priority: "high",
    },
    {
      task: "Follow-up call with DataFlow Inc",
      time: "10:00 AM Tomorrow",
      priority: "medium",
    },
    {
      task: "Proposal review with team",
      time: "3:30 PM Tomorrow",
      priority: "low",
    },
    {
      task: "Technical presentation prep",
      time: "Friday 9:00 AM",
      priority: "high",
    },
  ];

  const handleViewQuotation = (quote) => {
    setSelectedQuotation(quote);
    setShowViewQuotationModal(true);
  };

  const handleCreateQuotationClick = () => {
    setShowNewQuotationModal(true);
  };

  const ViewQuotationModal = () => {
    if (!selectedQuotation) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Quotation Details
              </h2>
              <button
                onClick={() => setShowViewQuotationModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            {/* Quotation Header - Cummins Style */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <h3 className="font-bold text-lg text-green-700">
                      SALES QUOTATION
                    </h3>
                    <p className="text-sm text-gray-600">Cummins C&G Limited</p>
                    <p className="text-sm text-gray-600">
                      P.O. Box 20001-00200, Nairobi, Kenya
                    </p>
                    <p className="text-sm text-gray-600">TEL: +254-722209872</p>
                  </div>
                  <div>
                    <p>
                      <span className="font-medium">Quote Number:</span>{" "}
                      {selectedQuotation.id}
                    </p>
                    <p>
                      <span className="font-medium">Document Date:</span>{" "}
                      {selectedQuotation.date}
                    </p>
                    <p>
                      <span className="font-medium">Valid Until:</span>{" "}
                      {selectedQuotation.validUntil}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Customer Information</h4>
                  <p>
                    <span className="font-medium">Company:</span>{" "}
                    {selectedQuotation.customer}
                  </p>
                  <p>
                    <span className="font-medium">Contact:</span>{" "}
                    {selectedQuotation.contact}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {selectedQuotation.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {selectedQuotation.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Items Table */}
            {selectedQuotation.items && (
              <div className="mb-6">
                <h4 className="font-medium mb-4">Items & Services</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-200 px-4 py-2 text-left">
                          No
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-left">
                          Item Code
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-left">
                          Description
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-center">
                          Quantity
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-right">
                          Price
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-center">
                          Tax %
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-right">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedQuotation.items.map((item, index) => (
                        <tr key={index}>
                          <td className="border border-gray-200 px-4 py-2">
                            {String(index + 1).padStart(3, "0")}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {item.code}
                          </td>
                          <td className="border border-gray-200 px-4 py-2">
                            {item.description}
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-center">
                            {item.qty}
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-right">
                            {item.price.toLocaleString()}.00
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-center">
                            {item.tax}.00
                          </td>
                          <td className="border border-gray-200 px-4 py-2 text-right">
                            {(item.qty * item.price).toLocaleString()}.00
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Totals */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-end">
                <div className="w-64">
                  <div className="flex justify-between py-1">
                    <span>Order Subtotal:</span>
                    <span>
                      KES {selectedQuotation.subtotal.toLocaleString()}.00
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Total Before Tax:</span>
                    <span>
                      KES {selectedQuotation.subtotal.toLocaleString()}.00
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Total Tax Amount:</span>
                    <span>KES {selectedQuotation.tax.toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between py-1 font-bold border-t border-gray-300 mt-2 pt-2">
                    <span>Total Amount:</span>
                    <span>
                      KES {selectedQuotation.total.toLocaleString()}.00
                    </span>
                  </div>
                  <div className="flex justify-between py-1 mt-2">
                    <span>Payment Term:</span>
                    <span>{selectedQuotation.paymentTerm}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const NewQuotationModal = () => {
    const [newQuotation, setNewQuotation] = useState({
      id: "",
      customer: "",
      contact: "",
      email: "",
      phone: "",
      date: new Date().toISOString().slice(0, 10),
      validUntil: "",
      paymentTerm: "",
      items: [{ code: "", description: "", qty: 0, price: 0, tax: 16 }],
    });

    const calculateTotals = () => {
      let subtotal = 0;
      let totalTax = 0;
      newQuotation.items.forEach((item) => {
        const itemTotal = item.qty * item.price;
        subtotal += itemTotal;
        totalTax += itemTotal * (item.tax / 100);
      });
      return { subtotal, totalTax, total: subtotal + totalTax };
    };

    const totals = calculateTotals();

    const handleInputChange = (e, field) => {
      const { value } = e.target;
      setNewQuotation((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

    const handleItemChange = (e, index, field) => {
      const { value } = e.target;
      const updatedItems = newQuotation.items.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]:
                field === "qty" || field === "price" || field === "tax"
                  ? parseFloat(value) || 0
                  : value,
            }
          : item
      );
      setNewQuotation((prev) => ({ ...prev, items: updatedItems }));
    };

    const handleAddItem = () => {
      setNewQuotation((prev) => ({
        ...prev,
        items: [
          ...prev.items,
          { code: "", description: "", qty: 0, price: 0, tax: 16 },
        ],
      }));
    };

    const handleRemoveItem = (index) => {
      if (newQuotation.items.length > 1) {
        setNewQuotation((prev) => ({
          ...prev,
          items: prev.items.filter((_, i) => i !== index),
        }));
      }
    };

    const handleCreateQuotation = () => {
      // Here you would send the `newQuotation` data to your backend API
      // For now, we'll just log it and close the modal
      console.log("New Quotation Data:", {
        ...newQuotation,
        subtotal: totals.subtotal,
        tax: totals.totalTax,
        total: totals.total,
      });
      setShowNewQuotationModal(false);
      // Optional: Show a toast notification for success
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Create New Quotation
              </h2>
              <button
                onClick={() => setShowNewQuotationModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {/* Customer and Quote Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Customer Information</h4>
                    <input
                      type="text"
                      placeholder="Customer Company"
                      className="w-full p-2 border rounded-lg"
                      value={newQuotation.customer}
                      onChange={(e) => handleInputChange(e, "customer")}
                    />
                    <input
                      type="text"
                      placeholder="Contact Person"
                      className="w-full p-2 border rounded-lg mt-2"
                      value={newQuotation.contact}
                      onChange={(e) => handleInputChange(e, "contact")}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-2 border rounded-lg mt-2"
                      value={newQuotation.email}
                      onChange={(e) => handleInputChange(e, "email")}
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full p-2 border rounded-lg mt-2"
                      value={newQuotation.phone}
                      onChange={(e) => handleInputChange(e, "phone")}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Quotation Details</h4>
                    <input
                      type="text"
                      placeholder="Quote Number"
                      className="w-full p-2 border rounded-lg"
                      value={newQuotation.id}
                      onChange={(e) => handleInputChange(e, "id")}
                    />
                    <label className="block text-sm text-gray-600 mt-2">
                      Document Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded-lg"
                      value={newQuotation.date}
                      onChange={(e) => handleInputChange(e, "date")}
                    />
                    <label className="block text-sm text-gray-600 mt-2">
                      Valid Until
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded-lg"
                      value={newQuotation.validUntil}
                      onChange={(e) => handleInputChange(e, "validUntil")}
                    />
                    <select
                      className="w-full p-2 border rounded-lg mt-2"
                      value={newQuotation.paymentTerm}
                      onChange={(e) => handleInputChange(e, "paymentTerm")}
                    >
                      <option value="">Payment Term</option>
                      <option value="Cash">Cash</option>
                      <option value="RTGS">RTGS</option>
                      <option value="Credit">Credit</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div>
                <h4 className="font-medium mb-4">Items & Services</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-200 px-4 py-2 text-left">
                          Item Code
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-left">
                          Description
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-center">
                          Quantity
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-right">
                          Price (KES)
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-center">
                          Tax %
                        </th>
                        <th className="border border-gray-200 px-4 py-2 text-right">
                          Total (KES)
                        </th>
                        <th className="border border-gray-200 px-4 py-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {newQuotation.items.map((item, index) => (
                        <tr key={index}>
                          <td className="border border-gray-200 p-2">
                            <input
                              type="text"
                              className="w-full p-1 border rounded"
                              value={item.code}
                              onChange={(e) =>
                                handleItemChange(e, index, "code")
                              }
                            />
                          </td>
                          <td className="border border-gray-200 p-2">
                            <input
                              type="text"
                              className="w-full p-1 border rounded"
                              value={item.description}
                              onChange={(e) =>
                                handleItemChange(e, index, "description")
                              }
                            />
                          </td>
                          <td className="border border-gray-200 p-2">
                            <input
                              type="number"
                              className="w-full p-1 border rounded"
                              value={item.qty}
                              onChange={(e) =>
                                handleItemChange(e, index, "qty")
                              }
                              min="0"
                            />
                          </td>
                          <td className="border border-gray-200 p-2">
                            <input
                              type="number"
                              className="w-full p-1 border rounded"
                              value={item.price}
                              onChange={(e) =>
                                handleItemChange(e, index, "price")
                              }
                              min="0"
                            />
                          </td>
                          <td className="border border-gray-200 p-2">
                            <input
                              type="number"
                              className="w-full p-1 border rounded"
                              value={item.tax}
                              onChange={(e) =>
                                handleItemChange(e, index, "tax")
                              }
                              min="0"
                              max="100"
                            />
                          </td>
                          <td className="border border-gray-200 p-2 text-right font-medium">
                            {(item.qty * item.price).toLocaleString()}
                          </td>
                          <td className="border border-gray-200 p-2 text-center">
                            {newQuotation.items.length > 1 && (
                              <button
                                onClick={() => handleRemoveItem(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  onClick={handleAddItem}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Item</span>
                </button>
              </div>

              {/* Totals and Actions */}
              <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-6 rounded-lg">
                <div className="w-full md:w-1/3">
                  <h4 className="font-medium mb-2">Summary</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Order Subtotal:</span>
                      <span>KES {totals.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Before Tax:</span>
                      <span>KES {totals.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Tax Amount:</span>
                      <span>KES {totals.totalTax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t border-gray-300">
                      <span>Total Amount:</span>
                      <span>KES {totals.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-auto mt-4 md:mt-0">
                  <button
                    onClick={handleCreateQuotation}
                    className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Create Quotation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Sales Engineer Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Settings className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>This Week</option>
                <option>This Month</option>
                <option>This Quarter</option>
                <option>This Year</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "quotations", label: "Quotations", icon: FileText },
              { id: "pipeline", label: "Sales Pipeline", icon: TrendingUp },
              { id: "activities", label: "Activities", icon: Activity },
              { id: "clients", label: "Clients", icon: Users },
              { id: "reports", label: "Reports", icon: PieChart },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <>
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {kpiData.map((kpi, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          index === 0
                            ? "bg-green-100"
                            : index === 1
                            ? "bg-blue-100"
                            : index === 2
                            ? "bg-purple-100"
                            : "bg-orange-100"
                        }`}
                      >
                        <kpi.icon
                          className={`w-6 h-6 ${
                            index === 0
                              ? "text-green-600"
                              : index === 1
                              ? "text-blue-600"
                              : index === 2
                              ? "text-purple-600"
                              : "text-orange-600"
                          }`}
                        />
                      </div>
                      <div
                        className={`flex items-center space-x-1 text-sm ${
                          kpi.trend === "up" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {kpi.trend === "up" ? (
                          <ArrowUp className="w-4 h-4" />
                        ) : (
                          <ArrowDown className="w-4 h-4" />
                        )}
                        <span>{kpi.change}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 mb-1">
                        {kpi.value}
                      </p>
                      <p className="text-sm text-gray-600">{kpi.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Sales Pipeline */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Sales Pipeline
                    </h2>
                    <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
                      <Filter className="w-4 h-4" />
                      <span>Filter</span>
                    </button>
                  </div>
                  <div className="space-y-4">
                    {pipelineData.map((stage, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              index === 0
                                ? "bg-blue-500"
                                : index === 1
                                ? "bg-yellow-500"
                                : index === 2
                                ? "bg-orange-500"
                                : index === 3
                                ? "bg-red-500"
                                : "bg-green-500"
                            }`}
                          ></div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {stage.stage}
                            </p>
                            <p className="text-sm text-gray-600">
                              {stage.count} opportunities
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            {stage.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Tasks */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Upcoming Tasks
                    </h2>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="space-y-4">
                    {upcomingTasks.map((task, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            task.priority === "high"
                              ? "bg-red-500"
                              : task.priority === "medium"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        ></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {task.task}
                          </p>
                          <p className="text-xs text-gray-600 flex items-center space-x-1 mt-1">
                            <Clock className="w-3 h-3" />
                            <span>{task.time}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activities */}
              <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Recent Activities
                  </h2>
                  <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-2 rounded-lg ${
                            activity.type === "demo"
                              ? "bg-blue-100"
                              : activity.type === "proposal"
                              ? "bg-purple-100"
                              : "bg-green-100"
                          }`}
                        >
                          {activity.type === "demo" && (
                            <Target className="w-4 h-4 text-blue-600" />
                          )}
                          {activity.type === "proposal" && (
                            <Mail className="w-4 h-4 text-purple-600" />
                          )}
                          {activity.type === "follow-up" && (
                            <Phone className="w-4 h-4 text-green-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {activity.type === "demo"
                              ? "Demo"
                              : activity.type === "proposal"
                              ? "Proposal"
                              : "Follow-up"}{" "}
                            - {activity.client}
                          </p>
                          <p className="text-sm text-gray-600">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
                          activity.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : activity.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {activity.status === "completed" && (
                          <CheckCircle className="w-3 h-3" />
                        )}
                        {activity.status === "pending" && (
                          <AlertCircle className="w-3 h-3" />
                        )}
                        {activity.status === "scheduled" && (
                          <Calendar className="w-3 h-3" />
                        )}
                        <span className="capitalize">{activity.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "quotations" && (
            <div>
              {/* Quotations Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Quotations Management
                  </h1>
                  <p className="text-gray-600">
                    Create, manage, and track your sales quotations
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <Upload className="w-4 h-4" />
                    <span>Upload Quotation</span>
                  </button>
                  <button
                    onClick={handleCreateQuotationClick}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>New Quotation</span>
                  </button>
                </div>
              </div>

              {/* Quotations Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">23</p>
                      <p className="text-sm text-gray-600">Total Quotations</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">8</p>
                      <p className="text-sm text-gray-600">Pending</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">12</p>
                      <p className="text-sm text-gray-600">Approved</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Calculator className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        KES 1.7M
                      </p>
                      <p className="text-sm text-gray-600">Total Value</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quotations Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Recent Quotations
                    </h2>
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="Search quotations..."
                          className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>All Status</option>
                        <option>Draft</option>
                        <option>Pending</option>
                        <option>Approved</option>
                      </select>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Quote #
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Customer
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Contact
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Date
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Valid Until
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Amount
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Status
                          </th>
                          <th className="text-left py-3 px-4 font-medium text-gray-600">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {quotations.map((quote, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-100 hover:bg-gray-50"
                          >
                            <td className="py-3 px-4">
                              <span className="font-medium text-gray-900">
                                {quote.id}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div>
                                <p className="font-medium text-gray-900">
                                  {quote.customer}
                                </p>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div>
                                <p className="text-sm text-gray-900">
                                  {quote.contact}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {quote.email}
                                </p>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600">
                              {quote.date}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600">
                              {quote.validUntil}
                            </td>
                            <td className="py-3 px-4">
                              <span className="font-medium text-gray-900">
                                KES {quote.total.toLocaleString()}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  quote.status === "approved"
                                    ? "bg-green-100 text-green-700"
                                    : quote.status === "pending"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {quote.status.charAt(0).toUpperCase() +
                                  quote.status.slice(1)}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleViewQuotation(quote)}
                                  className="p-1 text-gray-400 hover:text-blue-600"
                                  title="View"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button
                                  className="p-1 text-gray-400 hover:text-green-600"
                                  title="Edit"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  className="p-1 text-gray-400 hover:text-purple-600"
                                  title="Download"
                                >
                                  <Download className="w-4 h-4" />
                                </button>
                                <button
                                  className="p-1 text-gray-400 hover:text-red-600"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      {showViewQuotationModal && <ViewQuotationModal />}
      {showNewQuotationModal && <NewQuotationModal />}
    </div>
  );
};

export default SalesEngineerDashboard;