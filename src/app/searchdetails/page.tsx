"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import AppHeader from "@/components/ui/appheader";
import AppFooter from "@/components/ui/appfooter";

// Mock Data
const mockResults = [
  {
    id: 1,
    title: "Eat. Stay. Love.",
    description:
      "An all-in-one 6Experience at Fratelli Vineyards awaits when you book a flight to Pune.",
    image: "/images/eat_stay_love.webp",
  },
  {
    id: 2,
    title: "Sun Set Savour",
    description:
      "Enjoy an exclusive 6Experience at Sula Vineyards when you book a flight to Nashik.",
    image: "/images/sunset_savour.webp",
  },
  {
    id: 3,
    title: "Festivals From India",
    description: "Explore arts and culture festivals across India.",
    image: "/images/festivals.webp",
  },
  {
    id: 4,
    title: "Travel Wanderlust",
    description:
      "Travel to your next destination based on how you feel and what you like.",
    image: "/images/wanderlust.webp",
  },
  {
    id: 5,
    title: "Eat. Stay. Love.",
    description:
      "An all-in-one 6Experience at Fratelli Vineyards awaits when you book a flight to Pune.",
    image: "/images/eat_stay_love.webp",
  },
  {
    id: 6,
    title: "Sun Set Savour",
    description:
      "Enjoy an exclusive 6Experience at Sula Vineyards when you book a flight to Nashik.",
    image: "/images/sunset_savour.webp",
  },
  {
    id: 7,
    title: "Festivals From India",
    description: "Explore arts and culture festivals across India.",
    image: "/images/festivals.webp",
  },
  {
    id: 8,
    title: "Travel Wanderlust",
    description:
      "Travel to your next destination based on how you feel and what you like.",
    image: "/images/wanderlust.webp",
  },
  {
    id: 9,
    title: "Eat. Stay. Love.",
    description:
      "An all-in-one 6Experience at Fratelli Vineyards awaits when you book a flight to Pune.",
    image: "/images/eat_stay_love.webp",
  },
  {
    id: 10,
    title: "Sun Set Savour",
    description:
      "Enjoy an exclusive 6Experience at Sula Vineyards when you book a flight to Nashik.",
    image: "/images/sunset_savour.webp",
  },
  {
    id: 11,
    title: "Festivals From India",
    description: "Explore arts and culture festivals across India.",
    image: "/images/festivals.webp",
  },
  {
    id: 12,
    title: "Travel Wanderlust",
    description:
      "Travel to your next destination based on how you feel and what you like.",
    image: "/images/wanderlust.webp",
  },
];

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState(mockResults);

  useEffect(() => {
    if (query) {
      setResults(
        mockResults.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query]);

  return (
    <div className="flex flex-col h-screen">
    <div className="sticky top-0 z-10 bg-white shadow-md">
      <AppHeader />
    </div>

    <div className="flex flex-col flex-1 px-4 py-1 overflow-hidden">
      <div className="sticky top-0 z-10 bg-white py-1">
        <div className="flex items-center mb-2">
          <Link href="/" legacyBehavior>
            <a>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7"
                  />
                </svg>
              </button>
            </a>
          </Link>
          <h1 className="text-2xl font-semibold ml-4">Search results</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.length > 0 ? (
            results.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md w-full h-40 object-cover"
                />
                <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No results found for `{query}`.</p>
          )}
        </div>
      </div>
    </div>

    <div className="sticky bottom-0 z-10 bg-white shadow-md">
      <AppFooter />
    </div>
  </div>
  );
}
