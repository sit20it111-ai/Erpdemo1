import React, { useState } from 'react';
import './HRManagement.css';

/* ─────────────────────────────────────────
   REUSABLE COMPONENTS
───────────────────────────────────────── */
const FormField = ({ label, required, children }) => (
  <div className="form-field">
    <label className="form-label">
      {label} {required && <span className="req">*</span>}
    </label>
    {children}
  </div>
);

const Input = (props) => <input className="form-input" {...props} />;
const Select = ({ children, ...props }) => (
  <select className="form-input" {...props}>{children}</select>
);
const Textarea = (props) => <textarea className="form-input form-textarea" {...props} />;
const SectionTitle = ({ title }) => <div className="section-title">{title}</div>;
const SubmitBtn = ({ label = 'Submit' }) => (
  <div className="form-submit-row">
    <button type="submit" className="submit-btn">{label}</button>
  </div>
);

/* ─────────────────────────────────────────
   1. NEW EMPLOYEE FORM
───────────────────────────────────────── */
function NewEmployee() {
  const init = {
    college:'', machineId:'', timeSlot:'', department:'', empCode:'', name:'',
    qualification:'', otherQual:'', experience:'', designation:'', facultyCouncilRegNo:'',
    gender:'', marital:'', dob:'', doj:'', fatherName:'', spouseName:'',
    email:'', mobile:'', address:'', seniority:'', categories:'',
    photo:null, aadhar:'', pan:'',
    bankHolder:'', branch:'', micr:'', bankName:'', bankAccount:'', ifsc:'',
    basicSalary:'', da:'', hra:'', cca:'', medical:'', dietary:'', otherAllow:'',
    pfStatus:'', pfAmount:'', pfNumber:'', tds:'', esic:'', profTax:'', otherDed:'',
    teachCourse:'', teachSubject:'',
    intlHolder:'', intlBank:'', iban:'', swift:'', bankAddress:'',
    aadharDoc:null, panDoc:null, resume:null, otherDoc:null,
    expCert:null, appointLetter:null, workContract:null, passport:null,
    medFitness:null, pcc:null,
  };
  const [form, setForm] = useState(init);
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const setFile = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.files[0] }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.mobile.trim()) e.mobile = 'Mobile number is required';
    if (form.mobile && !/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter valid 10-digit mobile';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter valid email';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    alert('Employee saved successfully!');
  };

  return (
    <form className="hr-form" onSubmit={handleSubmit}>

      <SectionTitle title="Basic Information" />
      <div className="form-grid">
        <FormField label="College">
          <Select value={form.college} onChange={set('college')}>
            <option value="">-- Select College --</option>
            <option>MBBS College A</option>
            <option>MBBS College B</option>
          </Select>
        </FormField>
        <FormField label="Machine ID">
          <Input value={form.machineId} onChange={set('machineId')} placeholder="Machine ID" />
        </FormField>
        <FormField label="Time Slot">
          <Select value={form.timeSlot} onChange={set('timeSlot')}>
            <option value="">-- Select Slot --</option>
            <option>Morning</option><option>Afternoon</option><option>Evening</option>
          </Select>
        </FormField>
        <FormField label="Company / Department">
          <Select value={form.department} onChange={set('department')}>
            <option value="">-- Select Department --</option>
            <option>HR</option><option>Academics</option><option>Admin</option><option>Accounts</option>
          </Select>
        </FormField>
        <FormField label="Employee Code">
          <Input value={form.empCode} onChange={set('empCode')} placeholder="EMP-001" />
        </FormField>
        <FormField label="Name" required>
          <Input value={form.name} onChange={set('name')} placeholder="Full Name" />
          {errors.name && <span className="err-msg">{errors.name}</span>}
        </FormField>
        <FormField label="Qualification">
          <Input value={form.qualification} onChange={set('qualification')} placeholder="e.g. MBBS, MD" />
        </FormField>
        <FormField label="Other Qualification">
          <Input value={form.otherQual} onChange={set('otherQual')} placeholder="Other" />
        </FormField>
        <FormField label="Total Experience">
          <Input value={form.experience} onChange={set('experience')} placeholder="Years" type="number" min="0" />
        </FormField>
        <FormField label="Designation">
          <Select value={form.designation} onChange={set('designation')}>
            <option value="">-- Select Designation --</option>
            <option>Professor</option>
            <option>Associate Professor</option>
            <option>Assistant Professor</option>
            <option>Lecturer</option>
            <option>Senior Resident</option>
            <option>Junior Resident</option>
            <option>Abroad Coordinator</option>
            <option>HOD</option>
            <option>Principal</option>
            <option>Dean</option>
            <option>Administrator</option>
            <option>HR Manager</option>
            <option>Accountant</option>
            <option>Staff Nurse</option>
            <option>Lab Technician</option>
            <option>Other</option>
          </Select>
        </FormField>
        <FormField label="Faculty Council Registration No.">
          <Input value={form.facultyCouncilRegNo} onChange={set('facultyCouncilRegNo')} placeholder="e.g. MCI-12345" />
        </FormField>
      </div>

      <SectionTitle title="Personal Details" />
      <div className="form-grid">
        <FormField label="Gender">
          <Select value={form.gender} onChange={set('gender')}>
            <option value="">-- Select --</option>
            <option>Male</option><option>Female</option><option>Other</option>
          </Select>
        </FormField>
        <FormField label="Marital Status">
          <Select value={form.marital} onChange={set('marital')}>
            <option value="">-- Select --</option>
            <option>Single</option><option>Married</option><option>Divorced</option><option>Widowed</option>
          </Select>
        </FormField>
        <FormField label="Date of Birth">
          <Input type="date" value={form.dob} onChange={set('dob')} />
        </FormField>
        <FormField label="Date of Joining">
          <Input type="date" value={form.doj} onChange={set('doj')} />
        </FormField>
        <FormField label="Father's Name">
          <Input value={form.fatherName} onChange={set('fatherName')} placeholder="Father's Name" />
        </FormField>
        <FormField label="Husband / Wife Name">
          <Input value={form.spouseName} onChange={set('spouseName')} placeholder="Spouse Name" />
        </FormField>
        <FormField label="Email Address">
          <Input type="email" value={form.email} onChange={set('email')} placeholder="email@example.com" />
          {errors.email && <span className="err-msg">{errors.email}</span>}
        </FormField>
        <FormField label="Mobile Number" required>
          <Input type="tel" value={form.mobile} onChange={set('mobile')} placeholder="10-digit number" maxLength={10} />
          {errors.mobile && <span className="err-msg">{errors.mobile}</span>}
        </FormField>
      </div>

      <SectionTitle title="Address Information" />
      <div className="form-grid">
        <FormField label="Address">
          <Textarea value={form.address} onChange={set('address')} placeholder="Full Address" rows={3} />
        </FormField>
        <FormField label="Seniority">
          <Input value={form.seniority} onChange={set('seniority')} placeholder="Seniority Level" />
        </FormField>
        <FormField label="Categories">
          <Input value={form.categories} onChange={set('categories')} placeholder="Category" />
        </FormField>
      </div>

      <SectionTitle title="Documents" />
      <div className="form-grid">
        <FormField label="Photo Upload">
          <Input type="file" accept="image/*" onChange={setFile('photo')} />
        </FormField>
        <FormField label="Aadhar Card Number">
          <Input value={form.aadhar} onChange={set('aadhar')} placeholder="XXXX XXXX XXXX" maxLength={14} />
        </FormField>
        <FormField label="PAN Card Number">
          <Input value={form.pan} onChange={set('pan')} placeholder="ABCDE1234F" maxLength={10} />
        </FormField>
      </div>

      <SectionTitle title="Bank Details" />
      <div className="form-grid">
        <FormField label="Account Holder Name">
          <Input value={form.bankHolder} onChange={set('bankHolder')} placeholder="As per bank records" />
        </FormField>
        <FormField label="Branch Name">
          <Input value={form.branch} onChange={set('branch')} placeholder="Branch Name" />
        </FormField>
        <FormField label="MICR Code">
          <Input value={form.micr} onChange={set('micr')} placeholder="MICR Code" />
        </FormField>
        <FormField label="Bank Name">
          <Input value={form.bankName} onChange={set('bankName')} placeholder="Bank Name" />
        </FormField>
        <FormField label="Bank Account Number">
          <Input value={form.bankAccount} onChange={set('bankAccount')} placeholder="Account Number" />
        </FormField>
        <FormField label="IFSC Code">
          <Input value={form.ifsc} onChange={set('ifsc')} placeholder="IFSC Code" />
        </FormField>
      </div>

      <SectionTitle title="Salary Details" />
      <div className="form-grid">
        {[
          ['basicSalary','Basic Salary'],['da','Dearness Allowance'],
          ['hra','House Rent Allowance'],['cca','City Compensatory Allowance'],
          ['medical','Medical Allowance'],['dietary','Dietary Allowance'],['otherAllow','Other Allowance'],
        ].map(([k,l]) => (
          <FormField key={k} label={l}>
            <Input type="number" min="0" value={form[k]} onChange={set(k)} placeholder="0.00" />
          </FormField>
        ))}
      </div>

      <SectionTitle title="Deductions" />
      <div className="form-grid">
        <FormField label="PF Status">
          <Select value={form.pfStatus} onChange={set('pfStatus')}>
            <option value="">-- Select --</option>
            <option>Active</option><option>Inactive</option>
          </Select>
        </FormField>
        {[
          ['pfAmount','PF Amount'],['pfNumber','PF Number'],['tds','TDS'],
          ['esic','ESIC'],['profTax','Professional Tax'],['otherDed','Other Deductions'],
        ].map(([k,l]) => (
          <FormField key={k} label={l}>
            <Input value={form[k]} onChange={set(k)} placeholder={l} />
          </FormField>
        ))}
      </div>

      <SectionTitle title="Teaching Information" />
      <div className="form-grid">
        <FormField label="Teaching Course">
          <Select value={form.teachCourse} onChange={set('teachCourse')}>
            <option value="">-- Select Course --</option>
            <option>MBBS</option><option>MD</option><option>MS</option><option>BDS</option>
          </Select>
        </FormField>
        <FormField label="Teaching Subject">
          <Select value={form.teachSubject} onChange={set('teachSubject')}>
            <option value="">-- Select Subject --</option>
            <option>Anatomy</option><option>Physiology</option><option>Biochemistry</option>
            <option>Pathology</option><option>Pharmacology</option>
          </Select>
        </FormField>
      </div>

      <SectionTitle title="International Bank Details" />
      <div className="form-grid">
        <FormField label="Account Holder Name">
          <Input value={form.intlHolder} onChange={set('intlHolder')} placeholder="Account Holder" />
        </FormField>
        <FormField label="Bank Name">
          <Input value={form.intlBank} onChange={set('intlBank')} placeholder="International Bank Name" />
        </FormField>
        <FormField label="IBAN Number">
          <Input value={form.iban} onChange={set('iban')} placeholder="IBAN" />
        </FormField>
        <FormField label="SWIFT Code">
          <Input value={form.swift} onChange={set('swift')} placeholder="SWIFT Code" />
        </FormField>
        <FormField label="Bank Address">
          <Textarea value={form.bankAddress} onChange={set('bankAddress')} placeholder="Bank Address" rows={2} />
        </FormField>
      </div>

      <SectionTitle title="Document Uploads" />
      <div className="form-grid">
        {[
          ['aadharDoc','Upload Aadhar Card'],['panDoc','Upload PAN Card'],
          ['resume','Upload Resume'],['otherDoc','Upload Other Documents'],
          ['expCert','Experience Certificate'],['appointLetter','Appointment Letter'],
          ['workContract','Work Contract'],['passport','Passport Copy'],
          ['medFitness','Medical Fitness Certificate'],['pcc','PCC Certificate'],
        ].map(([k,l]) => (
          <FormField key={k} label={l}>
            <Input type="file" onChange={setFile(k)} />
          </FormField>
        ))}
      </div>

      <SubmitBtn label="Save Employee" />
    </form>
  );
}

