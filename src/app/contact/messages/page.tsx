"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

function MessagesPageContent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";

  useEffect(() => {
    if (isAdmin) {
      fetch("/api/contact?admin=true")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setMessages(data);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#06101D] flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-ivory text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted mb-8">You do not have permission to view this page.</p>
          <Link href="/contact" className="text-gold hover:underline">Return to Contact</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#06101D] text-[#F2EDE3] p-8 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">System Submissions</h1>
            <p className="text-muted">Reviewing all contact form inquiries.</p>
          </div>
          <Link href="/contact" className="text-gold text-sm hover:underline">← Back to Site</Link>
        </div>

        {loading ? (
          <div className="py-20 text-center text-muted">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="py-20 text-center text-muted border border-white/5 rounded-2xl bg-white/5">No messages found.</div>
        ) : (
          <div className="grid gap-6">
            {messages.map((msg) => (
              <div key={msg.id} className="bg-[#0D1D30] border border-white/5 p-6 rounded-2xl hover:border-gold/20 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-ivory">{msg.name}</h3>
                    <p className="text-sm text-gold">{msg.email}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-widest text-muted">{new Date(msg.createdAt).toLocaleDateString()}</span>
                    <div className="mt-1">
                      <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-muted uppercase">{msg.subject}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-black/20 p-4 rounded-xl text-sm leading-relaxed text-ivory/80 whitespace-pre-wrap">
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function MessagesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy text-ivory flex items-center justify-center">Loading...</div>}>
      <MessagesPageContent />
    </Suspense>
  );
}
