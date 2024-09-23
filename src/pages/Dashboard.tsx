import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Diameter, DollarSign, Dribbble, Home, Timer, TrendingUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

function Dashboard() {
  return (
    <>

      {/* Page Title */}
      <div className="flex items-center">
        <Home className="mr-2" />
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>



      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">



        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Matchs
            </CardTitle>
            <Dribbble className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>

          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex flex-row items-center">
              PadelSync Elo
              <TrendingUp className="ml-2 h-4 w-4 text-primary" />
            </CardTitle>
            <Diameter className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.22</div>
            <p className="text-xs text-muted-foreground">
              + 0.11 depuis le dernier match
            </p>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temps de jeu</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex w-full items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  2
                  <span className="text-sm font-normal text-muted-foreground">
                    jrs
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  18
                  <span className="text-sm font-normal text-muted-foreground">
                    hrs
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  14
                  <span className="text-sm font-normal text-muted-foreground">
                    min
                  </span>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex flex-row items-center">
              Dépenses du mois
              <TrendingUp className="ml-2 h-4 w-4 text-destructive" />
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />

          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">46.89€</div>
            <p className="text-xs text-muted-foreground">
              +20.1% par rapport au mois dernier
            </p>
          </CardContent>
        </Card>


        <Card x-chunk="dashboard-01-chunk-5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex flex-row items-center">
              Dépenses totales

            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />

          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">228.61€</div>

          </CardContent>
        </Card>


      </div>


      <div className="flex flex-1  justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">

        <div className="flex flex-col items-center gap-1 text-center">
          test
          <h3 className="text-2xl font-bold tracking-tight">
            You have no products
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a product.
          </p>
          <Button className="mt-4">Add Product</Button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;