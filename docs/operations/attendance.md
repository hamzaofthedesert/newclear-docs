---
id: attendance
title: Attendance
sidebar_label: Attendance
description: Track team attendance in Newclear — barcode clock-in/out, attendance records, salary management, and pay runs.
---

# Attendance

Newclear includes a built-in **Attendance** system for tracking employee clock-ins, breaks, and clock-outs using barcode scan. It integrates with salary management to calculate hours worked and run payroll.

**Location:** `/attendance`

---

## How Attendance Works

Each user has a unique attendance barcode printed on their staff badge. When they arrive at work, they scan their barcode at a designated terminal (any device with Newclear open and a barcode scanner). This logs a clock-in event.

The same scan registers different events based on context:
- **First scan of the day** → Clock In
- **Scan during work hours** → Start Break or Return from Break (toggles)
- **Last scan** → Clock Out

---

## Setting Up Attendance

### Step 1: Generate User Barcodes
Each team member needs a barcode badge:
1. Go to **Settings → Users → [User Profile]**
2. Scroll to **Attendance Barcode**
3. Click **Generate Barcode**
4. Click **Print** to print the badge

### Step 2: Set Up a Scan Station
Any device with Newclear open works as a scan station. For a dedicated terminal:
1. Open Newclear on the device
2. Navigate to `/attendance/scan`
3. The page shows a full-screen scan input field
4. Connect a barcode scanner to the device
5. Staff can scan their badge without needing to log in themselves

### Step 3: Configure Work Hours (Optional)
Go to **Settings → Attendance** to configure:
- Standard work hours per day
- Overtime threshold
- Break deduction rules
- Pay period (weekly, bi-weekly, monthly)

---

## Clock-In/Out Flow

### Clock In
1. Staff member scans their badge at the attendance station
2. System records: User, Timestamp, Action = Clock In
3. A confirmation sound/visual plays (green checkmark)

### Break
1. Staff scans badge mid-shift
2. System records: Action = Break Start
3. When they return: scan again → Action = Break End

### Clock Out
1. Staff scans badge at end of shift
2. System records: Action = Clock Out
3. Hours worked for the shift are calculated

---

## Viewing Attendance Records

### All Staff Attendance
1. Go to **Operations → Attendance**
2. The attendance board shows today's status for all staff:
   - Currently clocked in (with time since clock-in)
   - On break
   - Clocked out
   - Absent (no record today)

### Individual Attendance History
1. Click a staff member's name
2. View their full attendance history:
   - Date
   - Clock-in time
   - Break time (total)
   - Clock-out time
   - Hours worked

### Filtering
Filter attendance records by:
- Date range
- Individual user
- Status (present, absent, partial day)

---

## Manual Attendance Adjustments

Admins can manually add or edit attendance records:

1. Go to the attendance record you want to adjust
2. Click **Edit**
3. Change clock-in/out times or break duration
4. Add a note explaining the adjustment
5. Save

All manual changes are logged with the admin who made them.

---

## Salary Management

### Setting Employee Salary/Hourly Rate

1. Go to **Settings → Users → [Employee]**
2. In the **Payroll** section, enter:
   - **Pay Type**: Hourly or Salary
   - **Rate**: Hourly rate or monthly salary
   - **Overtime Rate**: Multiplier for overtime hours (e.g., 1.5x)
   - **Pay Period**: Weekly, Bi-weekly, Semi-monthly, Monthly

### Running a Pay Period

1. Go to **Operations → Attendance → Pay Runs**
2. Click **+ New Pay Run**
3. Select:
   - **Pay Period Start** — Beginning of the pay period
   - **Pay Period End** — End of the pay period
   - **Employees** — All or select specific employees
4. Click **Calculate**

Newclear calculates for each employee:
- Regular hours worked
- Overtime hours
- Break deductions
- **Gross Pay** = (Regular hours × Rate) + (Overtime hours × Overtime Rate)

5. Review the calculations
6. Make manual adjustments if needed (e.g., add bonus, deduct advance)
7. Click **Mark as Paid** to finalize the pay run

### Pay Run History
All pay runs are saved with full detail for reference and auditing.

---

## Attendance Reports

From **Operations → Attendance → Reports**:

- **Monthly Summary** — Hours per employee per month
- **Overtime Report** — Who worked overtime and how much
- **Absence Report** — Days with no attendance record
- **Payroll Summary** — Gross pay calculations ready for your payroll processor

Export any report as CSV or PDF.

---

:::tip
Print staff barcodes on durable laminated cards or key fobs — they scan faster and last longer than paper badges.
:::
