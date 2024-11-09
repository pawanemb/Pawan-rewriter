import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader,
  TableRow 
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  Search, 
  Calendar, 
  MoreVertical, 
  Download, 
  Trash2, 
  Edit, 
  Share2,
  ArrowUpDown,
  Clock,
  ThumbsUp
} from "lucide-react"
import { formatDate } from "@/lib/utils"

// Type definitions
interface ContentHistory {
  id: string
  title: string
  dateModified: string
  status: "completed" | "optimizing" | "failed"
  score: number
  improvement: number
  wordCount: number
}

const HistoryPage = () => {
  // State management
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [filterStatus, setFilterStatus] = useState("all")

  // Mock data - replace with actual API call
  const historyData: ContentHistory[] = [
    {
      id: "1",
      title: "10 Tips for Better SEO Performance",
      dateModified: "2024-11-09T10:30:00",
      status: "completed",
      score: 92,
      improvement: 15,
      wordCount: 1200
    },
    {
      id: "2",
      title: "Understanding Digital Marketing",
      dateModified: "2024-11-09T09:15:00",
      status: "optimizing",
      score: 85,
      improvement: 10,
      wordCount: 800
    },
    {
      id: "3",
      title: "Content Strategy Guide 2024",
      dateModified: "2024-11-08T16:45:00",
      status: "completed",
      score: 95,
      improvement: 20,
      wordCount: 2500
    }
  ]

  // Filter and sort logic
  const filteredData = historyData
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus === "all" || item.status === filterStatus)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.dateModified).getTime() - new Date(a.dateModified).getTime()
        case "score":
          return b.score - a.score
        case "improvement":
          return b.improvement - a.improvement
        default:
          return 0
      }
    })

  // Action handlers
  const handleDelete = (id: string) => {
    console.log("Delete item:", id)
    // Implement delete functionality
  }

  const handleEdit = (id: string) => {
    console.log("Edit item:", id)
    // Implement edit functionality
  }

  const handleShare = (id: string) => {
    console.log("Share item:", id)
    // Implement share functionality
  }

  const handleDownload = (id: string) => {
    console.log("Download item:", id)
    // Implement download functionality
  }

  return (
    <div className="container mx-auto py-8 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Content History</h1>
          <p className="text-slate-500 mt-1">
            Track and manage your content optimization history
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input
                placeholder="Search content..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="optimizing">Optimizing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date Modified</SelectItem>
                <SelectItem value="score">Score</SelectItem>
                <SelectItem value="improvement">Improvement</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Content Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date Modified</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Score</TableHead>
                <TableHead className="text-right">Improvement</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell className="text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(item.dateModified)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={`
                      inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                      ${item.status === 'completed' ? 'bg-green-100 text-green-700' : ''}
                      ${item.status === 'optimizing' ? 'bg-blue-100 text-blue-700' : ''}
                      ${item.status === 'failed' ? 'bg-red-100 text-red-700' : ''}
                    `}>
                      {item.status === 'optimizing' && <Clock className="mr-1 h-3 w-3" />}
                      {item.status === 'completed' && <ThumbsUp className="mr-1 h-3 w-3" />}
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {item.score}%
                  </TableCell>
                  <TableCell className="text-right text-green-600">
                    +{item.improvement}%
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEdit(item.id)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleShare(item.id)}>
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDownload(item.id)}>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default HistoryPage