/* ─────────────────────────────────────────
   2. VIEW EMPLOYEE
───────────────────────────────────────── */
function ViewEmployee() {
  const [search, setSearch] = useState('');
  const employees = [
    { id: 1, code: 'EMP-001', name: 'Dr. Ravi Kumar', dept: 'Academics', designation: 'Professor', mobile: '9876543210' },
    { id: 2, code: 'EMP-002', name: 'Dr. Priya Sharma', dept: 'HR', designation: 'HR Manager', mobile: '9123456780' },
    { id: 3, code: 'EMP-003', name: 'Mr. Arun Patel', dept: 'Accounts', designation: 'Accountant', mobile: '9988776655' },
  ];
  const filtered = employees.filter(
    (e) => e.name.toLowerCase().includes(search.toLowerCase()) ||
           e.code.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="hr-form">
      <div className="form-field" style={{ maxWidth: 360 }}>
        <label className="form-label">Search Employee</label>
        <input className="form-input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or code..." />
      </div>
      <div className="table-wrap">
        <table className="hr-table">
          <thead>
            <tr>
              <th>#</th><th>Emp Code</th><th>Name</th>
              <th>Department</th><th>Designation</th><th>Mobile</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0
              ? <tr><td colSpan={7} style={{ textAlign: 'center', color: '#999', padding: 24 }}>No employees found</td></tr>
              : filtered.map((e, i) => (
                <tr key={e.id}>
                  <td>{i + 1}</td>
                  <td>{e.code}</td>
                  <td>{e.name}</td>
                  <td>{e.dept}</td>
                  <td>{e.designation}</td>
                  <td>{e.mobile}</td>
                  <td>
                    <span className="tbl-btn view">View</span>
                    <span className="tbl-btn edit">Edit</span>
                    <span className="tbl-btn del">Delete</span>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   3. GENERATE SALARY
───────────────────────────────────────── */
function GenerateSalary() {
  const [form, setForm] = useState({ employee:'', month:'', year:'', basic:'', allowances:'', deductions:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); alert('Salary generated successfully!'); };
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Select Employee" required>
          <Select value={form.employee} onChange={set('employee')} required>
            <option value="">-- Select Employee --</option>
            <option>Dr. Ravi Kumar</option><option>Dr. Priya Sharma</option><option>Mr. Arun Patel</option>
          </Select>
        </FormField>
        <FormField label="Month" required>
          <Select value={form.month} onChange={set('month')} required>
            <option value="">-- Select Month --</option>
            {months.map((m) => <option key={m}>{m}</option>)}
          </Select>
        </FormField>
        <FormField label="Year" required>
          <Select value={form.year} onChange={set('year')} required>
            <option value="">-- Select Year --</option>
            {[2024,2025,2026].map((y) => <option key={y}>{y}</option>)}
          </Select>
        </FormField>
        <FormField label="Basic Salary">
          <Input type="number" value={form.basic} onChange={set('basic')} placeholder="0.00" />
        </FormField>
        <FormField label="Allowances">
          <Input type="number" value={form.allowances} onChange={set('allowances')} placeholder="0.00" />
        </FormField>
        <FormField label="Deductions">
          <Input type="number" value={form.deductions} onChange={set('deductions')} placeholder="0.00" />
        </FormField>
      </div>
      <SubmitBtn label="Generate Salary" />
    </form>
  );
}

/* ─────────────────────────────────────────
   4. PAY SALARY
───────────────────────────────────────── */
function PaySalary() {
  const [form, setForm] = useState({ employee:'', month:'', amount:'', method:'', date:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); alert('Salary payment recorded!'); };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Employee" required>
          <Select value={form.employee} onChange={set('employee')} required>
            <option value="">-- Select Employee --</option>
            <option>Dr. Ravi Kumar</option><option>Dr. Priya Sharma</option><option>Mr. Arun Patel</option>
          </Select>
        </FormField>
        <FormField label="Salary Month" required>
          <Input type="month" value={form.month} onChange={set('month')} required />
        </FormField>
        <FormField label="Amount" required>
          <Input type="number" value={form.amount} onChange={set('amount')} placeholder="0.00" required />
        </FormField>
        <FormField label="Payment Method" required>
          <Select value={form.method} onChange={set('method')} required>
            <option value="">-- Select Method --</option>
            <option>Bank Transfer</option><option>Cash</option><option>Cheque</option><option>UPI</option>
          </Select>
        </FormField>
        <FormField label="Payment Date" required>
          <Input type="date" value={form.date} onChange={set('date')} required />
        </FormField>
      </div>
      <SubmitBtn label="Submit Payment" />
    </form>
  );
}

/* ─────────────────────────────────────────
   5. EMPLOYEE ATTENDANCE
───────────────────────────────────────── */
function EmployeeAttendance() {
  const [form, setForm] = useState({ employee:'', date:'', timeSlot:'', status:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); alert('Attendance marked!'); };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Employee" required>
          <Select value={form.employee} onChange={set('employee')} required>
            <option value="">-- Select Employee --</option>
            <option>Dr. Ravi Kumar</option><option>Dr. Priya Sharma</option><option>Mr. Arun Patel</option>
          </Select>
        </FormField>
        <FormField label="Date" required>
          <Input type="date" value={form.date} onChange={set('date')} required />
        </FormField>
        <FormField label="Time Slot">
          <Select value={form.timeSlot} onChange={set('timeSlot')}>
            <option value="">-- Select Slot --</option>
            <option>Morning</option><option>Afternoon</option><option>Evening</option>
          </Select>
        </FormField>
        <FormField label="Status" required>
          <Select value={form.status} onChange={set('status')} required>
            <option value="">-- Select Status --</option>
            <option>Present</option><option>Absent</option><option>Leave</option><option>Half Day</option>
          </Select>
        </FormField>
      </div>
      <SubmitBtn label="Mark Attendance" />
    </form>
  );
}

/* ─────────────────────────────────────────
   6. ATTENDANCE SHEET
───────────────────────────────────────── */
function AttendanceSheet() {
  const [form, setForm] = useState({ department:'', month:'', year:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); alert('Attendance sheet generated!'); };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Department" required>
          <Select value={form.department} onChange={set('department')} required>
            <option value="">-- Select Department --</option>
            <option>HR</option><option>Academics</option><option>Admin</option><option>Accounts</option>
          </Select>
        </FormField>
        <FormField label="Month" required>
          <Select value={form.month} onChange={set('month')} required>
            <option value="">-- Select Month --</option>
            {['January','February','March','April','May','June','July','August','September','October','November','December'].map((m) => <option key={m}>{m}</option>)}
          </Select>
        </FormField>
        <FormField label="Year" required>
          <Select value={form.year} onChange={set('year')} required>
            <option value="">-- Select Year --</option>
            {[2024,2025,2026].map((y) => <option key={y}>{y}</option>)}
          </Select>
        </FormField>
      </div>
      <SubmitBtn label="Generate Sheet" />
    </form>
  );
}

