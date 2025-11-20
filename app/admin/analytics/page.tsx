'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';

interface Session {
  id: number;
  session_id: string;
  page_name: string;
  source: string | null;
  referrer: string | null;
  user_agent: string;
  ip_address: string;
  created_at: string;
}

interface Event {
  id: number;
  session_id: string;
  event_type: string;
  metadata: any;
  created_at: string;
}

interface UserDetail {
  id: number;
  session_id: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  form_type: string;
  metadata: any;
  created_at: string;
}

interface EventAggregation {
  event_type: string;
  count: number;
}

interface LeadSession {
  session_id: string;
  lead_name: string;
  lead_email: string | null;
  form_type: string;
  created_at: string;
  total_events: number;
  events_breakdown: Record<string, number>;
}

interface PageSummary {
  page: string;
  sessions: number;
  events: number;
  leads: number;
  conversion_rate: number;
}

interface PageComparison {
  page: string;
  count: number;
}

type TabType = 'sessions' | 'events' | 'leads' | 'event-stats' | 'lead-insights' | 'page-analytics';

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('page-analytics');
  const [sessions, setSessions] = useState<Session[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [leads, setLeads] = useState<UserDetail[]>([]);
  const [eventAggregation, setEventAggregation] = useState<EventAggregation[]>([]);
  const [leadSessions, setLeadSessions] = useState<LeadSession[]>([]);
  const [aggregatedLeadEvents, setAggregatedLeadEvents] = useState<EventAggregation[]>([]);
  const [pageSummary, setPageSummary] = useState<PageSummary[]>([]);
  const [eventsByPage, setEventsByPage] = useState<PageComparison[]>([]);
  const [leadsByPage, setLeadsByPage] = useState<PageComparison[]>([]);
  const [availablePages, setAvailablePages] = useState<string[]>([]);
  const [pageFilter, setPageFilter] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [days, setDays] = useState(7);

  useEffect(() => {
    fetchData();
  }, [activeTab, days, pageFilter]);

  const fetchData = async () => {
    setIsLoading(true);
    setError('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

      // Always fetch page summary to populate filter
      if (availablePages.length === 0) {
        const summaryRes = await fetch(`${apiUrl}/analytics/pages/summary?days=${days}`);
        const summaryData = await summaryRes.json();
        if (summaryData.pages) {
          setAvailablePages(summaryData.pages.map((p: PageSummary) => p.page));
        }
      }

      if (activeTab === 'page-analytics') {
        // Fetch page summary and comparison
        const [summaryRes, comparisonRes] = await Promise.all([
          fetch(`${apiUrl}/analytics/pages/summary?days=${days}`),
          fetch(`${apiUrl}/analytics/pages/comparison?days=${days}`)
        ]);
        const summaryData = await summaryRes.json();
        const comparisonData = await comparisonRes.json();

        setPageSummary(summaryData.pages || []);
        setEventsByPage(comparisonData.events_by_page || []);
        setLeadsByPage(comparisonData.leads_by_page || []);
        setAvailablePages(summaryData.pages?.map((p: PageSummary) => p.page) || []);
      } else if (activeTab === 'sessions') {
        const url = pageFilter
          ? `${apiUrl}/analytics/filtered?days=${days}&page=${encodeURIComponent(pageFilter)}`
          : `${apiUrl}/analytics/sessions?days=${days}`;
        const res = await fetch(url);
        const data = await res.json();
        setSessions(pageFilter ? data.sessions?.data || [] : data.sessions || []);
      } else if (activeTab === 'events') {
        const url = pageFilter
          ? `${apiUrl}/analytics/filtered?days=${days}&page=${encodeURIComponent(pageFilter)}`
          : `${apiUrl}/analytics/events?days=${days}`;
        const res = await fetch(url);
        const data = await res.json();
        setEvents(pageFilter ? data.events?.data || [] : data.events || []);
      } else if (activeTab === 'leads') {
        const url = pageFilter
          ? `${apiUrl}/analytics/filtered?days=${days}&page=${encodeURIComponent(pageFilter)}`
          : `${apiUrl}/analytics/user-details?days=${days}`;
        const res = await fetch(url);
        const data = await res.json();
        setLeads(pageFilter ? data.leads?.data || [] : data.user_details || []);
      } else if (activeTab === 'event-stats') {
        if (pageFilter) {
          const res = await fetch(`${apiUrl}/analytics/filtered?days=${days}&page=${encodeURIComponent(pageFilter)}`);
          const data = await res.json();
          setEventAggregation(data.event_aggregation || []);
        } else {
          const res = await fetch(`${apiUrl}/analytics/events/aggregation?days=${days}&limit=20`);
          const data = await res.json();
          setEventAggregation(data.aggregation || []);
        }
      } else if (activeTab === 'lead-insights') {
        const res = await fetch(`${apiUrl}/analytics/leads/events?days=${days}`);
        const data = await res.json();
        setLeadSessions(data.lead_sessions || []);
        setAggregatedLeadEvents(data.aggregated_events || []);
      }
    } catch (err) {
      console.error('Error fetching analytics:', err);
      setError('Failed to load analytics data');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) {
      return 'N/A';
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const tabs = [
    { id: 'page-analytics' as TabType, label: 'Page Analytics', icon: '📄', count: pageSummary.length },
    { id: 'sessions' as TabType, label: 'Sessions', icon: '👥', count: sessions.length },
    { id: 'events' as TabType, label: 'Events', icon: '📊', count: events.length },
    { id: 'leads' as TabType, label: 'Leads', icon: '🎯', count: leads.length },
    { id: 'event-stats' as TabType, label: 'Event Stats', icon: '📈', count: eventAggregation.length },
    { id: 'lead-insights' as TabType, label: 'Lead Insights', icon: '🔍', count: leadSessions.length }
  ];

  const dayOptions = [
    { value: 1, label: 'Last 24 hours' },
    { value: 7, label: 'Last 7 days' },
    { value: 30, label: 'Last 30 days' },
    { value: 90, label: 'Last 90 days' }
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
            <p className="text-gray-600">
              Detailed tracking data and user behavior
              {pageFilter && <span className="ml-2 text-green-600 font-medium">• Filtered: {pageFilter}</span>}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Page Filter */}
            {activeTab !== 'page-analytics' && (
              <select
                value={pageFilter}
                onChange={(e) => setPageFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="">All Pages</option>
                {availablePages.map((page) => (
                  <option key={page} value={page}>
                    {page}
                  </option>
                ))}
              </select>
            )}

            {/* Time Range Selector */}
            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            >
              {dayOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 border-b-2 transition ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600 font-semibold'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  activeTab === tab.id
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading analytics data...</p>
          </div>
        ) : (
          <>
            {/* Page Analytics Tab */}
            {activeTab === 'page-analytics' && (
              <div className="space-y-6">
                {/* Page Summary Table */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Page Performance Summary</h3>
                  </div>
                  {pageSummary.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      No page data found for the selected time period
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Page</th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase">Sessions</th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase">Events</th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase">Leads</th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase">Conversion</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {pageSummary.map((page) => (
                            <tr key={page.page} className="hover:bg-gray-50 transition">
                              <td className="px-6 py-4">
                                <span className="text-sm font-medium text-gray-900">{page.page}</span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <span className="text-sm font-bold text-blue-600">{page.sessions}</span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <span className="text-sm font-bold text-purple-600">{page.events}</span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <span className="text-sm font-bold text-green-600">{page.leads}</span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <span className={`text-sm font-bold ${page.conversion_rate > 5 ? 'text-green-600' : page.conversion_rate > 2 ? 'text-yellow-600' : 'text-gray-600'}`}>
                                  {page.conversion_rate}%
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {/* Side-by-Side Comparison Graphs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Events by Page */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Events by Page</h3>
                    {eventsByPage.length === 0 ? (
                      <div className="p-4 text-center text-gray-500">No data</div>
                    ) : (
                      <div className="space-y-3">
                        {eventsByPage.map((item) => {
                          const maxCount = eventsByPage[0]?.count || 1;
                          const percentage = (item.count / maxCount) * 100;
                          return (
                            <div key={item.page}>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700 truncate" title={item.page}>
                                  {item.page}
                                </span>
                                <span className="text-sm font-bold text-purple-600">{item.count}</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Leads by Page */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Leads by Page</h3>
                    {leadsByPage.length === 0 ? (
                      <div className="p-4 text-center text-gray-500">No data</div>
                    ) : (
                      <div className="space-y-3">
                        {leadsByPage.map((item) => {
                          const maxCount = leadsByPage[0]?.count || 1;
                          const percentage = (item.count / maxCount) * 100;
                          return (
                            <div key={item.page}>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700 truncate" title={item.page}>
                                  {item.page}
                                </span>
                                <span className="text-sm font-bold text-green-600">{item.count}</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Conversion Rate Comparison */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Conversion Rate by Page</h3>
                  {pageSummary.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">No data</div>
                  ) : (
                    <div className="space-y-3">
                      {pageSummary
                        .sort((a, b) => b.conversion_rate - a.conversion_rate)
                        .map((page) => {
                          const maxRate = Math.max(...pageSummary.map(p => p.conversion_rate)) || 1;
                          const percentage = (page.conversion_rate / maxRate) * 100;
                          return (
                            <div key={page.page}>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700 truncate" title={page.page}>
                                  {page.page}
                                </span>
                                <span className="text-sm font-bold text-orange-600">{page.conversion_rate}%</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Sessions Tab */}
            {activeTab === 'sessions' && (
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {sessions.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    No sessions found for the selected time period
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Page</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Source</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Referrer</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">IP Address</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Created At</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {sessions.map((session) => (
                          <tr key={session.id} className="hover:bg-gray-50 transition">
                            <td className="px-6 py-4">
                              <span className="text-sm font-medium text-gray-900">{session.page_name}</span>
                            </td>
                            <td className="px-6 py-4">
                              {session.source ? (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                  {session.source}
                                </span>
                              ) : (
                                <span className="text-sm text-gray-400">Direct</span>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-gray-600 truncate max-w-xs block">
                                {session.referrer || '-'}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-gray-600">{session.ip_address}</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-gray-600">{formatDate(session.created_at)}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {events.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    No events found for the selected time period
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Event Type</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Metadata</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Session ID</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Created At</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {events.map((event) => (
                          <tr key={event.id} className="hover:bg-gray-50 transition">
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                                {event.event_type}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <details className="cursor-pointer">
                                <summary className="text-sm text-green-600 hover:text-green-700">View Details</summary>
                                <pre className="mt-2 text-xs bg-gray-50 p-2 rounded border border-gray-200 overflow-auto max-w-md">
                                  {JSON.stringify(event.metadata, null, 2)}
                                </pre>
                              </details>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-xs text-gray-500 font-mono">{event.session_id.substring(0, 8)}...</span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-gray-600">{formatDate(event.created_at)}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Leads Tab */}
            {activeTab === 'leads' && (
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {leads.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    No leads found for the selected time period
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Contact</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Message</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Form Type</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Created At</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {leads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-gray-50 transition">
                            <td className="px-6 py-4">
                              <span className="text-sm font-medium text-gray-900">{lead.name || '-'}</span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="space-y-1">
                                {lead.email && (
                                  <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href={`mailto:${lead.email}`} className="text-sm text-blue-600 hover:text-blue-700">
                                      {lead.email}
                                    </a>
                                  </div>
                                )}
                                {lead.phone && (
                                  <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href={`tel:${lead.phone}`} className="text-sm text-green-600 hover:text-green-700">
                                      {lead.phone}
                                    </a>
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              {lead.message ? (
                                <span className="text-sm text-gray-600 line-clamp-2">{lead.message}</span>
                              ) : (
                                <span className="text-sm text-gray-400">-</span>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                {lead.form_type}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-gray-600">{formatDate(lead.created_at)}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Event Stats Tab - Bar Graph */}
            {activeTab === 'event-stats' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Top 20 Events by Count</h3>
                {eventAggregation.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    No events found for the selected time period
                  </div>
                ) : (
                  <div className="space-y-4">
                    {eventAggregation.map((item, index) => {
                      const maxCount = eventAggregation[0]?.count || 1;
                      const percentage = (item.count / maxCount) * 100;
                      return (
                        <div key={item.event_type} className="flex items-center gap-4">
                          <div className="w-8 text-sm text-gray-500 text-right">{index + 1}</div>
                          <div className="flex-grow">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-gray-700">{item.event_type}</span>
                              <span className="text-sm font-bold text-gray-900">{item.count}</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-6 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Lead Insights Tab */}
            {activeTab === 'lead-insights' && (
              <div className="space-y-6">
                {/* Aggregated Events for Lead Sessions */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Events in Lead-Generating Sessions</h3>
                  {aggregatedLeadEvents.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      No lead sessions found for the selected time period
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {aggregatedLeadEvents.slice(0, 10).map((item, index) => {
                        const maxCount = aggregatedLeadEvents[0]?.count || 1;
                        const percentage = (item.count / maxCount) * 100;
                        return (
                          <div key={item.event_type} className="flex items-center gap-4">
                            <div className="w-6 text-sm text-gray-500 text-right">{index + 1}</div>
                            <div className="flex-grow">
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">{item.event_type}</span>
                                <span className="text-sm font-bold text-gray-900">{item.count}</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Individual Lead Sessions */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Lead Session Details</h3>
                    <p className="text-sm text-gray-500">Event breakdown per lead</p>
                  </div>
                  {leadSessions.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      No lead sessions found for the selected time period
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {leadSessions.map((lead) => (
                        <div key={lead.session_id} className="p-6 hover:bg-gray-50 transition">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="font-semibold text-gray-900">{lead.lead_name}</h4>
                              {lead.lead_email && (
                                <p className="text-sm text-gray-600">{lead.lead_email}</p>
                              )}
                              <p className="text-xs text-gray-500 mt-1">
                                {formatDate(lead.created_at)} • {lead.form_type}
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-700">
                                {lead.total_events} events
                              </span>
                            </div>
                          </div>
                          {Object.keys(lead.events_breakdown).length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {Object.entries(lead.events_breakdown)
                                .sort(([, a], [, b]) => b - a)
                                .map(([eventType, count]) => (
                                  <span
                                    key={eventType}
                                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100 text-xs"
                                  >
                                    <span className="text-gray-700">{eventType}</span>
                                    <span className="font-bold text-gray-900">{count}</span>
                                  </span>
                                ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </AdminLayout>
  );
}
