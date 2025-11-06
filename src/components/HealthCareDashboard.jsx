import React, { useState } from 'react';
import { Heart, Users, Calendar, AlertCircle, TrendingUp, Activity, Bed, User, Menu, X, LogOut, Settings, Bell, BarChart3, Filter, Download, Plus, Pill, Search, Phone, Mail, MoreVertical, Stethoscope } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const financialData = [
  { month: 'Jan', revenue: 4500000, expenses: 2800000, target: 4200000, margin: '37.8%' },
  { month: 'Feb', revenue: 5100000, expenses: 2950000, target: 4500000, margin: '42.2%' },
  { month: 'Mar', revenue: 4800000, expenses: 3100000, target: 4800000, margin: '35.4%' },
  { month: 'Apr', revenue: 5600000, expenses: 3200000, target: 5000000, margin: '42.9%' },
  { month: 'May', revenue: 6200000, expenses: 3450000, target: 5500000, margin: '44.4%' },
  { month: 'Jun', revenue: 5900000, expenses: 3300000, target: 5200000, margin: '44.1%' },
];

const departmentAnalytics = [
  { dept: 'Cardiology', revenue: 1250000, growth: 12.5, satisfaction: 4.5, occupancy: 75, critical: 4, readmission: 5.2, avgWait: 25 },
  { dept: 'Orthopedics', revenue: 980000, growth: 8.3, satisfaction: 4.3, occupancy: 68, critical: 2, readmission: 3.1, avgWait: 18 },
  { dept: 'Neurology', revenue: 760000, growth: 15.2, satisfaction: 4.1, occupancy: 70, critical: 3, readmission: 4.5, avgWait: 30 },
  { dept: 'Pediatrics', revenue: 540000, growth: 6.7, satisfaction: 4.6, occupancy: 78, critical: 1, readmission: 2.3, avgWait: 20 },
  { dept: 'General Medicine', revenue: 2100000, growth: 10.1, satisfaction: 4.2, occupancy: 79, critical: 10, readmission: 6.1, avgWait: 22 },
  { dept: 'Emergency', revenue: 3200000, growth: 18.9, satisfaction: 4.0, occupancy: 80, critical: 25, readmission: 8.0, avgWait: 10 },
  { dept: 'Oncology', revenue: 980000, growth: 22.1, satisfaction: 4.0, occupancy: 73, critical: 6, readmission: 7.5, avgWait: 45 },
  { dept: 'ENT', revenue: 420000, growth: 5.2, satisfaction: 4.4, occupancy: 74, critical: 1, readmission: 2.0, avgWait: 15 },
];

const patientData = [
  { id: 'P001', name: 'Rahul Mehta', age: 45, gender: 'M', dept: 'General Medicine', doctor: 'Dr. Vikram Rao', status: 'Discharged', severity: 'High', room: 'D101', bp: '140/90', hr: 78, temp: 98.6, spo2: 96, admission: '2025-09-05', discharge: '2025-10-20', diagnosis: 'Hypertension', insurance: 'Star Health' },
  { id: 'P002', name: 'Sneha Kumar', age: 32, gender: 'F', dept: 'Cardiology', doctor: 'Dr. Rohit Sharma', status: 'In Treatment', severity: 'Medium', room: 'C204', bp: '130/85', hr: 86, temp: 99.1, spo2: 97, admission: '2025-10-12', discharge: null, diagnosis: 'Chest Pain', insurance: 'ICICI Lombard' },
  { id: 'P003', name: 'Amit Sharma', age: 58, gender: 'M', dept: 'Cardiology', doctor: 'Dr. Priya Singh', status: 'In Treatment', severity: 'High', room: 'C102', bp: '150/95', hr: 92, temp: 98.9, spo2: 95, admission: '2025-10-25', discharge: null, diagnosis: 'Post MI', insurance: 'HDFC ERGO' },
  { id: 'P004', name: 'Pooja Verma', age: 27, gender: 'F', dept: 'Pediatrics', doctor: 'Dr. Ananya Gupta', status: 'In Treatment', severity: 'Low', room: 'P303', bp: '110/70', hr: 78, temp: 99.0, spo2: 98, admission: '2025-11-01', discharge: null, diagnosis: 'Fever & Cold', insurance: 'Star Health' },
  { id: 'P005', name: 'Rakesh Gupta', age: 39, gender: 'M', dept: 'General Medicine', doctor: 'Dr. Arjun Bose', status: 'Discharged', severity: 'Low', room: 'G210', bp: '118/76', hr: 72, temp: 98.4, spo2: 99, admission: '2025-08-20', discharge: '2025-10-05', diagnosis: 'Gastritis', insurance: 'Apollo Munich' },
];