/* ─────────────────────────────────────────
   7. EMPLOYEE ATTENDANCE REGISTER
───────────────────────────────────────── */
function AttendanceRegister() {
  const [form, setForm] = useState({ employee:'', fromDate:'', toDate:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); alert('Attendance register generated!'); };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Employee" required>
          <Select value={form.employee} onChange={set('employee')} required>
            <option value="">-- Select Employee --</option>
            <option>Dr. Ravi Kumar</option><option>Dr. Priya Sharma</option><option>Mr. Arun Patel</option>
          </Select>
        </FormField>
        <FormField label="From Date" required>
          <Input type="date" value={form.fromDate} onChange={set('fromDate')} required />
        </FormField>
        <FormField label="To Date" required>
          <Input type="date" value={form.toDate} onChange={set('toDate')} required />
        </FormField>
      </div>
      <SubmitBtn label="Generate Register" />
    </form>
  );
}

/* ─────────────────────────────────────────
   8. ATTENDANCE REPORT I & II
───────────────────────────────────────── */
function AttendanceReport() {
  const [form, setForm] = useState({ department:'', fromDate:'', toDate:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); alert('Attendance report generated!'); };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Department" required>
          <Select value={form.department} onChange={set('department')} required>
            <option value="">-- Select Department --</option>
            <option>HR</option><option>Academics</option><option>Admin</option><option>Accounts</option>
          </Select>
        </FormField>
        <FormField label="From Date" required>
          <Input type="date" value={form.fromDate} onChange={set('fromDate')} required />
        </FormField>
        <FormField label="To Date" required>
          <Input type="date" value={form.toDate} onChange={set('toDate')} required />
        </FormField>
      </div>
      <SubmitBtn label="Generate Report" />
    </form>
  );
}

