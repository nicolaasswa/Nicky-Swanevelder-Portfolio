import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function MontfortWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="w-full px-8 py-6">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left Navigation Items */}
          <div className="flex items-center space-x-12">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors uppercase tracking-wide"
            >
              Montfort Group
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              Montfort Trading
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              Montfort Capital
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              Montfort Maritime
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              Fort Energy
            </a>
          </div>

          {/* Right Navigation Items */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">News</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                10
              </Badge>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium text-gray-600 uppercase tracking-wide hover:text-gray-900"
            >
              Menu
              <Menu className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Content would go here */}
          <div className="h-96 flex items-center justify-center">
            <p className="text-gray-400 text-lg">Main content area</p>
          </div>
        </div>
      </main>
    </div>
  )
}