const staffData = [
  { id: 'S001', name: 'Dr. Rohit Sharma', role: 'Cardiologist', dept: 'Cardiology', experience: 15, patients: 120, shift: 'Morning', status: 'On Duty', rating: 4.7, phone: '9810010101', email: 'rohit.sharma@hospital.in', specialty: 'Interventional Cardiology' },
  { id: 'S002', name: 'Dr. Priya Singh', role: 'Cardiologist', dept: 'Cardiology', experience: 10, patients: 80, shift: 'Evening', status: 'On Duty', rating: 4.5, phone: '9810010102', email: 'priya.singh@hospital.in', specialty: 'Non-invasive Cardiology' },
  { id: 'S003', name: 'Dr. Anil Verma', role: 'Orthopedic Surgeon', dept: 'Orthopedics', experience: 12, patients: 95, shift: 'Morning', status: 'On Duty', rating: 4.6, phone: '9810010103', email: 'anil.verma@hospital.in', specialty: 'Joint Replacement' },
  { id: 'S005', name: 'Dr. Sanjay Kumar', role: 'Neurologist', dept: 'Neurology', experience: 14, patients: 65, shift: 'Morning', status: 'On Duty', rating: 4.3, phone: '9810010105', email: 'sanjay.kumar@hospital.in', specialty: 'Stroke' },
  { id: 'S006', name: 'Dr. Ananya Gupta', role: 'Pediatrician', dept: 'Pediatrics', experience: 8, patients: 150, shift: 'Morning', status: 'On Duty', rating: 4.8, phone: '9810010106', email: 'ananya.gupta@hospital.in', specialty: 'Neonatology' },
];

const appointmentData = [
  { id: 'APPT001', patient: 'Rahul Mehta', doctor: 'Dr. Rohit Sharma', date: '2025-11-04', time: '09:30', dept: 'Cardiology', type: 'Consultation', status: 'Confirmed', duration: 30, room: 'C101' },
  { id: 'APPT002', patient: 'Sneha Kumar', doctor: 'Dr. Priya Singh', date: '2025-11-04', time: '10:30', dept: 'Cardiology', type: 'Follow-up', status: 'Confirmed', duration: 30, room: 'C102' },
  { id: 'APPT003', patient: 'Amit Sharma', doctor: 'Dr. Rohit Sharma', date: '2025-11-04', time: '11:00', dept: 'Cardiology', type: 'Review', status: 'Pending', duration: 45, room: 'C104' },
  { id: 'APPT004', patient: 'Pooja Verma', doctor: 'Dr. Ananya Gupta', date: '2025-11-04', time: '14:00', dept: 'Pediatrics', type: 'Consultation', status: 'Confirmed', duration: 20, room: 'P201' },
];

const vitalAlerts = [
  { id: 'A001', patient: 'Suresh Khan (P011)', type: 'Tachycardia', message: 'Heart rate >100 bpm', severity: 'High', time: '2025-11-02 14:22', resolved: false },
  { id: 'A002', patient: 'Yusuf Ansari (P019)', type: 'Hypoxia', message: 'Oxygen saturation 89%', severity: 'High', time: '2025-11-03 09:10', resolved: false },
];

const qualityMetrics = [
  { metric: 'Patient Satisfaction', value: 4.3, target: 4.5, unit: '/5', status: 'good', trend: '+2%' },
  { metric: 'Avg Wait Time', value: 22, target: 20, unit: 'min', status: 'fair', trend: '-5%' },
];

const departmentStats = [
  { name: 'Emergency', patients: 1200, capacity: 150, occupancy: 80, doctors: 15, nurses: 30, critical: 25, revenue: 3200000 },
  { name: 'General Medicine', patients: 800, capacity: 120, occupancy: 79, doctors: 12, nurses: 24, critical: 10, revenue: 2100000 },
];

const stats = [
  { label: 'Total Patients', value: '10,200', icon: Users, color: 'from-blue-600 to-blue-400', trend: '+12%', trendUp: true },
  { label: 'Active Patients', value: '320', icon: Activity, color: 'from-emerald-600 to-emerald-400', trend: '+8%', trendUp: true },
  { label: 'Appointments', value: '40/450', icon: Calendar, color: 'from-purple-600 to-purple-400', trend: '+15%', trendUp: true },
  { label: 'Critical Cases', value: '12', icon: AlertCircle, color: 'from-red-600 to-red-400', trend: '-2%', trendUp: false },
];