/* ─────────────────────────────────────────
   9. NEW DEPARTMENT
───────────────────────────────────────── */
function NewDepartment() {
  const [form, setForm] = useState({ name:'', description:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) { alert('Department name is required'); return; }
    alert('Department added!');
  };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Department Name" required>
          <Select value={form.name} onChange={set('name')}>
            <option value="">-- Select or type below --</option>
            <option>HR</option>
            <option>Academics</option>
            <option>Admin</option>
            <option>Accounts</option>
            <option>Library</option>
            <option>Hostel</option>
            <option>Transport</option>
            <option>Abroad / International Cell</option>
            <option>Other</option>
          </Select>
        </FormField>
        <FormField label="Custom Department Name">
          <Input placeholder="Enter if not listed above" />
        </FormField>
        <FormField label="Description">
          <Textarea value={form.description} onChange={set('description')} placeholder="Description" rows={3} />
        </FormField>
      </div>
      <SubmitBtn label="Add Department" />
    </form>
  );
}

/* ─────────────────────────────────────────
   10. TIME SLOT MASTER
───────────────────────────────────────── */
function TimeSlotMaster() {
  const [form, setForm] = useState({ slotName:'', startTime:'', endTime:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.slotName.trim()) { alert('Slot name is required'); return; }
    alert('Time slot added!');
  };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Slot Name" required>
          <Input value={form.slotName} onChange={set('slotName')} placeholder="e.g. Morning Shift" />
        </FormField>
        <FormField label="Start Time" required>
          <Input type="time" value={form.startTime} onChange={set('startTime')} required />
        </FormField>
        <FormField label="End Time" required>
          <Input type="time" value={form.endTime} onChange={set('endTime')} required />
        </FormField>
      </div>
      <SubmitBtn label="Add Time Slot" />
    </form>
  );
}

