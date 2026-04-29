import { ArrowRight, ShieldCheck, Sparkles, Layers, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function PoliciesPage() {
  const { setCurrentPage } = useApp();

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[var(--bg-base)] border-b border-[var(--border)]" style={{ paddingTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-8">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-[var(--text-3)] hover:text-white transition-colors mb-4 text-sm uppercase tracking-widest font-medium"
          >
            <ArrowRight size={16} className="rotate-180" />
            Back to Home
          </button>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Policies & Guardrails</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-12">
        {/* Intro */}
        <div className="mb-16">
          <p className="text-lg text-[var(--text-2)] leading-relaxed max-w-3xl">
            Our AI governance framework ensures that intelligent agents operate with enterprise-grade security, ethical considerations, and compliance standards. These guardrails protect data, maintain transparency, and enable responsible AI deployment across the organization.
          </p>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* 1. Data Security & Privacy */}
          <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <ShieldCheck size={24} className="text-[#ffb000]" />
              Data Security & Privacy
            </h2>
            <ul className="space-y-3 text-[var(--text-3)]">
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Encrypted Data Transit:</strong> All data exchanged with AI agents uses TLS 1.3 encryption.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>No Public LLM Exposure:</strong> Zero sensitive company data is sent to external AI providers without explicit approval.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Data Retention:</strong> All interaction logs are encrypted and retained for 90 days, then purged.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Compliance:</strong> GDPR, CCPA, and industry-specific data handling regulations.</span>
              </li>
            </ul>
          </div>

          {/* 2. Ethical AI Guidelines */}
          <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Sparkles size={24} className="text-[#00d9ff]" />
              Ethical AI Guidelines
            </h2>
            <ul className="space-y-3 text-[var(--text-3)]">
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Transparency:</strong> Users must know when they're interacting with AI agents.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Bias Mitigation:</strong> Regular audits ensure agent outputs don't perpetuate discrimination.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Human Oversight:</strong> High-impact decisions remain under human control.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Accountability:</strong> Clear ownership and escalation paths for all AI actions.</span>
              </li>
            </ul>
          </div>

          {/* 3. Access Control & Governance */}
          <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Layers size={24} className="text-[#00ff88]" />
              Access Control & Governance
            </h2>
            <ul className="space-y-3 text-[var(--text-3)]">
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Role-Based Access:</strong> Agents operate within defined permission boundaries.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Audit Logging:</strong> All agent actions are logged for compliance verification.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Approval Workflows:</strong> Sensitive operations require multi-level approval.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Continuous Monitoring:</strong> Real-time anomaly detection across all agents.</span>
              </li>
            </ul>
          </div>

          {/* 4. Compliance & Auditing */}
          <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border)]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Zap size={24} className="text-[#ff6b9d]" />
              Compliance & Auditing
            </h2>
            <ul className="space-y-3 text-[var(--text-3)]">
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Regular Assessments:</strong> Quarterly security and compliance audits.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Third-Party Reviews:</strong> Independent verification of AI safety measures.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Incident Response:</strong> 24/7 incident response team for breaches or misuse.</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={16} className="text-[var(--text-5)] shrink-0 mt-0.5" />
                <span><strong>Documentation:</strong> Complete audit trails available for regulatory review.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Guardrails Section */}
        <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border)] mb-16">
          <h2 className="text-2xl font-semibold mb-6">Agent-Specific Guardrails</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Rate Limiting & Throttling</h3>
              <p className="text-[var(--text-3)]">Each agent has configurable rate limits to prevent abuse and resource exhaustion. Burst detection triggers automated rollback.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Output Validation</h3>
              <p className="text-[var(--text-3)]">All agent outputs are validated against content policies before delivery. Harmful or misleading outputs are flagged and reviewed.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Data Lineage Tracking</h3>
              <p className="text-[var(--text-3)]">Full traceability of data sources and transformations ensures accountability and enables issue remediation.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Contextual Authorization</h3>
              <p className="text-[var(--text-3)]">AI agents respect organizational hierarchy and confidentiality rules, adapting responses based on user context.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[var(--bg-card)] to-[var(--bg-base)] p-8 rounded-2xl border border-[var(--border)]">
          <h2 className="text-2xl font-semibold mb-4">Questions About Our Policies?</h2>
          <p className="text-[var(--text-3)] mb-6">
            Our security and compliance team is available to address concerns about data handling, governance, or agent behavior. Reach out through your internal support channels.
          </p>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-[#f0f0f0] transition-colors">
            Contact Security Team
          </button>
        </div>
      </div>
    </div>
  );
}
