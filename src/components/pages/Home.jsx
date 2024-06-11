import { Link } from "react-router-dom"
import { Menu, Origami } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { buttonVariants } from "../ui/button"
import { TracingBeam } from "../ui/tracing-beam"

const links = [
  {
    to: "#",
    text: "Pricing",
    className:
      "text-foreground transition-colors hover:text-foreground text-nowrap",
  },
  { to: "#", text: "About" },
  { to: "#", text: "Contact" },
  { to: "/signin", text: "Sign In" },
]

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <header className="p-10 md:px-6 lg:px-8 h-14 flex items-center justify-between w-full max-w-7xl mx-auto">
      <Link
        to="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Origami className="h-6 w-6" />
        <span className={"text-lg"}>Goldspan Labs</span>
      </Link>
      <nav className="hidden flex-col gap-6 text-lg md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {links.map((link) => (
          <Link
            key={link.text}
            className="font-bold hover:underline underline-offset-4 whitespace-nowrap"
            to={link.to}
          >
            {link.text}
          </Link>
        ))}
        <Link to="/signup" className={buttonVariants({ variant: "default" })}>
          Sign Up
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Origami className="h-6 w-6" />
              <span className="sr-only ">Goldspan Labs</span>
            </Link>
            {links.map((link, index) => (
              <Link key={index} to={link.to} className={link.className}>
                {link.text}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>

    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-8 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Providing modern tech solutions that are worth their weight in gold
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 py-4">
                  We specialize in providing expert tech services to help businesses thrive in the digital age
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="/signup"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                  })}
                >
                  <span className={"text-lg font-semibold"}>Get Started</span>
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <TracingBeam>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-8 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl py-2">
                  Gain deeper insights into your options trades
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed py-2 lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our portfolio tracking app provides advanced analytics and
                  reporting tools to help you make informed decisions for your
                  covered calls, put selling, and other options trading
                  strategies.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Options Portfolio Visualization
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Visualize your options portfolio&apos;s performance
                        with interactive charts and graphs, including Greeks
                        and other key metrics.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Options Risk Analysis
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Assess the risk profile of your options trades and
                        make informed decisions for your covered calls, put
                        selling, and other strategies.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Personalized Options Insights
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Receive tailored recommendations based on your options
                        trading goals, risk tolerance, and performance data.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-8 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-2 text-sm dark:bg-gray-800">
                  Portfolio Insights
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl py-2">
                  Powerful tools to manage your options portfolio
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed l py-2 g:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform simplifies trading performance tracking by
                  automating data import, grouping, and analysis, efficiently
                  managing daily transactions and adjustments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Streamlined Transaction Importing
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Quickly import transactions by uploading a CSV from
                        your brokerage to GammaWise, or manually enter trades
                        as needed.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Intelligent Position Management
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Automatically grouping trade legs for seamless
                        management, the platform supports customization for
                        any options strategy.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Comprehensive Post-Trade Analysis
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Access comprehensive metrics, win rates, and
                        profit/loss insights across your accounts.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
      </TracingBeam>
    </main>
  </div>
  )
}

export default Home