/* ─────────────────────────────────────────
   11. EMPLOYEE HOLIDAY MANAGEMENT
───────────────────────────────────────── */
function HolidayManagement() {
  const [form, setForm] = useState({ name:'', date:'', description:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) { alert('Holiday name is required'); return; }
    alert('Holiday added!');
  };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Holiday Name" required>
          <Input value={form.name} onChange={set('name')} placeholder="e.g. Diwali" />
        </FormField>
        <FormField label="Date" required>
          <Input type="date" value={form.date} onChange={set('date')} required />
        </FormField>
        <FormField label="Description">
          <Textarea value={form.description} onChange={set('description')} placeholder="Description" rows={3} />
        </FormField>
      </div>
      <SubmitBtn label="Add Holiday" />
    </form>
  );
}

/* ─────────────────────────────────────────
   12. ADD EMPLOYEE CATEGORY
───────────────────────────────────────── */
function AddCategory() {
  const [form, setForm] = useState({ name:'', description:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) { alert('Category name is required'); return; }
    alert('Category added!');
  };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Category Name" required>
          <Input value={form.name} onChange={set('name')} placeholder="Category Name" />
        </FormField>
        <FormField label="Description">
          <Textarea value={form.description} onChange={set('description')} placeholder="Description" rows={3} />
        </FormField>
      </div>
      <SubmitBtn label="Add Category" />
    </form>
  );
}

/* ─────────────────────────────────────────
   13. ADD LEAVE TYPE
───────────────────────────────────────── */
function AddLeaveType() {
  const [form, setForm] = useState({ name:'', maxDays:'', description:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) { alert('Leave name is required'); return; }
    alert('Leave type added!');
  };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Leave Name" required>
          <Input value={form.name} onChange={set('name')} placeholder="e.g. Casual Leave" />
        </FormField>
        <FormField label="Max Days" required>
          <Input type="number" min="1" value={form.maxDays} onChange={set('maxDays')} placeholder="e.g. 12" />
        </FormField>
        <FormField label="Description">
          <Textarea value={form.description} onChange={set('description')} placeholder="Description" rows={3} />
        </FormField>
      </div>
      <SubmitBtn label="Add Leave Type" />
    </form>
  );
}

/* ─────────────────────────────────────────
   14. LEAVE ALLOCATION
───────────────────────────────────────── */
function LeaveAllocation() {
  const [form, setForm] = useState({ employee:'', leaveType:'', days:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); alert('Leave allocated!'); };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Employee" required>
          <Select value={form.employee} onChange={set('employee')} required>
            <option value="">-- Select Employee --</option>
            <option>Dr. Ravi Kumar</option><option>Dr. Priya Sharma</option><option>Mr. Arun Patel</option>
          </Select>
        </FormField>
        <FormField label="Leave Type" required>
          <Select value={form.leaveType} onChange={set('leaveType')} required>
            <option value="">-- Select Type --</option>
            <option>Casual Leave</option><option>Sick Leave</option><option>Earned Leave</option><option>Maternity Leave</option>
          </Select>
        </FormField>
        <FormField label="Number of Days" required>
          <Input type="number" min="1" value={form.days} onChange={set('days')} placeholder="Days" required />
        </FormField>
      </div>
      <SubmitBtn label="Allocate Leave" />
    </form>
  );
}

