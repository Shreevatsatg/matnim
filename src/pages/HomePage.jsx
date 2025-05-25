import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center w-full">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          <span className="block text-indigo-500">Visualixir</span>
          <span className="block text-white">Bring Math to Life</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300">
          Create beautiful mathematical animations with natural language using Manim and AI.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            to="/create"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get Started
          </Link>
          <Link
            to="/gallery"
            className="ml-4 px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
          >
            View Gallery
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-800 rounded-lg mt-12 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Features
          </h2>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-700 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Natural Language Input</h3>
                    <p className="mt-5 text-base text-gray-300">
                      Describe what you want to see and let AI generate the Manim code for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-700 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Beautiful Animations</h3>
                    <p className="mt-5 text-base text-gray-300">
                      Create professional-quality mathematical animations powered by Manim.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-700 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Save & Share</h3>
                    <p className="mt-5 text-base text-gray-300">
                      Download your animations or share them directly with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
