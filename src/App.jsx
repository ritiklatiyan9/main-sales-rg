import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function App() {
  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/[0.02] blur-2xl" />
      </div>

      {/* Header */}
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="mx-auto mb-5 h-14 w-14 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center shadow-lg ring-4 ring-primary/10">
          <span className="text-primary-foreground font-bold text-xl tracking-tight">DG</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2.5">DG Sales Software</h1>
        <p className="text-muted-foreground text-sm max-w-xs mx-auto leading-relaxed">
          Select your portal to get started
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row items-stretch justify-center gap-5 w-full max-w-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
        <Card className="group relative w-full sm:w-1/2 overflow-hidden border border-border/60 bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative text-center pb-2 pt-7">
            <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center shadow-lg group-hover:shadow-primary/25 group-hover:scale-105 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <CardTitle className="text-lg font-semibold">Admin Panel</CardTitle>
            <CardDescription className="text-xs mt-1">Teams, leads, payments & reports</CardDescription>
          </CardHeader>
          <CardContent className="relative text-center pt-3 pb-7">
            <a href="https://adminrivergreen.vercel.app/login" target="_blank" rel="noopener noreferrer">
              <Button className="w-full shadow-sm" size="lg">Open Admin Panel</Button>
            </a>
          </CardContent>
        </Card>

        <Card className="group relative w-full sm:w-1/2 overflow-hidden border border-border/60 bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative text-center pb-2 pt-7">
            <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-gradient-to-br from-foreground/10 via-secondary to-muted flex items-center justify-center shadow-lg border border-border/50 group-hover:shadow-foreground/10 group-hover:scale-105 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-foreground/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <CardTitle className="text-lg font-semibold">Agent / Team Head</CardTitle>
            <CardDescription className="text-xs mt-1">Leads, follow-ups & targets</CardDescription>
          </CardHeader>
          <CardContent className="relative text-center pt-3 pb-7">
            <a href="https://rgsalesagent.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full shadow-sm" size="lg">Open Agent</Button>
            </a>
          </CardContent>
        </Card>
      </div>

      <p className="text-[11px] text-muted-foreground/60 mt-14 tracking-wide">&copy; 2026 DG Sales Software</p>
    </div>
  )
}

export default App