/* ─────────────────────────────────────────
   15. ADD LEAVE APPLICATION
───────────────────────────────────────── */
function AddLeaveApplication() {
  const [form, setForm] = useState({ employee:'', leaveType:'', fromDate:'', toDate:'', reason:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.reason.trim()) { alert('Reason is required'); return; }
    alert('Leave application submitted!');
  };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Employee" required>
          <Select value={form.employee} onChange={set('employee')} required>
            <option value="">-- Select Employee --</option>
            <option>Dr. Ravi Kumar</option><option>Dr. Priya Sharma</option><option>Mr. Arun Patel</option>
          </Select>
        </FormField>
        <FormField label="Leave Type" required>
          <Select value={form.leaveType} onChange={set('leaveType')} required>
            <option value="">-- Select Type --</option>
            <option>Casual Leave</option><option>Sick Leave</option><option>Earned Leave</option><option>Maternity Leave</option>
          </Select>
        </FormField>
        <FormField label="From Date" required>
          <Input type="date" value={form.fromDate} onChange={set('fromDate')} required />
        </FormField>
        <FormField label="To Date" required>
          <Input type="date" value={form.toDate} onChange={set('toDate')} required />
        </FormField>
        <FormField label="Reason" required>
          <Textarea value={form.reason} onChange={set('reason')} placeholder="Reason for leave" rows={3} required />
        </FormField>
      </div>
      <SubmitBtn label="Submit Application" />
    </form>
  );
}

/* ─────────────────────────────────────────
   16. LEAVE APPLICATION REPORT
───────────────────────────────────────── */
function LeaveReport() {
  const [form, setForm] = useState({ employee:'', fromDate:'', toDate:'' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); alert('Leave report generated!'); };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Employee" required>
          <Select value={form.employee} onChange={set('employee')} required>
            <option value="">-- Select Employee --</option>
            <option>All Employees</option>
            <option>Dr. Ravi Kumar</option><option>Dr. Priya Sharma</option><option>Mr. Arun Patel</option>
          </Select>
        </FormField>
        <FormField label="From Date" required>
          <Input type="date" value={form.fromDate} onChange={set('fromDate')} required />
        </FormField>
        <FormField label="To Date" required>
          <Input type="date" value={form.toDate} onChange={set('toDate')} required />
        </FormField>
      </div>
      <SubmitBtn label="Generate Report" />
    </form>
  );
}

/* ─────────────────────────────────────────
   NEW: EMPLOYEE ATTENDANCE REPORT
───────────────────────────────────────── */
function EmployeeAttendanceReport() {
  const [form, setForm] = useState({ department: '', fromDate: '', toDate: '' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); alert('Attendance report generated!'); };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Department" required>
          <Select value={form.department} onChange={set('department')} required>
            <option value="">-- Select Department --</option>
            <option>HR</option><option>Academics</option><option>Admin</option><option>Accounts</option>
          </Select>
        </FormField>
        <FormField label="From Date" required>
          <Input type="date" value={form.fromDate} onChange={set('fromDate')} required />
        </FormField>
        <FormField label="To Date" required>
          <Input type="date" value={form.toDate} onChange={set('toDate')} required />
        </FormField>
      </div>
      <SubmitBtn label="Generate Report" />
    </form>
  );
}

/* ─────────────────────────────────────────
   NEW: EMPLOYEE SALARY REGISTER
───────────────────────────────────────── */
function EmployeeSalaryRegister() {
  const [form, setForm] = useState({ department: '', month: '', year: '' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); alert('Salary register generated!'); };
  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <FormField label="Department" required>
          <Select value={form.department} onChange={set('department')} required>
            <option value="">-- Select Department --</option>
            <option>HR</option><option>Academics</option><option>Admin</option><option>Accounts</option>
          </Select>
        </FormField>
        <FormField label="Month" required>
          <Select value={form.month} onChange={set('month')} required>
            <option value="">-- Select Month --</option>
            {['January','February','March','April','May','June','July','August','September','October','November','December'].map((m) => (
              <option key={m}>{m}</option>
            ))}
          </Select>
        </FormField>
        <FormField label="Year" required>
          <Select value={form.year} onChange={set('year')} required>
            <option value="">-- Select Year --</option>
            {[2024, 2025, 2026].map((y) => <option key={y}>{y}</option>)}
          </Select>
        </FormField>
      </div>
      <SubmitBtn label="Generate Salary Register" />
    </form>
  );
}

