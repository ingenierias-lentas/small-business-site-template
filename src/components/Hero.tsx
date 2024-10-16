import { ArrowRightIcon } from '@heroicons/react/24/outline';
import {inter, roboto, geistMono} from '@/app/utils/fonts';

export default function Hero() {
  return (
    <div className="bg-blue-600 text-white h-screen flex flex-col justify-center items-center">
      <h1 className={`${roboto} text-5xl font-bold`}>Welcome to Our Business</h1>
      <p className={`${inter} mt-4 text-lg`}>We help you achieve your goals with our services.</p>
      <a
        href="/contact"
        className={`${geistMono} mt-8 bg-white text-blue-600 font-semibold py-2 px-4 rounded-full inline-flex items-center`}
      >
        Get in Touch
        <ArrowRightIcon className="w-5 h-5 ml-2" />
      </a>
    </div>
  );
}
