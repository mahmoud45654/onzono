// components/Forms/SearchBar.js
import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

/**
 * SearchBar Component
 *
 * This component provides a form for users to search for flights or lounges.
 * It includes input fields for departure, destination, date, and switches
 * between flight and lounge search modes.
 *
 * @returns {JSX.Element} The SearchBar component.
 */
const SearchBar = () => {
  const { t } = useTranslation('search'); // تحديد namespace 'search'
  const { t: commonT } = useTranslation('common'); // لبعض المفاتيح العامة مثل المدن
  const router = useRouter();

  const [searchType, setSearchType] = useState('flight'); // 'flight' or 'lounge'
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [loungeLocation, setLoungeLocation] = useState('');

  /**
   * Handles the form submission for search.
   * Prevents default form submission and logs the search criteria.
   * In a real application, this would typically redirect to a search results page
   * or trigger an API call.
   * @param {Event} e - The form submission event.
   */
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchType === 'flight') {
      console.log(`Searching flights from ${from} to ${to} on ${date}`);
      router.push(`/search-results?type=flight&from=${from}&to=${to}&date=${date}`);
    } else {
      console.log(`Searching lounges in ${loungeLocation}`);
      router.push(`/lounges?location=${loungeLocation}`);
    }
  };

  return (
    <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 w-full max-w-4xl transform -translate-y-1/2 mt-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary-dark">
        {t('title')}
      </h2>

      {/* Search Type Tabs */}
      <div className="flex justify-center mb-6 border-b border-border-color">
        <button
          className={`px-6 py-3 text-lg font-semibold ${
            searchType === 'flight'
              ? 'border-b-4 border-primary-color text-primary-color'
              : 'text-text-secondary hover:text-primary-color'
          }`}
          onClick={() => setSearchType('flight')}
        >
          {t('flightsTab')}
        </button>
        <button
          className={`px-6 py-3 text-lg font-semibold ${
            searchType === 'lounge'
              ? 'border-b-4 border-primary-color text-primary-color'
              : 'text-text-secondary hover:text-primary-color'
          }`}
          onClick={() => setSearchType('lounge')}
        >
          {t('loungesTab')}
        </button>
      </div>

      <form onSubmit={handleSearch}>
        {searchType === 'flight' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* From Input */}
            <div>
              <label htmlFor="from" className="block text-sm font-semibold mb-2 text-text-secondary">
                {t('labelFrom')}
              </label>
              <input
                type="text"
                id="from"
                placeholder={t('placeholderFrom')}
                className="form-input w-full"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
              />
            </div>

            {/* To Input */}
            <div>
              <label htmlFor="to" className="block text-sm font-semibold mb-2 text-text-secondary">
                {t('labelTo')}
              </label>
              <input
                type="text"
                id="to"
                placeholder={t('placeholderTo')}
                className="form-input w-full"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
              />
            </div>

            {/* Date Input */}
            <div>
              <label htmlFor="date" className="block text-sm font-semibold mb-2 text-text-secondary">
                {t('labelDate')}
              </label>
              <input
                type="date"
                id="date"
                className="form-input w-full"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <label htmlFor="loungeLocation" className="block text-sm font-semibold mb-2 text-text-secondary">
              {t('lounges.placeholderLocation')}
            </label>
            <input
              type="text"
              id="loungeLocation"
              placeholder={t('lounges.placeholderLocation')}
              className="form-input w-full"
              value={loungeLocation}
              onChange={(e) => setLoungeLocation(e.target.value)}
              required
            />
          </div>
        )}


        {/* Search Button */}
        <div className="text-center">
          <button type="submit" className="btn w-full md:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            {t('button')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
