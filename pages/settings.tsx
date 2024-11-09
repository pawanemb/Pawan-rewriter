import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Settings,
  User,
  Key,
  Bell,
  Globe,
  Palette,
  Shield,
  Sliders,
  Save,
  AlertCircle
} from "lucide-react"

export default function SettingsPage() {
  // State for settings
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  // User settings
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john@example.com")
  const [language, setLanguage] = useState("en")
  const [theme, setTheme] = useState("system")

  // Optimization settings
  const [apiKey, setApiKey] = useState("")
  const [contentStyle, setContentStyle] = useState("professional")
  const [keywordDensity, setKeywordDensity] = useState("2")
  const [maxLength, setMaxLength] = useState("1000")

  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [optimizationAlerts, setOptimizationAlerts] = useState(true)
  const [weeklyReport, setWeeklyReport] = useState(false)

  const handleSave = async () => {
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSaved(true)
    setLoading(false)
    
    setTimeout(() => {
      setSaved(false)
    }, 3000)
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-slate-500 mt-1">
              Manage your account and optimization preferences
            </p>
          </div>
          <Button
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? (
              "Saving..."
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </div>

        {saved && (
          <Alert className="bg-green-50 text-green-700 border-green-200">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Settings saved successfully!
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="account">
              <User className="w-4 h-4 mr-2" />
              Account
            </TabsTrigger>
            <TabsTrigger value="optimization">
              <Sliders className="w-4 h-4 mr-2" />
              Optimization
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </TabsTrigger>
          </TabsList>

          {/* Account Settings */}
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account details and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Optimization Settings */}
          <TabsContent value="optimization">
            <Card>
              <CardHeader>
                <CardTitle>Optimization Settings</CardTitle>
                <CardDescription>
                  Configure your content optimization preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="apiKey">API Key</Label>
                  <Input
                    id="apiKey"
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your API key"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Content Style</Label>
                  <Select value={contentStyle} onValueChange={setContentStyle}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keywordDensity">Keyword Density (%)</Label>
                  <Input
                    id="keywordDensity"
                    type="number"
                    min="1"
                    max="5"
                    value={keywordDensity}
                    onChange={(e) => setKeywordDensity(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxLength">Maximum Length (words)</Label>
                  <Input
                    id="maxLength"
                    type="number"
                    value={maxLength}
                    onChange={(e) => setMaxLength(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Manage how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-slate-500">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Optimization Alerts</Label>
                    <p className="text-sm text-slate-500">
                      Get notified when optimization is complete
                    </p>
                  </div>
                  <Switch
                    checked={optimizationAlerts}
                    onCheckedChange={setOptimizationAlerts}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Report</Label>
                    <p className="text-sm text-slate-500">
                      Receive weekly optimization statistics
                    </p>
                  </div>
                  <Switch
                    checked={weeklyReport}
                    onCheckedChange={setWeeklyReport}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Key className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Shield className="w-4 h-4 mr-2" />
                    Enable Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto" variant="destructive">
                    Delete Account
                  </Button>
                </div>
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Protect your account by enabling two-factor authentication.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}