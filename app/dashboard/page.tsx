// "use client"

// import { useEffect, useState } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Overview } from "@/components/dashboard/overview"
// import { RecentOrders } from "@/components/dashboard/recent-orders"
// import { useAuth } from "@/lib/providers/auth-provider"

// export default function DashboardPage() {
//   const { user } = useAuth()
//   const [greeting, setGreeting] = useState("")

//   useEffect(() => {
//     const hour = new Date().getHours()
//     if (hour < 12) setGreeting("Good morning")
//     else if (hour < 18) setGreeting("Good afternoon")
//     else setGreeting("Good evening")
//   }, [])

//   return (
//     <div className="flex-1 space-y-4">
//       <div className="flex items-center justify-between">
//         <h2 className="text-3xl font-bold tracking-tight">
//           {greeting}, {user?.name}
//         </h2>
//       </div>

//       <Tabs defaultValue="overview" className="space-y-4">
//         <TabsList>
//           <TabsTrigger value="overview">Overview</TabsTrigger>
//           <TabsTrigger value="analytics">Analytics</TabsTrigger>
//         </TabsList>

//         <TabsContent value="overview" className="space-y-4">
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   {user?.role === "farmer" ? "Total Revenue" : "Total Spent"}
//                 </CardTitle>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="h-4 w-4 text-muted-foreground"
//                 >
//                   <path d="M12 2v20m8-10H4" />
//                 </svg>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">$2,350</div>
//                 <p className="text-xs text-muted-foreground">+20.1% from last month</p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   {user?.role === "farmer" ? "Products Listed" : "Orders Placed"}
//                 </CardTitle>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="h-4 w-4 text-muted-foreground"
//                 >
//                   <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//                   <circle cx="9" cy="7" r="4" />
//                   <path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.8-7.8 5.5 5.5 0 0 1 7.8 7.8Z" />
//                 </svg>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">{user?.role === "farmer" ? "23" : "12"}</div>
//                 <p className="text-xs text-muted-foreground">+180.1% from last month</p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="h-4 w-4 text-muted-foreground"
//                 >
//                   <rect width="20" height="14" x="2" y="5" rx="2" />
//                   <path d="M2 10h20" />
//                 </svg>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">8</div>
//                 <p className="text-xs text-muted-foreground">+19% from last month</p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   {user?.role === "farmer" ? "Customer Rating" : "Satisfaction"}
//                 </CardTitle>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="h-4 w-4 text-muted-foreground"
//                 >
//                   <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//                 </svg>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">4.8</div>
//                 <p className="text-xs text-muted-foreground">+0.2 from last month</p>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
//             <Card className="col-span-4">
//               <CardHeader>
//                 <CardTitle>Overview</CardTitle>
//               </CardHeader>
//               <CardContent className="pl-2">
//                 <Overview />
//               </CardContent>
//             </Card>
//             <Card className="col-span-3">
//               <CardHeader>
//                 <CardTitle>Recent Orders</CardTitle>
//                 <CardDescription>
//                   {user?.role === "farmer" ? "You have 5 new orders this week." : "Your recent purchases."}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <RecentOrders />
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>

//         <TabsContent value="analytics" className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>Analytics</CardTitle>
//               <CardDescription>Detailed analytics and insights coming soon.</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex h-[200px] items-center justify-center text-muted-foreground">
//                 Analytics dashboard will be available soon.
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }

// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  // const session = await getServerSession(authOptions);

  // if (!session) redirect("/auth/login");

  // const role = session.user.role;
  const role = "farmer";

  if (role === "farmer") redirect("/dashboard/farmer");
  if (role === "buyer") redirect("/dashboard/buyer");
  // if (role === "admin") redirect("/dashboard/admin");

  redirect("/unauthorized");
}
