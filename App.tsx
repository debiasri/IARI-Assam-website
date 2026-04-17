import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Schools from "@/pages/Schools";
import Academics from "@/pages/Academics";
import Research from "@/pages/Research";
import Facilities from "@/pages/Facilities";
import Outreach from "@/pages/Outreach";
import Team from "@/pages/Team";
import Units from "@/pages/Units";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/schools" component={Schools} />
      <Route path="/academics" component={Academics} />
      <Route path="/research" component={Research} />
      <Route path="/facilities" component={Facilities} />
      <Route path="/outreach" component={Outreach} />
      <Route path="/team" component={Team} />
      <Route path="/units" component={Units} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
