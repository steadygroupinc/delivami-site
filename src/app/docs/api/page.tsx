// src/app/docs/api/page.tsx
import React from "react";
import { Metadata } from "next";
import { Code2, Terminal, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "REST API Documentation — Delivami",
  description: "Learn how to use the Delivami REST API to automate your project management and workflows.",
};

export default function ApiDocsPage() {
  return (
    <div className="api-docs">
      <header className="mb-16">
        <div className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4">Developer Reference</div>
        <h1>REST API Reference</h1>
        <p className="lead">
          The Delivami API is organized around REST. Our API has predictable resource-oriented URLs, 
          returns JSON-encoded responses, and uses standard HTTP response codes.
        </p>
      </header>

      <section id="auth">
        <h2 id="authentication">Authentication</h2>
        <p>
          The Delivami API uses API keys to authenticate requests. You can view and manage your API keys 
          in the <a href="/settings" className="text-gold font-semibold hover:underline">Dashboard Settings</a>.
        </p>
        <p>
          Authentication to the API is performed via the <code>x-api-key</code> header. 
          Provide your API key as the value of this header in every request.
        </p>
        
        <pre>
          <code>x-api-key: dv_live_xxxxxxxxxxxxxxxx</code>
        </pre>

        <div className="p-8 bg-gold/5 border border-gold/10 rounded-2xl mt-8">
          <div className="flex gap-2 items-center text-gold font-bold text-xs uppercase mb-3 tracking-widest">
            <ShieldCheck size={14} /> Security Note
          </div>
          <p className="m-0 text-sm text-muted leading-relaxed">
            Your API keys carry many privileges, so be sure to keep them secure! 
            Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
          </p>
        </div>
      </section>

      <section id="projects">
        <h2 id="project-management">Projects</h2>
        <p>Project objects allow you to manage the creative deliveries and invoices for your clients programmatically.</p>
        
        <div className="endpoint-block mt-12">
          <div className="endpoint-header">
            <span className="endpoint-tag get">GET</span>
            <span className="endpoint-url">/api/projects</span>
          </div>
          
          <div className="p-8">
            <h3>List all projects</h3>
            <p>Returns a list of your projects. The projects are returned sorted by creation date, with the most recent projects appearing first.</p>
            
            <h4>Example Request</h4>
            <pre>
              <code>
{`curl -H "x-api-key: dv_live_..." \\
     https://delivami.com/api/projects`}
              </code>
            </pre>
          </div>
        </div>

        <div className="endpoint-block mt-16">
          <div className="endpoint-header">
            <span className="endpoint-tag post">POST</span>
            <span className="endpoint-url">/api/projects</span>
          </div>
          
          <div className="p-8">
            <h3>Create a project</h3>
            <p>Creates a new project object. Use this to prepare a delivery for a client before uploading files.</p>
            
            <h4>Attributes</h4>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-mono text-xs text-gold">title</td>
                    <td className="text-xs text-muted">string</td>
                    <td><span className="text-[10px] bg-gold/10 text-gold px-1.5 py-0.5 rounded font-bold mr-2">REQUIRED</span> The name of the project.</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-xs text-gold">clientEmail</td>
                    <td className="text-xs text-muted">string</td>
                    <td>The email address where delivery notifications will be sent.</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-xs text-gold">category</td>
                    <td className="text-xs text-muted">string</td>
                    <td>Optional tag for organization, e.g., "Photography".</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-xs text-gold">priceAmount</td>
                    <td className="text-xs text-muted">integer</td>
                    <td>Total project value in minor units (e.g., 100 cents = 1 USD).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>Example Request</h4>
            <pre>
              <code>
{`curl -X POST -H "x-api-key: dv_live_..." \\
     -H "Content-Type: application/json" \\
     -d '{
       "title": "Summer Campaign",
       "category": "Video Production",
       "clientEmail": "marketing@nike.com",
       "priceAmount": 125000
     }' \\
     https://delivami.com/api/projects`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section id="plans" className="mt-24 pt-24 border-t border-white/5">
        <h2 id="plan-gating">Plan Gating</h2>
        <p>Access to the Delivami API is a premium feature. Depending on your current plan, certain limits and access rights apply.</p>
        
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Subscription Plan</th>
                <th>API Access</th>
                <th>Active Keys</th>
                <th>Platform Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold">Free</td>
                <td className="text-red-400">None</td>
                <td>0</td>
                <td>2.5%</td>
              </tr>
              <tr>
                <td className="font-bold">Creator</td>
                <td className="text-red-400">None</td>
                <td>0</td>
                <td>0%</td>
              </tr>
              <tr>
                <td className="font-bold">Pro</td>
                <td className="text-red-400">None</td>
                <td>0</td>
                <td>0%</td>
              </tr>
              <tr>
                <td className="font-bold">Studio</td>
                <td className="text-gold font-bold">Full Access</td>
                <td>Up to 10</td>
                <td>0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
