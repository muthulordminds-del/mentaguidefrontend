import React, { useState } from 'react';
import { scheduleData } from '../../data/eventdata';
import { FaRegClock, FaMapMarkerAlt, FaFilePdf, FaCalendarPlus } from 'react-icons/fa';


const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(scheduleData[0].dayId);

  const currentDayData = scheduleData.find((d) => d.dayId === activeDay);

  // Group events by time
  const groupedEvents = currentDayData?.events.reduce((acc, event) => {
    if (!acc[event.time]) {
      acc[event.time] = [];
    }
    acc[event.time].push(event);
    return acc;
  }, {}) || {};

  return (
    <section className="w-full bg-[#faf9f8] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-gilroy text-4xl font-black text-[#1c0d03] sm:text-5xl">Schedule</h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-[#f47a00]"></div>
          <p className="mx-auto mt-6 max-w-2xl font-gilroy-light text-sm font-semibold leading-6 text-[#5f524b] sm:text-base">
            A thoughtfully curated five-hour program featuring expert keynote sessions on emerging business trends, strategic growth, corporate governance, sustainability, and innovation. The event concludes with a networking lunch and an interactive discussion, providing attendees with valuable opportunities to exchange ideas, build strategic partnerships, and explore future business opportunities.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {scheduleData.map((day) => (
            <button
              key={day.dayId}
              onClick={() => setActiveDay(day.dayId)}
              className={`rounded-full px-6 py-2.5 font-gilroy text-sm font-bold transition-all sm:px-8 sm:py-3 sm:text-base ${
                activeDay === day.dayId
                  ? 'bg-[#f47a00] text-white shadow-lg'
                  : 'border border-gray-300 bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="mt-14 space-y-10 lg:space-y-12">
          {Object.entries(groupedEvents).map(([time, events]) => (
            <div key={time} className="flex flex-col gap-6 lg:flex-row lg:gap-10">
              {/* Time Column */}
              <div className="flex-shrink-0 text-left lg:w-32 lg:text-right">
                <p className="font-gilroy text-xl font-black text-[#1c0d03] sm:text-2xl">{time}</p>
                <p className="mt-1 font-gilroy-light text-xs font-semibold text-gray-500">{events[0].duration}</p>
              </div>

              {/* Events Column */}
              <div
                className={`grid w-full gap-6 ${
                  events.length === 1 && events[0].fullWidth
                    ? 'grid-cols-1'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {events.map((event) => (
                  <div
                    key={event.id}
                    className={`relative overflow-hidden rounded-xl bg-white p-6 shadow-[0_8px_24px_rgba(149,157,165,0.15)] transition-transform hover:-translate-y-1 ${
                      event.isBreak ? 'bg-[#f4f2ef] shadow-none' : ''
                    } ${
                      event.borderColor ? `border-l-4 ${event.borderColor}` : 'border-l-4 border-transparent'
                    } ${event.type === 'KEYNOTE' ? 'border-l-4 border-[#f47a00] bg-[#fffbf7]' : ''}`}
                  >
                    <div className="flex items-center gap-2 font-gilroy text-[10px] font-black uppercase tracking-wider sm:text-xs">
                      {event.type === 'KEYNOTE' && <span className="text-[#f47a00]">📢</span>}
                      {event.type === 'WORKSHOP' && <span className="text-blue-500">💻</span>}
                      {event.type === 'TALK' && <span className="text-red-500">🎤</span>}
                      {event.type === 'PANEL' && <span className="text-teal-500">👥</span>}
                      {event.isBreak && <span className="text-gray-500">☕</span>}
                      <span className={event.typeColor}>{event.type}</span>
                    </div>

                    <h3 className="mt-3 font-gilroy text-lg font-black text-[#1c0d03] sm:text-xl">
                      {event.title}
                    </h3>

                    {event.speaker && (
                      <div className="mt-4 flex items-center gap-3">
                        <img
                          src={event.speaker.image}
                          alt={event.speaker.name}
                          className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                        />
                        <div>
                          <p className="font-gilroy text-sm font-bold text-[#1c0d03]">{event.speaker.name}</p>
                          <p className="font-gilroy-light text-[11px] font-semibold text-gray-500">{event.speaker.role}</p>
                        </div>
                      </div>
                    )}

                    {event.description && (
                      <p className="mt-4 font-gilroy-light text-xs font-semibold leading-6 text-gray-600 sm:text-sm">
                        {event.description}
                      </p>
                    )}

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
                      {event.room && (
                        <div className="flex items-center gap-1.5 font-gilroy-light text-xs font-semibold text-gray-500">
                          <FaMapMarkerAlt />
                          {event.room}
                        </div>
                      )}
                      {event.level && (
                        <span
                          className={`rounded px-2.5 py-1 font-gilroy text-[10px] font-black uppercase tracking-wider ${event.levelColor}`}
                        >
                          {event.level}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-20 rounded-2xl bg-white p-10 text-center shadow-[0_12px_40px_rgba(149,157,165,0.15)]">
          <h3 className="font-gilroy text-2xl font-black text-[#1c0d03] sm:text-3xl">Get the Complete Schedule</h3>
          <p className="mt-3 font-gilroy-light text-sm font-semibold text-gray-500 sm:text-base">
            Download the full agenda as PDF or add events to your calendar
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex items-center gap-2 rounded-full bg-[#f47a00] px-8 py-3.5 font-gilroy text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#d66a00]">
              <FaFilePdf /> Download PDF
            </button>
            <button className="flex items-center gap-2 rounded-full border-2 border-[#f47a00] bg-white px-8 py-3.5 font-gilroy text-sm font-black uppercase tracking-wide text-[#f47a00] transition hover:-translate-y-0.5 hover:bg-[#f47a00] hover:text-white">
              <FaCalendarPlus /> Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;