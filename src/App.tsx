import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";

const images = [
  process.env.PUBLIC_URL + "/images/photo1.jpg",
  process.env.PUBLIC_URL + "/images/photo.JPG",
  process.env.PUBLIC_URL + "/images/phot.JPG",
  process.env.PUBLIC_URL + "/images/pho.JPG",
  process.env.PUBLIC_URL + "/images/ph.JPG",
  process.env.PUBLIC_URL + "/images/photo6.jpg",
  process.env.PUBLIC_URL + "/images/p.JPG",
];

const buttons = [
  {
    label: "Location",
    href: "https://maps.app.goo.gl/HsaJfQynbo495Qxy7",
    color: "bg-blue-600",
    icon: (
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-4.418 0-8 1.79-8 4v3h16v-3c0-2.21-3.582-4-8-4z"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/96171584754",
    color: "bg-green-500",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.26-1.64A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.72.98.99-3.62-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.44.02 1.44 1.02 2.84 1.16 3.04.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100094409784331#",
    color: "bg-blue-800",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/choueibtires?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    color: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.545 1.459 2.488 2.516 2.216 3.689 2.158 4.966.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.33 2.45 1.387 3.507 1.057 1.057 2.23 1.329 3.507 1.387C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.33 3.507-1.387 1.057-1.057 1.329-2.23 1.387-3.507.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.33-2.45-1.387-3.507C19.398.402 18.225.13 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    color: "bg-black",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.75 2v14.25a2.25 2.25 0 11-2.25-2.25c.414 0 .75.336.75.75s-.336.75-.75.75a.75.75 0 100 1.5 3.75 3.75 0 003.75-3.75V7.5h2.25a4.5 4.5 0 004.5 4.5v-2.25a2.25 2.25 0 01-2.25-2.25H15V2h-2.25z" />
      </svg>
    ),
  },
];

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-4">
      <h1 className="text-3xl md:text-7xl font-extrabold text-white mb-8 drop-shadow-lg text-center font-noto-kufi-arabic text-white">
        مؤسسة نبيل شعيب و أولاده ابراهيم و مصطفى
      </h1>
      <h4 className="text-xl font-extrabold text-white mb-8 drop-shadow-lg text-center font-noto-kufi-arabic text-white">
        دواليب، جنوطة، غيار زيت...
      </h4>
      <div className="w-full max-w-2xl mb-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Tire ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
        {buttons.map((btn, idx) => (
          <a
            key={btn.label}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center px-6 py-3 rounded-lg text-lg font-semibold text-white shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${btn.color}`}
          >
            {btn.icon}
            {btn.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
