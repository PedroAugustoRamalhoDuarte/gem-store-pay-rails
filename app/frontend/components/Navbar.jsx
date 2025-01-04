import { Link, usePage } from "@inertiajs/react";

export default function Navbar() {
  const { currentUser } = usePage()?.props;

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Gem Store
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-800">
                  Welcome, {currentUser.name}
                </span>
                <Link
                  href="/session"
                  method="delete"
                  as="button"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <Link
                href="/session/new"
                className="text-gray-800 hover:text-gray-600"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
