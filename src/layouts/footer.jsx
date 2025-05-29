export default function Footer() {
    return (
        <footer className="bg-gray-800 mt-auto w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Visualixir - Create beautiful animations
          </p>
        </div>
      </footer>
    )
}