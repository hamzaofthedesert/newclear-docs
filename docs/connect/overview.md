---
id: overview
title: Newclear Connect
sidebar_label: Connect
description: Set up and use Newclear Connect — the desktop bridge for printing, integrations, and local hardware access.
---

# Newclear Connect

**Newclear Connect** is a lightweight desktop application that bridges your Newclear web account with local hardware and integrations on your computer. It runs in the background on your Windows or Mac machine and enables features that browser-based apps cannot access natively — most importantly, **direct receipt printer integration**.

**Setup Location:** `/settings/connect`

---

## What Newclear Connect Does

| Feature | Description |
|---------|-------------|
| **Receipt Printing** | Print receipts to any local network or USB printer without browser print dialogs |
| **Label Printing** | Send barcode/price labels to a connected label printer |
| **Local Hardware Bridge** | Connect USB barcode scanners, cash drawers, and display poles |
| **Background Sync** | Perform local data sync operations |
| **Integration Bridge** | Act as a middleware between Newclear and local software (ERP, accounting) |

---

## Installing Newclear Connect

### Step 1: Download the Installer

1. Go to **Settings → Connect** in Newclear
2. Click **Download Newclear Connect**
3. Choose your platform:
   - **Windows** (.exe installer)
   - **macOS** (.dmg installer)

### Step 2: Install

**Windows:**
1. Run the `.exe` installer
2. Follow the installation wizard
3. Allow Newclear Connect when prompted by Windows Defender/SmartScreen
4. Newclear Connect installs and starts automatically

**macOS:**
1. Open the `.dmg` file
2. Drag Newclear Connect to Applications
3. Open the app from Applications
4. Allow it in System Preferences → Security if prompted

### Step 3: Connect to Your Newclear Account

1. Newclear Connect opens to a setup screen
2. Click **Scan QR Code** 
3. In your Newclear web account, go to **Settings → Connect**
4. A QR code is displayed
5. Scan it with the Newclear Connect setup screen's camera mode (or click the QR icon)
6. The app is paired to your Newclear account automatically

---

## Receipt Printer Setup

Once Newclear Connect is installed and connected:

### Adding a Printer

1. Open Newclear Connect from the system tray (Windows) or menu bar (Mac)
2. Go to **Printers**
3. Click **+ Add Printer**
4. Choose printer type:
   - **Network Printer** — Printer on your local network (enter IP address)
   - **USB Printer** — Printer connected directly to this computer
   - **Windows Printer** — Any printer installed in Windows
5. Give it a name (e.g., "Front Desk Printer", "Thermal Receipt")
6. Click **Test Print** to verify

### Assigning to POS

1. In Newclear web, go to **Settings → Connect → Printers**
2. You'll see printers registered by the Connect app
3. Assign the desired printer as the **Default Receipt Printer**
4. Now when you click **Print Receipt** in POS, it prints directly — no dialog box

---

## Cash Drawer Integration

If you use an RJ11-connected cash drawer (most receipt printers have a cash drawer port):

1. Connect the cash drawer to your receipt printer's cash drawer port
2. In Newclear Connect → Printers, select your receipt printer
3. Enable **Cash Drawer** toggle
4. Set trigger: **On Sale Complete** or **Manual Only**

When a sale completes at POS (with cash payment selected), the drawer opens automatically.

---

## Label Printer Setup

For barcode and price label printing:

1. Connect a label printer (Zebra, DYMO, etc.) to your computer
2. In Newclear Connect → Printers, add the label printer
3. Configure label size and format
4. In Newclear, when printing labels (from Products → [Product] → Print Label), the job is sent directly to the label printer

---

## Display Pole (Customer Display)

If you have a customer-facing display pole:

1. Connect the display to your computer
2. In Newclear Connect → Hardware, add the display
3. The display shows: current cart items, totals, and payment confirmation in real time during POS sales

---

## Newclear Connect Status

The app runs in the background and shows status in your system tray/menu bar:

| Icon | Status |
|------|--------|
| 🟢 Green | Connected and running normally |
| 🟡 Yellow | Connected but printer offline |
| 🔴 Red | Disconnected from Newclear account |
| ⚫ Grey | Connect app not running |

If the icon is red, open Newclear Connect and re-pair it using the QR code from Settings → Connect.

---

## Auto-Start

Newclear Connect is configured to start automatically with your computer. If it doesn't:
- **Windows**: Check Task Manager → Startup apps
- **macOS**: Check System Preferences → Users & Groups → Login Items

---

## Updating Newclear Connect

When an update is available, Newclear Connect will show an update notification in the system tray. Click **Update Now** to install. Updates are small and install in seconds.
