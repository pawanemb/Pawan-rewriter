export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900">Blog Rewriter</h1>
        <p className="mt-4 text-gray-600">Welcome to our content optimization platform</p>
        <button 
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => alert('Getting started!')}
        >
          Get Started
        </button>
      </main>
    </div>
  )
}