/* ─────────────────────────────────────────
   NEW: EMPLOYEE I-CARD
───────────────────────────────────────── */
function EmployeeICard() {
  const [form, setForm] = useState({ employee: '', department: '', designation: '', empCode: '', doj: '', bloodGroup: '' });
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const [preview, setPreview] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.employee) { alert('Please select an employee'); return; }
    setPreview(true);
  };
  return (
    <div className="hr-form">
      {!preview ? (
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <FormField label="Select Employee" required>
              <Select value={form.employee} onChange={set('employee')} required>
                <option value="">-- Select Employee --</option>
                <option>Dr. Ravi Kumar</option>
                <option>Dr. Priya Sharma</option>
                <option>Mr. Arun Patel</option>
              </Select>
            </FormField>
            <FormField label="Department">
              <Select value={form.department} onChange={set('department')}>
                <option value="">-- Select --</option>
                <option>HR</option><option>Academics</option><option>Admin</option><option>Accounts</option>
              </Select>
            </FormField>
            <FormField label="Designation">
              <Input value={form.designation} onChange={set('designation')} placeholder="Designation" />
            </FormField>
            <FormField label="Employee Code">
              <Input value={form.empCode} onChange={set('empCode')} placeholder="EMP-001" />
            </FormField>
            <FormField label="Date of Joining">
              <Input type="date" value={form.doj} onChange={set('doj')} />
            </FormField>
            <FormField label="Blood Group">
              <Select value={form.bloodGroup} onChange={set('bloodGroup')}>
                <option value="">-- Select --</option>
                <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
                <option>O+</option><option>O-</option><option>AB+</option><option>AB-</option>
              </Select>
            </FormField>
          </div>
          <SubmitBtn label="Generate I-Card" />
        </form>
      ) : (
        <div>
          <div className="icard-wrap">
            <div className="icard">
              <div className="icard-header">
                <div className="icard-logo">MBBS ERP</div>
                <div className="icard-inst">Medical College & Hospital</div>
              </div>
              <div className="icard-body">
                <div className="icard-photo">
                  <div className="icard-avatar">{form.employee.split(' ').map(w => w[0]).join('').slice(0,2)}</div>
                </div>
                <div className="icard-info">
                  <div className="icard-name">{form.employee}</div>
                  <div className="icard-row"><span>Designation</span><b>{form.designation || '—'}</b></div>
                  <div className="icard-row"><span>Department</span><b>{form.department || '—'}</b></div>
                  <div className="icard-row"><span>Emp Code</span><b>{form.empCode || '—'}</b></div>
                  <div className="icard-row"><span>DOJ</span><b>{form.doj || '—'}</b></div>
                  <div className="icard-row"><span>Blood Group</span><b style={{color:'#dc2626'}}>{form.bloodGroup || '—'}</b></div>
                </div>
              </div>
              <div className="icard-footer">MBBS ERP · Medical College & Hospital</div>
            </div>
          </div>
          <div className="form-submit-row">
            <button className="submit-btn" onClick={() => window.print()}>Print I-Card</button>
            &nbsp;&nbsp;
            <button className="submit-btn" style={{background:'#6b7280'}} onClick={() => setPreview(false)}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
}


/* ─────────────────────────────────────────
   NEW: BIOMETRIC LOGS
───────────────────────────────────────── */
function BiometricLogs() {
  const [form, setForm] = useState({ employee: '', fromDate: '', toDate: '', device: '' });
  const [logs] = useState([
    { id:1, emp:'Dr. Ravi Kumar', date:'2026-03-14', inTime:'09:02', outTime:'17:58', status:'Present', device:'Main Gate' },
    { id:2, emp:'Dr. Priya Sharma', date:'2026-03-14', inTime:'08:55', outTime:'18:10', status:'Present', device:'Block B' },
    { id:3, emp:'Mr. Arun Patel', date:'2026-03-14', inTime:'--', outTime:'--', status:'Absent', device:'--' },
  ]);
  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); alert('Biometric logs fetched!'); };
  return (
    <div className="hr-form">
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <FormField label="Employee">
            <Select value={form.employee} onChange={set('employee')}>
              <option value="">-- All Employees --</option>
              <option>Dr. Ravi Kumar</option>
              <option>Dr. Priya Sharma</option>
              <option>Mr. Arun Patel</option>
            </Select>
          </FormField>
          <FormField label="Device / Location">
            <Select value={form.device} onChange={set('device')}>
              <option value="">-- All Devices --</option>
              <option>Main Gate</option>
              <option>Block A</option>
              <option>Block B</option>
              <option>Admin Block</option>
            </Select>
          </FormField>
          <FormField label="From Date" required>
            <Input type="date" value={form.fromDate} onChange={set('fromDate')} required />
          </FormField>
          <FormField label="To Date" required>
            <Input type="date" value={form.toDate} onChange={set('toDate')} required />
          </FormField>
        </div>
        <SubmitBtn label="Fetch Biometric Logs" />
      </form>
      <SectionTitle title="Biometric Log Records" />
      <div className="table-wrap">
        <table className="hr-table">
          <thead>
            <tr>
              <th>#</th><th>Employee</th><th>Date</th>
              <th>In Time</th><th>Out Time</th><th>Status</th><th>Device</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((l, i) => (
              <tr key={l.id}>
                <td>{i + 1}</td>
                <td>{l.emp}</td>
                <td>{l.date}</td>
                <td>{l.inTime}</td>
                <td>{l.outTime}</td>
                <td>
                  <span style={{
                    padding: '2px 10px', borderRadius: 4, fontSize: 11, fontWeight: 600,
                    background: l.status === 'Present' ? '#f0fdf4' : '#fef2f2',
                    color: l.status === 'Present' ? '#16a34a' : '#dc2626',
                  }}>{l.status}</span>
                </td>
                <td>{l.device}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   NEW: EMPLOYEE IMPORT (BULK)
───────────────────────────────────────── */
function EmployeeImport() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);
  const handleFile = (e) => {
    const f = e.target.files[0];
    setFile(f);
    setStatus(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) { alert('Please select a file to import'); return; }
    setStatus({ success: true, message: `File "${file.name}" uploaded successfully! Processing ${Math.floor(Math.random()*20)+5} employee records...` });
  };
  const handleDownload = () => {
    const csv = [
      'EmpCode,Name,Designation,Department,Gender,DOB,DOJ,Mobile,Email,BasicSalary',
      'EMP-001,Dr. Sample Name,Professor,Academics,Male,1980-01-15,2010-06-01,9876543210,sample@college.edu,50000',
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'employee_import_template.csv'; a.click();
  };
  return (
    <div className="hr-form">
      <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 8, padding: '14px 18px', marginBottom: 20 }}>
        <div style={{ fontWeight: 600, fontSize: 13, color: '#1d4ed8', marginBottom: 6 }}>Import Instructions</div>
        <ul style={{ fontSize: 12, color: '#374151', paddingLeft: 18, lineHeight: 1.8 }}>
          <li>Download the template CSV file below</li>
          <li>Fill in employee data — one row per employee</li>
          <li>Do not change column headers</li>
          <li>Save as .CSV and upload</li>
          <li>Supported formats: .csv, .xlsx</li>
        </ul>
        <button
          type="button"
          className="submit-btn"
          style={{ marginTop: 10, background: '#1d4ed8', fontSize: 12, padding: '7px 18px' }}
          onClick={handleDownload}
        >
          Download Template
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <FormField label="Upload Employee File (.csv / .xlsx)" required>
            <Input type="file" accept=".csv,.xlsx,.xls" onChange={handleFile} required />
          </FormField>
        </div>
        {file && (
          <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 12 }}>
            Selected: <b style={{ color: '#111' }}>{file.name}</b> ({(file.size / 1024).toFixed(1)} KB)
          </div>
        )}
        {status && (
          <div style={{
            padding: '10px 16px', borderRadius: 7, fontSize: 13, marginBottom: 16,
            background: status.success ? '#f0fdf4' : '#fef2f2',
            color: status.success ? '#15803d' : '#dc2626',
            border: `1px solid ${status.success ? '#bbf7d0' : '#fecaca'}`,
          }}>
            {status.message}
          </div>
        )}
        <SubmitBtn label="Import Employees" />
      </form>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN HR MANAGEMENT COMPONENT
───────────────────────────────────────── */
const HR_SUBMODULES = [
  { id: 'hr-new-emp',          label: 'New Employee',                   component: <NewEmployee /> },
  { id: 'hr-view-emp',         label: 'View Employee',                  component: <ViewEmployee /> },
  { id: 'hr-gen-salary',       label: 'Generate Salary',                component: <GenerateSalary /> },
  { id: 'hr-pay-salary',       label: 'Pay Salary',                     component: <PaySalary /> },
  { id: 'hr-attendance',       label: 'Employee Attendance',            component: <EmployeeAttendance /> },
  { id: 'hr-att-report',       label: 'Employee Attendance Report',     component: <EmployeeAttendanceReport /> },
  { id: 'hr-sal-register',     label: 'Employee Salary Register',       component: <EmployeeSalaryRegister /> },
  { id: 'hr-new-dept',         label: 'New Department',                 component: <NewDepartment /> },
  { id: 'hr-att-report2',      label: 'Employee Attendance Report-II',  component: <AttendanceReport /> },
  { id: 'hr-att-sheet',        label: 'Attendance Sheet',               component: <AttendanceSheet /> },
  { id: 'hr-att-register',     label: 'Employee Attendance Register',   component: <AttendanceRegister /> },
  { id: 'hr-holiday',          label: 'Employee Holiday Mgmt',          component: <HolidayManagement /> },
  { id: 'hr-icard',            label: 'Employee I-Card',                component: <EmployeeICard /> },
  { id: 'hr-time-slot',        label: 'Time Slot Master',               component: <TimeSlotMaster /> },
  { id: 'hr-category',         label: 'Add Employee Category',          component: <AddCategory /> },
  { id: 'hr-leave-type',       label: 'Add Leave Type',                 component: <AddLeaveType /> },
  { id: 'hr-leave-alloc',      label: 'Leave Allocation',               component: <LeaveAllocation /> },
  { id: 'hr-leave-app',        label: 'Add Leave Application',          component: <AddLeaveApplication /> },
  { id: 'hr-leave-report',     label: 'Leave Application Report',       component: <LeaveReport /> },
  { id: 'hr-biometric',         label: 'Biometric Logs',                 component: <BiometricLogs /> },
  { id: 'hr-import',            label: 'Employee Import',                component: <EmployeeImport /> },
];

export { HR_SUBMODULES };

export default function HRManagement({ activeSub, onSubClick, onBack }) {
  const current = HR_SUBMODULES.find((s) => s.id === activeSub);

  if (current) {
    return (
      <div>
        <div className="breadcrumb">
          <span className="bc-link" onClick={onBack}>HR Management</span>
          {' › '}
          <b>{current.label}</b>
        </div>
        <div className="page-heading">{current.label}</div>
        <div style={{ marginTop: 24 }}>{current.component}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="breadcrumb"><b>HR Management</b></div>
      <div className="page-heading">HR Management</div>
    </div>
  );
}
