import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white w-full">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 shadow-md w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-indigo-500 hover:text-3xl">Visualixir</span>
              </Link>
            </div>
            <div className="flex">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  to="/create" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  Create Animation
                </Link>
                <Link 
                  to="/gallery" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  Gallery
                </Link>
                <Link 
                  to="/about" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 mt-auto w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Visualixir - Create beautiful animations
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
