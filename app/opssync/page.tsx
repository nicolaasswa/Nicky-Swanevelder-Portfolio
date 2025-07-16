import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { siteConfig } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail, Users, Calendar, ArrowRight } from "lucide-react" // Import Calendar and ArrowRight
import { Button } from "@/components/ui/button" // Import Button

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

async function OpsSyncPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav className="mx-6" />
          <div className="flex items-center gap-2">
            <UserNav
              email={session?.user?.email ?? ""}
              name={session?.user?.name ?? ""}
              image={session?.user?.image ?? ""}
            />
          </div>
        </div>
      </header>
      <Separator />
      <div className="container relative flex flex-1 flex-col gap-8 md:px-20 py-10">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Ops Sync Dashboard</h2>
          <p className="text-muted-foreground">Manage your operations and synchronize data across systems.</p>
        </div>
        <Separator />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={siteConfig.sidebarNav} />
          </aside>
          <div className="flex-1">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue</CardTitle>
                  <CardDescription>Last month revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Subscribers</CardTitle>
                  <CardDescription>Total subscribers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Active Now</CardTitle>
                  <CardDescription>Number of active users now</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+1223</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Yearly Income</CardTitle>
                  <CardDescription>Income over the year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$231,451.23</div>
                </CardContent>
              </Card>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full">
                    {/*  @ts-ignore */}
                    <AnalyticsChart data={data} type="line" />
                  </div>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">More info</CardFooter>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>You made 265 sales this month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between space-x-2">
                      <p className="text-sm font-medium">Sales</p>
                      <p className="text-sm text-muted-foreground">Amount</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between space-x-2">
                        <p>Subscription</p>
                        <p className="text-sm font-medium">$149.00</p>
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <p>License</p>
                        <p className="text-sm font-medium">$29.00</p>
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <p>Support</p>
                        <p className="text-sm font-medium">$9.00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <section className="bg-brand-gray-dark text-brand-gray-light py-16 text-center">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Systemize Your Operations?</h2>
            <p className="text-lg mb-8">
              Book a discovery session with our OpsSync experts and let's map out your path to operational excellence.
            </p>
            <Button
              asChild
              className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-4 rounded-full inline-flex items-center justify-center"
            >
              <a href="/contact">
                <Calendar className="h-5 w-5 mr-2" />
                Book My OpsSync Session
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
        </section>
      </div>
      <Separator />
      <footer className="flex items-center justify-between py-4">
        <div className="container flex flex-col items-center sm:flex-row">
          <p className="text-sm text-brand-gray-light">
            © {new Date().getFullYear()} Black Rocket Consulting. All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0 sm:space-x-6">
            <a
              href="https://twitter.com/shadcn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-gray-light hover:text-brand-yellow transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/company/black-rocket-consult/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-gray-light hover:text-brand-yellow transition-colors"
            >
              <Users className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
            <a
              href="mailto:support@example.com"
              className="text-sm text-brand-gray-light hover:text-brand-yellow transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default OpsSyncPage

const data = [
  {
    date: "Jan 01 2024",
    value: 68,
  },
  {
    date: "Jan 02 2024",
    value: 86,
  },
  {
    date: "Jan 03 2024",
    value: 65,
  },
  {
    date: "Jan 04 2024",
    value: 24,
  },
  {
    date: "Jan 05 2024",
    value: 43,
  },
  {
    date: "Jan 06 2024",
    value: 95,
  },
  {
    date: "Jan 07 2024",
    value: 51,
  },
  {
    date: "Jan 08 2024",
    value: 75,
  },
  {
    date: "Jan 09 2024",
    value: 83,
  },
  {
    date: "Jan 10 2024",
    value: 42,
  },
  {
    date: "Jan 11 2024",
    value: 84,
  },
  {
    date: "Jan 12 2024",
    value: 35,
  },
  {
    date: "Jan 13 2024",
    value: 96,
  },
  {
    date: "Jan 14 2024",
    value: 34,
  },
  {
    date: "Jan 15 2024",
    value: 41,
  },
  {
    date: "Jan 16 2024",
    value: 44,
  },
  {
    date: "Jan 17 2024",
    value: 98,
  },
  {
    date: "Jan 18 2024",
    value: 47,
  },
  {
    date: "Jan 19 2024",
    value: 73,
  },
  {
    date: "Jan 20 2024",
    value: 34,
  },
  {
    date: "Jan 21 2024",
    value: 74,
  },
  {
    date: "Jan 22 2024",
    value: 4,
  },
  {
    date: "Jan 23 2024",
    value: 89,
  },
  {
    date: "Jan 24 2024",
    value: 43,
  },
  {
    date: "Jan 25 2024",
    value: 92,
  },
  {
    date: "Jan 26 2024",
    value: 37,
  },
  {
    date: "Jan 27 2024",
    value: 82,
  },
  {
    date: "Jan 28 2024",
    value: 7,
  },
  {
    date: "Jan 29 2024",
    value: 63,
  },
  {
    date: "Jan 30 2024",
    value: 38,
  },
]

interface AnalyticsChartProps {
  data: { date: string; value: number }[]
  type: "line" | "bar"
}

const AnalyticsChart = ({ data, type }: AnalyticsChartProps) => {
  if (type === "line") {
    return <div>Analytics Chart</div>
  }
  return <div>Analytics Chart</div>
}