const menuItems = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'departments', label: 'Departments', icon: Bed },
  { id: 'patients', label: 'Patients', icon: Users },
  { id: 'appointments', label: 'Appointments', icon: Calendar },
  { id: 'staff', label: 'Medical Staff', icon: Stethoscope },
  { id: 'vitals', label: 'Vitals & Alerts', icon: Activity },
  { id: 'analytics', label: 'Analytics', icon: TrendingUp },
  { id: 'financial', label: 'Financial', icon: BarChart3 },
];

const StatCard = ({ stat }) => {
  const Icon = stat.icon;
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
          <p className="text-4xl font-bold text-gray-900 mb-3">{stat.value}</p>
          <div className={`inline-flex items-center space-x-1 text-sm font-semibold ${stat.trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
            <TrendingUp size={14} /> <span>{stat.trend}</span>
          </div>
        </div>
        <div className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl shadow-lg`}>
          <Icon className="text-white" size={32} />
        </div>
      </div>
    </div>
  );
};

const DepartmentCard = ({ dept }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100">
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-lg font-bold text-gray-900">{dept.name}</h3>
      <span className={`px-3 py-1 rounded-full text-xs font-bold ${dept.critical > 10 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
        {dept.critical} Critical
      </span>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div><p className="text-xs text-gray-500 mb-1">Patients</p><p className="text-2xl font-bold">{dept.patients}</p></div>
      <div><p className="text-xs text-gray-500 mb-1">Occupancy</p><p className="text-2xl font-bold text-blue-600">{dept.occupancy}%</p></div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: `${dept.occupancy}%` }}></div>
    </div>
  </div>
);

const PatientRow = ({ patient }) => (
  <tr className="border-b border-gray-100 hover:bg-gray-50">
    <td className="px-6 py-4"><div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-blue-400 text-white text-xs flex items-center justify-center font-bold">{patient.name[0]}</div>
      <div><p className="font-semibold text-sm">{patient.name}</p><p className="text-xs text-gray-500">{patient.id}</p></div>
    </div></td>
    <td className="px-6 py-4 text-sm">{patient.age}y, {patient.gender}</td>
    <td className="px-6 py-4"><span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-700">{patient.dept}</span></td>
    <td className="px-6 py-4 text-sm">{patient.doctor}</td>
    <td className="px-6 py-4 text-xs"><p>BP: {patient.bp}</p><p>HR: {patient.hr}</p></td>
    <td className="px-6 py-4"><span className={`px-2 py-1 text-xs rounded font-bold ${patient.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{patient.severity}</span></td>
    <td className="px-6 py-4 text-sm"><span className={`px-2 py-1 rounded text-xs ${patient.status === 'In Treatment' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100'}`}>{patient.status}</span></td>
  </tr>
);

const StaffCard = ({ staff }) => (
  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
    <div className="flex justify-between items-start mb-4">
      <div><h3 className="font-bold">{staff.name}</h3><p className="text-xs text-gray-500">{staff.specialty}</p></div>
      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold">{staff.rating}★</span>
    </div>
    <div className="space-y-2 text-sm">
      <div className="flex justify-between"><span className="text-gray-600">{staff.role}</span><span className="font-semibold">{staff.dept}</span></div>
      <div className="flex justify-between"><span className="text-gray-600">Exp</span><span className="font-semibold">{staff.experience}yrs</span></div>
      <div className="flex justify-between"><span className="text-gray-600">Patients</span><span className="font-semibold">{staff.patients}</span></div>
    </div>
  </div>
);

export default function HealthcareDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* SIDEBAR */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-24'} bg-gradient-to-b from-slate-950 to-slate-800 text-white transition-all shadow-2xl fixed h-screen overflow-y-auto z-50`}>
        <div className="p-6 flex items-center justify-between sticky top-0 bg-slate-950">
          {sidebarOpen && <div className="flex items-center space-x-2"><Heart className="text-cyan-400" size={24} /><div><h1 className="font-black text-lg">MediCare</h1><p className="text-xs text-gray-400">Hospital</p></div></div>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>{sidebarOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        <nav className="mt-8 space-y-2 px-4">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition ${activeTab === item.id ? 'bg-cyan-600 text-white' : 'hover:bg-slate-700 text-gray-300'}`}>
                <Icon size={20} /> {sidebarOpen && <span className="text-sm font-semibold">{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* MAIN */}
      <div className={`flex-1 flex flex-col ${sidebarOpen ? 'ml-72' : 'ml-24'}`}>
        {/* HEADER */}
        <div className="bg-white shadow sticky top-0 border-b p-6 flex justify-between items-center">
          <div><h2 className="text-3xl font-black">Hospital Dashboard</h2><p className="text-sm text-gray-500">Real-time monitoring</p></div>
          <div className="flex items-center space-x-4">
            <Search size={20} className="text-gray-500" />
            <Bell size={20} className="text-gray-500" />
            <Download size={20} className="text-gray-500" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-auto p-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">{stats.map((s, i) => <StatCard key={i} stat={s} />)}</div>
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 bg-white rounded-xl p-6 shadow">
                  <h3 className="text-lg font-bold mb-4">Financial Overview</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={financialData}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Area type="monotone" dataKey="revenue" fill="#3b82f6" stroke="#3b82f6" />
                      <Area type="monotone" dataKey="expenses" fill="#ef4444" stroke="#ef4444" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-white rounded-xl p-6 shadow">
                  <h3 className="text-lg font-bold mb-4">Department Revenue</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={departmentAnalytics} cx="50%" cy="50%" outerRadius={80} dataKey="revenue">
                        {departmentAnalytics.map((_, i) => <Cell key={i} fill={['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#ef4444', '#06b6d4', '#14b8a6'][i]} />)}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'departments' && (
            <div><h2 className="text-2xl font-black mb-6">Departments</h2><div className="grid grid-cols-2 gap-4">{departmentStats.map((d, i) => <DepartmentCard key={i} dept={d} />)}</div></div>
          )}

          {activeTab === 'patients' && (
            <div><h2 className="text-2xl font-black mb-6">Patients</h2><div className="bg-white rounded-xl overflow-hidden"><table className="w-full"><thead className="bg-gray-100"><tr><th className="px-6 py-3 text-left">Name</th><th className="px-6 py-3 text-left">Age</th><th className="px-6 py-3 text-left">Dept</th><th className="px-6 py-3 text-left">Doctor</th><th className="px-6 py-3 text-left">Vitals</th><th className="px-6 py-3 text-left">Severity</th><th className="px-6 py-3 text-left">Status</th></tr></thead><tbody>{patientData.map(p => <PatientRow key={p.id} patient={p} />)}</tbody></table></div></div>
          )}

          {activeTab === 'staff' && (
            <div><h2 className="text-2xl font-black mb-6">Medical Staff</h2><div className="grid grid-cols-3 gap-4">{staffData.map(s => <StaffCard key={s.id} staff={s} />)}</div></div>
          )}

          {activeTab === 'appointments' && (
            <div><h2 className="text-2xl font-black mb-6">Appointments</h2><div className="bg-white rounded-xl overflow-hidden"><table className="w-full"><thead className="bg-gray-100"><tr><th className="px-6 py-3 text-left">Patient</th><th className="px-6 py-3 text-left">Doctor</th><th className="px-6 py-3 text-left">Date</th><th className="px-6 py-3 text-left">Time</th><th className="px-6 py-3 text-left">Type</th><th className="px-6 py-3 text-left">Status</th></tr></thead><tbody>{appointmentData.map(a => <tr key={a.id} className="border-b hover:bg-gray-50"><td className="px-6 py-3 font-semibold">{a.patient}</td><td className="px-6 py-3 text-sm">{a.doctor}</td><td className="px-6 py-3 text-sm">{a.date}</td><td className="px-6 py-3 text-sm">{a.time}</td><td className="px-6 py-3 text-sm">{a.type}</td><td className="px-6 py-3"><span className={`px-2 py-1 text-xs rounded ${a.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{a.status}</span></td></tr>)}</tbody></table></div></div>
          )}

          {activeTab === 'vitals' && (
            <div><h2 className="text-2xl font-black mb-6">Vital Alerts</h2><div className="space-y-3">{vitalAlerts.map(a => <div key={a.id} className={`p-4 rounded-lg border-l-4 ${a.severity === 'High' ? 'bg-red-50 border-red-400' : 'bg-yellow-50 border-yellow-400'}`}><p className={`font-bold ${a.severity === 'High' ? 'text-red-700' : 'text-yellow-700'}`}>{a.type} - {a.patient}</p><p className="text-sm text-gray-700 mt-1">{a.message}</p><p className="text-xs text-gray-500 mt-2">{a.time}</p></div>)}</div></div>
          )}

          {activeTab === 'financial' && (
            <div><h2 className="text-2xl font-black mb-6">Financial</h2><div className="grid grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow"><p className="text-sm font-semibold mb-2">Revenue</p><p className="text-4xl font-black">₹35.6 Cr</p></div>
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 shadow"><p className="text-sm font-semibold mb-2">Expenses</p><p className="text-4xl font-black">₹20.8 Cr</p></div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow"><p className="text-sm font-semibold mb-2">Profit</p><p className="text-4xl font-black">₹14.8 Cr</p></div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow"><p className="text-sm font-semibold mb-2">Margin</p><p className="text-4xl font-black">41.5%</p></div>
            </div></div>
          )}
        </div>
      </div>
    </div>
  );
}

