// src/app/docs/teams/page.tsx
import React from "react";
import { Users, UserPlus, Shield, Settings } from "lucide-react";

export default function TeamWorkspacesPage() {
  return (
    <div className="docs-page">
      <header className="mb-16">
        <div className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Core Feature</div>
        <h1>Team Workspaces</h1>
        <p className="lead">
          Collaborate with other creatives and managers. Delivami Team Workspaces 
          allow you to share projects, invoices, and payouts across your entire organization.
        </p>
      </header>

      <section id="orgs">
        <h2>Organizations</h2>
        <p>
          Every Delivami account is part of an Organization. On the <strong>Free, Creator, and Pro</strong> plans, 
          your organization is private to you. <strong>Studio</strong> users can 
          invite team members to their organization.
        </p>
        <div className="p-8 bg-navy-mid border border-white/5 rounded-2xl mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Users size={20} className="text-gold" />
            <h4 className="m-0 text-lg">Centralized Billing</h4>
          </div>
          <p className="text-sm text-muted mb-0">
            Invoices and payouts are managed at the organization level, 
            ensuring all team members see a unified financial state of the studio.
          </p>
        </div>
      </section>

      <section id="invites" className="mt-20">
        <h2>Inviting Members</h2>
        <p>
          You can invite team members via email. They will receive an invitation 
          to join your organization and set up their own login credentials.
        </p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold">1</td>
                <td>Settings &gt; Team</td>
                <td>Navigate to the Team management section.</td>
              </tr>
              <tr>
                <td className="font-bold">2</td>
                <td>Enter Email</td>
                <td>Provide the email address of the invited member.</td>
              </tr>
              <tr>
                <td className="font-bold">3</td>
                <td>Choose Role</td>
                <td>Select between Member, Manager, or Admin.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="roles" className="mt-20">
        <h2>Roles & Permissions</h2>
        <p>
          Control who can see financial data or modify project settings within your team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <Shield size={24} className="text-gold mb-4" />
            <h4 className="font-bold mb-2">Admins</h4>
            <p className="text-xs text-muted leading-relaxed">
              Full access to Brand, Payouts, and Team management. Only Admins can modify the subscription.
            </p>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <Settings size={24} className="text-gold mb-4" />
            <h4 className="font-bold mb-2">Members</h4>
            <p className="text-xs text-muted leading-relaxed">
              Can create projects and upload files, but cannot view overall organization payouts or team settings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
