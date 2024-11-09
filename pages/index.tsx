import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  PenLine,
  Wand2,
  Sparkles,
  ArrowRight,
  Loader2,
  CheckCircle,
  ChevronRight,
  Brain,
  Zap,
  Target
} from "lucide-react"

export default function HomePage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleOptimize = async () => {
    if (!title || !content) {
      alert("Please enter both title and content")
      return
    }

    setIsOptimizing(true)
    setProgress(0)

    // Simulate optimization process
    for (let i = 0; i <= 100; i += 20) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setProgress(i)
    }

    setIsOptimizing(false)
    // Add navigation to results page or show results
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Transform Your Content with{" "}
          <span className="text-blue-600 dark:text-blue-400">AI</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Optimize your blog content for better engagement, readability, and SEO performance
          using advanced AI technology.
        </p>
      </section>

      {/* Main Content Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Editor Section */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Content Editor</CardTitle>
            <CardDescription>
              Enter your content to begin optimization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                placeholder="Enter your blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isOptimizing}
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Enter your blog content here..."
                className="min-h-[300px]"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={isOptimizing}
              />
            </div>
            <div className="flex justify-end">
              <Button
                onClick={handleOptimize}
                disabled={isOptimizing || !title || !content}
                className="w-full sm:w-auto"
              >
                {isOptimizing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Optimizing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Optimize Content
                  </>
                )}
              </Button>
            </div>
            {isOptimizing && (
              <div className="space-y-2">
                <Progress value={progress} />
                <p className="text-sm text-center text-slate-500">
                  Optimizing your content... {progress}%
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Brain className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">AI-Powered Optimization</h3>
                  <p className="text-sm text-slate-500">
                    Advanced algorithms analyze and enhance your content
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">SEO Enhancement</h3>
                  <p className="text-sm text-slate-500">
                    Optimize for search engines and better rankings
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Instant Results</h3>
                  <p className="text-sm text-slate-500">
                    Get optimized content in seconds
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    1
                  </div>
                  <p className="text-sm">Enter your content</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    2
                  </div>
                  <p className="text-sm">AI analyzes your text</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    3
                  </div>
                  <p className="text-sm">Get optimized content</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold">10k+</div>
              <p className="text-sm text-slate-500">Articles Optimized</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold">85%</div>
              <p className="text-sm text-slate-500">Average Improvement</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold">5k+</div>
              <p className="text-sm text-slate-500">Happy Users</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold">99%</div>
              <p className="text-sm text-slate-500">Satisfaction Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials */}
      <Card>
        <CardHeader>
          <CardTitle>What Our Users Say</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <p className="text-sm italic">
                "This tool has completely transformed how I write content. The AI suggestions
                are spot-on!"
              </p>
              <div className="mt-2 text-sm font-medium">- Sarah Johnson</div>
              <div className="text-xs text-slate-500">Content Creator</div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <p className="text-sm italic">
                "Incredible improvement in my blog's engagement after using this tool."
              </p>
              <div className="mt-2 text-sm font-medium">- Mike Roberts</div>
              <div className="text-xs text-slate-500">Digital Marketer</div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <p className="text-sm italic">
                "The SEO optimization features are amazing. My posts rank much better now!"
              </p>
              <div className="mt-2 text-sm font-medium">- Emily Chen</div>
              <div className="text-xs text-slate-500">SEO Specialist</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}