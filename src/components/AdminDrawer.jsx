import React, { useState } from 'react';
import { X, Eye, EyeOff, Save, RotateCcw, Sliders, Globe, BarChart2, FileText } from 'lucide-react';
import { getEventLogs } from '../utils/analytics';
import { generateSitemapXml, generateRobotsTxt } from '../utils/seoStructuredData';

export default function AdminDrawer({ isOpen, onClose, siteData, setSiteData, onReset }) {
  const [activeTab, setActiveTab] = useState('sections'); // 'sections' | 'seo' | 'analytics'

  if (!isOpen) return null;

  const eventLogs = getEventLogs();

  const handleHeroChange = (field, value) => {
    setSiteData(prev => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value
      }
    }));
  };

  const handleContactChange = (field, value) => {
    setSiteData(prev => ({
      ...prev,
      contactStrip: {
        ...prev.contactStrip,
        [field]: value
      }
    }));
  };

  const handleAboutPageChange = (section, field, value) => {
    setSiteData(prev => ({
      ...prev,
      aboutPage: {
        ...prev.aboutPage,
        [section]: typeof prev.aboutPage[section] === 'object' && !Array.isArray(prev.aboutPage[section]) ? {
          ...prev.aboutPage[section],
          [field]: value
        } : value
      }
    }));
  };

  const toggleSection = (sectionKey) => {
    setSiteData(prev => ({
      ...prev,
      sectionVisibility: {
        ...prev.sectionVisibility,
        [sectionKey]: !prev.sectionVisibility[sectionKey]
      }
    }));
  };

  return (
    <div className={`admin-drawer ${isOpen ? 'open' : ''}`}>
      <div className="admin-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D4AF37' }}>
          <Sliders size={20} />
          <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF' }}>Admin Controls</h3>
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer' }}>
          <X size={20} />
        </button>
      </div>

      {/* Admin Tabs Header */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
        <button 
          onClick={() => setActiveTab('sections')}
          style={{ flex: 1, padding: '0.4rem', background: activeTab === 'sections' ? '#D4AF37' : 'none', color: activeTab === 'sections' ? '#07090E' : '#9CA3AF', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem' }}
        >
          Sections
        </button>
        <button 
          onClick={() => setActiveTab('seo')}
          style={{ flex: 1, padding: '0.4rem', background: activeTab === 'seo' ? '#D4AF37' : 'none', color: activeTab === 'seo' ? '#07090E' : '#9CA3AF', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem' }}
        >
          SEO & Schema
        </button>
        <button 
          onClick={() => setActiveTab('analytics')}
          style={{ flex: 1, padding: '0.4rem', background: activeTab === 'analytics' ? '#D4AF37' : 'none', color: activeTab === 'analytics' ? '#07090E' : '#9CA3AF', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem' }}
        >
          Analytics ({eventLogs.length})
        </button>
      </div>

      {activeTab === 'sections' && (
        <>
          <div style={{ marginBottom: '1.5rem', background: 'rgba(212, 175, 55, 0.08)', padding: '0.75rem', borderRadius: '6px', fontSize: '0.8rem', color: '#F3E5AB' }}>
            Live Admin Panel Simulator: Make real-time changes to site copy, About Us statements, and section visibility.
          </div>

          {/* ABOUT US PAGE CONTROLS */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#D4AF37', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              5.6 Mission & Vision Controls
            </h4>

            <div className="admin-field">
              <label>Mission Statement</label>
              <textarea 
                rows={3} 
                value={siteData.aboutPage.missionVision.mission} 
                onChange={(e) => handleAboutPageChange('missionVision', 'mission', e.target.value)}
              />
            </div>

            <div className="admin-field">
              <label>Vision Statement</label>
              <textarea 
                rows={3} 
                value={siteData.aboutPage.missionVision.vision} 
                onChange={(e) => handleAboutPageChange('missionVision', 'vision', e.target.value)}
              />
            </div>
          </div>

          {/* HERO BANNER CONTROLS */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#D4AF37', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              4.1 Hero Banner Controls
            </h4>

            <div className="admin-field">
              <label>Heading Text</label>
              <input 
                type="text" 
                value={siteData.hero.heading} 
                onChange={(e) => handleHeroChange('heading', e.target.value)}
              />
            </div>

            <div className="admin-field">
              <label>Supporting Copy</label>
              <textarea 
                rows={3} 
                value={siteData.hero.supportingCopy} 
                onChange={(e) => handleHeroChange('supportingCopy', e.target.value)}
              />
            </div>
          </div>

          {/* SECTION VISIBILITY */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#D4AF37', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              Section Visibility Toggles
            </h4>

            {Object.entries(siteData.sectionVisibility).map(([key, visible]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: '4px' }}>
                <span style={{ fontSize: '0.85rem', color: '#F3F4F6', textTransform: 'capitalize' }}>
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
                <button 
                  onClick={() => toggleSection(key)}
                  style={{ background: 'none', border: 'none', color: visible ? '#10B981' : '#EF4444', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  {visible ? <Eye size={16} /> : <EyeOff size={16} />}
                  <span style={{ fontSize: '0.75rem' }}>{visible ? 'Shown' : 'Hidden'}</span>
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'seo' && (
        <div style={{ fontSize: '0.85rem' }}>
          <div style={{ marginBottom: '1.5rem', background: 'rgba(212, 175, 55, 0.08)', padding: '0.75rem', borderRadius: '6px', color: '#F3E5AB' }}>
            Structured Data & XML Generator. JSON-LD schema includes Person (Guruji), Organization, Service, FAQPage, & BreadcrumbList.
          </div>

          <h4 style={{ color: '#D4AF37', marginBottom: '0.5rem' }}>Generated Sitemap (sitemap.xml)</h4>
          <pre style={{ background: '#07090E', padding: '0.75rem', borderRadius: '4px', fontSize: '0.7rem', color: '#10B981', overflowX: 'auto', marginBottom: '1.5rem' }}>
            {generateSitemapXml()}
          </pre>

          <h4 style={{ color: '#D4AF37', marginBottom: '0.5rem' }}>Robots Rules (robots.txt)</h4>
          <pre style={{ background: '#07090E', padding: '0.75rem', borderRadius: '4px', fontSize: '0.7rem', color: '#60A5FA', overflowX: 'auto' }}>
            {generateRobotsTxt()}
          </pre>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div style={{ fontSize: '0.85rem' }}>
          <div style={{ marginBottom: '1.5rem', background: 'rgba(16, 185, 129, 0.08)', padding: '0.75rem', borderRadius: '6px', color: '#34D399' }}>
            Live Event Tracker (Tracking call_click, whatsapp_click, booking_request, form_submit).
          </div>

          {eventLogs.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {eventLogs.map((log, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.6rem', borderRadius: '4px', borderLeft: '3px solid #D4AF37' }}>
                  <div style={{ fontWeight: 'bold', color: '#FFF' }}>{log.eventName}</div>
                  <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>{new Date(log.timestamp).toLocaleTimeString()}</div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: '#9CA3AF' }}>No user events tracked yet. Try clicking Call, WhatsApp, or Booking buttons.</p>
          )}
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
        <button className="btn btn-gold btn-sm btn-full" onClick={onClose}>
          <Save size={16} />
          <span>Apply & Close</span>
        </button>
        <button className="btn btn-outline btn-sm" onClick={onReset} title="Reset to Defaults">
          <RotateCcw size={16} />
        </button>
      </div>
    </div>
  );
}
